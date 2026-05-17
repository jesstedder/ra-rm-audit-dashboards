# Rent Manager Web API — Text Messaging & Phone Broadcast Reference

Compiled from the Rent Manager Web API Reference at `https://reama.api.rentmanager.com/Help/Resources`. This document aggregates documentation for every resource, sub-resource, and supporting model that pertains to **text/SMS messaging**, **phone broadcasts**, **VoIP call history**, and the related communication infrastructure (text numbers, phone numbers, templates, recordings, broadcast lists, and notification automation).

> **General notes**
> - The Rent Manager API Help pages do **not** explicitly mark fields "Required" except where annotated as `Required (create)`. Read-only, primary-key, and concurrency-key markers are surfaced; required-field info should be confirmed by testing or developer support.
> - The text-messaging stack is referred to in models as **NDT** ("Notification Direct Text/Telephony" — the Rent Manager Twilio-backed messaging product). Newer message records use `SourceCompany` (`eTextMessagingSourceCompany`) and `ResourceSID` (the underlying provider SID, typically a Twilio Message SID).
> - The phone-broadcast stack supports prerecorded audio (uploaded as a `PhoneBroadcastRecording` or legacy `NDTPhoneBroadcast`) sent in batches keyed by `NDTPhoneBroadcastBatch`; the text-broadcast stack uses `NDTTextBroadcast` templates and `NDTTextBroadcastBatch` for sending.
> - Inbound and outbound texts are stored in `IncomingTexts` / `OutgoingTexts`. `TextMessagingConversations` provides a thread-summary view across both.

---

## Table of Contents

1. NDTBroadcastLists Resource
2. NDTPhoneBroadcasts Resource (DEPRECATED — replaced by PhoneBroadcastRecordings)
3. NDTPhoneBroadcastBatches Resource
4. NDTTextBroadcasts Resource
5. NDTTextBroadcastBatches Resource
6. NDTBroadcastBatchDetailModel (the batch recipient row)
7. PhoneBroadcastRecordings Resource
8. IncomingTexts Resource
9. OutgoingTexts Resource (with Send/Save endpoint)
10. TextMessagingConversations Resource
11. TextNumbers Resource (and TextNumberPropertyModel)
12. TextTemplates Resource (and User/Folder support models)
13. PhoneNumbers Resource
14. RMVoIPCallHistory Resource (and Tenants/{id}/RMVoIPCallHistory sub-resource)
15. HistoryCalls Resource
16. HistoryEmails Resource
17. HistoryCategories Resource
18. ContactTypes Resource
19. AutomatedNotificationTypes Resource
20. AutomatedNotificationEventSetups Resource (Email + SMS automation)
21. ARAutomationSchedules Resource
22. LetterTemplates Resource (templates also used for SMS via `LetterTemplateType`)
23. Supporting Models (TextMessageSummaryModel, MMSImageModel, TextTemplateUserModel)
24. Endpoint Quick Reference

---

## 1. NDTBroadcastLists Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/NDTBroadcastLists`

### Purpose
A reusable named list of recipients used as the target of a phone or text broadcast.

### Endpoints
- **GET** `NDTBroadcastLists?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `NDTBroadcastLists` — body is `NDTBroadcastGroupModel List`
- **DELETE** `NDTBroadcastLists?ids={ids}` and `NDTBroadcastLists/{id}`

### NDTBroadcastGroupModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| NDTBroadcastListID | Integer | EqualTo | Primary Key |
| ListName | String | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | — | — |
| CreateUser | UserModel | — | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | — | — |
| UpdateUser | UserModel | — | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| MetaTag | String | — | — |

### Sample
```json
[
  {
    "NDTBroadcastListID": 1,
    "ListName": "sample string 2",
    "CreateDate": "2026-05-06T09:18:56.658659-04:00",
    "CreateUserID": 4,
    "UpdateDate": "2026-05-06T09:18:56.658659-04:00",
    "UpdateUserID": 6,
    "ConcurrencyID": 7,
    "MetaTag": "sample string 9"
  }
]
```

---

## 2. NDTPhoneBroadcasts Resource (DEPRECATED)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/NDTPhoneBroadcasts`

> **DEPRECATED** as of 3/18/2021 — replaced by **PhoneBroadcastRecordings** (see §7).

### NDTPhoneBroadcastModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| NDTPhoneBroadcastID | Integer | EqualTo | Primary Key |
| RecordingName | String | — | — |
| PhoneRecordingID | Integer | EqualTo | — |
| Description | String | — | — |
| PhoneRecording | FileModel | — | — |
| MetaTag | String | — | — |

### Sample
```json
[
  {
    "NDTPhoneBroadcastID": 1,
    "RecordingName": "sample string 2",
    "PhoneRecordingID": 3,
    "Description": "sample string 4",
    "MetaTag": "sample string 6"
  }
]
```

---

## 3. NDTPhoneBroadcastBatches Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/NDTPhoneBroadcastBatches`

### Purpose
A scheduled or sent batch of phone (voice) broadcasts. Bound to a recording (`PhoneRecordingID`) and a list of recipients (`NDTBroadcastBatchDetails`).

### Endpoints
- **GET** `NDTPhoneBroadcastBatches?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `NDTPhoneBroadcastBatches?fields={fields}&embeds={embeds}` — body is `NDTPhoneBroadcastBatchModel List`

### NDTPhoneBroadcastBatchModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| NDTPhoneBroadcastBatchID | Integer | EqualTo | Primary Key |
| BroadcastType | eBroadcastType | — | Read Only |
| NDTBroadcastResponseBatchID | Integer | — | Read Only |
| MessageName | String | — | — |
| MessageDescription | String | — | — |
| PhoneRecordingID | Integer | EqualTo | — |
| IsScheduledNow | Boolean | — | — |
| ScheduledDate | DateTime | — | — |
| IsCancelled | Boolean | — | — |
| CreateUserID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| PhoneRecording | FileModel | — | — |
| CreateUser | UserModel | — | — |
| **NDTBroadcastBatchDetails** | NDTBroadcastBatchDetailModel | — | **Required (create)** — recipient rows |
| MetaTag | String | — | — |

### Sample POST body
```json
[
  {
    "NDTPhoneBroadcastBatchID": 1,
    "BroadcastType": "NotSet",
    "NDTBroadcastResponseBatchID": 2,
    "MessageName": "sample string 3",
    "MessageDescription": "sample string 4",
    "PhoneRecordingID": 5,
    "IsScheduledNow": true,
    "ScheduledDate": "2026-05-06T09:20:03.9367949-04:00",
    "IsCancelled": true,
    "CreateUserID": 9,
    "CreateDate": "2026-05-06T09:20:03.9367949-04:00",
    "MetaTag": "sample string 12"
  }
]
```

> **Implementation note:** To create a phone broadcast batch you must also include the `NDTBroadcastBatchDetails` array in the body even though the docs show it omitted from the inline example. See §6 for the detail model.

---

## 4. NDTTextBroadcasts Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/NDTTextBroadcasts`

