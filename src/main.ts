import { Resource } from 'cdktf';
import { Construct } from 'constructs';
import * as secure from './';

export interface GuarddutyOptions {
  readonly findingPublishingFrequency?: string;
  readonly members?: any;
  readonly tags?: { [key: string]: string };
}

export interface CloudTrailOptions {
  readonly bucketName?: string;
  readonly bucketKeyPrefix?: string;
  readonly tags?: { [key: string]: string };
}

export interface VpcFlowLogOptions {
  readonly vpcId: string;
  readonly logDestination?: string;
  readonly logDestinationType?: string;
  readonly logFormat?: string;
  readonly trafficType?: string;
  readonly tags?: { [key: string]: string };
}

export interface BaseLineProps {
  readonly enableIamAccountPasswordPolicy?: boolean;
  
  readonly enableGuardduty?: boolean;
  readonly guarddutyOptions?: GuarddutyOptions;
  
  readonly enableCloudtrail?: boolean;
  readonly cloudtrailOptions?: CloudTrailOptions;

  readonly enableEbsEncryption?: boolean;

  readonly enableVpcFlowLog?: boolean;
  readonly vpcFlowLogOptions?: VpcFlowLogOptions;
  
  readonly enableSecurityHub?: boolean;
}

export class BaseLine extends Resource {
  constructor(scope: Construct, name: string, props: BaseLineProps ) {
    super(scope, name);

    if (props.enableCloudtrail) {
      new secure.EnableCloudTrail(this, 'EnableCloudTrail', props.cloudtrailOptions as CloudTrailOptions);
    };

    if (props.enableIamAccountPasswordPolicy) {
      new secure.EnableAccountPasswordPolicy(this, 'EnableAccountPasswordPolicy', {});
    };

    if (props.enableEbsEncryption) {
      new secure.EnableEbsEncryption(this, 'EnableEbsEncryption');
    };

    if (props.enableGuardduty) {
      new secure.EnableGuardduty(this, 'EnableGuardduty',
        props.guarddutyOptions as GuarddutyOptions );
    };

    if (props.enableVpcFlowLog) {
      new secure.EnableVpcFlowLog(this, 'EnableVpcFlowLog', props.vpcFlowLogOptions as VpcFlowLogOptions);
    };

    if (props.enableSecurityHub) {
      new secure.EnableSecurityHub(this, 'EnableSecurityHub');
    };

  }
}
