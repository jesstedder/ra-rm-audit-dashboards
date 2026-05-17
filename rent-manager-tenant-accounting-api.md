# Rent Manager Web API — Tenant Accounting Reference

Compiled from the Rent Manager Web API Reference at `https://reama.api.rentmanager.com/Help/Resources`. This document aggregates documentation for resources, sub-resources, and models that pertain to tenant accounts, charges, payments, credits, open receivables, deposits, recurring charges, late fees, invoices, leases/lease renewals, statements, journals, postings, and supporting reference models.

> **Important caveat:** The Rent Manager Help pages do not explicitly mark fields as "Required" except where annotated as `Required (create)`. Fields are otherwise marked only with `Primary Key`, `Read Only`, `Concurrency Key`, `Calculated Field`, or filter capabilities. Required fields for create/update operations should be confirmed by testing or by Rent Manager developer support.

> **Note on resource naming:** Some intuitively-named resources (e.g. `TenantCharges`, `TenantPayments`, `TenantOpenReceivables`, `TenantLedger`, `OpenReceivables`, `PaymentReversals`) return 404 when accessed directly. The actual API exposes tenant-scoped data through the top-level resources (`Charges`, `Payments`, `Credits`, etc.), through the embedded properties on `TenantModel` (e.g. `OpenReceivables`, `Transactions`, `SecurityDepositSummaries`), and through Tenants sub-resources (e.g. `Tenants/{id}/Balance`, `Tenants/Transactions`, `Tenants/{id}/RefundSecurityDeposit`).

---

## Table of Contents

1. Tenants Resource (TenantModel)
2. Tenants Sub-resources (Balance, Transactions, Charges, Payments, PaymentReversals, RefundSecurityDeposit, etc.)
3. Charges Resource (ChargeModel)
4. Payments Resource (PaymentModel)
5. Credits Resource (CreditModel)
6. Deposits Resource (DepositModel)
7. RecurringCharges Resource (RecurringChargeModel)
8. LateFees Resource (LateFeeModel)
9. Invoices Resource (InvoiceModel)
10. Leases Resource (LeaseModel)
11. LeaseRenewals Resource (LeaseRenewalModel)
12. Bills Resource (BillModel)
13. AccountStatements Resource
14. TenantStatementAutomations Resource
15. AccountGroupPayments Resource
16. AccountGroupMasterPayments Resource (DEPRECATED)
17. SubsidyPayments Resource
18. SecurityDepositTypes Resource
19. SecurityDepositInterest Resource
20. ChargeEscalations Resource
21. ChargeTypes Resource
22. GLAccounts Resource
23. Journals Resource
24. Postings Resource
25. Supporting Models (OpenReceivableModel, OpenPrepayModel, AllocationModel, PreallocationModel, PaymentReversalModel, RecurringChargeSummaryModel, SecurityDepositSummaryModel, TransactionModelBase)

---

## 1. Tenants Resource (TenantModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Tenants`

### Retrieve Collection
- **GET** `Tenants?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- Query params: `filters` (TenantFilterFields List), `embeds` (TenantEmbedOptions List), `orderingOptions` (TenantOrderingOptions List), `fields` (String), `getOptions` (TenantGetOptions List), `pageSize` (Integer), `pageNumber` (Integer)

### Retrieve Instance
- **GET** `Tenants/{id}`

### Save (Create / Update)
- **POST** `Tenants?saveOptions={saveOptions}&fields={fields}&embeds={embeds}`
- Request body: `TenantModel List` (JSON array) — saveOptions: `TenantSaveOptions List`

### Delete Collection / Delete Instance
- **DELETE** `Tenants?ids={ids}` and **DELETE** `Tenants/{id}`

### TenantModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| TenantID | Integer | EqualTo, In | Primary Key |
| TenantDisplayID | Integer | EqualTo, In | Read Only |
| Name | String | EqualTo | — |
| FirstName | String | — | — |
| LastName | String | — | — |
| WebMessage | String | — | — |
| IsCompany | Boolean | — | — |
| ColorID | Int32 | — | — |
| CheckPayeeName | String | — | — |
| StatementMethod | eStatementMethod | EqualTo | — |
| Comment | String | — | — |
| RentDueDay | Integer | — | — |
| RentPeriod | eLeasePeriod | EqualTo | — |
| DoNotChargeLateFees | Boolean | — | — |
| DoNotPrintStatements | Boolean | — | DEPRECATED 11/12/2024 — replaced by StatementMethod; Calculated Field |
| DoNotAcceptChecks | Boolean | — | — |
| DoNotAcceptPayments | Boolean | — | — |
| DoNotAllowTWAPayments | Boolean | — | — |
| DoNotSendARAutomationNotifications | Boolean | — | — |
| IsProspect | Boolean | — | DEPRECATED 7/16/2019; Read Only |
| LeasingAgentID | Int32 | EqualTo, In | — |
| AccountGroupID | Int32 | EqualTo, In, NotIn | Read Only |
| TotalCalls | Integer | — | — |
| FailedCalls | Integer | — | — |
| IsAccountGroupMaster | Boolean | EqualTo, NotEqualTo | Read Only |
| TotalVisits | Integer | — | — |
| TotalEmails | Integer | — | — |
| FirstContact | DateTime | — | — |
| LastContact | DateTime | — | — |
| PropertyID | Integer | EqualTo, In | — |
| PostingStartDate | DateTime | — | Read Only |
| PostingEndDate | DateTime | — | Read Only |
| DefaultTaxTypeID | Int32 | EqualTo | — |
| OverrideScreeningDecision | Boolean | — | Read Only |
| OverrideReason | String | — | Read Only |
| OverrideCreateDate | DateTime | — | Read Only |
| OverrideCreateUserID | Integer | — | Read Only |
| OverrideUpdateDate | DateTime | — | Read Only |
| OverrideUpdateUserID | Integer | — | Read Only |
| IsShowCommentBanner | Boolean | — | — |
| IsDoNotAcceptPartialPayments | Boolean | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | — | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | — | — |
| FlexibleRentStatus | eFlexibleRentStatus | EqualTo | Read Only |
| FlexibleRentInternalStatus | eFlexibleRentInternalStatus | EqualTo | Read Only |
| Status | eTenantStatus | EqualTo | — |
| EvictionID | Int32 | EqualTo | Read Only |
| TransferGroupID | Int32 | EqualTo | — |
| SourceCustomerID | Int32 | EqualTo | — |
| TransferDate | DateTime | — | — |
| LastNameFirstName | String | — | Read Only, Calculated Field |
| TWAExpirationDate | DateTime | — | Read Only |
| AccountGroupMasterTenantID | Integer | — | Read Only, Calculated Field |
| MetaTag | String | — | — |

### Embeddable Collections / Related Models on TenantModel

| Embed Name | Model | Notes |
|---|---|---|
| Contacts | ContactModel | — |
| Color | ColorModel | — |
| CreateUser | UserModel | — |
| UpdateUser | UserModel | — |
| LeasingAgent | UserModel | — |
| Property | PropertyModel | — |
| PrimaryContact | ContactModel | DEPRECATED 10/5/2018 (replaced by Contacts); Required (create) |
| UserDefinedValues | UserDefinedValueModel | — |
| Leases | LeaseModel | — |
| History | HistoryModel | — |
| HistoryWithUnitHistory | HistoryModel | DEPRECATED 1/7/2019 |
| HistoryCalls | HistoryCallModel | — |
| HistoryEmails | HistoryEmailModel | — |
| HistoryVisits | HistoryVisitModel | — |
| HistoryNotes | HistoryNoteModel | — |
| HistoryViolationNotes | HistoryViolationNoteModel | — |
| Transactions | TransactionModelBase | — |
| Charges | ChargeModel | — |
| Payments | PaymentModel | — |
| Credits | CreditModel | — |
| Checks | CheckModel | DEPRECATED 3/22/2022 (replaced by TenantChecks) |
| Bills | BillModel | DEPRECATED 3/22/2022 (replaced by TenantBills) |
| Addresses | AddressModel | — |
| Invoices | InvoiceModel | — |
| RecurringCharges | RecurringChargeModel | — |
| WebUserAccounts | WebUserAccountModel | — |
| Subsidies | SubsidyModel | — |
| ScreeningStatus | String | Read Only, Calculated Field |
| Appointments | AppointmentModel | — |
| LateFees | LateFeeModel | DEPRECATED 11/28/2018 (replaced by LateFeeSetup) |
| LateFeeSetup | LateFeeModel | — |
| **OpenReceivables** | **OpenReceivableModel** | Tenant open receivables (charges with unpaid balance) |
| RecurringChargeSummaries | RecurringChargeSummaryModel | — |
| Screenings | ScreeningModel | — |
| **SecurityDepositSummaries** | **SecurityDepositSummaryModel** | Held security deposits per type/charge |
| Tasks | TaskModel | — |
| WebUsers | WebUserModel | — |
| PaymentReversals | PaymentReversalModel | — |
| **SecurityDepositHeld** | Decimal | Requires Embed (SecurityDepositHeld) |
| **Balance** | Decimal | Requires Embed (Balance) — total balance |
| **OpenBalance** | Decimal | Requires Embed (OpenBalance) — open AR balance |
| Prospect | ProspectModel | — |
| HistorySystemNotes | HistorySystemNoteModel | — |
| HistoryWebAccountNotes | HistoryWebAccountNoteModel | — |
| Pets | PetModel | — |
| Loans | LoanModel | — |
| ServiceManagerProjects | ServiceManagerProjectModel | — |
| SubsidyTenants | SubsidyTenantModel | — |
| RMVoIPCallHistory | RMVoIPCallHistoryModel | — |
| BillableExpenses | BillableExpenseModel | — |
| CashPayUser | CashPayUserModel | — |
| Violations | ViolationModel | — |
| RevenueRenewals | RevenueRenewalModel | — |
| Vehicles | VehicleModel | — |
| ShortTermReservations | ShortTermReservationModel | — |
| OverrideCreateUser | UserModel | — |
| OverrideUpdateUser | UserModel | — |
| TenantBills | TenantBillModel | — |
| TenantChecks | TenantCheckModel | — |
| CreditReversals | CreditReversalModel | — |
| **AccountStatements** | AccountStatementModel | — |
| **OpenPrepays** | OpenPrepayModel | Open (unallocated) prepayments / credits available |
| IncomeVerifications | IncomeVerificationModel | — |
| Evictions | EvictionModel | — |
| HistoryEvictionNotes | HistoryEvictionNoteModel | — |
| HistoryEviction | HistoryEvictionModel | — |

### Sample Save body (POST /Tenants)
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

---

## 2. Tenants Sub-resources

These are scoped under `Tenants/{id}/...` and provide tenant-specific accounting endpoints.

### 2.1 Tenants Balance — Retrieve Instance
- **GET** `Tenants/{id}/Balance`
- Params: `id` (Integer), `fields` (String)
- Returns a single `Decimal` representing the tenant's balance.
- Sample response: `1.0`

### 2.2 Tenants Transactions — Retrieve Collection
- **GET** `Tenants/Transactions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- Params: `filters` (TransactionFilterFields List), `embeds` (TransactionEmbedOptions List), `orderingOptions` (TransactionOrderingOptions List), `fields` (String), `getOptions` (TransactionGetOptions List), `pageSize`, `pageNumber`.
- Fetches the **Transactions** associated with all Tenants — this is the closest thing to a tenant ledger endpoint.

