[![NPM version](https://badge.fury.io/js/cdktf-aws-secure.svg)](https://badge.fury.io/js/cdktf-aws-secure)
[![PyPI version](https://badge.fury.io/py/cdktf-aws-secure.svg)](https://badge.fury.io/py/cdktf-aws-secure)
![Release](https://github.com/shazi7804/cdktf-aws-secure-constructs/workflows/Release/badge.svg)

# Terraform CDK - AWS Secure constructs

The Level 2 construct can be used to set up your AWS account with the reasonably secure configuration baseline. Internally it uses the [Terraform CDK](https://cdk.tf/) and the [AWS Provider](https://cdk.tf/provider/aws).

## Features

- Account password policies
- Cloudtrail
- Guardduty
- EBS encrypt default
- VPC flow log
- Security Hub
- Enable Config rules above

## Install

Just the constructs

```
npm install cdktf-aws-secure
```

## Examples

```ts
import { Construct } from 'constructs';
import { Resource } from 'cdktf';
import { secure } from 'cdktf-aws-secure';

export class AwsSecure extends Resource {
    constructor(scope: Construct, name: string ) {
        super(scope, name);

        // Enable account password policy
        const policy = new secure.CreateAccountPasswordPolicy(this, 'DefaultAccountPwdPolicy', {})

        // and also add Config rule.
        policy.addConfigRule()
    }
}
```

## Docs

See [API Docs](./API.md)