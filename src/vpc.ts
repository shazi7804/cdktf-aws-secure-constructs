import * as AWS from '@cdktf/provider-aws';
import { Resource } from 'cdktf';
import { Construct } from 'constructs';

export interface CreateVpcFlowLogProps {
  readonly vpcId: string;
  readonly logDestination?: string;
  readonly logDestinationType?: string;
  readonly logFormat?: string;
  readonly trafficType?: string;
  readonly tags?: { [key: string]: string };
}

export class CreateVpcFlowLog extends Resource {

  constructor(scope: Construct, name: string, props: CreateVpcFlowLogProps ) {
    super(scope, name);

    const region = new AWS.DataAwsRegion(this, 'currentRegion');
    const accountId = new AWS.DataAwsCallerIdentity(this, 'currentAccount').accountId;

    // Default destination export to S3
    if (props.logDestinationType == 's3' || props.logDestinationType === undefined) {
      const bucket = new AWS.S3Bucket(this, 'VpcFlogLogBucket', {
        bucket: 'vpc-flowlog-secure-' + region + accountId,
      });

      new AWS.FlowLog(this, 'VpcFlowLogToCw', {
        trafficType: props.trafficType ?? 'ALL',
        logDestinationType: 's3',
        logDestination: bucket.arn,
        vpcId: props.vpcId,
      });
    } else if (props.logDestinationType == 'cloud-watch-logs') {
    // Destination export to CloudWatch
      const role = new AWS.IamRole(this, 'FlowLogRole', {
        assumeRolePolicy: JSON.stringify({
          Version: '2012-10-17',
          Statement: [{
            Effect: 'Allow',
            Principal: {
              Service: 'vpc-flow-logs.amazonaws.com',
            },
            Action: 'sts:AssumeRole',
          }],
        }),
        tags: props.tags,
      });

      const policy = new AWS.IamPolicy(this, 'FlowLogRolePolicy', {
        description: 'This policy of VPC flow log policy and create by cdktf-aws-secure construct',
        policy: JSON.stringify({
          Version: '2012-10-17',
          Statement: [{
            Action: [
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:PutLogEvents',
              'logs:DescribeLogGroups',
              'logs:DescribeLogStreams',
            ],
            Resource: '*',
            Effect: 'Allow',
          }],
        }),
      });

      new AWS.IamPolicyAttachment(this, 'FlowLogPolicyAttachRole', {
        name: 'FlowLogPolicyAttachRole',
        policyArn: policy.arn,
        roles: [role.name],
      });

      const cwLogGroup = new AWS.CloudwatchLogGroup(this, 'VpcFlowLogGroup', {});

      new AWS.FlowLog(this, 'VpcFlowLogToCw', {
        iamRoleArn: role.arn,
        trafficType: props.trafficType ?? 'ALL',
        logDestinationType: 'cloud-watch-logs',
        logDestination: cwLogGroup.arn,
        vpcId: props.vpcId,
      });
    }
  }

  /**
         * addConfigRule
         */
  public addConfigRule(): void {
    new AWS.ConfigConfigRule(this, 'VpcFlowLogEnabledConfigRule', {
      name: 'VpcFlowLogsEnabled',
      source: [{
        owner: 'AWS',
        sourceIdentifier: 'VPC_FLOW_LOGS_ENABLED',
      }],
    });
  }
}