#### TransactionModel (returned by Tenants/Transactions)

| Name | Type | Attributes |
|---|---|---|
| ID | Integer | Primary Key |
| AccountID | Integer | — |
| PropertyID | Integer | — |
| UnitID | Integer | — |
| AccountType | eAccountType | — |
| AccountName | String | Read Only, Calculated Field |
| Reference | String | — |
| Comment | String | — |
| Description | String | — |
| Amount | Decimal | — |
| TransactionDate | DateTime | — |
| IsPaymentOrCreditAllocatedToBillOrCheck | Boolean | — |
| IsAccountGroupAdjustment | Boolean | — |
| IsAccountGroupAdjustmentReversal | Boolean | — |
| SubsidyID | Integer | — |
| LoanID | Integer | — |
| CheckImageID | Integer | — |
| MasterPaymentID | Integer | — |
| CreateDate | DateTime | — |
| CreateUserID | Integer | — |
| UpdateDate | DateTime | — |
| UpdateUserID | Integer | — |
| EpayTransactionInformationDetail | EpayTransactionInformationDetailModel | — |
| Allocations | AllocationModel | — |
| PreAllocations | PreallocationModel | — |
| Subsidy | SubsidyModel | — |
| TransactionType | eTransactionType | Read Only |
| ReversalDate | DateTime | — |
| CanRefundUsingEpay | Boolean | — |
| CanNSF | Boolean | — |
| CanTransferPayment | Boolean | — |
| IsVoidOnly | Boolean | — |
| CanBeDeleted | Boolean | — |
| CanClearAllocations | Boolean | — |
| CanPrintReceipt | Boolean | — |
| InvoiceID | Integer | — |
| Loan | LoanModel | — |
| Invoice | InvoiceModel | — |
| Property | PropertyModel | — |
| Unit | UnitModel | — |
| IsChargeLinkedToAccountGroupAdjustmentCredits | Boolean | Read Only, Calculated Field, Requires Embed |
| RunningTotal | Decimal | Read Only, Calculated Field |
| MetaTag | String | — |

### 2.3 Tenants Charges / Payments / PaymentReversals — Delete Collection
- **DELETE** `Tenants/{id}/Charges?ids={ids}&deleteOptions[]={...}` (deleteOptions: `ChargeDeleteOptions List`)
- **DELETE** `Tenants/{id}/Payments?ids={ids}&deleteOptions[]={...}` (deleteOptions: `PaymentDeleteOptions List`)
- **DELETE** `Tenants/{id}/PaymentReversals?ids={ids}&deleteOptions[]={...}` (deleteOptions: `PaymentReversalDeleteOptions List`)

### 2.4 Tenants RefundSecurityDeposit — Save (POST)
- **POST** `Tenants/{id}/RefundSecurityDeposit?saveOptions={saveOptions}`
- Params:
  - `id` (Integer) — URI
  - `refundSecurityDeposit` (RefundSecurityDepositModel) — body
  - `saveOptions` (RefundSecurityDepositSaveOptions List) — URI
- Response: Integer (refund ID), e.g. `1`

#### Sample Request Body
```json
{
  "TenantID": 1,
  "AccountID": 2,
  "RefundAmount": 3.0,
  "AmountToRefundCustomer": 4.0,
  "PropertyID": 5,
  "UnitID": 6,
  "TransactionDate": "2026-05-06T08:55:10.5552278-04:00",
  "CheckOrInvoiceNumber": "sample string 8",
  "BankID": 9,
  "Payee": "sample string 10",
  "RefundCharges": [],
  "OpenCharges": [],
  "NewCharges": [],
  "ECheckEmail": "sample string 11",
  "PayeeAddress": "sample string 12",
  "InterestModel": null
}
```

### 2.5 Other Notable Tenant Sub-resource Links
The Tenants resource page lists sub-resources for: `Addresses`, `Contacts`, `Leases`, `LateFeeSetup`, `AccountStatements`. These typically follow the same Retrieve / Save / Delete pattern using the matching model.

---

## 3. Charges Resource (ChargeModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Charges`

### Endpoints
- **GET** `Charges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `Charges?saveOptions={saveOptions}&fields={fields}&embeds={embeds}` — body is a `ChargeModel List`
- **DELETE** `Charges?ids={ids}` and **DELETE** `Charges/{id}`

### ChargeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ChargeID | Integer | EqualTo, In | — |
| ID | Integer | EqualTo, In | Primary Key |
| AccountID | Integer | EqualTo, In | — |
| JobID | Integer | — | — |
| AccountType | eAccountType | EqualTo | Read Only |
| Reference | String | — | — |
| Comment | String | EqualTo | — |
| Amount | Decimal | — | — |
| TransactionDate | DateTime | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| TransactionType | eTransactionType | — | Calculated Field |
| PropertyID | Integer | EqualTo, In | — |
| UnitID | Integer | EqualTo | — |
| ChargeTypeID | Integer | EqualTo, NotEqualTo, In | — |
| AmountAllocated | Decimal | — | — |
| IsFullyAllocated | Boolean | EqualTo | Read Only |
| IsSecurityDepositPriorToGLStartDate | Boolean | — | — |
| AccrualDebitID | Integer | — | — |
| AccrualCreditID | Integer | — | — |
| TenantBillID | Integer | — | Read Only |
| TenantCheckID | Integer | — | Read Only |
| MetaTag | String | — | — |

### Embedded Models
`Job` (JobModel), `Property` (PropertyModel), `Unit` (UnitModel), `ChargeType` (ChargeTypeModel), `Allocations` (AllocationModel), `TenantBill` (BillModel), `TenantCheck` (CheckModel), `ReservationTransaction` (ReservationTransactionModel), `CreateUser`/`UpdateUser` (UserModel), `ManagementFeeHistoryTransactions` (read only).

### Sample POST body (Charges/Save)
```json
[
  {
    "ChargeID": 2,
    "ID": 2,
    "AccountID": 3,
    "JobID": 4,
    "Reference": "sample string 5",
    "Comment": "sample string 6",
    "Amount": 7.0,
    "TransactionDate": "2026-05-06T08:52:38.8568269-04:00",
    "CreateDate": "2026-05-06T08:52:38.8568269-04:00",
    "CreateUserID": 10,
    "UpdateDate": "2026-05-06T08:52:38.8568269-04:00",
    "UpdateUserID": 12,
    "TransactionType": "Charge",
    "PropertyID": 13,
    "UnitID": 14,
    "ChargeTypeID": 15,
    "AmountAllocated": 16.0,
    "IsFullyAllocated": true,
    "IsSecurityDepositPriorToGLStartDate": true,
    "AccrualDebitID": 19,
    "AccrualCreditID": 20,
    "TenantBillID": 21,
    "TenantCheckID": 22,
    "MetaTag": "sample string 24"
  }
]
```

> **Implementation note:** `AccountID` on a charge is the tenant/prospect/owner account; combined with `AccountType` it identifies the target ledger. For a tenant charge, `AccountID` = TenantID and `AccountType` = "Tenant".

---

## 4. Payments Resource (PaymentModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Payments`

