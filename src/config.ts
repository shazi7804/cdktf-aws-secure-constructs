import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface EnableConfigRecorderProps {
    readonly snsTopicName: string;
    readonly recorderName?: string;
    readonly deliveryChannelName?: string;
    readonly recordingGroupAllSupported?: boolean;
    readonly bucketName?: string;
    readonly bucketKeyPrefix?: string;
    readonly tags?: { [key: string]: string };
  }

export class EnableConfigRecorder extends Resource {
    constructor(scope: Construct, name: string, props: EnableConfigRecorderProps ) {
    super(scope, name);

    const accountId = new AWS.DataAwsCallerIdentity(this, 'currentAccount').accountId;
    const region = new AWS.DataAwsRegion(this, 'currentRegion').name;

    const role = new AWS.IamRole(this, 'RecorderAssumeRole', {
        name: 'config-recorder-' + region,
        assumeRolePolicy: JSON.stringify({
            Version: "2012-10-17",
            Statement: [{
                Effect: "Allow",
                Principal: {
                    Service: "config.amazonaws.com"
                },
                Action: "sts:AssumeRole",
                Sid: ""
            }]
        })
    });

    new AWS.IamRolePolicyAttachment(this, 'RecorderAssumeRoleAttachment', {
        role: role.name as string,
        policyArn: 'arn:aws:iam::aws:policy/service-role/AWS_ConfigRole'
    });

    const recorder = new AWS.ConfigConfigurationRecorder(this, 'ConfigRemediationConfiguration', {
       name: props.recorderName || 'config-secure-' + accountId,
       roleArn: role.arn,
       recordingGroup: [{
           allSupported: props.recordingGroupAllSupported || true,
       }]
    });

    if (props.bucketName) {
        new AWS.ConfigDeliveryChannel(this, 'ConfigDeliveryChannel', {
            name: props.deliveryChannelName || 'config-secure-channel-' + accountId,
            s3BucketName: props.bucketName as string,
            s3KeyPrefix: props.bucketKeyPrefix,
            snsTopicArn: props.snsTopicName,
        })
    } else {
        const bucket = new AWS.S3Bucket(this, 'ConfigDeliveryChannelBucket', {
            bucket: 'config-secure-channel' + region + '-' + accountId,
            tags: props.tags,
        });

        new AWS.ConfigDeliveryChannel(this, 'ConfigDeliveryChannel', {
            name: props.deliveryChannelName || 'config-secure-channel-' + accountId,
            s3BucketName: bucket.id,
            s3KeyPrefix: props.bucketKeyPrefix,
            snsTopicArn: props.snsTopicName
        })
    }

    new AWS.ConfigConfigurationRecorderStatus(this, 'ConfigConfigurationRecorderStatus', {
        name: recorder.id,
        isEnabled: true
    })

  }
}
