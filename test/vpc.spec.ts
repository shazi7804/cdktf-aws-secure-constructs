import { Testing, TerraformStack } from 'cdktf';
import { CreateVpcFlowLog } from '../src';

describe('secure of Vpc', () => {
  test('default enabled vpc flow log', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new CreateVpcFlowLog(stack, 'test', {
      vpcId: 'vpc-123456789',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('enabled vpc flow log export to CloudWatch logs', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new CreateVpcFlowLog(stack, 'test', {
      vpcId: 'vpc-123456789',
      logDestinationType: 'cloud-watch-logs',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of VPC enabled flow log', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const log = new CreateVpcFlowLog(stack, 'test', {
      vpcId: 'vpc-123456789',
    });
    log.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

