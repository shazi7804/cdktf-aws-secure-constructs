import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface EnableAccountPasswordPolicyProps {
  readonly minimumPasswordLength?: number;
  readonly passwordReusePrevention?: number;
  readonly requireNumbers?: boolean;
  readonly requireUppercaseCharacters?: boolean;
  readonly requireLowercaseCharacters?: boolean;
  readonly requireSymbols?: boolean;
  readonly allowUsersToChangePassword?: boolean;
  readonly maxPasswordAge?: number;
}

export class EnableAccountPasswordPolicy extends Resource {
  public readonly expirePasswords: boolean;

  constructor(scope: Construct, name: string, props: EnableAccountPasswordPolicyProps ) {
    super(scope, name);

    const policy = new AWS.IamAccountPasswordPolicy(this, 'defaultAccountPasswordPolicy', {
      minimumPasswordLength: props.minimumPasswordLength ?? 14,
      passwordReusePrevention: props.passwordReusePrevention ?? 24,
      requireNumbers: props.requireNumbers ?? true,
      requireUppercaseCharacters: props.requireUppercaseCharacters ?? true,
      requireLowercaseCharacters: props.requireLowercaseCharacters ?? true,
      requireSymbols: props.requireSymbols ?? true,
      allowUsersToChangePassword: props.allowUsersToChangePassword ?? true,
      maxPasswordAge: props.maxPasswordAge ?? 90,
    });

    this.expirePasswords = policy.expirePasswords;
  }

  /**
   * Add Config Rule for Account Password policy
   * @param tags Config Rule tags
   */
  public addConfigRule(tags?: any): void {
    new AWS.ConfigConfigRule(this, 'defaultAccountPasswordPolicyConfigRule', {
      name: 'IAMAccountMFAEnabled',
      source: [{
        owner: 'AWS',
        sourceIdentifier: 'MFA_ENABLED_FOR_IAM_CONSOLE_ACCESS',
      }],
      tags,
    });
  }
}
