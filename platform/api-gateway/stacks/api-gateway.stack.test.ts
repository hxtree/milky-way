import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ApiGatewayStack } from './api-gateway.stack';

describe('ApiGatewayStack', () => {
  it('should match snapshot test', () => {
    const app = new cdk.App();
    const stack = new ApiGatewayStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
