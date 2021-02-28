import { Resource } from 'cdktf';
import { Construct } from 'constructs';
import { CreateAccountPasswordPolicy } from './iam';


export class Secure extends Resource {
    public readonly expirePasswords: boolean;

    constructor(scope: Construct, name: string ) {
        super(scope, name);

        new CreateAccountPasswordPolicy(this, 'def', {})
    }
}
