# Rent Manager Web API — Supplemental Reference

> Source: https://reama.api.rentmanager.com/Help/Resources
> Compiled: 2026-05-06
> Scope: Emails (incl. SendEmail / SendPrivateEmail / SmtpSystemSettings / Reply), HistoryNotes, HistoryCategories, Tenants (status enum + address/contact embeds + remaining sub-resources), Leases, LetterTemplates, Files / FileAttachments (resolved to Property / HistoryNote attachment sub-resources), Properties, Addresses (resolved to embedded AddressModel), UserDefinedValues / UserDefinedFields, HistoryCalls, Users.

> **Documentation caveats**
> - The Help pages do **not** flag fields as "Required" except where they appear in the *Save* method body table marked `Required (create)`. Always inspect the corresponding `/Help/Method/{Resource}/Save` page when implementing POST/PUT.
> - Several resources requested by the spec (`Files`, `FileAttachments`, `Addresses`, `UserDefinedValues`) are **not** standalone top-level resources in the Rent Manager API. They are exposed as embeds and sub-resources of parent objects (Tenants, Properties, HistoryNotes, etc.). The relevant alternatives are documented in their respective sections below and in the **404 / Missing Resources** appendix.
> - Enum value pages (e.g. `/Help/Model/eTenantStatus/...`, `/Help/Model/eLetterTemplateType/...`) return a "Not Found" body inside the page chrome; the server does not expose enum value lists via the help portal. Likely values, derived from the public Rent Manager UI behavior, are listed in **Appendix B — Enum Values (Best-Effort)**, but should be confirmed against your live tenant DB or vendor support.

---

## Table of Contents

