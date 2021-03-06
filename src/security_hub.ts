import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface AddSecurityHubMemberAccountOptions {
  readonly accountId: string;
  readonly email: string;
}

export class EnableSecurityHub extends Resource {
  constructor(scope: Construct, name: string ) {
    super(scope, name);

    new AWS.SecurityhubAccount(this, 'SecurityhubAccount');

  }

  /**
   * Add Config Rule for Security Hub enabled
   * @param tags Config Rule tags
   */
  public addConfigRule(tags?: any): void {
    new AWS.ConfigConfigRule(this, 'EnableSecurityHubConfigRule', {
      name: 'SecurityHubEnabled',
      source: [{
        owner: 'AWS',
        sourceIdentifier: 'SECURITYHUB_ENABLED',
      }],
      tags,
    });
  }

  /**
   * Add Member Account of Security Hub
   * @param id Security Hub member id
   * @param options Security Hub options
   */
  public addSecurityHubMemberAccount(id: string, options: AddSecurityHubMemberAccountOptions): void {
    new AWS.SecurityhubMember(this, id, {
      invite: true,
      accountId: options.accountId,
      email: options.email,
    });
  }
}
