# API Reference

**Classes**

Name|Description
----|-----------
[BaseLine](#cdktf-aws-secure-baseline)|*No description*
[CreateAccountPasswordPolicy](#cdktf-aws-secure-createaccountpasswordpolicy)|*No description*
[CreateGuardduty](#cdktf-aws-secure-createguardduty)|*No description*
[CreateVpcFlowLog](#cdktf-aws-secure-createvpcflowlog)|*No description*


**Structs**

Name|Description
----|-----------
[AcceptMemberAccountOptions](#cdktf-aws-secure-acceptmemberaccountoptions)|*No description*
[BaseLineProps](#cdktf-aws-secure-baselineprops)|*No description*
[CreateAccountPasswordPolicyProps](#cdktf-aws-secure-createaccountpasswordpolicyprops)|*No description*
[CreateGuarddutyProps](#cdktf-aws-secure-createguarddutyprops)|*No description*
[CreateVpcFlowLogProps](#cdktf-aws-secure-createvpcflowlogprops)|*No description*
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




## class CreateAccountPasswordPolicy  <a id="cdktf-aws-secure-createaccountpasswordpolicy"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new CreateAccountPasswordPolicy(scope: Construct, name: string, props: CreateAccountPasswordPolicyProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[CreateAccountPasswordPolicyProps](#cdktf-aws-secure-createaccountpasswordpolicyprops)</code>)  *No description*
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


#### addConfigRule(tags?) <a id="cdktf-aws-secure-createaccountpasswordpolicy-addconfigrule"></a>

Add Config Rule for Account Password policy.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.






## class CreateGuardduty  <a id="cdktf-aws-secure-createguardduty"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new CreateGuardduty(scope: Construct, name: string, props: CreateGuarddutyProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[CreateGuarddutyProps](#cdktf-aws-secure-createguarddutyprops)</code>)  *No description*
  * **findingPublishingFrequency** (<code>string</code>)  *No description* __*Optional*__
  * **members** (<code>any</code>)  *No description* __*Optional*__
  * **tags** (<code>Map<string, string></code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**id** | <code>string</code> | <span></span>

### Methods


#### acceptMemberAccount(id, options) <a id="cdktf-aws-secure-createguardduty-acceptmemberaccount"></a>

Accept Member Account.

```ts
acceptMemberAccount(id: string, options: AcceptMemberAccountOptions): void
```

* **id** (<code>string</code>)  Guardduty member id.
* **options** (<code>[AcceptMemberAccountOptions](#cdktf-aws-secure-acceptmemberaccountoptions)</code>)  GuarddutyMember options.
  * **accountId** (<code>string</code>)  *No description* 
  * **email** (<code>string</code>)  *No description* 




#### addConfigRule(tags?) <a id="cdktf-aws-secure-createguardduty-addconfigrule"></a>

Add Config Rule for Guardduty.

```ts
addConfigRule(tags?: any): void
```

* **tags** (<code>any</code>)  Config Rule tags.




#### inviteAccepterMemberAccount(id, options) <a id="cdktf-aws-secure-createguardduty-inviteacceptermemberaccount"></a>

Accept Member Account.

```ts
inviteAccepterMemberAccount(id: string, options: InviteAccepterMemberAccountOptions): void
```

* **id** (<code>string</code>)  Guardduty member id.
* **options** (<code>[InviteAccepterMemberAccountOptions](#cdktf-aws-secure-inviteacceptermemberaccountoptions)</code>)  GuarddutyMember options.
  * **masterAccountId** (<code>string</code>)  *No description* 






## class CreateVpcFlowLog  <a id="cdktf-aws-secure-createvpcflowlog"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IResource](#cdktf-iresource), [IConstruct](#constructs-iconstruct)
__Extends__: [Resource](#cdktf-resource)

### Initializer




```ts
new CreateVpcFlowLog(scope: Construct, name: string, props: CreateVpcFlowLogProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[CreateVpcFlowLogProps](#cdktf-aws-secure-createvpcflowlogprops)</code>)  *No description*
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


#### addConfigRule(tags?) <a id="cdktf-aws-secure-createvpcflowlog-addconfigrule"></a>

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



## struct BaseLineProps  <a id="cdktf-aws-secure-baselineprops"></a>






Name | Type | Description 
-----|------|-------------
**vpcId** | <code>string</code> | <span></span>
**enableGuardduty**? | <code>boolean</code> | __*Optional*__
**enableIamAccountPasswordPolicy**? | <code>boolean</code> | __*Optional*__
**enableVpcFlowLog**? | <code>boolean</code> | __*Optional*__



## struct CreateAccountPasswordPolicyProps  <a id="cdktf-aws-secure-createaccountpasswordpolicyprops"></a>






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



## struct CreateGuarddutyProps  <a id="cdktf-aws-secure-createguarddutyprops"></a>






Name | Type | Description 
-----|------|-------------
**findingPublishingFrequency**? | <code>string</code> | __*Optional*__
**members**? | <code>any</code> | __*Optional*__
**tags**? | <code>Map<string, string></code> | __*Optional*__



## struct CreateVpcFlowLogProps  <a id="cdktf-aws-secure-createvpcflowlogprops"></a>






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



