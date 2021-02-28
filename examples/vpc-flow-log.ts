import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import { CreateVpcFlowLog } from 'cdktf-aws-secure';

export class AwsSecure extends Resource {
    constructor(scope: Construct, name: string ) {
        super(scope, name);

        const vpcLog = new CreateVpcFlowLog(this, 'CreateVpcFlowLog', {
            vpcId: 'abc-12345'
        })

        vpcLog.addConfigRule()
    }
}