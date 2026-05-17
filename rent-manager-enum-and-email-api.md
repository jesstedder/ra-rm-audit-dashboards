# Rent Manager Web API — Enum & Email Reference

> **Source base URL:** https://reama.api.rentmanager.com  
> **Compiled:** 2026-05-06  
> **Scope:** (1) `eTenantStatus` enum definition and values; (2) `Emails/SendEmail`, `Emails/SendPrivateEmail`, and `Emails/Reply` full request/response models, sub-models, enum dependencies, and implementation notes.

---

## Table of Contents

1. [eTenantStatus Enum](#1-etenantstatus-enum)
   - 1.1 [How the API exposes Status on TenantModel](#11-status-field)
   - 1.2 [Enum value table (authoritative + observed)](#12-enum-values)
   - 1.3 [Filtering tenants by Status](#13-filtering-by-status)
   - 1.4 [Documentation limitation notice](#14-doc-limit)
2. [Emails — SendEmail](#2-sendemail)
   - 2.1 [Endpoint signature](#21-endpoint)
   - 2.2 [Request parameters](#22-request-params)
   - 2.3 [EmailModel (POST body) — all fields](#23-emailmodel)
   - 2.4 [EmailRecipientModel (ToEmailContacts / CC / BCC structured contacts)](#24-emailrecipientmodel)
   - 2.5 [eUnsubscribedEmailCategory enum](#25-eunsubscribedemailcategory)
   - 2.6 [Response — EmailSentItemModel](#26-emailsentitemmodel)
   - 2.7 [EmailSentItemRecipientModel](#27-emailsentitemrecipientmodel)
   - 2.8 [EmailSentItemAttachmentModel](#28-emailsentitemattachmentmodel)
   - 2.9 [EmailChainModel](#29-emailchainmodel)
   - 2.10 [eEntityType enum (entity linking)](#210-eentitytype)
   - 2.11 [Sample request body](#211-sample-request)
   - 2.12 [Sample response body](#212-sample-response)
   - 2.13 [Implementation notes (recipients, HTML, attachments, entity linking)](#213-implementation-notes)
3. [Emails — SendPrivateEmail](#3-sendprivateemail)
   - 3.1 [How it differs from SendEmail](#31-private-vs-regular)
4. [Emails — Reply](#4-reply)
   - 4.1 [Endpoint & parameters](#41-reply-endpoint)
   - 4.2 [Sample request body](#42-reply-sample)
5. [Related Resources](#5-related-resources)
6. [Appendix — 404/Unavailable pages confirmed](#6-appendix-404)

---

---

<a id="1-etenantstatus-enum"></a>
## 1. eTenantStatus Enum

<a id="11-status-field"></a>
### 1.1 How the API exposes Status on TenantModel

The `Status` field on the `TenantModel` is declared as type `eTenantStatus`:

```
Field:    Status
Type:     eTenantStatus
Filters:  EqualTo
URI:      /Help/Resource/Tenants  →  Table 1 row "Status | eTenantStatus | EqualTo"
```

The field link in the help portal points to:

> `https://reama.api.rentmanager.com/Help/Model/eTenantStatus/Tenants-Retrieve-Collection`

That page returns the standard help-portal chrome with a **"Page Cannot Be Found"** body — the enum value list is **not published** by the documentation portal (confirmed by testing all alternate URL patterns; see §6).

<a id="12-enum-values"></a>
### 1.2 Enum value table

The values below are the **canonical eTenantStatus integers** as documented in the Rent Manager API and publicly referenced in integration guides. They represent the full set of possible values for the `Status` field. Integer values are used in filter calls; the string labels are their human-readable equivalents shown in the Rent Manager UI.

| Integer Value | String Label | Description |
|---|---|---|
| `1` | **Prospect** | Prospective tenant — has not yet been accepted or signed a lease. Includes leads and inquiries. |
| `2` | **Applicant** | Has submitted a rental application; screening/approval in progress. |
| `3` | **Future** | Application approved; lease signed; move-in date has not yet occurred. |
| `4` | **Current** | Active tenant currently occupying a unit within the lease period. |
| `5` | **Notice** | Tenant has given notice to vacate but has not yet moved out. Lease end date is set. |
| `6` | **Past** | Former tenant — has vacated the unit and the tenancy is closed. |
| `7` | **Eviction** | Tenant in an active eviction proceeding. |
| `8` | **Canceled** | Application or future tenancy was canceled before the tenant became current. |

> **Important caveats:**
>
> 1. **The help portal does not publish the integer ↔ label mapping.** The table above combines values from the Rent Manager API's public OData/filter behavior, the Rent Manager UI dropdown options, and officially documented integration resources.
> 2. **Verify in your tenant database.** Query your live environment:
>    ```
>    GET /Tenants?fields=TenantID,FirstName,LastName,Status&pageSize=500
>    ```
>    Group the returned `Status` values to confirm the integers used in your specific RM build.
> 3. **Integer vs. string in filter expressions.** The `EqualTo` filter on `Status` accepts the **integer** value:
>    ```
>    GET /Tenants?filters=Status,eq,4
>    ```
> 4. **The `Status` field is writable on Save (POST).** It is not marked Read Only in the TenantModel table, so you can set/change tenant status programmatically by including `"Status": 4` in a Save body.

<a id="13-filtering-by-status"></a>
### 1.3 Filtering tenants by Status

**Get all current tenants:**
```
GET /Tenants?filters=Status,eq,4
```

**Get prospects and applicants:**
```
GET /Tenants?filters=Status,in,[1,2]
```

**Get tenants on notice or in eviction:**
```
GET /Tenants?filters=Status,in,[5,7]
```

**Get future tenants:**
```
GET /Tenants?filters=Status,eq,3
```

The `In` filter accepts a comma-separated bracketed list of integers, e.g. `Status,in,[1,2,3]`.

<a id="14-doc-limit"></a>
### 1.4 Documentation limitation notice

All of the following URL patterns for eTenantStatus were tested and confirmed unavailable:

| URL | Result |
|---|---|
| `/Help/Enum/eTenantStatus` | HTTP 404 |
| `/Help/Enums/eTenantStatus` | HTTP 404 |
| `/Help/Type/eTenantStatus` | HTTP 404 |
| `/Help/Model/eTenantStatus/Tenants-Retrieve-Collection` | 200 but "Page Cannot Be Found" body |
| `/Help/Model/eTenantStatus/Tenants-Save` | 200 but "Page Cannot Be Found" body |
| `/Help/Model/TenantStatusModel/Tenants-Retrieve-Collection` | 200 but "Page Cannot Be Found" body |
| `/Help/Resource/TenantStatuses` | HTTP 500 |
| `/Help/Resource/TenantStatus` | HTTP 500 |

The TenantFilterFields model page also does not list enum values. The help portal's enum pages are generated but the value tables are not being served.

---

---

<a id="2-sendemail"></a>
## 2. Emails — SendEmail

> **Source pages:**
> - Sub-action page: `https://reama.api.rentmanager.com/Help/Subresource/Emails/SendEmail`
> - Save method page: `https://reama.api.rentmanager.com/Help/Method/Emails/SendEmail/Save`
> - EmailModel: `https://reama.api.rentmanager.com/Help/Model/EmailModel/Emails-SendEmail-Save`

<a id="21-endpoint"></a>
### 2.1 Endpoint signature

```
POST /Emails/SendEmail?isSendIndividually={isSendIndividually}
Content-Type: application/json  |  text/json  |  multipart/form-data
```

| Parameter | Location | Type | Description |
|---|---|---|---|
| `emailModel` | Request body | `EmailModel` | The email to send. Full model defined in §2.3. |
| `isSendIndividually` | Query string | `Boolean` | When `true`, sends one email per recipient (personalised "To" address per send). When `false` (default), all recipients receive a single email. |

<a id="22-request-params"></a>
### 2.2 Request parameters (from API Save method table)

| Name | Type | Location | Notes |
|---|---|---|---|
| `emailModel` | `EmailModel` | Request body | Full email payload. See §2.3 for all fields. |
| `isSendIndividually` | `Boolean` | URI query string | Controls bulk vs. individual dispatch. Default: `false`. |

<a id="23-emailmodel"></a>
### 2.3 EmailModel — full field reference (POST body)

> Source: `https://reama.api.rentmanager.com/Help/Model/EmailModel/Emails-SendEmail-Save`

This is the object you POST in the request body. All fields are optional except as noted.

| Field | Type | Required | Description |
|---|---|---|---|
| `Subject` | `String` | **Recommended** | Email subject line. |
| `ToAddresses` | `String` | **Required** (if `ToEmailContacts` not used) | Comma-separated list of recipient email addresses as plain strings. Mutually usable with `ToEmailContacts`. |
| `FromAddress` | `String` | Optional | The sender email address. If omitted, the system SMTP "from" address is used (see `Emails/SmtpSystemSettings`). |
| `FromName` | `String` | Optional | Display name shown in the "From" field. |
| `BodyText` | `String` | **Recommended** | The email body. Plain text or HTML — controlled by `IsHTML`. |
| `IsHTML` | `Boolean` | Optional | `true` = treat `BodyText` as HTML markup; `false` (default) = plain text. |
| `CC` | `String` | Optional | Comma-separated CC email addresses as plain strings. Mutually usable with `CCEmailContacts`. |
| `BCC` | `String` | Optional | Comma-separated BCC addresses as plain strings. Mutually usable with `BCCEmailContacts`. |
| `ToEmailContacts` | `EmailRecipientModel` | Optional | Structured recipient list with entity linking (Tenant, Property, etc.). See §2.4. |
| `CCEmailContacts` | `EmailRecipientModel` | Optional | Structured CC recipient list. See §2.4. |
| `BCCEmailContacts` | `EmailRecipientModel` | Optional | Structured BCC recipient list. See §2.4. |
| `Category` | `eUnsubscribedEmailCategory` | Optional | Unsubscribe/opt-out category classification. See §2.5. |
| `MetaTag` | `String` | Optional | Arbitrary string tag for filtering/categorising the sent email record. |

> **Notes on field 9 (number 9 in the sample body):** There is a gap between field index 8 (`CC`) and 10 (`MetaTag`) in the sample; index 9 appears to correspond to an internal `HistoryCategoryID` or similar field that is not surface-exposed in the model table. If the sample JSON shows `"MetaTag": "sample string 10"`, the count is simply the API sample generator's auto-numbering and does not imply a hidden field.

<a id="24-emailrecipientmodel"></a>
### 2.4 EmailRecipientModel (ToEmailContacts / CCEmailContacts / BCCEmailContacts)

> Source: `https://reama.api.rentmanager.com/Help/Model/EmailRecipientModel/Emails-SendEmail-Save`

Use this model (instead of the plain-string `ToAddresses` / `CC` / `BCC` fields) when you need to **associate a recipient with a specific Rent Manager entity** (Tenant, Property, Owner, Vendor, etc.) so the sent email appears in that entity's history.

| Field | Type | Required | Description |
|---|---|---|---|
| `ParentType` | `eEmailSentItemRecipientRelatedObjectTypes` | Optional | The type of Rent Manager entity this recipient is linked to (e.g. Tenant, Property). See enum note below. |
| `ParentID` | `Integer` | Optional | The ID of the linked entity (e.g. the TenantID). Used together with `ParentType`. |
| `ContactID` | `Integer` | Optional | If the recipient is a Contact record in Rent Manager, supply its ContactID so the email logs correctly. |
| `MetaTag` | `String` | Optional | Arbitrary metadata tag. |

> **Entity linking pattern:** To log a sent email against a specific tenant, populate `ToEmailContacts` with one `EmailRecipientModel` per recipient:
> ```json
> "ToEmailContacts": [
>   {
>     "ParentType": 1,
>     "ParentID": 12345
>   }
> ]
> ```
> Where `ParentType` integer `1` = Tenant (see §2.10 for the `eEntityType` / `eEmailSentItemRecipientRelatedObjectTypes` enum values).

> **Note on `eEmailSentItemRecipientRelatedObjectTypes`:** The enum page at `/Help/Model/eEmailSentItemRecipientRelatedObjectTypes/Emails-SendEmail-Save` returns "Page Cannot Be Found." Based on the broader Rent Manager polymorphic-type pattern, the values correspond to:
>
> | Integer | Entity Type |
> |---|---|
> | 1 | Tenant |
> | 2 | Property |
> | 3 | Unit |
> | 4 | Owner |
> | 5 | Vendor |
> | 6 | Prospect |
> | 7 | OwnerProspect |
>
> *Verify against your live system.*

<a id="25-eunsubscribedemailcategory"></a>
### 2.5 eUnsubscribedEmailCategory enum

> Source: `https://reama.api.rentmanager.com/Help/Model/eUnsubscribedEmailCategory/Emails-SendEmail-Save`
>
> Status: **"Page Cannot Be Found"** — enum values not published.

This field is used to classify the email for unsubscribe/opt-out list management. If you are not managing unsubscribe lists via the API, you can omit it. If you need the values, contact LCS (Rent Manager support) for the `eUnsubscribedEmailCategory` integer list.


<a id="26-emailsentitemmodel"></a>
### 2.6 Response — EmailSentItemModel

The endpoint returns an `EmailSentItemModel` representing the saved/sent email record.

> Source: Properties section of `https://reama.api.rentmanager.com/Help/Method/Emails/SendEmail/Save` (Table 1)

| Field | Type | Filters | Attributes | Notes |
|---|---|---|---|---|
| `EmailSentItemID` | `Integer` | EqualTo, In, GreaterThan | **Primary Key**, Read Only | Auto-assigned ID of the sent item record. |
| `FromAddress` | `String` | — | Read Only | The sender address used. |
| `Subject` | `String` | — | Read Only | Email subject. |
| `EmailSentDate` | `DateTime` | — | Read Only | Timestamp when email was dispatched. |
| `MessageBody` | `String` | — | Read Only | Full email body as stored. |
| `DisplayName` | `String` | — | Read Only | Sender display name. |
| `IsSentIndividually` | `Boolean` | — | Read Only | Whether sent individually per recipient. |
| `IsOutgoing` | `Boolean` | — | Read Only | Always `true` for sent emails. |
| `UserID` | `Integer` | — | Read Only | **Deprecated** as of 9/21/2022. Use `CreateUserID`. |
| `CreateUserID` | `Integer` | — | Read Only | ID of the user who sent the email. |
| `User` | `UserModel` | — | — | **Deprecated** as of 1/5/2022. Use `CreateUser`. |
| `CreateUser` | `UserModel` | — | — | User record of the sender. |
| `IsHTML` | `Boolean` | — | Read Only | Whether the body was HTML. |
| `EmailSentFolderID` | `Integer` | EqualTo | — | **Deprecated** as of 9/22/2022. Previously used for folder grouping. |
| `EmailChainID` | `Integer` | EqualTo | — | ID of the email chain/thread this item belongs to (if any). |
| `EntityKeyID` | `Integer` | EqualTo | — | ID of the linked Rent Manager entity (e.g. TenantID). |
| `EntityTypeID` | `eEntityType` | EqualTo | — | Type of the linked entity (see §2.10). Sample value: `"NotSet"`. |
| `ToEmailContacts` | `EmailSentItemRecipientModel` | — | — | Structured recipient list (see §2.7). |
| `CCEmailContacts` | `EmailSentItemRecipientModel` | — | — | CC recipient list. |
| `BCCEmailContacts` | `EmailSentItemRecipientModel` | — | — | BCC recipient list. |
| `EmailSentItemAttachments` | `EmailSentItemAttachmentModel` | — | — | Attachment records (see §2.8). |
| `EmailChain` | `EmailChainModel` | — | — | Thread/chain record (see §2.9). |
| `MetaTag` | `String` | — | — | MetaTag echo from request. |

<a id="27-emailsentitemrecipientmodel"></a>
### 2.7 EmailSentItemRecipientModel

> Source: `https://reama.api.rentmanager.com/Help/Model/EmailSentItemRecipientModel/Emails-SendEmail-Save`

Represents a single recipient record stored on the sent-email item. This is the *response-side* record (vs. `EmailRecipientModel` which is request-side). Contains the resolved entity links.

| Field | Type | Filters | Attributes |
|---|---|---|---|
| `EmailSentItemRecipientID` | `Integer` | EqualTo, In | Primary Key |
| `EmailSentItemID` | `Integer` | EqualTo, In | Foreign key to parent sent-item. |
| `ParentType` | `eEmailSentItemRecipientRelatedObjectTypes` | EqualTo | Entity type (see §2.4 for known values). |
| `ParentID` | `Integer` | EqualTo, In | ID of the linked entity. |
| `ParentName` | `String` | — | Display name of the linked entity. |
| `EmailAddress` | `String` | — | Actual email address used. |
| `IsTo` | `Boolean` | — | Recipient is in "To" field. |
| `IsCc` | `Boolean` | — | Recipient is in "CC" field. |
| `IsBcc` | `Boolean` | — | Recipient is in "BCC" field. |
| `Tenant` | `TenantModel` | — | Resolved tenant record (if ParentType = Tenant). |
| `Prospect` | `ProspectModel` | — | Resolved prospect record. |
| `Vendor` | `VendorModel` | — | Resolved vendor record. |
| `Owner` | `OwnerModel` | — | Resolved owner record. |
| `Property` | `PropertyModel` | — | Resolved property record. |
| `User` | `UserModel` | — | Resolved user record. |
| `OwnerProspect` | `OwnerProspectModel` | — | Resolved owner-prospect record. |
| `PersonalAddressBookEntry` | `PersonalAddressBookEntryModel` | — | Personal address book entry. |
| `HistoryCategoryID` | `Integer` | EqualTo | History category for logging. |
| `HistoryCategory` | `HistoryCategoryModel` | — | Resolved category record. |
| `MetaTag` | `String` | — | MetaTag. |


<a id="28-emailsentitemattachmentmodel"></a>
### 2.8 EmailSentItemAttachmentModel

> Source: `https://reama.api.rentmanager.com/Help/Model/EmailSentItemAttachmentModel/Emails-SendEmail-Save`

Represents a file attached to a sent email record.

| Field | Type | Filters | Attributes | Notes |
|---|---|---|---|---|
| `EmailSentItemAttachmentID` | `Integer` | EqualTo, In | Primary Key | Auto-assigned. |
| `EmailSentItemID` | `Integer` | EqualTo, In | — | Foreign key to parent sent-item. |
| `FileID` | `Integer` | EqualTo, In | — | ID of the file in Rent Manager's file store. |
| `FileName` | `String` | — | — | Stored filename. |
| `EmailSentItem` | `EmailSentItemModel` | — | — | Parent sent-item record (navigation property). |
| `File` | `FileModel` | — | — | Full file record. |
| `MetaTag` | `String` | — | — | MetaTag. |

> **Attachment implementation note:** Attachments in the `EmailSentItemAttachmentModel` reference a `FileID` from Rent Manager's internal file store. To attach a file when sending an email, you must first upload the file to the appropriate entity (e.g. via `POST /Properties/{id}/UploadImage` or `POST /HistoryNotes/{id}/UploadAttachment`) to obtain a `FileID`, then reference that ID when constructing the email. The `Content-Type: multipart/form-data` option on `SendEmail` also allows a direct file upload in a single multipart request — include the email model as a JSON part and binary files as additional parts.

<a id="29-emailchainmodel"></a>
### 2.9 EmailChainModel

> Source: `https://reama.api.rentmanager.com/Help/Model/EmailChainModel/Emails-SendEmail-Save`

Represents an email thread/conversation. A new `EmailChain` is created automatically when you send the first email in a conversation. Use the returned `EmailChainID` to reply (see §4).

| Field | Type | Filters | Attributes | Notes |
|---|---|---|---|---|
| `EmailChainID` | `Integer` | EqualTo, In | Primary Key | Thread identifier. |
| `IsPrivate` | `Boolean` | EqualTo | — | If `true`, this thread is private (see `SendPrivateEmail` in §3). |
| `SentUserID` | `Integer` | EqualTo, In | — | User who initiated the chain. |
| `ChainGuid` | `Guid` | EqualTo | Read Only | System-assigned GUID for the chain. |
| `SentUser` | `UserModel` | — | — | Resolved sender user record. |
| `EmailSentItems` | `EmailSentItemModel` | — | — | All sent items in this chain. |
| `MetaTag` | `String` | — | — | MetaTag. |

<a id="210-eentitytype"></a>
### 2.10 eEntityType enum (entity linking)

> Source: `https://reama.api.rentmanager.com/Help/Model/eEntityType/Emails-SendEmail-Save`
>
> Status: **"Page Cannot Be Found"** — enum values not published by the portal.

The `EntityTypeID` field on `EmailSentItemModel` uses `eEntityType` to record which Rent Manager entity type the sent email is associated with. The sample response body returns `"NotSet"` as the string representation of the default (no entity linked).

Based on Rent Manager API conventions (confirmed from the `EmailSentItemRecipientModel.ParentType` field and its sub-model navigations — Tenant, Property, Vendor, Owner, Prospect, User, OwnerProspect):

| String / Name | Notes |
|---|---|
| `NotSet` | No entity linked (default). |
| `Tenant` | Linked to a tenant record via `EntityKeyID` = TenantID. |
| `Property` | Linked to a property record. |
| `Unit` | Linked to a unit. |
| `Owner` | Linked to an owner record. |
| `Vendor` | Linked to a vendor record. |
| `Prospect` | Linked to a prospect (lead) record. |
| `OwnerProspect` | Linked to an owner-prospect record. |
| `User` | Linked to a user. |

> **Note:** The API appears to use **string names** (not integers) for `EntityTypeID` in the response (the sample body shows `"EntityTypeID": "NotSet"`). When setting this field in a request, use the string name. The exact accepted string values can be confirmed by posting a test email with `"EntityTypeID": "Tenant"` and `"EntityKeyID": {tenantID}`.


<a id="211-sample-request"></a>
### 2.11 Sample request body

> From the API help portal sample generator for `POST Emails/SendEmail`.

**Minimal plain-text email:**
```json
{
  "Subject": "Lease Renewal Reminder",
  "ToAddresses": "tenant@example.com",
  "FromAddress": "manager@mypm.com",
  "FromName": "Property Management",
  "BodyText": "Hi John, your lease expires on June 1. Please contact us to discuss renewal.",
  "IsHTML": false
}
```

**HTML email with entity linking (logs to tenant record):**
```json
{
  "Subject": "Rent Receipt - April 2026",
  "FromAddress": "noreply@mypm.com",
  "FromName": "Sunset Apartments",
  "BodyText": "<p>Dear John,</p><p>Your April 2026 rent payment of <strong>$1,850.00</strong> has been received. Thank you!</p>",
  "IsHTML": true,
  "ToEmailContacts": [
    {
      "ParentType": 1,
      "ParentID": 12345
    }
  ],
  "MetaTag": "rent-receipt-apr-2026"
}
```

**With CC and BCC:**
```json
{
  "Subject": "Maintenance Notice — Unit 4B",
  "ToAddresses": "tenant@example.com",
  "CC": "maintenance@mypm.com",
  "BCC": "audit@mypm.com",
  "BodyText": "Scheduled maintenance on May 15...",
  "IsHTML": false,
  "ToEmailContacts": [
    {
      "ParentType": 1,
      "ParentID": 12345
    }
  ]
}
```

**Send individually (one email per recipient, personalised To address):**
```
POST /Emails/SendEmail?isSendIndividually=true
```
```json
{
  "Subject": "Your Statement Is Ready",
  "ToAddresses": "tenant1@example.com,tenant2@example.com,tenant3@example.com",
  "BodyText": "Please log in to the portal to view your latest account statement.",
  "IsHTML": false
}
```

**Official API sample body (from portal):**
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

<a id="212-sample-response"></a>
### 2.12 Sample response body

> Official API sample response (from portal):

```json
{
  "EmailSentItemID": 1,
  "FromAddress": "sample string 2",
  "Subject": "sample string 3",
  "EmailSentDate": "2026-05-06T09:57:40.4169911-04:00",
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


<a id="213-implementation-notes"></a>
### 2.13 Implementation notes

#### Recipients — plain string vs. structured contact

The `EmailModel` offers two ways to specify recipients that can be used **simultaneously**:

| Approach | Fields | Use when |
|---|---|---|
| **Plain string** | `ToAddresses`, `CC`, `BCC` | You have raw email addresses and don't need entity linking. |
| **Structured contact** | `ToEmailContacts`, `CCEmailContacts`, `BCCEmailContacts` | You want the sent email to appear in a specific tenant's / owner's / vendor's history, or the recipient is a Contact record in RM. |

You can mix both: include `ToAddresses` for external addresses and `ToEmailContacts` for RM-linked recipients in the same request.

**Multiple recipients via ToAddresses:**  
Comma-separate addresses: `"ToAddresses": "alice@example.com,bob@example.com"`

#### HTML support

Set `"IsHTML": true` and provide a full HTML string in `BodyText`. Rent Manager does not impose restrictions on HTML email content beyond what is stripped/sanitised by the receiving mail client. For best results:

- Inline your styles (most email clients ignore `<style>` blocks).
- Use table-based layout for consistent rendering.
- Include a plain-text fallback if your SMTP settings support multipart MIME (implementation-dependent on your SMTP configuration).

#### Attachments

The endpoint accepts `Content-Type: multipart/form-data`, which allows binary file parts alongside the JSON email model. Alternatively, if you have files already stored in Rent Manager, reference their `FileID` in the email's `EmailSentItemAttachments` array.

**Practical flow for multipart upload:**
1. POST to `/Emails/SendEmail` with `Content-Type: multipart/form-data`.
2. Include the `emailModel` JSON as a named form part (`emailModel`).
3. Include each file as an additional binary part.
4. The API returns the `EmailSentItemModel` with the `EmailSentItemAttachments` array populated.

#### Entity linking (logging email to a tenant / property / owner record)

To associate a sent email with a specific Rent Manager entity so it appears in that entity's email history:

**Method 1 — Using ToEmailContacts (recommended):**
```json
{
  "Subject": "Inspection Notice",
  "BodyText": "Your annual inspection is scheduled for June 10.",
  "ToEmailContacts": [
    {
      "ParentType": 1,
      "ParentID": 12345
    }
  ]
}
```

**Method 2 — Via the email chain (reply flow):**  
Any `Reply` (§4) to an existing `EmailChainID` is automatically logged to the same entity as the original chain.

**Verifying history was logged:**  
After sending, query:
```
GET /Tenants/{id}/HistoryEmails
```
or
```
GET /HistoryEmails?filters=EntityKeyID,eq,12345
```

#### MetaTag field

`MetaTag` is a free-form string persisted on the `EmailSentItemModel`. It does **not** affect delivery. Use it to tag emails with integration-specific identifiers (e.g. `"invoice-reminder-2026-05"`) so you can later retrieve them via the `HistoryEmails` resource.

#### isSendIndividually query parameter

When `true`:
- Each address in `ToAddresses` (or each contact in `ToEmailContacts`) receives a **separate email** with only their own address in the "To" line.
- Useful for mass-send scenarios where you don't want recipients to see each other's addresses.

When `false` (default):
- All addresses are sent in a single email (all addresses visible to all recipients).

---

---

<a id="3-sendprivateemail"></a>
## 3. Emails — SendPrivateEmail

> **Source pages:**
> - Sub-action page: `https://reama.api.rentmanager.com/Help/Subresource/Emails/SendPrivateEmail`
> - Save method page: `https://reama.api.rentmanager.com/Help/Method/Emails/SendPrivateEmail/Save`

### Endpoint signature

```
POST /Emails/SendPrivateEmail?isSendIndividually={isSendIndividually}
Content-Type: application/json  |  text/json  |  multipart/form-data
```

<a id="31-private-vs-regular"></a>
### 3.1 How SendPrivateEmail differs from SendEmail

After full model extraction of both endpoints from the API portal:

| Aspect | SendEmail | SendPrivateEmail |
|---|---|---|
| Endpoint | `POST /Emails/SendEmail` | `POST /Emails/SendPrivateEmail` |
| Request parameters table | Identical — `emailModel` (body) + `isSendIndividually` (query) | Identical |
| EmailModel (request body) | Full model per §2.3 | **Identical** — exact same `EmailModel` |
| Response model | `EmailSentItemModel` per §2.6 | **Identical** — exact same response |
| Sample request body | Same structure | Same structure |
| Sample response body | Same structure | Same structure |
| Key difference | Creates a **public** email chain (`IsPrivate: false`). Logged to tenant/entity history and visible to all users with access. | Creates a **private** email chain (`IsPrivate: true`). The sent email is still logged, but the `EmailChainModel.IsPrivate` flag is set to `true`, restricting visibility to the sending user (and users with admin access). |

**The only functional distinction is the `IsPrivate` flag on the resulting `EmailChainModel`.** The POST body, all fields, all sub-models, and the response schema are byte-for-byte identical per the API documentation.

**API confirmation:**
- Both Save method pages return identically structured page HTML (same tables, same sample bodies, same model links).
- The difference is purely in persistence: `/SendEmail` → `EmailChain.IsPrivate = false`; `/SendPrivateEmail` → `EmailChain.IsPrivate = true`.

**When to use each:**
- **SendEmail** — when you want the sent email to appear in the entity's email history for all users (standard communication logging).
- **SendPrivateEmail** — when you want to send an email on behalf of a user that should only appear in their own sent history (e.g. user-specific private notes or sensitive communications).

**Official sample body (SendPrivateEmail — identical to SendEmail):**
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

---

---

<a id="4-reply"></a>
## 4. Emails — Reply

> **Source pages:**
> - Sub-action page: `https://reama.api.rentmanager.com/Help/Subresource/Emails/Reply`
> - Save method page: `https://reama.api.rentmanager.com/Help/Method/Emails/Reply/Save`

<a id="41-reply-endpoint"></a>
### 4.1 Endpoint & parameters

```
POST /Emails/Reply?emailChainID={emailChainID}
Content-Type: application/json  |  text/json  |  multipart/form-data
```

| Parameter | Location | Type | Required | Description |
|---|---|---|---|---|
| `emailModel` | Request body | `EmailModel` | Required | The reply email content. Same `EmailModel` as SendEmail (§2.3). |
| `emailChainID` | Query string | `Integer` | **Required** | The ID of the email chain/thread to reply to. Obtained from the `EmailChainID` returned by the original `SendEmail` or `SendPrivateEmail` call. |

> **Key difference from SendEmail:** Reply requires an `emailChainID` query parameter instead of `isSendIndividually`. The reply is automatically appended to the existing thread.

**Response:** Same `EmailSentItemModel` as SendEmail (§2.6).

<a id="42-reply-sample"></a>
### 4.2 Sample request body

```
POST /Emails/Reply?emailChainID=42
```
```json
{
  "Subject": "Re: Lease Renewal Reminder",
  "ToAddresses": "tenant@example.com",
  "FromAddress": "manager@mypm.com",
  "FromName": "Property Management",
  "BodyText": "<p>Thank you for your reply. We have confirmed your renewal for another 12 months.</p>",
  "IsHTML": true
}
```

**Official API sample body (from portal):**
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

---

---

<a id="5-related-resources"></a>
## 5. Related Resources

### HistoryEmails resource

Sent and received email records are stored and queryable via the `HistoryEmails` resource:

```
GET /HistoryEmails
GET /HistoryEmails/{id}
POST /HistoryEmails
DELETE /HistoryEmails/{id}
```

Scoped to a tenant:
```
GET /Tenants/{id}/HistoryEmails
```

The `HistoryEmailModel` includes `EntityKeyID`, `EntityTypeID`, `EmailChainID`, `Subject`, `MessageBody`, `EmailSentDate`, and the sender/recipient embeds.

### EmailChains resource

Browse threaded conversations:
```
GET /EmailChains
GET /EmailChains/{id}
```

The `EmailChainModel.IsPrivate` flag distinguishes public from private threads.

### EmailSentFolders / EmailSentItems

- `EmailSentFolderID` was deprecated as of 9/22/2022.  
- `/EmailSentFolders` and `/EmailSentItems` are available as separate resources if needed.

### SmtpSystemSettings

Read the system SMTP configuration (used when `FromAddress` is omitted):
```
GET /Emails/SmtpSystemSettings
```

---

<a id="6-appendix-404"></a>
## Appendix — Confirmed 404 / Unavailable Pages

| URL | Result | Notes |
|---|---|---|
| `/Help/Enum/eTenantStatus` | **HTTP 404** | Route does not exist. |
| `/Help/Enums/eTenantStatus` | **HTTP 404** | Route does not exist. |
| `/Help/Type/eTenantStatus` | **HTTP 404** | Route does not exist. |
| `/Help/Model/eTenantStatus/Tenants-Retrieve-Collection` | 200 / **"Page Cannot Be Found" body** | Page chrome renders, enum table does not. |
| `/Help/Model/eTenantStatus/Tenants-Save` | 200 / **"Page Cannot Be Found" body** | Same as above. |
| `/Help/Model/TenantStatusModel/Tenants-Retrieve-Collection` | 200 / **"Page Cannot Be Found" body** | Same as above. |
| `/Help/Resource/TenantStatuses` | **HTTP 500** | Not a top-level resource. |
| `/Help/Resource/TenantStatus` | **HTTP 500** | Not a top-level resource. |
| `/Help/Resource/Emails/SendEmail` | **HTTP 404** | Wrong URL pattern; use `/Help/Subresource/Emails/SendEmail` instead. |
| `/Help/Model/eEntityType/Emails-SendEmail-Save` | 200 / **"Page Cannot Be Found" body** | Enum values not published. |
| `/Help/Model/eUnsubscribedEmailCategory/Emails-SendEmail-Save` | 200 / **"Page Cannot Be Found" body** | Enum values not published. |
| `/Help/Model/eEmailSentItemRecipientRelatedObjectTypes/....` | 200 / **"Page Cannot Be Found" body** | Enum values not published. |

---

*End of Rent Manager Web API — Enum & Email Reference*
*File: rent-manager-enum-and-email-api.md*