### Endpoints
- **GET** `Payments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- **POST** `Payments?saveOptions={saveOptions}&fields={fields}&embeds={embeds}` — body is a `PaymentModel List`
- **DELETE** `Payments?ids={ids}` and **DELETE** `Payments/{id}`

### PaymentModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| Allocations | AllocationModel | — | **Required (create)** |
| Prepays | AllocationModel | — | — |
| ManagementFeeHistoryTransactions | ManagementFeeHistoryTransactionModel | — | Read Only |
| PrepayProperty | PropertyModel | — | — |
| PrepayUnit | UnitModel | — | — |
| ReversalReconcilialtion | ReconciliationModel | — | — |
| PaymentID | Integer | EqualTo, In | — |
| ID | Integer | EqualTo, In | Primary Key |
| AccountID | Integer | EqualTo, In | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| TransactionType | eTransactionType | — | Calculated Field |
| AmountAllocated | Decimal | — | — |
| IsFullyAllocated | Boolean | — | — |
| IsSecurityDepositPriorToGLStartDate | Boolean | — | — |
| ReceiptID | Integer | — | — |
| PaymentReversal | PaymentReversalModel | — | — |
| ReversalDate | DateTime | — | — |
| ReversalType | eReversalType | — | — |
| ReversalReconcileID | Integer | EqualTo | — |
| ReversalElectronicReconcileID | Integer | EqualTo | — |
| IsRestrictAutomaticAllocationsToUnit | Boolean | — | — |
| IsRecordingCashReallocations | Boolean | — | — |
| IsRecordingCashPreallocationsAsLiability | Boolean | — | — |
| IsRecordingAccrualPrepayments | Boolean | — | — |
| IsSplitPayment | Boolean | — | Read Only, Calculated Field, Requires Embed (IsSplitPayment) |
| HasChargeTypesWithChargeTypeBankSetup | Boolean | — | Read Only, Calculated Field, Requires Embed (HasChargeTypesWithChargeTypeBankSetup) |
| PrepayPropertyID | Integer | — | — |
| PrepayUnitID | Integer | — | — |
| Preallocations | PreallocationModel | — | **Required (create)** |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Owner | OwnerModel | — | — |
| AccountType | eAccountType | — | — |
| Reference | String | — | Read Only |
| Comment | String | — | — |
| Amount | Decimal | — | — |
| TransactionDate | DateTime | — | — |
| EpayTransactionInformationDetail | EpayTransactionInformationDetailModel | — | Read Only |
| IsDepositable | Boolean | — | Requires Embed (IsDepositable) |
| PaymentImages | CheckScanPaymentModel | — | — |
| AccountGroupPayment | CrossPaymentAccountGroupPaymentModel | — | — |
| SubsidyPayment | CrossPaymentSubsidyPaymentModel | — | — |
| MultiTenantPayment | CrossPaymentMultiTenantPaymentModel | — | — |
| MetaTag | String | — | — |

### Sample POST body (Payments/Save)
```json
[
  {
    "PaymentID": 3,
    "ID": 3,
    "AccountID": 4,
    "CreateDate": "2026-05-06T08:52:46.2496385-04:00",
    "CreateUserID": 6,
    "UpdateDate": "2026-05-06T08:52:46.2496385-04:00",
    "UpdateUserID": 8,
    "TransactionType": "Payment",
    "AmountAllocated": 9.0,
    "IsFullyAllocated": true,
    "IsSecurityDepositPriorToGLStartDate": true,
    "ReceiptID": 12,
    "ReversalDate": "2026-05-06T08:52:46.2496385-04:00",
    "ReversalReconcileID": 13,
    "ReversalElectronicReconcileID": 14,
    "IsRestrictAutomaticAllocationsToUnit": true,
    "IsRecordingCashReallocations": true,
    "IsRecordingCashPreallocationsAsLiability": true,
    "IsRecordingAccrualPrepayments": true,
    "IsSplitPayment": true,
    "HasChargeTypesWithChargeTypeBankSetup": true,
    "PrepayPropertyID": 19,
    "PrepayUnitID": 20,
    "Reference": "sample string 21",
    "Comment": "sample string 22",
    "Amount": 23.0,
    "TransactionDate": "2026-05-06T08:52:46.2496385-04:00",
    "IsDepositable": true,
    "MetaTag": "sample string 26"
  }
]
```

> **Implementation note:** `Allocations` and `Preallocations` are explicitly marked **Required (create)**. A payment is created against `AccountID` (+ `AccountType`); allocations link the payment dollars to specific charges.

---

## 5. Credits Resource (CreditModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Credits`

### Endpoints
- **GET** `Credits?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `Credits?saveOptions={saveOptions}&fields={fields}&embeds={embeds}` — body is `CreditModel List`
- **DELETE** `Credits?ids={ids}` and **DELETE** `Credits/{id}`

### CreditModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| CreditID | Integer | EqualTo, In | — |
| ID | Integer | EqualTo, In | Primary Key |
| AccountID | Integer | EqualTo, In | — |
| ChargeTypeID | Integer | EqualTo, In | — |
| TransactionType | eTransactionType | — | Calculated Field |
| ReversalType | eReversalType | — | — |
| CreateDate | DateTime | — | — |
| UpdateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateUserID | Integer | EqualTo | — |
| TransactionDate | DateTime | — | — |
| PropertyID | Integer | EqualTo, In | — |
| UnitID | Integer | — | — |
| AmountAllocated | Decimal | — | — |
| IsFullyAllocated | Boolean | — | — |
| IsSecurityDepositPriorToGLStartDate | Boolean | — | — |
| IsRecordingCashReallocations | Boolean | — | — |
| IsRecordingCashPreallocationsAsLiability | Boolean | — | — |
| IsRecordingAccrualPrepayments | Boolean | — | — |
| ReversalDate | DateTime | — | — |
| AccountType | eAccountType | — | — |
| Reference | String | — | Read Only |
| Comment | String | — | — |
| Amount | Decimal | — | — |
| Allocations | AllocationModel | — | — |
| Preallocations | PreallocationModel | — | — |
| ChargeType | ChargeTypeModel | — | — |
| ReservationTransaction | ReservationTransactionModel | — | — |
| Unit | UnitModel | — | — |
| Property | PropertyModel | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| MetaTag | String | — | — |

### Sample POST body (Credits/Save)
```json
[
  {
    "CreditID": 2,
    "ID": 2,
    "AccountID": 3,
    "ChargeTypeID": 4,
    "TransactionType": "Credit",
    "CreateDate": "2026-05-06T08:54:23.9471961-04:00",
    "UpdateDate": "2026-05-06T08:54:23.9471961-04:00",
    "CreateUserID": 7,
    "UpdateUserID": 8,
    "TransactionDate": "2026-05-06T08:54:23.9471961-04:00",
    "PropertyID": 10,
    "UnitID": 11,
    "AmountAllocated": 12.0,
    "IsFullyAllocated": true,
    "IsSecurityDepositPriorToGLStartDate": true,
    "IsRecordingCashReallocations": true,
    "IsRecordingCashPreallocationsAsLiability": true,
    "IsRecordingAccrualPrepayments": true,
    "ReversalDate": "2026-05-06T08:54:23.9471961-04:00",
    "Reference": "sample string 18",
    "Comment": "sample string 19",
    "Amount": 20.0,
    "MetaTag": "sample string 22"
  }
]
```

---

## 6. Deposits Resource (DepositModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Deposits`

### Endpoints
- **GET** `Deposits?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `Deposits` — body is a `DepositModel List`

### DepositModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| DepositID | Integer | EqualTo, In | Primary Key |
| BankID | Integer | EqualTo, In | — |
| Comment | String | — | — |
| TransactionDate | DateTime | EqualTo | — |
| Amount | Decimal | — | — |
| ReconcileID | Integer | EqualTo | — |
| ElectronicReconcileID | Integer | EqualTo | — |
| DepositTypeID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| Bank | BankModel | — | — |
| **DepositPayments** | DepositPaymentModel | — | **Required (create)** |
| **DepositStep3Items** | DepositDetailModel | — | **Required (create)** |
| **LinkedPayments** | CrossDepositPaymentModel | — | **Required (create)** |
| **OtherItems** | DepositDetailModel | — | **Required (create)** |
| FileAttachments | FileAttachmentModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| MetaTag | String | — | — |

### Sample body
```json
[
  {
    "DepositID": 1,
    "BankID": 2,
    "Comment": "sample string 3",
    "TransactionDate": "2026-05-06T08:53:04.4519061-04:00",
    "Amount": 5.0,
    "ReconcileID": 6,
    "ElectronicReconcileID": 7,
    "DepositTypeID": 8,
    "CreateDate": "2026-05-06T08:53:04.4519061-04:00",
    "CreateUserID": 10,
    "UpdateDate": "2026-05-06T08:53:04.4519061-04:00",
    "UpdateUserID": 12,
    "MetaTag": "sample string 14"
  }
]
```

---

## 7. RecurringCharges Resource (RecurringChargeModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/RecurringCharges`