### Purpose
Reusable text-broadcast templates — the named SMS body that a batch will use.

### Endpoints
- **GET** `NDTTextBroadcasts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `NDTTextBroadcasts` — body is `NDTTextBroadcastModel List`

### NDTTextBroadcastModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| NDTTextBroadcastID | Integer | EqualTo | Primary Key |
| Name | String | — | — |
| Description | String | — | — |
| ScriptingType | eLetterTemplateType | — | — |
| MessageText | String | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | — | — |
| CreateUser | UserModel | — | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | — | — |
| UpdateUser | UserModel | — | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| MetaTag | String | — | — |

### Sample
```json
[
  {
    "NDTTextBroadcastID": 1,
    "Name": "sample string 2",
    "Description": "sample string 3",
    "MessageText": "sample string 4",
    "CreateDate": "2026-05-06T09:19:07.3670296-04:00",
    "CreateUserID": 6,
    "UpdateDate": "2026-05-06T09:19:07.3670296-04:00",
    "UpdateUserID": 8,
    "ConcurrencyID": 9,
    "MetaTag": "sample string 11"
  }
]
```

---

## 5. NDTTextBroadcastBatches Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/NDTTextBroadcastBatches`

### Purpose
A scheduled or sent batch of SMS broadcasts. Each batch is the unit of work that actually dispatches messages to recipients (provided in `NDTBroadcastBatchDetails`).

### Endpoints
- **GET** `NDTTextBroadcastBatches?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `NDTTextBroadcastBatches?fields={fields}&embeds={embeds}` — body is `NDTTextBroadcastBatchModel List`

### NDTTextBroadcastBatchModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| NDTTextBroadcastBatchID | Integer | EqualTo | Primary Key |
| BroadcastType | eBroadcastType | — | Read Only |
| NDTBroadcastResponseBatchID | Integer | — | Read Only |
| MessageName | String | — | — |
| MessageDescription | String | — | — |
| ScriptingType | eLetterTemplateType | — | — |
| IsScheduledNow | Boolean | — | — |
| ScheduledDate | DateTime | — | — |
| IsCancelled | Boolean | — | — |
| CreateUserID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUser | UserModel | — | — |
| **NDTBroadcastBatchDetails** | NDTBroadcastBatchDetailModel | — | **Required (create)** |
| FileAttachments | FileAttachmentModel | — | — (used for MMS attachments) |
| MetaTag | String | — | — |

### Sample POST body
```json
[
  {
    "NDTTextBroadcastBatchID": 1,
    "BroadcastType": "NotSet",
    "NDTBroadcastResponseBatchID": 2,
    "MessageName": "sample string 3",
    "MessageDescription": "sample string 4",
    "IsScheduledNow": true,
    "ScheduledDate": "2026-05-06T09:20:08.0436335-04:00",
    "IsCancelled": true,
    "CreateUserID": 8,
    "CreateDate": "2026-05-06T09:20:08.0436335-04:00",
    "MetaTag": "sample string 11"
  }
]
```

> The message body itself is provided per recipient via `NDTBroadcastBatchDetails[].MessageText` (see §6) — the broadcast batch model itself does not carry the message body, only metadata + scheduling. Use `IsScheduledNow=true` to send immediately, or set `IsScheduledNow=false` and provide `ScheduledDate` for a deferred send.

---

## 6. NDTBroadcastBatchDetailModel (recipient row)

**Source:** `https://reama.api.rentmanager.com/Help/Model/NDTBroadcastBatchDetailModel/NDTPhoneBroadcastBatches-Retrieve-Collection`

This model is **required (create)** as the `NDTBroadcastBatchDetails` collection on both phone and text broadcast batches. Each detail row represents a single recipient and the message text that will be sent to them.

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| NDTBroadcastBatchDetailID | Integer | EqualTo, In | Primary Key |
| NDTBroadcastBatchID | Integer | EqualTo, In | — |
| Name | String | — | — |
| PhoneNumber | String | — | — |
| FromNumber | String | — | — |
| ParentType | eEntityType | EqualTo | — (Tenant, Prospect, Owner, OwnerProspect, Vendor, Property, …) |
| ParentID | Integer | EqualTo | — |
| IsOutbound | Boolean | — | — |
| MessageText | String | — | — |
| SegmentCount | Integer | — | Read Only |
| HistoryNote | String | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Owner | OwnerModel | — | — |
| OwnerProspect | OwnerProspectModel | — | — |
| Vendor | VendorModel | — | — |
| Property | PropertyModel | — | — |
| HistoryCategoryID | Integer | EqualTo | — |
| HistoryCategory | HistoryCategoryModel | — | — |
| MetaTag | String | — | — |

> When sending a text broadcast you typically populate one detail row per recipient, with `PhoneNumber` (destination), `FromNumber` (one of your TextNumbers), `ParentType` + `ParentID` (so the text is logged against the right entity), and `MessageText` (the merged-per-recipient body). `SegmentCount` is computed by the server.

---

## 7. PhoneBroadcastRecordings Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/PhoneBroadcastRecordings`

### Purpose
The current-generation replacement for `NDTPhoneBroadcasts`: a named audio recording that can be referenced by a phone broadcast batch (`NDTPhoneBroadcastBatch.PhoneRecordingID`).

### Endpoints
- **GET** `PhoneBroadcastRecordings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `PhoneBroadcastRecordings`

### PhoneBroadcastRecordingModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PhoneBroadcastRecordingID | Integer | EqualTo | Primary Key |
| RecordingName | String | — | — |
| FileID | Int32 | — | Read Only |
| Description | String | — | — |
| File | FileModel | — | — |
| MetaTag | String | — | — |

### Sample
```json
[
  {
    "PhoneBroadcastRecordingID": 1,
    "RecordingName": "sample string 2",
    "FileID": 1,
    "Description": "sample string 3",
    "MetaTag": "sample string 6"
  }
]
```

---

## 8. IncomingTexts Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/IncomingTexts`

### Purpose
Inbound SMS / MMS messages received against your provisioned text numbers. Each row represents one received message tied (by `ParentType` + `ParentID`) to a Tenant, Prospect, Owner, Vendor, etc., when the sender's phone number matches a known contact.

