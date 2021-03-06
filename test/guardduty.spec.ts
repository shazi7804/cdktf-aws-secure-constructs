import { Testing, TerraformStack } from 'cdktf';
import { EnableGuardduty } from '../src';

describe('secure of Guardduty', () => {
  test('default create Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new EnableGuardduty(stack, 'TestDefault', {});

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of enabled Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const gd = new EnableGuardduty(stack, 'TestDefault', {});
    gd.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Accept member account of Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const gd = new EnableGuardduty(stack, 'TestDefault', {});
    gd.acceptMemberAccount('acceptMemberAccount', {
      accountId: '1234567890',
      email: 'foo@bar.com',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Invite Accepter member account of Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const gd = new EnableGuardduty(stack, 'TestDefault', {});
    gd.inviteAccepterMemberAccount('inviteAccepterMemberAccount', {
      masterAccountId: '1234567890',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