### Endpoints
- **GET** `RecurringCharges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `RecurringCharges` — body is `RecurringChargeModel List`

### RecurringChargeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| RecurringChargeID | Integer | EqualTo, In | Primary Key |
| EntityType | eEntityType | EqualTo | — |
| EntityKeyID | Int32 | EqualTo, In | — |
| UnitID | Int32 | EqualTo | — |
| Frequency | Integer | — | — |
| ChargeTypeID | Integer | EqualTo, In | — |
| Amount | Decimal | — | — |
| OriginalAmount | Decimal | — | Calculated Field |
| AmountPerSquareFoot | Decimal | — | — |
| Comment | String | — | — |
| FromDate | DateTime | — | — |
| ToDate | DateTime | — | — |
| IsCalculated | Boolean | — | — |
| Calculation | String | — | — |
| CamRecurringChargeID | Int32 | EqualTo | — |
| SortOrder | Integer | — | Read Only |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ChargeType | ChargeTypeModel | — | — |
| RecurringChargeExceptions | RecurringChargeExceptionModel | — | — |
| TenantID | Int32 | — | Read Only |
| Tenant | TenantModel | — | — |
| LinkedUnit | UnitModel | — | — |
| Unit | UnitModel | — | — |
| UnitTypeID | Int32 | — | Read Only |
| UnitType | UnitTypeModel | — | — |
| PropertyID | Int32 | — | Read Only |
| Property | PropertyModel | — | — |
| CreditAllocations | RecurringCreditAllocationModel | — | — |
| MetaTag | String | — | — |

### Sample body
```json
[
  {
    "RecurringChargeID": 1,
    "EntityKeyID": 1,
    "UnitID": 1,
    "Frequency": 2,
    "ChargeTypeID": 3,
    "Amount": 4.0,
    "OriginalAmount": 5.0,
    "AmountPerSquareFoot": 6.0,
    "Comment": "sample string 7",
    "FromDate": "2026-05-06T08:53:08.36496-04:00",
    "ToDate": "2026-05-06T08:53:08.36496-04:00",
    "IsCalculated": true,
    "Calculation": "sample string 9",
    "CamRecurringChargeID": 1,
    "SortOrder": 10,
    "CreateDate": "2026-05-06T08:53:08.36496-04:00",
    "CreateUserID": 12,
    "UpdateDate": "2026-05-06T08:53:08.36496-04:00",
    "UpdateUserID": 14,
    "MetaTag": "sample string 16"
  }
]
```

> `EntityType` + `EntityKeyID` identify the owner of the recurring charge (e.g. EntityType "Tenant" with EntityKeyID = TenantID).

---

## 8. LateFees Resource (LateFeeModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/LateFees`

### Endpoints
- **GET** `LateFees?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `LateFees` — body is `LateFeeModel List`

### LateFeeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LateFeeID | Integer | EqualTo | Primary Key |
| EntityKeyID | Integer | EqualTo | — |
| EntityTypeID | eEntityType | EqualTo | — |
| IsFixed | Boolean | — | — |
| FixedAmount | Decimal | — | — |
| IsFixedRentOnly | Boolean | — | — |
| IsPercent | Boolean | — | — |
| PercentAmount | Decimal | — | — |
| IsPercentRentOnly | Boolean | — | — |
| IsPercentFullChargeAmount | Boolean | — | — |
| IsPerDay | Boolean | — | — |
| PerDayAmount | Decimal | — | — |
| IsPerDayGrace | Boolean | — | — |
| PerDayGraceCount | Integer | — | — |
| IsPerDayGraceNonRetroactive | Boolean | — | — |
| IsPerDayExcludeWeekends | Boolean | — | — |
| IsPerDayExcludeHolidays | Boolean | — | — |
| IsPerDayUseInvoiceDueDate | Boolean | — | — |
| IsPerDayOneMonth | Boolean | — | — |
| PerDayGraceLimitCount | Integer | — | — |
| IsPerDayGraceExcludeWeekends | Boolean | — | — |
| IsPerDayGraceExcludeHolidays | Boolean | — | — |
| LateMinimumBalance | Decimal | — | — |
| PerDayLateFeeLimitAmount | Decimal | — | — |
| MultipleMethodAction | eLateFeeMultipleMethodOperators | — | — |
| IsScript | Boolean | — | — |
| ScriptedLateFee | String | — | — |
| Tenant | TenantModel | — | — |
| Property | PropertyModel | — | — |
| MetaTag | String | — | — |

### Sample body
```json
[
  {
    "LateFeeID": 1,
    "EntityKeyID": 2,
    "IsFixed": true,
    "FixedAmount": 4.0,
    "IsFixedRentOnly": true,
    "IsPercent": true,
    "PercentAmount": 7.0,
    "IsPercentRentOnly": true,
    "IsPercentFullChargeAmount": true,
    "IsPerDay": true,
    "PerDayAmount": 11.0,
    "IsPerDayGrace": true,
    "PerDayGraceCount": 13,
    "IsPerDayGraceNonRetroactive": true,
    "IsPerDayExcludeWeekends": true,
    "IsPerDayExcludeHolidays": true,
    "IsPerDayUseInvoiceDueDate": true,
    "IsPerDayOneMonth": true,
    "PerDayGraceLimitCount": 19,
    "IsPerDayGraceExcludeWeekends": true,
    "IsPerDayGraceExcludeHolidays": true,
    "LateMinimumBalance": 22.0,
    "PerDayLateFeeLimitAmount": 23.0,
    "IsScript": true,
    "ScriptedLateFee": "sample string 25",
    "MetaTag": "sample string 27"
  }
]
```

---

## 9. Invoices Resource (InvoiceModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Invoices`

### Endpoints
- **GET** `Invoices?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- **POST** `Invoices` — body is `InvoiceModel List`

### InvoiceModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| InvoiceID | Integer | EqualTo, In | Primary Key |
| PropertyID | Integer | EqualTo, In | — |
| UnitID | Integer | EqualTo | — |
| AccountID | Integer | — | — |
| AccountType | eAccountType | — | Read Only |
| InvoiceDate | DateTime | — | — |
| DueDate | DateTime | — | — |
| Comment | String | EqualTo | — |
| IsTaxable | Boolean | — | — |
| TaxPercent | Decimal | — | — |
| SubTotal | Decimal | — | — |
| TaxAmount | Decimal | — | — |
| TotalAmount | Decimal | — | — |
| ChargeAmount | Decimal | — | — |
| ChargeAmountPaid | Decimal | — | — |
| IsFullyAllocated | Boolean | EqualTo | — |
| TaxTypeID | Integer | EqualTo | — |
| TaxChargeTypeID | Integer | EqualTo | — |
| TaxChargeID | Integer | EqualTo | — |
| TermID | Integer | EqualTo | — |
| SalesRepresentativeUserID | Integer | EqualTo | — |
| JobID | Integer | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| EstimateID | Integer | — | Read Only |
| PurchaseOrderID | Integer | EqualTo, In | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| BalanceDue | Decimal | — | — |
| InvoiceDetails | InvoiceDetailModel | — | — |
| Account | AccountModel | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Owner | OwnerModel | — | — |
| Unit | UnitModel | — | — |
| Property | PropertyModel | — | — |
| Term | TermModel | — | — |
| Job | JobModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| Estimate | EstimateModel | — | — |
| PurchaseOrder | PurchaseOrderModel | — | — |
| SalesRepresentative | UserModel | — | — |
| FileAttachments | FileAttachmentModel | — | — |
| MetaTag | String | — | — |

### Sample body
```json
[
  {
    "InvoiceID": 1,
    "PropertyID": 2,
    "UnitID": 3,
    "AccountID": 4,
    "InvoiceDate": "2026-05-06T08:53:15.7784523-04:00",
    "DueDate": "2026-05-06T08:53:15.7784523-04:00",
    "Comment": "sample string 7",
    "IsTaxable": true,
    "TaxPercent": 9.0,
    "SubTotal": 10.0,
    "TaxAmount": 11.0,
    "TotalAmount": 12.0,
    "ChargeAmount": 13.0,
    "ChargeAmountPaid": 14.0,
    "IsFullyAllocated": true,
    "TaxTypeID": 16,
    "TaxChargeTypeID": 17,
    "TaxChargeID": 18,
    "TermID": 19,
    "SalesRepresentativeUserID": 20,
    "JobID": 21,
    "CreateDate": "2026-05-06T08:53:15.7784523-04:00",
    "CreateUserID": 23,
    "UpdateDate": "2026-05-06T08:53:15.7784523-04:00",
    "UpdateUserID": 25,
    "EstimateID": 26,
    "PurchaseOrderID": 27,
    "ConcurrencyID": 28,
    "MetaTag": "sample string 31"
  }
]
```

---

## 10. Leases Resource (LeaseModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Leases`