### Endpoints
- **GET** `IncomingTexts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `IncomingTexts?fields={fields}&embeds={embeds}` — body is `IncomingTextModel List` (used by inbound webhook ingestion)
- **DELETE** `IncomingTexts?ids={ids}`

### IncomingTextModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| IncomingTextID | Integer | EqualTo | Primary Key |
| PhoneNumber | String | EqualTo, In | — (sender) |
| SourceCompany | eTextMessagingSourceCompany | — | — |
| Message | String | — | — |
| ReceivedDate | DateTime | — | — |
| ParentID | Integer | EqualTo | — |
| ParentType | eTextMessageConversationType | EqualTo | — (Tenant, Prospect, Owner, Vendor, Property…) |
| ReadUserID | Integer | EqualTo | — |
| ReadDate | DateTime | — | — |
| IsMMS | Boolean | — | Read Only |
| SegmentCount | Integer | — | Read Only |
| LocationID | Integer | EqualTo | Read Only |
| ResourceSID | String | EqualTo | — (provider/Twilio Message SID) |
| HistoryCategoryID | Integer | EqualTo | — |
| HistoryCategory | HistoryCategoryModel | — | — |
| MainLocationIncomingTextID | Integer | — | Read Only |
| ReceivingPhoneNumberString | String | — | — (your TextNumber that received) |
| ReadUser | UserModel | EqualTo | Read Only |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Owner | OwnerModel | — | — |
| Vendor | VendorModel | — | — |
| Property | PropertyModel | — | — |
| Location | LocationModel | — | — |
| **MMSImages** | MMSImageModel | — | — (collection of attached images) |
| MMSImage | MMSImageModel | — | DEPRECATED 4/1/2022 (replaced by MMSImages) |
| ReceivingPhoneNumber | PhoneNumberModel | — | — |
| MetaTag | String | — | — |

### Sample
```json
[
  {
    "IncomingTextID": 1,
    "PhoneNumber": "sample string 2",
    "Message": "sample string 3",
    "ReceivedDate": "2026-05-06T09:19:14.6243406-04:00",
    "ParentID": 5,
    "ParentType": "Tenant",
    "ReadUserID": 6,
    "ReadDate": "2026-05-06T09:19:14.6243406-04:00",
    "IsMMS": true,
    "SegmentCount": 9,
    "LocationID": 10,
    "ResourceSID": "sample string 11",
    "HistoryCategoryID": 12,
    "MainLocationIncomingTextID": 13,
    "ReceivingPhoneNumberString": "sample string 14",
    "MetaTag": "sample string 16"
  }
]
```

---

## 9. OutgoingTexts Resource (Send a single SMS)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/OutgoingTexts`

### Purpose
Represents an outbound SMS / MMS. **Posting to this endpoint is the simplest way to send a one-off text message via the API** (whereas NDTTextBroadcastBatches is for bulk/scheduled sends).

### Endpoints
- **GET** `OutgoingTexts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `OutgoingTexts?fields={fields}&embeds={embeds}` — body is `OutgoingTextModel List`
- **DELETE** `OutgoingTexts?ids={ids}`

### OutgoingTextModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| OutgoingTextID | Integer | EqualTo | Primary Key |
| NDTBroadcastBatchID | Integer | EqualTo | — (set when this outbound was part of a broadcast batch) |
| PhoneNumber | String | EqualTo, In | — (destination) |
| Message | String | — | — |
| ParentID | Integer | EqualTo | — |
| ParentType | eTextMessageConversationType | EqualTo | — (Tenant, Prospect, Owner, Vendor, Property…) |
| SentUserID | Integer | EqualTo | Read Only |
| SentDate | DateTime | — | Read Only |
| IsMMS | Boolean | — | Read Only |
| SegmentCount | Integer | — | Read Only |
| LocationID | Integer | EqualTo | Read Only |
| MainLocationOutgoingTextID | Integer | — | Read Only |
| SendingPhoneNumberString | String | — | — (your TextNumber) |
| HistoryCategoryID | Integer | EqualTo | — |
| HistoryCategory | HistoryCategoryModel | — | — |
| SentUser | UserModel | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Owner | OwnerModel | — | — |
| Vendor | VendorModel | — | — |
| Property | PropertyModel | — | — |
| Location | LocationModel | — | — |
| MMSImages | MMSImageModel | — | — |
| MMSImage | MMSImageModel | — | DEPRECATED 3/29/2022 (replaced by MMSImages) |
| SendingPhoneNumber | PhoneNumberModel | — | — |
| MetaTag | String | — | — |

### Sample POST body (sends a single SMS)
```json
[
  {
    "OutgoingTextID": 1,
    "NDTBroadcastBatchID": 2,
    "PhoneNumber": "sample string 3",
    "Message": "sample string 4",
    "ParentID": 5,
    "ParentType": "Tenant",
    "SentUserID": 6,
    "SentDate": "2026-05-06T09:19:22.5224786-04:00",
    "IsMMS": true,
    "SegmentCount": 9,
    "LocationID": 10,
    "MainLocationOutgoingTextID": 11,
    "SendingPhoneNumberString": "sample string 12",
    "HistoryCategoryID": 13,
    "MetaTag": "sample string 16"
  }
]
```

> **Implementation note for one-off sends:** The minimum useful create body is typically `PhoneNumber` (destination), `Message`, `ParentType` + `ParentID` (so the message is logged on the right entity), and `SendingPhoneNumberString` (your provisioned TextNumber). `SentUserID`, `SentDate`, `IsMMS`, and `SegmentCount` are filled in by the server.

---

## 10. TextMessagingConversations Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/TextMessagingConversations`

### Purpose
A thread/summary view that aggregates incoming + outgoing texts and broadcast batch detail rows for a given external phone number ↔ entity combination — i.e., the threaded conversation view you'd render in a chat UI.

### Endpoints
- **GET** `TextMessagingConversations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&pageSize={pageSize}&pageNumber={pageNumber}&ignorePaging={ignorePaging}`

> Note: this resource also exposes the `ignorePaging` parameter (Boolean) — useful for fetching the entire conversation list without pagination.

### TextMessageConversationSummaryModel Properties

| Name | Type | Attributes |
|---|---|---|
| Messages | TextMessageSummaryModel | — (collection of message rows in the conversation) |
| LastMessage | TextMessageSummaryModel | — |
| ExternalPhoneNumber | String | — |
| ParentType | eTextMessageConversationType | — |
| ParentID | Integer | — |
| LastTextDate | DateTime | Read Only, Calculated Field, Requires Embed (LastMessage) |
| Tenant | TenantModel | — |
| Prospect | ProspectModel | — |
| Owner | OwnerModel | — |
| OwnerProspect | OwnerProspectModel | — |
| Vendor | VendorModel | — |
| User | UserModel | — |
| Property | PropertyModel | — |
| MetaTag | String | — |

