# API Reference

**Classes**

Name|Description
----|-----------
[BaseLine](#cdktf-aws-secure-baseline)|*No description*
[EnableAccountPasswordPolicy](#cdktf-aws-secure-enableaccountpasswordpolicy)|*No description*
[EnableCloudTrail](#cdktf-aws-secure-enablecloudtrail)|*No description*
[EnableConfigRecorder](#cdktf-aws-secure-enableconfigrecorder)|*No description*
[EnableEbsEncryption](#cdktf-aws-secure-enableebsencryption)|*No description*
[EnableGuardduty](#cdktf-aws-secure-enableguardduty)|*No description*
[EnableSecurityHub](#cdktf-aws-secure-enablesecurityhub)|*No description*
[EnableVpcFlowLog](#cdktf-aws-secure-enablevpcflowlog)|*No description*


**Structs**

Name|Description
----|-----------
[AcceptMemberAccountOptions](#cdktf-aws-secure-acceptmemberaccountoptions)|*No description*
[AddSecurityHubMemberAccountOptions](#cdktf-aws-secure-addsecurityhubmemberaccountoptions)|*No description*
[BaseLineProps](#cdktf-aws-secure-baselineprops)|*No description*
[CloudTrailOptions](#cdktf-aws-secure-cloudtrailoptions)|*No description*
[EnableAccountPasswordPolicyProps](#cdktf-aws-secure-enableaccountpasswordpolicyprops)|*No description*
[EnableCloudTrailProps](#cdktf-aws-secure-enablecloudtrailprops)|*No description*
[EnableConfigRecorderProps](#cdktf-aws-secure-enableconfigrecorderprops)|*No description*
[EnableGuarddutyProps](#cdktf-aws-secure-enableguarddutyprops)|*No description*
[EnableVpcFlowLogProps](#cdktf-aws-secure-enablevpcflowlogprops)|*No description*
[GuarddutyOptions](#cdktf-aws-secure-guarddutyoptions)|*No description*
[InviteAccepterMemberAccountOptions](#cdktf-aws-secure-inviteacceptermemberaccountoptions)|*No description*
[SubscribeOptions](#cdktf-aws-secure-subscribeoptions)|*No description*
[VpcFlowLogOptions](#cdktf-aws-secure-vpcflowlogoptions)|*No description*



## class BaseLine  <a id="cdktf-aws-secure-baseline"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new BaseLine(scope: Construct, name: string, props: BaseLineProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[BaseLineProps](#cdktf-aws-secure-baselineprops)</code>)  *No description*
  * **cloudtrailOptions** (<code>[CloudTrailOptions](#cdktf-aws-secure-cloudtrailoptions)</code>)  *No description* __*Optional*__
  * **enableCloudtrail** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableEbsEncryption** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableGuardduty** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableIamAccountPasswordPolicy** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableSecurityHub** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableVpcFlowLog** (<code>boolean</code>)  *No description* __*Optional*__
  * **guarddutyOptions** (<code>[GuarddutyOptions](#cdktf-aws-secure-guarddutyoptions)</code>)  *No description* __*Optional*__
  * **vpcFlowLogOptions** (<code>[VpcFlowLogOptions](#cdktf-aws-secure-vpcflowlogoptions)</code>)  *No description* __*Optional*__




## class EnableAccountPasswordPolicy  <a id="cdktf-aws-secure-enableaccountpasswordpolicy"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableAccountPasswordPolicy(scope: Construct, name: string, props: EnableAccountPasswordPolicyProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[EnableAccountPasswordPolicyProps](#cdktf-aws-secure-enableaccountpasswordpolicyprops)</code>)  *No description*
  * **allowUsersToChangePassword** (<code>boolean</code>)  *No description* __*Optional*__
  * **maxPasswordAge** (<code>number</code>)  *No description* __*Optional*__
  * **minimumPasswordLength** (<code>number</code>)  *No description* __*Optional*__
  * **passwordReusePrevention** (<code>number</code>)  *No description* __*Optional*__
  * **requireLowercaseCharacters** (<code>boolean</code>)  *No description* __*Optional*__
  * **requireNumbers** (<code>boolean</code>)  *No description* __*Optional*__
  * **requireSymbols** (<code>boolean</code>)  *No description* __*Optional*__
  * **requireUppercaseCharacters** (<code>boolean</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**expirePasswords** | <code>boolean</code> | <span></span>

### Methods


#### addConfigRule(tags?) <a id="cdktf-aws-secure-enableaccountpasswordpolicy-addconfigrule"></a>

Add Config Rule for Account Password policy.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.






## class EnableCloudTrail  <a id="cdktf-aws-secure-enablecloudtrail"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableCloudTrail(scope: Construct, name: string, props: EnableCloudTrailProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[EnableCloudTrailProps](#cdktf-aws-secure-enablecloudtrailprops)</code>)  *No description*
  * **bucketKeyPrefix** (<code>string</code>)  *No description* __*Optional*__
  * **bucketName** (<code>string</code>)  *No description* __*Optional*__
  * **tags** (<code>Map<string, string></code>)  *No description* __*Optional*__


### Methods


#### addConfigRule(tags?) <a id="cdktf-aws-secure-enablecloudtrail-addconfigrule"></a>

Add Config Rule for Cloudtrail enabled.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.






## class EnableConfigRecorder  <a id="cdktf-aws-secure-enableconfigrecorder"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableConfigRecorder(scope: Construct, name: string, props: EnableConfigRecorderProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[EnableConfigRecorderProps](#cdktf-aws-secure-enableconfigrecorderprops)</code>)  *No description*
  * **snsTopicName** (<code>string</code>)  *No description* 
  * **bucketKeyPrefix** (<code>string</code>)  *No description* __*Optional*__
  * **bucketName** (<code>string</code>)  *No description* __*Optional*__
  * **deliveryChannelName** (<code>string</code>)  *No description* __*Optional*__
  * **recorderName** (<code>string</code>)  *No description* __*Optional*__
  * **recordingGroupAllSupported** (<code>boolean</code>)  *No description* __*Optional*__
  * **tags** (<code>Map<string, string></code>)  *No description* __*Optional*__




## class EnableEbsEncryption  <a id="cdktf-aws-secure-enableebsencryption"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableEbsEncryption(scope: Construct, name: string)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*


### Methods


#### addConfigRule(tags?) <a id="cdktf-aws-secure-enableebsencryption-addconfigrule"></a>

Add Config Rule for EBS default encrypt enabled.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.






## class EnableGuardduty  <a id="cdktf-aws-secure-enableguardduty"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableGuardduty(scope: Construct, name: string, props: EnableGuarddutyProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[EnableGuarddutyProps](#cdktf-aws-secure-enableguarddutyprops)</code>)  *No description*
  * **findingPublishingFrequency** (<code>string</code>)  *No description* __*Optional*__
  * **members** (<code>any</code>)  *No description* __*Optional*__
  * **tags** (<code>Map<string, string></code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**id** | <code>string</code> | <span></span>

### Methods


#### acceptMemberAccount(id, options) <a id="cdktf-aws-secure-enableguardduty-acceptmemberaccount"></a>

Accept Member Account.

```ts
acceptMemberAccount(id: string, options: AcceptMemberAccountOptions): void
```

* **id** (<code>string</code>)  Guardduty member id.
* **options** (<code>[AcceptMemberAccountOptions](#cdktf-aws-secure-acceptmemberaccountoptions)</code>)  GuarddutyMember options.
  * **accountId** (<code>string</code>)  *No description* 
  * **email** (<code>string</code>)  *No description* 




#### addConfigRule(tags?) <a id="cdktf-aws-secure-enableguardduty-addconfigrule"></a>

Add Config Rule for Guardduty.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.




#### inviteAccepterMemberAccount(id, options) <a id="cdktf-aws-secure-enableguardduty-inviteacceptermemberaccount"></a>

Accept Member Account.

```ts
inviteAccepterMemberAccount(id: string, options: InviteAccepterMemberAccountOptions): void
```

* **id** (<code>string</code>)  Guardduty member id.
* **options** (<code>[InviteAccepterMemberAccountOptions](#cdktf-aws-secure-inviteacceptermemberaccountoptions)</code>)  GuarddutyMember options.
  * **masterAccountId** (<code>string</code>)  *No description* 






## class EnableSecurityHub  <a id="cdktf-aws-secure-enablesecurityhub"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableSecurityHub(scope: Construct, name: string)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**region** | <code>string</code> | <span></span>

### Methods


#### addConfigRule(tags?) <a id="cdktf-aws-secure-enablesecurityhub-addconfigrule"></a>

Add Config Rule for Security Hub enabled.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.




#### addSecurityHubMemberAccount(id, options) <a id="cdktf-aws-secure-enablesecurityhub-addsecurityhubmemberaccount"></a>

Add Member Account of Security Hub.

```ts
addSecurityHubMemberAccount(id: string, options: AddSecurityHubMemberAccountOptions): void
```

* **id** (<code>string</code>)  Security Hub member id.
* **options** (<code>[AddSecurityHubMemberAccountOptions](#cdktf-aws-secure-addsecurityhubmemberaccountoptions)</code>)  Security Hub member options.
  * **accountId** (<code>string</code>)  *No description* 
  * **email** (<code>string</code>)  *No description* 




#### subscribeAwsFoundational(id, options) <a id="cdktf-aws-secure-enablesecurityhub-subscribeawsfoundational"></a>

Subscribe AWS foundational security best practices standard.

```ts
subscribeAwsFoundational(id: string, options: SubscribeOptions): void
```

* **id** (<code>string</code>)  id.
* **options** (<code>[SubscribeOptions](#cdktf-aws-secure-subscribeoptions)</code>)  Securityhub AWS foundational security best practices standard subscription options.
  * **standardsArn** (<code>string</code>)  *No description* __*Optional*__




#### subscribeCisBenchmark(id, options) <a id="cdktf-aws-secure-enablesecurityhub-subscribecisbenchmark"></a>

Subscribe CIS benchmark.

```ts
subscribeCisBenchmark(id: string, options: SubscribeOptions): void
```

* **id** (<code>string</code>)  id.
* **options** (<code>[SubscribeOptions](#cdktf-aws-secure-subscribeoptions)</code>)  Securityhub Standards subscription options.
  * **standardsArn** (<code>string</code>)  *No description* __*Optional*__




#### subscribePciDss(id, options) <a id="cdktf-aws-secure-enablesecurityhub-subscribepcidss"></a>

Subscribe PCI DSS standard.

```ts
subscribePciDss(id: string, options: SubscribeOptions): void
```

* **id** (<code>string</code>)  id.
* **options** (<code>[SubscribeOptions](#cdktf-aws-secure-subscribeoptions)</code>)  Securityhub AWS foundational security best practices standard subscription options.
  * **standardsArn** (<code>string</code>)  *No description* __*Optional*__






## class EnableVpcFlowLog  <a id="cdktf-aws-secure-enablevpcflowlog"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new EnableVpcFlowLog(scope: Construct, name: string, props: EnableVpcFlowLogProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[EnableVpcFlowLogProps](#cdktf-aws-secure-enablevpcflowlogprops)</code>)  *No description*
  * **vpcId** (<code>string</code>)  *No description* 
  * **logDestination** (<code>string</code>)  *No description* __*Optional*__
  * **logDestinationType** (<code>string</code>)  *No description* __*Optional*__
  * **logFormat** (<code>string</code>)  *No description* __*Optional*__
  * **tags** (<code>Map<string, string></code>)  *No description* __*Optional*__
  * **trafficType** (<code>string</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**bucketArn**? | <code>string</code> | __*Optional*__
**cwLogGroupArn**? | <code>string</code> | __*Optional*__

### Methods


#### addConfigRule(tags?) <a id="cdktf-aws-secure-enablevpcflowlog-addconfigrule"></a>

Add Config Rule for Vpc flow log.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.






## struct AcceptMemberAccountOptions  <a id="cdktf-aws-secure-acceptmemberaccountoptions"></a>






Name | Type | Description 
-----|------|-------------
**accountId** | <code>string</code> | <span></span>
**email** | <code>string</code> | <span></span>



## struct AddSecurityHubMemberAccountOptions  <a id="cdktf-aws-secure-addsecurityhubmemberaccountoptions"></a>






Name | Type | Description 
-----|------|-------------
**accountId** | <code>string</code> | <span></span>
**email** | <code>string</code> | <span></span>



## struct BaseLineProps  <a id="cdktf-aws-secure-baselineprops"></a>






Name | Type | Description 
-----|------|-------------
**cloudtrailOptions**? | <code>[CloudTrailOptions](#cdktf-aws-secure-cloudtrailoptions)</code> | __*Optional*__
**enableCloudtrail**? | <code>boolean</code> | __*Optional*__
**enableEbsEncryption**? | <code>boolean</code> | __*Optional*__
**enableGuardduty**? | <code>boolean</code> | __*Optional*__
**enableIamAccountPasswordPolicy**? | <code>boolean</code> | __*Optional*__
**enableSecurityHub**? | <code>boolean</code> | __*Optional*__
**enableVpcFlowLog**? | <code>boolean</code> | __*Optional*__
**guarddutyOptions**? | <code>[GuarddutyOptions](#cdktf-aws-secure-guarddutyoptions)</code> | __*Optional*__
**vpcFlowLogOptions**? | <code>[VpcFlowLogOptions](#cdktf-aws-secure-vpcflowlogoptions)</code> | __*Optional*__



## struct CloudTrailOptions  <a id="cdktf-aws-secure-cloudtrailoptions"></a>






Name | Type | Description 
-----|------|-------------
**bucketKeyPrefix**? | <code>string</code> | __*Optional*__
**bucketName**? | <code>string</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__



## struct EnableAccountPasswordPolicyProps  <a id="cdktf-aws-secure-enableaccountpasswordpolicyprops"></a>






Name | Type | Description 
-----|------|-------------
**allowUsersToChangePassword**? | <code>boolean</code> | __*Optional*__
**maxPasswordAge**? | <code>number</code> | __*Optional*__
**minimumPasswordLength**? | <code>number</code> | __*Optional*__
**passwordReusePrevention**? | <code>number</code> | __*Optional*__
**requireLowercaseCharacters**? | <code>boolean</code> | __*Optional*__
**requireNumbers**? | <code>boolean</code> | __*Optional*__
**requireSymbols**? | <code>boolean</code> | __*Optional*__
**requireUppercaseCharacters**? | <code>boolean</code> | __*Optional*__



## struct EnableCloudTrailProps  <a id="cdktf-aws-secure-enablecloudtrailprops"></a>






Name | Type | Description 
-----|------|-------------
**bucketKeyPrefix**? | <code>string</code> | __*Optional*__
**bucketName**? | <code>string</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__



## struct EnableConfigRecorderProps  <a id="cdktf-aws-secure-enableconfigrecorderprops"></a>






Name | Type | Description 
-----|------|-------------
**snsTopicName** | <code>string</code> | <span></span>
**bucketKeyPrefix**? | <code>string</code> | __*Optional*__
**bucketName**? | <code>string</code> | __*Optional*__
**deliveryChannelName**? | <code>string</code> | __*Optional*__
**recorderName**? | <code>string</code> | __*Optional*__
**recordingGroupAllSupported**? | <code>boolean</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__



## struct EnableGuarddutyProps  <a id="cdktf-aws-secure-enableguarddutyprops"></a>






Name | Type | Description 
-----|------|-------------
**findingPublishingFrequency**? | <code>string</code> | __*Optional*__
**members**? | <code>any</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__



## struct EnableVpcFlowLogProps  <a id="cdktf-aws-secure-enablevpcflowlogprops"></a>






Name | Type | Description 
-----|------|-------------
**vpcId** | <code>string</code> | <span></span>
**logDestination**? | <code>string</code> | __*Optional*__
**logDestinationType**? | <code>string</code> | __*Optional*__
**logFormat**? | <code>string</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__
**trafficType**? | <code>string</code> | __*Optional*__



## struct GuarddutyOptions  <a id="cdktf-aws-secure-guarddutyoptions"></a>






Name | Type | Description 
-----|------|-------------
**findingPublishingFrequency**? | <code>string</code> | __*Optional*__
**members**? | <code>any</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__



## struct InviteAccepterMemberAccountOptions  <a id="cdktf-aws-secure-inviteacceptermemberaccountoptions"></a>






Name | Type | Description 
-----|------|-------------
**masterAccountId** | <code>string</code> | <span></span>



## struct SubscribeOptions  <a id="cdktf-aws-secure-subscribeoptions"></a>






Name | Type | Description 
-----|------|-------------
**standardsArn**? | <code>string</code> | __*Optional*__



## struct VpcFlowLogOptions  <a id="cdktf-aws-secure-vpcflowlogoptions"></a>






Name | Type | Description 
-----|------|-------------
**vpcId** | <code>string</code> | <span></span>
**logDestination**? | <code>string</code> | __*Optional*__
**logDestinationType**? | <code>string</code> | __*Optional*__
**logFormat**? | <code>string</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__
**trafficType**? | <code>string</code> | __*Optional*__



