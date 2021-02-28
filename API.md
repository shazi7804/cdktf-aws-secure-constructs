# API Reference

**Classes**

Name|Description
----|-----------
[CreateAccountPasswordPolicy](#cdktf-aws-secure-createaccountpasswordpolicy)|*No description*


**Structs**

Name|Description
----|-----------
[CreateAccountPasswordPolicyProps](#cdktf-aws-secure-createaccountpasswordpolicyprops)|*No description*



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


#### addConfigRule() <a id="cdktf-aws-secure-createaccountpasswordpolicy-addconfigrule"></a>

addConfigRule.

```ts
addConfigRule(): void
```







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