### Sample
```json
[
  {
    "ExternalPhoneNumber": "sample string 1",
    "ParentType": "Tenant",
    "ParentID": 2,
    "LastTextDate": "0001-01-01T00:00:00",
    "MetaTag": "sample string 4"
  }
]
```

### TextMessageSummaryModel (used as `Messages`/`LastMessage`)

| Name | Type |
|---|---|
| TextMessageType | eTextMessageType |
| TextMessageID | Integer |
| ParentType | eTextMessageConversationType |
| ParentID | Integer |
| Message | String |
| TextDate | DateTime |
| ReadDate | DateTime |
| SentUserName | String |
| IncomingMessage | IncomingTextModel |
| OutgoingMessage | OutgoingTextModel |
| BroadcastBatchDetail | NDTBroadcastBatchDetailModel |
| IsLinked | Boolean |
| MetaTag | String |

---

## 11. TextNumbers Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/TextNumbers`

### Purpose
Represents the phone numbers your account has provisioned for sending/receiving SMS. `IsForBroadcast` flags numbers that may be used as the From-number on broadcast batches; `IsSystemDefault` marks the default sender.

### Endpoints
- **GET** `TextNumbers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `TextNumbers`

### TextNumberModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| TextNumberID | Integer | EqualTo, In | Primary Key, Read Only |
| TextNumber | String | — | Read Only |
| IsForBroadcast | Boolean | EqualTo | — |
| IsSystemDefault | Boolean | EqualTo | — |
| IsActive | Boolean | EqualTo | Read Only |
| Name | String | — | — |
| Description | String | — | — |
| StrippedTextNumber | String | EqualTo | Read Only |
| IsAllProperties | Boolean | — | Read Only, Calculated Field, Requires Embed (TextNumberProperties) |
| SortOrder | Integer | — | — |
| TextNumberProperties | TextNumberPropertyModel | — | — |
| MetaTag | String | — | — |

### TextNumberPropertyModel (per-property scoping for a TextNumber)

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| TextNumberPropertyID | Integer | EqualTo | Primary Key |
| TextNumberID | Integer | EqualTo, In | — |
| PropertyID | Integer | EqualTo, In | — |
| LocationID | Integer | EqualTo | Read Only |
| Location | LocationModel | — | — |
| Property | PropertyModel | — | — |
| MetaTag | String | — | — |

---

## 12. TextTemplates Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/TextTemplates`

### Purpose
Reusable per-user/per-role text templates (think: canned responses or quick-replies in the chat UI). Distinct from `NDTTextBroadcasts`, which are templates used by broadcast batches.

### Endpoints
- **GET** `TextTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `TextTemplates`

### TextTemplateModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| TextTemplateID | Integer | EqualTo, In | Primary Key |
| Name | String | EqualTo | — |
| Description | String | — | — |
| MessageText | String | — | — |
| TextTemplateType | eTextTemplateType | — | — |
| TextTemplateFolderID | Integer | EqualTo | — |
| HistoryCategoryID | Integer | EqualTo | — |
| SortOrder | Integer | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| HistoryCategory | HistoryCategoryModel | — | — |
| TextTemplateFolder | TextTemplateFolderModel | — | — |
| TextTemplateUsers | TextTemplateUserModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| TextTemplateRoles | TextTemplateRoleModel | — | — |
| MetaTag | String | — | — |

### TextTemplateUserModel (assignment of a template to a user)

| Name | Type | Attributes |
|---|---|---|
| TextTemplateUserID | Integer | Primary Key |
| UserID | Integer | — |
| TextTemplateID | Integer | — |
| TextTemplate | TextTemplateModel | — |
| User | UserModel | — |
| MetaTag | String | — |

---

## 13. PhoneNumbers Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/PhoneNumbers`

### Purpose
The phone numbers attached to entities (Tenants, Prospects, Owners, Vendors, Users, Properties, Loans, WebUsers, etc.). Includes flags governing whether the number is text-eligible and whether the contact has opted out of texting.

### Endpoints
- **GET** `PhoneNumbers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `PhoneNumbers`

### PhoneNumberModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PhoneNumberID | Integer | EqualTo | Primary Key |
| PhoneNumberTypeID | Integer | EqualTo | — |
| PhoneNumber | String | — | — |
| Extension | String | EqualTo, In | — |
| StrippedPhoneNumber | String | EqualTo, In | — |
| IsPrimary | Boolean | EqualTo | — |
| **IsTextReady** | Boolean | EqualTo | — (number is provisioned/eligible for SMS) |
| **IsInvalidForTexting** | Boolean | EqualTo, NotEqualTo | Read Only |
| **InvalidTextingErrorCode** | String | EqualTo, NotEqualTo | Read Only |
| **IsOptOut** | Boolean | EqualTo, NotEqualTo | Read Only — recipient has opted out |
| ParentID | Integer | EqualTo, In | — |
| ParentType | ePhoneNumberRelatedObjectTypes | EqualTo, In | — |
| Contact | ContactModel | — | — |
| Utility | UtilityModel | — | — |
| Vendor | VendorModel | — | — |
| User | UserModel | — | — |
| Property | PropertyModel | — | — |
| OwnerProspect | OwnerProspectModel | — | — |
| PhoneNumberType | PhoneNumberTypeModel | — | — |
| WebUser | WebUserModel | — | — |
| LoanContact | LoanContactModel | — | — |
| MetaTag | String | — | — |

> **Important for SMS sends:** Before sending a text to a recipient, filter for `IsTextReady=true`, `IsInvalidForTexting=false`, and `IsOptOut=false` to avoid carrier rejections and TCPA risk.

---

## 14. RMVoIPCallHistory Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/RMVoIPCallHistory`

### Purpose
A read-mostly log of every VoIP call placed/received by Rent Manager VoIP-enabled users. Records inbound and outbound calls, dialed numbers, contact-made flags, recording filenames, and ties to Tenants/Prospects/Owners/Vendors/Properties.

