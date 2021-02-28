import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import { CreateAccountPasswordPolicy } from 'cdktf-aws-secure';

export class AwsSecure extends Resource {
    constructor(scope: Construct, name: string ) {
        super(scope, name);

        const policy = new CreateAccountPasswordPolicy(this, 'DefaultAccountPwdPolicy', {})

        policy.addConfigRule()
    }
}