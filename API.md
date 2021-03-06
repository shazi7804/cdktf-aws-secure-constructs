# API Reference

**Classes**

Name|Description
----|-----------
[BaseLine](#cdktf-aws-secure-baseline)|*No description*
[EnableAccountPasswordPolicy](#cdktf-aws-secure-enableaccountpasswordpolicy)|*No description*
[EnableCloudTrail](#cdktf-aws-secure-enablecloudtrail)|*No description*
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
[EnableAccountPasswordPolicyProps](#cdktf-aws-secure-enableaccountpasswordpolicyprops)|*No description*
[EnableCloudTrailProps](#cdktf-aws-secure-enablecloudtrailprops)|*No description*
[EnableGuarddutyProps](#cdktf-aws-secure-enableguarddutyprops)|*No description*
[EnableVpcFlowLogProps](#cdktf-aws-secure-enablevpcflowlogprops)|*No description*
[InviteAccepterMemberAccountOptions](#cdktf-aws-secure-inviteacceptermemberaccountoptions)|*No description*



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
  * **vpcId** (<code>string</code>)  *No description* 
  * **enableGuardduty** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableIamAccountPasswordPolicy** (<code>boolean</code>)  *No description* __*Optional*__
  * **enableVpcFlowLog** (<code>boolean</code>)  *No description* __*Optional*__




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
* **options** (<code>[AddSecurityHubMemberAccountOptions](#cdktf-aws-secure-addsecurityhubmemberaccountoptions)</code>)  Security Hub options.
  * **accountId** (<code>string</code>)  *No description* 
  * **email** (<code>string</code>)  *No description* 






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
**vpcId** | <code>string</code> | <span></span>
**enableGuardduty**? | <code>boolean</code> | __*Optional*__
**enableIamAccountPasswordPolicy**? | <code>boolean</code> | __*Optional*__
**enableVpcFlowLog**? | <code>boolean</code> | __*Optional*__



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



## struct InviteAccepterMemberAccountOptions  <a id="cdktf-aws-secure-inviteacceptermemberaccountoptions"></a>






Name | Type | Description 
-----|------|-------------
**masterAccountId** | <code>string</code> | <span></span>