### Endpoints
- **GET** `RMVoIPCallHistory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **GET** `Tenants/{id}/RMVoIPCallHistory?filters=...` — sub-resource scoped to a single tenant

### RMVoIPCallHistoryModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| RMVoIPCallHistoryID | Integer | EqualTo, In | Primary Key, Read Only |
| RMVoIPMainLocationCallHistoryID | Integer | — | Read Only |
| LocationID | Integer | — | Read Only |
| ParentID | Integer | EqualTo | Read Only |
| ParentType | eRMVoIPCallHistoryRelatedObjectTypes | EqualTo | Read Only |
| UserIDTo | Integer | EqualTo | Read Only |
| UserIDFrom | Integer | EqualTo | Read Only |
| CallTo | String | — | Read Only |
| CallFrom | String | — | Read Only |
| DialedPhoneNumber | String | — | — |
| IsOutbound | Boolean | — | Read Only |
| IsContactMade | Boolean | — | — |
| HistoryCategoryID | Int32 | EqualTo | — |
| LeadSourceID | Int32 | EqualTo | Read Only |
| OwnerProspectLeadSourceID | Integer | EqualTo | Read Only |
| StartTime | DateTime | — | Read Only |
| EndTime | DateTime | — | Read Only |
| StartTimeUTC | DateTime | — | Read Only |
| Notes | String | — | — |
| CallerID | String | — | Read Only |
| ChannelID | String | — | — |
| RMVoIPFileName | String | — | — (recording filename, if call recording is enabled) |
| HistoryCategory | HistoryCategoryModel | — | — |
| UserTo | UserModel | — | — |
| UserFrom | UserModel | — | — |
| LeadSource | LeadSourceModel | — | — |
| OwnerProspectLeadSource | OwnerProspectLeadSourceModel | — | — |
| ProspectID | Integer | — | Read Only |
| Prospect | ProspectModel | — | — |
| TenantID | Integer | — | Read Only |
| Tenant | TenantModel | — | — |
| VendorID | Integer | — | Read Only |
| Vendor | VendorModel | — | — |
| OwnerID | Integer | — | Read Only |
| Owner | OwnerModel | — | — |
| OwnerProspectID | Integer | — | Read Only |
| OwnerProspect | OwnerProspectModel | — | — |
| PropertyID | Integer | — | Read Only |
| Property | PropertyModel | — | — |
| HuntGroupAssociations | RMVoIPHuntGroupAssociationModel | — | — |
| MetaTag | String | — | — |

### Sample (response)
```json
[
  {
    "RMVoIPCallHistoryID": 1,
    "RMVoIPMainLocationCallHistoryID": 2,
    "LocationID": 3,
    "ParentID": 4,
    "UserIDTo": 5,
    "UserIDFrom": 6,
    "CallTo": "sample string 7",
    "CallFrom": "sample string 8",
    "DialedPhoneNumber": "sample string 9",
    "IsOutbound": true,
    "IsContactMade": true,
    "HistoryCategoryID": 1,
    "LeadSourceID": 1,
    "OwnerProspectLeadSourceID": 12,
    "StartTime": "2026-05-06T09:19:33.6686478-04:00",
    "EndTime": "2026-05-06T09:19:33.6686478-04:00",
    "StartTimeUTC": "2026-05-06T09:19:33.6686478-04:00",
    "Notes": "sample string 16",
    "CallerID": "sample string 17",
    "ChannelID": "sample string 18",
    "RMVoIPFileName": "sample string 19",
    "MetaTag": "sample string 21"
  }
]
```

> Most properties are **Read Only** because the API exposes call history for reporting; the small number of writable fields (`DialedPhoneNumber`, `IsContactMade`, `HistoryCategoryID`, `Notes`, `ChannelID`, `RMVoIPFileName`) let you annotate or correct an existing call record. Placing/initiating calls is not done through this resource — it's a log of calls placed via the RM VoIP soft phone integration.

---

## 15. HistoryCalls Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/HistoryCalls`

### Purpose
The generic call-history (manual or system-generated) row attached to an entity (Tenant, Prospect, Owner, OwnerProspect, Asset, Eviction). Use this to create call notes/log a phone outreach when not using RM VoIP, or to view calls from the entity's History tab.

### Endpoints
- **GET** `HistoryCalls?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `HistoryCalls`

### HistoryCallModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo, In | Primary Key |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo, In | — |
| HistoryDate | DateTime | — | — |
| HistoryEndDate | DateTime | — | — |
| Note | String | — | — |
| Result | String | — | — |
| IsFirstContact | Boolean | — | — |
| IsLocked | Boolean | — | — |
| IsCompleted | Boolean | — | — |
| IsContactMade | Boolean | — | — |
| IsPinned | Boolean | EqualTo, NotEqualTo | — |
| IsShowOnPaymentsTab | Boolean | — | Calculated Field |
| IsShowOnOwnerStatement | Boolean | — | Calculated Field |
| CreateUserID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ParentID | Integer | EqualTo, In | — |
| UpdateDate | DateTime | — | — |
| HistoryCategory | HistoryCategoryModel | — | — |
| Owner | OwnerModel | — | — |
| OwnerProspect | OwnerProspectModel | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Asset | AssetModel | — | — |
| Eviction | EvictionModel | — | — |
| ParentType | eHistoryCallRelatedObjectTypes | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| FollowUpTask | FollowUpTaskModel | — | — |
| MetaTag | String | — | — |

---

## 16. HistoryEmails Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/HistoryEmails`

### Purpose
Same shape as HistoryCalls but for email history rows; useful for writing comprehensive tenant communication audit logs.

### HistoryEmailModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryID | Integer | EqualTo, In | Primary Key |
| HistoryType | eHistoryType | EqualTo | Read Only |
| HistoryCategoryID | Integer | EqualTo, In | — |
| HistoryDate | DateTime | — | — |
| HistoryEndDate | DateTime | — | — |
| Note | String | — | — |
| Result | String | — | — |
| IsFirstContact | Boolean | — | — |
| IsLocked | Boolean | — | — |
| IsCompleted | Boolean | — | — |
| IsPinned | Boolean | EqualTo, NotEqualTo | — |
| IsShowOnPaymentsTab | Boolean | — | Calculated Field |
| IsShowOnOwnerStatement | Boolean | — | Calculated Field |
| IsContactMade | Boolean | — | Read Only |
| CreateUserID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ParentID | Integer | EqualTo, In | — |
| UpdateDate | DateTime | — | — |
| Owner | OwnerModel | — | — |
| OwnerProspect | OwnerProspectModel | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Asset | AssetModel | — | — |
| Eviction | EvictionModel | — | — |
| EntityType | eHistoryEmailRelatedObjectTypes | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| FollowUpTask | FollowUpTaskModel | — | — |
| MetaTag | String | — | — |

---

## 17. HistoryCategories Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/HistoryCategories`

Used by all messaging resources via `HistoryCategoryID` to classify how the communication is logged on an entity's History tab.

### HistoryCategoryModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| HistoryCategoryID | Integer | EqualTo, In | Primary Key |
| Name | String | — | — |
| IsActive | Boolean | — | — |
| HistoryCategoryTypes | HistoryCategoryTypeModel | — | **Required (create)** |
| MetaTag | String | — | — |

