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

        ////// Samples
        const policy = new secure.EnableAccountPasswordPolicy(this, 'DefaultAccountPwdPolicy', {})
        
        policy.addConfigRule() // and also add Config rule.

        // enable guardduty
        new secure.EnableGuardduty(this, 'EnableGuardduty', {});

        // enable cloudtrail
        new secure.EnableCloudTrail(this, 'EnableCloudTrail', {});

        // enable ebs encrypt default
        new secure.EnableEbsEncryption(this, 'EnableEbsEncryption', {});new secure.EnableGuardduty(this, 'EnableGuardduty');

        // enable vpc flow log
        new secure.EnableVpcFlowLog(this, 'EnableVpcFlowLog', {
            vpcId: 'vpc-0123456789'
        });

        // enable security hub
        new secure.EnableSecurityHub(this, 'EnableSecurityHub');
    }
}
```

## Docs

See [API Docs](./API.md)