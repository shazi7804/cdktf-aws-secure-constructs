import { Testing, TerraformStack } from 'cdktf';
import { BaseLine } from '../src';

describe('default', () => {
  test('default account password policy', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new BaseLine(stack, 'TestDefault', {
      vpcId: 'vpc-1234567890',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

