import { Testing, TerraformStack } from 'cdktf';
import { EnableCloudTrail } from '../src';

describe('secure of CloudTrail', () => {
  test('default enable cloudtrail', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new EnableCloudTrail(stack, 'TestDefault', {});

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of CloudTrail enabled', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const policy = new EnableCloudTrail(stack, 'TestDefault', {});
    policy.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