---

## 18. ContactTypes Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/ContactTypes`

Companion to PhoneNumbers — types/labels for phone numbers and other contact info attached to entities.

### ContactTypeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ContactTypeID | Integer | EqualTo, In | Primary Key |
| Name | String | EqualTo | — |
| Description | String | — | — |
| ParentType | eContactTypeRelatedObjectTypes | — | — |
| MetaTag | String | — | — |

---

## 19. AutomatedNotificationTypes Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/AutomatedNotificationTypes`

### Purpose
The catalog of system-defined event types that can trigger an automated notification (Email/SMS/Letter), e.g. "Payment Received", "Move-In Confirmed", "Lease Expiring", etc.

### AutomatedNotificationTypeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AutomatedNotificationTypeID | eNotificationEventTypes | EqualTo | Primary Key |
| Name | String | — | — |
| Description | String | — | — |
| TreeViewDescription | String | — | — |
| IsService | Boolean | — | — |
| IsStandaloneAvailable | Boolean | — | — |
| IsHidden | Boolean | — | — |
| AutomatedNotificationTypeGroupID | Integer | EqualTo | — |
| AutomatedNotificationTypeGroup | AutomatedNotificationTypeGroupModel | — | — |
| AutomatedNotificationTypeOptionSettings | AutomatedNotificationTypeOptionSettingModel | — | — |
| AutomatedNotificationTypeOptions | CrossAutomatedNotificationTypeAutomatedNotificationTypeOptionModel | — | — |
| MetaTag | String | — | — |

---

## 20. AutomatedNotificationEventSetups Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/AutomatedNotificationEventSetups`

### Purpose
The configuration record for a specific automated notification — both the **Email** body (`Subject`, `Message`, `FromName`, `FromEmailAddress`) **and** the **SMS** body (`SMSMessage`) are stored here. This is the primary mechanism for triggering automated, event-driven SMS messages from Rent Manager.

### AutomatedNotificationEventSetupModel Properties (selected)

| Name | Type | Filters | Attributes |
|---|---|---|---|
| AutomatedNotificationEventSetupID | Integer | — | Primary Key |
| AutomatedNotificationEventTypeID | eNotificationEventTypes | In | — |
| IsSystemDefaultSetup | Boolean | — | — |
| IsActive | Boolean | — | — |
| IsIncludeProspectMoveIn | Boolean | — | — |
| ExcludeIfMoveOut | Boolean | — | — |
| IsRenewalAccepted | Boolean | — | — |
| StrReservationAddedSource | eShortTermReservationSource | — | — |
| PurchaseOrderStatusFilter | eAutomatedNotificationPurchaseOrderStatusFilter | — | — |
| IsSendReminderDailyUntilPaidOrCancelled | Boolean | — | — |
| SurveyExpirationDays | Integer | — | — |
| IsArchitecturalRequestApproved | Boolean | — | — |
| ArchitecturalRequestStatuses | String | — | — |
| Days | Integer | — | — |
| IsAddHistory | Boolean | — | — |
| **FromName** | String | — | — (email From display name) |
| **FromEmailAddress** | String | — | — (email From address) |
| **Subject** | String | — | — (email subject) |
| **Message** | String | — | — (email body) |
| AppendWebChatQueueMessageToEmail | Boolean | — | — |
| **SMSMessage** | String | — | — (SMS body for this notification) |
| AppendWebChatQueueMessageToSMS | Boolean | — | — |
| LetterTemplateID | Integer | — | — |
| LetterTemplateType | eLetterTemplateType | — | — |
| ServiceBasedMessageSendTime | DateTime | — | — |
| ServiceBasedMessageSendTimeTimeZone | String | — | — |
| ServiceBasedMessageSendTimeIsDaylightSavingTime | Boolean | — | — |
| ServiceBasedLastRunTime | DateTime | — | — |
| IsExcludeReservedProspect | Boolean | — | — |
| CreateDate / CreateUserID / UpdateDate / UpdateUserID | — | — | standard audit fields |
| ConcurrencyID | Integer | — | Concurrency Key |
| Properties | AutomatedNotificationEventSetupPropertyModel | — | — |
| Categories | AutomatedNotificationEventSetupCategoryModel | — | — |
| ProspectStages | AutomatedNotificationEventSetupProspectStageModel | — | — |
| GuestCardTemplates | AutomatedNotificationEventSetupGuestCardTemplateModel | — | — |
| Recipients | AutomatedNotificationEventSetupRecipientModel | — | — |
| WebChatQueues | AutomatedNotificationEventSetupWebChatQueueModel | — | — |
| UserDefinedFields | AutomatedNotificationEventSetupUserDefinedFieldsModel | — | — |
| MaintenanceGroups | AutomatedNotificationEventSetupMaintenanceGroupModel | — | — |
| InspectionTypes | AutomatedNotificationEventSetupInspectionTypeModel | — | — |
| RenewalStatuses | AutomatedNotificationEventSetupRenewalStatusModel | — | — |
| EvictionWorkflowStages | AutomatedNotificationEventSetupEvictionWorkflowStageModel | — | — |
| Surveys | AutomatedNotificationEventSetupSurveyModel | — | — |
| StarRatings | AutomatedNotificationEventSetupStarRatingModel | — | — |
| InspectorTypes | AutomatedNotificationEventSetupInspectorTypeModel | — | — |
| MetaTag | String | — | — |

---

## 21. ARAutomationSchedules Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/ARAutomationSchedules`

### Purpose
Schedules for AR automation (auto-billing reminders/letters/SMS). The schedule itself is shallow; the per-step config lives in `ARAutomationScheduleDetails`.

### ARAutomationScheduleModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ARAutomationScheduleID | Integer | EqualTo | Primary Key |
| Name | String | EqualTo | — |
| IsActive | Boolean | — | — |
| CreateDate | DateTime | — | — |
| UpdateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateUserID | Integer | EqualTo | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| ARAutomationScheduleDetails | ARAutomationScheduleDetailModel | — | — |
| MetaTag | String | — | — |

---

## 22. LetterTemplates Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/LetterTemplates`

### Purpose
LetterTemplates power outbound letters, but the same model is also referenced as the body source for SMS broadcasts and AR automation messages via `LetterTemplateType` (`eLetterTemplateType`). Some `LetterTemplate` records can act as SMS templates (with `IsEmailEnabled` controlling email vs. text channel; merge tokens follow the standard letter syntax).

