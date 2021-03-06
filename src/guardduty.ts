import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface EnableGuarddutyProps {
  readonly findingPublishingFrequency?: string;
  readonly members?: any;
  readonly tags?: { [key: string]: string };
}

export interface AcceptMemberAccountOptions {
  readonly accountId: string;
  readonly email: string;
}

export interface InviteAccepterMemberAccountOptions {
  readonly masterAccountId: string;
}

export class EnableGuardduty extends Resource {
  public readonly id: string;

  constructor(scope: Construct, name: string, props: EnableGuarddutyProps ) {
    super(scope, name);

    const gd = new AWS.GuarddutyDetector(this, 'DefaultGuarddutyDetector', {
      enable: true,
      findingPublishingFrequency: props.findingPublishingFrequency,
    });

    this.id = gd.id;
  }

  /**
   * Add Config Rule for Guardduty
   * @param tags Config Rule tags
   */
  public addConfigRule(tags?: any): void {
    new AWS.ConfigConfigRule(this, 'GuarddutyEnabledCertralizedConfigRule', {
      name: 'GuarddutyEnabledCertralized',
      source: [{
        owner: 'AWS',
        sourceIdentifier: 'GUARDDUTY_ENABLED_CENTRALIZED',
      }],
      tags,
    });
  }

  /**
   * Accept Member Account
   * @param id Guardduty member id
   * @param options GuarddutyMember options
   */
  public acceptMemberAccount(id: string, options: AcceptMemberAccountOptions): void {
    new AWS.GuarddutyMember(this, id, {
      detectorId: this.id,
      invite: true,
      invitationMessage: 'please accept guardduty invitation',

      accountId: options.accountId,
      email: options.email,
      disableEmailNotification: false,
    });
  }

  /**
   * Accept Member Account
   * @param id Guardduty member id
   * @param options GuarddutyMember options
   */
  public inviteAccepterMemberAccount(id: string, options: InviteAccepterMemberAccountOptions): void {
    new AWS.GuarddutyInviteAccepter(this, id, {
      detectorId: this.id,
      masterAccountId: options.masterAccountId,
    });
  }
}
