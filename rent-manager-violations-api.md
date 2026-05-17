# Rent Manager Web API — Violations POST Reference

Compiled from the Rent Manager Web API Reference at `https://reama.api.rentmanager.com/Help/Resources`.

---

## 1. Violations Save (POST endpoint)

**Source:** `https://reama.api.rentmanager.com/Help/Method/Violations/Save`

> Rent Manager Web API Reference — Violations — Save
> Save a collection of items to the collection.

**Request Information**

- **URL:** `POST Violations?fields={fields}&embeds={embeds}`

**Parameters**

| Name | Type | Additional information |
|---|---|---|
| items | ViolationModel List | Define this parameter in the request body. |
| fields | String | Define this parameter in the request URI. |
| embeds | ViolationEmbedOptions List | Define this parameter in the request URI. |

Request body formats: `application/json`, `text/json`, `multipart/form-data`

**Sample request body (provided by docs):**

```json
[
  {
    "ViolationID": 1,
    "PropertyID": 2,
    "ImageID": 3,
    "TenantID": 4,
    "UnitID": 5,
    "ViolationCodeID": 6,
    "ViolationCategoryID": 7,
    "ViolationDate": "2026-05-05T18:01:48.1323137-04:00",
    "Description": "sample string 9",
    "ResolveAction": "sample string 10",
    "CCRReference": "sample string 11",
    "InternalNotes": "sample string 12",
    "IsClosed": true,
    "CloseDate": "2026-05-05T18:01:48.1323137-04:00",
    "CreateDate": "2026-05-05T18:01:48.1323137-04:00",
    "CreateUserID": 15,
    "UpdateDate": "2026-05-05T18:01:48.1323137-04:00",
    "UpdateUserID": 17,
    "ConcurrencyID": 18,
    "MetaTag": "sample string 20"
  }
]
```

> **Note:** The docs show the body is a **List** of `ViolationModel` (i.e. wrapped in a JSON array `[ ... ]`), even when creating a single violation.

---

## 2. ViolationModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ViolationID | Integer | EqualTo, In | Primary Key |
| PropertyID | Integer | EqualTo, In | — |
| Property | PropertyModel | — | — |
| ImageID | Integer | EqualTo | — |
| Image | ImageModel | — | — |
| TenantID | Integer | EqualTo | — |
| Tenant | TenantModel | — | — |
| UnitID | Integer | EqualTo | — |
| Unit | UnitModel | — | — |
| ViolationCodeID | Integer | EqualTo | — |
| ViolationCategoryID | Integer | — | Read Only |
| ViolationDate | DateTime | — | — |
| Description | String | — | — |
| ResolveAction | String | — | — |
| CCRReference | String | — | — |
| InternalNotes | String | — | Read Only |
| IsClosed | Boolean | — | — |
| CloseDate | DateTime | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| ViolationStages | ViolationStageModel | — | — |
| CurrentStage | ViolationStageModel | — | Requires Embed (ViolationStages) |
| ViolationCode | ViolationCodeModel | — | — |
| ViolationCategory | ViolationCategoryModel | — | — |
| History | HistoryModel | — | — |
| HistoryNotes | HistoryNoteModel | — | — |
| HistorySystemNotes | HistorySystemNoteModel | — | — |
| HistoryViolationStageRevertNotes | HistoryViolationStageRevertNoteModel | — | — |
| MetaTag | String | — | — |

`ViolationCategoryID` and `InternalNotes` are flagged **Read Only**. `ConcurrencyID` is a concurrency key used on update.

---

## 3. ViolationStageModel Properties

**Source:** `https://reama.api.rentmanager.com/Help/Model/ViolationStageModel/Violations-Retrieve-Collection`

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ViolationStageID | Integer | EqualTo | Primary Key |
| ViolationID | Integer | EqualTo, In | — |
| Name | String | — | — |
| StageNumber | Integer | — | — |
| Amount | Decimal | — | — |
| StageDate | DateTime | — | — |
| StageInitiatedDate | DateTime | — | Read Only |
| EscalateUserID | Integer | EqualTo | Read Only |
| DueDate | DateTime | — | — |
| ComplyDays | Integer | — | — |
| LetterTemplateID | Integer | EqualTo | — |
| ChargeTypeID | Integer | EqualTo | — |
| IsCurrentStage | Boolean | — | — |
| IsActionsComplete | Boolean | — | — |
| IsStageCreated | Boolean | — | — |
| IsRequireActionValidation | Boolean | — | — |
| IsCommunicationSent | Boolean | — | — |
| CommunicationSentUserID | Int32 | — | — |
| CommunicationSentDate | DateTime | — | Read Only |
| ActionsCompleteDate | DateTime | — | Read Only |
| ActionsCompleteUserID | Integer | EqualTo | Read Only |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| Violation | ViolationModel | — | — |
| EscalateUser | UserModel | — | — |
| LetterTemplate | LetterTemplateModel | — | — |
| ChargeType | ChargeTypeModel | — | — |
| ActionsCompleteUser | UserModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| CommunicationSentUser | UserModel | — | — |
| ViolationStageAction | ViolationStageActionModel | — | — |
| Status | eViolationStageStatus | — | Requires Embed (Status) |
| MetaTag | String | — | — |

**Read-only fields (do not send when creating):** `StageInitiatedDate`, `EscalateUserID`, `CommunicationSentDate`, `ActionsCompleteDate`, `ActionsCompleteUserID`.

---

## 4. ViolationStageActionModel Properties

**Source:** `https://reama.api.rentmanager.com/Help/Model/ViolationStageActionModel/Violations-Retrieve-Collection`

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ViolationStageActionID | Integer | EqualTo | Primary Key |
| ViolationStageID | Integer | EqualTo | — |
| Action | String | — | — |
| MetaTag | String | — | — |

This is a very thin model — effectively just `Action` (string) plus the parent `ViolationStageID` (which the API will populate when nested under a stage on save).

---

## 5. Sample POST body for creating a new Violation

The only sample body the docs explicitly publish for `POST /Violations` is the flat `ViolationModel` shown in section 1 above (no nested stages). The documentation does **not** include a separate sample showing nested `ViolationStages` / `ViolationStageAction` on create — you'd need to construct that yourself using the property tables in sections 3 and 4.

---

## Important caveats about "required" fields

The Rent Manager API Help pages do **not** explicitly mark fields as "Required" in any of the three model tables above. They only mark `Primary Key`, `Read Only`, `Concurrency Key`, and filter capabilities. So strictly speaking, none of these pages indicate which fields are required for a create — that information isn't displayed on the documentation pages reviewed.

You'll likely need to determine required fields by either:

1. Testing against the API and reading validation errors, or
2. Checking Rent Manager's separate developer documentation/support, since the auto-generated Help pages don't surface required-field metadata.