### Endpoints
- **GET** `Leases?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `Leases` — body is `LeaseModel List`

### LeaseModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LeaseID | Integer | EqualTo, In | Primary Key |
| TenantID | Integer | EqualTo, In | — |
| UnitID | Int32 | EqualTo, In | — |
| PropertyID | Integer | EqualTo, In | — |
| IsCommercial | Boolean | — | — |
| MoveInDate | DateTime | — | — |
| MoveOutDate | DateTime | — | — |
| ExpectedMoveOutDate | DateTime | — | — |
| NoticeDate | DateTime | — | — |
| IsMoveOutConfirmed | Boolean | — | — |
| ArrivalDate | DateTime | — | — |
| DepartureDate | DateTime | — | — |
| IsExcludeFromMasterPolicy | Boolean | — | — |
| SortOrder | Integer | — | — |
| CreateDate | DateTime | — | — |
| UpdateDate | DateTime | — | — |
| StartDate | DateTime | — | Read Only, Calculated Field, Requires Embed (LeaseRenewals) |
| EndDate | DateTime | — | Read Only, Calculated Field, Requires Embed (LeaseRenewals) |
| CreateUserID | Integer | EqualTo | — |
| UpdateUserID | Integer | EqualTo | — |
| LeaseRenewals | LeaseRenewalModel | — | — |
| Property | PropertyModel | — | — |
| Tenant | TenantModel | — | — |
| Unit | UnitModel | — | — |
| RetailSales | RetailSaleModel | — | — |
| RenterInsurancePolicies | RenterInsurancePolicyModel | — | — |
| ActiveRenterInsurancePolicy | RenterInsurancePolicyModel | — | — |
| PropertyUnit | String | — | Read Only, Calculated Field |
| UnitProperty | String | — | Read Only, Calculated Field |
| ActiveLeaseRenewal | LeaseRenewalModel | — | — |
| PromotionPeriods | PromotionPeriodModel | — | — |
| LeaseVehicles | LeaseVehicleModel | — | — |
| MetaTag | String | — | — |

### Sample body
```json
[
  { "LeaseID": 1, "TenantID": 2 }
]
```

---

## 11. LeaseRenewals Resource (LeaseRenewalModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/LeaseRenewals`

### Endpoints
- **GET** `LeaseRenewals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- **POST** `LeaseRenewals` — body is `LeaseRenewalModel List`

### LeaseRenewalModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| LeaseRenewalID | Integer | EqualTo, In | Primary Key |
| ParentLeaseID | Integer | EqualTo, In | — |
| UnitID | Integer | EqualTo, In | — |
| LeaseTermID | Integer | EqualTo | — |
| LeaseLength | Integer | — | — |
| SignDate | DateTime | — | — |
| StartDate | DateTime | — | — |
| EndDate | DateTime | — | — |
| DefaultCommercialExpensePercentage | Decimal | — | — |
| DefaultCommercialExpenseAdminPercentage | Decimal | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| SignableDocumentStatus | String | — | Read Only |
| SignableDocumentPackets | CrossLeaseRenewalSignableDocumentPacketModel | — | — |
| UserDefinedValues | UserDefinedValueModel | — | — |
| ParentLease | LeaseModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| Unit | UnitModel | — | — |
| Tenant | TenantModel | — | — |
| LeaseRenewalAttachments | LeaseRenewalAttachmentModel | — | — |
| LeaseRenewalSignableDocumentPackets | LeaseRenewalSignableDocumentPacketModel | — | — |
| LeaseTerm | LeaseTermModel | — | — |
| ChargeTypeSetups | ChargeTypeSetupModel | — | — |
| CommercialRecoverableExpenseSetups | CommercialRecoverableExpenseSetupModel | — | — |
| ChargeEscalations | ChargeEscalationModel | — | — |
| LeaseRenewalIncreaseOffer | LeaseRenewalIncreaseOfferModel | — | — |
| MetaTag | String | — | — |

---

## 12. Bills Resource (BillModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Bills`

### Endpoints
- **GET** `Bills?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- **POST** `Bills` — body is `BillModel List`

### BillModel Properties (selected — full list available on the resource page)

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ID | Integer | EqualTo, In | Primary Key |
| AccountID | Integer | EqualTo, In | — |
| PayeeName | String | — | — |
| Reference | String | EqualTo | — |
| Comment | String | — | — |
| Amount | Decimal | — | — |
| TransactionDate | DateTime | EqualTo | — |
| CreateDate | DateTime | EqualTo | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| TransactionType | eTransactionType | — | Calculated Field |
| PostDate | DateTime | — | — |
| DueDate | DateTime | EqualTo | — |
| AmountAllocated | Decimal | — | — |
| IsFullyAllocated | Boolean | EqualTo | — |
| TermID | Integer | EqualTo | — |
| BankID | Integer | EqualTo | — |
| Bank | BankModel | — | — |
| GeneralLedgerAccount | GLAccountModel | — | — |
| DefaultBankOption | eDefaultBankOption | — | — |
| PayMethod | eBillPayMethod | — | — |
| IsApproved | Boolean | EqualTo | — |
| ApprovalUserID | Integer | EqualTo | Read Only, Calculated Field |
| ApprovalDate | DateTime | — | Read Only |
| OwnerApprovalStatus | eOwnerApprovalStatus | — | Read Only |
| OwnerApprovalDate | DateTime | — | Read Only |
| OwnerApprovalOwnerID | Integer | — | Read Only |
| OwnerApprovalUserID | Integer | — | Read Only |
| ReversalDate | DateTime | — | — |
| IsXIBill | Boolean | — | — |
| AvidInvoiceURL | String | — | DEPRECATED 3/24/2020; Read Only |
| AvidInvoiceURLs | AvidInvoiceURLModel | — | Read Only |
| History | HistoryModel | — | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| PurchaseOrderID | Integer | — | — |
| TenantCheckID | Integer | — | Read Only |
| TenantChargeID | Integer | — | Read Only |
| Term | TermModel | — | — |
| Account | AccountModel | — | — |
| Tenant | TenantModel | — | — |
| Prospect | ProspectModel | — | — |
| Vendor | VendorModel | — | — |
| Owner | OwnerModel | — | — |
| AccountType | eAccountType | — | — |
| BillDetails | BillDetailModel | — | **Required (create)** |
| Attachments | FileModel | — | DEPRECATED 7/23/2020 (replaced by FileAttachments) |
| FileAttachments | FileAttachmentModel | — | — |
| TenantCheck | CheckModel | — | — |
| TenantCharge | ChargeModel | — | — |
| HistoryNotes | HistoryNoteModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| ApprovalUser | UserModel | — | — |
| PayeeAddress | String | — | — |
| EcheckEmail | String | — | — |
| PurchaseOrder | PurchaseOrderModel | — | — |
| OwnerWorkOrders | ServiceManagerIssueWorkOrderModel | — | — |
| VendorWorkOrders | ServiceManagerIssueWorkOrderModel | — | — |
| OwnerApprovalOwner | OwnerModel | — | — |
| OwnerApprovalUser | UserModel | — | — |
| AvidInvoiceInvoice | AvidInvoiceInvoiceModel | — | — |
| IsMasterMeterBill | Boolean | — | — |
| MetaTag | String | — | — |

---

## 13. AccountStatements Resource (AccountStatementModel)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/AccountStatements`

### Endpoints
- **GET** `AccountStatements?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `AccountStatements`

### AccountStatementModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AccountStatementID | Integer | EqualTo | Primary Key |
| AccountID | Integer | EqualTo | — |
| StatementProvider | eStatementProvider | — | — |
| PropertyID | Integer | EqualTo, In | — |
| StatementDate | DateTime | — | — |
| Amount | Decimal | — | — |
| StatementURL | String | — | — |
| IsDeleted | Boolean | — | — |
| CreateDate | DateTime | — | — |
| UpdateDate | DateTime | — | — |
| Property | PropertyModel | — | — |
| MetaTag | String | — | — |

### Sample
```json
[
  {
    "AccountStatementID": 1,
    "AccountID": 2,
    "PropertyID": 3,
    "StatementDate": "2026-05-06T08:53:32.2464307-04:00",
    "Amount": 5.0,
    "StatementURL": "sample string 6",
    "IsDeleted": true,
    "CreateDate": "2026-05-06T08:53:32.2464307-04:00",
    "UpdateDate": "2026-05-06T08:53:32.2464307-04:00",
    "MetaTag": "sample string 11"
  }
]
```

---

## 14. TenantStatementAutomations Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/TenantStatementAutomations`