1. [Emails](#1-emails)
   - 1.1 [SendEmail (sub-action)](#11-sendemail)
   - 1.2 [SendPrivateEmail (sub-action)](#12-sendprivateemail)
   - 1.3 [Reply (sub-action)](#13-reply)
   - 1.4 [SmtpSystemSettings (sub-action)](#14-smtpsystemsettings)
   - 1.5 [Related: HistoryEmails resource](#15-related-historyemails)
   - 1.6 [Related: EmailChains resource](#16-related-emailchains)
2. [HistoryNotes](#2-historynotes)
   - 2.1 [HistoryNoteModel](#21-historynotemodel)
   - 2.2 [Sub-resources](#22-historynotes-sub-resources)
   - 2.3 [Attachment / UploadAttachment endpoints (file upload)](#23-historynote-attachments)
   - 2.4 [Save POST body](#24-historynotes-save)
3. [HistoryCategories](#3-historycategories)
   - 3.1 [HistoryCategoryModel](#31-historycategorymodel)
   - 3.2 [HistoryCategoryTypeModel](#32-historycategorytypemodel)
   - 3.3 [Save POST body](#33-historycategories-save)
4. [Tenants — supplemental](#4-tenants-supplemental)
   - 4.1 [eTenantStatus enum](#41-etenantstatus)
   - 4.2 [Address embed (AddressModel)](#42-tenant-address-embed)
   - 4.3 [Contact embed (ContactModel)](#43-tenant-contact-embed)
   - 4.4 [PhoneNumber embed (PhoneNumberModel)](#44-tenant-phonenumber-embed)
   - 4.5 [Email embed (EmailModel)](#45-tenant-email-embed)
   - 4.6 [Remaining tenant sub-resources](#46-remaining-tenant-subresources)
5. [Leases](#5-leases)
   - 5.1 [LeaseModel](#51-leasemodel)
   - 5.2 [Endpoints & Sub-resources](#52-leases-endpoints)
   - 5.3 [Save POST body](#53-leases-save)
6. [LetterTemplates](#6-lettertemplates)
   - 6.1 [LetterTemplateModel](#61-lettertemplatemodel)
   - 6.2 [Sub-models (Users, Roles, Folders, SignableFields, Filters)](#62-lettertemplate-submodels)
   - 6.3 [eLetterTemplateType enum](#63-elettertemplatetype)
   - 6.4 [Endpoints & Sub-resources](#64-lettertemplates-endpoints)
   - 6.5 [Save POST body](#65-lettertemplates-save)
7. [Files / FileAttachments — resolved](#7-files-fileattachments-resolved)
   - 7.1 [PropertyFiles + PropertyFileFolders](#71-propertyfiles)
   - 7.2 [HistoryNote Attachment / Attachments / HistoryAttachments / UploadAttachment(s)](#72-historynote-attachment-endpoints)
   - 7.3 [Property UploadImage / UploadLogoFile](#73-property-uploadimage)
   - 7.4 [UploadUserDefinedValueAttachment (Tenants & Properties)](#74-upload-udv-attachment)
8. [Properties](#8-properties)
   - 8.1 [PropertyModel](#81-propertymodel)
   - 8.2 [Endpoints & Sub-resources](#82-properties-endpoints)
   - 8.3 [Save POST body](#83-properties-save)
9. [Addresses — resolved](#9-addresses-resolved)
   - 9.1 [AddressModel (embed)](#91-addressmodel)
   - 9.2 [How to fetch / save addresses (Tenants, Properties)](#92-address-flows)
10. [UserDefinedValues & UserDefinedFields](#10-udf-udv)
    - 10.1 [UserDefinedFieldModel](#101-udfmodel)
    - 10.2 [UserDefinedValueModel](#102-udvmodel)
    - 10.3 [How they relate to Tenants (and Properties / Users)](#103-udv-relationships)
    - 10.4 [Endpoints — UserDefinedFields resource](#104-udf-endpoints)
    - 10.5 [Tenant UDV embed / sub-resource flows](#105-tenant-udv)
11. [HistoryCalls](#11-historycalls)
    - 11.1 [HistoryCallModel](#111-historycallmodel)
    - 11.2 [Endpoints & Save](#112-historycalls-endpoints)
12. [Users](#12-users)
    - 12.1 [UserModel](#121-usermodel)
    - 12.2 [Roles / Permissions / Properties](#122-users-roles)
    - 12.3 [Endpoints & Save](#123-users-endpoints)
13. [Appendix A — 404 / Missing Resources & Alternatives](#appendix-a-404)
14. [Appendix B — Enum Values (Best-Effort)](#appendix-b-enums)
15. [Appendix C — Endpoint Quick Reference](#appendix-c-endpoints)

---

<a id="1-emails"></a>
## 1. Emails

> Source: `https://reama.api.rentmanager.com/Help/Resource/Emails`

The top-level `/Emails` resource page itself only exposes `GET Emails` and lists four sub-actions (`Reply`, `SendEmail`, `SendPrivateEmail`, `SmtpSystemSettings`). It does **not** carry an `EmailModel` property table — it acts as a namespace for outbound email actions. For email *records*, use the `HistoryEmails` resource (see §1.5) or `EmailChains` (see §1.6).

### Endpoints

- `GET /Emails`
- `POST /Emails/Reply` (sub-action)
- `POST /Emails/SendEmail` (sub-action)
- `POST /Emails/SendPrivateEmail` (sub-action)
- `GET /Emails/SmtpSystemSettings` (sub-action)

> **Note:** Outbound email is sent by POSTing to the appropriate sub-action below. Saved/sent records are exposed under `HistoryEmails` and (chained threads) under `EmailChains`.

<a id="11-sendemail"></a>
## 1.1 SendEmail (POST)

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Emails/SendEmail`

### Endpoints

- `POST Emails/SendEmail?isSendIndividually={isSendIndividually}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| emailModel | EmailModel | Define this parameter in the request body. |
| isSendIndividually | Boolean | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| EmailSentItemID | Integer | EqualTo , In , GreaterThan | Primary Key , Read Only |
| FromAddress | String |  | Read Only |
| Subject | String |  | Read Only |
| EmailSentDate | DateTime |  | Read Only |
| MessageBody | String |  | Read Only |
| DisplayName | String |  | Read Only |
| IsSentIndividually | Boolean |  | Read Only |
| IsOutgoing | Boolean |  | Read Only |
| UserID (DEPRECATED) As of 9/21/2022 | Integer |  | Read Only |
| CreateUserID | Integer |  | Read Only |
| User (DEPRECATED) As of 1/5/2022 replaced by CreateUser | UserModel |  |  |
| CreateUser | UserModel |  |  |
| IsHTML | Boolean |  | Read Only |
| EmailSentFolderID (DEPRECATED) As of 9/22/2022 | Integer | EqualTo |  |
| EmailChainID | Integer | EqualTo |  |
| EntityKeyID | Integer | EqualTo |  |
| EntityTypeID | eEntityType | EqualTo |  |
| ToEmailContacts | EmailSentItemRecipientModel |  |  |
| CCEmailContacts | EmailSentItemRecipientModel |  |  |
| BCCEmailContacts | EmailSentItemRecipientModel |  |  |
| EmailSentItemAttachments | EmailSentItemAttachmentModel |  |  |
| EmailChain | EmailChainModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST Emails/SendEmail?isSendIndividually={isSendIndividually}
```

```json
{
  "Subject": "sample string 1",
  "ToAddresses": "sample string 2",
  "FromAddress": "sample string 3",
  "FromName": "sample string 4",
  "BodyText": "sample string 5",
  "IsHTML": true,
  "BCC": "sample string 7",
  "CC": "sample string 8",
  "MetaTag": "sample string 10"
}
```

```json
{
  "EmailSentItemID": 1,
  "FromAddress": "sample string 2",
  "Subject": "sample string 3",
  "EmailSentDate": "2026-05-06T09:40:04.2508483-04:00",
  "MessageBody": "sample string 5",
  "DisplayName": "sample string 6",
  "IsSentIndividually": true,
  "IsOutgoing": true,
  "UserID": 9,
  "CreateUserID": 10,
  "IsHTML": true,
  "EmailSentFolderID": 12,
  "EmailChainID": 13,
  "EntityKeyID": 14,
  "EntityTypeID": "NotSet",
  "MetaTag": "sample string 16"
}
```


<a id="12-sendprivateemail"></a>
## 1.2 SendPrivateEmail (POST)

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Emails/SendPrivateEmail`

### Endpoints

- `POST Emails/SendPrivateEmail?isSendIndividually={isSendIndividually}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| emailModel | EmailModel | Define this parameter in the request body. |
| isSendIndividually | Boolean | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| EmailSentItemID | Integer | EqualTo , In , GreaterThan | Primary Key , Read Only |
| FromAddress | String |  | Read Only |
| Subject | String |  | Read Only |
| EmailSentDate | DateTime |  | Read Only |
| MessageBody | String |  | Read Only |
| DisplayName | String |  | Read Only |
| IsSentIndividually | Boolean |  | Read Only |
| IsOutgoing | Boolean |  | Read Only |
| UserID (DEPRECATED) As of 9/21/2022 | Integer |  | Read Only |
| CreateUserID | Integer |  | Read Only |
| User (DEPRECATED) As of 1/5/2022 replaced by CreateUser | UserModel |  |  |
| CreateUser | UserModel |  |  |
| IsHTML | Boolean |  | Read Only |
| EmailSentFolderID (DEPRECATED) As of 9/22/2022 | Integer | EqualTo |  |
| EmailChainID | Integer | EqualTo |  |
| EntityKeyID | Integer | EqualTo |  |
| EntityTypeID | eEntityType | EqualTo |  |
| ToEmailContacts | EmailSentItemRecipientModel |  |  |
| CCEmailContacts | EmailSentItemRecipientModel |  |  |
| BCCEmailContacts | EmailSentItemRecipientModel |  |  |
| EmailSentItemAttachments | EmailSentItemAttachmentModel |  |  |
| EmailChain | EmailChainModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST Emails/SendPrivateEmail?isSendIndividually={isSendIndividually}
```

```json
{
  "Subject": "sample string 1",
  "ToAddresses": "sample string 2",
  "FromAddress": "sample string 3",
  "FromName": "sample string 4",
  "BodyText": "sample string 5",
  "IsHTML": true,
  "BCC": "sample string 7",
  "CC": "sample string 8",
  "MetaTag": "sample string 10"
}
```

```json
{
  "EmailSentItemID": 1,
  "FromAddress": "sample string 2",
  "Subject": "sample string 3",
  "EmailSentDate": "2026-05-06T09:40:04.4639047-04:00",
  "MessageBody": "sample string 5",
  "DisplayName": "sample string 6",
  "IsSentIndividually": true,
  "IsOutgoing": true,
  "UserID": 9,
  "CreateUserID": 10,
  "IsHTML": true,
  "EmailSentFolderID": 12,
  "EmailChainID": 13,
  "EntityKeyID": 14,
  "EntityTypeID": "NotSet",
  "MetaTag": "sample string 16"
}
```


<a id="13-reply"></a>
## 1.3 Reply (POST)

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Emails/Reply`

### Endpoints

- `POST Emails/Reply?emailChainID={emailChainID}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| emailModel | EmailModel | Define this parameter in the request body. |
| emailChainID | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| EmailSentItemID | Integer | EqualTo , In , GreaterThan | Primary Key , Read Only |
| FromAddress | String |  | Read Only |
| Subject | String |  | Read Only |
| EmailSentDate | DateTime |  | Read Only |
| MessageBody | String |  | Read Only |
| DisplayName | String |  | Read Only |
| IsSentIndividually | Boolean |  | Read Only |
| IsOutgoing | Boolean |  | Read Only |
| UserID (DEPRECATED) As of 9/21/2022 | Integer |  | Read Only |
| CreateUserID | Integer |  | Read Only |
| User (DEPRECATED) As of 1/5/2022 replaced by CreateUser | UserModel |  |  |
| CreateUser | UserModel |  |  |
| IsHTML | Boolean |  | Read Only |
| EmailSentFolderID (DEPRECATED) As of 9/22/2022 | Integer | EqualTo |  |
| EmailChainID | Integer | EqualTo |  |
| EntityKeyID | Integer | EqualTo |  |
| EntityTypeID | eEntityType | EqualTo |  |
| ToEmailContacts | EmailSentItemRecipientModel |  |  |
| CCEmailContacts | EmailSentItemRecipientModel |  |  |
| BCCEmailContacts | EmailSentItemRecipientModel |  |  |
| EmailSentItemAttachments | EmailSentItemAttachmentModel |  |  |
| EmailChain | EmailChainModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST Emails/Reply?emailChainID={emailChainID}
```

```json
{
  "Subject": "sample string 1",
  "ToAddresses": "sample string 2",
  "FromAddress": "sample string 3",
  "FromName": "sample string 4",
  "BodyText": "sample string 5",
  "IsHTML": true,
  "BCC": "sample string 7",
  "CC": "sample string 8",
  "MetaTag": "sample string 10"
}
```

```json
{
  "EmailSentItemID": 1,
  "FromAddress": "sample string 2",
  "Subject": "sample string 3",
  "EmailSentDate": "2026-05-06T09:40:04.0835681-04:00",
  "MessageBody": "sample string 5",
  "DisplayName": "sample string 6",
  "IsSentIndividually": true,
  "IsOutgoing": true,
  "UserID": 9,
  "CreateUserID": 10,
  "IsHTML": true,
  "EmailSentFolderID": 12,
  "EmailChainID": 13,
  "EntityKeyID": 14,
  "EntityTypeID": "NotSet",
  "MetaTag": "sample string 16"
}
```


<a id="14-smtpsystemsettings"></a>
## 1.4 SmtpSystemSettings

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Emails/SmtpSystemSettings`

### Endpoints

- `GET Emails/SmtpSystemSettings`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| SMTPMailServer | String |  |  |
| SMTPMailPort | Integer |  |  |
| SMTPUseSSL | Boolean |  |  |
| EnableSMTPAuthentication | Boolean |  |  |
| SMTPUsername | String |  |  |
| SMTPPassword | String |  |  |
| PMEmailAddress | String |  |  |
| MailServerSetupType | Integer |  |  |
| ReplyTrackingEnabled | Boolean |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET Emails/SmtpSystemSettings
```

```json
{
  "SMTPMailServer": "sample string 1",
  "SMTPMailPort": 2,
  "SMTPUseSSL": true,
  "EnableSMTPAuthentication": true,
  "SMTPUsername": "sample string 5",
  "SMTPPassword": "sample string 6",
  "PMEmailAddress": "sample string 7",
  "MailServerSetupType": 8,
  "ReplyTrackingEnabled": true,
  "MetaTag": "sample string 11"
}
```


<a id="15-related-historyemails"></a>
## 1.5 Related: HistoryEmails resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/HistoryEmails`

### Endpoints

- `GET HistoryEmails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | HistoryEmailFilterFields List | Define this parameter in the request URI. |
| embeds | HistoryEmailEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | HistoryEmailOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo , In | Primary Key |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo , In |  |
| HistoryDate | DateTime |  |  |
| HistoryEndDate | DateTime |  |  |
| Note | String |  |  |
| Result | String |  |  |
| IsFirstContact | Boolean |  |  |
| IsLocked | Boolean |  |  |
| IsCompleted | Boolean |  |  |
| IsPinned | Boolean | EqualTo , NotEqualTo |  |
| IsShowOnPaymentsTab | Boolean |  | Calculated Field |
| IsShowOnOwnerStatement | Boolean |  | Calculated Field |
| IsContactMade | Boolean |  | Read Only |
| CreateUserID | Integer | EqualTo |  |
| CreateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| UpdateDate | DateTime |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Prospect | ProspectModel |  |  |
| Asset | AssetModel |  |  |
| Eviction | EvictionModel |  |  |
| EntityType | eHistoryEmailRelatedObjectTypes |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| FollowUpTask | FollowUpTaskModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET HistoryEmails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "HistoryID": 1,
    "HistoryCategoryID": 2,
    "HistoryDate": "2026-05-06T09:20:43.3231978-04:00",
    "HistoryEndDate": "2026-05-06T09:20:43.3231978-04:00",
    "Note": "sample string 4",
    "Result": "sample string 5",
    "IsFirstContact": true,
    "IsLocked": true,
    "IsCompleted": true,
    "IsPinned": true,
    "IsContactMade": true,
    "CreateUserID": 15,
    "CreateDate": "2026-05-06T09:20:43.3231978-04:00",
    "UpdateUserID": 17,
    "ParentID": 18,
    "UpdateDate": "2026-05-06T09:20:43.3231978-04:00",
    "MetaTag": "sample string 21"
  }
]
```


<a id="16-related-emailchains"></a>
## 1.6 Related: EmailChains resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/EmailChains`

### Endpoints

- `GET EmailChains?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | EmailChainFilterFields List | Define this parameter in the request URI. |
| embeds | EmailChainEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | EmailChainOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| EmailChainID | Integer | EqualTo , In | Primary Key |
| IsPrivate | Boolean | EqualTo |  |
| SentUserID | Integer | EqualTo , In |  |
| ChainGuid | Guid | EqualTo | Read Only |
| SentUser | UserModel |  |  |
| EmailSentItems | EmailSentItemModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET EmailChains?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "EmailChainID": 1,
    "IsPrivate": true,
    "SentUserID": 3,
    "ChainGuid": "ba13c556-7511-447a-98cf-5772a3286dd2",
    "MetaTag": "sample string 6"
  }
]
```


<a id="15-related-historyemails-model"></a>
## Related: HistoryEmailModel

> Source: `https://reama.api.rentmanager.com/Help/Model/HistoryEmailModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo , In | Primary Key |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo , In |  |
| HistoryDate | DateTime |  |  |
| HistoryEndDate | DateTime |  |  |
| Note | String |  |  |
| Result | String |  |  |
| IsFirstContact | Boolean |  |  |
| IsLocked | Boolean |  |  |
| IsCompleted | Boolean |  |  |
| IsPinned | Boolean | EqualTo , NotEqualTo |  |
| IsShowOnPaymentsTab | Boolean |  | Calculated Field |
| IsShowOnOwnerStatement | Boolean |  | Calculated Field |
| IsContactMade | Boolean |  | Read Only |
| CreateUserID | Integer | EqualTo |  |
| CreateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| UpdateDate | DateTime |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Prospect | ProspectModel |  |  |
| Asset | AssetModel |  |  |
| Eviction | EvictionModel |  |  |
| EntityType | eHistoryEmailRelatedObjectTypes |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| FollowUpTask | FollowUpTaskModel |  |  |
| MetaTag | String |  |  |

<a id="2-historynotes"></a>
## 2. HistoryNotes

<a id="2-historynotes-resource"></a>
## 2.0 HistoryNotes resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/HistoryNotes`

### Endpoints

- `GET HistoryNotes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | HistoryNoteFilterFields List | Define this parameter in the request URI. |
| embeds | HistoryNoteEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | HistoryNoteOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo , In | Primary Key |
| ArchitecturalRequest | ArchitecturalRequestModel |  |  |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo , In |  |
| HistoryDate | DateTime |  |  |
| Note | String |  |  |
| FileID (DEPRECATED) As of 9/12/2019 | Integer |  |  |
| IsShowOnPaymentsTab | Boolean |  | Calculated Field |
| IsShowOnOwnerStatement | Boolean |  | Calculated Field |
| IsShowInPOComments | Boolean | EqualTo |  |
| IsLocked | Boolean |  |  |
| IsPinned | Boolean | EqualTo , NotEqualTo |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| HistoryCategory | HistoryCategoryModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Estimate | EstimateModel |  |  |
| PurchaseOrder | PurchaseOrderModel |  |  |
| Property | PropertyModel |  |  |
| ServiceManagerIssue | ServiceManagerIssueModel |  |  |
| Unit | UnitModel |  |  |
| Vendor | VendorModel |  |  |
| Prospect | ProspectModel |  |  |
| Asset | AssetModel |  |  |
| Bill | BillModel |  |  |
| Violation | ViolationModel |  |  |
| RecurringBill | RecurringBillModel |  |  |
| ShortTermReservation | ShortTermReservationModel |  |  |
| Job | JobModel |  |  |
| Eviction | EvictionModel |  |  |
| EntityType | eHistoryNoteRelatedObjectTypes | EqualTo , In |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| Attachment | FileModel |  |  |
| HistoryAttachments | HistoryAttachmentModel |  |  |
| FollowUpTask | FollowUpTaskModel |  |  |
| LoanPayable | LoanPayableModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET HistoryNotes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "HistoryID": 1,
    "HistoryType": "NotSet",
    "HistoryCategoryID": 2,
    "HistoryDate": "2026-05-06T09:40:04.802281-04:00",
    "Note": "sample string 4",
    "FileID": 5,
    "IsShowInPOComments": true,
    "IsLocked": true,
    "IsPinned": true,
    "CreateUserID": 13,
    "UpdateUserID": 14,
    "ParentID": 15,
    "CreateDate": "2026-05-06T09:40:04.802281-04:00",
    "UpdateDate": "2026-05-06T09:40:04.802281-04:00",
    "MetaTag": "sample string 19"
  }
]
```


<a id="21-historynotemodel"></a>
## 2.1 HistoryNoteModel

> Source: `https://reama.api.rentmanager.com/Help/Model/HistoryNoteModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo , In | Primary Key |
| ArchitecturalRequest | ArchitecturalRequestModel |  |  |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo , In |  |
| HistoryDate | DateTime |  |  |
| Note | String |  |  |
| FileID (DEPRECATED) As of 9/12/2019 | Integer |  |  |
| IsShowOnPaymentsTab | Boolean |  | Calculated Field |
| IsShowOnOwnerStatement | Boolean |  | Calculated Field |
| IsShowInPOComments | Boolean | EqualTo |  |
| IsLocked | Boolean |  |  |
| IsPinned | Boolean | EqualTo , NotEqualTo |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| HistoryCategory | HistoryCategoryModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Estimate | EstimateModel |  |  |
| PurchaseOrder | PurchaseOrderModel |  |  |
| Property | PropertyModel |  |  |
| ServiceManagerIssue | ServiceManagerIssueModel |  |  |
| Unit | UnitModel |  |  |
| Vendor | VendorModel |  |  |
| Prospect | ProspectModel |  |  |
| Asset | AssetModel |  |  |
| Bill | BillModel |  |  |
| Violation | ViolationModel |  |  |
| RecurringBill | RecurringBillModel |  |  |
| ShortTermReservation | ShortTermReservationModel |  |  |
| Job | JobModel |  |  |
| Eviction | EvictionModel |  |  |
| EntityType | eHistoryNoteRelatedObjectTypes | EqualTo , In |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| Attachment | FileModel |  |  |
| HistoryAttachments | HistoryAttachmentModel |  |  |
| FollowUpTask | FollowUpTaskModel |  |  |
| LoanPayable | LoanPayableModel |  |  |
| MetaTag | String |  |  |

<a id="22-historynotes-sub-resources"></a>
### 2.2 HistoryNotes sub-resources

The following sub-resources are available under `/HistoryNotes`. Each follows the standard pattern `/HistoryNotes/{id}/{Sub}` (or `/HistoryNotes/{Sub}` for collection-level operations).

- `Asset` — `/Help/Subresource/HistoryNotes/Asset`
- `Attachment` — `/Help/Subresource/HistoryNotes/Attachment`
- `Attachments` — `/Help/Subresource/HistoryNotes/Attachments`
- `Bill` — `/Help/Subresource/HistoryNotes/Bill`
- `CreateUser` — `/Help/Subresource/HistoryNotes/CreateUser`
- `Estimate` — `/Help/Subresource/HistoryNotes/Estimate`
- `Eviction` — `/Help/Subresource/HistoryNotes/Eviction`
- `FollowUpTask` — `/Help/Subresource/HistoryNotes/FollowUpTask`
- `GetByPost` — `/Help/Subresource/HistoryNotes/GetByPost`
- `HistoryAttachments` — `/Help/Subresource/HistoryNotes/HistoryAttachments`
- `HistoryCategory` — `/Help/Subresource/HistoryNotes/HistoryCategory`
- `Job` — `/Help/Subresource/HistoryNotes/Job`
- `Owner` — `/Help/Subresource/HistoryNotes/Owner`
- `OwnerProspect` — `/Help/Subresource/HistoryNotes/OwnerProspect`
- `Property` — `/Help/Subresource/HistoryNotes/Property`
- `Prospect` — `/Help/Subresource/HistoryNotes/Prospect`
- `PurchaseOrder` — `/Help/Subresource/HistoryNotes/PurchaseOrder`
- `QuickSearch` — `/Help/Subresource/HistoryNotes/QuickSearch`
- `RecurringBill` — `/Help/Subresource/HistoryNotes/RecurringBill`
- `Search` — `/Help/Subresource/HistoryNotes/Search`
- `ServiceManagerIssue` — `/Help/Subresource/HistoryNotes/ServiceManagerIssue`
- `ShortTermReservation` — `/Help/Subresource/HistoryNotes/ShortTermReservation`
- `Tenant` — `/Help/Subresource/HistoryNotes/Tenant`
- `Unit` — `/Help/Subresource/HistoryNotes/Unit`
- `UpdateUser` — `/Help/Subresource/HistoryNotes/UpdateUser`
- `UploadAttachment` — `/Help/Subresource/HistoryNotes/UploadAttachment`
- `UploadAttachments` — `/Help/Subresource/HistoryNotes/UploadAttachments`
- `Vendor` — `/Help/Subresource/HistoryNotes/Vendor`
- `Violation` — `/Help/Subresource/HistoryNotes/Violation`

<a id="23-historynote-attachments"></a>
### 2.3 HistoryNote attachment endpoints (file upload flow)

File attachments on a HistoryNote are managed via several sub-resources. The naming is overloaded; here is the practical mapping:

| Endpoint | Method | Purpose |
|---|---|---|
| `/HistoryNotes/{id}/Attachment` | GET | Retrieve a single attachment record. |
| `/HistoryNotes/{id}/Attachments` | GET | Retrieve all attachments for a HistoryNote. |
| `/HistoryNotes/{id}/HistoryAttachments` | GET | Retrieve attachment metadata (alias / legacy). |
| `/HistoryNotes/{id}/UploadAttachment` | POST (multipart) | Upload a single file attachment. |
| `/HistoryNotes/{id}/UploadAttachments` | POST (multipart) | Upload multiple file attachments. |

> **Implementation note:** Upload endpoints accept `multipart/form-data`. The model parameter (e.g. metadata such as `Description`, `HistoryCategoryID`) is sent as a JSON form field alongside the binary file part. Inspect each sub-resource page for exact part names.

<a id="23-attachment"></a>
## HistoryNotes / Attachment

> Source: `https://reama.api.rentmanager.com/Help/Subresource/HistoryNotes/Attachment`

### Endpoints

- `GET HistoryNotes/{id}/Attachment?embeds={embeds}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| embeds | FileEmbedOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| FileID | Integer | EqualTo , In | Primary Key |
| Name | String |  |  |
| Description | String |  |  |
| IsDepotUsed | Boolean |  |  |
| Path | String |  |  |
| BinaryFileID | Int32 |  |  |
| Extension | String |  |  |
| Token (DEPRECATED) As of 3/22/2019 replaced by DownloadURL | String |  | Calculated Field |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateUserID | Integer |  |  |
| DownloadURL | String |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET HistoryNotes/{id}/Attachment?embeds={embeds}
```

```json
{
  "FileID": 1,
  "Name": "sample string 2",
  "Description": "sample string 3",
  "IsDepotUsed": true,
  "Path": "sample string 5",
  "BinaryFileID": 1,
  "Extension": "sample string 6",
  "Token": "ZuNQkfmqLOuPkWccLeMPe9ycwMVJ08RDEdlHMB5k-KxXwzfVyCv17vEVE6r_QDT5EUsn-liM8x688bby6shc7t_0yBU1t2e_H3wM5FJq-raT3SXHY0x-vgfiIMABaS08OyCtuT7jeFDMjr1P_RXI4aU3Kpf3qgpTw-BOjzBGIH4%3d",
  "CreateDate": "2026-05-06T09:41:05.3307478-04:00",
  "UpdateDate": "2026-05-06T09:41:05.3307478-04:00",
  "CreateUserID": 10,
  "UpdateUserID": 11,
  "DownloadURL": "sample string 14",
  "MetaTag": "sample string 16"
}
```


<a id="23-attachments"></a>
## HistoryNotes / Attachments

> Source: `https://reama.api.rentmanager.com/Help/Subresource/HistoryNotes/Attachments`

### Endpoints

- `GET HistoryNotes/{id}/Attachments?filters={filters}&embeds={embeds}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| filters | FileFilterFields List | Define this parameter in the request URI. |
| embeds | FileEmbedOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| FileID | Integer | EqualTo , In | Primary Key |
| Name | String |  |  |
| Description | String |  |  |
| IsDepotUsed | Boolean |  |  |
| Path | String |  |  |
| BinaryFileID | Int32 |  |  |
| Extension | String |  |  |
| Token (DEPRECATED) As of 3/22/2019 replaced by DownloadURL | String |  | Calculated Field |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateUserID | Integer |  |  |
| DownloadURL | String |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET HistoryNotes/{id}/Attachments?filters={filters}&embeds={embeds}&fields={fields}
```

```json
[
  {
    "FileID": 1,
    "Name": "sample string 2",
    "Description": "sample string 3",
    "IsDepotUsed": true,
    "Path": "sample string 5",
    "BinaryFileID": 1,
    "Extension": "sample string 6",
    "Token": "ZuNQkfmqLOuPkWccLeMPe9ycwMVJ08RDEdlHMB5k-KxXwzfVyCv17vEVE6r_QDT5EUsn-liM8x688bby6shc7t_0yBU1t2e_H3wM5FJq-raT3SXHY0x-vgfiIMABaS08OyCtuT7jeFDMjr1P_RXI4aU3Kpf3qgpTw-BOjzBGIH4%3d",
    "CreateDate": "2026-05-06T09:41:05.4510651-04:00",
    "UpdateDate": "2026-05-06T09:41:05.4510651-04:00",
    "CreateUserID": 10,
    "UpdateUserID": 11,
    "DownloadURL": "sample string 14",
    "MetaTag": "sample string 16"
  }
]
```


<a id="23-historyattachments"></a>
## HistoryNotes / HistoryAttachments

> Source: `https://reama.api.rentmanager.com/Help/Subresource/HistoryNotes/HistoryAttachments`

### Endpoints

- `DELETE HistoryNotes/{id}/HistoryAttachments?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| ids | Integer | Define this parameter in the request URI. |
| deleteOptions | DeleteOption List | Define this parameter in the request URI. |

### Sample bodies

```json
DELETE HistoryNotes/{id}/HistoryAttachments?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}
```


<a id="23-uploadattachment"></a>
## HistoryNotes / UploadAttachment

> Source: `https://reama.api.rentmanager.com/Help/Subresource/HistoryNotes/UploadAttachment`

### Endpoints

- `POST HistoryNotes/{id}/UploadAttachment`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| item | FileModel | Define this parameter in the request body. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| FileID | Integer | EqualTo , In | Primary Key |
| Name | String |  |  |
| Description | String |  |  |
| IsDepotUsed | Boolean |  |  |
| Path | String |  |  |
| BinaryFileID | Int32 |  |  |
| Extension | String |  |  |
| Token (DEPRECATED) As of 3/22/2019 replaced by DownloadURL | String |  | Calculated Field |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateUserID | Integer |  |  |
| DownloadURL | String |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST HistoryNotes/{id}/UploadAttachment
```

```json
{
  "FileID": 1,
  "Name": "sample string 2",
  "Description": "sample string 3",
  "IsDepotUsed": true,
  "Path": "sample string 5",
  "BinaryFileID": 1,
  "Extension": "sample string 6",
  "Token": "sample+string+7",
  "CreateDate": "2026-05-06T09:40:55.0968662-04:00",
  "UpdateDate": "2026-05-06T09:40:55.0968662-04:00",
  "CreateUserID": 10,
  "UpdateUserID": 11,
  "DownloadURL": "sample string 14",
  "MetaTag": "sample string 16"
}
```

```json
{
  "FileID": 1,
  "Name": "sample string 2",
  "Description": "sample string 3",
  "IsDepotUsed": true,
  "Path": "sample string 5",
  "BinaryFileID": 1,
  "Extension": "sample string 6",
  "Token": "ZuNQkfmqLOuPkWccLeMPe9ycwMVJ08RDEdlHMB5k-KxXwzfVyCv17vEVE6r_QDT5EUsn-liM8x688bby6shc7t_0yBU1t2e_H3wM5FJq-raT3SXHY0x-vgfiIMABaS08OyCtuT7jeFDMjr1P_RXI4aU3Kpf3qgpTw-BOjzBGIH4%3d",
  "CreateDate": "2026-05-06T09:40:55.0968662-04:00",
  "UpdateDate": "2026-05-06T09:40:55.0968662-04:00",
  "CreateUserID": 10,
  "UpdateUserID": 11,
  "DownloadURL": "sample string 14",
  "MetaTag": "sample string 16"
}
```


<a id="23-uploadattachments"></a>
## HistoryNotes / UploadAttachments

> Source: `https://reama.api.rentmanager.com/Help/Subresource/HistoryNotes/UploadAttachments`

### Endpoints

- `POST HistoryNotes/{id}/UploadAttachments`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| items | FileModel List | Define this parameter in the request body. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| FileID | Integer | EqualTo , In | Primary Key |
| Name | String |  |  |
| Description | String |  |  |
| IsDepotUsed | Boolean |  |  |
| Path | String |  |  |
| BinaryFileID | Int32 |  |  |
| Extension | String |  |  |
| Token (DEPRECATED) As of 3/22/2019 replaced by DownloadURL | String |  | Calculated Field |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateUserID | Integer |  |  |
| DownloadURL | String |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST HistoryNotes/{id}/UploadAttachments
```

```json
[
  {
    "FileID": 1,
    "Name": "sample string 2",
    "Description": "sample string 3",
    "IsDepotUsed": true,
    "Path": "sample string 5",
    "BinaryFileID": 1,
    "Extension": "sample string 6",
    "Token": "sample+string+7",
    "CreateDate": "2026-05-06T09:41:05.7038975-04:00",
    "UpdateDate": "2026-05-06T09:41:05.7038975-04:00",
    "CreateUserID": 10,
    "UpdateUserID": 11,
    "DownloadURL": "sample string 14",
    "MetaTag": "sample string 16"
  }
]
```

```json
[
  {
    "FileID": 1,
    "Name": "sample string 2",
    "Description": "sample string 3",
    "IsDepotUsed": true,
    "Path": "sample string 5",
    "BinaryFileID": 1,
    "Extension": "sample string 6",
    "Token": "ZuNQkfmqLOuPkWccLeMPe9ycwMVJ08RDEdlHMB5k-KxXwzfVyCv17vEVE6r_QDT5EUsn-liM8x688bby6shc7t_0yBU1t2e_H3wM5FJq-raT3SXHY0x-vgfiIMABaS08OyCtuT7jeFDMjr1P_RXI4aU3Kpf3qgpTw-BOjzBGIH4%3d",
    "CreateDate": "2026-05-06T09:41:05.7038975-04:00",
    "UpdateDate": "2026-05-06T09:41:05.7038975-04:00",
    "CreateUserID": 10,
    "UpdateUserID": 11,
    "DownloadURL": "sample string 14",
    "MetaTag": "sample string 16"
  }
]
```


<a id="24-historynotes-save"></a>
### 2.4 HistoryNotes / Save (POST body)

The `POST /HistoryNotes` (Save) endpoint accepts a `HistoryNoteModel` (or array of them for batch). All fields shown in §2.1 are accepted. Required-on-create fields are typically `Note`, `HistoryCategoryID`, and the appropriate parent linkage (`TenantID` / `PropertyID` / `UnitID` / `OwnerID` / `ProspectID` / `VendorID` etc., or via `RelatedObjectID` + `RelatedObjectType` (`eHistoryNoteRelatedObjectTypes` enum)).

A minimal example:

```json
[
  {
    "Note": "Tenant called regarding rent payment",
    "HistoryCategoryID": 1,
    "TenantID": 12345
  }
]
```

<a id="3-historycategories"></a>
## 3. HistoryCategories

<a id="3-historycategories-resource"></a>
## 3.0 HistoryCategories resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/HistoryCategories`

### Endpoints

- `GET HistoryCategories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | HistoryCategoryFilterFields List | Define this parameter in the request URI. |
| embeds | HistoryCategoryEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | HistoryCategoryOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryCategoryID | Integer | EqualTo , In | Primary Key |
| Name | String |  |  |
| IsActive | Boolean |  |  |
| HistoryCategoryTypes | HistoryCategoryTypeModel |  | Required (create) |
| MetaTag | String |  |  |

### Sample bodies

```json
GET HistoryCategories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "HistoryCategoryID": 1,
    "Name": "sample string 2"
  }
]
```


<a id="31-historycategorymodel"></a>
## 3.1 HistoryCategoryModel

> Source: `https://reama.api.rentmanager.com/Help/Model/HistoryCategoryModel/HistoryCategories-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryCategoryID | Integer | EqualTo , In | Primary Key |
| Name | String |  |  |
| IsActive | Boolean |  |  |
| HistoryCategoryTypes | HistoryCategoryTypeModel |  | Required (create) |
| MetaTag | String |  |  |

<a id="32-historycategorytypemodel"></a>
## 3.2 HistoryCategoryTypeModel

> Source: `https://reama.api.rentmanager.com/Help/Model/HistoryCategoryTypeModel/HistoryCategories-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryCategoryTypeID | Integer |  | Primary Key |
| HistoryCategoryID | Integer |  |  |
| HistoryCategoryType | eHistoryCategoryType |  |  |
| MetaTag | String |  |  |

<a id="33-historycategories-save"></a>
### 3.3 HistoryCategories / Save

POST a `HistoryCategoryModel` (or array). The category type is set via `HistoryCategoryTypeID` linking to `HistoryCategoryType`.

```json
[
  {
    "Name": "Maintenance Calls",
    "HistoryCategoryTypeID": 1,
    "IsActive": true
  }
]
```

<a id="4-tenants-supplemental"></a>
## 4. Tenants — supplemental

> Source: `https://reama.api.rentmanager.com/Help/Resource/Tenants`

This section focuses on the items requested: the `eTenantStatus` enum, the address / contact / phone / email embed details, and the remaining sub-resources not previously covered in the tenant-accounting reference. The full TenantModel property table is reproduced below (123 properties).

<a id="4-tenants"></a>
## Tenants resource (full TenantModel)

> Source: `https://reama.api.rentmanager.com/Help/Resource/Tenants`

### Endpoints

- `GET Tenants?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | TenantFilterFields List | Define this parameter in the request URI. |
| embeds | TenantEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | TenantOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| getOptions | TenantGetOptions List | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| TenantID | Integer | EqualTo , In | Primary Key |
| TenantDisplayID | Integer | EqualTo , In | Read Only |
| Name | String | EqualTo |  |
| FirstName | String |  |  |
| LastName | String |  |  |
| WebMessage | String |  |  |
| IsCompany | Boolean |  |  |
| ColorID | Int32 |  |  |
| CheckPayeeName | String |  |  |
| StatementMethod | eStatementMethod | EqualTo |  |
| Comment | String |  |  |
| RentDueDay | Integer |  |  |
| RentPeriod | eLeasePeriod | EqualTo |  |
| DoNotChargeLateFees | Boolean |  |  |
| DoNotPrintStatements (DEPRECATED) As of 11/12/2024 replaced by StatementMethod | Boolean |  | Calculated Field |
| DoNotAcceptChecks | Boolean |  |  |
| DoNotAcceptPayments | Boolean |  |  |
| DoNotAllowTWAPayments | Boolean |  |  |
| DoNotSendARAutomationNotifications | Boolean |  |  |
| IsProspect (DEPRECATED) As of 7/16/2019 | Boolean |  | Read Only |
| LeasingAgentID | Int32 | EqualTo , In |  |
| AccountGroupID | Int32 | EqualTo , In , NotIn | Read Only |
| TotalCalls | Integer |  |  |
| FailedCalls | Integer |  |  |
| IsAccountGroupMaster | Boolean | EqualTo , NotEqualTo | Read Only |
| TotalVisits | Integer |  |  |
| TotalEmails | Integer |  |  |
| FirstContact | DateTime |  |  |
| LastContact | DateTime |  |  |
| PropertyID | Integer | EqualTo , In |  |
| PostingStartDate | DateTime |  | Read Only |
| PostingEndDate | DateTime |  | Read Only |
| DefaultTaxTypeID | Int32 | EqualTo |  |
| OverrideScreeningDecision | Boolean |  | Read Only |
| OverrideReason | String |  | Read Only |
| OverrideCreateDate | DateTime |  | Read Only |
| OverrideCreateUserID | Integer |  | Read Only |
| OverrideUpdateDate | DateTime |  | Read Only |
| OverrideUpdateUserID | Integer |  | Read Only |
| IsShowCommentBanner | Boolean |  |  |
| IsDoNotAcceptPartialPayments | Boolean |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| FlexibleRentStatus | eFlexibleRentStatus | EqualTo | Read Only |
| FlexibleRentInternalStatus | eFlexibleRentInternalStatus | EqualTo | Read Only |
| Contacts | ContactModel |  |  |
| Color | ColorModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| LeasingAgent | UserModel |  |  |
| Property | PropertyModel |  |  |
| PrimaryContact (DEPRECATED) As of 10/5/2018 replaced by Contacts | ContactModel |  | Required (create) |
| UserDefinedValues | UserDefinedValueModel |  |  |
| Leases | LeaseModel |  |  |
| History | HistoryModel |  |  |
| HistoryWithUnitHistory (DEPRECATED) As of 1/7/2019 | HistoryModel |  |  |
| HistoryCalls | HistoryCallModel |  |  |
| HistoryEmails | HistoryEmailModel |  |  |
| HistoryVisits | HistoryVisitModel |  |  |
| HistoryNotes | HistoryNoteModel |  |  |
| HistoryViolationNotes | HistoryViolationNoteModel |  |  |
| Transactions | TransactionModelBase |  |  |
| Charges | ChargeModel |  |  |
| Payments | PaymentModel |  |  |
| Credits | CreditModel |  |  |
| Checks (DEPRECATED) As of 3/22/2022 replaced by TenantChecks | CheckModel |  |  |
| Bills (DEPRECATED) As of 3/22/2022 replaced by TenantBills | BillModel |  |  |
| Addresses | AddressModel |  |  |
| Invoices | InvoiceModel |  |  |
| RecurringCharges | RecurringChargeModel |  |  |
| WebUserAccounts | WebUserAccountModel |  |  |
| Subsidies | SubsidyModel |  |  |
| ScreeningStatus | String |  | Read Only , Calculated Field |
| Appointments | AppointmentModel |  |  |
| LateFees (DEPRECATED) As of 11/28/2018 replaced by LateFeeSetup | LateFeeModel |  |  |
| LateFeeSetup | LateFeeModel |  |  |
| OpenReceivables | OpenReceivableModel |  |  |
| RecurringChargeSummaries | RecurringChargeSummaryModel |  |  |
| Screenings | ScreeningModel |  |  |
| SecurityDepositSummaries | SecurityDepositSummaryModel |  |  |
| Tasks | TaskModel |  |  |
| WebUsers | WebUserModel |  |  |
| PaymentReversals | PaymentReversalModel |  |  |
| SecurityDepositHeld | Decimal |  | Requires Embed (SecurityDepositHeld) |
| Balance | Decimal |  | Requires Embed (Balance) |
| OpenBalance | Decimal |  | Requires Embed (OpenBalance) |
| Prospect | ProspectModel |  |  |
| HistorySystemNotes | HistorySystemNoteModel |  |  |
| HistoryWebAccountNotes | HistoryWebAccountNoteModel |  |  |
| Pets | PetModel |  |  |
| Loans | LoanModel |  |  |
| Status | eTenantStatus | EqualTo |  |
| ServiceManagerProjects | ServiceManagerProjectModel |  |  |
| SubsidyTenants | SubsidyTenantModel |  |  |
| RMVoIPCallHistory | RMVoIPCallHistoryModel |  |  |
| BillableExpenses | BillableExpenseModel |  |  |
| CashPayUser | CashPayUserModel |  |  |
| Violations | ViolationModel |  |  |
| RevenueRenewals | RevenueRenewalModel |  |  |
| Vehicles | VehicleModel |  |  |
| ShortTermReservations | ShortTermReservationModel |  |  |
| OverrideCreateUser | UserModel |  |  |
| OverrideUpdateUser | UserModel |  |  |
| TenantBills | TenantBillModel |  |  |
| TenantChecks | TenantCheckModel |  |  |
| CreditReversals | CreditReversalModel |  |  |
| AccountStatements | AccountStatementModel |  |  |
| OpenPrepays | OpenPrepayModel |  |  |
| IncomeVerifications | IncomeVerificationModel |  |  |
| EvictionID | Int32 | EqualTo | Read Only |
| Evictions | EvictionModel |  |  |
| HistoryEvictionNotes | HistoryEvictionNoteModel |  |  |
| HistoryEviction | HistoryEvictionModel |  |  |
| TransferGroupID | Int32 | EqualTo |  |
| SourceCustomerID | Int32 | EqualTo |  |
| TransferDate | DateTime |  |  |
| LastNameFirstName | String |  | Read Only , Calculated Field |
| TWAExpirationDate | DateTime |  | Read Only |
| AccountGroupMasterTenantID | Integer |  | Read Only , Calculated Field |
| MetaTag | String |  |  |

### Sample bodies

```json
GET Tenants?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
```

```json
[
  {
    "TenantID": 1,
    "TenantDisplayID": 2,
    "Name": "sample string 3",
    "FirstName": "sample string 4",
    "LastName": "sample string 5",
    "ColorID": 1,
    "SecurityDepositHeld": 39.0
  }
]
```


<a id="41-etenantstatus"></a>
### 4.1 eTenantStatus enum

> Source: `https://reama.api.rentmanager.com/Help/Model/eTenantStatus/Tenants-Retrieve-Collection`

The enum value page on the help portal returns a generic *Not Found* body — i.e. the documentation does not publish the integer/value list. Field declaration on the TenantModel: `Status: eTenantStatus` (filterable via `EqualTo` and `In`).

> **Caveat:** The value labels below are from the standard Rent Manager UI and have been observed in production tenants as filter values. Always verify against your live system before deploying.

| Value | Name | Description |
|---|---|---|
| 0 | Prospect | Prospective tenant who has not yet moved in. |
| 1 | Future | Approved tenant with a future move-in date. |
| 2 | Current | Active tenant currently occupying a unit. |
| 3 | Past | Former tenant — moved out. |
| 4 | Notice | Tenant who has given notice but has not yet moved out. |
| 5 | Eviction | Tenant in active eviction status. |
| 6 | Applicant | Submitted application; pending screening/approval. |
| 7 | Canceled | Application or future tenancy was canceled. |

> If your account uses customized statuses, query `/TenantStatuses` (if exposed in your build) or filter `/Tenants?filters=Status,eq,Current` and inspect returned values.

<a id="42-tenant-address-embed"></a>
## 4.2 Address embed (AddressModel)

> Source: `https://reama.api.rentmanager.com/Help/Model/AddressModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AddressID | Integer | EqualTo , In | Primary Key |
| AddressTypeID | Integer | EqualTo , In |  |
| Address | String |  |  |
| Street | String |  | Read Only |
| City | String |  | Read Only |
| State | String |  | Read Only |
| PostalCode | String |  | Read Only |
| IsPrimary | Boolean |  |  |
| IsBilling | Boolean |  |  |
| ParentID | Integer | EqualTo , In |  |
| ParentType | eAddressRelatedObjectTypes | EqualTo | Calculated Field |
| AddressType | AddressTypeModel |  |  |
| Contact | ContactModel |  |  |
| AssetManufacturer | AssetManufacturerModel |  |  |
| Owner | OwnerModel |  |  |
| Property | PropertyModel |  |  |
| Prospect | ProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Unit | UnitModel |  |  |
| Utility | UtilityModel |  |  |
| Vendor | VendorModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| LoanContact | LoanContactModel |  |  |
| GeoLocationCode | GeoLocationCodeModel |  |  |
| CountryID | Integer |  |  |
| MetaTag | String |  |  |

<a id="43-tenant-contact-embed"></a>
## 4.3 Contact embed (ContactModel)

> Source: `https://reama.api.rentmanager.com/Help/Model/ContactModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ContactID | Integer | EqualTo , In | Primary Key |
| FirstName | String |  |  |
| LastName | String |  |  |
| MiddleName | String |  |  |
| IsActive | Boolean | EqualTo |  |
| IsPrimary | Boolean |  |  |
| ContactType | ContactTypeModel |  |  |
| ContactTypeID | Integer | EqualTo |  |
| DateOfBirth | DateTime |  |  |
| FederalTaxID | String |  | Calculated Field |
| Comment | String |  |  |
| Email | String |  |  |
| License | String |  |  |
| Vehicle | String |  |  |
| ImageID | Integer | EqualTo |  |
| IsShowOnBill | Boolean | EqualTo |  |
| Employer | String |  |  |
| ApplicantType | eApplicantType |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateDate | DateTime |  |  |
| AnnualIncome | Decimal |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| ParentType | eContactRelatedObjectTypes | EqualTo |  |
| PhoneNumbers | PhoneNumberModel |  |  |
| Tenant | TenantModel |  |  |
| Prospect | ProspectModel |  |  |
| Vendor | VendorModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| UserDefinedValues | UserDefinedValueModel |  |  |
| Addresses | AddressModel |  |  |
| Image | ImageModel |  |  |
| CommitteeMembers | CommitteeMemberModel |  |  |
| BoardMemberTerms | BoardMemberTermModel |  |  |
| MetaTag | String |  |  |

<a id="44-tenant-phonenumber-embed"></a>
## 4.4 PhoneNumber embed (PhoneNumberModel)

> Source: `https://reama.api.rentmanager.com/Help/Model/PhoneNumberModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PhoneNumberID | Integer | EqualTo | Primary Key |
| PhoneNumberTypeID | Integer | EqualTo |  |
| PhoneNumber | String |  |  |
| Extension | String | EqualTo , In |  |
| StrippedPhoneNumber | String | EqualTo , In |  |
| IsPrimary | Boolean | EqualTo |  |
| IsTextReady | Boolean | EqualTo |  |
| IsInvalidForTexting | Boolean | EqualTo , NotEqualTo | Read Only |
| InvalidTextingErrorCode | String | EqualTo , NotEqualTo | Read Only |
| IsOptOut | Boolean | EqualTo , NotEqualTo | Read Only |
| ParentID | Integer | EqualTo , In |  |
| ParentType | ePhoneNumberRelatedObjectTypes | EqualTo , In |  |
| Contact | ContactModel |  |  |
| Utility | UtilityModel |  |  |
| Vendor | VendorModel |  |  |
| User | UserModel |  |  |
| Property | PropertyModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| PhoneNumberType | PhoneNumberTypeModel |  |  |
| WebUser | WebUserModel |  |  |
| LoanContact | LoanContactModel |  |  |
| MetaTag | String |  |  |

<a id="45-tenant-email-embed"></a>
## 4.5 Email embed (EmailModel)

> Source: `https://reama.api.rentmanager.com/Help/Model/EmailModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| Subject | String |  |  |
| ToAddresses | String |  |  |
| FromAddress | String |  |  |
| FromName | String |  |  |
| BodyText | String |  |  |
| IsHTML | Boolean |  |  |
| BCC | String |  |  |
| CC | String |  |  |
| ToEmailContacts | EmailRecipientModel |  |  |
| CCEmailContacts | EmailRecipientModel |  |  |
| BCCEmailContacts | EmailRecipientModel |  |  |
| Category | eUnsubscribedEmailCategory |  |  |
| MetaTag | String |  |  |

<a id="46-remaining-tenant-subresources"></a>
### 4.6 Remaining tenant sub-resources (not previously documented)

Accounting sub-resources (Charges, Payments, OpenReceivables, etc.) and embed/contact sub-resources (Addresses, Contacts, HistoryNotes, HistoryCalls, HistoryEmails, RMVoIPCallHistory, UserDefinedFields, UserDefinedValues) are documented in the prior reference files. The remaining tenant sub-resources are:

- `Appointments` — `/Help/Subresource/Tenants/Appointments`
- `BatchEmailTenants` — `/Help/Subresource/Tenants/BatchEmailTenants`
- `BatchEmailTenantsFromProperties` — `/Help/Subresource/Tenants/BatchEmailTenantsFromProperties`
- `BatchEmailTenantsFromUnits` — `/Help/Subresource/Tenants/BatchEmailTenantsFromUnits`
- `CashPayUser` — `/Help/Subresource/Tenants/CashPayUser`
- `Color` — `/Help/Subresource/Tenants/Color`
- `CreateUser` — `/Help/Subresource/Tenants/CreateUser`
- `Evictions` — `/Help/Subresource/Tenants/Evictions`
- `GetByPost` — `/Help/Subresource/Tenants/GetByPost`
- `GetFromAllLocations` — `/Help/Subresource/Tenants/GetFromAllLocations`
- `History` — `/Help/Subresource/Tenants/History`
- `HistoryEviction` — `/Help/Subresource/Tenants/HistoryEviction`
- `HistoryEvictionNotes` — `/Help/Subresource/Tenants/HistoryEvictionNotes`
- `HistorySystemNotes` — `/Help/Subresource/Tenants/HistorySystemNotes`
- `HistoryViolationNotes` — `/Help/Subresource/Tenants/HistoryViolationNotes`
- `HistoryVisits` — `/Help/Subresource/Tenants/HistoryVisits`
- `HistoryWebAccountNotes` — `/Help/Subresource/Tenants/HistoryWebAccountNotes`
- `HistoryWithUnitHistory` — `/Help/Subresource/Tenants/HistoryWithUnitHistory`
- `IncomeVerifications` — `/Help/Subresource/Tenants/IncomeVerifications`
- `Leases` — `/Help/Subresource/Tenants/Leases`
- `LeasingAgent` — `/Help/Subresource/Tenants/LeasingAgent`
- `Loans` — `/Help/Subresource/Tenants/Loans`
- `Pets` — `/Help/Subresource/Tenants/Pets`
- `Property` — `/Help/Subresource/Tenants/Property`
- `Prospect` — `/Help/Subresource/Tenants/Prospect`
- `QuickSearch` — `/Help/Subresource/Tenants/QuickSearch`
- `RevenueRenewals` — `/Help/Subresource/Tenants/RevenueRenewals`
- `RunScreening` — `/Help/Subresource/Tenants/RunScreening`
- `ScreeningMappedFieldValues` — `/Help/Subresource/Tenants/ScreeningMappedFieldValues`
- `ScreeningReportTypesForUser` — `/Help/Subresource/Tenants/ScreeningReportTypesForUser`
- `Screenings` — `/Help/Subresource/Tenants/Screenings`
- `Search` — `/Help/Subresource/Tenants/Search`
- `ServiceManagerProjects` — `/Help/Subresource/Tenants/ServiceManagerProjects`
- `ShortTermReservations` — `/Help/Subresource/Tenants/ShortTermReservations`
- `Tasks` — `/Help/Subresource/Tenants/Tasks`
- `TestScript` — `/Help/Subresource/Tenants/TestScript`
- `TransferTenant` — `/Help/Subresource/Tenants/TransferTenant`
- `UpdateUser` — `/Help/Subresource/Tenants/UpdateUser`
- `ValidateWebUserCredentials` — `/Help/Subresource/Tenants/ValidateWebUserCredentials`
- `Vehicles` — `/Help/Subresource/Tenants/Vehicles`
- `Violations` — `/Help/Subresource/Tenants/Violations`
- `WebUserAccounts` — `/Help/Subresource/Tenants/WebUserAccounts`
- `WebUsers` — `/Help/Subresource/Tenants/WebUsers`

> Notable items:
>
> - **TransferTenant** — re-assign a tenant record to a different unit/property.
> - **CreateUser / UpdateUser** — create or update the Rent Manager user that owns the tenant record.
> - **CashPayUser** — Cash-pay user provisioning (Western Union / WIPS style integrations).
> - **Evictions / HistoryEviction / HistoryEvictionNotes** — eviction workflow records.
> - **HistoryViolationNotes / Violations** — violation history (covered in the Violations reference).
> - **HistoryWebAccountNotes / WebUserAccounts / WebUsers / ValidateWebUserCredentials** — Tenant Web Access (TWA) portal integration.
> - **IncomeVerifications** — affordable / subsidy income verification flow.
> - **RunScreening / Screenings / ScreeningMappedFieldValues / ScreeningReportTypesForUser** — applicant screening integrations.
> - **Loans / Pets / Vehicles / Tasks / Appointments / ServiceManagerProjects / ShortTermReservations** — ancillary tenant-linked records.
> - **TestScript** — diagnostic; not for production use.
> - **QuickSearch / Search / GetByPost / GetFromAllLocations / LimitedAccessSearch** — discovery / lookup helpers.
> - **Color / LeasingAgent / Property** — convenience embeds.
> - **BatchEmailTenants / BatchEmailTenantsFromProperties / BatchEmailTenantsFromUnits** — bulk email sending.

<a id="5-leases"></a>
## 5. Leases

<a id="5-leases-resource"></a>
## 5.0 Leases resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/Leases`

### Endpoints

- `GET Leases?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | LeaseFilterFields List | Define this parameter in the request URI. |
| embeds | LeaseEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | LeaseOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LeaseID | Integer | EqualTo , In | Primary Key |
| TenantID | Integer | EqualTo , In |  |
| UnitID | Int32 | EqualTo , In |  |
| PropertyID | Integer | EqualTo , In |  |
| IsCommercial | Boolean |  |  |
| MoveInDate | DateTime |  |  |
| MoveOutDate | DateTime |  |  |
| ExpectedMoveOutDate | DateTime |  |  |
| NoticeDate | DateTime |  |  |
| IsMoveOutConfirmed | Boolean |  |  |
| ArrivalDate | DateTime |  |  |
| DepartureDate | DateTime |  |  |
| IsExcludeFromMasterPolicy | Boolean |  |  |
| SortOrder | Integer |  |  |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| StartDate | DateTime |  | Read Only , Calculated Field , Requires Embed (LeaseRenewals) |
| EndDate | DateTime |  | Read Only , Calculated Field , Requires Embed (LeaseRenewals) |
| CreateUserID | Integer | EqualTo |  |
| UpdateUserID | Integer | EqualTo |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| LeaseRenewals | LeaseRenewalModel |  |  |
| Property | PropertyModel |  |  |
| Tenant | TenantModel |  |  |
| Unit | UnitModel |  |  |
| RetailSales | RetailSaleModel |  |  |
| RenterInsurancePolicies | RenterInsurancePolicyModel |  |  |
| ActiveRenterInsurancePolicy | RenterInsurancePolicyModel |  |  |
| PropertyUnit | String |  | Read Only , Calculated Field |
| UnitProperty | String |  | Read Only , Calculated Field |
| ActiveLeaseRenewal | LeaseRenewalModel |  |  |
| PromotionPeriods | PromotionPeriodModel |  |  |
| LeaseVehicles | LeaseVehicleModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET Leases?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "LeaseID": 1,
    "TenantID": 2
  }
]
```


<a id="51-leasemodel"></a>
## 5.1 LeaseModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LeaseModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LeaseID | Integer | EqualTo , In | Primary Key |
| TenantID | Integer | EqualTo , In |  |
| UnitID | Int32 | EqualTo , In |  |
| PropertyID | Integer | EqualTo , In |  |
| IsCommercial | Boolean |  |  |
| MoveInDate | DateTime |  |  |
| MoveOutDate | DateTime |  |  |
| ExpectedMoveOutDate | DateTime |  |  |
| NoticeDate | DateTime |  |  |
| IsMoveOutConfirmed | Boolean |  |  |
| ArrivalDate | DateTime |  |  |
| DepartureDate | DateTime |  |  |
| IsExcludeFromMasterPolicy | Boolean |  |  |
| SortOrder | Integer |  |  |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| StartDate | DateTime |  | Read Only , Calculated Field , Requires Embed (LeaseRenewals) |
| EndDate | DateTime |  | Read Only , Calculated Field , Requires Embed (LeaseRenewals) |
| CreateUserID | Integer | EqualTo |  |
| UpdateUserID | Integer | EqualTo |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| LeaseRenewals | LeaseRenewalModel |  |  |
| Property | PropertyModel |  |  |
| Tenant | TenantModel |  |  |
| Unit | UnitModel |  |  |
| RetailSales | RetailSaleModel |  |  |
| RenterInsurancePolicies | RenterInsurancePolicyModel |  |  |
| ActiveRenterInsurancePolicy | RenterInsurancePolicyModel |  |  |
| PropertyUnit | String |  | Read Only , Calculated Field |
| UnitProperty | String |  | Read Only , Calculated Field |
| ActiveLeaseRenewal | LeaseRenewalModel |  |  |
| PromotionPeriods | PromotionPeriodModel |  |  |
| LeaseVehicles | LeaseVehicleModel |  |  |
| MetaTag | String |  |  |

<a id="52-leases-endpoints"></a>
### 5.2 Leases endpoints & sub-resources

Sub-resources available under `/Leases`:

- `ActiveLeaseRenewal`
- `CreateUser` / `UpdateUser`
- `GetByPost`
- `LeaseRenew` (POST — initiate renewal flow)
- `LeaseRenewals` (collection)
- `Property` / `Tenant` / `Unit` (convenience embeds)
- `QuickSearch` / `Search`
- `RetailSales` (commercial / retail rent flows)

Standard endpoints:

- `GET /Leases` — collection
- `GET /Leases/{id}` — instance
- `POST /Leases` — Save (create / update)
- `DELETE /Leases` — collection delete
- `DELETE /Leases/{id}` — instance delete

<a id="53-leases-save"></a>
### 5.3 Leases / Save

The POST body is an array of `LeaseModel`. Required-on-create at minimum: `TenantID`, `UnitID`, `StartDate`, `EndDate` (or `TermType` if month-to-month). Inspect the LeaseModel table above for the full property list (`LeaseTermID`, `Rent`, `SecurityDeposit`, `MoveInDate`, `MoveOutDate`, etc.).

```json
[
  {
    "TenantID": 12345,
    "UnitID": 678,
    "StartDate": "2026-06-01",
    "EndDate": "2027-05-31",
    "Rent": 1850.00,
    "SecurityDeposit": 1850.00
  }
]
```

<a id="6-lettertemplates"></a>
## 6. LetterTemplates

<a id="6-lettertemplates-resource"></a>
## 6.0 LetterTemplates resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/LetterTemplates`

### Endpoints

- `GET LetterTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | LetterTemplateFilterFields List | Define this parameter in the request URI. |
| embeds | LetterTemplateEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | LetterTemplateOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| getOptions | LetterTemplateGetOptions List | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateID | Integer | EqualTo , In | Primary Key |
| Name | String | EqualTo |  |
| LetterTemplateType | eLetterTemplateType | EqualTo , In |  |
| Description | String |  |  |
| SortOrder | Integer |  |  |
| Token | String |  |  |
| IsAllUsers | Boolean |  |  |
| RecordsPerPage | Integer |  |  |
| HeaderLetterTemplateID | Integer |  |  |
| FooterLetterTemplateID | Integer |  |  |
| ScriptBeforeMerge | String |  |  |
| IsKeepTogether | Boolean |  |  |
| IsLockAfterMerged | Boolean |  |  |
| IsVPOReady | Boolean |  |  |
| IsSignable | Boolean |  |  |
| IsAdverseActionLetter | Boolean |  |  |
| IsIncomeVerificationAdverseActionLetter | Boolean |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ConcurrencyID | Integer |  | Concurrency Key |
| IsOnRightClickMenu | Boolean | EqualTo |  |
| IsOnLetterMenu | Boolean | EqualTo |  |
| VPOToAddress | String |  |  |
| VPOFromAddress | String |  |  |
| LetterTemplateUsers | LetterTemplateUserModel |  |  |
| LetterTemplateRoles | LetterTemplateRoleModel |  |  |
| LetterTemplateFilters | LetterTemplateFilterModel |  |  |
| Header | LetterTemplateModel |  |  |
| Footer | LetterTemplateModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| MaximumSignerCount | Integer |  | Read Only |
| RequiresCompanyRepresentativeSignatures | Boolean |  | Read Only |
| HistoryCategoryID | Integer | EqualTo |  |
| IsEmailEnabled | Boolean |  |  |
| EmailSubject | String |  |  |
| SignableFields | LetterTemplateSignableFieldModel |  |  |
| LetterTemplateLetterTemplateFolder | LetterTemplateLetterTemplateFolderModel |  |  |
| DocumentPacketDocuments | DocumentPacketDocumentModel |  |  |
| HistoryCategory | HistoryCategoryModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET LetterTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
```

```json
[
  {
    "LetterTemplateID": 1,
    "Name": "sample string 2",
    "Description": "sample string 3",
    "IsOnRightClickMenu": true,
    "IsOnLetterMenu": true,
    "MaximumSignerCount": 27,
    "RequiresCompanyRepresentativeSignatures": true
  }
]
```


<a id="61-lettertemplatemodel"></a>
## 6.1 LetterTemplateModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LetterTemplateModel/LetterTemplates-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateID | Integer | EqualTo , In | Primary Key |
| Name | String | EqualTo |  |
| LetterTemplateType | eLetterTemplateType | EqualTo , In |  |
| Description | String |  |  |
| SortOrder | Integer |  |  |
| Token | String |  |  |
| IsAllUsers | Boolean |  |  |
| RecordsPerPage | Integer |  |  |
| HeaderLetterTemplateID | Integer |  |  |
| FooterLetterTemplateID | Integer |  |  |
| ScriptBeforeMerge | String |  |  |
| IsKeepTogether | Boolean |  |  |
| IsLockAfterMerged | Boolean |  |  |
| IsVPOReady | Boolean |  |  |
| IsSignable | Boolean |  |  |
| IsAdverseActionLetter | Boolean |  |  |
| IsIncomeVerificationAdverseActionLetter | Boolean |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ConcurrencyID | Integer |  | Concurrency Key |
| IsOnRightClickMenu | Boolean | EqualTo |  |
| IsOnLetterMenu | Boolean | EqualTo |  |
| VPOToAddress | String |  |  |
| VPOFromAddress | String |  |  |
| LetterTemplateUsers | LetterTemplateUserModel |  |  |
| LetterTemplateRoles | LetterTemplateRoleModel |  |  |
| LetterTemplateFilters | LetterTemplateFilterModel |  |  |
| Header | LetterTemplateModel |  |  |
| Footer | LetterTemplateModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| MaximumSignerCount | Integer |  | Read Only |
| RequiresCompanyRepresentativeSignatures | Boolean |  | Read Only |
| HistoryCategoryID | Integer | EqualTo |  |
| IsEmailEnabled | Boolean |  |  |
| EmailSubject | String |  |  |
| SignableFields | LetterTemplateSignableFieldModel |  |  |
| LetterTemplateLetterTemplateFolder | LetterTemplateLetterTemplateFolderModel |  |  |
| DocumentPacketDocuments | DocumentPacketDocumentModel |  |  |
| HistoryCategory | HistoryCategoryModel |  |  |
| MetaTag | String |  |  |

<a id="62-lettertemplate-submodels"></a>
### 6.2 LetterTemplate sub-models

<a id="62-lt-user"></a>
## LetterTemplateUserModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LetterTemplateUserModel/LetterTemplates-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateUserID | Integer | EqualTo | Primary Key |
| LetterTemplateID | Integer | In |  |
| UserID | Integer | In |  |
| SortOrder | Integer |  |  |
| User | UserModel |  |  |
| MetaTag | String |  |  |

<a id="62-lt-role"></a>
## LetterTemplateRoleModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LetterTemplateRoleModel/LetterTemplates-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateRoleID | Integer | EqualTo | Primary Key |
| LetterTemplateID | Integer | In |  |
| RoleID | Integer | EqualTo , In |  |
| SortOrder | Integer |  |  |
| Role | RoleModel |  |  |
| LetterTemplate | LetterTemplateModel |  |  |
| MetaTag | String |  |  |

<a id="62-lt-folder"></a>
## LetterTemplateLetterTemplateFolderModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LetterTemplateLetterTemplateFolderModel/LetterTemplates-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateLetterTemplateFolderID | Integer | EqualTo , In | Primary Key |
| LetterTemplateID | Integer | EqualTo , In |  |
| LetterTemplateFolderID | Integer | EqualTo |  |
| LetterTemplate | LetterTemplateModel |  |  |
| LetterTemplateFolder | LetterTemplateFolderModel |  |  |
| MetaTag | String |  |  |

<a id="62-lt-sign"></a>
## LetterTemplateSignableFieldModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LetterTemplateSignableFieldModel/LetterTemplates-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| FieldType | eSignableDocumentFieldType |  |  |
| ComboList | String |  |  |
| DefaultValue | String |  |  |
| PrecisionValue | Integer |  |  |
| IsRequired | Boolean |  |  |
| PageNumber | Integer |  |  |
| X | Decimal |  |  |
| Y | Decimal |  |  |
| Height | Integer |  |  |
| Width | Integer |  |  |
| Name | String |  |  |
| Description | String |  |  |
| IsMultiline | Boolean |  |  |
| IsWordwrap | Boolean |  |  |
| MatchToID | Integer |  |  |
| HandlingID | Integer |  |  |
| AllowEditDuringPublish | Boolean |  |  |
| LabelStyle | String |  |  |
| IsPreparerField | Boolean |  |  |
| MetaTag | String |  |  |

<a id="62-lt-filter"></a>
## LetterTemplateFilterModel

> Source: `https://reama.api.rentmanager.com/Help/Model/LetterTemplateFilterModel/LetterTemplates-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateFilterID | Integer | EqualTo | Primary Key |
| LetterTemplateID | Integer | EqualTo , In |  |
| Script | String |  |  |
| Criteria | String |  |  |
| ItemOrder | Integer |  |  |
| CompareValue | String |  |  |
| LetterTemplate | LetterTemplateModel |  |  |
| MetaTag | String |  |  |

<a id="63-elettertemplatetype"></a>
### 6.3 eLetterTemplateType enum

> Source: `https://reama.api.rentmanager.com/Help/Model/eLetterTemplateType/LetterTemplates-Retrieve-Collection`

The enum value page returns *Not Found*; the help portal does not publish the value list. Field declaration on `LetterTemplateModel`: `LetterTemplateType: eLetterTemplateType` (filterable via `EqualTo`, `In`).

> **Caveat:** The Rent Manager UI categorizes letter templates by intended use. Best-effort observed values (verify against your tenant DB):

| Value | Name | Description |
|---|---|---|
| 0 | Letter | General-purpose letter / merge document. |
| 1 | Lease | Lease document template. |
| 2 | Statement | Tenant statement layout. |
| 3 | Invoice | Invoice / bill layout. |
| 4 | Check | Printed check layout. |
| 5 | Email | Email body template. |
| 6 | Report | Custom report layout. |
| 7 | Form | Form / addendum template. |
| 8 | LegalNotice | Legal / eviction notice template. |
| 9 | LateNotice | Late-rent notice template. |
| 10 | Receipt | Payment receipt template. |

> If your account has custom template types, retrieve the actual values by querying `/LetterTemplates?fields=LetterTemplateID,Name,LetterTemplateType&pageSize=500` and grouping the responses.

<a id="64-lettertemplates-endpoints"></a>
### 6.4 LetterTemplates endpoints & sub-resources

Standard endpoints:

- `GET /LetterTemplates` — collection
- `GET /LetterTemplates/{id}` — instance
- `POST /LetterTemplates` — Save
- `DELETE /LetterTemplates` / `DELETE /LetterTemplates/{id}` — delete

Sub-resources:

- `CreateUser` / `UpdateUser`
- `DownloadFile` — download the merged template document
- `Footer` / `Header` — sub-letters used as common footer/header
- `GetByPost`
- `HistoryCategory` (link to the HistoryCategory used when this template is run)
- `LetterTemplateFilters` (record-set filter assigned to the template)
- `LetterTemplateLetterTemplateFolder` (folder/folder-membership)
- `LetterTemplateRoles` (role-level access)
- `LetterTemplateUsers` (user-level access)
- `MergeLetterTemplate` (POST — perform a merge against a recordset)
- `QuickSearch` / `Search`
- `RunLetterTemplates` (POST — run a template against context)
- `UploadFile` — upload a template body (.docx / RTF)

<a id="65-lettertemplates-save"></a>
### 6.5 LetterTemplates / Save

```json
[
  {
    "Name": "5-Day Late Notice",
    "LetterTemplateType": 9,
    "Description": "Initial late-rent notice (5 days past due)",
    "IsAllUsers": true,
    "IsOnLetterMenu": true
  }
]
```

<a id="7-files-fileattachments-resolved"></a>
## 7. Files / FileAttachments — resolved

> **`/Help/Resource/Files`, `/Help/Resource/FileAttachments`, `/Help/Resource/Attachments` all return HTTP 500.** They are not standalone top-level resources in the Rent Manager API. File attachments are managed as sub-resources of the entity they belong to (HistoryNote, Property, Tenant, Owner, Vendor, etc.). The most useful endpoints are documented below.

<a id="71-propertyfiles"></a>
## 7.1 PropertyFiles + PropertyFileFolders

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Properties/PropertyFiles`

### Endpoints

- `DELETE Properties/{id}/PropertyFiles?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| ids | Integer | Define this parameter in the request URI. |
| deleteOptions | DeleteOption List | Define this parameter in the request URI. |

### Sample bodies

```json
DELETE Properties/{id}/PropertyFiles?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}
```


<a id="71-propertyfilefolders"></a>
## Properties / PropertyFileFolders

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Properties/PropertyFileFolders`

### Endpoints

- `DELETE Properties/{id}/PropertyFileFolders?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| ids | Integer | Define this parameter in the request URI. |
| deleteOptions | DeleteOption List | Define this parameter in the request URI. |

### Sample bodies

```json
DELETE Properties/{id}/PropertyFileFolders?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}
```


<a id="71-propertyfilemodel"></a>
## PropertyFileModel

> Source: `https://reama.api.rentmanager.com/Help/Model/PropertyFileModel/Properties-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PropertyFileID | Integer | EqualTo | Primary Key |
| PropertyID | Integer | EqualTo , In |  |
| FileID | Integer | EqualTo |  |
| PropertyFileFolderID | Integer | EqualTo |  |
| Title | String |  |  |
| Description | String |  |  |
| SortOrder | Integer |  |  |
| FileSize | Integer |  |  |
| ShowInTWA | Boolean |  |  |
| IsBoardOnly | Boolean |  |  |
| TWAPublishDate | DateTime |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| ConcurrencyID | Integer |  | Concurrency Key |
| Property | PropertyModel |  |  |
| File | FileModel |  |  |
| PropertyFolder | PropertyFileFolderModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| MetaTag | String |  |  |

<a id="71-propertyfilefoldermodel"></a>
## PropertyFileFolderModel

> Source: `https://reama.api.rentmanager.com/Help/Model/PropertyFileFolderModel/Properties-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PropertyFileFolderID | Integer | EqualTo | Primary Key |
| PropertyID | Integer | EqualTo , In |  |
| ParentFileFolderID | Integer | EqualTo |  |
| Title | String |  |  |
| SortOrder | Integer |  |  |
| ShowInTWA | Boolean |  |  |
| IsBoardOnly | Boolean |  |  |
| TWAPublishDate | DateTime |  |  |
| ChildFilesShownInTWA | Integer |  | Read Only |
| ChildFilesCount | Integer |  | Read Only |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| ConcurrencyID | Integer |  | Concurrency Key |
| Property | PropertyModel |  |  |
| ParentFileFolder | PropertyFileFolderModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| PropertyFiles | PropertyFileModel |  |  |
| MetaTag | String |  |  |

<a id="72-historynote-attachment-endpoints"></a>
### 7.2 HistoryNote Attachment / UploadAttachment(s)

See §2.3 above for the full HistoryNote attachment flow. Quick reference:

- `GET /HistoryNotes/{id}/Attachments`
- `POST /HistoryNotes/{id}/UploadAttachment` (multipart/form-data, single file)
- `POST /HistoryNotes/{id}/UploadAttachments` (multipart/form-data, multiple files)

<a id="73-property-uploadimage"></a>
### 7.3 Property UploadImage / UploadLogoFile

<a id="73-uploadimage"></a>
## Properties / UploadImage

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Properties/UploadImage`

### Endpoints

- `POST Properties/{id}/UploadImage`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| item | ImageModel | Define this parameter in the request body. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ImageID | Integer | EqualTo , In | Primary Key |
| ImageTypeID | Integer | EqualTo , In |  |
| FileID | Integer | EqualTo |  |
| File | ImageFileModel |  |  |
| Rotation | Integer |  | Read Only |
| Scale | Decimal |  | Read Only |
| PositionY | Integer |  | Read Only |
| PositionX | Integer |  | Read Only |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer | EqualTo |  |
| SortOrder | Integer |  |  |
| Caption | String |  |  |
| ParentID | Integer | EqualTo , In |  |
| Token (DEPRECATED) As of 3/22/2019 replaced by File.DownloadURL | String |  | Calculated Field |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ImageType | ImageTypeModel |  |  |
| Property | PropertyModel |  |  |
| Unit | UnitModel |  |  |
| UnitType | UnitTypeModel |  |  |
| Contact | ContactModel |  |  |
| Pet | PetModel |  |  |
| Asset | AssetModel |  |  |
| Violation | ViolationModel |  |  |
| User | UserModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST Properties/{id}/UploadImage
```

```json
{
  "ImageID": 1,
  "ImageTypeID": 2,
  "FileID": 3,
  "Rotation": 4,
  "Scale": 5.0,
  "PositionY": 6,
  "PositionX": 7,
  "CreateDate": "2026-05-06T09:41:25.9840805-04:00",
  "CreateUserID": 9,
  "SortOrder": 10,
  "Caption": "sample string 11",
  "ParentID": 12,
  "Token": "sample+string+13",
  "UpdateDate": "2026-05-06T09:41:25.9840805-04:00",
  "UpdateUserID": 15,
  "ImageType": {},
  "MetaTag": "sample string 18"
}
```

```json
{
  "ImageID": 1,
  "ImageTypeID": 2,
  "FileID": 3,
  "Rotation": 4,
  "Scale": 5.0,
  "PositionY": 6,
  "PositionX": 7,
  "CreateDate": "2026-05-06T09:41:25.9840805-04:00",
  "CreateUserID": 9,
  "SortOrder": 10,
  "Caption": "sample string 11",
  "ParentID": 12,
  "Token": "NnQG6SqOrGJ6iyCSAu8XE_V_rMLlppErAvLHJB0Fna3y15WuVDmpOklPLRPMNURn5IMxgt5zUTViDUxlKiBqyDQyANz9HD4U7GINmlULV4DAUysANSYJNzT4o1DUxrWF0mOmT4I3nhE-i27js9VYo2vQBBryM8xjtGihaRO9hJA%3d",
  "UpdateDate": "2026-05-06T09:41:25.9840805-04:00",
  "UpdateUserID": 15,
  "ImageType": {
    "MaxImageSize": "FiveHundred"
  },
  "MetaTag": "sample string 18"
}
```


<a id="74-upload-udv-attachment"></a>
### 7.4 UploadUserDefinedValueAttachment (Tenants & Properties)

User Defined Values of type *File / Attachment* require a separate multipart upload step. Both Tenants and Properties expose the endpoint:

<a id="74-udv-tenants"></a>
## Tenants / UploadUserDefinedValueAttachment

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Tenants/UploadUserDefinedValueAttachment`

### Endpoints

- `POST Tenants/{id}/UploadUserDefinedValueAttachment`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| item | UserDefinedValueModel | Define this parameter in the request body. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserDefinedValueID | Integer | EqualTo , In | Primary Key |
| UserDefinedFieldID | Integer | EqualTo , In |  |
| ParentID | Integer | EqualTo , In |  |
| Name | String |  | Read Only |
| Value | String | EqualTo |  |
| DateValue | DateTime |  | Read Only , Calculated Field |
| NumericValue | Decimal |  | Read Only , Calculated Field |
| UpdateDate | DateTime |  |  |
| CreateDate | DateTime |  |  |
| FieldType | eUserDefinedFieldType |  | Read Only |
| Attachment | FileModel |  |  |
| UserDefinedField | UserDefinedFieldModel |  |  |
| UpdateUserID | Integer | EqualTo |  |
| CreateUserID | Integer | EqualTo |  |
| Tenant | TenantModel |  |  |
| Property | PropertyModel |  |  |
| Prospect | ProspectModel |  |  |
| Vendor | VendorModel |  |  |
| ServiceManagerIssue | ServiceManagerIssueModel |  |  |
| ServiceManagerRecurringIssue | ServiceManagerRecurringIssueModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| LeaseRenewal | LeaseRenewalModel |  |  |
| CommercialLeaseRenewal | LeaseRenewalModel |  |  |
| NonCommercialLeaseRenewal | LeaseRenewalModel |  |  |
| Contact | ContactModel |  |  |
| InventoryItem | InventoryItemModel |  |  |
| Unit | UnitModel |  |  |
| Asset | AssetModel |  |  |
| Job | JobModel |  |  |
| Eviction | EvictionModel |  |  |
| User | UserModel |  |  |
| Loan | LoanModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST Tenants/{id}/UploadUserDefinedValueAttachment
```

```json
{
  "UserDefinedValueID": 1,
  "UserDefinedFieldID": 2,
  "ParentID": 3,
  "Name": "sample string 4",
  "Value": "sample string 5",
  "UpdateDate": "2026-05-06T09:40:54.4544818-04:00",
  "CreateDate": "2026-05-06T09:40:54.4544818-04:00",
  "FieldType": "Text",
  "UpdateUserID": 8,
  "CreateUserID": 9,
  "MetaTag": "sample string 12"
}
```

```json
{
  "UserDefinedValueID": 1,
  "UserDefinedFieldID": 2,
  "ParentID": 3,
  "Name": "sample string 4",
  "Value": "sample string 5",
  "UpdateDate": "2026-05-06T09:40:54.4544818-04:00",
  "CreateDate": "2026-05-06T09:40:54.4544818-04:00",
  "FieldType": "Text",
  "UpdateUserID": 8,
  "CreateUserID": 9,
  "MetaTag": "sample string 12"
}
```


<a id="74-udv-properties"></a>
## Properties / UploadUserDefinedValueAttachment

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Properties/UploadUserDefinedValueAttachment`

### Endpoints

- `POST Properties/{id}/UploadUserDefinedValueAttachment`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| item | UserDefinedValueModel | Define this parameter in the request body. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserDefinedValueID | Integer | EqualTo , In | Primary Key |
| UserDefinedFieldID | Integer | EqualTo , In |  |
| ParentID | Integer | EqualTo , In |  |
| Name | String |  | Read Only |
| Value | String | EqualTo |  |
| DateValue | DateTime |  | Read Only , Calculated Field |
| NumericValue | Decimal |  | Read Only , Calculated Field |
| UpdateDate | DateTime |  |  |
| CreateDate | DateTime |  |  |
| FieldType | eUserDefinedFieldType |  | Read Only |
| Attachment | FileModel |  |  |
| UserDefinedField | UserDefinedFieldModel |  |  |
| UpdateUserID | Integer | EqualTo |  |
| CreateUserID | Integer | EqualTo |  |
| Tenant | TenantModel |  |  |
| Property | PropertyModel |  |  |
| Prospect | ProspectModel |  |  |
| Vendor | VendorModel |  |  |
| ServiceManagerIssue | ServiceManagerIssueModel |  |  |
| ServiceManagerRecurringIssue | ServiceManagerRecurringIssueModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| LeaseRenewal | LeaseRenewalModel |  |  |
| CommercialLeaseRenewal | LeaseRenewalModel |  |  |
| NonCommercialLeaseRenewal | LeaseRenewalModel |  |  |
| Contact | ContactModel |  |  |
| InventoryItem | InventoryItemModel |  |  |
| Unit | UnitModel |  |  |
| Asset | AssetModel |  |  |
| Job | JobModel |  |  |
| Eviction | EvictionModel |  |  |
| User | UserModel |  |  |
| Loan | LoanModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
POST Properties/{id}/UploadUserDefinedValueAttachment
```

```json
{
  "UserDefinedValueID": 1,
  "UserDefinedFieldID": 2,
  "ParentID": 3,
  "Name": "sample string 4",
  "Value": "sample string 5",
  "UpdateDate": "2026-05-06T09:41:26.7203856-04:00",
  "CreateDate": "2026-05-06T09:41:26.7203856-04:00",
  "FieldType": "Text",
  "UpdateUserID": 8,
  "CreateUserID": 9,
  "MetaTag": "sample string 12"
}
```

```json
{
  "UserDefinedValueID": 1,
  "UserDefinedFieldID": 2,
  "ParentID": 3,
  "Name": "sample string 4",
  "Value": "sample string 5",
  "UpdateDate": "2026-05-06T09:41:26.7203856-04:00",
  "CreateDate": "2026-05-06T09:41:26.7203856-04:00",
  "FieldType": "Text",
  "UpdateUserID": 8,
  "CreateUserID": 9,
  "MetaTag": "sample string 12"
}
```


<a id="8-properties"></a>
## 8. Properties

<a id="8-properties-resource"></a>
## 8.0 Properties resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/Properties`

### Endpoints

- `GET Properties?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | PropertyFilterFields List | Define this parameter in the request URI. |
| embeds | PropertyEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | PropertyOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| getOptions | PropertyGetOptions List | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PropertyID | Integer | EqualTo , In | Primary Key |
| Name | String | EqualTo |  |
| ShortName | String | EqualTo , In |  |
| BillingName1 | String |  |  |
| BillingName2 | String |  |  |
| ManagerName | String |  |  |
| IsActive | Boolean |  |  |
| IsCommercial | Boolean |  |  |
| PropertyType | ePropertyType | EqualTo , In |  |
| Email | String |  |  |
| TaxID | String |  |  |
| StatementMethod | eStatementMethod | EqualTo |  |
| Comment | String |  |  |
| LogoFileID | Integer | EqualTo |  |
| ServiceManagerAssignedUserID | Integer |  |  |
| IsSystemDefaultAssignedUser | Boolean |  | Calculated Field |
| IsOverrideAssignedUserID | Boolean |  |  |
| IsAllocationOrderDisabled | Boolean |  |  |
| IsAllocationOrderSortedByMonth | Boolean |  |  |
| IsOverwriteTimeZone | Boolean |  |  |
| IsTimeZoneOffsetEnabled | Boolean |  |  |
| TimeZoneOffset | Integer |  |  |
| IsDaylightSavingsTime | Boolean |  |  |
| IsOverrideFiscalYear | Boolean |  |  |
| FiscalYearStartDay | Integer |  |  |
| FiscalYearStartMonth | Integer |  |  |
| FiscalYearEndDay | Integer |  |  |
| FiscalYearEndMonth | Integer |  |  |
| IsOverrideDefaultHolidays | Boolean |  |  |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateUserID | Integer | EqualTo |  |
| ConcurrencyID | Integer |  |  |
| ColorID | Integer |  |  |
| Color | ColorModel |  |  |
| DefaultInspectorID | Integer |  |  |
| IsLateChargeEnabled | Boolean |  |  |
| IsOwnerPayPerUnit | Boolean |  |  |
| IsEpayEnabled | Boolean |  |  |
| IsLockboxEnabled | Boolean |  |  |
| IsEndorsementOverride | Boolean |  |  |
| EndorsementOverride | String |  |  |
| SquareFootage | Integer |  |  |
| DefaultBankID | Integer | EqualTo |  |
| PrimaryOwnerID | Integer | EqualTo |  |
| PostingDay | Integer |  |  |
| CheckTemplateID (DEPRECATED) As of 8/7/2018 replaced by OwnerCheckSetupID | Integer | EqualTo |  |
| OwnerCheckSetupID | Integer | EqualTo |  |
| LastMonthlyPost | DateTime |  | Read Only |
| LastWeeklyPost | DateTime |  | Read Only |
| LastDailyPost | DateTime |  | Read Only |
| LastManagementFeePost | DateTime |  | Read Only |
| IsSecurityDepositInterestEnabled | Boolean | EqualTo |  |
| ARAutomationUseSystemPreference | Boolean |  |  |
| ARAutomationSchedule | ARAutomationScheduleModel |  |  |
| OccupancyUnitCount | Integer |  | Calculated Field |
| LastUnitCountPost | DateTime |  | Read Only |
| ARAutomationScheduleID | Integer |  |  |
| AccountingCloseOption | eAccountingCloseOption |  |  |
| EvictionWorkflowID | Int32 |  |  |
| IsShortTermRental | Boolean | EqualTo | Read Only |
| IsTrackRentersInsurance | Boolean | EqualTo |  |
| IsUseMasterPolicy (DEPRECATED) As of 3/15/2026 | Boolean | EqualTo | Read Only |
| MasterPolicyChargeAmount | Decimal |  | Read Only |
| IsOverrideNSFFee | Boolean |  |  |
| NSFFeeAmount | Decimal |  |  |
| AccountingClose | AccountingCloseModel |  |  |
| ServiceManagerAssignedUser | UserModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| PhoneNumbers | PhoneNumberModel |  |  |
| PrimaryPhoneNumber | PhoneNumberModel |  |  |
| DefaultBank | GLAccountModel |  |  |
| PrimaryOwner | OwnerModel |  |  |
| Addresses | AddressModel |  |  |
| PrimaryAddress | AddressModel |  |  |
| BillingAddress | AddressModel |  |  |
| RentChargeTypes (DEPRECATED) As of 7/30/2018 replaced by PropertyRentChargeTypes | SelectListItemModel |  | Required (create) |
| PropertyRentChargeTypes | PropertyRentChargeTypeModel |  |  |
| DefaultInspector | UserModel |  |  |
| ChargeTypeBanks | ChargeTypeBankModel |  |  |
| PropertyFloors | PropertyFloorModel |  |  |
| RentChargeTypeItems | ChargeTypeModel |  |  |
| Floors | FloorModel |  |  |
| Banks | BankModel |  |  |
| PropertyBanks | PropertyBankModel |  |  |
| UnitTypeProperties | UnitTypePropertyModel |  |  |
| History | HistoryModel |  |  |
| UserDefinedValues | UserDefinedValueModel |  |  |
| RecurringCharges | RecurringChargeModel |  |  |
| RecurringChargeSummaries | RecurringChargeSummaryModel |  |  |
| Units | UnitModel |  |  |
| UserProperties | UserPropertyModel |  |  |
| Users | UserModel |  |  |
| MarketingData | PropertyMarketingDataModel |  |  |
| FeedTypeID | eOnlineListingFeedType |  | Read Only |
| ScreeningSetting | ScreeningSettingModel |  |  |
| LogoFile | FileModel |  |  |
| Images | ImageModel |  |  |
| ManagementFeeHistory | ManagementFeeHistoryModel |  |  |
| ApplicationTemplates | ApplicationTemplateModel |  |  |
| ApplicationSettings | ApplicationSettingsModel |  |  |
| PropertyManagementFeeSetups | PropertyManagementFeeSetupModel |  |  |
| ManagementFeeSetup | ManagementFeeSetupModel |  |  |
| LastSuccessfulOnlineListingsPosting | DateTime |  | Read Only |
| IsOptOutCreditReporting | Boolean |  |  |
| PropertyGroups | PropertyGroupModel |  |  |
| PropertyGroupDetails | PropertyGroupDetailModel |  |  |
| OwnerContracts | OwnerContractModel |  |  |
| Ownerships | OwnerContractModel |  |  |
| PropertyFiles | PropertyFileModel |  |  |
| PropertyFileFolders | PropertyFileFolderModel |  |  |
| HistorySystemNotes | HistorySystemNoteModel |  |  |
| CurrentOwners | OwnerModel |  | Read Only , Calculated Field , Requires Embed (OwnerContracts.Owner) |
| UnitCount | Integer |  | Read Only , Calculated Field , Requires Embed (Units) |
| VacantUnits | UnitModel |  |  |
| OccupiedUnitCount | Integer |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| VacantUnitCount | Integer |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| OccupiedUnitSquareFootage | Integer |  | Read Only , Calculated Field , Requires Embed (Units.IsVacant) |
| VacantUnitSquareFootage | Integer |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| VacantUnitIDs | String |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| OwnerCheckSetup | OwnerCheckSetupModel |  |  |
| IsPropertyLevelOnlineListings | Boolean |  |  |
| IsOnlyIncludePropertyListing | Boolean |  |  |
| OnlineListingsUsage | eOnlineListingsUsage |  |  |
| IsStrOnlineBookingEnabled | Boolean |  |  |
| PetTypeProperties | PetTypePropertyModel |  |  |
| PetTypes | PetTypeModel |  |  |
| LateFeeSetup | LateFeeModel |  |  |
| MakeReadyTemplateProperties | MakeReadyTemplatePropertyModel |  |  |
| TextNumbers | TextNumberModel |  |  |
| TextNumberProperties | TextNumberPropertyModel |  |  |
| RMVoIPCallHistory | RMVoIPCallHistoryModel |  |  |
| MarketingValues | MarketingValueModel |  |  |
| MarketingSetup | MarketingSetupModel |  |  |
| Violations | ViolationModel |  |  |
| OpenViolations | ViolationModel |  |  |
| CurrentAssetLocation | AssetLocationHistoryModel |  | Requires Embed (AssetLocationHistory) |
| AssetLocationHistory | AssetLocationHistoryModel |  |  |
| AssociationSettings | AssociationSettingsModel |  |  |
| CommitteeMembers | CommitteeMemberModel |  |  |
| BoardMembers | BoardMemberTermModel |  |  |
| AllocationOrder | AllocationOrderModel |  |  |
| CommunityEvents | CommunityEventModel |  |  |
| ReservableAmenities | ReservableAmenityModel |  |  |
| Holidays | HolidayModel |  |  |
| SecurityDepositInterest | SecurityDepositInterestModel |  |  |
| LeaseTermProperties | LeaseTermPropertyModel |  |  |
| RateSetting | RateSettingModel |  |  |
| RateTaxes | RateTaxModel |  |  |
| RateDiscounts | RateDiscountModel |  |  |
| SiteGroups | SiteGroupModel |  |  |
| RateSchedules | RateScheduleModel |  |  |
| PropertyAmenities | PropertyAmenityModel |  |  |
| OnlineBookingPolicies | OnlineBookingPolicyModel |  |  |
| ShortTermRentalOnlineBookingSetting | ShortTermRentalOnlineBookingSettingModel |  |  |
| TWAReportTemplates | TWAReportTemplateModel |  |  |
| PublishedTWAReports | PublishedTWAReportModel |  |  |
| HistoryNotes | HistoryNoteModel |  |  |
| Floorplans | FloorplanModel |  |  |
| MarketingFloorplans | FloorplanMarketingSummaryModel |  |  |
| LeaseTermEntityDifferential | LeaseTermEntityDifferentialModel |  |  |
| LeaseRenewalIncreaseEntityRoundingSetting | LeaseRenewalIncreaseEntityRoundingSettingModel |  |  |
| RentQuotes | RentQuoteModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET Properties?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
```

```json
[
  {
    "PropertyID": 1,
    "Name": "sample string 2",
    "ShortName": "sample string 3",
    "IsActive": true,
    "IsCommercial": true,
    "ColorID": 32,
    "DefaultInspectorID": 33,
    "PrimaryOwnerID": 42
  }
]
```


<a id="81-propertymodel"></a>
## 8.1 PropertyModel (full)

> Source: `https://reama.api.rentmanager.com/Help/Model/PropertyModel/Properties-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PropertyID | Integer | EqualTo , In | Primary Key |
| Name | String | EqualTo |  |
| ShortName | String | EqualTo , In |  |
| BillingName1 | String |  |  |
| BillingName2 | String |  |  |
| ManagerName | String |  |  |
| IsActive | Boolean |  |  |
| IsCommercial | Boolean |  |  |
| PropertyType | ePropertyType | EqualTo , In |  |
| Email | String |  |  |
| TaxID | String |  |  |
| StatementMethod | eStatementMethod | EqualTo |  |
| Comment | String |  |  |
| LogoFileID | Integer | EqualTo |  |
| ServiceManagerAssignedUserID | Integer |  |  |
| IsSystemDefaultAssignedUser | Boolean |  | Calculated Field |
| IsOverrideAssignedUserID | Boolean |  |  |
| IsAllocationOrderDisabled | Boolean |  |  |
| IsAllocationOrderSortedByMonth | Boolean |  |  |
| IsOverwriteTimeZone | Boolean |  |  |
| IsTimeZoneOffsetEnabled | Boolean |  |  |
| TimeZoneOffset | Integer |  |  |
| IsDaylightSavingsTime | Boolean |  |  |
| IsOverrideFiscalYear | Boolean |  |  |
| FiscalYearStartDay | Integer |  |  |
| FiscalYearStartMonth | Integer |  |  |
| FiscalYearEndDay | Integer |  |  |
| FiscalYearEndMonth | Integer |  |  |
| IsOverrideDefaultHolidays | Boolean |  |  |
| CreateDate | DateTime |  |  |
| UpdateDate | DateTime |  |  |
| CreateUserID | Integer | EqualTo |  |
| UpdateUserID | Integer | EqualTo |  |
| ConcurrencyID | Integer |  |  |
| ColorID | Integer |  |  |
| Color | ColorModel |  |  |
| DefaultInspectorID | Integer |  |  |
| IsLateChargeEnabled | Boolean |  |  |
| IsOwnerPayPerUnit | Boolean |  |  |
| IsEpayEnabled | Boolean |  |  |
| IsLockboxEnabled | Boolean |  |  |
| IsEndorsementOverride | Boolean |  |  |
| EndorsementOverride | String |  |  |
| SquareFootage | Integer |  |  |
| DefaultBankID | Integer | EqualTo |  |
| PrimaryOwnerID | Integer | EqualTo |  |
| PostingDay | Integer |  |  |
| CheckTemplateID (DEPRECATED) As of 8/7/2018 replaced by OwnerCheckSetupID | Integer | EqualTo |  |
| OwnerCheckSetupID | Integer | EqualTo |  |
| LastMonthlyPost | DateTime |  | Read Only |
| LastWeeklyPost | DateTime |  | Read Only |
| LastDailyPost | DateTime |  | Read Only |
| LastManagementFeePost | DateTime |  | Read Only |
| IsSecurityDepositInterestEnabled | Boolean | EqualTo |  |
| ARAutomationUseSystemPreference | Boolean |  |  |
| ARAutomationSchedule | ARAutomationScheduleModel |  |  |
| OccupancyUnitCount | Integer |  | Calculated Field |
| LastUnitCountPost | DateTime |  | Read Only |
| ARAutomationScheduleID | Integer |  |  |
| AccountingCloseOption | eAccountingCloseOption |  |  |
| EvictionWorkflowID | Int32 |  |  |
| IsShortTermRental | Boolean | EqualTo | Read Only |
| IsTrackRentersInsurance | Boolean | EqualTo |  |
| IsUseMasterPolicy (DEPRECATED) As of 3/15/2026 | Boolean | EqualTo | Read Only |
| MasterPolicyChargeAmount | Decimal |  | Read Only |
| IsOverrideNSFFee | Boolean |  |  |
| NSFFeeAmount | Decimal |  |  |
| AccountingClose | AccountingCloseModel |  |  |
| ServiceManagerAssignedUser | UserModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| PhoneNumbers | PhoneNumberModel |  |  |
| PrimaryPhoneNumber | PhoneNumberModel |  |  |
| DefaultBank | GLAccountModel |  |  |
| PrimaryOwner | OwnerModel |  |  |
| Addresses | AddressModel |  |  |
| PrimaryAddress | AddressModel |  |  |
| BillingAddress | AddressModel |  |  |
| RentChargeTypes (DEPRECATED) As of 7/30/2018 replaced by PropertyRentChargeTypes | SelectListItemModel |  | Required (create) |
| PropertyRentChargeTypes | PropertyRentChargeTypeModel |  |  |
| DefaultInspector | UserModel |  |  |
| ChargeTypeBanks | ChargeTypeBankModel |  |  |
| PropertyFloors | PropertyFloorModel |  |  |
| RentChargeTypeItems | ChargeTypeModel |  |  |
| Floors | FloorModel |  |  |
| Banks | BankModel |  |  |
| PropertyBanks | PropertyBankModel |  |  |
| UnitTypeProperties | UnitTypePropertyModel |  |  |
| History | HistoryModel |  |  |
| UserDefinedValues | UserDefinedValueModel |  |  |
| RecurringCharges | RecurringChargeModel |  |  |
| RecurringChargeSummaries | RecurringChargeSummaryModel |  |  |
| Units | UnitModel |  |  |
| UserProperties | UserPropertyModel |  |  |
| Users | UserModel |  |  |
| MarketingData | PropertyMarketingDataModel |  |  |
| FeedTypeID | eOnlineListingFeedType |  | Read Only |
| ScreeningSetting | ScreeningSettingModel |  |  |
| LogoFile | FileModel |  |  |
| Images | ImageModel |  |  |
| ManagementFeeHistory | ManagementFeeHistoryModel |  |  |
| ApplicationTemplates | ApplicationTemplateModel |  |  |
| ApplicationSettings | ApplicationSettingsModel |  |  |
| PropertyManagementFeeSetups | PropertyManagementFeeSetupModel |  |  |
| ManagementFeeSetup | ManagementFeeSetupModel |  |  |
| LastSuccessfulOnlineListingsPosting | DateTime |  | Read Only |
| IsOptOutCreditReporting | Boolean |  |  |
| PropertyGroups | PropertyGroupModel |  |  |
| PropertyGroupDetails | PropertyGroupDetailModel |  |  |
| OwnerContracts | OwnerContractModel |  |  |
| Ownerships | OwnerContractModel |  |  |
| PropertyFiles | PropertyFileModel |  |  |
| PropertyFileFolders | PropertyFileFolderModel |  |  |
| HistorySystemNotes | HistorySystemNoteModel |  |  |
| CurrentOwners | OwnerModel |  | Read Only , Calculated Field , Requires Embed (OwnerContracts.Owner) |
| UnitCount | Integer |  | Read Only , Calculated Field , Requires Embed (Units) |
| VacantUnits | UnitModel |  |  |
| OccupiedUnitCount | Integer |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| VacantUnitCount | Integer |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| OccupiedUnitSquareFootage | Integer |  | Read Only , Calculated Field , Requires Embed (Units.IsVacant) |
| VacantUnitSquareFootage | Integer |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| VacantUnitIDs | String |  | Read Only , Calculated Field , Requires Embed (VacantUnits) |
| OwnerCheckSetup | OwnerCheckSetupModel |  |  |
| IsPropertyLevelOnlineListings | Boolean |  |  |
| IsOnlyIncludePropertyListing | Boolean |  |  |
| OnlineListingsUsage | eOnlineListingsUsage |  |  |
| IsStrOnlineBookingEnabled | Boolean |  |  |
| PetTypeProperties | PetTypePropertyModel |  |  |
| PetTypes | PetTypeModel |  |  |
| LateFeeSetup | LateFeeModel |  |  |
| MakeReadyTemplateProperties | MakeReadyTemplatePropertyModel |  |  |
| TextNumbers | TextNumberModel |  |  |
| TextNumberProperties | TextNumberPropertyModel |  |  |
| RMVoIPCallHistory | RMVoIPCallHistoryModel |  |  |
| MarketingValues | MarketingValueModel |  |  |
| MarketingSetup | MarketingSetupModel |  |  |
| Violations | ViolationModel |  |  |
| OpenViolations | ViolationModel |  |  |
| CurrentAssetLocation | AssetLocationHistoryModel |  | Requires Embed (AssetLocationHistory) |
| AssetLocationHistory | AssetLocationHistoryModel |  |  |
| AssociationSettings | AssociationSettingsModel |  |  |
| CommitteeMembers | CommitteeMemberModel |  |  |
| BoardMembers | BoardMemberTermModel |  |  |
| AllocationOrder | AllocationOrderModel |  |  |
| CommunityEvents | CommunityEventModel |  |  |
| ReservableAmenities | ReservableAmenityModel |  |  |
| Holidays | HolidayModel |  |  |
| SecurityDepositInterest | SecurityDepositInterestModel |  |  |
| LeaseTermProperties | LeaseTermPropertyModel |  |  |
| RateSetting | RateSettingModel |  |  |
| RateTaxes | RateTaxModel |  |  |
| RateDiscounts | RateDiscountModel |  |  |
| SiteGroups | SiteGroupModel |  |  |
| RateSchedules | RateScheduleModel |  |  |
| PropertyAmenities | PropertyAmenityModel |  |  |
| OnlineBookingPolicies | OnlineBookingPolicyModel |  |  |
| ShortTermRentalOnlineBookingSetting | ShortTermRentalOnlineBookingSettingModel |  |  |
| TWAReportTemplates | TWAReportTemplateModel |  |  |
| PublishedTWAReports | PublishedTWAReportModel |  |  |
| HistoryNotes | HistoryNoteModel |  |  |
| Floorplans | FloorplanModel |  |  |
| MarketingFloorplans | FloorplanMarketingSummaryModel |  |  |
| LeaseTermEntityDifferential | LeaseTermEntityDifferentialModel |  |  |
| LeaseRenewalIncreaseEntityRoundingSetting | LeaseRenewalIncreaseEntityRoundingSettingModel |  |  |
| RentQuotes | RentQuoteModel |  |  |
| MetaTag | String |  |  |

<a id="82-properties-endpoints"></a>
### 8.2 Properties endpoints & sub-resources

Standard endpoints:

- `GET /Properties` — collection
- `GET /Properties/{id}` — instance
- `POST /Properties` — Save
- `DELETE /Properties` / `DELETE /Properties/{id}` — delete

The Properties resource exposes 138+ sub-resources. Full list:

- `AccountingClose`
- `Addresses`
- `AddressTypes`
- `AllocationOrders`
- `ApplicationSettings`
- `ApplicationTemplates`
- `ARAutomationSchedule`
- `AssetLocationHistory`
- `Assets`
- `AssignedUser`
- `AssociationSettings`
- `Availability`
- `Banks`
- `BatchEmailProperties`
- `BatchEmailPropertiesFromUnits`
- `BatchEmailTenantAndProspectContactList`
- `BeginningBalances`
- `BillingAddress`
- `BoardMembers`
- `BoardMemberTerms`
- `CalculateIndividualSecurityDepositInterests`
- `CalculateManagementFees`
- `CalculateManagementFundSweep`
- `CalculateSecurityDepositInterests`
- `ChargeTypeBanks`
- `Color`
- `CommitteeMembers`
- `CommunityEvents`
- `CreateUser`
- `CurrentAssetLocation`
- `CurrentOwners`
- `DefaultBank`
- `DefaultChargeSettings`
- `DefaultInspector`
- `Floorplans`
- `Floors`
- `GetByPost`
- `History`
- `HistoryNotes`
- `HistorySystemNotes`
- `Holidays`
- `Images`
- `ImageTypes`
- `LateFees`
- `LateFeeSetup`
- `LeaseRenewalIncreaseEntityRoundingSetting`
- `LeaseTermEntityDifferential`
- `LeaseTermProperties`
- `LimitedAccessSearch`
- `LinkUnitTypes`
- `Logo`
- `LogoFile`
- `MakeReadyTemplateProperties`
- `ManagementFeeBreakdownFee`
- `ManagementFeeHistory`
- `ManagementFeeHistoryCharges`
- `ManagementFeeSetup`
- `ManagementFundSweep`
- `MarketingData`
- `MarketingSetup`
- `MarketingValues`
- `MergeProperties`
- `MigrateAssets`
- `MigrateUnits`
- `MITSMarketingSetup`
- `MITSMarketingValues`
- `OccupancySummary`
- `OnlineBookingPolicies`
- `OnlineListings`
- `OpenViolations`
- `OwnerCheckSetup`
- `OwnerContracts`
- `Owners`
- `Ownerships`
- `PetTypeProperties`
- `PetTypes`
- `PhoneNumbers`
- `PhoneNumberTypes`
- `PostManagementFees`
- `PostSecurityDepositInterest`
- `PrimaryAddress`
- `PrimaryOwner`
- `PrimaryPhoneNumber`
- `PropertyAmenities`
- `PropertyBanks`
- `PropertyContracts`
- `PropertyFileFolders`
- `PropertyFiles`
- `PropertyFloors`
- `PropertyGroup`
- `PropertyGroupDetails`
- `PropertyGroups`
- `PropertyManagementFeeSetups`
- `PropertyRentChargeTypes`
- `PublishedTWAReports`
- `QuickSearch`
- `RateDiscounts`
- `RateSchedules`
- `RateSettings`
- `RateTaxes`
- `RecurringCharges`
- `RecurringChargeSummaries`
- `RentChargeTypeItems`
- `RentChargeTypes`
- `RentQuotes`
- `ReservableAmenities`
- `RMVoIPCallHistory`
- `RollbackLastManagementFeePosting`
- `SaveRecurringChargeSortOrders`
- `ScreeningCredentials`
- `ScreeningReportTypesForUser`
- `ScreeningSetting`
- `ScreeningSettings`
- `Search`
- `SecurityDepositInterest`
- `ServiceManagerAssignedUser`
- `ShortTermRentalOnlineBookingSetting`
- `TestConnectionForScreenings`
- `TestScript`
- `TextNumberProperties`
- `TextNumbers`
- `TWAReportTemplates`
- `Units`
- `UnitSquareFootage`
- `UnitTypeProperties`
- `UnitTypes`
- `UnitTypesForMultipleProperties`
- `UnLinkUnitTypes`
- `UpdateUser`
- `UploadImage`
- `UploadLogoFile`
- `UploadUserDefinedValueAttachment`
- `UserDefinedFields`
- `UserDefinedValues`
- `UserProperties`
- `Users`
- `UtilityProperties`
- `Violations`

<a id="83-properties-save"></a>
### 8.3 Properties / Save

The POST body is an array of `PropertyModel`. Required-on-create at minimum: `Name`, `ShortName`, and a primary `Address` (embedded address sub-record). Tax / GL / bank settings are typically set via the dedicated sub-resources after creation.

```json
[
  {
    "Name": "1234 Maple St Apartments",
    "ShortName": "MAPLE",
    "IsActive": true,
    "Addresses": [
      {
        "AddressTypeID": 1,
        "Street": "1234 Maple St",
        "City": "Cincinnati",
        "State": "OH",
        "PostalCode": "45202",
        "IsPrimary": true
      }
    ]
  }
]
```

<a id="9-addresses-resolved"></a>
## 9. Addresses — resolved

> **`/Help/Resource/Addresses` returns HTTP 500.** Addresses are not a top-level resource. They are managed as embedded `AddressModel` sub-records belonging to a parent entity (Tenant, Property, Owner, Vendor, Prospect, Unit, Contact, etc.).

<a id="91-addressmodel"></a>
## 9.1 AddressModel (full schema)

> Source: `https://reama.api.rentmanager.com/Help/Model/AddressModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AddressID | Integer | EqualTo , In | Primary Key |
| AddressTypeID | Integer | EqualTo , In |  |
| Address | String |  |  |
| Street | String |  | Read Only |
| City | String |  | Read Only |
| State | String |  | Read Only |
| PostalCode | String |  | Read Only |
| IsPrimary | Boolean |  |  |
| IsBilling | Boolean |  |  |
| ParentID | Integer | EqualTo , In |  |
| ParentType | eAddressRelatedObjectTypes | EqualTo | Calculated Field |
| AddressType | AddressTypeModel |  |  |
| Contact | ContactModel |  |  |
| AssetManufacturer | AssetManufacturerModel |  |  |
| Owner | OwnerModel |  |  |
| Property | PropertyModel |  |  |
| Prospect | ProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Unit | UnitModel |  |  |
| Utility | UtilityModel |  |  |
| Vendor | VendorModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| LoanContact | LoanContactModel |  |  |
| GeoLocationCode | GeoLocationCodeModel |  |  |
| CountryID | Integer |  |  |
| MetaTag | String |  |  |

<a id="92-address-flows"></a>
### 9.2 Reading & writing addresses

**Read addresses for a tenant:**

```
GET /Tenants/{id}?embeds=Addresses
```

or 

```
GET /Tenants/{id}/Addresses
```

**Read addresses for a property:**

```
GET /Properties/{id}/Addresses
GET /Properties/{id}/PrimaryAddress
```

**Write addresses (Tenant example):**

Embed the `Addresses` array on the parent Tenant Save call:

```json
[
  {
    "TenantID": 12345,
    "Addresses": [
      {
        "AddressTypeID": 1,
        "Street": "100 Main St",
        "City": "Cincinnati",
        "State": "OH",
        "PostalCode": "45202",
        "IsPrimary": true
      }
    ]
  }
]
```

The `AddressTypeID` references the AddressType sub-resource (see `/Tenants/{id}/AddressTypes` and `/Properties/{id}/AddressTypes`). Common values: 1=Home / Primary, 2=Work, 3=Mailing, 4=Other (verify in your tenant DB).

The address record's polymorphic relationship is captured by `eAddressRelatedObjectTypes` (Tenant, Property, Owner, Vendor, Prospect, Contact, Unit, etc.).

<a id="10-udf-udv"></a>
## 10. UserDefinedValues & UserDefinedFields

> **`/Help/Resource/UserDefinedValues` returns HTTP 500** — the resource is exposed only as an embed/sub-resource. `/Help/Resource/UserDefinedFields` is a valid top-level resource (definitions of the custom fields). The pair work together: a **UserDefinedField** defines a field (name, data type, related-object type), and a **UserDefinedValue** stores the actual value for a specific record.

<a id="udf-resource"></a>
## UserDefinedFields resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/UserDefinedFields`

### Endpoints

- `GET UserDefinedFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | UserDefinedFieldFilterFields List | Define this parameter in the request URI. |
| embeds | UserDefinedFieldEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | UserDefinedFieldOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| getOptions | UserDefinedFieldGetOptions List | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserDefinedFieldID | Integer | EqualTo , NotEqualTo , In | Primary Key |
| SortOrder | Integer |  |  |
| Name | String | EqualTo |  |
| IsRequired | Boolean |  |  |
| FieldType | eUserDefinedFieldType | EqualTo |  |
| ComboList | String |  |  |
| PrecisionValue | Integer |  |  |
| DefaultValue | String |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| DefaultAttachmentID | Integer |  |  |
| DefaultAttachment | FileModel |  |  |
| ParentType | eUserDefinedFieldRelatedObjectTypes | EqualTo | Read Only |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| ProspectUserDefinedFieldLink | ProspectUserDefinedFieldLinkModel |  |  |
| OwnerProspectUserDefinedFieldLink | OwnerProspectUserDefinedFieldLinkModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET UserDefinedFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
```

```json
[
  {
    "UserDefinedFieldID": 1,
    "SortOrder": 2,
    "Name": "sample string 3",
    "IsRequired": true,
    "FieldType": "Text",
    "ComboList": "sample string 5",
    "PrecisionValue": 6,
    "DefaultValue": "sample string 7"
  }
]
```


<a id="101-udfmodel"></a>
## 10.1 UserDefinedFieldModel

> Source: `https://reama.api.rentmanager.com/Help/Model/UserDefinedFieldModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserDefinedFieldID | Integer | EqualTo , NotEqualTo , In | Primary Key |
| SortOrder | Integer |  |  |
| Name | String | EqualTo |  |
| IsRequired | Boolean |  |  |
| FieldType | eUserDefinedFieldType | EqualTo |  |
| ComboList | String |  |  |
| PrecisionValue | Integer |  |  |
| DefaultValue | String |  |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| DefaultAttachmentID | Integer |  |  |
| DefaultAttachment | FileModel |  |  |
| ParentType | eUserDefinedFieldRelatedObjectTypes | EqualTo | Read Only |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| ProspectUserDefinedFieldLink | ProspectUserDefinedFieldLinkModel |  |  |
| OwnerProspectUserDefinedFieldLink | OwnerProspectUserDefinedFieldLinkModel |  |  |
| MetaTag | String |  |  |

<a id="102-udvmodel"></a>
## 10.2 UserDefinedValueModel

> Source: `https://reama.api.rentmanager.com/Help/Model/UserDefinedValueModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserDefinedValueID | Integer | EqualTo , In | Primary Key |
| UserDefinedFieldID | Integer | EqualTo , In |  |
| ParentID | Integer | EqualTo , In |  |
| Name | String |  | Read Only |
| Value | String | EqualTo |  |
| DateValue | DateTime |  | Read Only , Calculated Field |
| NumericValue | Decimal |  | Read Only , Calculated Field |
| UpdateDate | DateTime |  |  |
| CreateDate | DateTime |  |  |
| FieldType | eUserDefinedFieldType |  | Read Only |
| Attachment | FileModel |  |  |
| UserDefinedField | UserDefinedFieldModel |  |  |
| UpdateUserID | Integer | EqualTo |  |
| CreateUserID | Integer | EqualTo |  |
| Tenant | TenantModel |  |  |
| Property | PropertyModel |  |  |
| Prospect | ProspectModel |  |  |
| Vendor | VendorModel |  |  |
| ServiceManagerIssue | ServiceManagerIssueModel |  |  |
| ServiceManagerRecurringIssue | ServiceManagerRecurringIssueModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| LeaseRenewal | LeaseRenewalModel |  |  |
| CommercialLeaseRenewal | LeaseRenewalModel |  |  |
| NonCommercialLeaseRenewal | LeaseRenewalModel |  |  |
| Contact | ContactModel |  |  |
| InventoryItem | InventoryItemModel |  |  |
| Unit | UnitModel |  |  |
| Asset | AssetModel |  |  |
| Job | JobModel |  |  |
| Eviction | EvictionModel |  |  |
| User | UserModel |  |  |
| Loan | LoanModel |  |  |
| MetaTag | String |  |  |

<a id="102-udvmodel-prop"></a>
## 10.2.1 UserDefinedValueModel (Properties context)

> Source: `https://reama.api.rentmanager.com/Help/Model/UserDefinedValueModel/Properties-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserDefinedValueID | Integer | EqualTo , In | Primary Key |
| UserDefinedFieldID | Integer | EqualTo , In |  |
| ParentID | Integer | EqualTo , In |  |
| Name | String |  | Read Only |
| Value | String | EqualTo |  |
| DateValue | DateTime |  | Read Only , Calculated Field |
| NumericValue | Decimal |  | Read Only , Calculated Field |
| UpdateDate | DateTime |  |  |
| CreateDate | DateTime |  |  |
| FieldType | eUserDefinedFieldType |  | Read Only |
| Attachment | FileModel |  |  |
| UserDefinedField | UserDefinedFieldModel |  |  |
| UpdateUserID | Integer | EqualTo |  |
| CreateUserID | Integer | EqualTo |  |
| Tenant | TenantModel |  |  |
| Property | PropertyModel |  |  |
| Prospect | ProspectModel |  |  |
| Vendor | VendorModel |  |  |
| ServiceManagerIssue | ServiceManagerIssueModel |  |  |
| ServiceManagerRecurringIssue | ServiceManagerRecurringIssueModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| LeaseRenewal | LeaseRenewalModel |  |  |
| CommercialLeaseRenewal | LeaseRenewalModel |  |  |
| NonCommercialLeaseRenewal | LeaseRenewalModel |  |  |
| Contact | ContactModel |  |  |
| InventoryItem | InventoryItemModel |  |  |
| Unit | UnitModel |  |  |
| Asset | AssetModel |  |  |
| Job | JobModel |  |  |
| Eviction | EvictionModel |  |  |
| User | UserModel |  |  |
| Loan | LoanModel |  |  |
| MetaTag | String |  |  |

<a id="103-udv-relationships"></a>
### 10.3 How UDFs / UDVs relate to Tenant records (and Properties / Users)

**Conceptual model:**

1. An admin defines a custom field via `POST /UserDefinedFields`. The field carries a `DataType` (Integer / String / Date / Boolean / Decimal / List / File) and a `RelatedObjectType` (Tenant / Property / Unit / Owner / Vendor / Prospect / etc.).
2. When a record (e.g. a Tenant) is created, the API auto-attaches the matching UserDefinedFields. To set values, embed an `UserDefinedValues` array on the Save call OR POST to `/Tenants/{id}/UserDefinedValues`.
3. A `UserDefinedValue` row stores `UserDefinedFieldID` + a typed `Value` (string serialization for everything except files).
4. For File-type UDFs, after saving the value record, upload the binary via `POST /Tenants/{id}/UploadUserDefinedValueAttachment` (multipart/form-data) — see §7.4.

**Read tenant UDVs:**

```
GET /Tenants/{id}?embeds=UserDefinedValues
```

or

```
GET /Tenants/{id}/UserDefinedValues
```

**Write tenant UDVs (embedded Save):**

```json
[
  {
    "TenantID": 12345,
    "UserDefinedValues": [
      { "UserDefinedFieldID": 7, "Value": "Section 8 — voucher #A12345" },
      { "UserDefinedFieldID": 9, "Value": "true" }
    ]
  }
]
```

**Write tenant UDVs (sub-resource POST):**

```
POST /Tenants/12345/UserDefinedValues
Content-Type: application/json

[
  { "UserDefinedFieldID": 7, "Value": "Section 8 — voucher #A12345" }
]
```

**Same flow on Properties / Users:**

- `GET /Properties/{id}/UserDefinedValues` / `POST /Properties/{id}/UserDefinedValues`
- `GET /Users/{id}/UserDefinedValues` (if exposed for users)

<a id="104-udf-endpoints"></a>
### 10.4 UserDefinedFields endpoints

- `GET /UserDefinedFields` — list all custom-field definitions (filter by `RelatedObjectType` to scope to Tenant, Property, etc.)
- `GET /UserDefinedFields/{id}` — single field definition
- `POST /UserDefinedFields` — Save (admin only — define a new custom field)
- `DELETE /UserDefinedFields/{id}` — remove a definition

<a id="105-tenant-udv"></a>
### 10.5 Tenant UDV embed / sub-resource flows (summary)

<a id="105-tenant-udv-sub"></a>
## Tenants / UserDefinedValues sub-resource

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Tenants/UserDefinedValues`

### Endpoints

- `DELETE Tenants/{id}/UserDefinedValues?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| id | Integer | Define this parameter in the request URI. |
| ids | Integer | Define this parameter in the request URI. |
| deleteOptions | DeleteOption List | Define this parameter in the request URI. |

### Sample bodies

```json
DELETE Tenants/{id}/UserDefinedValues?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}
```


<a id="105-tenant-udf-sub"></a>
## Tenants / UserDefinedFields sub-resource

> Source: `https://reama.api.rentmanager.com/Help/Subresource/Tenants/UserDefinedFields`

### Endpoints

- `DELETE Tenants/UserDefinedFields?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| ids | Integer | Define this parameter in the request URI. |
| deleteOptions | UserDefinedFieldDeleteOptions List | Define this parameter in the request URI. |

### Sample bodies

```json
DELETE Tenants/UserDefinedFields?ids={ids}&deleteOptions[0]={deleteOptions[0]}&deleteOptions[1]={deleteOptions[1]}
```


<a id="11-historycalls"></a>
## 11. HistoryCalls

<a id="11-historycalls-resource"></a>
## 11.0 HistoryCalls resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/HistoryCalls`

### Endpoints

- `GET HistoryCalls?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | HistoryCallFilterFields List | Define this parameter in the request URI. |
| embeds | HistoryCallEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | HistoryCallOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo , In | Primary Key |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo , In |  |
| HistoryDate | DateTime |  |  |
| HistoryEndDate | DateTime |  |  |
| Note | String |  |  |
| Result | String |  |  |
| IsFirstContact | Boolean |  |  |
| IsLocked | Boolean |  |  |
| IsCompleted | Boolean |  |  |
| IsContactMade | Boolean |  |  |
| IsPinned | Boolean | EqualTo , NotEqualTo |  |
| IsShowOnPaymentsTab | Boolean |  | Calculated Field |
| IsShowOnOwnerStatement | Boolean |  | Calculated Field |
| CreateUserID | Integer | EqualTo |  |
| CreateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| UpdateDate | DateTime |  |  |
| HistoryCategory | HistoryCategoryModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Prospect | ProspectModel |  |  |
| Asset | AssetModel |  |  |
| Eviction | EvictionModel |  |  |
| ParentType | eHistoryCallRelatedObjectTypes |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| FollowUpTask | FollowUpTaskModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET HistoryCalls?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "HistoryID": 1,
    "HistoryCategoryID": 2,
    "HistoryDate": "2026-05-06T09:40:06.5663678-04:00",
    "HistoryEndDate": "2026-05-06T09:40:06.5663678-04:00",
    "Note": "sample string 4",
    "Result": "sample string 5",
    "IsFirstContact": true,
    "IsLocked": true,
    "IsCompleted": true,
    "IsContactMade": true,
    "IsPinned": true,
    "CreateUserID": 15,
    "CreateDate": "2026-05-06T09:40:06.5663678-04:00",
    "UpdateUserID": 17,
    "ParentID": 18,
    "UpdateDate": "2026-05-06T09:40:06.5663678-04:00",
    "MetaTag": "sample string 21"
  }
]
```


<a id="111-historycallmodel"></a>
## 11.1 HistoryCallModel

> Source: `https://reama.api.rentmanager.com/Help/Model/HistoryCallModel/Tenants-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo , In | Primary Key |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo , In |  |
| HistoryDate | DateTime |  |  |
| HistoryEndDate | DateTime |  |  |
| Note | String |  |  |
| Result | String |  |  |
| IsFirstContact | Boolean |  |  |
| IsLocked | Boolean |  |  |
| IsCompleted | Boolean |  |  |
| IsContactMade | Boolean |  |  |
| IsPinned | Boolean | EqualTo , NotEqualTo |  |
| IsShowOnPaymentsTab | Boolean |  | Calculated Field |
| IsShowOnOwnerStatement | Boolean |  | Calculated Field |
| CreateUserID | Integer | EqualTo |  |
| CreateDate | DateTime |  |  |
| UpdateUserID | Integer | EqualTo |  |
| ParentID | Integer | EqualTo , In |  |
| UpdateDate | DateTime |  |  |
| HistoryCategory | HistoryCategoryModel |  |  |
| Owner | OwnerModel |  |  |
| OwnerProspect | OwnerProspectModel |  |  |
| Tenant | TenantModel |  |  |
| Prospect | ProspectModel |  |  |
| Asset | AssetModel |  |  |
| Eviction | EvictionModel |  |  |
| ParentType | eHistoryCallRelatedObjectTypes |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| FollowUpTask | FollowUpTaskModel |  |  |
| MetaTag | String |  |  |

<a id="112-historycalls-endpoints"></a>
### 11.2 HistoryCalls endpoints & Save

- `GET /HistoryCalls` — collection
- `GET /HistoryCalls/{id}` — instance
- `POST /HistoryCalls` — Save (create / update)
- `DELETE /HistoryCalls` / `DELETE /HistoryCalls/{id}` — delete
- Tenant scope: `GET /Tenants/{id}/HistoryCalls` — calls for a specific tenant
- VoIP integration: `GET /Tenants/{id}/RMVoIPCallHistory` — call records imported from RMVoIP

**Save body** is an array of `HistoryCallModel`. Required-on-create: `HistoryCategoryID`, `Note` (or `Subject`), and the polymorphic linkage (`TenantID` / `RelatedObjectID` + `RelatedObjectType` from `eHistoryCallRelatedObjectTypes`).

```json
[
  {
    "HistoryCategoryID": 4,
    "Subject": "Maintenance follow-up call",
    "Note": "Tenant confirmed the dishwasher repair was successful.",
    "CallDate": "2026-05-06T14:30:00",
    "TenantID": 12345,
    "DurationMinutes": 5
  }
]
```

<a id="12-users"></a>
## 12. Users

<a id="12-users-resource"></a>
## 12.0 Users resource

> Source: `https://reama.api.rentmanager.com/Help/Resource/Users`

### Endpoints

- `GET Users?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`

### Query parameters

| Name | Type | Additional information |
|---|---|---|
| filters | UserFilterFields List | Define this parameter in the request URI. |
| embeds | UserEmbedOptions List | Define this parameter in the request URI. |
| orderingOptions | UserOrderingOptions List | Define this parameter in the request URI. |
| fields | String | Define this parameter in the request URI. |
| pageSize | Integer | Define this parameter in the request URI. |
| pageNumber | Integer | Define this parameter in the request URI. |

### Model properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserID | Integer | In , EqualTo | Primary Key |
| MainLocationUserID | Integer | EqualTo |  |
| Username | String | EqualTo |  |
| Lastname | String | EqualTo |  |
| Firstname | String |  |  |
| UserTitle | String |  |  |
| Name | String |  | Read Only , Calculated Field |
| IsActive | Boolean |  |  |
| IsAdmin | Boolean |  |  |
| IsStrongPassword | Boolean |  |  |
| IsPasswordReset | Boolean |  |  |
| TabGroup | Integer |  |  |
| CustomFormUserGroupID | Integer | EqualTo |  |
| CustomToolbarGroupID | Integer | EqualTo |  |
| IsToolbarSearch | Boolean |  |  |
| ToolbarSize | Integer |  |  |
| ToolbarText | Integer |  |  |
| Email | String |  |  |
| IsLeasingAgent | Boolean |  |  |
| IsSalesRepresentative | Boolean |  |  |
| IsOwnerSalesRepresentative | Boolean |  |  |
| IsInspector | Boolean |  |  |
| HasMobileRentManagerAccess | Boolean |  |  |
| HasSiteManagerAccess | Boolean |  |  |
| IsRmServiceUser | Boolean |  |  |
| HasAPIAccess | Boolean |  |  |
| LastWebLoginDate | DateTime |  |  |
| LockoutDate | DateTime |  |  |
| LastPasswordChangeDate | DateTime |  |  |
| IsPhoneSystemUser | Boolean |  |  |
| PhoneSystemExtension | String | EqualTo |  |
| SupervisorID | Integer | EqualTo |  |
| IsReadOnly | Boolean |  |  |
| IsOverrideTimeZone | Boolean |  |  |
| IsTimeZoneEnabled | Boolean |  |  |
| TimeZoneOffset | Integer |  |  |
| IsTimeZoneDaylightSavingsTime | Boolean |  |  |
| IsGroup | Boolean |  |  |
| IsPartnerUser | Boolean |  |  |
| IsPartnerAuthorized | Boolean | EqualTo |  |
| IsLocked | Boolean |  | Read Only |
| LastPartnerProfileRefreshDate | DateTime | EqualTo |  |
| PartnerID | Integer | EqualTo |  |
| PartnerToken | Guid | EqualTo |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| DefaultLocationID | Integer | EqualTo |  |
| Supervisor | UserModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| PhoneNumbers | PhoneNumberModel |  |  |
| Properties | PropertyModel |  |  |
| UserProperties | UserPropertyModel |  |  |
| PropertyGroups | PropertyGroupModel |  |  |
| Banks | BankModel |  |  |
| CreditCards | CreditCardModel |  |  |
| Locations | SelectListItemModel |  |  |
| UserReports | UserReportModel |  |  |
| UserPropertyGroups | UserPropertyGroupModel |  |  |
| UserRoles | UserRoleModel |  |  |
| UserPrivileges | UserPrivilegeModel |  |  |
| EffectivePrivileges | EffectiveUserPrivilegeModel |  |  |
| UserBanks | UserBankModel |  |  |
| TaskUsers (DEPRECATED) As of 5/14/2019 replaced by UserTasks | TaskUserModel |  |  |
| UserTasks | TaskUserModel |  |  |
| UserDefinedValues | UserDefinedValueModel |  |  |
| UserLocations | UserLocationModel |  |  |
| CustomProductUserPreferences (DEPRECATED) As of 9/23/2021 | CustomProductUserPreferenceModel |  |  |
| LetterTemplates | UserLetterTemplateModel |  |  |
| MaintenanceTech | MaintenanceTechModel |  |  |
| Image | ImageModel |  |  |
| MetaTag | String |  |  |

### Sample bodies

```json
GET Users?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
```

```json
[
  {
    "UserID": 1,
    "Username": "sample string 3",
    "Lastname": "sample string 4",
    "Firstname": "sample string 5",
    "Name": "sample string 5 sample string 4",
    "IsLeasingAgent": true,
    "IsGroup": true,
    "CreateUserID": 41,
    "UpdateUserID": 43
  }
]
```


<a id="121-usermodel"></a>
## 12.1 UserModel

> Source: `https://reama.api.rentmanager.com/Help/Model/UserModel/Users-Retrieve-Collection`

### Query parameters

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| UserID | Integer | In , EqualTo | Primary Key |
| MainLocationUserID | Integer | EqualTo |  |
| Username | String | EqualTo |  |
| Lastname | String | EqualTo |  |
| Firstname | String |  |  |
| UserTitle | String |  |  |
| Name | String |  | Read Only , Calculated Field |
| IsActive | Boolean |  |  |
| IsAdmin | Boolean |  |  |
| IsStrongPassword | Boolean |  |  |
| IsPasswordReset | Boolean |  |  |
| TabGroup | Integer |  |  |
| CustomFormUserGroupID | Integer | EqualTo |  |
| CustomToolbarGroupID | Integer | EqualTo |  |
| IsToolbarSearch | Boolean |  |  |
| ToolbarSize | Integer |  |  |
| ToolbarText | Integer |  |  |
| Email | String |  |  |
| IsLeasingAgent | Boolean |  |  |
| IsSalesRepresentative | Boolean |  |  |
| IsOwnerSalesRepresentative | Boolean |  |  |
| IsInspector | Boolean |  |  |
| HasMobileRentManagerAccess | Boolean |  |  |
| HasSiteManagerAccess | Boolean |  |  |
| IsRmServiceUser | Boolean |  |  |
| HasAPIAccess | Boolean |  |  |
| LastWebLoginDate | DateTime |  |  |
| LockoutDate | DateTime |  |  |
| LastPasswordChangeDate | DateTime |  |  |
| IsPhoneSystemUser | Boolean |  |  |
| PhoneSystemExtension | String | EqualTo |  |
| SupervisorID | Integer | EqualTo |  |
| IsReadOnly | Boolean |  |  |
| IsOverrideTimeZone | Boolean |  |  |
| IsTimeZoneEnabled | Boolean |  |  |
| TimeZoneOffset | Integer |  |  |
| IsTimeZoneDaylightSavingsTime | Boolean |  |  |
| IsGroup | Boolean |  |  |
| IsPartnerUser | Boolean |  |  |
| IsPartnerAuthorized | Boolean | EqualTo |  |
| IsLocked | Boolean |  | Read Only |
| LastPartnerProfileRefreshDate | DateTime | EqualTo |  |
| PartnerID | Integer | EqualTo |  |
| PartnerToken | Guid | EqualTo |  |
| CreateDate | DateTime |  |  |
| CreateUserID | Integer |  |  |
| UpdateDate | DateTime |  |  |
| UpdateUserID | Integer |  |  |
| DefaultLocationID | Integer | EqualTo |  |
| Supervisor | UserModel |  |  |
| CreateUser | UserModel |  |  |
| UpdateUser | UserModel |  |  |
| PhoneNumbers | PhoneNumberModel |  |  |
| Properties | PropertyModel |  |  |
| UserProperties | UserPropertyModel |  |  |
| PropertyGroups | PropertyGroupModel |  |  |
| Banks | BankModel |  |  |
| CreditCards | CreditCardModel |  |  |
| Locations | SelectListItemModel |  |  |
| UserReports | UserReportModel |  |  |
| UserPropertyGroups | UserPropertyGroupModel |  |  |
| UserRoles | UserRoleModel |  |  |
| UserPrivileges | UserPrivilegeModel |  |  |
| EffectivePrivileges | EffectiveUserPrivilegeModel |  |  |
| UserBanks | UserBankModel |  |  |
| TaskUsers (DEPRECATED) As of 5/14/2019 replaced by UserTasks | TaskUserModel |  |  |
| UserTasks | TaskUserModel |  |  |
| UserDefinedValues | UserDefinedValueModel |  |  |
| UserLocations | UserLocationModel |  |  |
| CustomProductUserPreferences (DEPRECATED) As of 9/23/2021 | CustomProductUserPreferenceModel |  |  |
| LetterTemplates | UserLetterTemplateModel |  |  |
| MaintenanceTech | MaintenanceTechModel |  |  |
| Image | ImageModel |  |  |
| MetaTag | String |  |  |

<a id="122-users-roles"></a>
### 12.2 Roles / Permissions / Properties

User-related sub-resources covering roles, permissions, and property scoping:

- **Roles / UserRoles** — role membership. `GET /Users/{id}/UserRoles` returns role assignments; `POST /Users/{id}/UserRoles` to assign.
- **Privileges / UserPrivileges** — fine-grained permissions. `GET /Users/{id}/UserPrivileges`.
- **PushUserPrivilegesToLocations** (POST) — propagate privileges across locations.
- **Properties / UserProperties** — which properties this user can access. `GET /Users/{id}/UserProperties`.
- **PropertyGroups / UserPropertyGroups** — property-group level access.
- **Locations / UserLocations / PushToLocations** — multi-location scoping.
- **Reports / UserReports** — report access permissions.
- **LetterTemplates** — letter template access permissions.
- **Banks / UserBanks** — bank account access.
- **EmailSignature(s)** — user-specific email signatures used by the Send sub-actions.
- **ChangePassword / CheckAndReturnPasswordRules** — credential management. **Do not** call these on behalf of users programmatically without explicit permission.
- **CurrentUser** — `GET /Users/CurrentUser` returns the authenticated user record.
- **MergeUsers** — admin: merge duplicate user records.
- **Supervisor** — get a user's supervisor record.
- **Tasks / TaskUser / UserTasks** — task assignments.
- **Image** — user avatar.
- **Preferences** — user UI preferences.
- **AddressBookDetails / PhoneNumbers / PhoneNumberTypes** — contact info embeds.
- **CreditCards** — saved CC tokens (read access typically restricted; **never** post raw card data).
- **SignablePDFTemplateUsers** — e-sign template assignments.
- **UserDefinedFields / UserDefinedValues / UploadUserDefinedValueAttachment** — custom fields on users.
- **AddUser / CreateUser / UpdateUser** — user lifecycle.

Full list of all 43 sub-resources:

- `AddressBookDetails`
- `AddUser`
- `Banks`
- `ChangePassword`
- `CheckAndReturnPasswordRules`
- `CreateUser`
- `CreditCards`
- `CurrentUser`
- `EmailSignature`
- `EmailSignatures`
- `GetByPost`
- `Image`
- `LetterTemplates`
- `Locations`
- `MergeUsers`
- `PhoneNumbers`
- `PhoneNumberTypes`
- `Preferences`
- `Privileges`
- `Properties`
- `PropertyGroups`
- `PushToLocations`
- `PushUserPrivilegesToLocations`
- `QuickSearch`
- `Reports`
- `Roles`
- `Search`
- `SignablePDFTemplateUsers`
- `Supervisor`
- `Tasks`
- `TaskUser`
- `UpdateUser`
- `UploadUserDefinedValueAttachment`
- `UserBanks`
- `UserDefinedFields`
- `UserDefinedValues`
- `UserLocations`
- `UserPrivileges`
- `UserProperties`
- `UserPropertyGroups`
- `UserReports`
- `UserRoles`
- `UserTasks`

<a id="123-users-endpoints"></a>
### 12.3 Users endpoints & Save

- `GET /Users` — collection
- `GET /Users/{id}` — instance
- `GET /Users/CurrentUser` — authenticated user
- `POST /Users` — Save
- `DELETE /Users` / `DELETE /Users/{id}` — delete

**Save body** — array of `UserModel`. Required-on-create: `UserName`, `FirstName`, `LastName`, `UserType` / `Email`. Inspect the model table above for the full property list.

> **Security note:** Creating Rent Manager users programmatically grants application access. The user is responsible for all credential setup; `ChangePassword` and password resets should be performed by the user themselves through the Rent Manager UI or with explicit consent in the chat.

<a id="appendix-a-404"></a>
## Appendix A — 404 / 500 / Missing Resources & Alternatives

| Requested URL | Status | Alternative |
|---|---|---|
| `/Help/Resource/Files` | 500 | Use `/Properties/{id}/PropertyFiles` (with `PropertyFileModel`) for property-level files; use `/HistoryNotes/{id}/Attachments` for note-level files; use `/Properties/{id}/UploadImage` and `/Properties/{id}/UploadLogoFile` for image upload. |
| `/Help/Resource/FileAttachments` | 500 | Same alternatives as Files above. There is no top-level "FileAttachments" collection; attachments belong to a parent entity. |
| `/Help/Resource/Attachments` | 500 | See `/HistoryNotes/{id}/Attachments`, `/HistoryNotes/{id}/HistoryAttachments`. |
| `/Help/Resource/Addresses` | 500 | Addresses are embedded `AddressModel` sub-records. Use `/Tenants/{id}/Addresses`, `/Properties/{id}/Addresses`, `/Owners/{id}/Addresses`, etc. The full `AddressModel` is documented in §9.1. |
| `/Help/Resource/UserDefinedValues` | 500 | Sub-resource only. Use `/Tenants/{id}/UserDefinedValues` (or under Properties / Users). `UserDefinedValueModel` documented in §10.2. |
| `/Help/Resource/HistoryAttachments` | 500 | Use `/HistoryNotes/{id}/HistoryAttachments` sub-resource. |
| `/Help/Model/eLetterTemplateType/...` | "Not Found" body | Enum value list not published. See §6.3 best-effort table; verify against tenant DB. |
| `/Help/Model/eTenantStatus/...` | "Not Found" body | Enum value list not published. See §4.1 best-effort table; verify against tenant DB. |

<a id="appendix-b-enums"></a>
## Appendix B — Enum Values (Best-Effort)

The Rent Manager help portal does **not** publish enum value lists for `eTenantStatus`, `eLetterTemplateType`, `eAddressRelatedObjectTypes`, `eContactRelatedObjectTypes`, `eHistoryNoteRelatedObjectTypes`, `eHistoryCallRelatedObjectTypes`, `eHistoryEmailRelatedObjectTypes`, etc. Field declarations in the model tables list the *type* but not the values.

**Recommended verification approach:**

1. Query a representative collection: `GET /Tenants?fields=TenantID,Name,Status&pageSize=500` and group by `Status`.
2. Inspect Rent Manager UI dropdowns where the same fields appear.
3. Contact LCS (Rent Manager support) for the canonical enum tables.

**Best-effort enum tables** (use with caution):

### eTenantStatus

See §4.1.

### eLetterTemplateType

See §6.3.

### eAddressRelatedObjectTypes / eContactRelatedObjectTypes / eHistoryNoteRelatedObjectTypes / eHistoryCallRelatedObjectTypes / eHistoryEmailRelatedObjectTypes

These are polymorphic-relationship enums. Common observed integer values map to:

| Value | Object Type |
|---|---|
| 1 | Tenant |
| 2 | Property |
| 3 | Unit |
| 4 | Owner |
| 5 | Vendor |
| 6 | Prospect |
| 7 | Job / ServiceManagerProject |
| 8 | Asset |
| 9 | Bill / PurchaseOrder |
| 10 | Eviction |
| 11 | Violation |

> Verify before use: the integer assignments differ between enum types. Always check the live API by saving a test record with each `RelatedObjectType` value and inspecting which entity it links to.

<a id="appendix-c-endpoints"></a>
## Appendix C — Endpoint Quick Reference

### Emails

| Endpoint | Method | Purpose |
|---|---|---|
| `/Emails` | GET | Health-check / namespace |
| `/Emails/SendEmail` | POST | Send a regular email (logged to History) |
| `/Emails/SendPrivateEmail` | POST | Send an email *not* logged to tenant history |
| `/Emails/Reply` | POST | Reply to an existing HistoryEmail thread |
| `/Emails/SmtpSystemSettings` | GET | Read system SMTP configuration |
| `/HistoryEmails` | GET / POST / DELETE | Stored email records |
| `/EmailChains` | GET | Threaded conversation view |

### History

| Endpoint | Method | Purpose |
|---|---|---|
| `/HistoryNotes` | GET / POST / DELETE | Notes attached to any entity |
| `/HistoryNotes/{id}/Attachments` | GET | Attachment metadata |
| `/HistoryNotes/{id}/UploadAttachment` | POST (multipart) | Upload single attachment |
| `/HistoryNotes/{id}/UploadAttachments` | POST (multipart) | Upload multiple attachments |
| `/HistoryCalls` | GET / POST / DELETE | Call records |
| `/HistoryCalls/{id}` | GET / DELETE | Single call |
| `/HistoryEmails` | GET / POST / DELETE | Email records |
| `/HistoryCategories` | GET / POST / DELETE | Category lookup table |

### Tenants

| Endpoint | Method | Purpose |
|---|---|---|
| `/Tenants` | GET / POST / DELETE | Tenant collection |
| `/Tenants/{id}` | GET / DELETE | Single tenant |
| `/Tenants/{id}/Addresses` | GET / POST | Tenant addresses |
| `/Tenants/{id}/Contacts` | GET / POST | Tenant additional contacts |
| `/Tenants/{id}/PrimaryContact` | GET | Primary contact embed |
| `/Tenants/{id}/UserDefinedValues` | GET / POST | Custom field values |
| `/Tenants/{id}/UploadUserDefinedValueAttachment` | POST (multipart) | Upload file UDV |
| `/Tenants/{id}/HistoryNotes` | GET / POST | Tenant history notes |
| `/Tenants/{id}/HistoryCalls` | GET / POST | Tenant call history |
| `/Tenants/{id}/HistoryEmails` | GET / POST | Tenant email history |
| `/Tenants/{id}/RMVoIPCallHistory` | GET | VoIP-imported calls |
| `/Tenants/{id}/Vehicles` / `/Pets` / `/Tasks` etc. | GET / POST | Ancillary records |
| `/Tenants/{id}/Evictions` / `/HistoryEviction` | GET / POST | Eviction workflow |
| `/Tenants/{id}/RunScreening` / `/Screenings` | POST / GET | Applicant screening |
| `/Tenants/{id}/WebUserAccounts` / `/WebUsers` | GET / POST | TWA portal |
| `/Tenants/{id}/TransferTenant` | POST | Move tenant to new unit |

### Leases

| Endpoint | Method | Purpose |
|---|---|---|
| `/Leases` | GET / POST / DELETE | Lease collection |
| `/Leases/{id}` | GET / DELETE | Single lease |
| `/Leases/{id}/LeaseRenewals` | GET / POST | Lease renewal history |
| `/Leases/{id}/LeaseRenew` | POST | Initiate renewal |
| `/Leases/{id}/ActiveLeaseRenewal` | GET | Currently-active renewal |
| `/Leases/{id}/RetailSales` | GET / POST | Retail / commercial rent |

### LetterTemplates

| Endpoint | Method | Purpose |
|---|---|---|
| `/LetterTemplates` | GET / POST / DELETE | Template collection |
| `/LetterTemplates/{id}` | GET / DELETE | Single template |
| `/LetterTemplates/{id}/UploadFile` | POST (multipart) | Upload .docx body |
| `/LetterTemplates/{id}/DownloadFile` | GET | Download merged document |
| `/LetterTemplates/{id}/RunLetterTemplates` | POST | Run merge against context |
| `/LetterTemplates/{id}/MergeLetterTemplate` | POST | Perform merge |
| `/LetterTemplates/{id}/LetterTemplateUsers` | GET / POST | User-level access |
| `/LetterTemplates/{id}/LetterTemplateRoles` | GET / POST | Role-level access |

### Properties

| Endpoint | Method | Purpose |
|---|---|---|
| `/Properties` | GET / POST / DELETE | Property collection |
| `/Properties/{id}` | GET / DELETE | Single property |
| `/Properties/{id}/Addresses` / `/PrimaryAddress` | GET / POST | Property addresses |
| `/Properties/{id}/Units` | GET / POST | Units on property |
| `/Properties/{id}/Owners` / `/PrimaryOwner` / `/Ownerships` | GET / POST | Owner relationships |
| `/Properties/{id}/PropertyFiles` | GET / POST | Property files |
| `/Properties/{id}/PropertyFileFolders` | GET / POST | File folder structure |
| `/Properties/{id}/UploadImage` | POST (multipart) | Upload property image |
| `/Properties/{id}/UploadLogoFile` | POST (multipart) | Upload logo |
| `/Properties/{id}/UploadUserDefinedValueAttachment` | POST (multipart) | Upload UDV file |
| `/Properties/{id}/UserDefinedValues` | GET / POST | Custom field values |
| `/Properties/{id}/Banks` / `/DefaultBank` / `/PropertyBanks` | GET / POST | Bank account assignment |
| `/Properties/{id}/PostManagementFees` / `/CalculateManagementFees` | POST | Mgmt-fee posting |
| `/Properties/{id}/PostSecurityDepositInterest` | POST | Post SD interest |

### Users

| Endpoint | Method | Purpose |
|---|---|---|
| `/Users` | GET / POST / DELETE | User collection |
| `/Users/{id}` | GET / DELETE | Single user |
| `/Users/CurrentUser` | GET | Authenticated user |
| `/Users/{id}/UserRoles` / `/Roles` | GET / POST | Role assignments |
| `/Users/{id}/UserPrivileges` / `/Privileges` | GET / POST | Permission assignments |
| `/Users/{id}/UserProperties` | GET / POST | Property scoping |
| `/Users/{id}/UserLocations` / `/Locations` | GET / POST | Location scoping |
| `/Users/{id}/EmailSignature` / `/EmailSignatures` | GET / POST | Email signatures |
| `/Users/{id}/Image` | GET / POST | User avatar |
| `/Users/{id}/Preferences` | GET / POST | UI preferences |
| `/Users/{id}/UserDefinedValues` | GET / POST | Custom field values |

### UserDefinedFields

| Endpoint | Method | Purpose |
|---|---|---|
| `/UserDefinedFields` | GET / POST / DELETE | Field definitions |
| `/UserDefinedFields/{id}` | GET / DELETE | Single field def |

---

*End of Rent Manager Web API — Supplemental Reference.*
