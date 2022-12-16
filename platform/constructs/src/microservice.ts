import {Construct} from 'constructs';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Duration, Stack} from 'aws-cdk-lib';
import {LayerVersion, Runtime} from 'aws-cdk-lib/aws-lambda';
import {RetentionDays} from 'aws-cdk-lib/aws-logs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import {kebabCase} from 'lodash';
import {LambdaRestApi, Cors} from 'aws-cdk-lib/aws-apigateway';
import * as cdk from 'aws-cdk-lib';

export interface MicroserviceProps {
  //insert properties you wish to expose
}

export class Microservice extends Construct {
  private nodeJsFunction: NodejsFunction;
  private apiGateway: LambdaRestApi;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
    super(scope, id);

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const awsAccountId = Stack.of(this).account;
    const awsAccountRegion = Stack.of(this).region;
    const layerVerison = '1'; // TODO store in ssm?
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: `arn:aws:lambda:${awsAccountRegion}:${awsAccountId}:layer:NestJsAppLayer:${layerVerison}`,
      },
    );

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    this.nodeJsFunction = new NodejsFunction(this, 'nodejsFunction', {
      handler: 'handler',
      entry: 'src/index.ts',
      depsLockFilePath: '/usr/src/app/common/config/rush/pnpm-lock.yaml',
      runtime: Runtime.NODEJS_16_X,
      bundling: {
        dockerImage: Runtime.NODEJS_16_X.bundlingImage,
        keepNames: true,
        minify: false,
        target: 'es2021',
        sourceMap: true,

        // By default, all node modules referenced in your Lambda code will be bundled by esbuild.
        // Use the nodeModules prop under bundling to specify a list of modules that should not be bundled
        // but instead included in the node_modules folder of the Lambda package. This is useful
        // when working with native dependencies or when esbuild fails to bundle a module.
        externalModules: [
          'express',
          'reflect-metadata',
          'rxjs',
          'source-map-support',
          'aws-lambda',
          'class-transformer',
          'class-validator',
          '@nestjs/common',
          '@nestjs/core',
          '@nestjs/terminus',
          '@vendia/serverless-express',
          'express',
          'node-cache',
          'reflect-metadata',
          'rxjs',
        ],
      },
      layers: [nestJsAppLayer],
      memorySize: 1024, // 128 -- TODO reduce
      environment: {
        ACCOUNT_ID: awsAccountId,
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      // deadLetterQueueEnabled: true
    });

    const stage = process.env.STAGE ?? 'default';
    const stackName = Stack.of(this).stackName;

    // API Gateway resource
    this.apiGateway = new LambdaRestApi(this, 'Endpoint', {
      handler: this.nodeJsFunction,
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowOrigins: Cors.ALL_ORIGINS,
        allowCredentials: true,
        allowMethods: ['GET', 'POST'],
      },
    });

    const apiEndpoint = `${this.apiGateway.url}api`;
    const appName = stackName.replace('Stack', '');
    const apiEndpointkey = kebabCase(`${stage}-${appName}-base-url`);
    new ssm.StringParameter(this, 'Parameter', {
      description: `${appName} ${stage} API baseUrl`,
      parameterName: apiEndpointkey,
      stringValue: apiEndpoint,
    });

    new cdk.CfnOutput(this, apiEndpointkey, {
      value: apiEndpoint,
    });
  }

  getRestApi(): LambdaRestApi {
    return this.apiGateway;
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nodeJsFunction;
  }
}
