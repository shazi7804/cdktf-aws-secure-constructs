import { Testing, TerraformStack } from 'cdktf';
import * as secure from '../src';

describe('secure all', () => {
  test('default', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new secure.BaseLine(stack, 'TestDefault', {});

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  // test('enable all', () => {
  //   const app = Testing.app();
  //   const stack = new TerraformStack(app, 'test');

  //   new secure.BaseLine(stack, 'TestDefault', {
  //     enableIamAccountPasswordPolicy: true,
  //     enableGuardduty: true,
  //     enableCloudtrail: true,
  //     enableVpcFlowLog: true,
  //     vpcFlowLogOptions: {
  //       vpcId: 'vpc-1234'
  //     },
  //     enableSecurityHub: true,
  //   });

  //   expect(Testing.synth(stack)).toMatchSnapshot();
  // });
});