### Endpoints
- **GET** `TenantStatementAutomations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `TenantStatementAutomations`

### TenantStatementAutomationModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| TenantStatementAutomationID | Integer | EqualTo | Primary Key |
| Name | String | EqualTo | — |
| IsActive | Boolean | — | — |
| AutomationType | eAutomationType | — | — |
| RunDay | Integer | — | — |
| NotificationEmail | String | — | — |
| IncludeDetails | Boolean | — | — |
| AttachToHistory | Boolean | — | — |
| HistoryCategoryID | Integer | EqualTo | — |
| CustomFormID | Integer | EqualTo | — |
| IsPrimaryContact | Boolean | — | — |
| IsPast | Boolean | — | — |
| IsCurrent | Boolean | — | — |
| IsFuture | Boolean | — | — |
| FromDateOption | eTenantStatementAutomationsDateOptions | — | — |
| FromDate | Integer | — | — |
| ToDateOption | eTenantStatementAutomationsDateOptions | — | — |
| ToDate | Integer | — | — |
| PropertyGroupID | Integer | EqualTo | — |
| AddressTypeID | Integer | EqualTo | — |
| ShowUnpostedPerDayLateFees | Boolean | — | — |
| ShowDailyInterestLoans | Boolean | — | — |
| ShowMeterReadings | Boolean | — | — |
| ShowCalculationDetails | Boolean | — | — |
| UseAccountGroups | Boolean | — | — |
| Comment | String | — | — |
| StartDate | DateTime | — | — |
| EndDate | DateTime | — | — |
| ExcludeZeroes | Boolean | — | — |
| CreateDate | DateTime | — | Read Only |
| CreateUserID | Integer | EqualTo | Read Only |
| UpdateDate | DateTime | — | Read Only |
| UpdateUserID | Integer | EqualTo | Read Only |
| ConcurrencyID | Integer | — | Concurrency Key |
| AddressType | AddressTypeModel | — | — |
| CustomForm | CustomFormModel | — | — |
| HistoryCategory | HistoryCategoryModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| TenantStatementAutomationStatementMethods | TenantStatementAutomationStatementMethodModel | — | — |
| TenantStatementAutomationProperties | TenantStatementAutomationPropertyModel | — | — |
| TenantStatementAutomationContactTypes | TenantStatementAutomationContactTypeModel | — | — |
| PropertyGroup | PropertyGroupModel | — | — |
| MetaTag | String | — | — |

---

## 15. AccountGroupPayments Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/AccountGroupPayments`

### Endpoints
- **GET** `AccountGroupPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}`
- **POST** `AccountGroupPayments`

### AccountGroupPaymentModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AccountGroupPaymentID | Integer | EqualTo, In | Primary Key |
| CheckNumber | String | — | — |
| Amount | Decimal | — | Read Only |
| TransactionDate | DateTime | — | — |
| FeeAccountID | Integer | EqualTo | — |
| PaymentFrom | String | — | — |
| Comment | String | — | — |
| ReceiptID | Integer | — | — |
| DepositID | Integer | — | — |
| FeeAccount | TenantModel | — | — |
| Payments | CrossAccountGroupPaymentPaymentModel | — | **Required (create)** |
| EpayTransactionInformationDetail | EpayTransactionInformationDetailModel | — | Read Only |
| Deposit | DepositModel | — | — |
| HasChargeTypesWithChargeTypeBankSetup | Boolean | — | Read Only, Calculated Field, Requires Embed |
| IsSplitPayment | Boolean | — | Read Only, Calculated Field, Requires Embed |
| LateFeeList | PaymentInformationRequestModel | — | — |
| MetaTag | String | — | — |

---

## 16. AccountGroupMasterPayments Resource (DEPRECATED 3/4/2019)

**Source:** `https://reama.api.rentmanager.com/Help/Resource/AccountGroupMasterPayments`

> Marked **DEPRECATED** as of 3/4/2019 — replaced by AccountGroupPayments.

### AccountGroupMasterPaymentModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AccountGroupMasterPaymentID | Integer | EqualTo | Primary Key |
| CheckNumber | String | — | — |
| Amount | Decimal | — | Read Only |
| TransactionDate | DateTime | — | — |
| FeeAccountID | Integer | EqualTo | — |
| PaymentFrom | String | — | — |
| Comment | String | — | — |
| ReceiptID | Integer | — | — |
| FeeAccount | TenantModel | — | — |
| Payments | PaymentModel | — | **Required (create)** |
| EpayTransactionInformationDetail | EpayTransactionInformationDetailModel | — | Read Only |
| MetaTag | String | — | — |

---

## 17. SubsidyPayments Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/SubsidyPayments`

### Endpoints
- **GET** `SubsidyPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}`
- **POST** `SubsidyPayments`

### SubsidyPaymentModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| SubsidyPaymentID | Integer | EqualTo | Primary Key |
| SubsidyID | Integer | EqualTo | — |
| CheckNumber | String | — | — |
| Amount | Decimal | — | Read Only |
| TransactionDate | DateTime | — | — |
| DepositID | Integer | EqualTo | — |
| PaymentFrom | String | — | — |
| Comment | String | — | — |
| ReceiptID | Integer | — | — |
| Subsidy | SubsidyModel | — | — |
| Deposit | DepositModel | — | **Required (create)** |
| TransactionLinks | SubsidyPaymentTransactionLinksModel | — | — |
| Journals | JournalModel | — | DEPRECATED 5/26/2021 (replaced by TransactionLinks.Journals) |
| Charges | ChargeModel | — | DEPRECATED 5/26/2021 (replaced by TransactionLinks.Charges) |
| Payments | PaymentModel | — | — |
| MetaTag | String | — | — |

---

## 18. SecurityDepositTypes Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/SecurityDepositTypes`

### SecurityDepositTypeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| SecurityDepositTypeID | Integer | EqualTo | Primary Key |
| ChargeTypeID | Integer | EqualTo | — |
| Description | String | — | Read Only |
| SortOrder | Integer | — | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ChargeType | ChargeTypeModel | — | — |
| MetaTag | String | — | — |

---

## 19. SecurityDepositInterest Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/SecurityDepositInterest`

### SecurityDepositInterestModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| SecurityDepositInterestOptionID | Integer | EqualTo | Primary Key |
| PropertyID | Integer | EqualTo, In | — |
| IsEnabled | Boolean | — | DEPRECATED 8/14/2018 (replaced by PropertyModel.IsSecurityDepositInterestEnabled); Calculated Field |
| IsOverride | Boolean | — | Read Only, Calculated Field |
| InterestCalculationMethod | eSecurityDepositInterestInterestMethod | — | — |
| DisbursementMethod | eSecurityDepositInterestDisbursementMethod | — | — |
| DisbursementChargeTypeID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| CreateUser | UserModel | — | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| UpdateUser | UserModel | — | — |
| Property | PropertyModel | — | — |
| SecurityDepositInterestYear | SecurityDepositInterestYearModel | — | — |
| MetaTag | String | — | — |

---

## 20. ChargeEscalations Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/ChargeEscalations`

### ChargeEscalationModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ChargeEscalationID | Integer | EqualTo, In | Primary Key |
| LeaseRenewalID | Integer | EqualTo | — |
| ChargeTypeID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ConcurrencyID | Integer | — | Concurrency Key |
| ChargeEscalationDetails | ChargeEscalationDetailModel | — | — |
| LeaseRenewal | LeaseRenewalModel | — | — |
| ChargeType | ChargeTypeModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| MetaTag | String | — | — |

---

## 21. ChargeTypes Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/ChargeTypes`

### ChargeTypeModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| ChargeTypeID | Integer | EqualTo, In | Primary Key |
| Name | String | EqualTo | — |
| Description | String | — | — |
| GLAccountID | Integer | EqualTo | — |
| DefaultAmount | Decimal | EqualTo | — |
| IsProrated | Boolean | — | — |
| IsCam | Boolean | — | — |
| IsActive | Boolean | — | — |
| CreateDate | DateTime | — | Read Only |
| CreateUserID | Integer | EqualTo | Read Only |
| UpdateDate | DateTime | — | Read Only |
| UpdateUserID | Integer | EqualTo | Read Only |
| ConcurrencyID | Integer | — | Concurrency Key |
| GLAccount | GLAccountModel | — | — |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| InventoryItems | InventoryItemModel | — | — |
| EpaySettings | EpaySettingChargeTypeModel | — | — |
| MetaTag | String | — | — |

---

## 22. GLAccounts Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/GLAccounts`

### GLAccountModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| GLAccountID | Integer | EqualTo, In | Primary Key |
| ParentGLAccountID | Integer | EqualTo | — |
| ParentGLAccount | GLAccountModel | — | — |
| Name | String | EqualTo | — |
| Description | String | — | — |
| Reference | String | EqualTo | — |
| GLAccountType | eGeneralLedgerAccountType | EqualTo, In | — |
| RecoverableExpenseType | eRecoverableExpenseType | — | — |
| CAMRecoveryChargeTypeID | Integer | EqualTo, In | — |
| CAMRecoveryChargeType | ChargeTypeModel | — | — |
| CAMReconcileChargeTypeID | Integer | EqualTo | — |
| CAMReconcileChargeType | ChargeTypeModel | — | — |
| IsAnnualizedExpense | Boolean | — | — |
| IsActive | Boolean | — | — |
| IsEChecks | Boolean | — | — |
| IsParent | Boolean | EqualTo | — |
| SortOrder | Integer | — | — |
| Generation | Integer | — | — |
| PositivePayFormatID | Integer | EqualTo | — |
| NachaODFIBankID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ChildGLAccounts | GLAccountModel | — | — |
| GeneraLedgerAccountType | GLAccountTypeModel | — | DEPRECATED 12/18/2018 |
| GeneralLedgerAccountType | GLAccountTypeModel | — | — |
| ChartOfAccountsMappingLinks | ChartOfAccountsMappingLinkModel | — | — |
| UserBanks | UserBankModel | — | — |
| NachaODFIBank | NachaODFIBankModel | — | — |
| ChargeTypes | ChargeTypeModel | — | — |
| Micr | MicrModel | — | — |
| PositivePayFormat | PositivePayFormatModel | — | — |
| CreditCardAccountNumberGLAccounts | CreditCardAccountNumberGLAccountModel | — | — |
| MetaTag | String | — | — |

---

## 23. Journals Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Journals`

### JournalModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| JournalID | Integer | EqualTo, In | Primary Key |
| JournalDisplayID | Integer | — | Read Only |
| ReversalDisplayID | Int32 | — | Read Only |
| Basis | eBasis | EqualTo | — |
| Comment | String | — | — |
| Reference | String | EqualTo | — |
| TransactionDate | DateTime | — | — |
| Amount | Decimal | — | — |
| IsPeriodAdjustment | Boolean | — | — |
| ReversalDate | DateTime | — | — |
| LoanPayableID | Integer | EqualTo | — |
| CreateDate | DateTime | — | Read Only |
| CreateUserID | Integer | EqualTo | Read Only |
| UpdateDate | DateTime | — | Read Only |
| UpdateUserID | Integer | EqualTo | Read Only |
| ConcurrencyID | Integer | — | Concurrency Key |
| IsBeginningBalance | Boolean | EqualTo, NotEqualTo | — |
| IsDepreciated | Boolean | — | Requires Embed |
| CreateUser | UserModel | — | — |
| UpdateUser | UserModel | — | — |
| LoanPayable | LoanPayableModel | — | — |
| Attachments | FileAttachmentModel | — | — |
| Details | JournalDetailModel | — | **Required (create)** |
| SubsidyPayment | CrossJournalSubsidyPaymentModel | — | — |
| IsJournalLinkedToAccountGroupAdjustmentCredits | Boolean | — | Read Only, Calculated Field, Requires Embed |
| DepreciationPosting | DepreciationPostingModel | — | — |
| MetaTag | String | — | — |

### Sample body
```json
[
  {
    "JournalID": 1,
    "JournalDisplayID": 2,
    "Comment": "sample string 3",
    "Reference": "sample string 4",
    "TransactionDate": "2026-05-06T08:53:50.3706084-04:00",
    "Amount": 6.0,
    "IsPeriodAdjustment": true,
    "ReversalDate": "2026-05-06T08:53:50.3706084-04:00",
    "LoanPayableID": 8,
    "CreateDate": "2026-05-06T08:53:50.3706084-04:00",
    "CreateUserID": 10,
    "UpdateDate": "2026-05-06T08:53:50.3706084-04:00",
    "UpdateUserID": 12,
    "ConcurrencyID": 13,
    "IsBeginningBalance": true,
    "IsDepreciated": true,
    "Details": [],
    "MetaTag": "sample string 17"
  }
]
```

---

## 24. Postings Resource

**Source:** `https://reama.api.rentmanager.com/Help/Resource/Postings`

### PostingModel Properties

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PostingID | Integer | EqualTo, In | Primary Key |
| PostingDate | DateTime | — | — |
| PostingCount | Integer | — | — |
| Amount | Decimal | — | — |
| PostingType | ePostingType | — | — |
| IncludesUtilities | Boolean | — | — |
| Information | String | — | Read Only, Requires Embed |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| IsRolledBack | Boolean | EqualTo, NotEqualTo | — |
| CreateUser | UserModel | — | — |
| PostingMessages | PostingMessageModel | — | — |
| PostingEntities | PostingEntityModel | — | — |
| PostingTransactions | PostingTransactionModel | — | — |
| MetaTag | String | — | — |

---

## 25. Supporting Models

### 25.1 OpenReceivableModel
*Open AR (unpaid charges) for a tenant. Available as the `OpenReceivables` embed on TenantModel.*

| Name | Type | Attributes |
|---|---|---|
| AccountID | Integer | — |
| AccountName | String | — |
| ChargeID | Integer | Primary Key |
| Date | DateTime | — |
| TransactionDate | DateTime | — |
| PropertyID | Integer | — |
| PropertyName | String | — |
| PropertyShortName | String | — |
| UnitID | Integer | — |
| UnitName | String | — |
| Reference | String | — |
| Comment | String | — |
| ChargeTypeID | Integer | — |
| ChargeTypeDescription | String | — |
| Description | String | — |
| OriginalAmount | Decimal | — |
| AmountPaid | Decimal | — |
| AmountDue | Decimal | — |
| CurrentPayment | Decimal | — |
| OriginalLateFees | Decimal | — |
| LateFee | Decimal | — |
| HasLateFees | Boolean | — |
| InvoiceID | Integer | — |
| ChargeType | ChargeTypeModel | — |
| DailyInterestLoanID | Int32 | — |
| MetaTag | String | — |

### 25.2 OpenPrepayModel
*Unallocated prepayments / available credits. Available as the `OpenPrepays` embed on TenantModel.*

| Name | Type | Attributes |
|---|---|---|
| TenantID | Integer | — |
| ProspectID | Integer | — |
| OwnerID | Integer | — |
| PaymentID | Integer | — |
| PreallocationID | Integer | — |
| ChargeTypeID | Integer | — |
| DepositID | Integer | — |
| Amount | Decimal | — |
| AmountAvailable | Decimal | — |
| TransactionDate | DateTime | — |
| Description | String | — |
| ShortDescription | String | — |
| IsCredit | Boolean | — |
| TotalAmountOnThePayment | Decimal | — |
| IsRestrictAutomaticAllocationsToUnit | Boolean | — |
| Tenant | TenantModel | — |
| Prospect | ProspectModel | — |
| Owner | OwnerModel | — |
| Deposit | DepositModel | — |
| Payment | PaymentModel | — |
| Preallocation | PreallocationModel | — |
| ChargeType | ChargeTypeModel | — |
| Credit | CreditModel | — |
| MetaTag | String | — |

### 25.3 AllocationModel
*Links a payment/credit dollar amount to a specific charge.*

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| AllocationID | Integer | EqualTo | Primary Key |
| CashAllocationID | Integer | EqualTo | — |
| PaymentID | Integer | EqualTo, In | — |
| ChargeID | Integer | EqualTo, In | — |
| PreallocationID | Integer | EqualTo | — |
| PropertyID | Integer | EqualTo, In | — |
| UnitID | Integer | EqualTo | — |
| Amount | Decimal | — | — |
| TransactionDate | DateTime | — | Read Only |
| AllocationType | eAllocationType | EqualTo, In, NotIn | — |
| IsCash | Boolean | — | — |
| IsTransferBeforeDeposit | Boolean | — | — |
| IsLateFee | Boolean | — | — |
| AppliedCreditID | Integer | — | — |
| CreateDate | DateTime | — | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| CreateUserID | Integer | EqualTo | — |
| CreditID | Integer | EqualTo | — |
| DebitID | Integer | EqualTo | — |
| ManagementFeeHistoryID | Integer | EqualTo | Read Only |
| Unit | UnitModel | — | — |
| Property | PropertyModel | — | — |
| Charge | ChargeModel | — | — |
| Payment | PaymentModel | — | — |
| AppliedCredit | CreditModel | — | — |
| ManagementFeeHistory | ManagementFeeHistoryModel | — | — |
| MetaTag | String | — | — |

### 25.4 PreallocationModel
*Preallocates payment dollars to a charge type before specific charges exist (e.g. for prepay/escrow flows).*

| Name | Type | Optimized Filters | Attributes |
|---|---|---|---|
| PreallocationID | Integer | EqualTo | Primary Key |
| PaymentID | Integer | EqualTo, In | — |
| Amount | Decimal | — | — |
| AmountAllocated | Decimal | — | — |
| ChargeTypeID | Integer | EqualTo | — |
| CreateDate | DateTime | — | — |
| CreateUserID | Integer | EqualTo | — |
| UpdateDate | DateTime | — | — |
| UpdateUserID | Integer | EqualTo | — |
| ChargeType | ChargeTypeModel | — | — |
| MetaTag | String | — | — |

### 25.5 PaymentReversalModel
*Represents a reversed payment (NSF, void, etc.).*

| Name | Type | Attributes |
|---|---|---|
| AccountID | Integer | — |
| PaymentID | Integer | Primary Key |
| ReversalDate | DateTime | — |
| ReversalType | eReversalType | — |
| ReversalReconcileID | Integer | Read Only |
| ReversalElectronicReconcileID | Integer | Read Only |
| CreateDate | DateTime | Read Only |
| CreateUserID | Integer | Read Only |
| CreateUser | UserModel | — |
| ReversalReason | String | — |
| Fees | NSFFeeModel | — |
| MetaTag | String | — |

