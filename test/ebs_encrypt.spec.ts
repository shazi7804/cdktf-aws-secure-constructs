import { Testing, TerraformStack } from 'cdktf';
import { EnableEbsEncryption } from '../src';

describe('secure of EBS', () => {
  test('default enable ebs encrypt', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new EnableEbsEncryption(stack, 'TestDefault');

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of ebs encrypt enabled', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const policy = new EnableEbsEncryption(stack, 'TestDefault');
    policy.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

