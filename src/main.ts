import { Resource } from 'cdktf';
import { Construct } from 'constructs';
import * as secure from './';

export interface BaseLineProps {
  readonly enableIamAccountPasswordPolicy?: boolean;
  readonly enableGuardduty?: boolean;
  readonly enableCloudtrail?: boolean;
  readonly enableEbsEncryption?: boolean;
  readonly enableVpcFlowLog?: boolean;
  readonly enableSecurityHub?: boolean;
  readonly vpcId?: string;
  readonly tags?: { [key: string]: string };
}

export class BaseLine extends Resource {
  constructor(scope: Construct, name: string, props: BaseLineProps ) {
    super(scope, name);

    if (props.enableCloudtrail) {
      new secure.EnableCloudTrail(this, 'EnableCloudTrail', {
        tags: props.tags
      });
    };

    if (props.enableIamAccountPasswordPolicy) {
      new secure.EnableAccountPasswordPolicy(this, 'EnableAccountPasswordPolicy', {});
    };

    if (props.enableEbsEncryption) {
      new secure.EnableEbsEncryption(this, 'EnableEbsEncryption');
    };

    if (props.enableGuardduty) {
      new secure.EnableGuardduty(this, 'EnableGuardduty', {
        tags: props.tags
      });
    };

    if (props.enableVpcFlowLog && props.vpcId) {
      new secure.EnableVpcFlowLog(this, 'EnableVpcFlowLog', {
        vpcId: props.vpcId,
        tags: props.tags
      });
    };

    if (props.enableSecurityHub) {
      new secure.EnableSecurityHub(this, 'EnableSecurityHub');
    };

  }
}
