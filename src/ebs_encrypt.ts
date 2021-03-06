import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export class EnableEbsEncryption extends Resource {
  constructor(scope: Construct, name: string ) {
    super(scope, name);

    new AWS.EbsEncryptionByDefault(this, 'EbsEncryptionByDefault', {
      enabled: true,
    });

  }

  /**
   * Add Config Rule for EBS default encrypt enabled
   * @param tags Config Rule tags
   */
  public addConfigRule(tags?: any): void {
    new AWS.ConfigConfigRule(this, 'EnableEbsEncryptionConfigRule', {
      name: 'EbsEncryptionEnabled',
      source: [{
        owner: 'AWS',
        sourceIdentifier: 'EC2_EBS_ENCRYPTION_BY_DEFAULT',
      }],
      tags,
    });
  }
}