### LetterTemplateModel Properties (selected — full list available on the resource page)

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LetterTemplateID | Integer | EqualTo, In | Primary Key |
| Name | String | EqualTo | — |
| LetterTemplateType | eLetterTemplateType | EqualTo, In | — |
| Description | String | — | — |
| SortOrder | Integer | — | — |
| Token | String | — | — |
| IsAllUsers | Boolean | — | — |
| RecordsPerPage | Integer | — | — |
| HeaderLetterTemplateID | Integer | — | — |
| FooterLetterTemplateID | Integer | — | — |
| ScriptBeforeMerge | String | — | — |
| IsKeepTogether | Boolean | — | — |
| IsLockAfterMerged | Boolean | — | — |
| IsVPOReady | Boolean | — | — |
| IsSignable | Boolean | — | — |
| IsAdverseActionLetter | Boolean | — | — |
| IsIncomeVerificationAdverseActionLetter | Boolean | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| IsOnRightClickMenu | Boolean | EqualTo | — |
| IsOnLetterMenu | Boolean | EqualTo | — |
| VPOToAddress | String | — | — |
| VPOFromAddress | String | — | — |
| LetterTemplateUsers | LetterTemplateUserModel | — | — |
| LetterTemplateRoles | LetterTemplateRoleModel | — | — |
| LetterTemplateFilters | LetterTemplateFilterModel | — | — |
| Header | LetterTemplateModel | — | — |
| Footer | LetterTemplateModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| MaximumSignerCount | Integer | — | Read Only |
| RequiresCompanyRepresentativeSignatures | Boolean | — | Read Only |
| HistoryCategoryID | Integer | EqualTo | — |
| **IsEmailEnabled** | Boolean | — | — (channel toggle) |
| **EmailSubject** | String | — | — |
| SignableFields | LetterTemplateSignableFieldModel | — | — |
| LetterTemplateLetterTemplateFolder | LetterTemplateLetterTemplateFolderModel | — | — |
| DocumentPacketDocuments | DocumentPacketDocumentModel | — | — |
| HistoryCategory | HistoryCategoryModel | — | — |
| MetaTag | String | — | — |

---

## 23. Supporting Models

### 23.1 MMSImageModel

Used by `IncomingTexts.MMSImages` and `OutgoingTexts.MMSImages` to attach images to MMS messages.

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| MMSImageID | Integer | EqualTo | Primary Key |
| FileID | Integer | EqualTo | — |
| IncomingTextID | Integer | EqualTo, In | — |
| OutgoingTextID | Integer | EqualTo, In | — |
| SortOrder | Integer | — | — |
| IncomingImageExt | String | — | — |
| File | FileModel | — | — |
| MetaTag | String | — | — |

### 23.2 TextMessageSummaryModel
*(Repeated here for cross-reference — the row shape used inside a TextMessagingConversation thread.)*

| Name | Type |
|---|---|
| TextMessageType | eTextMessageType |
| TextMessageID | Integer |
| ParentType | eTextMessageConversationType |
| ParentID | Integer |
| Message | String |
| TextDate | DateTime |
| ReadDate | DateTime |
| SentUserName | String |
| IncomingMessage | IncomingTextModel |
| OutgoingMessage | OutgoingTextModel |
| BroadcastBatchDetail | NDTBroadcastBatchDetailModel |
| IsLinked | Boolean |
| MetaTag | String |

### 23.3 RMVoIPHuntGroupAssociationModel (referenced)
RMVoIPCallHistory rows expose a `HuntGroupAssociations` collection of this model — useful for understanding which hunt group / queue routed an inbound call. The model definition page wasn't expanded in this pass but is available at `/Help/Model/RMVoIPHuntGroupAssociationModel/RMVoIPCallHistory-Retrieve-Collection`.

---

## 24. Endpoint Quick Reference

### Send / receive a single SMS

| Operation | Endpoint | Body |
|---|---|---|
| **Send a one-off SMS** | `POST OutgoingTexts` | `OutgoingTextModel List` — at minimum `PhoneNumber` (to), `Message`, `ParentType`, `ParentID`, `SendingPhoneNumberString` (your TextNumber) |
| List sent texts | `GET OutgoingTexts?filters=ParentID,eq,{tenantId};ParentType,eq,Tenant` | — |
| List received texts | `GET IncomingTexts?filters=ParentID,eq,{tenantId};ParentType,eq,Tenant` | — |
| Ingest an inbound text (webhook) | `POST IncomingTexts` | `IncomingTextModel List` |
| Threaded conversation view | `GET TextMessagingConversations?filters=ParentType,eq,Tenant;ParentID,eq,{tenantId}&embeds=Messages,LastMessage` | — |
| Get a conversation without paging | `GET TextMessagingConversations?...&ignorePaging=true` | — |

### SMS broadcasts (bulk)

| Operation | Endpoint | Body |
|---|---|---|
| List/create SMS templates (broadcast) | `GET/POST NDTTextBroadcasts` | `NDTTextBroadcastModel List` |
| Schedule/send an SMS broadcast batch | `POST NDTTextBroadcastBatches` | `NDTTextBroadcastBatchModel List` (`NDTBroadcastBatchDetails` Required (create); `IsScheduledNow=true` to send immediately, otherwise set `ScheduledDate`) |
| List sent broadcast batches | `GET NDTTextBroadcastBatches` | — |
| Manage broadcast lists | `GET/POST/DELETE NDTBroadcastLists` | `NDTBroadcastGroupModel` |
| Cancel a scheduled batch | `POST/PUT NDTTextBroadcastBatches` with `IsCancelled=true` | — |
| MMS attachments for batch | Use `FileAttachments` collection on the batch | — |

### Phone (voice) broadcasts

| Operation | Endpoint | Body |
|---|---|---|
| Manage prerecorded audio | `GET/POST PhoneBroadcastRecordings` | `PhoneBroadcastRecordingModel` (links to a `File`) |
| (Legacy) old recordings resource | `GET NDTPhoneBroadcasts` | DEPRECATED 3/18/2021 |
| Schedule/send a phone broadcast batch | `POST NDTPhoneBroadcastBatches` | `NDTPhoneBroadcastBatchModel List` (`PhoneRecordingID` ↔ recording, `NDTBroadcastBatchDetails` Required (create) for recipients, `IsScheduledNow`/`ScheduledDate`) |
| List phone broadcast batches | `GET NDTPhoneBroadcastBatches` | — |

### Per-recipient detail (used by both phone & text batches)

`NDTBroadcastBatchDetailModel` rows: provide `PhoneNumber`, `FromNumber`, `ParentType`, `ParentID`, `MessageText` (text only), and `HistoryCategoryID` for logging. Use one row per recipient.

### Phone-number provisioning & opt-out checks

