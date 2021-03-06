import { Testing, TerraformStack } from 'cdktf';
import { EnableSecurityHub } from '../src';

describe('secure of Security Hub', () => {
  test('default enable cloudtrail', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new EnableSecurityHub(stack, 'TestDefault');

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of Security Hub enabled', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const policy = new EnableSecurityHub(stack, 'TestDefault');
    policy.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Security Hub member', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const policy = new EnableSecurityHub(stack, 'TestDefault');
    policy.addSecurityHubMemberAccount('AddSecurityHubMemberAccount', {
      accountId: '0123456789',
      email: 'root@example.com',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

