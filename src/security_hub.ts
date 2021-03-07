import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface SubscribeOptions {
  readonly standardsArn?: string;
}

export interface AddSecurityHubMemberAccountOptions {
  readonly accountId: string;
  readonly email: string;
}

export class EnableSecurityHub extends Resource {
  public readonly region: string;

  constructor(scope: Construct, name: string ) {
    super(scope, name);

    this.region = new AWS.DataAwsRegion(this, 'currentRegion').name;

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
   * @param options Security Hub member options
   */
  public addSecurityHubMemberAccount(id: string, options: AddSecurityHubMemberAccountOptions): void {
    new AWS.SecurityhubMember(this, id, {
      invite: true,
      accountId: options.accountId,
      email: options.email,
    });
  }

  /**
   * Subscribe CIS benchmark
   * @param id id
   * @param options Securityhub Standards subscription options
   */
  public subscribeCisBenchmark(id: string, options: SubscribeOptions): void {
    new AWS.SecurityhubStandardsSubscription(this, id, {
      standardsArn: options.standardsArn || 'arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0'
    });
  }

  /**
   * Subscribe AWS foundational security best practices standard
   * @param id id
   * @param options Securityhub AWS foundational security best practices standard subscription options
   */
  public subscribeAwsFoundational(id: string, options: SubscribeOptions): void {
    new AWS.SecurityhubStandardsSubscription(this, id, {
      standardsArn: options.standardsArn || 'arn:aws:securityhub:' + this.region + '::standards/aws-foundational-security-best-practices/v/1.0.0'
    });
  }

  /**
   * Subscribe PCI DSS standard
   * @param id id
   * @param options Securityhub AWS foundational security best practices standard subscription options
   */
  public subscribePciDss(id: string, options: SubscribeOptions): void {
    new AWS.SecurityhubStandardsSubscription(this, id, {
      standardsArn: options.standardsArn || 'arn:aws:securityhub:' + this.region + '::standards/pci-dss/v/3.2.1'
    });
  }
}
