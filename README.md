[![NPM version](https://badge.fury.io/js/cdktf-aws-secure.svg)](https://badge.fury.io/js/cdktf-aws-secure)
[![PyPI version](https://badge.fury.io/py/cdktf-aws-secure.svg)](https://badge.fury.io/py/cdktf-aws-secure)
![Release](https://github.com/shazi7804/cdktf-aws-secure-constructs/workflows/Release/badge.svg)

# Terraform CDK - AWS Secure constructs

The Level 2 construct can be used to set up your AWS account with the reasonably secure configuration baseline. Internally it uses the [Terraform CDK](https://cdk.tf/) and the [AWS Provider](https://cdk.tf/provider/aws).

## Install

Just the constructs

```
npm install cdktf-aws-secure
```

## Example

- Enable account password policy by default

```ts
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
```

## Docs

See [API Docs](./API.md)