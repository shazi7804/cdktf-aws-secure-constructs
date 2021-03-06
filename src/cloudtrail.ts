import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface EnableCloudTrailProps {
  readonly bucketName?: string;
  readonly bucketKeyPrefix?: string;
  readonly tags?: { [key: string]: string };
}

export class EnableCloudTrail extends Resource {
  constructor(scope: Construct, name: string, props: EnableCloudTrailProps ) {
    super(scope, name);

    const region = new AWS.DataAwsRegion(this, 'currentRegion').name;
    const accountId = new AWS.DataAwsCallerIdentity(this, 'currentAccount').accountId;

    if (props.bucketName) {
      new AWS.Cloudtrail(this, 'EnableCloudTrail', {
        name: 'trail-secure-' + this,
        s3BucketName: props.bucketName,
      });
    } else {
      const bucket = new AWS.S3Bucket(this, 'VpcFlogLogBucket', {
        bucket: 'cloudtrail-secure-' + region + '-' + accountId,
        tags: props.tags,
      });

      new AWS.Cloudtrail(this, 'EnableCloudTrail', {
        name: 'trail-secure-' + this,
        s3BucketName: bucket.id,
      });
    }

  }

  /**
   * Add Config Rule for Cloudtrail enabled
   * @param tags Config Rule tags
   */
  public addConfigRule(tags?: any): void {
    new AWS.ConfigConfigRule(this, 'EnableCloudTrailConfigRule', {
      name: 'CloudtrailEnabled',
      source: [{
        owner: 'AWS',
        sourceIdentifier: 'CLOUD_TRAIL_ENABLED',
      }],
      tags,
    });
  }
}
