import { Testing, TerraformStack } from 'cdktf';
import { EnableAccountPasswordPolicy } from '../src';

describe('secure of IAM', () => {
  test('default account password policy', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new EnableAccountPasswordPolicy(stack, 'TestDefault', {});

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of account password policy', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const policy = new EnableAccountPasswordPolicy(stack, 'TestDefault', {});
    policy.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

