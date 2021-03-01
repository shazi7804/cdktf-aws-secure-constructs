import { Resource } from 'cdktf';
import { Construct } from 'constructs';
import * as secure from './';

export interface BaseLineProps {
  readonly enableIamAccountPasswordPolicy?: boolean;
  readonly enableGuardduty?: boolean;
  readonly enableVpcFlowLog?: boolean;
  readonly vpcId: string;
}

export class BaseLine extends Resource {
  constructor(scope: Construct, name: string, props: BaseLineProps ) {
    super(scope, name);

    if (props.enableIamAccountPasswordPolicy) {
      new secure.CreateAccountPasswordPolicy(this, 'CreateAccountPasswordPolicy', {});
    };

    if (props.enableGuardduty) {
      new secure.CreateGuardduty(this, 'CreateGuardduty', {});
    };

    if (props.enableVpcFlowLog) {
      new secure.CreateVpcFlowLog(this, 'CreateVpcFlowLog', {
        vpcId: props.vpcId,
      });
    }

  }
}
