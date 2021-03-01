import { Testing, TerraformStack } from 'cdktf';
import { CreateGuardduty } from '../src';

describe('secure of Guardduty', () => {
  test('default create Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new CreateGuardduty(stack, 'TestDefault', {});

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Add Config rule of enabled Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const gd = new CreateGuardduty(stack, 'TestDefault', {});
    gd.addConfigRule();

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Accept member account of Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const gd = new CreateGuardduty(stack, 'TestDefault', {});
    gd.acceptMemberAccount('acceptMemberAccount', {
      accountId: '1234567890',
      email: 'foo@bar.com',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });

  test('Invite Accepter member account of Guardduty', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    const gd = new CreateGuardduty(stack, 'TestDefault', {});
    gd.inviteAccepterMemberAccount('inviteAccepterMemberAccount', {
      masterAccountId: '1234567890',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

