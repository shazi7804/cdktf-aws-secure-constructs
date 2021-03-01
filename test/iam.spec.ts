import { Testing, TerraformStack } from 'cdktf';
import { CreateAccountPasswordPolicy } from '../src';

describe('secure of IAM', () => {
  test('default account password policy', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new CreateAccountPasswordPolicy(stack, 'TestDefault', {});

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of account password policy', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const policy = new CreateAccountPasswordPolicy(stack, 'TestDefault', {});
    policy.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