### 25.6 RecurringChargeSummaryModel
*Returned by the `RecurringChargeSummaries` embed on TenantModel — extends RecurringCharge with grouping/inheritance metadata.*

| Name | Type | Attributes |
|---|---|---|
| IsException | Boolean | — |
| GroupName | String | — |
| EntityTypeEnumSortOrder | Integer | — |
| TenantID | Int32 | — |
| UnitTypeID | Int32 | — |
| PropertyID | Int32 | — |
| IsInherited | Boolean | — |
| RecurringChargeID | Integer | Primary Key |
| EntityType | eEntityType | — |
| EntityKeyID | Int32 | — |
| UnitID | Int32 | — |
| Frequency | Integer | — |
| ChargeTypeID | Integer | — |
| Amount | Decimal | — |
| OriginalAmount | Decimal | Calculated Field |
| AmountPerSquareFoot | Decimal | — |
| Comment | String | — |
| FromDate | DateTime | — |
| ToDate | DateTime | — |
| IsCalculated | Boolean | — |
| Calculation | String | — |
| CamRecurringChargeID | Int32 | — |
| SortOrder | Integer | Read Only |
| CreateDate | DateTime | — |
| CreateUserID | Integer | — |
| UpdateDate | DateTime | — |
| UpdateUserID | Integer | — |
| ChargeType | ChargeTypeModel | — |
| RecurringChargeExceptions | RecurringChargeExceptionModel | — |
| Tenant | TenantModel | — |
| LinkedUnit | UnitModel | — |
| Unit | UnitModel | — |
| UnitType | UnitTypeModel | — |
| Property | PropertyModel | — |
| CreditAllocations | RecurringCreditAllocationModel | — |
| MetaTag | String | — |

### 25.7 SecurityDepositSummaryModel
*Returned by the `SecurityDepositSummaries` embed on TenantModel.*

| Name | Type | Attributes |
|---|---|---|
| AccountID | Integer | — |
| ChargeTypeID | Integer | — |
| UnitID | Integer | — |
| PropertyID | Integer | — |
| Amount | Decimal | — |
| SecurityDepositTypeID | Integer | — |
| ChargeID | Integer | — |
| MetaTag | String | — |

### 25.8 TransactionModelBase
*Base shape for all transaction-like models (Charges, Payments, Credits, etc.).*

| Name | Type |
|---|---|
| ID | Integer |
| AccountID | Integer |
| AccountType | eAccountType |
| Reference | String |
| Comment | String |
| Amount | Decimal |
| TransactionDate | DateTime |
| CreateDate | DateTime |
| CreateUserID | Integer |
| UpdateDate | DateTime |
| UpdateUserID | Integer |
| TransactionType | eTransactionType |
| MetaTag | String |

---

## Appendix A — Quick Reference: Tenant Accounting Endpoint Map

| What you want | Endpoint | Notes |
|---|---|---|
| Tenant master record | `GET/POST/DELETE Tenants` (and `Tenants/{id}`) | TenantModel |
| Tenant balance (single decimal) | `GET Tenants/{id}/Balance` | Returns a Decimal |
| Tenant balance (embed) | `GET Tenants?embeds=Balance,OpenBalance,SecurityDepositHeld` | Returns balances on TenantModel |
| Tenant transactions ledger | `GET Tenants/Transactions?filters=...` | Returns TransactionModel list |
| Tenant open receivables | `GET Tenants?embeds=OpenReceivables&filters=TenantID,eq,{id}` | OpenReceivableModel via TenantModel embed |
| Tenant open prepays / unallocated credits | `GET Tenants?embeds=OpenPrepays&filters=TenantID,eq,{id}` | OpenPrepayModel via TenantModel embed |
| Tenant security deposit summaries | `GET Tenants?embeds=SecurityDepositSummaries` | SecurityDepositSummaryModel |
| Tenant recurring charge summaries | `GET Tenants?embeds=RecurringChargeSummaries` | RecurringChargeSummaryModel |
| Create a charge against a tenant | `POST Charges` with `AccountID` = TenantID, `AccountType` = "Tenant" | ChargeModel List body |
| Create a payment for a tenant | `POST Payments` with `AccountID` = TenantID; `Allocations` and `Preallocations` Required | PaymentModel List body |
| Create a credit for a tenant | `POST Credits` with `AccountID` = TenantID | CreditModel List body |
| Create / list invoices | `GET/POST Invoices` with `AccountID` = TenantID for tenant invoices | InvoiceModel |
| Create recurring charge for tenant | `POST RecurringCharges` with `EntityType` = "Tenant", `EntityKeyID` = TenantID | RecurringChargeModel |
| Late fee setup (per tenant or property) | `GET/POST LateFees` with `EntityKeyID` + `EntityTypeID` | LateFeeModel |
| Refund a security deposit | `POST Tenants/{id}/RefundSecurityDeposit` | RefundSecurityDepositModel body |
| Reverse a payment | Set `ReversalDate` / `ReversalType` on PaymentModel and Save (or use embedded `PaymentReversal`) | — |
| Delete a charge / payment | `DELETE Tenants/{id}/Charges?ids=...` or `DELETE Tenants/{id}/Payments?ids=...` | Subresource delete |
| List bank deposits | `GET/POST Deposits` | DepositModel; multiple Required (create) embeds |
| List GL accounts | `GET GLAccounts` | GLAccountModel |
| List charge types | `GET ChargeTypes` | ChargeTypeModel |
| List journals | `GET/POST Journals` | Details Required (create) |
| List postings | `GET Postings` | PostingModel |
| Account statements | `GET/POST AccountStatements` | AccountStatementModel |
| Tenant statement automations | `GET/POST TenantStatementAutomations` | — |
| Subsidy payments (HUD/sec 8 etc.) | `GET/POST SubsidyPayments` | Deposit Required (create) |
| Account group (multi-tenant) payment | `GET/POST AccountGroupPayments` | Payments Required (create) |

---

## Appendix B — Common AccountType Enum

The `AccountType` field on Charges/Payments/Credits/Invoices typically takes one of the values mapped to:
- `Tenant` — tenant account (most common for AR)
- `Prospect` — prospect account
- `Owner` — owner account
- (Other internal types may exist; refer to enum docs.)

When creating a tenant charge or payment, set `AccountID` to the `TenantID` and `AccountType` to `"Tenant"`.

---

## Appendix C — Embeds & Filters Pattern

Most resources support a consistent query string pattern:

```
GET {Resource}?
  filters={field,operator,value};{field2,operator2,value2}
  &embeds=NestedModel1,NestedModel2
  &orderingOptions=Field,direction
  &fields=Field1,Field2
  &getOptions=OptionA,OptionB
  &pageSize=50&pageNumber=1
```

Operators mentioned in this doc include: `EqualTo`, `NotEqualTo`, `In`, `NotIn`. Additional operators (e.g. `GreaterThan`, `LessThan`, `Contains`) typically exist in the corresponding `*FilterFields` enums on each resource.

To get a tenant's full accounting state in one call, embed broadly:

```
GET Tenants/{id}?embeds=
  Balance,OpenBalance,SecurityDepositHeld,
  OpenReceivables,OpenPrepays,
  SecurityDepositSummaries,RecurringChargeSummaries,
  Charges,Payments,Credits,Transactions,
  Leases,LateFeeSetup,PaymentReversals,AccountStatements
```

---

## Appendix D — Resources Discovered to Be Missing / 404

These intuitively-named tenant-accounting resources return **404 Not Found** on this API instance. Use the alternatives listed:

| Attempted URL | Status | Use Instead |
|---|---|---|
| `/Help/Resource/TenantCharges` | 404 | `/Help/Resource/Charges` filtered by AccountID/AccountType, or `Tenants?embeds=Charges` |
| `/Help/Resource/TenantPayments` | 404 | `/Help/Resource/Payments` filtered by AccountID/AccountType, or `Tenants?embeds=Payments` |
| `/Help/Resource/TenantOpenReceivables` | 404 | `Tenants?embeds=OpenReceivables` (returns OpenReceivableModel) |
| `/Help/Resource/TenantLedger` | 404 | `Tenants/Transactions` (returns TransactionModel) |
| `/Help/Resource/TenantTransactions` | 404 | `Tenants/Transactions` |
| `/Help/Resource/TenantInvoices` | 404 | `/Help/Resource/Invoices` filtered by AccountID/AccountType |
| `/Help/Resource/TenantStatement` | 404 | `/Help/Resource/AccountStatements` and `/Help/Resource/TenantStatementAutomations` |
| `/Help/Resource/OpenReceivables` | 404 | `Tenants?embeds=OpenReceivables` |
| `/Help/Resource/PaymentReversals` | 404 | Use the `PaymentReversal` field on PaymentModel, or `Tenants/{id}/PaymentReversals` (DELETE only) |

---

*End of document.*