| Operation | Endpoint | Notes |
|---|---|---|
| List provisioned text numbers | `GET TextNumbers` | Filter `IsForBroadcast=true` for broadcast-eligible senders |
| Map text numbers to properties | `TextNumberPropertyModel` (embed `TextNumberProperties`) | Per-property scoping |
| Per-entity phone numbers | `GET PhoneNumbers?filters=ParentID,eq,{id};ParentType,eq,Tenant` | Check `IsTextReady`, `IsInvalidForTexting`, `IsOptOut` before sending |

### VoIP & call history

| Operation | Endpoint | Notes |
|---|---|---|
| All VoIP call history | `GET RMVoIPCallHistory` | Mostly read-only |
| Tenant-scoped VoIP call history | `GET Tenants/{id}/RMVoIPCallHistory` | Sub-resource |
| Annotate an existing call (notes/category) | `POST RMVoIPCallHistory` (update) | Editable fields: `DialedPhoneNumber`, `IsContactMade`, `HistoryCategoryID`, `Notes`, `ChannelID`, `RMVoIPFileName` |
| Manual call log entry | `POST HistoryCalls` | For non-VoIP call documentation |
| Email log entry | `POST HistoryEmails` | — |

### Templates & automation

| Operation | Endpoint | Notes |
|---|---|---|
| Per-user/role text templates | `GET/POST TextTemplates` | Quick-reply style |
| Letter templates (also used for SMS automation) | `GET/POST LetterTemplates` | `LetterTemplateType` ↔ `eLetterTemplateType` |
| Notification event catalog | `GET AutomatedNotificationTypes` | Read-only enum-backed list |
| Configure an event-triggered Email/SMS notification | `GET/POST AutomatedNotificationEventSetups` | Set `Subject` + `Message` for email and `SMSMessage` for SMS |
| AR automation schedule (auto-letters/SMS) | `GET/POST ARAutomationSchedules` | — |

---

## Appendix A — Resources Discovered to be Missing / 404

| Attempted URL | Status | Use Instead |
|---|---|---|
| `/Help/Resource/EmailTemplates` | 404 | Use `LetterTemplates` (which spans email/SMS/letter via `LetterTemplateType`) and `AutomatedNotificationEventSetups` for event-driven email |
| `/Help/Resource/EmailTemplate` | 404 | Same as above |
| `/Help/Resource/PhoneNumberTypes` | 404 | The `PhoneNumberTypeModel` is exposed via `PhoneNumbers.PhoneNumberType` embed |

## Appendix B — Common Enums Mentioned

These enums are referenced throughout the messaging stack — exact members are defined on their respective enum docs pages:

- `eBroadcastType` — used on `NDTPhoneBroadcastBatch.BroadcastType` / `NDTTextBroadcastBatch.BroadcastType` (read-only, includes `NotSet` and the actual broadcast medium classification).
- `eTextMessageConversationType` — used as `ParentType` on `IncomingText` / `OutgoingText` / `TextMessageSummary` / `TextMessageConversationSummary` (`Tenant`, `Prospect`, `Owner`, `OwnerProspect`, `Vendor`, `Property`, `User`, etc.).
- `eEntityType` — used on `NDTBroadcastBatchDetail.ParentType`.
- `eTextMessagingSourceCompany` — provider source for an incoming text (e.g. Twilio).
- `eTextMessageType` — distinguishes Incoming / Outgoing / BroadcastBatchDetail in `TextMessageSummaryModel`.
- `eTextTemplateType` — type/category of a TextTemplate.
- `eLetterTemplateType` — used by NDTTextBroadcasts and LetterTemplates for templating mode.
- `ePhoneNumberRelatedObjectTypes` — `ParentType` for PhoneNumber owner.
- `eRMVoIPCallHistoryRelatedObjectTypes` — `ParentType` for VoIP call history.
- `eHistoryType` / `eHistoryCallRelatedObjectTypes` / `eHistoryEmailRelatedObjectTypes` — used by HistoryCalls / HistoryEmails.
- `eContactTypeRelatedObjectTypes` — `ParentType` on ContactType.
- `eNotificationEventTypes` — primary key on AutomatedNotificationType.

## Appendix C — Practical Send Flows

### Send a one-off SMS to a tenant

1. Resolve the tenant's primary mobile via `GET PhoneNumbers?filters=ParentID,eq,{tenantId};ParentType,eq,Tenant;IsTextReady,eq,true;IsOptOut,eq,false`.
2. Resolve a `SendingPhoneNumberString` from `GET TextNumbers?filters=IsActive,eq,true` (optionally scoped by property via `TextNumberProperties`).
3. `POST OutgoingTexts` with `PhoneNumber` (destination), `Message`, `ParentType=Tenant`, `ParentID={tenantId}`, `SendingPhoneNumberString={your text number}`, optional `HistoryCategoryID`.
4. Server-side, `SentDate`, `SentUserID`, `SegmentCount`, `IsMMS`, and the conversation thread linkage are set automatically.

### Send a bulk SMS broadcast

1. (Optional) Create or reuse an `NDTBroadcastList` (just a named list — does not bind recipients to it directly via the API; the recipient binding lives on the batch detail rows).
2. `POST NDTTextBroadcastBatches` with `MessageName`, `MessageDescription`, `IsScheduledNow=true` (or `false` + `ScheduledDate`), and a `NDTBroadcastBatchDetails` array — one entry per recipient with `PhoneNumber`, `FromNumber`, `ParentType`, `ParentID`, `MessageText`, `HistoryCategoryID`.
3. (Optional) Attach MMS images via `FileAttachments`.
4. Cancel before send by patching the batch with `IsCancelled=true`.

### Send a phone (voice) broadcast

1. Upload audio and create a `PhoneBroadcastRecording` (record the returned `PhoneBroadcastRecordingID`/`FileID`).
2. `POST NDTPhoneBroadcastBatches` with `MessageName`, `PhoneRecordingID` (the recording ID), scheduling fields, and `NDTBroadcastBatchDetails` recipient rows (each with `PhoneNumber`, `ParentType`, `ParentID`, `HistoryCategoryID`).

### Drive automated SMS via business events

1. Look up the relevant `AutomatedNotificationTypeID` in `GET AutomatedNotificationTypes` (e.g., a payment-received event).
2. Create or update an `AutomatedNotificationEventSetup` with `IsActive=true`, `AutomatedNotificationEventTypeID`, the property scope (`Properties`), recipient scope (`Recipients`), and the SMS body in `SMSMessage`. Provide `Subject` + `Message` if you also want the email channel.
3. Recurring AR reminders are configured separately under `ARAutomationSchedules`.

---

*End of document.*
