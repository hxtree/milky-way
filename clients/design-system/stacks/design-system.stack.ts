import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { RemovalPolicy, StackProps } from 'aws-cdk-lib';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import {
  Distribution,
  OriginAccessIdentity,
  ResponseHeadersPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

export class DesignSystemStack extends cdk.Stack {
  public parentDomainName: string;
  public acmCertificateArn: string;
  public hostedZoneId: string;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // s3 bucket
    const awsAccountId = cdk.Stack.of(this).account;
    const stageName = process.env.STAGE_NAME ?? 'default';
    const bucket = new Bucket(this, `${stageName}-design-system`, {
      bucketName: `${awsAccountId}-${stageName}-design-system-bucket`,
      accessControl: BucketAccessControl.PRIVATE,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      'OriginAccessIdentity',
    );
    bucket.grantRead(originAccessIdentity);

    this.acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-orgformation-certs-wildcard-cert1-arn`,
      {
        parameterName: 'orgformation-certs-wildcard-cert1-arn',
      },
    ).stringValue;

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-acm-certificate`,
      this.acmCertificateArn,
    );

    // DNS

    // fetch parameters from SSM Parameter Store
    this.parentDomainName = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-ssm-domain-name`,
      {
        parameterName: 'DOMAIN_NAME',
      },
    ).stringValue;

    // Retrieve parameters from SSM Parameter Store
    this.hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-hosted-zone-id`,
      {
        parameterName: 'my-domains-hosted-zone-id',
      },
    ).stringValue;

    const subdomainName = 'design';

    const domainName = `${subdomainName}.${this.parentDomainName}`;

    // cloudfront distribution
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const cloudFrontDistribution = new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(bucket, { originAccessIdentity }),
        // todo lock down CORS later
        responseHeadersPolicy:
          ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT,
      },
      domainNames: [domainName],
      certificate,
    });

    // bucket resource
    new BucketDeployment(this, 'BucketDeployment', {
      destinationBucket: bucket,
      sources: [Source.asset('./storybook-static')],
      retainOnDelete: false,
    });

    const hostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hosted-zone`,
      {
        hostedZoneId: this.hostedZoneId,
        zoneName: domainName,
      },
    );

    // Create a record set for the custom domain pointing to the CloudFront distribution
    new route53.ARecord(this, 'AliasRecord', {
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(cloudFrontDistribution),
      ),
      zone: hostedZone,
    });

    new cdk.CfnOutput(this, 'Cloud Front Distribution', {
      value: cloudFrontDistribution.domainName,
    });

    new cdk.CfnOutput(this, 'Domain Name', {
      value: `https://${domainName}`,
    });
  }
}

// import { Construct } from 'constructs';
// import * as cdk from 'aws-cdk-lib';
// import { RemovalPolicy, StackProps } from 'aws-cdk-lib';
// import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
// import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
// import {
//   Distribution,
//   OriginAccessIdentity,
//   ResponseHeadersPolicy,
// } from 'aws-cdk-lib/aws-cloudfront';
// import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
// // import * as s3 from 'aws-cdk-lib/aws-s3';
// // import * as route53 from 'aws-cdk-lib/aws-route53';

// export class DesignSystemStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);

//     const awsAccountId = cdk.Stack.of(this).account;
//     const stageName = process.env.STAGE_NAME ?? 'default';
//     const bucket = new Bucket(this, `${stageName}-design-system`, {
//       bucketName: `${awsAccountId}-${stageName}-design-system-bucket`,
//       accessControl: BucketAccessControl.PRIVATE,
//       removalPolicy: RemovalPolicy.DESTROY,
//     });

//     const originAccessIdentity = new OriginAccessIdentity(
//       this,
//       'OriginAccessIdentity',
//     );
//     bucket.grantRead(originAccessIdentity);

//     // cloudfront distribution
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const distribution = new Distribution(this, 'Distribution', {
//       defaultRootObject: 'index.html',
//       defaultBehavior: {
//         origin: new S3Origin(bucket, { originAccessIdentity }),
//         // todo lock down CORS later
//         responseHeadersPolicy:
//           ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT,
//       },
//     });

//     // bucket resource
//     new BucketDeployment(this, 'BucketDeployment', {
//       destinationBucket: bucket,
//       sources: [Source.asset('./storybook-static')],
//       retainOnDelete: false,
//     });

//     new cdk.CfnOutput(this, 'Domain Name', {
//       value: distribution.domainName,
//     });

//     // TODO assign to url
//     // const recordName = 'monitor';
//     // const domainName = 'ouxsoft.com';

//     // const bucketWebsite = new s3.Bucket(this, 'BucketWebsite', {
//     //   bucketName: [recordName, domainName].join('.'), // www.example.com
//     //   publicReadAccess: true,
//     //   websiteIndexDocument: 'index.html',
//     // });

//     // const zone = route53.HostedZone.fromLookup(this, 'Zone', {domainName}); // example.com

//     // new route53.ARecord(this, 'AliasRecord', {
//     //   zone,
//     //   recordName, // www
//     //   target: route53.RecordTarget.fromAlias(
//     //     new targets.BucketWebsiteTarget(bucketWebsite),
//     //   ),
//     // });
//   }
// }
