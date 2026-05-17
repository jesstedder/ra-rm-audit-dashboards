# Rent Manager Web API - Complete Resource Documentation
**Source:** https://reama.api.rentmanager.com/Help
**Generated:** 2026-04-29T19:58:27.273Z
**Total Resources:** 361

---

## APIInformation

APIInformation
 APIDocumentation
 BaseTypeName
 ControllerInformation
 Controllers
 DeleteOptions
 DeprecatedDocumentation
 DeprecatedMembers
 Embeds
 EnumerationInformation
 Enumerations
 EnumerationValues
 Fields
 FileGetOptions
 Filters
 GetOptions
 Methods
 Model
 ModelInformation
 Models
 OrderingOptions
 ReportGetOptions
 SaveOptions
 TestClientInfo
 Rent Manager Web API Reference
 APIInformation
 Please select a resource on the left to view more information
 Request Information
 Url
 GET APIInformation

---

## ARAutomationScheduleDetails

ARAutomationSched...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ARAutomationSchedule
 ARAutomationScheduleDetailChargeTypes
 ARAutomationScheduleDetailContactTypes
 CreateUser
 GetByPost
 LetterTemplate
 NDTBroadcastRecording
 NDTBroadcastRecordingAfterBalance
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ARAutomationScheduleDetails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ARAutomationScheduleDetails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ARAutomationScheduleDetailFilterFields List
 Define this parameter in the request URI.
 embeds
 ARAutomationScheduleDetailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ARAutomationScheduleDetailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ARAutomationScheduleDetailModel
 AR Automation Schedule Detail Model
 Properties
 NameTypeOptimized FiltersAttributes
 ARAutomationScheduleDetailID
 Integer
 EqualTo
, 
 In
 Primary Key
 ARAutomationScheduleID
 Integer
 EqualTo
 IsEnabled
 Boolean
 DaysLate
 Integer
 AmountFilterOperator
 eFilterOperator
 AmountFilterAmount
 Decimal
 ActionType
 eARAutomationScheduleDetailActionType
 EqualTo
 ActionContact
 eARAutomationScheduleDetailActionContact
 Subject
 String
 Message
 String
 LetterTemplateID
 Integer
 EqualTo
 NDTBroadcastRecordingID
 Integer
 EqualTo
 IsIncludeBalance
 Boolean
 NDTBroadcastRecordingIDAfterBalance
 Integer
 EqualTo
 ScheduledTimeInUTC
 DateTime
 ScheduledTimeTimezone
 eARAutomationScheduleDetailTimeZone
 ScheduledTimeIsDaylightSavingTime
 Boolean
 Read Only
 ScheduleType
 eARAutomationScheduleDetailScheduleType
 DayOfMonth
 Int32
 IsLastDayOfMonthSelected
 Boolean
 CurrentMonthChargesOnly
 Boolean
 DueDateType
 eARAutomationScheduleDetailDueDateType
 AdditionalText
 String
 IsPast
 Boolean
 IsCurrent
 Boolean
 IsFuture
 Boolean
 ContactUDFValue
 String
 ContactUDFID
 Integer
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ARAutomationSchedule
 ARAutomationScheduleModel
 LetterTemplate
 LetterTemplateModel
 NDTBroadcastRecording
 NDTPhoneBroadcastModel
 NDTBroadcastRecordingAfterBalance
 NDTPhoneBroadcastModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ARAutomationScheduleDetailChargeTypes
 ARAutomationScheduleDetailChargeTypeModel
 ARAutomationScheduleDetailContactTypes
 ARAutomationScheduleDetailContactTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ARAutomationScheduleDetailID": 1,
 "ARAutomationScheduleID": 2,
 "IsEnabled": true,
 "DaysLate": 4,
 "AmountFilterAmount": 5.0,
 "Subject": "sample string 6",
 "Message": "sample string 7",
 "LetterTemplateID": 8,
 "NDTBroadcastRecordingID": 9,
 "IsIncludeBalance": true,
 "NDTBroadcastRecordingIDAfterBalance": 11,
 "ScheduledTimeInUTC": "2026-04-29T15:56:15.0961481-04:00",
 "ScheduledTimeIsDaylightSavingTime": true,
 "DayOfMonth": 1,
 "IsLastDayOfMonthSelected": true,
 "CurrentMonthChargesOnly": true,
 "AdditionalText": "sample string 18",
 "IsPast": true,
 "IsCurrent": true,
 "IsFuture": true,
 "ContactUDFValue": "sample string 22",
 "ContactUDFID": 23,
 "CreateDate": "2026-04-29T15:56:15.0961481-04:00",
 "UpdateDate": "2026-04-29T15:56:15.0961481-04:00",
 "CreateUserID": 26,
 "UpdateUserID": 27,
 "ConcurrencyID": 28,
 "MetaTag": "sample string 30"
 }
]

---

## ARAutomationSchedules

ARAutomationSched...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ARAutomationScheduleDetails
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ARAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ARAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ARAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 ARAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ARAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ARAutomationScheduleModel
 AR Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 ARAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 IsActive
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ARAutomationScheduleDetails
 ARAutomationScheduleDetailModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ARAutomationScheduleID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "CreateDate": "2026-04-29T15:56:15.2734686-04:00",
 "UpdateDate": "2026-04-29T15:56:15.2734686-04:00",
 "CreateUserID": 6,
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## AccountGroupMasterPayments

AccountGroupMaste...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 FeeAccount
 GetByPost
 Payments
 QuickSearch
 Search
 Rent Manager Web API Reference
 AccountGroupMasterPayments Retrieve Collection
 (DEPRECATED) As of 3/4/2019
 replaced by AccountGroupPayments
 Retrieve a collection of items.
 Request Information
 Url
 GET AccountGroupMasterPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AccountGroupMasterPaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 AccountGroupMasterPaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AccountGroupMasterPaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AccountGroupMasterPaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 AccountGroupMasterPaymentID
 Integer
 EqualTo
 Primary Key
 CheckNumber
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 FeeAccountID
 Integer
 EqualTo
 PaymentFrom
 String
 Comment
 String
 ReceiptID
 Integer
 FeeAccount
 TenantModel
 Payments
 PaymentModel
 Required (create)
 EpayTransactionInformationDetail
 EpayTransactionInformationDetailModel
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AccountGroupMasterPaymentID": 1,
 "CheckNumber": "sample string 2",
 "Amount": 3.0,
 "TransactionDate": "2026-04-29T15:56:15.4347499-04:00",
 "FeeAccountID": 5,
 "PaymentFrom": "sample string 6",
 "Comment": "sample string 7",
 "ReceiptID": 8,
 "MetaTag": "sample string 11"
 }
]

---

## AccountGroupPayments

AccountGroupPayme...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Deposit
 EpayTransactionInformationDetail
 FeeAccount
 GetByPost
 Payments
 QuickSearch
 Search
 Rent Manager Web API Reference
 AccountGroupPayments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AccountGroupPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AccountGroupPaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 AccountGroupPaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AccountGroupPaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AccountGroupPaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 AccountGroupPaymentID
 Integer
 EqualTo
, 
 In
 Primary Key
 CheckNumber
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 FeeAccountID
 Integer
 EqualTo
 PaymentFrom
 String
 Comment
 String
 ReceiptID
 Integer
 DepositID
 Integer
 FeeAccount
 TenantModel
 Payments
 CrossAccountGroupPaymentPaymentModel
 Required (create)
 EpayTransactionInformationDetail
 EpayTransactionInformationDetailModel
 Read Only
 Deposit
 DepositModel
 HasChargeTypesWithChargeTypeBankSetup
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (HasChargeTypesWithChargeTypeBankSetup)
 IsSplitPayment
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (IsSplitPayment)
 LateFeeList
 PaymentInformationRequestModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AccountGroupPaymentID": 1,
 "CheckNumber": "sample string 2",
 "Amount": 3.0,
 "TransactionDate": "2026-04-29T15:56:15.57846-04:00",
 "FeeAccountID": 5,
 "PaymentFrom": "sample string 6",
 "Comment": "sample string 7",
 "ReceiptID": 8,
 "DepositID": 9,
 "HasChargeTypesWithChargeTypeBankSetup": true,
 "IsSplitPayment": true,
 "MetaTag": "sample string 12"
 }
]

---

## AccountGroups

AccountGroups
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccountGroupDetails
 GetByPost
 QuickSearch
 RecurringCharges
 RecurringChargeSummaries
 Search
 Rent Manager Web API Reference
 AccountGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AccountGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AccountGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 AccountGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AccountGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AccountGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 AccountGroupID
 Integer
 Primary Key
 Name
 String
 Read Only
 AccountGroupDetails
 AccountGroupDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AccountGroupID": 1,
 "Name": "sample string 2",
 "MetaTag": "sample string 5"
 }
]

---

## AccountStatements

AccountStatements
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Property
 QuickSearch
 Search
 Rent Manager Web API Reference
 AccountStatements Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AccountStatements?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AccountStatementFilterFields List
 Define this parameter in the request URI.
 embeds
 AccountStatementEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AccountStatementOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AccountStatementModel
 Properties
 NameTypeOptimized FiltersAttributes
 AccountStatementID
 Integer
 EqualTo
 Primary Key
 AccountID
 Integer
 EqualTo
 StatementProvider
 eStatementProvider
 PropertyID
 Integer
 EqualTo
, 
 In
 StatementDate
 DateTime
 Amount
 Decimal
 StatementURL
 String
 IsDeleted
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 Property
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AccountStatementID": 1,
 "AccountID": 2,
 "PropertyID": 3,
 "StatementDate": "2026-04-29T15:56:15.9296865-04:00",
 "Amount": 5.0,
 "StatementURL": "sample string 6",
 "IsDeleted": true,
 "CreateDate": "2026-04-29T15:56:15.9296865-04:00",
 "UpdateDate": "2026-04-29T15:56:15.9296865-04:00",
 "MetaTag": "sample string 11"
 }
]

---

## AccountingPeriodSeries

AccountingPeriodS...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccountingPeriodYears
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 AccountingPeriodSeries Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AccountingPeriodSeries?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AccountingPeriodSeriesFilterFields List
 Define this parameter in the request URI.
 embeds
 AccountingPeriodSeriesEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AccountingPeriodSeriesOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AccountingPeriodSeriesModel
 Properties
 NameTypeOptimized FiltersAttributes
 AccountingPeriodSeriesID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 IsActive
 Boolean
 EqualTo
 IsDefault
 Boolean
 EqualTo
 PeriodPattern
 eAccountingPeriodPattern
 StartMonth
 Integer
 StartDay
 Integer
 EndMonth
 Integer
 Read Only
, 
 Calculated Field
 EndDay
 Integer
 Read Only
, 
 Calculated Field
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 AccountingPeriodYears
 AccountingPeriodYearModel
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AccountingPeriodSeriesID": 1,
 "Name": "sample string 2"
 }
]

---

## AccountingPeriodYears

AccountingPeriodY...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccountingPeriod
 AccountingPeriods
 AccountingPeriodSeries
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AccountingPeriodYears Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AccountingPeriodYears?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AccountingPeriodYearFilterFields List
 Define this parameter in the request URI.
 embeds
 AccountingPeriodYearEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AccountingPeriodYearOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AccountingPeriodYearGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AccountingPeriodYearModel
 Properties
 NameTypeOptimized FiltersAttributes
 AccountingPeriodYearID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 AccountingPeriodSeriesID
 Integer
 EqualTo
 Read Only
 Year
 Integer
 Calculated Field
 StartDate
 DateTime
 Read Only
 EndDate
 DateTime
 Read Only
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 AccountingPeriods
 AccountingPeriodModel
 Required (create)
 AccountingPeriodSeries
 AccountingPeriodSeriesModel
 UpdateUser
 UserModel
 Read Only
 CreateUser
 UserModel
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AccountingPeriodYearID": 1,
 "Name": "sample string 2"
 }
]

---

## Amenities

Amenities
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AmenityPricing
 CreateUser
 GetByPost
 PropertyAmenities
 QuickSearch
 Search
 UnitAmenities
 UpdateUser
 Rent Manager Web API Reference
 Amenities Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Amenities?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AmenityFilterFields List
 Define this parameter in the request URI.
 embeds
 AmenityEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AmenityOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AmenityModel
 Describes details about an Amenity for a Unit
 Properties
 NameTypeOptimized FiltersAttributes
 AmenityID
 Integer
 EqualTo
, 
 In
 Primary Key
 AmenityType
 eAmenityType
 Name
 String
 EqualTo
 Comment
 String
 SortOrder
 Integer
 Price
 (DEPRECATED) As of 11/1/2025
 Decimal
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 AmenityPricing
 AmenityPricingModel
 UnitAmenities
 UnitAmenityModel
 PropertyAmenities
 PropertyAmenityModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AmenityID": 1,
 "Name": "sample string 2",
 "SortOrder": 4
 }
]

---

## ApplicationDesigns

ApplicationDesign...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ApplicationDesigns Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ApplicationDesigns?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationDesignFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationDesignEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationDesignOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationDesignModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationDesignID
 Integer
 Primary Key
 DisplayValue
 String
 ScriptName
 String
 ScriptValue
 String
 OrderNumber
 Integer
 IsRequired
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationDesignID": 1,
 "DisplayValue": "sample string 2",
 "ScriptName": "sample string 3",
 "ScriptValue": "sample string 4",
 "OrderNumber": 5,
 "IsRequired": true,
 "MetaTag": "sample string 8"
 }
]

---

## ApplicationFieldLeadSources

ApplicationFieldL...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationField
 GetByPost
 ProspectLeadSource
 QuickSearch
 Search
 Rent Manager Web API Reference
 ApplicationFieldLeadSources Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ApplicationFieldLeadSources?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationFieldLeadSourceFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationFieldLeadSourceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationFieldLeadSourceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationFieldLeadSourceModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationFieldLeadSourceID
 Integer
 EqualTo
, 
 In
 Primary Key
 ApplicationFieldID
 Integer
 EqualTo
, 
 In
 ProspectLeadSourceID
 Integer
 EqualTo
 DisplayName
 String
 SortOrder
 Integer
 ApplicationField
 ApplicationFieldModel
 ProspectLeadSource
 LeadSourceModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationFieldLeadSourceID": 1,
 "ApplicationFieldID": 2,
 "ProspectLeadSourceID": 3,
 "DisplayName": "sample string 4",
 "SortOrder": 5,
 "MetaTag": "sample string 7"
 }
]

---

## ApplicationInfo

ApplicationInfo
 Retrieve Instance
 ConnectionPoolInfo
 Rent Manager Web API Reference
 ApplicationInfo Retrieve Instance
 Request Information
 Url
 GET ApplicationInfo
 Response Information
 Response body formats
 application/json, text/json
 Sample:
{
 "ProductName": "sample string 1",
 "CurrentVersion": "sample string 2",
 "DisplayVersion": "sample string 3",
 "BuildTimestamp": "2026-04-29T15:56:16.9378385-04:00"
}

---

## ApplicationSettings

ApplicationSettin...
 Retrieve Collection
 Retrieve Instance
 ApplicationFees
 ApplicationSubApplicantSetup
 ApplicationTemplate
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ApplicationSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ApplicationSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationSettingsFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationSettingsEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationSettingsOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationSettingsModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationSettingsID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Int32
 EqualTo
, 
 In
 ApplicationTemplateID
 Int32
 EqualTo
 ApplicationSubApplicantSetupID
 Int32
 EqualTo
 OverrideSystemDefaults
 Boolean
 OverridePropertyDefaults
 Boolean
 EnableOnlineAppEpay
 Boolean
 HavePayleaseManageConvenienceFees
 Boolean
 DoNotRequirePayment
 Boolean
 PayLaterMessage
 String
 ReserveProspectUnit
 Boolean
 ACH
 Boolean
 DinerClub
 Boolean
 VisaMasterCard
 Boolean
 AmericanExpress
 Boolean
 Discover
 Boolean
 ConsentToScreening
 String
 AccuracyCertification
 String
 ExtendedDisclaimer
 String
 RequireDisclaimerForEpayTrans
 Boolean
 EpayTransDisclaimer
 String
 AllowPrimaryApplicantToPayAll
 Boolean
 RunScreening
 Boolean
 ScreeningReportType
 eScreeningReport
 OverrideSystemDisclaimers
 Boolean
 RequireSignatureOnApplication
 Boolean
 OverrideSystemUnitToInclude
 Boolean
 UnitSelectionType
 eApplyNowUnitSelectionMethod
 DisplayUnitsOption
 eApplyNowDisplayUnits
 DisplayUnitTypesOption
 eApplyNowDisplayUnitTypes
 UnitsToInclude
 Integer
 Calculated Field
 UseUnitTypeDesc
 Boolean
 RequireIncomeVerification
 Boolean
 AllowApplicantRefreshExpiredVerificationLink
 Boolean
 RefreshExpiredVerificationLinkLimit
 Integer
 IncomeVerificationPageMessage
 String
 Property
 PropertyModel
 ApplicationTemplate
 ApplicationTemplateModel
 ApplicationSubApplicantSetup
 ApplicationSubApplicantSetupModel
 ApplicationFees
 ApplicationFeeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationSettingsID": 1,
 "PropertyID": 1,
 "ApplicationTemplateID": 1,
 "ApplicationSubApplicantSetupID": 1,
 "OverrideSystemDefaults": true,
 "OverridePropertyDefaults": true,
 "EnableOnlineAppEpay": true,
 "HavePayleaseManageConvenienceFees": true,
 "DoNotRequirePayment": true,
 "PayLaterMessage": "sample string 7",
 "ReserveProspectUnit": true,
 "ACH": true,
 "DinerClub": true,
 "VisaMasterCard": true,
 "AmericanExpress": true,
 "Discover": true,
 "ConsentToScreening": "sample string 14",
 "AccuracyCertification": "sample string 15",
 "ExtendedDisclaimer": "sample string 16",
 "RequireDisclaimerForEpayTrans": true,
 "EpayTransDisclaimer": "sample string 18",
 "AllowPrimaryApplicantToPayAll": true,
 "RunScreening": true,
 "OverrideSystemDisclaimers": true,
 "RequireSignatureOnApplication": true,
 "OverrideSystemUnitToInclude": true,
 "UnitsToInclude": [],
 "UseUnitTypeDesc": true,
 "RequireIncomeVerification": true,
 "AllowApplicantRefreshExpiredVerificationLink": true,
 "RefreshExpiredVerificationLinkLimit": 28,
 "IncomeVerificationPageMessage": "sample string 29",
 "MetaTag": "sample string 31"
 }
]

---

## ApplicationSubApplicantFields

ApplicationSubApp...
 Retrieve Collection
 Retrieve Instance
 Save
 ApplicationSubApplicantSetups
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ApplicationSubApplicantFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ApplicationSubApplicantFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationSubApplicantFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationSubApplicantFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationSubApplicantFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationSubApplicantFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationSubApplicantFieldID
 Integer
 EqualTo
, 
 In
 Primary Key
 ApplicationMajorSectionID
 Integer
 EqualTo
, 
 In
 ApplicantTypeLabel
 String
 ApplicantTypeHelpText
 String
 FullNameLabel
 String
 FullNameHelpText
 String
 EmailAddressLabel
 String
 EmailAddressHelpText
 String
 ApplicationSubApplicantSetups
 ApplicationSubApplicantSetupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationSubApplicantFieldID": 1,
 "ApplicationMajorSectionID": 2
 }
]

---

## ApplicationSummaries

ApplicationSummar...
 Retrieve Collection
 Rent Manager Web API Reference
 ApplicationSummaries Retrieve Collection
 Gets Application Summaries
 Request Information
 Url
 GET ApplicationSummaries?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&getOptions={getOptions}&fields={fields}&pageSize={pageSize}&pageNumber={pageNumber}&ignorePaging={ignorePaging}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationSummaryFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationSummaryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationSummaryOrderingOptions List
 Define this parameter in the request URI.
 getOptions
 ApplicationSummaryGetOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 ignorePaging
 Boolean
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationSummaryModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationID
 Integer
 ProspectApplicationID
 Integer
 AccountID
 Integer
 PropertyID
 Integer
 LeasingAgentID
 Integer
 ProspectStatus
 eProspectStatus
 Name
 String
 ApplicationDate
 DateTime
 AmountPaid
 Int32
 AmountCharged
 Int32
 LastUpdatedDate
 DateTime
 CompletedDate
 DateTime
 Completed
 String
 TotalApplications
 Int32
 ApplicationTemplateID
 Int32
 IsScreened
 Boolean
 PhoneNumber
 String
 Status
 String
 Account
 AccountModel
 Property
 PropertyModel
 LeasingAgent
 UserModel
 ApplicationTemplate
 ApplicationTemplateModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationID": 1,
 "ProspectApplicationID": 2,
 "AccountID": 3,
 "PropertyID": 4,
 "LeasingAgentID": 5,
 "Name": "sample string 6",
 "ApplicationDate": "2026-04-29T15:56:17.4346434-04:00",
 "AmountPaid": 1,
 "AmountCharged": 1,
 "LastUpdatedDate": "2026-04-29T15:56:17.4346434-04:00",
 "CompletedDate": "2026-04-29T15:56:17.4346434-04:00",
 "Completed": "sample string 8",
 "TotalApplications": 1,
 "ApplicationTemplateID": 1,
 "IsScreened": true,
 "PhoneNumber": "sample string 10",
 "Status": "sample string 11",
 "MetaTag": "sample string 13"
 }
]

---

## ApplicationTemplates

ApplicationTempla...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationFieldComboboxItems
 ApplicationFieldLeadSources
 ApplicationFieldOptions
 ApplicationFields
 ApplicationMajorSections
 ApplicationMinorSections
 ApplicationSettings
 ApplicationSubApplicantFields
 ApplicationTemplateActiveProperties
 ApplicationTemplateField
 ApplicationTemplateMajorSection
 ApplicationTemplateMinorSection
 CreateUser
 DefaultProperty
 FeeProperty
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ApplicationTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ApplicationTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 TemplateType
 eApplicationTemplateType
 DisplayName
 String
 FeePropertyID
 Integer
 EqualTo
 DefaultPropertyID
 Integer
 EqualTo
 Description
 String
 EqualTo
 IsSystem
 Boolean
 IsReadOnly
 Boolean
 IsPropertyRequired
 Boolean
 IsUnitUnitTypeRequired
 Boolean
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 ApplicationMajorSections
 ApplicationMajorSectionModel
 ApplicationSettings
 ApplicationSettingsModel
 ApplicationSubApplicantSetups
 ApplicationSubApplicantSetupModel
 ApplicationTemplateActiveProperties
 ApplicationTemplateActivePropertiesModel
 ProspectApplications
 ProspectApplicationModel
 FeeProperty
 PropertyModel
 DefaultProperty
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationTemplateID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "Description": "sample string 6"
 }
]

---

## Applications

Applications
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 ApplicationDetailDataReport
 Contact
 Details
 GetByPost
 ImportContact
 ImportProspect
 ImportTenant
 PrepareContactImport
 PrepareProspectImport
 PrepareTenantImport
 QuickSearch
 RemoveLink
 Search
 Rent Manager Web API Reference
 Applications Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Applications?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ApplicationGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationID
 Integer
 EqualTo
, 
 In
 Primary Key
 Status
 Boolean
 EqualTo
 Read Only
 CreateDate
 DateTime
 IPAddress
 String
 EqualTo
 IsRead
 Boolean
 Details
 ApplicationDetailModel
 Required (create)
 Account
 AccountModel
 Contact
 ContactModel
 ContactID
 Integer
 EqualTo
 AccountID
 Integer
 EqualTo
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationID": 1,
 "Status": true,
 "CreateDate": "2026-04-29T15:56:17.7522688-04:00",
 "IPAddress": "sample string 4",
 "IsRead": true,
 "ContactID": 6,
 "AccountID": 7,
 "MetaTag": "sample string 9"
 }
]

---

## Appointments

Appointments
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AppointmentUser
 AppointmentUsers
 Attachments
 Color
 CreateUser
 FileAttachments
 GetByPost
 Owner
 OwnerProspect
 OwnerProspects
 Owners
 OwnersSelectList
 Prospect
 Prospects
 ProspectsSelectList
 QuickSearch
 Search
 ServiceManagerIssue
 ServiceManagerIssues
 ServiceManagerIssuesSelectList
 TaskAccounts
 Tenant
 Tenants
 TenantsSelectList
 UpdateUser
 UploadAttachment
 Vendor
 Vendors
 VendorsSelectList
 Rent Manager Web API Reference
 Appointments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Appointments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AppointmentFilterFields List
 Define this parameter in the request URI.
 embeds
 AppointmentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AppointmentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AppointmentGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AppointmentModel
 Properties
 NameTypeOptimized FiltersAttributes
 AppointmentID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentAppointmentID
 Integer
 EqualTo
 StartDate
 DateTime
 EndDate
 DateTime
 ReminderDate
 DateTime
 Subject
 String
 Description
 String
 ColorID
 Integer
 IsReminder
 Boolean
 IsCalendarIntegration
 Boolean
 IsRecurring
 Boolean
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Int32
 EqualTo
 TenantID
 Integer
 ProspectID
 Integer
 OwnerID
 Integer
 VendorID
 Integer
 IssueID
 (DEPRECATED) As of 8/15/2019
 replaced by ServiceManagerIssueID
 Integer
 ServiceManagerIssueID
 Integer
 EqualTo
, 
 In
 OwnerProspectID
 Integer
 FileAttachments
 FileAttachmentModel
 Color
 ColorModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 AppointmentUsers
 AppointmentUserModel
 Tenant
 TenantModel
 TenantSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Tenant
 CrossAppointmentTenantModel
 Prospect
 ProspectModel
 ProspectSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Prospect
 CrossAppointmentProspectModel
 Vendor
 VendorModel
 VendorSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Vendor
 CrossAppointmentVendorModel
 Owner
 OwnerModel
 OwnerSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Owner
 CrossAppointmentOwnerModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 ServiceManagerIssueSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by ServiceManagerIssue
 CrossAppointmentServiceManagerIssueModel
 OwnerProspect
 OwnerProspectModel
 TaskAccounts
 TaskAccountModel
 AppointmentRecurrencePatternOfRecurrence
 eAppointmentRecurrencePatternTypes
 AppointmentRecurrenceFromDate
 DateTime
 AppointmentRecurrenceToDate
 DateTime
 AppointmentRecurrenceValue1
 Integer
 AppointmentRecurrenceValue2
 Integer
 AppointmentRecurrenceDatePostedThru
 DateTime
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AppointmentID": 1,
 "ParentAppointmentID": 2,
 "StartDate": "2026-04-29T15:56:17.945219-04:00",
 "EndDate": "2026-04-29T15:56:17.945219-04:00",
 "ReminderDate": "2026-04-29T15:56:17.945219-04:00",
 "Subject": "sample string 6",
 "Description": "sample string 7",
 "ColorID": 8,
 "IsReminder": true,
 "IsCalendarIntegration": true,
 "IsRecurring": true,
 "CreateDate": "2026-04-29T15:56:17.945219-04:00",
 "CreateUserID": 13,
 "UpdateDate": "2026-04-29T15:56:17.945219-04:00",
 "UpdateUserID": 1,
 "TenantID": 15,
 "ProspectID": 16,
 "OwnerID": 17,
 "VendorID": 18,
 "IssueID": 19,
 "ServiceManagerIssueID": 20,
 "OwnerProspectID": 21,
 "AppointmentRecurrenceFromDate": "2026-04-29T15:56:17.945219-04:00",
 "AppointmentRecurrenceToDate": "2026-04-29T15:56:17.945219-04:00",
 "AppointmentRecurrenceValue1": 24,
 "AppointmentRecurrenceValue2": 25,
 "AppointmentRecurrenceDatePostedThru": "2026-04-29T15:56:17.945219-04:00",
 "MetaTag": "sample string 28"
 }
]

---

## ArchitecturalRequestFiles

ArchitecturalRequ...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 File
 GetByPost
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ArchitecturalRequestFiles Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ArchitecturalRequestFiles?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ArchitecturalRequestFileFilterFields List
 Define this parameter in the request URI.
 embeds
 ArchitecturalRequestFileEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ArchitecturalRequestFileOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ArchitecturalRequestFileModel
 Properties
 NameTypeOptimized FiltersAttributes
 ArchitecturalRequestFileID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 FileID
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 Name
 String
 Description
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 File
 FileModel
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ArchitecturalRequestFileID": 1,
 "PropertyID": 2,
 "FileID": 3,
 "CreateUserID": 4,
 "UpdateUserID": 5,
 "Name": "sample string 6",
 "Description": "sample string 7",
 "CreateDate": "2026-04-29T15:56:18.1377514-04:00",
 "UpdateDate": "2026-04-29T15:56:18.1377514-04:00",
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## ArchitecturalRequestForms

ArchitecturalRequ...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ArchitecturalRequestForms Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ArchitecturalRequestForms?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ArchitecturalRequestFormFilterFields List
 Define this parameter in the request URI.
 embeds
 ArchitecturalRequestFormEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ArchitecturalRequestFormOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ArchitecturalRequestFormModel
 Properties
 NameTypeOptimized FiltersAttributes
 ArchitecturalRequestFormID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 DisplayName
 String
 Description
 String
 IsSystem
 Boolean
 IsReadOnly
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ArchitecturalRequestFormSections
 ArchitecturalRequestFormSectionModel
 ArchitecturalRequestFormsActiveProperties
 ArchitecturalRequestFormsActivePropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ArchitecturalRequestFormID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "Description": "sample string 4",
 "IsSystem": true,
 "IsReadOnly": true,
 "CreateDate": "2026-04-29T15:56:18.297175-04:00",
 "CreateUserID": 8,
 "UpdateDate": "2026-04-29T15:56:18.297175-04:00",
 "UpdateUserID": 10,
 "ConcurrencyID": 11,
 "MetaTag": "sample string 13"
 }
]

---

## ArchitecturalRequestFormsActiveProperties

ArchitecturalRequ...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ArchitecturalRequestForm
 GetByPost
 Property
 QuickSearch
 Search
 Rent Manager Web API Reference
 ArchitecturalRequestFormsActiveProperties Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ArchitecturalRequestFormsActiveProperties?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ArchitecturalRequestFormsActivePropertyFilterFields List
 Define this parameter in the request URI.
 embeds
 ArchitecturalRequestFormsActivePropertyEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ArchitecturalRequestFormsActivePropertyOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ArchitecturalRequestFormsActivePropertyModel
 Properties
 NameTypeOptimized FiltersAttributes
 ArchitecturalRequestFormsActivePropertyID
 Integer
 EqualTo
 Primary Key
 ArchitecturalRequestFormID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 ArchitecturalRequestForm
 ArchitecturalRequestFormModel
 Property
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ArchitecturalRequestFormsActivePropertyID": 1,
 "ArchitecturalRequestFormID": 2,
 "PropertyID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## ArchitecturalRequests

ArchitecturalRequ...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ArchitecturalRequestMessages
 ArchitecturalRequestVotes
 Attachments
 CreateUser
 CreateWebUser
 GetByPost
 History
 HistoryNotes
 HistorySystemNotes
 Property
 QuickSearch
 Search
 Tenant
 UpdateUser
 Rent Manager Web API Reference
 ArchitecturalRequests Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ArchitecturalRequests?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ArchitecturalRequestFilterFields List
 Define this parameter in the request URI.
 embeds
 ArchitecturalRequestEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ArchitecturalRequestOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ArchitecturalRequestGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ArchitecturalRequestModel
 Properties
 NameTypeOptimized FiltersAttributes
 ArchitecturalRequestID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 TenantID
 Integer
 EqualTo
 ArchitecturalRequestFormID
 Integer
 EqualTo
, 
 In
 CreateWebUserID
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 Request
 String
 Description
 String
 Status
 eArchitecturalRequestStatus
 StatusComments
 String
 HasBeenInBoardReview
 Boolean
 EqualTo
 Read Only
 CreateDate
 DateTime
 UpdateDate
 DateTime
 Messages
 ArchitecturalRequestMessageModel
 History
 HistoryModel
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryNotes
 HistoryNoteModel
 Votes
 ArchitecturalRequestVoteModel
 Property
 PropertyModel
 Tenant
 TenantModel
 Attachments
 FileAttachmentModel
 CreateWebUser
 WebUserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ArchitecturalRequestForm
 ArchitecturalRequestFormModel
 ArchitecturalRequestDetails
 ArchitecturalRequestDetailModel
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ArchitecturalRequestID": 1,
 "PropertyID": 2,
 "TenantID": 3,
 "ArchitecturalRequestFormID": 4,
 "CreateWebUserID": 5,
 "CreateUserID": 6,
 "UpdateUserID": 7,
 "Request": "sample string 8",
 "Description": "sample string 9",
 "StatusComments": "sample string 10",
 "HasBeenInBoardReview": true,
 "CreateDate": "2026-04-29T15:56:18.6014476-04:00",
 "UpdateDate": "2026-04-29T15:56:18.6014476-04:00",
 "ConcurrencyID": 14,
 "MetaTag": "sample string 16"
 }
]

---

## AreaItemStatuses

AreaItemStatuses
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 GetFromAllLocations
 QuickSearch
 Search
 Rent Manager Web API Reference
 AreaItemStatuses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AreaItemStatuses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AreaItemStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 AreaItemStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AreaItemStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AreaItemStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 AreaItemStatusID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 IsActionItem
 Boolean
 IsSevere
 Boolean
 IsReviewNeeded
 Boolean
 IsDefault
 Boolean
 EqualTo
 SortOrder
 Integer
 IsManagementOnly
 Boolean
 IsNoteRequired
 Boolean
 IsImageRequired
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AreaItemStatusID": 1,
 "Name": "sample string 2",
 "IsActionItem": true,
 "IsSevere": true,
 "IsReviewNeeded": true,
 "IsDefault": true,
 "SortOrder": 7,
 "IsManagementOnly": true,
 "IsNoteRequired": true,
 "IsImageRequired": true,
 "CreateDate": "2026-04-29T15:56:18.7783452-04:00",
 "CreateUserID": 12,
 "UpdateUserID": 13,
 "UpdateDate": "2026-04-29T15:56:18.7783452-04:00",
 "ConcurrencyID": 15,
 "MetaTag": "sample string 17"
 }
]

---

## AreaItems

AreaItems
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AreaItemPredefinedStatuses
 GetByPost
 GetFromAllLocations
 QuickSearch
 Search
 Rent Manager Web API Reference
 AreaItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AreaItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AreaItemFilterFields List
 Define this parameter in the request URI.
 embeds
 AreaItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AreaItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AreaItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 AreaItemID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 IsManagementOnly
 Boolean
 InspectorHelpText
 String
 TenantHelpText
 String
 AreaItemPredefinedStatuses
 AreaItemPredefinedStatusModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AreaItemID": 1,
 "Name": "sample string 2",
 "IsManagementOnly": true,
 "InspectorHelpText": "sample string 4",
 "TenantHelpText": "sample string 5",
 "MetaTag": "sample string 7"
 }
]

---

## AreaPredefinedItems

AreaPredefinedIte...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AreaPredefinedItemStatuses
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 AreaPredefinedItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AreaPredefinedItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AreaPredefinedItemFilterFields List
 Define this parameter in the request URI.
 embeds
 AreaPredefinedItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AreaPredefinedItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AreaPredefinedItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 AreaPredefinedItemID
 Integer
 EqualTo
, 
 In
 Primary Key
 AreaID
 Integer
 EqualTo
 Name
 String
 IsManagementOnly
 Boolean
 InspectorHelpText
 String
 TenantHelpText
 String
 AreaPredefinedItemStatuses
 AreaPredefinedItemStatusModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AreaPredefinedItemID": 1,
 "AreaID": 2,
 "Name": "sample string 3",
 "IsManagementOnly": true,
 "InspectorHelpText": "sample string 5",
 "TenantHelpText": "sample string 6",
 "MetaTag": "sample string 8"
 }
]

---

## Areas

Areas
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AreaPredefinedItems
 GetByPost
 GetFromAllLocations
 QuickSearch
 Search
 Rent Manager Web API Reference
 Areas Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Areas?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AreaFilterFields List
 Define this parameter in the request URI.
 embeds
 AreaEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AreaOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AreaModel
 Properties
 NameTypeOptimized FiltersAttributes
 AreaID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 IsManagementOnly
 Boolean
 InspectorHelpText
 String
 TenantHelpText
 String
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 AreaPredefinedItems
 AreaPredefinedItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AreaID": 1,
 "Name": "sample string 2",
 "IsManagementOnly": true,
 "InspectorHelpText": "sample string 4",
 "TenantHelpText": "sample string 5",
 "CreateUserID": 6,
 "UpdateUserID": 7,
 "CreateDate": "2026-04-29T15:56:19.2576626-04:00",
 "UpdateDate": "2026-04-29T15:56:19.2576626-04:00",
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## AssetManufacturers

AssetManufacturer...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 AddressTypes
 AssetManufacturerAddress
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssetManufacturers Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssetManufacturers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AssetManufacturerFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetManufacturerEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetManufacturerOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AssetManufacturerGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetManufacturerModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetManufacturerID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Phone
 String
 Email
 String
 Website
 String
 Comment
 String
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Addresses
 AddressModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetManufacturerID": 1,
 "Name": "sample string 2"
 }
]

---

## AssetStatus

AssetStatus
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssetStatus Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssetStatus?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AssetStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AssetStatusGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetStatusID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetStatusID": 1,
 "Name": "sample string 2"
 }
]

---

## AssetStatusHistory

AssetStatusHistor...
 Retrieve Collection
 Retrieve Instance
 AssetStatus
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssetStatusHistory Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssetStatusHistory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AssetStatusHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetStatusHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetStatusHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetStatusHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetStatusHistoryID
 Integer
 In
 Primary Key
 AssetID
 Integer
 AssetStatusID
 Integer
 PropertyID
 (DEPRECATED) As of 8/8/2020
 Int32
 Read Only
 UnitID
 (DEPRECATED) As of 8/8/2020
 Int32
 Read Only
 Comment
 String
 Duration
 String
 Read Only
, 
 Calculated Field
 CreateUserID
 Integer
 UpdateUserID
 Integer
 FromDate
 DateTime
 ToDate
 DateTime
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUser
 UserModel
 UpdateUser
 UserModel
 AssetStatus
 AssetStatusModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetStatusHistoryID": 1,
 "AssetID": 2,
 "AssetStatusID": 3,
 "PropertyID": 1,
 "UnitID": 1,
 "Comment": "sample string 4",
 "Duration": "",
 "CreateUserID": 5,
 "UpdateUserID": 6,
 "FromDate": "2026-04-29T15:56:19.7365475-04:00",
 "ToDate": "2026-04-29T15:56:19.7365475-04:00",
 "CreateDate": "2026-04-29T15:56:19.7365475-04:00",
 "UpdateDate": "2026-04-29T15:56:19.7365475-04:00",
 "MetaTag": "sample string 11"
 }
]

---

## AssetStatusWorkflows

AssetStatusWorkfl...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssetStatusWorkflowStates
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssetStatusWorkflows Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssetStatusWorkflows?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AssetStatusWorkflowFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetStatusWorkflowEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetStatusWorkflowOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AssetStatusWorkflowGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetStatusWorkflowModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetStatusWorkflowID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 Description
 String
 IsActive
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 AssetStatusWorkflowStates
 AssetStatusWorkflowStatesModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetStatusWorkflowID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true,
 "CreateDate": "2026-04-29T15:56:19.8982463-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:56:19.8982463-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## AssetTitleStatuses

AssetTitleStatuse...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssetTitleStatuses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssetTitleStatuses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AssetTitleStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetTitleStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetTitleStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AssetTitleStatusGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetTitleStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetTitleStatusID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 Description
 String
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 AssetTitleStatusHistory
 AssetTitleStatusHistoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetTitleStatusID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "SortOrder": 4,
 "CreateDate": "2026-04-29T15:56:20.0439105-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:56:20.0439105-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## AssetTypes

AssetTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 DefaultWorkflow
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssetTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssetTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AssetTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AssetTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 CreateUserID
 Integer
 UpdateUserID
 Integer
 DefaultWorkflowID
 Integer
 Name
 String
 Description
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUser
 UserModel
 UpdateUser
 UserModel
 DefaultWorkflow
 AssetStatusWorkflowModel
 IsHome
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetTypeID": 1,
 "Name": "sample string 5",
 "Description": "sample string 6",
 "IsHome": true
 }
]

---

## Assets

Assets
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssetLocationHistory
 AssetMaintenance
 AssetManufacturer
 AssetStatus
 AssetStatusHistory
 AssetTitleStatuses
 AssetTitleStatusHistory
 AssetType
 AssetWorkflow
 CreateUser
 CurrentAssetLocationHistory
 CurrentAssetStatusHistory
 CurrentAssetTitleStatus
 CurrentHomeOwnerStatus
 DepreciationSchedule
 DepreciationSchedules
 FinancialProperty
 FinancialUnit
 GetByPost
 History
 HistoryCalls
 HistoryEmails
 HistoryNotes
 HistorySystemNotes
 HistoryVisits
 HomeOwnerStatusHistory
 Images
 ImageTypes
 MarketRent
 PostableDepreciations
 PostDepreciation
 QuickSearch
 Search
 TestScript
 UpdateUser
 UploadImage
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 Vendor
 Rent Manager Web API Reference
 Assets Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Assets?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AssetFilterFields List
 Define this parameter in the request URI.
 embeds
 AssetEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssetOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AssetGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssetModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssetID
 Integer
 EqualTo
, 
 In
 Primary Key
 AssetTag
 String
 EqualTo
 ModelNumber
 String
 SerialNumber
 String
 PurchaseDate
 DateTime
 ServiceStartDate
 DateTime
 ServiceEndDate
 DateTime
 PurchasePrice
 Decimal
 PayeeAccountID
 (DEPRECATED) As of 2/19/2020
 replaced by VendorID
 Int32
 EqualTo
 SalePrice
 Decimal
 Dimensions
 String
 Bedrooms
 Integer
 Bathrooms
 Decimal
 SquareFootage
 Integer
 VendorID
 Int32
 EqualTo
 AssetManufacturerID
 Int32
 EqualTo
 AssetTypeID
 Integer
 EqualTo
 MaintenancePeriod
 Integer
 LastMaintenanceDate
 DateTime
 NextMaintenanceDate
 DateTime
 WarrantyInfo
 String
 WarrantyExpirationDate
 DateTime
 HasServiceAgreement
 Boolean
 ServiceAgreementExpiration
 DateTime
 Comment
 String
 FinancialPropertyID
 Int32
 EqualTo
 FinancialUnitID
 Int32
 EqualTo
 Read Only
 ManufactureDate
 DateTime
 IsTrackingFinancials
 Boolean
 IsAllowLeasing
 Boolean
 DefaultRent
 Decimal
 Requires Embed (DefaultRent)
 IsActive
 Boolean
 Read Only
 Age
 String
 Read Only
 ServiceLength
 String
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 AssetWorkflowID
 Integer
 LienHolder
 String
 LoanNumber
 String
 AssetWorkflow
 AssetStatusWorkflowModel
 AssetType
 AssetTypeModel
 AssetManufacturer
 AssetManufacturerModel
 AssetMaintenance
 AssetMaintenanceModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 AssetStatus
 AssetStatusModel
 AssetStatusHistory
 AssetStatusHistoryModel
 Images
 ImageModel
 History
 HistoryModel
 HistoryCalls
 HistoryCallModel
 HistoryEmails
 HistoryEmailModel
 HistoryVisits
 HistoryVisitModel
 HistoryNotes
 HistoryNoteModel
 HistorySystemNotes
 HistorySystemNoteModel
 FinancialProperty
 PropertyModel
 FinancialUnit
 UnitModel
 AssetLocationHistory
 AssetLocationHistoryModel
 Vendor
 VendorModel
 CurrentAssetTitleStatus
 AssetTitleStatusModel
 AssetTitleStatusHistory
 AssetTitleStatusHistoryModel
 UserDefinedValues
 UserDefinedValueModel
 DepreciationSchedule
 DepreciationScheduleModel
 Read Only
 DepreciationSchedules
 DepreciationScheduleModel
 CurrentAssetLocationHistory
 AssetLocationHistoryModel
 Requires Embed (AssetLocationHistory)
 CurrentAssetStatusHistory
 AssetStatusHistoryModel
 Requires Embed (AssetStatusHistory)
 HomeOwnerStatusHistory
 HomeOwnerStatusHistoryModel
 CurrentHomeOwnerStatus
 HomeOwnerStatusModel
 Read Only
 MarketRent
 MarketRentModel
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssetID": 1,
 "AssetTag": "sample string 2",
 "ModelNumber": "sample string 3",
 "SerialNumber": "sample string 4",
 "PurchaseDate": "2026-04-29T15:56:20.3771389-04:00",
 "ServiceStartDate": "2026-04-29T15:56:20.3771389-04:00",
 "ServiceEndDate": "2026-04-29T15:56:20.3771389-04:00",
 "PurchasePrice": 8.0,
 "PayeeAccountID": 1,
 "SalePrice": 9.0,
 "Dimensions": "sample string 10",
 "Bedrooms": 11,
 "Bathrooms": 12.0,
 "SquareFootage": 13,
 "VendorID": 1,
 "AssetManufacturerID": 1,
 "AssetTypeID": 14,
 "MaintenancePeriod": 15,
 "LastMaintenanceDate": "2026-04-29T15:56:20.3771389-04:00",
 "NextMaintenanceDate": "2026-04-29T15:56:20.3771389-04:00",
 "WarrantyInfo": "sample string 18",
 "WarrantyExpirationDate": "2026-04-29T15:56:20.3771389-04:00",
 "HasServiceAgreement": true,
 "ServiceAgreementExpiration": "2026-04-29T15:56:20.3771389-04:00",
 "Comment": "sample string 22",
 "FinancialPropertyID": 1,
 "FinancialUnitID": 1,
 "ManufactureDate": "2026-04-29T15:56:20.3771389-04:00",
 "IsTrackingFinancials": true,
 "IsAllowLeasing": true,
 "DefaultRent": 26.0,
 "IsActive": true,
 "Age": "sample string 28",
 "ServiceLength": "sample string 29",
 "CreateDate": "2026-04-29T15:56:20.3771389-04:00",
 "CreateUserID": 31,
 "UpdateDate": "2026-04-29T15:56:20.3771389-04:00",
 "UpdateUserID": 33,
 "AssetWorkflowID": 34,
 "LienHolder": "sample string 35",
 "LoanNumber": "sample string 36",
 "MetaTag": "sample string 38"
 }
]

---

## AssociationSettings

AssociationSettin...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 AssociationSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AssociationSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AssociationSettingsFilterFields List
 Define this parameter in the request URI.
 embeds
 AssociationSettingsEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AssociationSettingsOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AssociationSettingsModel
 Properties
 NameTypeOptimized FiltersAttributes
 AssociationSettingsID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 ArchitecturalRequestsTWAMessageRTF
 String
 ArchitecturalRequestsTWAMessageHTML
 String
 Read Only
 ArchitecturalRequestsTWASubmitMessageRTF
 String
 ArchitecturalRequestsTWASubmitMessageHTML
 String
 Read Only
 ArchitecturalRequestsTWAReviewMessageRTF
 String
 ArchitecturalRequestsTWAReviewMessageHTML
 String
 Read Only
 IsArchitecturalRequestsAttachmentRequired
 (DEPRECATED) As of 2/7/2023
 Boolean
 CanBoardViewArchitecturalRequestsOnTWA
 Boolean
 CanBoardVoteArchitecturalRequestsOnTWA
 Boolean
 IsDoNotDisplayArchitecturalRequestsOnTWAUntilInBoardReview
 Boolean
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AssociationSettingsID": 1,
 "PropertyID": 2,
 "ArchitecturalRequestsTWAMessageRTF": "sample string 3",
 "ArchitecturalRequestsTWAMessageHTML": "sample string 4",
 "ArchitecturalRequestsTWASubmitMessageRTF": "sample string 5",
 "ArchitecturalRequestsTWASubmitMessageHTML": "sample string 6",
 "ArchitecturalRequestsTWAReviewMessageRTF": "sample string 7",
 "ArchitecturalRequestsTWAReviewMessageHTML": "sample string 8",
 "IsArchitecturalRequestsAttachmentRequired": true,
 "CanBoardViewArchitecturalRequestsOnTWA": true,
 "CanBoardVoteArchitecturalRequestsOnTWA": true,
 "IsDoNotDisplayArchitecturalRequestsOnTWAUntilInBoardReview": true,
 "CreateUserID": 13,
 "UpdateUserID": 14,
 "CreateDate": "2026-04-29T15:56:20.5232271-04:00",
 "UpdateDate": "2026-04-29T15:56:20.5232271-04:00",
 "ConcurrencyID": 17,
 "MetaTag": "sample string 19"
 }
]

---

## Authentication

Authentication
 AuthorizePartner
 AuthorizeToken
 AuthorizeUser
 ChangeLocation
 DeAuthorize
 Rent Manager Web API Reference
 Authentication
 Please select a resource on the left to view more information
 Request Information
 Url
 GET Authentication

---

## AutomatedNotificationEventSetupEvictionWorkflowStages

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AutomatedNotificationEventSetup
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 AutomatedNotificationEventSetupEvictionWorkflowStages Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationEventSetupEvictionWorkflowStages?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationEventSetupEvictionWorkflowStageFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationEventSetupEvictionWorkflowStageEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationEventSetupEvictionWorkflowStageOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationEventSetupEvictionWorkflowStageModel
 Properties
 NameTypeOptimized FiltersAttributes
 AutomatedNotificationEventSetupEvictionWorkflowStageID
 Integer
 EqualTo
 Primary Key
 AutomatedNotificationEventSetupID
 Integer
 EqualTo
, 
 In
 EvictionWorkflowStageID
 Integer
 EqualTo
 AutomatedNotificationEventSetup
 AutomatedNotificationEventSetupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AutomatedNotificationEventSetupEvictionWorkflowStageID": 1,
 "AutomatedNotificationEventSetupID": 2,
 "EvictionWorkflowStageID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## AutomatedNotificationEventSetupInspectorTypes

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 NotificationEventSetup
 QuickSearch
 Search
 Rent Manager Web API Reference
 AutomatedNotificationEventSetupInspectorTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationEventSetupInspectorTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationEventSetupInspectorTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationEventSetupInspectorTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationEventSetupInspectorTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationEventSetupInspectorTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 NotificationEventSetupInspectorTypeID
 Integer
 In
, 
 EqualTo
 Primary Key
 NotificationEventSetupID
 Integer
 EqualTo
, 
 In
 InspectorTypeID
 Integer
 NotificationEventSetup
 AutomatedNotificationEventSetupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NotificationEventSetupInspectorTypeID": 1,
 "NotificationEventSetupID": 2,
 "InspectorTypeID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## AutomatedNotificationEventSetupRenewalStatuses

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AutomatedNotificationEventSetup
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 AutomatedNotificationEventSetupRenewalStatuses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationEventSetupRenewalStatuses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationEventSetupRenewalStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationEventSetupRenewalStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationEventSetupRenewalStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationEventSetupRenewalStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 AutomatedNotificationEventSetupRenewalStatusID
 Integer
 EqualTo
 Primary Key
 AutomatedNotificationEventSetupID
 Integer
 EqualTo
 RenewalStatusID
 Integer
 AutomatedNotificationEventSetup
 AutomatedNotificationEventSetupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AutomatedNotificationEventSetupRenewalStatusID": 1,
 "AutomatedNotificationEventSetupID": 2,
 "RenewalStatusID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## AutomatedNotificationEventSetups

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Categories
 EvictionWorkflowStages
 GetByPost
 GuestCardTemplates
 MaintenanceGroups
 Properties
 ProspectStages
 QuickSearch
 Recipients
 RenewalStatuses
 Search
 StarRatings
 Surveys
 Types
 UserDefinedFields
 WebChatQueues
 Rent Manager Web API Reference
 AutomatedNotificationEventSetups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationEventSetups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationEventSetupFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationEventSetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationEventSetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationEventSetupModel
 Properties
 NameTypeOptimized FiltersAttributes
 AutomatedNotificationEventSetupID
 Integer
 Primary Key
 AutomatedNotificationEventTypeID
 eNotificationEventTypes
 In
 IsSystemDefaultSetup
 Boolean
 IsActive
 Boolean
 IsIncludeProspectMoveIn
 Boolean
 ExcludeIfMoveOut
 Boolean
 IsRenewalAccepted
 Boolean
 StrReservationAddedSource
 eShortTermReservationSource
 PurchaseOrderStatusFilter
 eAutomatedNotificationPurchaseOrderStatusFilter
 IsSendReminderDailyUntilPaidOrCancelled
 Boolean
 SurveyExpirationDays
 Integer
 IsArchitecturalRequestApproved
 Boolean
 ArchitecturalRequestStatuses
 String
 Days
 Integer
 IsAddHistory
 Boolean
 FromName
 String
 FromEmailAddress
 String
 Subject
 String
 Message
 String
 AppendWebChatQueueMessageToEmail
 Boolean
 SMSMessage
 String
 AppendWebChatQueueMessageToSMS
 Boolean
 LetterTemplateID
 Integer
 LetterTemplateType
 eLetterTemplateType
 ServiceBasedMessageSendTime
 DateTime
 ServiceBasedMessageSendTimeTimeZone
 String
 ServiceBasedMessageSendTimeIsDaylightSavingTime
 Boolean
 ServiceBasedLastRunTime
 DateTime
 IsExcludeReservedProspect
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 Properties
 AutomatedNotificationEventSetupPropertyModel
 Categories
 AutomatedNotificationEventSetupCategoryModel
 ProspectStages
 AutomatedNotificationEventSetupProspectStageModel
 GuestCardTemplates
 AutomatedNotificationEventSetupGuestCardTemplateModel
 Recipients
 AutomatedNotificationEventSetupRecipientModel
 WebChatQueues
 AutomatedNotificationEventSetupWebChatQueueModel
 UserDefinedFields
 AutomatedNotificationEventSetupUserDefinedFieldsModel
 MaintenanceGroups
 AutomatedNotificationEventSetupMaintenanceGroupModel
 InspectionTypes
 AutomatedNotificationEventSetupInspectionTypeModel
 RenewalStatuses
 AutomatedNotificationEventSetupRenewalStatusModel
 EvictionWorkflowStages
 AutomatedNotificationEventSetupEvictionWorkflowStageModel
 Surveys
 AutomatedNotificationEventSetupSurveyModel
 StarRatings
 AutomatedNotificationEventSetupStarRatingModel
 InspectorTypes
 AutomatedNotificationEventSetupInspectorTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AutomatedNotificationEventSetupID": 1,
 "IsSystemDefaultSetup": true,
 "IsActive": true,
 "IsIncludeProspectMoveIn": true,
 "ExcludeIfMoveOut": true,
 "IsRenewalAccepted": true,
 "IsSendReminderDailyUntilPaidOrCancelled": true,
 "SurveyExpirationDays": 8,
 "IsArchitecturalRequestApproved": true,
 "ArchitecturalRequestStatuses": "sample string 10",
 "Days": 11,
 "IsAddHistory": true,
 "FromName": "sample string 13",
 "FromEmailAddress": "sample string 14",
 "Subject": "sample string 15",
 "Message": "sample string 16",
 "AppendWebChatQueueMessageToEmail": true,
 "SMSMessage": "sample string 18",
 "AppendWebChatQueueMessageToSMS": true,
 "LetterTemplateID": 20,
 "ServiceBasedMessageSendTime": "2026-04-29T15:56:21.2625901-04:00",
 "ServiceBasedMessageSendTimeTimeZone": "sample string 22",
 "ServiceBasedMessageSendTimeIsDaylightSavingTime": true,
 "ServiceBasedLastRunTime": "2026-04-29T15:56:21.2625901-04:00",
 "IsExcludeReservedProspect": true,
 "CreateDate": "2026-04-29T15:56:21.2625901-04:00",
 "CreateUserID": 27,
 "UpdateDate": "2026-04-29T15:56:21.2625901-04:00",
 "UpdateUserID": 29,
 "ConcurrencyID": 30,
 "MetaTag": "sample string 32"
 }
]

---

## AutomatedNotificationSetups

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Categories
 GetByPost
 GuestCardTemplates
 Properties
 ProspectStages
 QuickSearch
 Recipients
 Search
 Types
 UserDefinedFields
 WebChatQueues
 Rent Manager Web API Reference
 AutomatedNotificationSetups Retrieve Collection
 (DEPRECATED) As of 11/1/2021
 replaced by AutomatedNotificationEventSetupsController
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationSetups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationEventSetupFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationEventSetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationEventSetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationEventSetupModel
 Properties
 NameTypeOptimized FiltersAttributes
 AutomatedNotificationEventSetupID
 Integer
 Primary Key
 AutomatedNotificationEventTypeID
 eNotificationEventTypes
 In
 IsSystemDefaultSetup
 Boolean
 IsActive
 Boolean
 IsIncludeProspectMoveIn
 Boolean
 ExcludeIfMoveOut
 Boolean
 IsRenewalAccepted
 Boolean
 StrReservationAddedSource
 eShortTermReservationSource
 PurchaseOrderStatusFilter
 eAutomatedNotificationPurchaseOrderStatusFilter
 IsSendReminderDailyUntilPaidOrCancelled
 Boolean
 SurveyExpirationDays
 Integer
 IsArchitecturalRequestApproved
 Boolean
 ArchitecturalRequestStatuses
 String
 Days
 Integer
 IsAddHistory
 Boolean
 FromName
 String
 FromEmailAddress
 String
 Subject
 String
 Message
 String
 AppendWebChatQueueMessageToEmail
 Boolean
 SMSMessage
 String
 AppendWebChatQueueMessageToSMS
 Boolean
 LetterTemplateID
 Integer
 LetterTemplateType
 eLetterTemplateType
 ServiceBasedMessageSendTime
 DateTime
 ServiceBasedMessageSendTimeTimeZone
 String
 ServiceBasedMessageSendTimeIsDaylightSavingTime
 Boolean
 ServiceBasedLastRunTime
 DateTime
 IsExcludeReservedProspect
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 Properties
 AutomatedNotificationEventSetupPropertyModel
 Categories
 AutomatedNotificationEventSetupCategoryModel
 ProspectStages
 AutomatedNotificationEventSetupProspectStageModel
 GuestCardTemplates
 AutomatedNotificationEventSetupGuestCardTemplateModel
 Recipients
 AutomatedNotificationEventSetupRecipientModel
 WebChatQueues
 AutomatedNotificationEventSetupWebChatQueueModel
 UserDefinedFields
 AutomatedNotificationEventSetupUserDefinedFieldsModel
 MaintenanceGroups
 AutomatedNotificationEventSetupMaintenanceGroupModel
 InspectionTypes
 AutomatedNotificationEventSetupInspectionTypeModel
 RenewalStatuses
 AutomatedNotificationEventSetupRenewalStatusModel
 EvictionWorkflowStages
 AutomatedNotificationEventSetupEvictionWorkflowStageModel
 Surveys
 AutomatedNotificationEventSetupSurveyModel
 StarRatings
 AutomatedNotificationEventSetupStarRatingModel
 InspectorTypes
 AutomatedNotificationEventSetupInspectorTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AutomatedNotificationEventSetupID": 1,
 "IsSystemDefaultSetup": true,
 "IsActive": true,
 "IsIncludeProspectMoveIn": true,
 "ExcludeIfMoveOut": true,
 "IsRenewalAccepted": true,
 "IsSendReminderDailyUntilPaidOrCancelled": true,
 "SurveyExpirationDays": 8,
 "IsArchitecturalRequestApproved": true,
 "ArchitecturalRequestStatuses": "sample string 10",
 "Days": 11,
 "IsAddHistory": true,
 "FromName": "sample string 13",
 "FromEmailAddress": "sample string 14",
 "Subject": "sample string 15",
 "Message": "sample string 16",
 "AppendWebChatQueueMessageToEmail": true,
 "SMSMessage": "sample string 18",
 "AppendWebChatQueueMessageToSMS": true,
 "LetterTemplateID": 20,
 "ServiceBasedMessageSendTime": "2026-04-29T15:56:21.4690269-04:00",
 "ServiceBasedMessageSendTimeTimeZone": "sample string 22",
 "ServiceBasedMessageSendTimeIsDaylightSavingTime": true,
 "ServiceBasedLastRunTime": "2026-04-29T15:56:21.4690269-04:00",
 "IsExcludeReservedProspect": true,
 "CreateDate": "2026-04-29T15:56:21.4690269-04:00",
 "CreateUserID": 27,
 "UpdateDate": "2026-04-29T15:56:21.4690269-04:00",
 "UpdateUserID": 29,
 "ConcurrencyID": 30,
 "MetaTag": "sample string 32"
 }
]

---

## AutomatedNotificationTypeGroups

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 AutomatedNotificationTypeGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationTypeGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationTypeGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationTypeGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationTypeGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 AutomatedNotificationTypeGroupGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationTypeGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 AutomatedNotificationTypeGroupID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 Description
 String
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AutomatedNotificationTypeGroupID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "SortOrder": 4,
 "MetaTag": "sample string 6"
 }
]

---

## AutomatedNotificationTypes

AutomatedNotifica...
 Retrieve Collection
 Retrieve Instance
 AutomatedNotificationTypeGroup
 AutomatedNotificationTypeOptions
 AutomatedNotificationTypeOptionSettings
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 AutomatedNotificationTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET AutomatedNotificationTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 AutomatedNotificationTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 AutomatedNotificationTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 AutomatedNotificationTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
AutomatedNotificationTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 AutomatedNotificationTypeID
 eNotificationEventTypes
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 TreeViewDescription
 String
 IsService
 Boolean
 IsStandaloneAvailable
 Boolean
 IsHidden
 Boolean
 AutomatedNotificationTypeGroupID
 Integer
 EqualTo
 AutomatedNotificationTypeGroup
 AutomatedNotificationTypeGroupModel
 AutomatedNotificationTypeOptionSettings
 AutomatedNotificationTypeOptionSettingModel
 AutomatedNotificationTypeOptions
 CrossAutomatedNotificationTypeAutomatedNotificationTypeOptionModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "AutomatedNotificationTypeID": "0",
 "Name": "sample string 1",
 "Description": "sample string 2",
 "TreeViewDescription": "sample string 3",
 "IsService": true,
 "IsStandaloneAvailable": true,
 "IsHidden": true,
 "AutomatedNotificationTypeGroupID": 7,
 "MetaTag": "sample string 9"
 }
]

---

## BankReconciliations

BankReconciliatio...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Attachments
 Bank
 DisburseAmount
 GetByPost
 QuickSearch
 ReconcileJournals
 ReconcileTransactions
 ReconciliationChanges
 ReportFile
 SaveForLater
 Search
 SetSingleReconcileStatus
 Transactions
 UploadAttachment
 Rent Manager Web API Reference
 BankReconciliations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BankReconciliations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 BankReconciliationFilterFields List
 Define this parameter in the request URI.
 embeds
 BankReconciliationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BankReconciliationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 BankReconciliationGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BankReconciliationModel
 Properties
 NameTypeOptimized FiltersAttributes
 BankReconciliationID
 Integer
 EqualTo
, 
 In
 Primary Key
 BankID
 Integer
 EqualTo
, 
 In
 ReconciliationDate
 DateTime
 PreviouslyReconciledAmount
 Decimal
 Read Only
 Payments
 Decimal
 Read Only
 Deposits
 Decimal
 Read Only
 Goal
 Decimal
 IsSavedForLater
 Boolean
 EqualTo
 IsReconciled
 Boolean
 EqualTo
 Read Only
 IsAuto
 Boolean
 Read Only
 IsManual
 Boolean
 Read Only
 Comment
 String
 IsElectronic
 Boolean
 Read Only
 ReportFileID
 Integer
 EqualTo
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Read Only
 ReconcileTransactions
 ReconcileTransactionModel
 Required (create)
 Transactions
 BankTransactionModel
 Read Only
 Bank
 BankModel
 Attachments
 FileAttachmentModel
 ReconcileJournals
 ReconcileJournalModel
 ReconciliationChanges
 ReconciliationChangeModel
 ReconciliationChargeDetails
 ReconciliationChargeDetailModel
 Required (create)
, 
 Calculated Field
 ReportFile
 FileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BankReconciliationID": 2,
 "BankID": 3,
 "ReconciliationDate": "2026-04-29T15:56:21.9813061-04:00",
 "PreviouslyReconciledAmount": 5.0,
 "Payments": 6.0,
 "Deposits": 7.0,
 "Goal": 8.0,
 "IsSavedForLater": true,
 "IsReconciled": true,
 "IsAuto": true,
 "IsManual": true,
 "Comment": "sample string 13",
 "IsElectronic": true,
 "ReportFileID": 15,
 "CreateDate": "2026-04-29T15:56:21.9813061-04:00",
 "CreateUserID": 17,
 "UpdateDate": "2026-04-29T15:56:21.9813061-04:00",
 "UpdateUserID": 19,
 "ConcurrencyID": 20,
 "MetaTag": "sample string 22"
 }
]

---

## Banks

Banks
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Balance
 BankTransactions
 ClearedBalance
 ElectronicReconcileTransactions
 GetByPost
 MicrInformation
 NachaODFIBank
 QuickSearch
 Reconciliations
 Search
 UserBanks
 Rent Manager Web API Reference
 Banks Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Banks?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 BankFilterFields List
 Define this parameter in the request URI.
 embeds
 BankEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BankOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 BankGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BankModel
 Properties
 NameTypeOptimized FiltersAttributes
 BankID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentBankAccountID
 Integer
 EqualTo
 Name
 String
 EqualTo
 Description
 String
 Reference
 String
 EqualTo
 IsActive
 Boolean
 SortOrder
 Integer
 Generation
 Integer
 Read Only
 NachaODFIBankID
 Integer
 EqualTo
 NextCheckNumber
 Integer
 NextECheckNumber
 Integer
 NextAvidPayCheckNumber
 Integer
 NextNachaCheckNumber
 Integer
 EpayBankID
 Integer
 EpayCountryID
 eCountries
 Balance
 Decimal
 Requires Embed (Balance)
 ClearedBalance
 Decimal
 Requires Embed (ClearedBalance)
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 NachaODFIBank
 NachaODFIBankModel
 MicrInformation
 MicrModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BankID": 1,
 "Name": "sample string 3"
 }
]

---

## BillableExpenses

BillableExpenses
 Retrieve Collection
 Rent Manager Web API Reference
 BillableExpenses Retrieve Collection
 Gets a list of Billable Expenses
 Request Information
 Url
 GET BillableExpenses?filters={filters}&embeds={embeds}&fields={fields}&pageSize={pageSize}&pageNumber={pageNumber}&ignorePaging={ignorePaging}
 Parameters
 NameTypeAdditional information
 filters
 BillableExpenseFilterFields List
 Define this parameter in the request URI.
 embeds
 BillableExpenseEmbedOptions
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 ignorePaging
 Boolean
 Define this parameter in the request URI.
 Response Information
 Model
BillableExpenseModel
 Properties
 NameTypeOptimized FiltersAttributes
 BillDetailID
 Integer
 CheckDetailID
 Integer
 CreditCardTransactionDetailID
 Integer
 Date
 DateTime
 VendorID
 Integer
 AccountID
 Integer
 TransactionType
 eTransactionType
 Amount
 Decimal
 Markup
 Decimal
 IsMarkUpPercentage
 Boolean
 Reference
 String
 Vendor
 VendorModel
 Account
 AccountModel
 BillDetail
 BillDetailModel
 CheckDetail
 CheckDetailModel
 CreditCardTransactionDetail
 CreditCardTransactionDetailModel
 TotalAmount
 Decimal
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BillDetailID": 1,
 "CheckDetailID": 2,
 "CreditCardTransactionDetailID": 3,
 "Date": "2026-04-29T15:56:22.3145246-04:00",
 "VendorID": 5,
 "AccountID": 6,
 "Amount": 7.0,
 "Markup": 8.0,
 "IsMarkUpPercentage": true,
 "Reference": "sample string 10",
 "TotalAmount": 7.56,
 "MetaTag": "sample string 12"
 }
]

---

## Bills

Bills
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 ApprovalUser
 Attachments
 AvidInvoiceInvoice
 AvidInvoiceURLs
 Bank
 BillDetails
 CreateUser
 DisburseAmount
 FileAttachments
 GeneralLedgerAccount
 GetByPost
 History
 HistoryNotes
 LinkToPurchaseOrder
 Owner
 OwnerApprovalOwner
 OwnerApprovalUser
 OwnerWorkOrders
 PayBills
 Prospect
 PurchaseOrder
 QuickSearch
 Reversal
 Search
 Tenant
 TenantCharge
 TenantCheck
 Term
 UpdateUser
 UploadAttachment
 Vendor
 VendorWorkOrders
 Rent Manager Web API Reference
 Bills Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Bills?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 BillFilterFields List
 Define this parameter in the request URI.
 embeds
 BillEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BillOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 BillGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BillModel
 Properties
 NameTypeOptimized FiltersAttributes
 ID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountID
 Integer
 EqualTo
, 
 In
 PayeeName
 String
 Reference
 String
 EqualTo
 Comment
 String
 Amount
 Decimal
 TransactionDate
 DateTime
 EqualTo
 CreateDate
 DateTime
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 TransactionType
 eTransactionType
 Calculated Field
 PostDate
 DateTime
 DueDate
 DateTime
 EqualTo
 AmountAllocated
 Decimal
 IsFullyAllocated
 Boolean
 EqualTo
 TermID
 Integer
 EqualTo
 BankID
 Integer
 EqualTo
 Bank
 BankModel
 GeneralLedgerAccount
 GLAccountModel
 DefaultBankOption
 eDefaultBankOption
 PayMethod
 eBillPayMethod
 IsApproved
 Boolean
 EqualTo
 ApprovalUserID
 Integer
 EqualTo
 Read Only
, 
 Calculated Field
 ApprovalDate
 DateTime
 Read Only
 OwnerApprovalStatus
 eOwnerApprovalStatus
 Read Only
 OwnerApprovalDate
 DateTime
 Read Only
 OwnerApprovalOwnerID
 Integer
 Read Only
 OwnerApprovalUserID
 Integer
 Read Only
 ReversalDate
 DateTime
 IsXIBill
 Boolean
 AvidInvoiceURL
 (DEPRECATED) As of 3/24/2020
 replaced by AvidInvoiceURLs
 String
 Read Only
 AvidInvoiceURLs
 AvidInvoiceURLModel
 Read Only
 History
 HistoryModel
 ConcurrencyID
 Integer
 Concurrency Key
 PurchaseOrderID
 Integer
 TenantCheckID
 Integer
 Read Only
 TenantChargeID
 Integer
 Read Only
 Term
 TermModel
 Account
 AccountModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Vendor
 VendorModel
 Owner
 OwnerModel
 AccountType
 eAccountType
 BillDetails
 BillDetailModel
 Required (create)
 Attachments
 (DEPRECATED) As of 7/23/2020
 replaced by FileAttachments
 FileModel
 FileAttachments
 FileAttachmentModel
 TenantCheck
 CheckModel
 TenantCharge
 ChargeModel
 HistoryNotes
 HistoryNoteModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ApprovalUser
 UserModel
 PayeeAddress
 String
 EcheckEmail
 String
 PurchaseOrder
 PurchaseOrderModel
 OwnerWorkOrders
 ServiceManagerIssueWorkOrderModel
 VendorWorkOrders
 ServiceManagerIssueWorkOrderModel
 OwnerApprovalOwner
 OwnerModel
 OwnerApprovalUser
 UserModel
 AvidInvoiceInvoice
 AvidInvoiceInvoiceModel
 IsMasterMeterBill
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ID": 1,
 "AccountID": 2,
 "Reference": "sample string 4"
 }
]

---

## BirdsEyeViewColors

BirdsEyeViewColor...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Rent Manager Web API Reference
 BirdsEyeViewColors Retrieve Collection
 (DEPRECATED) As of 4/27/2020
 Retrieve a collection of items.
 Request Information
 Url
 GET BirdsEyeViewColors?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BirdsEyeViewColorFilterFields List
 Define this parameter in the request URI.
 embeds
 BirdsEyeViewColorEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ColorOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BirdsEyeViewColorModel
 Properties
 NameTypeOptimized FiltersAttributes
 BirdsEyeViewColorID
 Integer
 EqualTo
, 
 NotEqualTo
 Primary Key
 Name
 String
 EqualTo
 HexValue
 String
 EqualTo
 EntityTypes
 (DEPRECATED) As of 11/19/2021
 replaced by ColorEntityTypes
 ColorEntityTypeModel
 ColorEntityTypes
 ColorEntityTypeModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Name": "sample string 3",
 "HexValue": "sample string 4"
 }
]

---

## BirdsEyeViewMapOverlays

BirdsEyeViewMapOv...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BirdsEyeViewMap
 BirdsEyeViewOverlay
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 BirdsEyeViewMapOverlays Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BirdsEyeViewMapOverlays?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BirdsEyeViewMapOverlayFilterFields List
 Define this parameter in the request URI.
 embeds
 BirdsEyeViewMapOverlayEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BirdsEyeViewMapOverlayOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BirdsEyeViewMapOverlayModel
 Properties
 NameTypeOptimized FiltersAttributes
 BirdsEyeViewMapOverlayID
 Integer
 EqualTo
 Primary Key
 BirdsEyeViewMapID
 Integer
 EqualTo
 BirdsEyeViewOverlayID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 BirdsEyeViewMap
 BirdsEyeViewMapModel
 BirdsEyeViewOverlay
 BirdsEyeViewOverlayModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BirdsEyeViewMapOverlayID": 1,
 "BirdsEyeViewMapID": 2,
 "BirdsEyeViewOverlayID": 3,
 "CreateDate": "2026-04-29T15:56:22.8440064-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:56:22.8440064-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## BirdsEyeViewMapSettings

BirdsEyeViewMapSe...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ActiveSettings
 BirdsEyeViewMap
 CreateUser
 DefaultBirdsEyeViewOverlay
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 BirdsEyeViewMapSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BirdsEyeViewMapSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BirdsEyeViewMapSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 BirdsEyeViewMapSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BirdsEyeViewMapSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BirdsEyeViewMapSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 BirdsEyeViewMapSettingID
 Integer
 EqualTo
 Primary Key
 BirdsEyeViewMapID
 Integer
 IsActive
 Boolean
 EqualTo
 BirdsEyeViewMapPinSize
 eBirdsEyeViewMapPinSizes
 ShapeTransparency
 Integer
 ShapeFillColorHex
 String
 BirdsEyeViewMapOutline
 eBirdsEyeViewMapOutlines
 DefaultBirdsEyeViewOverlayID
 Integer
 EqualTo
 DoubleClickAction
 ePrefBEVDoubleClickAction
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 BirdsEyeViewMap
 BirdsEyeViewMapModel
 DefaultBirdsEyeViewOverlay
 BirdsEyeViewOverlayModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BirdsEyeViewMapSettingID": 1,
 "BirdsEyeViewMapID": 2,
 "IsActive": true,
 "ShapeTransparency": 4,
 "ShapeFillColorHex": "sample string 5",
 "DefaultBirdsEyeViewOverlayID": 6,
 "CreateUserID": 7,
 "CreateDate": "2026-04-29T15:56:23.0019816-04:00",
 "UpdateUserID": 9,
 "UpdateDate": "2026-04-29T15:56:23.0019816-04:00",
 "ConcurrencyID": 11,
 "MetaTag": "sample string 13"
 }
]

---

## BirdsEyeViewMaps

BirdsEyeViewMaps
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BackgroundImageFile
 BirdsEyeViewHoverScriptLineItems
 BirdsEyeViewMapProperties
 BirdsEyeViewMapShapes
 BirdsEyeViewMapShapesWithOverlay
 BirdsEyeViewMapUsers
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 BirdsEyeViewMaps Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BirdsEyeViewMaps?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BirdsEyeViewMapFilterFields List
 Define this parameter in the request URI.
 embeds
 BirdsEyeViewMapEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BirdsEyeViewMapOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BirdsEyeViewMapModel
 Properties
 NameTypeOptimized FiltersAttributes
 BirdsEyeViewMapID
 Integer
 EqualTo
, 
 NotEqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 BackgroundType
 eBirdsEyeViewMapBackgroundType
 BirdsEyeViewMapType
 eBirdsEyeViewMapTypes
 EqualTo
 BirdsEyeViewOverlays
 BirdsEyeViewOverlayModel
 BirdsEyeViewMapOverlays
 BirdsEyeViewMapOverlayModel
 BackgroundImageID
 Integer
 EqualTo
 BackgroundWidth
 Integer
 BackgroundHeight
 Integer
 OverlayTextScript
 String
 OverlayTextFontFamily
 String
 OverlayTextFontSize
 Decimal
 OverlayTextFontIsBold
 Boolean
 OverlayTextFontIsItalic
 Boolean
 OverlayTextFontIsUnderlined
 Boolean
 OverlayTextFontIsStrikeThru
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 BackgroundImageFile
 FileModel
 BirdsEyeViewMapProperties
 BirdsEyeViewMapPropertyModel
 BirdsEyeViewMapUsers
 BirdsEyeViewMapUserModel
 BirdsEyeViewHoverScriptLineItems
 BirdsEyeViewHoverScriptLineItemModel
 BirdsEyeViewMapShapes
 BirdsEyeViewMapShapeModel
 BirdsEyeViewMapSettings
 BirdsEyeViewMapSettingModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BirdsEyeViewMapID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "BackgroundImageID": 4,
 "BackgroundWidth": 5,
 "BackgroundHeight": 6,
 "OverlayTextScript": "sample string 7",
 "OverlayTextFontFamily": "sample string 8",
 "OverlayTextFontSize": 9.0,
 "OverlayTextFontIsBold": true,
 "OverlayTextFontIsItalic": true,
 "OverlayTextFontIsUnderlined": true,
 "OverlayTextFontIsStrikeThru": true,
 "CreateDate": "2026-04-29T15:56:33.5226228-04:00",
 "CreateUserID": 16,
 "UpdateDate": "2026-04-29T15:56:33.5226228-04:00",
 "UpdateUserID": 18,
 "ConcurrencyID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## BirdsEyeViewOverlays

BirdsEyeViewOverl...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BirdsEyeViewOverlayItems
 BirdsEyeViewOverlayUsers
 CreateUser
 GetByPost
 QuickSearch
 Search
 SetSortOrders
 UpdateUser
 Rent Manager Web API Reference
 BirdsEyeViewOverlays Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BirdsEyeViewOverlays?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BirdsEyeViewOverlayFilterFields List
 Define this parameter in the request URI.
 embeds
 BirdsEyeViewOverlayEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BirdsEyeViewOverlayOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BirdsEyeViewOverlayModel
 Properties
 NameTypeOptimized FiltersAttributes
 BirdsEyeViewOverlayID
 Integer
 EqualTo
, 
 NotEqualTo
, 
 In
 Primary Key
 BirdsEyeViewMaps
 BirdsEyeViewMapModel
 BirdsEyeViewMapOverlays
 BirdsEyeViewMapOverlayModel
 BirdsEyeViewOverlaySystemTemplateID
 eBirdsEyeViewOverlayTemplates
 EqualTo
 Read Only
 IsActive
 Boolean
 EqualTo
 Name
 String
 EqualTo
 Description
 String
 IsShowAsOfDate
 Boolean
 IsShowToDate
 Boolean
 IsShowFloorsFilter
 Boolean
 IsShowPropertyFilter
 Boolean
 IsOverrideHoverScript
 Boolean
 FormulaToEvaluate
 String
 FormulaResultDataType
 eBirdsEyeViewOverlayFormulaResultDataType
 DisplayText
 String
 SubHeadingText
 String
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 OverlayType
 eBirdsEyeViewOverlayType
 ResultComparisonType
 eBirdsEyeViewOverlayTemplateResultComparisonType
 CreateUser
 UserModel
 UpdateUser
 UserModel
 BirdsEyeViewOverlayItems
 BirdsEyeViewOverlayItemModel
 BirdsEyeViewOverlayUsers
 BirdsEyeViewOverlayUserModel
 BirdsEyeViewHoverScriptLineItems
 BirdsEyeViewHoverScriptLineItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BirdsEyeViewOverlayID": 1,
 "IsActive": true,
 "Name": "sample string 3",
 "Description": "sample string 4",
 "IsShowAsOfDate": true,
 "IsShowToDate": true,
 "IsShowFloorsFilter": true,
 "IsShowPropertyFilter": true,
 "IsOverrideHoverScript": true,
 "FormulaToEvaluate": "sample string 10",
 "DisplayText": "sample string 11",
 "SubHeadingText": "sample string 12",
 "SortOrder": 13,
 "CreateDate": "2026-04-29T15:56:33.68411-04:00",
 "CreateUserID": 15,
 "UpdateDate": "2026-04-29T15:56:33.68411-04:00",
 "UpdateUserID": 17,
 "ConcurrencyID": 18,
 "OverlayType": "System",
 "MetaTag": "sample string 20"
 }
]

---

## BlueMoonSignableDocuments

BlueMoonSignableD...
 Retrieve Collection
 Retrieve Instance
 BlueMoonSigners
 GetByPost
 LeaseAttachment
 QuickSearch
 Search
 Rent Manager Web API Reference
 BlueMoonSignableDocuments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BlueMoonSignableDocuments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BlueMoonSignableDocumentFilterFields List
 Define this parameter in the request URI.
 embeds
 BlueMoonSignableDocumentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BlueMoonSignableDocumentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BlueMoonSignableDocumentModel
 Properties
 NameTypeOptimized FiltersAttributes
 BlueMoonSignableDocumentID
 Integer
 In
 Primary Key
 BlueMoonESignatureID
 Integer
 LeaseAttachmentID
 Integer
 HistoryID
 Int32
 DateInitiated
 DateTime
 SignatureStatus
 eBlueMoonSignableDocumentStatus
 ExpirationDate
 DateTime
 RepresentativeName
 String
 RepresentativePhone
 String
 RepresentativeEmail
 String
 InitiatedByUserID
 Integer
 DateCompleted
 DateTime
 CompletedByUserID
 Int32
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 InitiatedByUser
 UserModel
 CompletedByUser
 UserModel
 LeaseAttachment
 LeaseRenewalAttachmentModel
 BlueMoonSigners
 BlueMoonSignerModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BlueMoonSignableDocumentID": 1,
 "BlueMoonESignatureID": 2,
 "LeaseAttachmentID": 3,
 "HistoryID": 1,
 "DateInitiated": "2026-04-29T15:56:33.859501-04:00",
 "ExpirationDate": "2026-04-29T15:56:33.859501-04:00",
 "RepresentativeName": "sample string 4",
 "RepresentativePhone": "sample string 5",
 "RepresentativeEmail": "sample string 6",
 "InitiatedByUserID": 7,
 "DateCompleted": "2026-04-29T15:56:33.859501-04:00",
 "CompletedByUserID": 1,
 "CreateDate": "2026-04-29T15:56:33.859501-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:56:33.859501-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## BudgetAnnualComments

BudgetAnnualComme...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 GLAccount
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 BudgetAnnualComments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET BudgetAnnualComments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BudgetAnnualCommentFilterFields List
 Define this parameter in the request URI.
 embeds
 BudgetAnnualCommentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BudgetAnnualCommentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BudgetAnnualCommentModel
 Properties
 NameTypeOptimized FiltersAttributes
 BudgetAnnualCommentID
 Integer
 EqualTo
, 
 In
 Primary Key
 BudgetYear
 Integer
 EqualTo
 GLAccountID
 Integer
 EqualTo
 EntityID
 Integer
 EqualTo
 Comment
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 GLAccount
 GLAccountModel
 Property
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BudgetAnnualCommentID": 1,
 "BudgetYear": 2,
 "GLAccountID": 3,
 "EntityID": 4,
 "Comment": "sample string 5",
 "CreateDate": "2026-04-29T15:56:34.032666-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:56:34.032666-04:00",
 "UpdateUserID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## Budgets

Budgets
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BudgetAnnualComment
 CreateUser
 GetByPost
 GLAccount
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 Budgets Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Budgets?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 BudgetFilterFields List
 Define this parameter in the request URI.
 embeds
 BudgetEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 BudgetOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
BudgetModel
 Properties
 NameTypeOptimized FiltersAttributes
 BudgetID
 Integer
 EqualTo
, 
 In
 Primary Key
 BudgetYear
 Integer
 EqualTo
 BudgetMonth
 eMonth
 EqualTo
, 
 In
 PropertyID
 Integer
 EqualTo
, 
 In
 EntityID
 (DEPRECATED) As of 1/11/2020
 replaced by PropertyID
 Integer
 EqualTo
 GLAccountID
 Integer
 EqualTo
 Comment
 String
 Amount
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 Property
 PropertyModel
 GLAccount
 GLAccountModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "BudgetID": 1,
 "BudgetYear": 2,
 "PropertyID": 3,
 "EntityID": 4,
 "GLAccountID": 5,
 "Comment": "sample string 6",
 "Amount": 7.0,
 "CreateDate": "2026-04-29T15:56:34.1788562-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:56:34.1788562-04:00",
 "UpdateUserID": 11,
 "MetaTag": "sample string 13"
 }
]

---

## CamAmortizations

CamAmortizations
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CamAmortizationAdjustments
 CamAmortizationChangeHistory
 CamAmortizationLeases
 CreateUser
 GetByPost
 GLAccount
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 CamAmortizations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CamAmortizations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 CamAmortizationFilterFields List
 Define this parameter in the request URI.
 embeds
 CamAmortizationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CamAmortizationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 CamAmortizationGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CamAmortizationModel
 Properties
 NameTypeOptimized FiltersAttributes
 CamAmortizationID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 GLAccountID
 Integer
 Type
 eCamAmortizationType
 Amount
 Decimal
 StartDate
 DateTime
 NumPeriods
 Integer
 PeriodType
 eCamAmortizationDatePeriod
 InternalNote
 String
 TenantNote
 String
 IsCanceled
 Boolean
 CancelationReason
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 GLAccount
 GLAccountModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CamAmortizationLeases
 CamAmortizationLeaseModel
 CamAmortizationAdjustments
 CamAmortizationAdjustmentModel
 CamAmortizationChangeHistory
 CamAmortizationChangeHistoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CamAmortizationID": 1,
 "PropertyID": 2,
 "GLAccountID": 3,
 "Amount": 4.0,
 "StartDate": "2026-04-29T15:56:34.3714434-04:00",
 "NumPeriods": 6,
 "InternalNote": "sample string 7",
 "TenantNote": "sample string 8",
 "IsCanceled": true,
 "CancelationReason": "sample string 10",
 "CreateDate": "2026-04-29T15:56:34.3714434-04:00",
 "CreateUserID": 12,
 "UpdateDate": "2026-04-29T15:56:34.3714434-04:00",
 "UpdateUserID": 14,
 "MetaTag": "sample string 17"
 }
]

---

## ChargeEscalations

ChargeEscalations
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeEscalationDetails
 ChargeType
 CreateUser
 GetByPost
 LeaseRenewal
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ChargeEscalations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ChargeEscalations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ChargeEscalationFilterFields List
 Define this parameter in the request URI.
 embeds
 ChargeEscalationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ChargeEscalationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ChargeEscalationModel
 Properties
 NameTypeOptimized FiltersAttributes
 ChargeEscalationID
 Integer
 EqualTo
, 
 In
 Primary Key
 LeaseRenewalID
 Integer
 EqualTo
 ChargeTypeID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ChargeEscalationDetails
 ChargeEscalationDetailModel
 LeaseRenewal
 LeaseRenewalModel
 ChargeType
 ChargeTypeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ChargeEscalationID": 1,
 "LeaseRenewalID": 2,
 "ChargeTypeID": 3,
 "CreateDate": "2026-04-29T15:56:34.5469911-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:56:34.5469911-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## ChargeTypes

ChargeTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 GetFromAllLocations
 GLAccount
 InventoryItems
 MergeChargeTypes
 QuickSearch
 RecurringChargeTypesForRentRoll
 RentRollRecurringChargeTypes
 Search
 UpdateUser
 Rent Manager Web API Reference
 ChargeTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ChargeTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ChargeTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 ChargeTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ChargeTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ChargeTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ChargeTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ChargeTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 GLAccountID
 Integer
 EqualTo
 DefaultAmount
 Decimal
 EqualTo
 IsProrated
 Boolean
 IsCam
 Boolean
 IsActive
 Boolean
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 GLAccount
 GLAccountModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 InventoryItems
 InventoryItemModel
 EpaySettings
 EpaySettingChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ChargeTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## Charges

Charges
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Allocations
 ChargeType
 ConvertChargeToCredit
 CreateUser
 GetByPost
 GetFromAllLocations
 Job
 Jobs
 ManagementFeeHistoryTransactions
 Property
 QuickSearch
 Search
 TenantBill
 TenantCheck
 Unit
 UpdateUser
 Rent Manager Web API Reference
 Charges Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Charges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ChargeFilterFields List
 Define this parameter in the request URI.
 embeds
 ChargeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ChargeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ChargeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ChargeID
 Integer
 EqualTo
, 
 In
 ID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountID
 Integer
 EqualTo
, 
 In
 JobID
 Integer
 AccountType
 eAccountType
 EqualTo
 Read Only
 Reference
 String
 Comment
 String
 EqualTo
 Amount
 Decimal
 TransactionDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Job
 JobModel
 TransactionType
 eTransactionType
 Calculated Field
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 ChargeTypeID
 Integer
 EqualTo
, 
 NotEqualTo
, 
 In
 AmountAllocated
 Decimal
 IsFullyAllocated
 Boolean
 EqualTo
 Read Only
 IsSecurityDepositPriorToGLStartDate
 Boolean
 AccrualDebitID
 Integer
 AccrualCreditID
 Integer
 TenantBillID
 Integer
 Read Only
 TenantCheckID
 Integer
 Read Only
 Property
 PropertyModel
 Unit
 UnitModel
 ChargeType
 ChargeTypeModel
 Allocations
 AllocationModel
 TenantBill
 BillModel
 TenantCheck
 CheckModel
 ReservationTransaction
 ReservationTransactionModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ManagementFeeHistoryTransactions
 ManagementFeeHistoryTransactionModel
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ChargeID": 2,
 "ID": 2,
 "AccountID": 3,
 "JobID": 4,
 "Reference": "sample string 5",
 "Comment": "sample string 6",
 "Amount": 7.0,
 "TransactionDate": "2026-04-29T15:56:34.8663366-04:00",
 "CreateDate": "2026-04-29T15:56:34.8663366-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:34.8663366-04:00",
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

---

## ChartOfAccountsMappedAccounts

ChartOfAccountsMa...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChartOfAccountsMapping
 ChartOfAccountsMappingLinks
 CreateUser
 GetByPost
 ParentChartOfAccountsMappedAccount
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ChartOfAccountsMappedAccounts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ChartOfAccountsMappedAccounts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ChartOfAccountsMappedAccountFilterFields List
 Define this parameter in the request URI.
 embeds
 ChartOfAccountsMappedAccountEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ChartOfAccountsMappedAccountOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ChartOfAccountsMappedAccountModel
 Properties
 NameTypeOptimized FiltersAttributes
 ChartOfAccountsMappedAccountID
 Integer
 EqualTo
 Primary Key
 ChartOfAccountsMappingID
 Integer
 EqualTo
 ParentChartOfAccountsMappedAccountID
 Integer
 EqualTo
 Name
 String
 Description
 String
 Reference
 String
 GLAccountTypeID
 eGeneralLedgerAccountType
 EqualTo
 SortOrder
 Integer
 Generation
 Integer
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ChartOfAccountsMapping
 ChartOfAccountsMappingModel
 ParentChartOfAccountsMappedAccount
 ChartOfAccountsMappedAccountModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ChartOfAccountsMappingLinks
 ChartOfAccountsMappingLinkModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ChartOfAccountsMappedAccountID": 1,
 "ChartOfAccountsMappingID": 2,
 "ParentChartOfAccountsMappedAccountID": 3,
 "Name": "sample string 4",
 "Description": "sample string 5",
 "Reference": "sample string 6",
 "SortOrder": 7,
 "Generation": 8,
 "CreateDate": "2026-04-29T15:56:35.0432851-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:35.0432851-04:00",
 "UpdateUserID": 12,
 "ConcurrencyID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## ChartOfAccountsMappings

ChartOfAccountsMa...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChartOfAccountsMappedAccounts
 ChartOfAccountsMappingLinks
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ChartOfAccountsMappings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ChartOfAccountsMappings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ChartOfAccountsMappingFilterFields List
 Define this parameter in the request URI.
 embeds
 ChartOfAccountsMappingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ChartOfAccountsMappingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ChartOfAccountsMappingModel
 Properties
 NameTypeOptimized FiltersAttributes
 ChartOfAccountsMappingID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ChartOfAccountsMappingLinks
 ChartOfAccountsMappingLinkModel
 ChartOfAccountsMappedAccounts
 ChartOfAccountsMappedAccountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ChartOfAccountsMappingID": 1,
 "Name": "sample string 2"
 }
]

---

## CheckDetails

CheckDetails
 Retrieve Collection
 Retrieve Instance
 BillDetail
 Check
 GetByPost
 InvoiceDetail
 Job
 Owner
 OwnerPayment
 Property
 QuickSearch
 Reconciliation
 Search
 Tenant
 Unit
 Rent Manager Web API Reference
 CheckDetails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CheckDetails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CheckDetailFilterFields List
 Define this parameter in the request URI.
 embeds
 CheckDetailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CheckDetailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CheckDetailModel
 Properties
 NameTypeOptimized FiltersAttributes
 CheckID
 Integer
 EqualTo
, 
 In
, 
 NotIn
 CheckDetailID
 Integer
 EqualTo
, 
 In
 Primary Key
 BillDetailID
 Integer
 EqualTo
 TransactionDate
 DateTime
 Read Only
 GLAccountID
 Integer
 JobID
 Integer
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 OwnerPaymentID
 Integer
 EqualTo
 Is1099
 Boolean
 Amount
 Decimal
 Comment
 String
 ReconcileID
 Integer
 EqualTo
 ElectronicReconcileID
 Integer
 EqualTo
 ReversalReconcileID
 Integer
 EqualTo
 ReversalElectronicReconcileID
 Integer
 EqualTo
 SortOrder
 Integer
 AccountID
 Integer
 EqualTo
 IsCreditHeader
 Boolean
 Read Only
 InvoiceDetailID
 Integer
 EqualTo
, 
 In
 IsBillable
 Boolean
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Check
 CheckModel
 AccountType
 eAccountType
 Read Only
 Tenant
 TenantModel
 Owner
 OwnerModel
 InvoiceDetail
 InvoiceDetailModel
 Property
 PropertyModel
 Unit
 UnitModel
 Job
 JobModel
 BillDetail
 BillDetailModel
 Markup
 String
 IsPrimaryOwner
 Boolean
 OwnerPayment
 PaymentModel
 EpayTransactionInformationDetail
 EpayTransactionInformationDetailModel
 Reconciliation
 ReconciliationModel
 GLAccount
 GLAccountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CheckID": 1,
 "CheckDetailID": 2,
 "InvoiceDetailID": 20
 }
]

---

## CheckListItems

CheckListItems
 Retrieve Collection
 Retrieve Instance
 AssignedToUser
 ClosedByUser
 CreateUser
 GetByPost
 MakeReadyTemplateItem
 QuickSearch
 Search
 ServiceManagerIssue
 ServiceManagerIssueTemplate
 ServiceManagerMemorizedIssue
 ServiceManagerRecurringIssue
 UpdateUser
 Rent Manager Web API Reference
 CheckListItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CheckListItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CheckListItemFilterFields List
 Define this parameter in the request URI.
 embeds
 CheckListItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CheckListItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CheckListItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 CheckListItemID
 Integer
 EqualTo
, 
 In
 Primary Key
 Description
 String
 EntityTypeID
 eCheckListItemRelatedObjectTypes
 EqualTo
 EntityKeyID
 Integer
 EqualTo
, 
 In
 ServiceManagerIssueID
 Integer
 ServiceManagerMemorizedIssueID
 Integer
 ServiceManagerRecurringIssueID
 Integer
 ServiceManagerIssueTemplateID
 Integer
 AssignedToUserID
 Integer
 EqualTo
 IsClosed
 Boolean
 EqualTo
 ClosedDate
 DateTime
 ClosedByUserID
 Integer
 EqualTo
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 UpdateUser
 UserModel
 CreateUser
 UserModel
 AssignedToUser
 UserModel
 ClosedByUser
 UserModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 ServiceManagerMemorizedIssue
 ServiceManagerMemorizedIssueModel
 ServiceManagerRecurringIssue
 ServiceManagerRecurringIssueModel
 ServiceManagerIssueTemplate
 ServiceManagerIssueTemplateModel
 MakeReadyTemplateItem
 MakeReadyTemplateItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CheckListItemID": 1,
 "Description": "sample string 2",
 "EntityKeyID": 3,
 "ServiceManagerIssueID": 4,
 "ServiceManagerMemorizedIssueID": 5,
 "ServiceManagerRecurringIssueID": 6,
 "ServiceManagerIssueTemplateID": 7,
 "AssignedToUserID": 8,
 "IsClosed": true,
 "ClosedDate": "2026-04-29T15:56:35.5381902-04:00",
 "ClosedByUserID": 10,
 "SortOrder": 11,
 "CreateDate": "2026-04-29T15:56:35.5381902-04:00",
 "CreateUserID": 13,
 "UpdateDate": "2026-04-29T15:56:35.5381902-04:00",
 "UpdateUserID": 15,
 "ConcurrencyID": 16,
 "MetaTag": "sample string 18"
 }
]

---

## CheckListTemplates

CheckListTemplate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CheckListTemplateItems
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 CheckListTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CheckListTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CheckListTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 CheckListTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CheckListTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CheckListTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 CheckListTemplateID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsActive
 Boolean
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CheckListTemplateItems
 CheckListTemplateItemModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CheckListTemplateID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "CreateDate": "2026-04-29T15:56:35.699512-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:56:35.699512-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## Checks

Checks
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Attachments
 Bank
 BillsPaid
 CheckDetails
 CreateUser
 CreditCard
 DisburseAmount
 FileAttachments
 GetByPost
 LoanPayable
 Owner
 OwnerCheckHistory
 PartialUpdate
 Prospect
 QuickSearch
 Reconciliation
 Reversal
 Search
 Tenant
 TenantBill
 TenantCharge
 UpdateUser
 UploadAttachment
 Vendor
 Rent Manager Web API Reference
 Checks Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Checks?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 CheckFilterFields List
 Define this parameter in the request URI.
 embeds
 CheckEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CheckOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 CheckGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CheckModel
 Properties
 NameTypeOptimized FiltersAttributes
 ID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountID
 Integer
 EqualTo
, 
 In
 AccountType
 eAccountType
 Reference
 String
 Comment
 String
 Amount
 Decimal
 TransactionDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 TransactionType
 eTransactionType
 Calculated Field
 EcheckEmail
 String
 BankID
 Integer
 EqualTo
 Payee
 String
 PayeeAddress
 String
 PrintState
 eCheckPrintState
 EqualTo
, 
 In
 ReconcileID
 Integer
 ElectronicReconcileID
 Integer
 ReversalReconcileID
 Integer
 ReversalElectronicReconcileID
 Integer
 ReversalDate
 DateTime
 IsReversed
 Boolean
 Read Only
, 
 Calculated Field
 IsXICheck
 Boolean
 IsNachaCheck
 Boolean
 TenantBillID
 Integer
 Read Only
 LoanPayableID
 Integer
 EqualTo
 TenantChargeID
 Integer
 Read Only
 TenantBill
 BillModel
 TenantCharge
 ChargeModel
 CheckDetails
 CheckDetailModel
 Attachments
 (DEPRECATED) As of 11/15/2021
 replaced by FileAttachments
 FileAttachmentModel
 LoanPayable
 LoanPayableModel
 FileAttachments
 FileAttachmentModel
 Account
 AccountModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 Vendor
 VendorModel
 EcheckCheck
 EcheckCheckModel
 OwnerCheckHistory
 OwnerCheckHistoryModel
 Bank
 BankModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Reconciliation
 ReconciliationModel
 CreditCard
 CreditCardModel
 EpayTransactionInformation
 EpayTransactionInformationModel
 AvidPayPayment
 AvidPayPaymentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ID": 1,
 "AccountID": 2,
 "Reference": "sample string 3"
 }
]

---

## CodeStageColors

CodeStageColors
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 CodeStageColors Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CodeStageColors?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CodeStageColorFilterFields List
 Define this parameter in the request URI.
 embeds
 CodeStageColorEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CodeStageColorOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CodeStageColorModel
 Properties
 NameTypeOptimized FiltersAttributes
 CodeStageColorID
 Integer
 EqualTo
 Primary Key
 StageNumber
 Integer
 EqualTo
 ColorHexValue
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CodeStageColorID": 1,
 "StageNumber": 2,
 "ColorHexValue": "sample string 3",
 "CreateDate": "2026-04-29T15:56:36.0794493-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:56:36.0794493-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## Colors

Colors
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ColorEntityTypes
 EntityTypes
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 Colors Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Colors?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ColorFilterFields List
 Define this parameter in the request URI.
 embeds
 ColorEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ColorOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ColorModel
 Properties
 NameTypeOptimized FiltersAttributes
 ColorID
 Integer
 EqualTo
, 
 NotEqualTo
 Primary Key
 Name
 String
 EqualTo
 HexValue
 String
 EqualTo
 EntityTypes
 (DEPRECATED) As of 11/19/2021
 replaced by ColorEntityTypes
 ColorEntityTypeModel
 ColorEntityTypes
 ColorEntityTypeModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ColorID": 2,
 "Name": "sample string 3",
 "HexValue": "sample string 4"
 }
]

---

## CommercialRecoverableExpenses

CommercialRecover...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AmountPropertyUserDefinedField
 AmountTenantUserDefinedField
 CamReconciliations
 ChargeType
 CommercialRecoverableExpenseAutoGLAccounts
 GetByPost
 GLAccounts
 PostCamReconciliations
 QuickSearch
 RecurringCharge
 Search
 TenantDivisionUserDefinedField
 Rent Manager Web API Reference
 CommercialRecoverableExpenses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CommercialRecoverableExpenses?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CommercialRecoverableExpenseFilterFields List
 Define this parameter in the request URI.
 embeds
 CommercialRecoverableExpenseEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CommercialRecoverableExpenseModel
 Properties
 NameTypeOptimized FiltersAttributes
 CommercialRecoverableExpenseID
 Integer
 EqualTo
 Primary Key
 ChargeTypeID
 Integer
 EqualTo
 TenantDivisionMethod
 eCamAutoDivisionMethodCustomer
 TenantDivisionUserDefinedFieldID
 Integer
 EqualTo
 TenantIsProRataShare
 Boolean
 TenantIsAdministrativeFees
 Boolean
 AmountDivisionMethod
 eCamAutoDivisionMethodAmount
 AmountPropertyUserDefinedFieldID
 Integer
 EqualTo
 AmountTenantUserDefinedFieldID
 Integer
 EqualTo
 AmountCommercialRecoverableExpenseMethod
 eCamExpenseMethodAmount
 AmountMonths
 Integer
 AmountIsIncrease
 Boolean
 AmountIncreasePercentage
 Decimal
 AmountBasis
 eBasis
 AmountSpecific
 Decimal
 IsSubtractBaseAmount
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ChargeType
 ChargeTypeModel
 TenantDivisionUserDefinedField
 UserDefinedFieldModel
 AmountPropertyUserDefinedField
 UserDefinedFieldModel
 AmountTenantUserDefinedField
 UserDefinedFieldModel
 GLAccounts
 (DEPRECATED) As of 3/22/2022
 replaced by CommercialRecoverableExpenseAutoGLAccounts.GLAccount
 GLAccountModel
 RecurringCharge
 RecurringChargeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CommercialRecoverableExpenseAutoGLAccounts
 CommercialRecoverableExpenseAutoGLAccountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CommercialRecoverableExpenseID": 1,
 "ChargeTypeID": 2,
 "TenantDivisionUserDefinedFieldID": 3,
 "TenantIsProRataShare": true,
 "TenantIsAdministrativeFees": true,
 "AmountPropertyUserDefinedFieldID": 6,
 "AmountTenantUserDefinedFieldID": 7,
 "AmountMonths": 8,
 "AmountIsIncrease": true,
 "AmountIncreasePercentage": 10.0,
 "AmountSpecific": 11.0,
 "IsSubtractBaseAmount": true,
 "CreateDate": "2026-04-29T15:56:36.3869833-04:00",
 "CreateUserID": 14,
 "UpdateDate": "2026-04-29T15:56:36.3869833-04:00",
 "UpdateUserID": 16,
 "ConcurrencyID": 17,
 "MetaTag": "sample string 19"
 }
]

---

## Committees

Committees
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CommitteeMembers
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 Committees Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Committees?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CommitteeFilterFields List
 Define this parameter in the request URI.
 embeds
 CommitteeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CommitteeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CommitteeModel
 Properties
 NameTypeOptimized FiltersAttributes
 CommitteeID
 Integer
 Primary Key
 Name
 String
 DisplayName
 String
 Description
 String
 IsActive
 Boolean
 CanViewArchitecturalRequestsOnTWA
 Boolean
 CanVoteArchitecturalRequestsOnTWA
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CommitteeMembers
 CommitteeMemberModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CommitteeID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "Description": "sample string 4",
 "IsActive": true,
 "CanViewArchitecturalRequestsOnTWA": true,
 "CanVoteArchitecturalRequestsOnTWA": true,
 "CreateDate": "2026-04-29T15:56:36.5625972-04:00",
 "UpdateDate": "2026-04-29T15:56:36.5625972-04:00",
 "CreateUserID": 10,
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## CommunityEventTypes

CommunityEventTyp...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CommunityEventCommunityEventType
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 CommunityEventTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CommunityEventTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CommunityEventTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 CommunityEventTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CommunityEventTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CommunityEventTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 CommunityEventTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IsActive
 Boolean
 EqualTo
 Color
 String
 CreateUserID
 Integer
 CreateDate
 DateTime
 UpdateUserID
 Integer
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CommunityEventCommunityEventTypes
 CommunityEventCommunityEventTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CommunityEventTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true,
 "Color": "sample string 5",
 "CreateUserID": 6,
 "CreateDate": "2026-04-29T15:56:36.7356472-04:00",
 "UpdateUserID": 8,
 "UpdateDate": "2026-04-29T15:56:36.7356472-04:00",
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## CommunityEvents

CommunityEvents
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Color
 CommunityEventCommunityEventType
 CreateUser
 GetByPost
 Property
 UpdateUser
 Rent Manager Web API Reference
 CommunityEvents Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CommunityEvents?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CommunityEventFilterFields List
 Define this parameter in the request URI.
 embeds
 CommunityEventEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CommunityEventOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CommunityEventModel
 Properties
 NameTypeOptimized FiltersAttributes
 CommunityEventID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentCommunityEventID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 StartDate
 DateTime
 EndDate
 DateTime
 Subject
 String
 Description
 String
 Location
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 IsRecurring
 Boolean
 Read Only
 ColorID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Property
 PropertyModel
 CommunityEventCommunityEventType
 CommunityEventCommunityEventTypeModel
 Color
 ColorModel
 CommunityEventRecurrencePatternOfRecurrence
 eAppointmentRecurrencePatternTypes
 CommunityEventRecurrenceFromDate
 DateTime
 CommunityEventRecurrenceToDate
 DateTime
 CommunityEventRecurrenceValue1
 Integer
 CommunityEventRecurrenceValue2
 Integer
 CommunityEventRecurrenceDatePostedThru
 DateTime
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CommunityEventID": 1,
 "ParentCommunityEventID": 2,
 "PropertyID": 3,
 "StartDate": "2026-04-29T15:56:36.8974948-04:00",
 "EndDate": "2026-04-29T15:56:36.8974948-04:00",
 "Subject": "sample string 6",
 "Description": "sample string 7",
 "Location": "sample string 8",
 "CreateDate": "2026-04-29T15:56:36.8974948-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:36.8974948-04:00",
 "UpdateUserID": 12,
 "IsRecurring": true,
 "ColorID": 14,
 "CommunityEventRecurrencePatternOfRecurrence": "Daily",
 "CommunityEventRecurrenceFromDate": "2026-04-29T15:56:36.8974948-04:00",
 "CommunityEventRecurrenceToDate": "2026-04-29T15:56:36.8974948-04:00",
 "CommunityEventRecurrenceValue1": 17,
 "CommunityEventRecurrenceValue2": 18,
 "CommunityEventRecurrenceDatePostedThru": "2026-04-29T15:56:36.8974948-04:00",
 "MetaTag": "sample string 21"
 }
]

---

## ConsumerPriceIndex

ConsumerPriceInde...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ConsumerPriceIndex Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ConsumerPriceIndex?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ConsumerPriceIndexFilterFields List
 Define this parameter in the request URI.
 embeds
 ConsumerPriceIndexEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ConsumerPriceIndexOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ConsumerPriceIndexModel
 Properties
 NameTypeOptimized FiltersAttributes
 CPIID
 Integer
 EqualTo
 Primary Key
 Year
 Integer
 Month
 Integer
 IndexValue
 Decimal
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CPIID": 1,
 "Year": 2,
 "Month": 3,
 "IndexValue": 4.0,
 "CreateDate": "2026-04-29T15:56:37.0588548-04:00",
 "UpdateDate": "2026-04-29T15:56:37.0588548-04:00",
 "CreateUserID": 7,
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## ContactTypes

ContactTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ContactTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ContactTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ContactTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 ContactTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ContactTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ContactTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ContactTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 ParentType
 eContactTypeRelatedObjectTypes
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ContactTypeID": 1,
 "Name": "sample string 2"
 }
]

---

## Contacts

Contacts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 BatchEmailContacts
 ContactType
 Copy
 GetByPost
 Image
 PhoneNumbers
 QuickSearch
 QuickSearchByType
 Search
 UploadImage
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 Rent Manager Web API Reference
 Contacts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Contacts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ContactFilterFields List
 Define this parameter in the request URI.
 embeds
 ContactEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ContactOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ContactModel
 Properties
 NameTypeOptimized FiltersAttributes
 ContactID
 Integer
 EqualTo
, 
 In
 Primary Key
 FirstName
 String
 LastName
 String
 MiddleName
 String
 IsActive
 Boolean
 EqualTo
 IsPrimary
 Boolean
 ContactType
 ContactTypeModel
 ContactTypeID
 Integer
 EqualTo
 DateOfBirth
 DateTime
 FederalTaxID
 String
 Calculated Field
 Comment
 String
 Email
 String
 License
 String
 Vehicle
 String
 ImageID
 Integer
 EqualTo
 IsShowOnBill
 Boolean
 EqualTo
 Employer
 String
 ApplicantType
 eApplicantType
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 AnnualIncome
 Decimal
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 ParentType
 eContactRelatedObjectTypes
 EqualTo
 PhoneNumbers
 PhoneNumberModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Vendor
 VendorModel
 Owner
 OwnerModel
 OwnerProspect
 OwnerProspectModel
 UserDefinedValues
 UserDefinedValueModel
 Addresses
 AddressModel
 Image
 ImageModel
 CommitteeMembers
 CommitteeMemberModel
 BoardMemberTerms
 BoardMemberTermModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Email": "sample string 11"
 }
]

---

## CreditCardReconciliations

CreditCardReconci...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Attachments
 CreditCard
 DisburseAmount
 GetByPost
 QuickSearch
 ReconcileJournals
 ReconcileTransactions
 ReconciliationChanges
 ReportFile
 SaveForLater
 Search
 SetSingleReconcileStatus
 Transactions
 UploadAttachment
 Rent Manager Web API Reference
 CreditCardReconciliations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CreditCardReconciliations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 CreditCardReconciliationFilterFields List
 Define this parameter in the request URI.
 embeds
 CreditCardReconciliationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CreditCardReconciliationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 CreditCardReconciliationGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CreditCardReconciliationModel
 Properties
 NameTypeOptimized FiltersAttributes
 CreditCardReconciliationID
 Integer
 EqualTo
 Primary Key
 CreditCardID
 Integer
 EqualTo
, 
 In
 ReconciliationDate
 DateTime
 PreviouslyReconciledAmount
 Decimal
 Read Only
 Charges
 Decimal
 Read Only
 Credits
 Decimal
 Read Only
 Goal
 Decimal
 IsSavedForLater
 Boolean
 EqualTo
 IsReconciled
 Boolean
 EqualTo
 Read Only
 IsAuto
 Boolean
 IsManual
 Boolean
 Comment
 String
 IsElectronic
 Boolean
 Read Only
 ReportFileID
 Integer
 EqualTo
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Read Only
 ReconcileTransactions
 ReconcileTransactionModel
 Required (create)
 Transactions
 CreditCardRegisterTransactionModel
 Read Only
 CreditCard
 CreditCardModel
 ReconcileJournals
 ReconcileJournalModel
 ReconciliationChanges
 ReconciliationChangeModel
 Attachments
 FileAttachmentModel
 ReconciliationChargeDetails
 ReconciliationChargeDetailModel
 Required (create)
, 
 Calculated Field
 ReportFile
 FileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CreditCardReconciliationID": 2,
 "CreditCardID": 3,
 "ReconciliationDate": "2026-04-29T15:56:37.5224606-04:00",
 "PreviouslyReconciledAmount": 5.0,
 "Charges": 6.0,
 "Credits": 7.0,
 "Goal": 8.0,
 "IsSavedForLater": true,
 "IsReconciled": true,
 "IsAuto": true,
 "IsManual": true,
 "Comment": "sample string 13",
 "IsElectronic": true,
 "ReportFileID": 15,
 "CreateDate": "2026-04-29T15:56:37.5224606-04:00",
 "CreateUserID": 17,
 "UpdateDate": "2026-04-29T15:56:37.5224606-04:00",
 "UpdateUserID": 19,
 "ConcurrencyID": 20,
 "MetaTag": "sample string 22"
 }
]

---

## CreditCardTransactions

CreditCardTransac...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Attachments
 CreateUser
 CreditCard
 CreditCardTransactionDetails
 DisburseAmount
 GetByPost
 QuickSearch
 Reconciliation
 Search
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 CreditCardTransactions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CreditCardTransactions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CreditCardTransactionFilterFields List
 Define this parameter in the request URI.
 embeds
 CreditCardTransactionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CreditCardTransactionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CreditCardTransactionModel
 Properties
 NameTypeOptimized FiltersAttributes
 ID
 Integer
 EqualTo
 Primary Key
 CreditCardID
 Integer
 EqualTo
, 
 In
 ReconcileID
 Integer
 EqualTo
 ElectronicReconcileID
 Integer
 EqualTo
 AccountID
 Integer
 EqualTo
 AccountType
 eAccountType
 Reference
 String
 Comment
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 TransactionType
 eTransactionType
 Calculated Field
 CreditCard
 GLAccountModel
 CreditCardTransactionDetails
 CreditCardTransactionDetailModel
 Required (create)
 Account
 (DEPRECATED) As of 11/3/2020
 replaced by Vendor
 VendorModel
 Vendor
 VendorModel
 Attachments
 FileAttachmentModel
 Reconciliation
 ReconciliationModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ID": 1,
 "CreditCardID": 2,
 "Reference": "sample string 6"
 }
]

---

## CreditCards

CreditCards
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Balance
 ClearedBalance
 CreditCardAccountNumberGLAccounts
 CreditCardRegisterTransactions
 CreditCardTransactions
 ElectronicReconcileTransactions
 GetByPost
 QuickSearch
 Reconciliations
 Search
 Rent Manager Web API Reference
 CreditCards Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CreditCards?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CreditCardFilterFields List
 Define this parameter in the request URI.
 embeds
 CreditCardEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CreditCardOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CreditCardModel
 Properties
 NameTypeOptimized FiltersAttributes
 CreditCardID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentCreditCardID
 Integer
 EqualTo
 Name
 String
 EqualTo
 Description
 String
 Reference
 String
 EqualTo
 IsActive
 Boolean
 SortOrder
 Integer
 Generation
 Integer
 Balance
 Decimal
 Requires Embed (Balance)
 ClearedBalance
 Decimal
 Requires Embed (ClearedBalance)
 CreditCardTransactions
 CreditCardTransactionModel
 CreditCardAccountNumberGLAccounts
 CreditCardAccountNumberGLAccountModel
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CreditCardID": 1,
 "ParentCreditCardID": 2,
 "Name": "sample string 3",
 "Description": "sample string 4",
 "Reference": "sample string 5",
 "IsActive": true,
 "SortOrder": 7,
 "Generation": 8,
 "Balance": 1.0,
 "ClearedBalance": 1.0,
 "CreateDate": "2026-04-29T15:56:37.906328-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:37.906328-04:00",
 "UpdateUserID": 12,
 "ConcurrencyID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## Credits

Credits
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Allocations
 ChargeType
 ClearAllocations
 ConvertCreditToCharge
 CreateUser
 GetByPost
 Preallocations
 Property
 Prospect
 QuickSearch
 Search
 Tenant
 Unit
 UpdateUser
 Rent Manager Web API Reference
 Credits Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Credits?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CreditFilterFields List
 Define this parameter in the request URI.
 embeds
 CreditEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CreditOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CreditModel
 Properties
 NameTypeOptimized FiltersAttributes
 CreditID
 Integer
 EqualTo
, 
 In
 ID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountID
 Integer
 EqualTo
, 
 In
 ChargeTypeID
 Integer
 EqualTo
, 
 In
 TransactionType
 eTransactionType
 Calculated Field
 ReversalType
 eReversalType
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 TransactionDate
 DateTime
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 AmountAllocated
 Decimal
 IsFullyAllocated
 Boolean
 IsSecurityDepositPriorToGLStartDate
 Boolean
 IsRecordingCashReallocations
 Boolean
 IsRecordingCashPreallocationsAsLiability
 Boolean
 IsRecordingAccrualPrepayments
 Boolean
 ReversalDate
 DateTime
 AccountType
 eAccountType
 Reference
 String
 Read Only
 Comment
 String
 Amount
 Decimal
 Allocations
 AllocationModel
 Preallocations
 PreallocationModel
 ChargeType
 ChargeTypeModel
 ReservationTransaction
 ReservationTransactionModel
 Unit
 UnitModel
 Property
 PropertyModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CreditID": 2,
 "ID": 2,
 "AccountID": 3,
 "ChargeTypeID": 4,
 "TransactionType": "Credit",
 "CreateDate": "2026-04-29T15:56:38.0949542-04:00",
 "UpdateDate": "2026-04-29T15:56:38.0949542-04:00",
 "CreateUserID": 7,
 "UpdateUserID": 8,
 "TransactionDate": "2026-04-29T15:56:38.0949542-04:00",
 "PropertyID": 10,
 "UnitID": 11,
 "AmountAllocated": 12.0,
 "IsFullyAllocated": true,
 "IsSecurityDepositPriorToGLStartDate": true,
 "IsRecordingCashReallocations": true,
 "IsRecordingCashPreallocationsAsLiability": true,
 "IsRecordingAccrualPrepayments": true,
 "ReversalDate": "2026-04-29T15:56:38.0949542-04:00",
 "Reference": "sample string 18",
 "Comment": "sample string 19",
 "Amount": 20.0,
 "MetaTag": "sample string 22"
 }
]

---

## Current

Current
 BirdsEyeViewMapUserSettings
 CustomServiceManagerIssueLayout
 CustomServiceManagerIssueLayoutLinkedFields
 CustomServiceManagerIssueLayoutSections
 CustomServiceManagerIssueLayoutUserDefinedFields
 EffectiveUserPrivileges
 EffectiveUserReports
 FinancialReportWriterReports
 LetterTemplates
 Locations
 PersonalAddressBookEntries
 Preferences
 Privileges
 Reports
 ReportWriterReports
 ServiceManagerIssueLayoutInUse
 User
 Rent Manager Web API Reference
 Current
 Please select a resource on the left to view more information
 Request Information
 Url
 GET Current

---

## CustomForms

CustomForms
 Retrieve Collection
 Retrieve Instance
 CreateUser
 DefaultOwners
 DefaultProperties
 GetByPost
 GetFromAllLocations
 SystemReport
 UpdateUser
 Rent Manager Web API Reference
 CustomForms Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET CustomForms?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CustomFormFilterFields List
 Define this parameter in the request URI.
 embeds
 CustomFormEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 CustomFormOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CustomFormModel
 Properties
 NameTypeOptimized FiltersAttributes
 CustomFormID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 CustomFormTypeID
 eCustomFormType
 EqualTo
 Description
 String
 SystemReportID
 eReport
 IsSystemReport
 Boolean
 TemplateID
 eCustomFormTemplates
 IsVPOReady
 Boolean
 IsXiForm
 Boolean
 Read Only
 IsConvertedFromXIForm
 Boolean
 Read Only
 IsTypeDefault
 Boolean
 EqualTo
 IsTypeSystemDefault
 Boolean
 EqualTo
 Read Only
 IsSuppressPageNumbers
 Boolean
 IsSuppressPageFooter
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 SystemReport
 ReportModel
 DefaultOwners
 OwnerCustomFormDefaultModel
 DefaultProperties
 PropertyCustomFormDefaultModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CustomFormID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsSystemReport": true,
 "IsVPOReady": true,
 "IsXiForm": true,
 "IsConvertedFromXIForm": true,
 "IsTypeDefault": true,
 "IsTypeSystemDefault": true,
 "IsSuppressPageNumbers": true,
 "IsSuppressPageFooter": true,
 "CreateDate": "2026-04-29T15:56:38.3868933-04:00",
 "CreateUserID": 13,
 "UpdateDate": "2026-04-29T15:56:38.3868933-04:00",
 "UpdateUserID": 15,
 "ConcurrencyID": 16,
 "MetaTag": "sample string 18"
 }
]

---

## CustomReports

CustomReports
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Parameters
 Rent Manager Web API Reference
 CustomReports Retrieve Collection
 (DEPRECATED) As of 9/6/2019
 replaced by ReportWriterReports
 Retrieve a collection of items.
 Request Information
 Url
 GET CustomReports?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 CustomReportFilterFields List
 Define this parameter in the request URI.
 embeds
 CustomReportEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
CustomReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 CustomReportID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 ReportType
 eReportType
 EqualTo
 Menu
 eCustomReportMenuType
 Title
 String
 TitleFormat
 String
 SubTitle
 String
 SubTitleFormat
 String
 FieldSeparator
 eCustomReportRowSeparator
 FileID
 Integer
 EqualTo
 BeforeReport
 String
 BeforeRecord
 String
 AfterRecord
 String
 Orientation
 eCustomReportOrientation
 MarginTop
 Decimal
 MarginRight
 Decimal
 MarginBottom
 Decimal
 MarginLeft
 Decimal
 Description
 String
 SortOrder
 Integer
 IsSystem
 Boolean
 EqualTo
 PaperSize
 eCustomReportPaperSize
 Height
 Decimal
 Width
 Decimal
 ColorMethod
 eCustomReportColorMethod
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "CustomReportID": 1,
 "Name": "sample string 2",
 "ReportType": "NotSet",
 "Title": "sample string 3",
 "TitleFormat": "sample string 4",
 "SubTitle": "sample string 5",
 "SubTitleFormat": "sample string 6",
 "FileID": 7,
 "BeforeReport": "sample string 8",
 "BeforeRecord": "sample string 9",
 "AfterRecord": "sample string 10",
 "MarginTop": 11.0,
 "MarginRight": 12.0,
 "MarginBottom": 13.0,
 "MarginLeft": 14.0,
 "Description": "sample string 15",
 "SortOrder": 16,
 "IsSystem": true,
 "Height": 18.0,
 "Width": 19.0,
 "CreateDate": "2026-04-29T15:56:38.546969-04:00",
 "UpdateDate": "2026-04-29T15:56:38.546969-04:00",
 "CreateUserID": 22,
 "UpdateUserID": 23,
 "MetaTag": "sample string 25"
 }
]

---

## DefaultChargeSettings

DefaultChargeSett...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 DefaultChargeSettingExcludedChargeTypes
 DefaultChargeSetups
 GetByPost
 Property
 QuickSearch
 Search
 UpdateDefaultChargeSetups
 Rent Manager Web API Reference
 DefaultChargeSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET DefaultChargeSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 DefaultChargeSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 DefaultChargeSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 DefaultChargeSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
DefaultChargeSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 DefaultChargeSettingID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Int32
 EqualTo
, 
 In
 IsActive
 Boolean
 IsRecurringCharge
 Boolean
 EqualTo
 Calculated Field
 IsOneTimeCharge
 Boolean
 EqualTo
 IsDeterminePastPosting
 Boolean
 PastPostingPostDay
 Integer
 IsExcludeInheritedCharges
 Boolean
 IsPostZeroCharges
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 DefaultChargeSetups
 DefaultChargeSetupModel
 DefaultChargeSettingExcludedChargeTypes
 DefaultChargeSettingExcludedChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "DefaultChargeSettingID": 1,
 "PropertyID": 1,
 "IsActive": true,
 "IsOneTimeCharge": true,
 "IsDeterminePastPosting": true,
 "PastPostingPostDay": 6,
 "IsExcludeInheritedCharges": true,
 "IsPostZeroCharges": true,
 "CreateDate": "2026-04-29T15:56:38.7199332-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:38.7199332-04:00",
 "UpdateUserID": 12,
 "ConcurrencyID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## Deposits

Deposits
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Bank
 CreateUser
 DepositOtherItems
 DepositPayments
 DepositStep3Items
 DisburseAmount
 FileAttachments
 GetByPost
 GetFromAllLocations
 LinkedPayments
 LinkPayments
 MakeDeposit
 OtherItems
 QuickSearch
 Search
 UnlinkPayments
 UpdateUser
 Rent Manager Web API Reference
 Deposits Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Deposits?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 DepositFilterFields List
 Define this parameter in the request URI.
 embeds
 DepositEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 DepositOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
DepositModel
 Properties
 NameTypeOptimized FiltersAttributes
 DepositID
 Integer
 EqualTo
, 
 In
 Primary Key
 BankID
 Integer
 EqualTo
, 
 In
 Comment
 String
 TransactionDate
 DateTime
 EqualTo
 Amount
 Decimal
 ReconcileID
 Integer
 EqualTo
 ElectronicReconcileID
 Integer
 EqualTo
 DepositTypeID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Bank
 BankModel
 DepositPayments
 DepositPaymentModel
 Required (create)
 DepositStep3Items
 DepositDetailModel
 Required (create)
 LinkedPayments
 CrossDepositPaymentModel
 Required (create)
 OtherItems
 DepositDetailModel
 Required (create)
 FileAttachments
 FileAttachmentModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "DepositID": 1,
 "BankID": 2,
 "Comment": "sample string 3",
 "TransactionDate": "2026-04-29T15:56:38.8973929-04:00",
 "Amount": 5.0,
 "ReconcileID": 6,
 "ElectronicReconcileID": 7,
 "DepositTypeID": 8,
 "CreateDate": "2026-04-29T15:56:38.8973929-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:38.8973929-04:00",
 "UpdateUserID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## DocumentPackets

DocumentPackets
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 DocumentPacketProperties
 DocumentPacketRoles
 DocumentPacketUsers
 Documents
 GetByPost
 Properties
 QuickSearch
 Roles
 Search
 Users
 Rent Manager Web API Reference
 DocumentPackets Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET DocumentPackets?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 DocumentPacketFilterFields List
 Define this parameter in the request URI.
 embeds
 DocumentPacketEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 DocumentPacketOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
DocumentPacketModel
 Properties
 NameTypeOptimized FiltersAttributes
 DocumentPacketID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 Description
 String
 DocumentPacketType
 eDocumentPacketType
 EqualTo
 ParentType
 eDocumentPacketRelatedObjectTypes
 EqualTo
 SortOrder
 Integer
 IsAllUsers
 Boolean
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Documents
 DocumentPacketDocumentModel
 DocumentPacketProperties
 DocumentPacketPropertyModel
 DocumentPacketUsers
 DocumentPacketUserModel
 DocumentPacketRoles
 DocumentPacketRoleModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "DocumentPacketID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## Download

Download
 Retrieve Instance
 Retrieve Instance
 Rent Manager Web API Reference
 Download Retrieve Instance
 Allows a file do be downloaded using it's encrypted key.
 Request Information
 Url
 GET Download/{token}
 Parameters
 NameTypeAdditional information
 token
 String
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.

---

## EmailChains

EmailChains
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 EmailSentItems
 GetByPost
 QuickSearch
 Search
 SentUser
 Rent Manager Web API Reference
 EmailChains Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EmailChains?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EmailChainFilterFields List
 Define this parameter in the request URI.
 embeds
 EmailChainEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EmailChainOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EmailChainModel
 Properties
 NameTypeOptimized FiltersAttributes
 EmailChainID
 Integer
 EqualTo
, 
 In
 Primary Key
 IsPrivate
 Boolean
 EqualTo
 SentUserID
 Integer
 EqualTo
, 
 In
 ChainGuid
 Guid
 EqualTo
 Read Only
 SentUser
 UserModel
 EmailSentItems
 EmailSentItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EmailChainID": 1,
 "IsPrivate": true,
 "SentUserID": 3,
 "ChainGuid": "7afa586c-b919-4921-b8cb-39dedf089121",
 "MetaTag": "sample string 6"
 }
]

---

## EmailSentFolders

EmailSentFolders
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 EmailSentItems
 GetByPost
 ParentSentEmailFolder
 QuickSearch
 Search
 SentEmailItems
 Rent Manager Web API Reference
 EmailSentFolders Retrieve Collection
 (DEPRECATED) As of 9/22/2022
 Retrieve a collection of items.
 Request Information
 Url
 GET EmailSentFolders?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EmailSentFolderFilterFields List
 Define this parameter in the request URI.
 embeds
 EmailSentFolderEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EmailSentFolderModel
 Properties
 NameTypeOptimized FiltersAttributes
 EmailSentFolderID
 Integer
 Primary Key
 FolderName
 String
 FolderLevel
 Integer
 ParentEmailSentFolderID
 Integer
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 EmailSentItems
 EmailSentItemModel
 ParentSentEmailFolder
 EmailSentFolderModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EmailSentFolderID": 1,
 "FolderName": "sample string 2",
 "FolderLevel": 3,
 "ParentEmailSentFolderID": 4,
 "UpdateDate": "2026-04-29T15:56:39.4754976-04:00",
 "ConcurrencyID": 6,
 "MetaTag": "sample string 8"
 }
]

---

## EmailSentItems

EmailSentItems
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BCCEmailContacts
 BCCEmailRecipients
 CCEmailContacts
 CCEmailRecipients
 CreateUser
 EmailChain
 EmailSentItemAttachments
 GetByPost
 QuickSearch
 SaveIncomingEmail
 Search
 ToEmailContacts
 ToEmailRecipients
 UpdateHistoryCategory
 Rent Manager Web API Reference
 EmailSentItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EmailSentItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EmailSentItemFilterFields List
 Define this parameter in the request URI.
 embeds
 EmailSentItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EmailSentItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EmailSentItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 EmailSentItemID
 Integer
 EqualTo
, 
 In
, 
 GreaterThan
 Primary Key
, 
 Read Only
 FromAddress
 String
 Read Only
 Subject
 String
 Read Only
 EmailSentDate
 DateTime
 Read Only
 MessageBody
 String
 Read Only
 DisplayName
 String
 Read Only
 IsSentIndividually
 Boolean
 Read Only
 IsOutgoing
 Boolean
 Read Only
 UserID
 (DEPRECATED) As of 9/21/2022
 Integer
 Read Only
 CreateUserID
 Integer
 Read Only
 User
 (DEPRECATED) As of 1/5/2022
 replaced by CreateUser
 UserModel
 CreateUser
 UserModel
 IsHTML
 Boolean
 Read Only
 EmailSentFolderID
 (DEPRECATED) As of 9/22/2022
 Integer
 EqualTo
 EmailChainID
 Integer
 EqualTo
 EntityKeyID
 Integer
 EqualTo
 EntityTypeID
 eEntityType
 EqualTo
 ToEmailContacts
 EmailSentItemRecipientModel
 CCEmailContacts
 EmailSentItemRecipientModel
 BCCEmailContacts
 EmailSentItemRecipientModel
 EmailSentItemAttachments
 EmailSentItemAttachmentModel
 EmailChain
 EmailChainModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EmailSentItemID": 1,
 "FromAddress": "sample string 2",
 "Subject": "sample string 3",
 "EmailSentDate": "2026-04-29T15:56:39.6368443-04:00",
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
]

---

## Emails

Emails
 Reply
 SendEmail
 SendPrivateEmail
 SmtpSystemSettings
 Rent Manager Web API Reference
 Emails
 Please select a resource on the left to view more information
 Request Information
 Url
 GET Emails

---

## Estimates

Estimates
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApprovedRejectedByUser
 CreateUser
 Details
 EstimateDetails
 GetByPost
 History
 HistoryNotes
 HistorySystemNotes
 Invoice
 Owner
 Property
 Prospect
 PurchaseOrder
 QuickSearch
 Search
 ServiceManagerIssue
 TaxType
 Tenant
 UnlinkInvoice
 UnlinkPurchaseOrder
 UnlinkServiceManagerIssue
 UpdateUser
 Rent Manager Web API Reference
 Estimates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Estimates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 EstimateFilterFields List
 Define this parameter in the request URI.
 embeds
 EstimateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EstimateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 EstimateGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EstimateModel
 Properties
 NameTypeOptimized FiltersAttributes
 EstimateID
 Integer
 EqualTo
 Primary Key
 Reference
 String
 EstimateNumber
 String
 AccountID
 Integer
 EqualTo
 SalesRepresentativeID
 Integer
 EqualTo
 IssueDate
 DateTime
 IsActive
 Boolean
 PropertyID
 Integer
 EqualTo
, 
 In
 TaxRate
 Decimal
 IsTaxable
 Boolean
 TaxTypeID
 Integer
 EqualTo
 Interest
 Integer
 TotalValue
 Decimal
 Read Only
 Comments
 String
 FromAddress
 String
 ToAddress
 String
 Status
 eEstimateStatus
 EqualTo
 ApprovedRejectedBy
 Integer
 EqualTo
 Read Only
 ApprovedRejectedOn
 DateTime
 Read Only
 OwnerSignature
 String
 Read Only
 ExpirationDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TaxType
 TaxTypeModel
 History
 HistoryModel
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryNotes
 HistoryNoteModel
 EstimateDetails
 EstimateDetailModel
 PurchaseOrderID
 Integer
 PurchaseOrder
 PurchaseOrderModel
 InvoiceID
 Integer
 Invoice
 InvoiceModel
 ServiceManagerIssueID
 Integer
 ServiceManagerIssue
 ServiceManagerIssueModel
 AccountType
 eAccountType
 Read Only
 Property
 PropertyModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 ApprovedRejectedByUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EstimateID": 1,
 "Reference": "sample string 2",
 "EstimateNumber": "sample string 3",
 "AccountID": 4,
 "SalesRepresentativeID": 5,
 "IssueDate": "2026-04-29T15:56:39.8917503-04:00",
 "IsActive": true,
 "PropertyID": 7,
 "TaxRate": 8.0,
 "IsTaxable": true,
 "TaxTypeID": 10,
 "Interest": 11,
 "TotalValue": 12.0,
 "Comments": "sample string 13",
 "FromAddress": "sample string 14",
 "ToAddress": "sample string 15",
 "ApprovedRejectedBy": 16,
 "ApprovedRejectedOn": "2026-04-29T15:56:39.8917503-04:00",
 "OwnerSignature": "sample string 17",
 "ExpirationDate": "2026-04-29T15:56:39.8917503-04:00",
 "CreateDate": "2026-04-29T15:56:39.8917503-04:00",
 "CreateUserID": 19,
 "UpdateDate": "2026-04-29T15:56:39.8917503-04:00",
 "UpdateUserID": 21,
 "PurchaseOrderID": 22,
 "InvoiceID": 23,
 "ServiceManagerIssueID": 24,
 "MetaTag": "sample string 26"
 }
]

---

## EvictionOutcomes

EvictionOutcomes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 EvictionOutcomes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EvictionOutcomes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EvictionOutcomeFilterFields List
 Define this parameter in the request URI.
 embeds
 EvictionOutcomeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EvictionOutcomeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EvictionOutcomeModel
 Properties
 NameTypeOptimized FiltersAttributes
 EvictionOutcomeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 IsActive
 Boolean
 Type
 eEvictionOutComeType
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 DisplayValue
 String
 Read Only
, 
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EvictionOutcomeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true,
 "SortOrder": 5,
 "CreateDate": "2026-04-29T15:56:40.0848308-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:56:40.0848308-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "DisplayValue": "-sample string 2",
 "MetaTag": "sample string 13"
 }
]

---

## EvictionReasons

EvictionReasons
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 EvictionReasons Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EvictionReasons?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EvictionReasonFilterFields List
 Define this parameter in the request URI.
 embeds
 EvictionReasonEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EvictionReasonOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EvictionReasonModel
 Properties
 NameTypeOptimized FiltersAttributes
 EvictionReasonID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 IsActive
 Boolean
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EvictionReasonID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true,
 "SortOrder": 5,
 "CreateDate": "2026-04-29T15:56:40.2305682-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:56:40.2305682-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## EvictionWorkflowStageFields

EvictionWorkflowS...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 EvictionWorkflowStage
 GetByPost
 QuickSearch
 Search
 UserDefinedField
 Rent Manager Web API Reference
 EvictionWorkflowStageFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EvictionWorkflowStageFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EvictionWorkflowStageFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 EvictionWorkflowStageFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EvictionWorkflowStageFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EvictionWorkflowStageFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 EvictionWorkflowStageFieldID
 Integer
 EqualTo
 Primary Key
 EvictionWorkflowStageID
 Integer
 EqualTo
 Label
 String
 EvictionSystemFieldID
 eEvictionSystemField
 ColumnSpan
 Integer
 InputFieldType
 eEvictionFieldInputFieldTypes
 Script
 String
 UserDefinedFieldID
 Integer
 EqualTo
 IsReadOnly
 Boolean
 SortOrder
 Integer
 EvictionWorkflowStage
 EvictionWorkflowStageModel
 UserDefinedField
 UserDefinedFieldModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EvictionWorkflowStageFieldID": 1,
 "EvictionWorkflowStageID": 2,
 "Label": "sample string 3",
 "EvictionSystemFieldID": "NotSet",
 "ColumnSpan": 4,
 "InputFieldType": "Text",
 "Script": "sample string 5",
 "UserDefinedFieldID": 6,
 "IsReadOnly": true,
 "SortOrder": 8,
 "MetaTag": "sample string 10"
 }
]

---

## EvictionWorkflowStages

EvictionWorkflowS...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 EvictionWorkflowStageFields
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 EvictionWorkflowStages Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EvictionWorkflowStages?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EvictionWorkflowStageFilterFields List
 Define this parameter in the request URI.
 embeds
 EvictionWorkflowStageEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EvictionWorkflowStageOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EvictionWorkflowStageModel
 Properties
 NameTypeOptimized FiltersAttributes
 EvictionWorkflowStageID
 Integer
 EqualTo
 Primary Key
 EvictionWorkflowID
 Integer
 EqualTo
 Name
 String
 LetterTemplateID
 Integer
 EqualTo
 Instructions
 String
 IsLegal
 Boolean
 SortOrder
 Integer
 EvictionWorkflowStageFields
 EvictionWorkflowStageFieldModel
 PropertyIDs
 Integer
 Read Only
, 
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EvictionWorkflowStageID": 1,
 "EvictionWorkflowID": 2,
 "Name": "sample string 3",
 "LetterTemplateID": 4,
 "Instructions": "sample string 5",
 "IsLegal": true,
 "SortOrder": 7,
 "PropertyIDs": [],
 "MetaTag": "sample string 9"
 }
]

---

## EvictionWorkflows

EvictionWorkflows
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 EvictionWorkflowStages
 EvictionWorkflowStopPartialPaymentsStage
 EvictionWorkflowStopPaymentsStage
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 EvictionWorkflows Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET EvictionWorkflows?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EvictionWorkflowFilterFields List
 Define this parameter in the request URI.
 embeds
 EvictionWorkflowEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EvictionWorkflowOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EvictionWorkflowModel
 Properties
 NameTypeOptimized FiltersAttributes
 EvictionWorkflowID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsActive
 Boolean
 StopPartialPaymentsStageID
 Integer
 EqualTo
 StopPaymentsStageID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 EvictionWorkflowStopPartialPaymentsStage
 EvictionWorkflowStageModel
 EvictionWorkflowStopPaymentsStage
 EvictionWorkflowStageModel
 EvictionWorkflowStages
 EvictionWorkflowStageModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EvictionWorkflowID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "StopPartialPaymentsStageID": 4,
 "StopPaymentsStageID": 5,
 "CreateDate": "2026-04-29T15:56:40.7410472-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:56:40.7410472-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## Evictions

Evictions
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 EvictionOutcome
 EvictionReason
 EvictionWorkflow
 EvictionWorkflowStage
 GetByPost
 History
 HistoryCalls
 HistoryEmails
 HistoryEvictionStage
 HistoryNotes
 HistorySystemNotes
 HistoryVisits
 QuickSearch
 Search
 Tenant
 UpdateUser
 UserDefinedValues
 Rent Manager Web API Reference
 Evictions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Evictions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 EvictionFilterFields List
 Define this parameter in the request URI.
 embeds
 EvictionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 EvictionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
EvictionModel
 Properties
 NameTypeOptimized FiltersAttributes
 EvictionID
 Integer
 EqualTo
, 
 In
 Primary Key
 CustomerID
 Integer
 EqualTo
, 
 In
 EvictionReasonID
 Integer
 EqualTo
 StartDate
 DateTime
 EvictionWorkflowID
 Integer
 EqualTo
 CurrentStageID
 Integer
 EqualTo
 CurrentStageStartDate
 DateTime
 NoticeDate
 DateTime
 DateSentToAttorney
 DateTime
 EvictionFiledDate
 DateTime
 CaseNumber
 String
 CourtDate
 DateTime
 JudgementAmount
 Decimal
 VacateDate
 DateTime
 WritDate
 DateTime
 LockoutDate
 DateTime
 EvictionOutcomeID
 Integer
 EqualTo
, 
 LessThanOrNull
, 
 HasValue
 CloseDate
 DateTime
 IsClosed
 Boolean
 Read Only
, 
 Calculated Field
 OriginalIsStopPay
 Boolean
 OriginalIsDoNotChargeLateFees
 Boolean
 OriginalIsDoNotAcceptChecks
 Boolean
 OriginalIsDoNotAllowTWAPayments
 Boolean
 OriginalIsDontSendARAutomationNotifications
 Boolean
 OriginalIsDoNotAcceptPartialPayments
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 Tenant
 TenantModel
 EvictionOutcome
 EvictionOutcomeModel
 EvictionReason
 EvictionReasonModel
 EvictionWorkflow
 EvictionWorkflowModel
 EvictionWorkflowStage
 EvictionWorkflowStageModel
 UpdateUser
 UserModel
 UserDefinedValues
 UserDefinedValueModel
 History
 HistoryModel
 HistoryNotes
 HistoryNoteModel
 HistoryEmails
 HistoryEmailModel
 HistoryVisits
 HistoryVisitModel
 HistoryCalls
 HistoryCallModel
 HistoryEvictionStage
 HistoryEvictionStageModel
 EvictionWorkflowStageHistory
 EvictionWorkflowStageHistoryModel
 HistorySystemNotes
 HistorySystemNoteModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "EvictionID": 1,
 "CustomerID": 2,
 "EvictionReasonID": 3,
 "StartDate": "2026-04-29T15:56:40.9024309-04:00",
 "EvictionWorkflowID": 5,
 "CurrentStageID": 6,
 "CurrentStageStartDate": "2026-04-29T15:56:40.9024309-04:00",
 "NoticeDate": "2026-04-29T15:56:40.9024309-04:00",
 "DateSentToAttorney": "2026-04-29T15:56:40.9024309-04:00",
 "EvictionFiledDate": "2026-04-29T15:56:40.9024309-04:00",
 "CaseNumber": "sample string 8",
 "CourtDate": "2026-04-29T15:56:40.9024309-04:00",
 "JudgementAmount": 9.0,
 "VacateDate": "2026-04-29T15:56:40.9024309-04:00",
 "WritDate": "2026-04-29T15:56:40.9024309-04:00",
 "LockoutDate": "2026-04-29T15:56:40.9024309-04:00",
 "EvictionOutcomeID": 10,
 "CloseDate": "2026-04-29T15:56:40.9024309-04:00",
 "IsClosed": true,
 "OriginalIsStopPay": true,
 "OriginalIsDoNotChargeLateFees": true,
 "OriginalIsDoNotAcceptChecks": true,
 "OriginalIsDoNotAllowTWAPayments": true,
 "OriginalIsDontSendARAutomationNotifications": true,
 "OriginalIsDoNotAcceptPartialPayments": true,
 "CreateDate": "2026-04-29T15:56:40.9024309-04:00",
 "CreateUserID": 20,
 "UpdateDate": "2026-04-29T15:56:40.9024309-04:00",
 "UpdateUserID": 22,
 "ConcurrencyID": 23,
 "MetaTag": "sample string 25"
 }
]

---

## FilterSummary

FilterSummary
 Retrieve Instance
 Rent Manager Web API Reference
 FilterSummary Retrieve Instance
 Request Information
 Url
 GET FilterSummary
 Response Information
 Model
FilterSummaryModel
 Properties
 NameTypeOptimized FiltersAttributes
 FilterID
 Integer
 Name
 String
 Description
 String
 TargetID
 eRegisterType
 IsSystem
 Boolean
 UserID
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json
 Sample:
 Sample not available.

---

## FinancialReportWriterReports

FinancialReportWr...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 FinancialReportWriterReportChartProviderOption
 FinancialReportWriterReportParameters
 FinancialReportWriterReportRoles
 FinancialReportWriterReportUsers
 GetByPost
 QuickSearch
 RunFinancialReportWriterReport
 RunFinancialReportWriterReportSeparate
 Search
 UpdateUser
 Rent Manager Web API Reference
 FinancialReportWriterReports Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET FinancialReportWriterReports?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 FinancialReportWriterReportFilterFields List
 Define this parameter in the request URI.
 embeds
 FinancialReportWriterReportEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 FinancialReportWriterReportOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
FinancialReportWriterReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 FinancialReportWriterReportID
 Integer
 EqualTo
, 
 In
 Primary Key
 MenuOption
 eReportWriterMenuType
 Name
 String
 EqualTo
 Description
 String
 ExecuteBeforeReportScript
 String
 PaperSize
 eCustomReportPaperSize
 Orientation
 eCustomReportOrientation
 MarginTop
 Decimal
 MarginBottom
 Decimal
 MarginLeft
 Decimal
 MarginRight
 Decimal
 IsSystem
 Boolean
 EqualTo
 Read Only
 IsAllUsers
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (ReportWriterReportUsers)
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 FinancialReportWriterReportParameters
 FinancialReportWriterReportParameterSummaryModel
 FinancialReportWriterReportUsers
 FinancialReportWriterReportUserModel
 FinancialReportWriterReportRoles
 FinancialReportWriterReportRoleModel
 FinancialReportWriterReportChartProviderOption
 FinancialReportWriterReportChartProviderOptionModel
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "FinancialReportWriterReportID": 1,
 "Name": "sample string 2",
 "SortOrder": 15
 }
]

---

## Floorplans

Floorplans
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 FloorplanUnitType
 FloorplanUnitTypes
 GetByPost
 Images
 Property
 QuickSearch
 Search
 Rent Manager Web API Reference
 Floorplans Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Floorplans?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 FloorplanFilterFields List
 Define this parameter in the request URI.
 embeds
 FloorplanEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 FloorplanOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
FloorplanModel
 Properties
 NameTypeOptimized FiltersAttributes
 FloorplanID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 MarketingDescription
 String
 PropertyID
 Integer
 EqualTo
 PriceLow
 Decimal
 PriceHigh
 Decimal
 UseAssociatedPricingData
 Boolean
 Bedrooms
 Integer
 UseAssociatedBedroomData
 Boolean
 Bathrooms
 Decimal
 UseAssociatedBathroomData
 Boolean
 Property
 PropertyModel
 FloorplanUnitTypes
 FloorplanUnitTypeModel
 Images
 ImageModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "FloorplanID": 1,
 "Name": "sample string 2",
 "MarketingDescription": "sample string 3",
 "PropertyID": 4,
 "PriceLow": 5.0,
 "PriceHigh": 6.0,
 "UseAssociatedPricingData": true,
 "Bedrooms": 8,
 "UseAssociatedBedroomData": true,
 "Bathrooms": 10.0,
 "UseAssociatedBathroomData": true,
 "MetaTag": "sample string 13"
 }
]

---

## Floors

Floors
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Properties
 PropertyFloors
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 Floors Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Floors?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 FloorFilterFields List
 Define this parameter in the request URI.
 embeds
 FloorEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 FloorOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
FloorModel
 Properties
 NameTypeOptimized FiltersAttributes
 FloorID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyFloors
 PropertyFloorModel
 Properties
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "FloorID": 1,
 "Name": "sample string 2",
 "SortOrder": 3,
 "CreateDate": "2026-04-29T15:56:41.5430275-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:56:41.5430275-04:00",
 "UpdateUserID": 7,
 "MetaTag": "sample string 9"
 }
]

---

## Forecasts

Forecasts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 ForecastChargeTypes
 ForecastGLAccountPercentages
 ForecastGLAccountTypePercentages
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 Forecasts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Forecasts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ForecastFilterFields List
 Define this parameter in the request URI.
 embeds
 ForecastEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ForecastOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ForecastGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ForecastModel
 Properties
 NameTypeOptimized FiltersAttributes
 ForecastID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 IsActive
 Boolean
 ChargeAmountSourceMethod
 Integer
 IncreasePercentagePerYearMonToMon
 Decimal
 IncreasePercentagePerYearCommercial
 Decimal
 IncreasePercentagePerNewLease
 Decimal
 IncreasePercentagePerRenewal
 Decimal
 UsePreviousTenantFinalRent
 Boolean
 UseProspectMoveInDate
 Boolean
 DaysVacantMethod
 Integer
 DaysVacantSetAverage
 Integer
 UseTenantExpectedMoveOut
 Boolean
 RenewalRateMethod
 Integer
 RenewalRateSetPercentage
 Decimal
 AverageLeaseLength
 Integer
 MonthToMonthRenewalPercentage
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ForecastGLAccountPercentages
 ForecastGLAccountPercentageModel
 ForecastGLAccountTypePercentages
 ForecastGLAccountTypePercentageModel
 ForecastChargeTypes
 ForecastChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ForecastID": 1
 }
]

---

## GLAccountTypes

GLAccountTypes
 Retrieve Collection
 Retrieve Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 GLAccountTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GLAccountTypes?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 GLAccountTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 GLAccountTypeEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GLAccountTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 GLAccountTypeID
 eGeneralLedgerAccountType
 EqualTo
, 
 In
 Primary Key
 Name
 String
 ShortName
 String
 AssetLiabilityEquity
 eAssetLiabilityEquity
 Multiplier
 Integer
 SortOrder
 Integer
 InvoiceMultiplier
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Name": "sample string 1",
 "ShortName": "sample string 2",
 "Multiplier": 3,
 "InvoiceMultiplier": 5
 }
]

---

## GLAccounts

GLAccounts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CalculateAccountBalanceDisbursal
 CAMReconcileChargeType
 CAMRecoveryChargeType
 ChargeTypes
 ChartOfAccountsMappingLinks
 ChildGLAccounts
 CreateUser
 GeneralLedgerAccountType
 GetByPost
 GetData
 GetGLAccountTree
 MergeGLAccounts
 NachaODFIBank
 ParentGLAccount
 PositivePayFormat
 QuickSearch
 Search
 UpdateUser
 UserBanks
 Rent Manager Web API Reference
 GLAccounts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GLAccounts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 GLAccountFilterFields List
 Define this parameter in the request URI.
 embeds
 GLAccountEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 GLAccountOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 GLAccountGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GLAccountModel
 Properties
 NameTypeOptimized FiltersAttributes
 GLAccountID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentGLAccountID
 Integer
 EqualTo
 ParentGLAccount
 GLAccountModel
 Name
 String
 EqualTo
 Description
 String
 Reference
 String
 EqualTo
 GLAccountType
 eGeneralLedgerAccountType
 EqualTo
, 
 In
 RecoverableExpenseType
 eRecoverableExpenseType
 CAMRecoveryChargeTypeID
 Integer
 EqualTo
, 
 In
 CAMRecoveryChargeType
 ChargeTypeModel
 CAMReconcileChargeTypeID
 Integer
 EqualTo
 CAMReconcileChargeType
 ChargeTypeModel
 IsAnnualizedExpense
 Boolean
 IsActive
 Boolean
 IsEChecks
 Boolean
 IsParent
 Boolean
 EqualTo
 SortOrder
 Integer
 Generation
 Integer
 PositivePayFormatID
 Integer
 EqualTo
 NachaODFIBankID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ChildGLAccounts
 GLAccountModel
 GeneraLedgerAccountType
 (DEPRECATED) As of 12/18/2018
 replaced by GeneralLedgerAccountType
 GLAccountTypeModel
 GeneralLedgerAccountType
 GLAccountTypeModel
 ChartOfAccountsMappingLinks
 ChartOfAccountsMappingLinkModel
 UserBanks
 UserBankModel
 NachaODFIBank
 NachaODFIBankModel
 ChargeTypes
 ChargeTypeModel
 Micr
 MicrModel
 PositivePayFormat
 PositivePayFormatModel
 CreditCardAccountNumberGLAccounts
 CreditCardAccountNumberGLAccountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GLAccountID": 1,
 "ParentGLAccountID": 2,
 "Name": "sample string 3",
 "Reference": "sample string 5",
 "SortOrder": 12
 }
]

---

## GPRAutomationSchedules

GPRAutomationSche...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 GLAccountAdjustment
 GLAccountBeginningArrears
 GLAccountBeginningPrepay
 GLAccountEndingArrears
 GLAccountEndingPrepay
 GLAccountLossToLease
 GLAccountMarketRent
 GLAccountRentalIncome
 GLAccountVacancyLoss
 GPRAutomationScheduleProperties
 PropertyGroup
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 GPRAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GPRAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 GPRAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 GPRAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 GPRAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GPRAutomationScheduleModel
 GPR Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 GPRAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 PropertyGroupID
 Integer
 Name
 String
 PostingDay
 Integer
 RunDay
 Integer
 NotificationEmail
 String
 JournalComment
 String
 IncludeDetails
 Boolean
 IsActive
 Boolean
 StartDate
 DateTime
 EndDate
 DateTime
 MarketRentDate
 DateTime
 MarketRentOption
 eMarketRentDate
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 GLAccountRentalIncomeID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigRentalIncomeAccounts.GLAccountRentalIncomeID
 Integer
 EqualTo
 GLAccountMarketRentID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountMarketRentID
 Integer
 EqualTo
 GLAccountVacancyLossID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountVacancyLossID
 Integer
 EqualTo
 GLAccountLossToLeaseID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountLossToLeaseID
 Integer
 EqualTo
 GLAccountBeginningPrepayID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningPrepayID
 Integer
 EqualTo
 GLAccountEndingPrepayID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingPrepayID
 Integer
 EqualTo
 GLAccountBeginningArrearsID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningArrearsID
 Integer
 EqualTo
 GLAccountEndingArrearsID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingArrearsID
 Integer
 EqualTo
 GLAccountAdjustmentID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountAdjustmentID
 Integer
 EqualTo
 CreateUserID
 Integer
 UpdateUserID
 Integer
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyGroup
 PropertyGroupModel
 GPRAutomationScheduleProperties
 GPRAutomationSchedulePropertyModel
 Required (create)
 GLAccountRentalIncome
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigRentalIncomeAccounts.GLAccountRentalIncome
 GLAccountModel
 GLAccountMarketRent
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountMarketRent
 GLAccountModel
 GLAccountVacancyLoss
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountVacancyLoss
 GLAccountModel
 GLAccountLossToLease
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountLossToLease
 GLAccountModel
 GLAccountBeginningPrepay
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningPrepay
 GLAccountModel
 GLAccountEndingPrepay
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingPrepay
 GLAccountModel
 GLAccountBeginningArrears
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningArrears
 GLAccountModel
 GLAccountEndingArrears
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingArrears
 GLAccountModel
 GLAccountAdjustment
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountAdjustment
 GLAccountModel
 GPRPostingConfigs
 GPRPostingConfigModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GPRAutomationScheduleID": 1,
 "PropertyGroupID": 2,
 "Name": "sample string 3",
 "PostingDay": 4,
 "RunDay": 5,
 "NotificationEmail": "sample string 6",
 "JournalComment": "sample string 7",
 "IncludeDetails": true,
 "IsActive": true,
 "StartDate": "2026-04-29T15:56:51.1676264-04:00",
 "EndDate": "2026-04-29T15:56:51.1676264-04:00",
 "MarketRentDate": "2026-04-29T15:56:51.1676264-04:00",
 "LastRunDate": "2026-04-29T15:56:51.1676264-04:00",
 "NextRunDate": "2026-04-29T15:56:51.1676264-04:00",
 "GLAccountRentalIncomeID": 13,
 "GLAccountMarketRentID": 14,
 "GLAccountVacancyLossID": 15,
 "GLAccountLossToLeaseID": 16,
 "GLAccountBeginningPrepayID": 17,
 "GLAccountEndingPrepayID": 18,
 "GLAccountBeginningArrearsID": 19,
 "GLAccountEndingArrearsID": 20,
 "GLAccountAdjustmentID": 21,
 "CreateUserID": 22,
 "UpdateUserID": 23,
 "CreateDate": "2026-04-29T15:56:51.1676264-04:00",
 "UpdateDate": "2026-04-29T15:56:51.1676264-04:00",
 "ConcurrencyID": 26,
 "MetaTag": "sample string 28"
 }
]

---

## GPRPostingConfigs

GPRPostingConfigs
 Retrieve Collection
 Retrieve Instance
 GetByPost
 GLAccountAdjustment
 GLAccountBeginningArrear
 GLAccountBeginningPrepay
 GLAccountEndingArrear
 GLAccountEndingPrepay
 GLAccountLossToLease
 GLAccountMarketRent
 GLAccountVacancyLoss
 QuickSearch
 Search
 Rent Manager Web API Reference
 GPRPostingConfigs Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GPRPostingConfigs?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 GPRPostingConfigFilterFields List
 Define this parameter in the request URI.
 embeds
 GPRPostingConfigEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 GPRPostingConfigOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GPRPostingConfigModel
 Properties
 NameTypeOptimized FiltersAttributes
 GPRPostingConfigID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsDefault
 Boolean
 EqualTo
 GLAccountMarketRentID
 Integer
 EqualTo
 GLAccountVacancyLossID
 Integer
 EqualTo
 GLAccountLossToLeaseID
 Integer
 EqualTo
 GLAccountBeginningPrepayID
 Integer
 EqualTo
 GLAccountEndingPrepayID
 Integer
 EqualTo
 GLAccountBeginningArrearsID
 Integer
 EqualTo
 GLAccountEndingArrearsID
 Integer
 EqualTo
 GLAccountAdjustmentID
 Integer
 EqualTo
 IsArchived
 Boolean
 EqualTo
 GPRAutomationScheduleID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 GLAccountMarketRent
 GLAccountModel
 GLAccountVacancyLoss
 GLAccountModel
 GLAccountLossToLease
 GLAccountModel
 GLAccountBeginningPrepay
 GLAccountModel
 GLAccountEndingPrepay
 GLAccountModel
 GLAccountBeginningArrears
 GLAccountModel
 GLAccountEndingArrears
 GLAccountModel
 GLAccountAdjustment
 GLAccountModel
 GPRPostingConfigRentalIncomeAccounts
 GPRPostingConfigRentalIncomeAccountModel
 GPRPostingConfigUnitTypes
 GPRPostingConfigUnitTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GPRPostingConfigID": 1,
 "Name": "sample string 2",
 "IsDefault": true,
 "GLAccountMarketRentID": 4,
 "GLAccountVacancyLossID": 5,
 "GLAccountLossToLeaseID": 6,
 "GLAccountBeginningPrepayID": 7,
 "GLAccountEndingPrepayID": 8,
 "GLAccountBeginningArrearsID": 9,
 "GLAccountEndingArrearsID": 10,
 "GLAccountAdjustmentID": 11,
 "IsArchived": true,
 "GPRAutomationScheduleID": 13,
 "CreateDate": "2026-04-29T15:56:51.4223885-04:00",
 "CreateUserID": 15,
 "UpdateDate": "2026-04-29T15:56:51.4223885-04:00",
 "UpdateUserID": 17,
 "MetaTag": "sample string 20"
 }
]

---

## GPRPostingHistory

GPRPostingHistory
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccrualJournal
 CalculateJournals
 CashJournal
 CreateUser
 DeleteUser
 GetByPost
 GLAccountAdjustment
 GLAccountBeginningArrears
 GLAccountBeginningPrepay
 GLAccountEndingArrears
 GLAccountEndingPrepay
 GLAccountLossToLease
 GLAccountMarketRent
 GLAccountRentalIncome
 GLAccountVacancyLoss
 GPRPropertyPostingHistory
 PostGPR
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 GPRPostingHistory Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GPRPostingHistory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 GPRPostingHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 GPRPostingHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 GPRPostingHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GPRPostingHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 GPRPostingHistoryID
 Integer
 Primary Key
 FromDate
 DateTime
 ToDate
 DateTime
 PostDate
 DateTime
 MarketRentDate
 DateTime
 CashJournalID
 Integer
 CashJournal
 JournalModel
 AccrualJournalID
 Integer
 AccrualJournal
 JournalModel
 Comment
 String
 GLAccountRentalIncomeID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigRentalIncomeAccounts.GLAccountRentalIncomeID
 Integer
 GLAccountRentalIncome
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigRentalIncomeAccounts.GLAccountRentalIncome
 GLAccountModel
 GLAccountMarketRentID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountMarketRentID
 Integer
 GLAccountMarketRent
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountMarketRent
 GLAccountModel
 GLAccountVacancyLossID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountVacancyLossID
 Integer
 GLAccountVacancyLoss
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountVacancyLoss
 GLAccountModel
 GLAccountLossToLeaseID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountLossToLeaseID
 Integer
 GLAccountLossToLease
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountLossToLease
 GLAccountModel
 GLAccountBeginningPrepayID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningPrepayID
 Integer
 GLAccountBeginningPrepay
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningPrepay
 GLAccountModel
 GLAccountEndingPrepayID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingPrepayID
 Integer
 GLAccountEndingPrepay
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingPrepay
 GLAccountModel
 GLAccountBeginningArrearsID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningArrearsID
 Integer
 GLAccountBeginningArrears
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountBeginningArrears
 GLAccountModel
 GLAccountEndingArrearsID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingArrearsID
 Integer
 GLAccountEndingArrears
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountEndingArrears
 GLAccountModel
 GLAccountAdjustmentID
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountAdjustmentID
 Integer
 GLAccountAdjustment
 (DEPRECATED) As of 12/15/2025
 replaced by GPRPostingConfigs.GLAccountAdjustment
 GLAccountModel
 CreateUserID
 Integer
 CreateUser
 UserModel
 CreateDate
 DateTime
 UpdateUserID
 Integer
 UpdateUser
 UserModel
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 IsDeleted
 Boolean
 DeleteUserID
 Integer
 DeleteUser
 UserModel
 GPRPropertyPostingHistory
 GPRPropertyPostingHistoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GPRPostingHistoryID": 1,
 "FromDate": "2026-04-29T15:56:51.5999248-04:00",
 "ToDate": "2026-04-29T15:56:51.5999248-04:00",
 "PostDate": "2026-04-29T15:56:51.5999248-04:00",
 "MarketRentDate": "2026-04-29T15:56:51.5999248-04:00",
 "CashJournalID": 6,
 "AccrualJournalID": 7,
 "Comment": "sample string 8",
 "GLAccountRentalIncomeID": 9,
 "GLAccountMarketRentID": 10,
 "GLAccountVacancyLossID": 11,
 "GLAccountLossToLeaseID": 12,
 "GLAccountBeginningPrepayID": 13,
 "GLAccountEndingPrepayID": 14,
 "GLAccountBeginningArrearsID": 15,
 "GLAccountEndingArrearsID": 16,
 "GLAccountAdjustmentID": 17,
 "CreateUserID": 18,
 "CreateDate": "2026-04-29T15:56:51.5999248-04:00",
 "UpdateUserID": 20,
 "UpdateDate": "2026-04-29T15:56:51.5999248-04:00",
 "ConcurrencyID": 22,
 "IsDeleted": true,
 "DeleteUserID": 24,
 "MetaTag": "sample string 26"
 }
]

---

## GeneratedLeaseRenewals

GeneratedLeaseRen...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Accept
 BlueMoonSignableDocument
 Complete
 CompletedByUser
 CompletedByWebUser
 CreateMTM
 CreateUser
 Decline
 DeleteRenewal
 DocumentPacket
 GeneratedLeaseRenewalAttachments
 GeneratedLeaseRenewalCharges
 GeneratedLeaseRenewalLeaseTerms
 GeneratedLeaseRenewalSignableDocumentPackets
 GeneratedLeaseRenewalSignablePDFTemplateFieldValues
 GeneratedLeaseRenewalWebUsers
 GeneratedRecurringCharges
 GenerateLeaseRenewalDetails
 GenerateRenewalDetails
 GenerateRenewalOffersPublishMultiTerm
 GenerateRenewalOffersPublishSingleTerm
 GetByPost
 LeaseRenewal
 LeaseTerm
 ParentLease
 QuickSearch
 Search
 SetNoticeDate
 SignablePDFTEmplate
 SignDocument
 StatusModifiedByUser
 StatusModifiedByWebUser
 Unit
 UpdateUser
 Void
 Rent Manager Web API Reference
 GeneratedLeaseRenewals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GeneratedLeaseRenewals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 GeneratedLeaseRenewalFilterFields List
 Define this parameter in the request URI.
 embeds
 GeneratedLeaseRenewalEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 GeneratedLeaseRenewalOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GeneratedLeaseRenewalModel
 Properties
 NameTypeOptimized FiltersAttributes
 GeneratedLeaseRenewalID
 Integer
 EqualTo
, 
 In
 Primary Key
 LeaseRenewalID
 Int32
 EqualTo
 ParentLeaseID
 Integer
 EqualTo
, 
 In
 AssetID
 Int32
 UnitID
 Int32
 EqualTo
 LeaseTermID
 Int32
 LeaseSignDate
 DateTime
 LeaseStartDate
 DateTime
 LeaseEndDate
 DateTime
 Action
 eCommunicationChannels
 DocumentID
 Int32
 EmailSentItemID
 Integer
 LetterTemplateID
 Int32
 EqualTo
 GeneratedRenewalStatus
 eGeneratedRenewalStatus
 EqualTo
 Comment
 String
 StatusModifiedDate
 DateTime
 StatusModifiedByUserID
 Int32
 StatusModifiedByWebUserID
 Int32
 IsComplete
 Boolean
 CompletedDate
 DateTime
 CompletedByUserID
 Int32
 CompletedByWebUserID
 Int32
 ExpirationDate
 DateTime
 EqualTo
 HasLandlordSignature
 Boolean
 RecipientMessage
 String
 BlueMoonSignableDocumentID
 Int32
 EqualTo
 SignablePDFTemplateID
 Int32
 EqualTo
 DocumentPacketID
 Int32
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 ParentLease
 LeaseModel
 LeaseTerm
 LeaseTermModel
 StatusModifiedByUser
 UserModel
 StatusModifiedByWebUser
 WebUserModel
 CompletedByUser
 UserModel
 CompletedByWebUser
 WebUserModel
 LeaseRenewal
 LeaseRenewalModel
 Asset
 AssetModel
 Unit
 UnitModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 LetterTemplate
 LetterTemplateModel
 GeneratedRecurringCharges
 GeneratedRecurringChargeModel
 GeneratedLeaseRenewalSignableDocumentPackets
 GeneratedLeaseRenewalSignableDocumentPacketModel
 GeneratedLeaseRenewalDocumentPackets
 GeneratedLeaseRenewalDocumentPacketModel
 BlueMoonSignableDocument
 BlueMoonSignableDocumentModel
 SignablePDFTemplate
 SignablePDFTemplateModel
 DocumentPacket
 DocumentPacketModel
 GeneratedLeaseRenewalWebUsers
 GeneratedLeaseRenewalWebUserModel
 GeneratedLeaseRenewalSignablePDFTemplateFieldValues
 GeneratedLeaseRenewalSignablePDFTemplateFieldValueModel
 GeneratedLeaseRenewalCharges
 GeneratedLeaseRenewalChargeModel
 GeneratedLeaseRenewalLeaseTerms
 GeneratedLeaseRenewalLeaseTermModel
 GeneratedLeaseRenewalAttachments
 GeneratedLeaseRenewalAttachmentModel
 ChildGeneratedLeaseRenewals
 GeneratedLeaseRenewalModel
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GeneratedLeaseRenewalID": 1,
 "LeaseRenewalID": 1,
 "ParentLeaseID": 2,
 "AssetID": 1,
 "UnitID": 1,
 "LeaseTermID": 1,
 "LeaseSignDate": "2026-04-29T15:56:51.79261-04:00",
 "LeaseStartDate": "2026-04-29T15:56:51.79261-04:00",
 "LeaseEndDate": "2026-04-29T15:56:51.79261-04:00",
 "DocumentID": 1,
 "EmailSentItemID": 4,
 "LetterTemplateID": 1,
 "Comment": "sample string 5",
 "StatusModifiedDate": "2026-04-29T15:56:51.79261-04:00",
 "StatusModifiedByUserID": 1,
 "StatusModifiedByWebUserID": 1,
 "IsComplete": true,
 "CompletedDate": "2026-04-29T15:56:51.79261-04:00",
 "CompletedByUserID": 1,
 "CompletedByWebUserID": 1,
 "ExpirationDate": "2026-04-29T15:56:51.79261-04:00",
 "HasLandlordSignature": true,
 "RecipientMessage": "sample string 9",
 "BlueMoonSignableDocumentID": 1,
 "SignablePDFTemplateID": 1,
 "DocumentPacketID": 1,
 "CreateUserID": 10,
 "UpdateUserID": 11,
 "CreateDate": "2026-04-29T15:56:51.79261-04:00",
 "UpdateDate": "2026-04-29T15:56:51.79261-04:00",
 "ConcurrencyID": 14,
 "MetaTag": "sample string 16"
 }
]

---

## GuestCardTemplates

GuestCardTemplate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 DefaultProperty
 GetByPost
 GuestCardFields
 GuestCardHiddenFields
 GuestCardProperties
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 GuestCardTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET GuestCardTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 GuestCardTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 GuestCardTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 GuestCardTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 GuestCardTemplateGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
GuestCardTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 GuestCardTemplateID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EntityTypeID
 (DEPRECATED) As of 6/10/2021
 replaced by GuestCardTemplateType
 eEntityType
 EqualTo
 GuestCardTemplateType
 eGuestCardTemplateTypes
 DefaultPropertyID
 Integer
 EqualTo
 IsRequireCaptcha
 Boolean
 SubmissionMessage
 String
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateDate
 DateTime
 GuestCardFields
 GuestCardFieldModel
 GuestCardProperties
 GuestCardEntityModel
 GuestCardHiddenFields
 GuestCardHiddenFieldModel
 ProspectLeadSources
 LeadSourceModel
 OwnerProspectLeadSources
 OwnerProspectLeadSourceModel
 GuestCardPropertyInfo
 (DEPRECATED) As of 6/10/2021
 replaced by GuestCardProperties.Properties
 GuestCardPropertyInfoModel
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 DefaultProperty
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GuestCardTemplateID": 1,
 "Name": "sample string 2",
 "ConcurrencyID": 10
 }
]

---

## History

History
 Retrieve Collection
 Retrieve Instance
 Attachment
 Attachments
 CreateUser
 GetByPost
 HistoryAttachments
 HistoryCategory
 UpdateUser
 Rent Manager Web API Reference
 History Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET History?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 HistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 HistoryGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryTypeString
 String
 Calculated Field
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 HistoryType
 eHistoryType
 EqualTo
, 
 In
 ParentID
 Integer
 EqualTo
, 
 In
 EntityType
 eEntityType
 EqualTo
, 
 In
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 HistoryDate
 DateTime
 HistoryEndDate
 DateTime
 EntityName
 String
 Calculated Field
 Note
 String
 Result
 String
 FileID
 (DEPRECATED) As of 9/12/2019
 Integer
 Calculated Field
 SMSType
 eSMSHistoryType
 Calculated Field
 IsReadOnly
 Boolean
 Calculated Field
 IsLocked
 Boolean
 IsCompleted
 Boolean
 IsContactMade
 Boolean
 IsFirstContact
 Boolean
 IsConversion
 Boolean
 IsReturn
 Boolean
 IsPinned
 Boolean
 IsPOComment
 Boolean
 IsOwnerStatement
 (DEPRECATED) As of 6/5/2020
 replaced by IsShowOnOwnerStatement
 Boolean
 IsShowOnOwnerStatement
 Boolean
 HasAttachment
 Boolean
 Calculated Field
 IncomeVerificationStatus
 eIncomeVerificationStatus
 Calculated Field
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 Hours
 Decimal
 Calculated Field
 ServiceManagerCategoryID
 Integer
 Calculated Field
 ViolationCategoryID
 Integer
 Calculated Field
 Attachment
 (DEPRECATED) As of 9/12/2019
 replaced by HistoryAttachments.File
 FileModel
 Attachments
 FileModel
 HistoryAttachments
 HistoryAttachmentModel
 HistoryCategory
 HistoryCategoryModel
 ServiceManagerCategory
 ServiceManagerCategoryModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 AccountStatementURL
 String
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryTypeString": "sample string 1",
 "HistoryID": 2,
 "ParentID": 3,
 "HistoryCategoryID": 4,
 "HistoryDate": "2026-04-29T15:56:52.1410965-04:00",
 "HistoryEndDate": "2026-04-29T15:56:52.1410965-04:00",
 "EntityName": "sample string 6",
 "Note": "sample string 7",
 "Result": "sample string 8",
 "FileID": 9,
 "IsReadOnly": true,
 "IsLocked": true,
 "IsCompleted": true,
 "IsContactMade": true,
 "IsFirstContact": true,
 "IsConversion": true,
 "IsReturn": true,
 "IsPinned": true,
 "IsPOComment": true,
 "IsOwnerStatement": true,
 "IsShowOnOwnerStatement": true,
 "HasAttachment": true,
 "CreateDate": "2026-04-29T15:56:52.1410965-04:00",
 "CreateUserID": 23,
 "UpdateDate": "2026-04-29T15:56:52.1410965-04:00",
 "UpdateUserID": 25,
 "ConcurrencyID": 26,
 "Hours": 1.0,
 "ServiceManagerCategoryID": 28,
 "ViolationCategoryID": 29,
 "HistoryAttachments": [],
 "AccountStatementURL": "sample string 30",
 "MetaTag": "sample string 32"
 }
]

---

## HistoryCalls

HistoryCalls
 Retrieve Collection
 Retrieve Instance
 Asset
 CreateUser
 Eviction
 FollowUpTask
 GetByPost
 Owner
 OwnerProspect
 Prospect
 QuickSearch
 Search
 Tenant
 UpdateUser
 Rent Manager Web API Reference
 HistoryCalls Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryCalls?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryCallFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryCallEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryCallOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryCallModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 HistoryType
 eHistoryType
 EqualTo
 Read Only
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 HistoryDate
 DateTime
 HistoryEndDate
 DateTime
 Note
 String
 Result
 String
 IsFirstContact
 Boolean
 IsLocked
 Boolean
 IsCompleted
 Boolean
 IsContactMade
 Boolean
 IsPinned
 Boolean
 EqualTo
, 
 NotEqualTo
 IsShowOnPaymentsTab
 Boolean
 Calculated Field
 IsShowOnOwnerStatement
 Boolean
 Calculated Field
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 UpdateDate
 DateTime
 HistoryCategory
 HistoryCategoryModel
 Owner
 OwnerModel
 OwnerProspect
 OwnerProspectModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Asset
 AssetModel
 Eviction
 EvictionModel
 ParentType
 eHistoryCallRelatedObjectTypes
 CreateUser
 UserModel
 UpdateUser
 UserModel
 FollowUpTask
 FollowUpTaskModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryID": 1,
 "HistoryCategoryID": 2,
 "HistoryDate": "2026-04-29T15:56:52.3499181-04:00",
 "HistoryEndDate": "2026-04-29T15:56:52.3499181-04:00",
 "Note": "sample string 4",
 "Result": "sample string 5",
 "IsFirstContact": true,
 "IsLocked": true,
 "IsCompleted": true,
 "IsContactMade": true,
 "IsPinned": true,
 "CreateUserID": 15,
 "CreateDate": "2026-04-29T15:56:52.3499181-04:00",
 "UpdateUserID": 17,
 "ParentID": 18,
 "UpdateDate": "2026-04-29T15:56:52.3499181-04:00",
 "MetaTag": "sample string 21"
 }
]

---

## HistoryCategories

HistoryCategories
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 HistoryCategoryTypes
 QuickSearch
 Search
 Rent Manager Web API Reference
 HistoryCategories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryCategories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryCategoryFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryCategoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryCategoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryCategoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 IsActive
 Boolean
 HistoryCategoryTypes
 HistoryCategoryTypeModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryCategoryID": 1,
 "Name": "sample string 2"
 }
]

---

## HistoryCategory

HistoryCategory
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 HistoryCategoryTypes
 QuickSearch
 Search
 Rent Manager Web API Reference
 HistoryCategory Retrieve Collection
 (DEPRECATED) As of 9/11/2022
 replaced by HistoryCategories
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryCategory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryCategoryFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryCategoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryCategoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryCategoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 IsActive
 Boolean
 HistoryCategoryTypes
 HistoryCategoryTypeModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryCategoryID": 1,
 "Name": "sample string 2"
 }
]

---

## HistoryEmails

HistoryEmails
 Retrieve Collection
 Retrieve Instance
 Asset
 CreateUser
 Eviction
 FollowUpTask
 GetByPost
 Owner
 OwnerProspect
 Prospect
 QuickSearch
 Search
 Tenant
 UpdateUser
 Rent Manager Web API Reference
 HistoryEmails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryEmails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryEmailFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryEmailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryEmailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryEmailModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 HistoryType
 eHistoryType
 EqualTo
 Read Only
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 HistoryDate
 DateTime
 HistoryEndDate
 DateTime
 Note
 String
 Result
 String
 IsFirstContact
 Boolean
 IsLocked
 Boolean
 IsCompleted
 Boolean
 IsPinned
 Boolean
 EqualTo
, 
 NotEqualTo
 IsShowOnPaymentsTab
 Boolean
 Calculated Field
 IsShowOnOwnerStatement
 Boolean
 Calculated Field
 IsContactMade
 Boolean
 Read Only
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 UpdateDate
 DateTime
 Owner
 OwnerModel
 OwnerProspect
 OwnerProspectModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Asset
 AssetModel
 Eviction
 EvictionModel
 EntityType
 eHistoryEmailRelatedObjectTypes
 CreateUser
 UserModel
 UpdateUser
 UserModel
 FollowUpTask
 FollowUpTaskModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryID": 1,
 "HistoryCategoryID": 2,
 "HistoryDate": "2026-04-29T15:56:52.8285741-04:00",
 "HistoryEndDate": "2026-04-29T15:56:52.8285741-04:00",
 "Note": "sample string 4",
 "Result": "sample string 5",
 "IsFirstContact": true,
 "IsLocked": true,
 "IsCompleted": true,
 "IsPinned": true,
 "IsContactMade": true,
 "CreateUserID": 15,
 "CreateDate": "2026-04-29T15:56:52.8285741-04:00",
 "UpdateUserID": 17,
 "ParentID": 18,
 "UpdateDate": "2026-04-29T15:56:52.8285741-04:00",
 "MetaTag": "sample string 21"
 }
]

---

## HistoryNotes

HistoryNotes
 Retrieve Collection
 Retrieve Instance
 Asset
 Attachment
 Attachments
 Bill
 CreateUser
 Estimate
 Eviction
 FollowUpTask
 GetByPost
 HistoryAttachments
 HistoryCategory
 Job
 Owner
 OwnerProspect
 Property
 Prospect
 PurchaseOrder
 QuickSearch
 RecurringBill
 Search
 ServiceManagerIssue
 ShortTermReservation
 Tenant
 Unit
 UpdateUser
 UploadAttachment
 UploadAttachments
 Vendor
 Violation
 Rent Manager Web API Reference
 HistoryNotes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryNotes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryNoteFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryNoteEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryNoteOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryNoteModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 ArchitecturalRequest
 ArchitecturalRequestModel
 HistoryType
 eHistoryType
 EqualTo
 Read Only
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 HistoryDate
 DateTime
 Note
 String
 FileID
 (DEPRECATED) As of 9/12/2019
 Integer
 IsShowOnPaymentsTab
 Boolean
 Calculated Field
 IsShowOnOwnerStatement
 Boolean
 Calculated Field
 IsShowInPOComments
 Boolean
 EqualTo
 IsLocked
 Boolean
 IsPinned
 Boolean
 EqualTo
, 
 NotEqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 CreateDate
 DateTime
 UpdateDate
 DateTime
 HistoryCategory
 HistoryCategoryModel
 Owner
 OwnerModel
 OwnerProspect
 OwnerProspectModel
 Tenant
 TenantModel
 Estimate
 EstimateModel
 PurchaseOrder
 PurchaseOrderModel
 Property
 PropertyModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 Unit
 UnitModel
 Vendor
 VendorModel
 Prospect
 ProspectModel
 Asset
 AssetModel
 Bill
 BillModel
 Violation
 ViolationModel
 RecurringBill
 RecurringBillModel
 ShortTermReservation
 ShortTermReservationModel
 Job
 JobModel
 Eviction
 EvictionModel
 EntityType
 eHistoryNoteRelatedObjectTypes
 EqualTo
, 
 In
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Attachment
 FileModel
 HistoryAttachments
 HistoryAttachmentModel
 FollowUpTask
 FollowUpTaskModel
 LoanPayable
 LoanPayableModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryID": 1,
 "HistoryType": "NotSet",
 "HistoryCategoryID": 2,
 "HistoryDate": "2026-04-29T15:56:53.0061396-04:00",
 "Note": "sample string 4",
 "FileID": 5,
 "IsShowInPOComments": true,
 "IsLocked": true,
 "IsPinned": true,
 "CreateUserID": 13,
 "UpdateUserID": 14,
 "ParentID": 15,
 "CreateDate": "2026-04-29T15:56:53.0061396-04:00",
 "UpdateDate": "2026-04-29T15:56:53.0061396-04:00",
 "MetaTag": "sample string 19"
 }
]

---

## HistorySystemNotes

HistorySystemNote...
 Retrieve Collection
 Retrieve Instance
 Asset
 Attachment
 Attachments
 CreateUser
 Estimate
 Eviction
 FollowUpTask
 GetByPost
 HistoryAttachments
 HistoryCategory
 Job
 LoanPayable
 Owner
 OwnerProspect
 Property
 Prospect
 PurchaseOrder
 QuickSearch
 Search
 Tenant
 Unit
 UpdateUser
 UploadAttachment
 UploadAttachments
 Vendor
 Violation
 Rent Manager Web API Reference
 HistorySystemNotes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistorySystemNotes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistorySystemNoteFilterFields List
 Define this parameter in the request URI.
 embeds
 HistorySystemNoteEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistorySystemNoteOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistorySystemNoteModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 HistoryType
 eHistoryType
 Read Only
 HistoryCategoryID
 Int32
 EqualTo
, 
 In
 HistoryDate
 DateTime
 Note
 String
 FileID
 (DEPRECATED) As of 9/12/2019
 Integer
 ParentType
 eHistorySystemNoteRelatedObjectTypes
 IsShowOnPaymentsTab
 Boolean
 Calculated Field
 IsShowOnOwnerStatement
 Boolean
 Calculated Field
 IsShowInPOComments
 Boolean
 EqualTo
 IsLocked
 Boolean
 IsPinned
 Boolean
 EqualTo
, 
 NotEqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 UpdateDate
 DateTime
 CreateDate
 DateTime
 HistoryCategory
 HistoryCategoryModel
 Owner
 OwnerModel
 Tenant
 TenantModel
 PurchaseOrder
 PurchaseOrderModel
 Property
 PropertyModel
 Unit
 UnitModel
 Vendor
 VendorModel
 Prospect
 ProspectModel
 OwnerProspect
 OwnerProspectModel
 Job
 JobModel
 ArchitecturalRequest
 ArchitecturalRequestModel
 Violation
 ViolationModel
 Estimate
 EstimateModel
 Asset
 AssetModel
 Eviction
 EvictionModel
 LoanPayable
 LoanPayableModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Attachment
 FileModel
 HistoryAttachments
 HistoryAttachmentModel
 FollowUpTask
 FollowUpTaskModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryID": 1,
 "HistoryCategoryID": 1,
 "HistoryDate": "2026-04-29T15:56:53.1362939-04:00",
 "Note": "sample string 3",
 "FileID": 4,
 "IsShowInPOComments": true,
 "IsLocked": true,
 "IsPinned": true,
 "CreateUserID": 12,
 "UpdateUserID": 13,
 "ParentID": 14,
 "UpdateDate": "2026-04-29T15:56:53.1362939-04:00",
 "CreateDate": "2026-04-29T15:56:53.1362939-04:00",
 "MetaTag": "sample string 18"
 }
]

---

## HistoryViolationNotes

HistoryViolationN...
 Retrieve Collection
 Retrieve Instance
 Attachments
 CreateUser
 FollowUpTask
 GetByPost
 HistoryAttachments
 HistoryCategory
 UpdateUser
 UploadAttachments
 Violation
 Rent Manager Web API Reference
 HistoryViolationNotes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryViolationNotes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryViolationNoteFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryViolationNoteEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryViolationNoteOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryViolationNoteModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 HistoryType
 eHistoryType
 Read Only
 HistoryCategoryID
 Int32
 EqualTo
, 
 In
 HistoryDate
 DateTime
 Note
 String
 ParentType
 eHistoryViolationNoteRelatedObjectTypes
 IsLocked
 Boolean
 IsPinned
 Boolean
 EqualTo
, 
 NotEqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 UpdateDate
 DateTime
 CreateDate
 DateTime
 HistoryCategory
 HistoryCategoryModel
 Violation
 ViolationModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Attachment
 FileModel
 HistoryAttachments
 HistoryAttachmentModel
 FollowUpTask
 FollowUpTaskModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryID": 1,
 "HistoryCategoryID": 1,
 "HistoryDate": "2026-04-29T15:56:53.3280138-04:00",
 "Note": "sample string 3",
 "IsLocked": true,
 "IsPinned": true,
 "CreateUserID": 6,
 "UpdateUserID": 7,
 "ParentID": 8,
 "UpdateDate": "2026-04-29T15:56:53.3280138-04:00",
 "CreateDate": "2026-04-29T15:56:53.3280138-04:00",
 "MetaTag": "sample string 12"
 }
]

---

## HistoryVisits

HistoryVisits
 Retrieve Collection
 Retrieve Instance
 Asset
 CreateUser
 Eviction
 FollowUpTask
 GetByPost
 Owner
 OwnerProspect
 Prospect
 QuickSearch
 Search
 Tenant
 UpdateUser
 Rent Manager Web API Reference
 HistoryVisits Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HistoryVisits?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HistoryVisitFilterFields List
 Define this parameter in the request URI.
 embeds
 HistoryVisitEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HistoryVisitOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HistoryVisitModel
 Properties
 NameTypeOptimized FiltersAttributes
 HistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 HistoryType
 eHistoryType
 EqualTo
 Read Only
 HistoryCategoryID
 Integer
 EqualTo
, 
 In
 HistoryDate
 DateTime
 HistoryEndDate
 DateTime
 Note
 String
 Result
 String
 IsFirstContact
 Boolean
 IsLocked
 Boolean
 IsCompleted
 Boolean
 IsPinned
 Boolean
 EqualTo
, 
 NotEqualTo
 IsShowOnPaymentsTab
 Boolean
 Calculated Field
 IsShowOnOwnerStatement
 Boolean
 Calculated Field
 IsContactMade
 Boolean
 Read Only
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
, 
 In
 CreateDate
 DateTime
 UpdateDate
 DateTime
 HistoryCategory
 HistoryCategoryModel
 Owner
 OwnerModel
 OwnerProspect
 OwnerProspectModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Asset
 AssetModel
 Eviction
 EvictionModel
 EntityType
 eHistoryVisitRelatedObjectTypes
 CreateUser
 UserModel
 UpdateUser
 UserModel
 FollowUpTask
 FollowUpTaskModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HistoryID": 1,
 "HistoryCategoryID": 2,
 "HistoryDate": "2026-04-29T15:56:53.5004086-04:00",
 "HistoryEndDate": "2026-04-29T15:56:53.5004086-04:00",
 "Note": "sample string 4",
 "Result": "sample string 5",
 "IsFirstContact": true,
 "IsLocked": true,
 "IsCompleted": true,
 "IsPinned": true,
 "IsContactMade": true,
 "CreateUserID": 15,
 "UpdateUserID": 16,
 "ParentID": 17,
 "CreateDate": "2026-04-29T15:56:53.5004086-04:00",
 "UpdateDate": "2026-04-29T15:56:53.5004086-04:00",
 "MetaTag": "sample string 21"
 }
]

---

## Holidays

Holidays
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 Holidays Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Holidays?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HolidayFilterFields List
 Define this parameter in the request URI.
 embeds
 HolidayEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HolidayOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HolidayModel
 Properties
 NameTypeOptimized FiltersAttributes
 HolidayID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 HolidayDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HolidayID": 1,
 "PropertyID": 2,
 "HolidayDate": "2026-04-29T15:56:53.6779785-04:00",
 "CreateDate": "2026-04-29T15:56:53.6779785-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:56:53.6779785-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## HomeOwnerStatusHistories

HomeOwnerStatusHi...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Asset
 GetByPost
 HomeOwnerStatus
 QuickSearch
 Search
 Rent Manager Web API Reference
 HomeOwnerStatusHistories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HomeOwnerStatusHistories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HomeOwnerStatusHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 HomeOwnerStatusHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HomeOwnerStatusHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HomeOwnerStatusHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 HomeownerStatusHistoryID
 Integer
 EqualTo
 Primary Key
 AssetID
 Integer
 EqualTo
 HomeOwnerStatusID
 Integer
 EqualTo
 StartDate
 DateTime
 EndDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 Asset
 AssetModel
 HomeOwnerStatus
 HomeOwnerStatusModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HomeownerStatusHistoryID": 1,
 "AssetID": 2,
 "HomeOwnerStatusID": 3,
 "StartDate": "2026-04-29T15:56:53.8550247-04:00",
 "EndDate": "2026-04-29T15:56:53.8550247-04:00",
 "CreateDate": "2026-04-29T15:56:53.8550247-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:56:53.8550247-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## HomeOwnerStatuses

HomeOwnerStatuses
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 HomeOwnerStatuses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET HomeOwnerStatuses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 HomeOwnerStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 HomeOwnerStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 HomeOwnerStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
HomeOwnerStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 HomeOwnerStatusID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
, 
 In
 Description
 String
 EqualTo
, 
 In
 IsCommunityOwned
 Boolean
 IsRVStatus
 Boolean
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "HomeOwnerStatusID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsCommunityOwned": true,
 "IsRVStatus": true,
 "SortOrder": 6,
 "MetaTag": "sample string 8"
 }
]

---

## ImageType

ImageType
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ImageType Retrieve Collection
 (DEPRECATED) As of 4/1/2022
 replaced by ImageTypes
 Retrieve a collection of items.
 Request Information
 Url
 GET ImageType?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ImageTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 ImageTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ImageTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ImageTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ImageTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ImageTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IsLayout
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 SortOrder
 Integer
 ParentType
 eImageTypeRelatedObjectTypes
 NameWithMaxSize
 String
 Read Only
 MaxImageSize
 eImageTypeMaxImageSize
 MaximumImageSize
 (DEPRECATED) As of 4/9/2021
 replaced by MaxImageSize
 Integer
 IsSystemType
 Boolean
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ImageTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsLayout": true,
 "CreateDate": "2026-04-29T15:56:54.2659918-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:56:54.2659918-04:00",
 "UpdateUserID": 8,
 "SortOrder": 9,
 "NameWithMaxSize": "sample string 10",
 "MaxImageSize": "FiveHundred",
 "MaximumImageSize": 11,
 "IsSystemType": true,
 "MetaTag": "sample string 14"
 }
]

---

## ImageTypes

ImageTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 GetFromAllLocations
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ImageTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ImageTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ImageTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 ImageTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ImageTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ImageTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ImageTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ImageTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IsLayout
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 SortOrder
 Integer
 ParentType
 eImageTypeRelatedObjectTypes
 NameWithMaxSize
 String
 Read Only
 MaxImageSize
 eImageTypeMaxImageSize
 MaximumImageSize
 (DEPRECATED) As of 4/9/2021
 replaced by MaxImageSize
 Integer
 IsSystemType
 Boolean
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ImageTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsLayout": true,
 "CreateDate": "2026-04-29T15:56:54.3966842-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:56:54.3966842-04:00",
 "UpdateUserID": 8,
 "SortOrder": 9,
 "NameWithMaxSize": "sample string 10",
 "MaxImageSize": "FiveHundred",
 "MaximumImageSize": 11,
 "IsSystemType": true,
 "MetaTag": "sample string 14"
 }
]

---

## ImportTemplates

ImportTemplates
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ImportTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ImportTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ImportTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 ImportTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ImportTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ImportTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 ImportTemplateID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 ImportType
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateDate
 DateTime
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ImportTemplateID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "ImportType": 4,
 "CreateUserID": 5,
 "UpdateUserID": 6,
 "CreateDate": "2026-04-29T15:56:54.5581346-04:00",
 "UpdateDate": "2026-04-29T15:56:54.5581346-04:00",
 "SortOrder": 9,
 "MetaTag": "sample string 11"
 }
]

---

## IncomeVerifications

IncomeVerificatio...
 Retrieve Collection
 Retrieve Instance
 Delete Collection
 Delete Instance
 Account
 CreateUser
 GetByPost
 GetReport
 IncomeVerificationEventDetails
 IncomeVerificationInvitations
 PerformStatusUpdate
 PerformStatusUpdateForAccount
 Property
 Prospect
 QuickSearch
 ResendInvitations
 RunVerification
 Search
 Tenant
 TestCredentials
 UpdateUser
 Rent Manager Web API Reference
 IncomeVerifications Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET IncomeVerifications?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 IncomeVerificationFilterFields List
 Define this parameter in the request URI.
 embeds
 IncomeVerificationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 IncomeVerificationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
IncomeVerificationModel
 Properties
 NameTypeOptimized FiltersAttributes
 IncomeVerificationID
 Integer
 EqualTo
 Primary Key
 AccountID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
 SubmittedDate
 DateTime
 OrderCode
 String
 ReportCode
 String
 ContactID
 Integer
 EqualTo
 ApplicantType
 eApplicantType
 FirstName
 String
 LastName
 String
 SocialSecurityNumber
 String
 Calculated Field
 BirthDate
 DateTime
 Street
 String
 City
 String
 State
 String
 PostalCode
 String
 PhoneNumber
 String
 Email
 String
 Status
 eIncomeVerificationStatus
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 Account
 AccountModel
 Contact
 ContactModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 IncomeVerificationEventDetails
 IncomeVerificationEventDetailModel
 IncomeVerificationInvitations
 IncomeVerificationInvitationModel
 Property
 PropertyModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "IncomeVerificationID": 1,
 "AccountID": 2,
 "PropertyID": 3,
 "SubmittedDate": "2026-04-29T15:56:54.7029982-04:00",
 "OrderCode": "sample string 5",
 "ReportCode": "sample string 6",
 "ContactID": 7,
 "FirstName": "sample string 8",
 "LastName": "sample string 9",
 "SocialSecurityNumber": "sample string 12",
 "BirthDate": "2026-04-29T15:56:54.7029982-04:00",
 "Street": "sample string 14",
 "City": "sample string 15",
 "State": "sample string 16",
 "PostalCode": "sample string 17",
 "PhoneNumber": "sample string 18",
 "Email": "sample string 19",
 "CreateUserID": 20,
 "CreateDate": "2026-04-29T15:56:54.7029982-04:00",
 "UpdateUserID": 22,
 "UpdateDate": "2026-04-29T15:56:54.718621-04:00",
 "MetaTag": "sample string 25"
 }
]

---

## IncomingTexts

IncomingTexts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Location
 MarkAsRead
 MarkAsUnread
 MMSImages
 Owner
 Property
 Prospect
 QuickSearch
 ReadUser
 ReceivingPhoneNumber
 Search
 Tenant
 UpdateHistoryCategory
 Vendor
 Rent Manager Web API Reference
 IncomingTexts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET IncomingTexts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 IncomingTextsFilterFields List
 Define this parameter in the request URI.
 embeds
 IncomingTextEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 IncomingTextOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
IncomingTextModel
 Properties
 NameTypeOptimized FiltersAttributes
 IncomingTextID
 Integer
 EqualTo
 Primary Key
 PhoneNumber
 String
 EqualTo
, 
 In
 SourceCompany
 eTextMessagingSourceCompany
 Message
 String
 ReceivedDate
 DateTime
 ParentID
 Integer
 EqualTo
 ParentType
 eTextMessageConversationType
 EqualTo
 ReadUserID
 Integer
 EqualTo
 ReadDate
 DateTime
 IsMMS
 Boolean
 Read Only
 SegmentCount
 Integer
 Read Only
 LocationID
 Integer
 EqualTo
 Read Only
 ResourceSID
 String
 EqualTo
 HistoryCategoryID
 Integer
 EqualTo
 HistoryCategory
 HistoryCategoryModel
 MainLocationIncomingTextID
 Integer
 Read Only
 ReceivingPhoneNumberString
 String
 ReadUser
 UserModel
 EqualTo
 Read Only
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 Vendor
 VendorModel
 Property
 PropertyModel
 Location
 LocationModel
 MMSImages
 MMSImageModel
 MMSImage
 (DEPRECATED) As of 4/1/2022
 replaced by MMSImages
 MMSImageModel
 ReceivingPhoneNumber
 PhoneNumberModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "IncomingTextID": 1,
 "PhoneNumber": "sample string 2",
 "Message": "sample string 3",
 "ReceivedDate": "2026-04-29T15:56:54.8753347-04:00",
 "ParentID": 5,
 "ParentType": "Tenant",
 "ReadUserID": 6,
 "ReadDate": "2026-04-29T15:56:54.8753347-04:00",
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

---

## InspectionAreaItems

InspectionAreaIte...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 InspectionAreaItemAttachments
 InspectionAreaItemStatuses
 QuickSearch
 Search
 UploadInspectionAreaItemAttachments
 Rent Manager Web API Reference
 InspectionAreaItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionAreaItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionAreaItemFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionAreaItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionAreaItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionAreaItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionAreaItemID
 Integer
 EqualTo
 Primary Key
 InspectionAreaID
 Integer
 EqualTo
, 
 In
 Name
 String
 SortOrder
 Integer
 Read Only
 Note
 String
 StatusID
 Integer
 EqualTo
 Status
 String
 IsActionItem
 Boolean
 IsSevere
 Boolean
 IsReviewNeeded
 Boolean
 Directive
 String
 IsAdhoc
 Boolean
 IsManagementOnly
 Boolean
 InspectorHelpText
 String
 TenantHelpText
 String
 InspectionAreaItemStatuses
 InspectionAreaItemStatusModel
 InspectionAreaItemAttachments
 InspectionAreaItemAttachmentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionAreaItemID": 1,
 "InspectionAreaID": 2,
 "Name": "sample string 3",
 "SortOrder": 4,
 "Note": "sample string 5",
 "StatusID": 6,
 "Status": "sample string 7",
 "IsActionItem": true,
 "IsSevere": true,
 "IsReviewNeeded": true,
 "Directive": "sample string 11",
 "IsAdhoc": true,
 "IsManagementOnly": true,
 "InspectorHelpText": "sample string 14",
 "TenantHelpText": "sample string 15",
 "MetaTag": "sample string 17"
 }
]

---

## InspectionAreas

InspectionAreas
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 InspectionAreaItems
 QuickSearch
 Search
 WebUser
 Rent Manager Web API Reference
 InspectionAreas Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionAreas?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionAreaFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionAreaEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionAreaOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionAreaModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionAreaID
 Integer
 EqualTo
 Primary Key
 InspectionID
 Integer
 EqualTo
, 
 In
 InspectionVideoFileID
 Integer
 EqualTo
 Name
 String
 VideoInspectionURL
 String
 IsCustomURL
 Boolean
 SortOrder
 Integer
 Read Only
 WebUserID
 Integer
 EqualTo
 LastInteraction
 DateTime
 InspectorHelpText
 String
 TenantHelpText
 String
 InspectionAreaItems
 InspectionAreaItemModel
 InspectionVideoFile
 InspectionVideoFileModel
 WebUser
 WebUserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionAreaID": 1,
 "InspectionID": 2,
 "InspectionVideoFileID": 3,
 "Name": "sample string 4",
 "VideoInspectionURL": "sample string 5",
 "IsCustomURL": true,
 "SortOrder": 7,
 "WebUserID": 8,
 "LastInteraction": "2026-04-29T15:56:55.1987081-04:00",
 "InspectorHelpText": "sample string 10",
 "TenantHelpText": "sample string 11",
 "MetaTag": "sample string 13"
 }
]

---

## InspectionStatuses

InspectionStatuse...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 GetFromAllLocations
 QuickSearch
 Search
 Rent Manager Web API Reference
 InspectionStatuses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionStatuses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionStatusID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsFinalStatus
 Boolean
 EqualTo
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionStatusID": 1,
 "Name": "sample string 2",
 "IsFinalStatus": true,
 "SortOrder": 4,
 "CreateDate": "2026-04-29T15:56:55.3592485-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:56:55.3592485-04:00",
 "UpdateUserID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## InspectionTemplateAreaItems

InspectionTemplat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 InspectionTemplateAreaItemStatuses
 Rent Manager Web API Reference
 InspectionTemplateAreaItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionTemplateAreaItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionTemplateAreaItemFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionTemplateAreaItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionTemplateAreaItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionTemplateAreaItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionTemplateAreaItemID
 Integer
 EqualTo
, 
 In
 Primary Key
 InspectionTemplateAreaID
 Integer
 EqualTo
 Name
 String
 SortOrder
 Integer
 IsManagementOnly
 Boolean
 InspectorHelpText
 String
 TenantHelpText
 String
 InspectionTemplateAreaItemStatuses
 InspectionTemplateAreaItemStatusModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionTemplateAreaItemID": 1,
 "InspectionTemplateAreaID": 2,
 "Name": "sample string 3",
 "SortOrder": 4,
 "IsManagementOnly": true,
 "InspectorHelpText": "sample string 6",
 "TenantHelpText": "sample string 7",
 "MetaTag": "sample string 9"
 }
]

---

## InspectionTemplateAreas

InspectionTemplat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 InspectionTemplateAreaItems
 Rent Manager Web API Reference
 InspectionTemplateAreas Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionTemplateAreas?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionTemplateAreaFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionTemplateAreaEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionTemplateAreaOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionTemplateAreaModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionTemplateAreaID
 Integer
 EqualTo
, 
 In
 Primary Key
 InspectionTemplateID
 Integer
 EqualTo
 Name
 String
 EqualTo
 SortOrder
 Integer
 IsManagementOnly
 Boolean
 InspectorHelpText
 String
 TenantHelpText
 String
 InspectionTemplateAreaItems
 InspectionTemplateAreaItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionTemplateAreaID": 1,
 "InspectionTemplateID": 2,
 "Name": "sample string 3",
 "SortOrder": 4,
 "IsManagementOnly": true,
 "InspectorHelpText": "sample string 6",
 "TenantHelpText": "sample string 7",
 "MetaTag": "sample string 9"
 }
]

---

## InspectionTemplates

InspectionTemplat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AddInspection
 GetByPost
 InspectionTemplateAreas
 QuickSearch
 Search
 Rent Manager Web API Reference
 InspectionTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionTemplateID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 UnitID
 Integer
 EqualTo
 UnitTypeID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 InspectionMode
 eInspectionMode
 IsRequireStatusForAllItems
 Boolean
 IsActive
 Boolean
 EqualTo
 InspectionTemplateAreas
 InspectionTemplateAreaModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionTemplateID": 1,
 "Name": "sample string 2"
 }
]

---

## InspectionTypes

InspectionTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 InspectionTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InspectionTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InspectionTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionTypeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionTypeID": 1,
 "Name": "sample string 2",
 "CreateDate": "2026-04-29T15:56:55.9686106-04:00",
 "CreateUserID": 4,
 "UpdateDate": "2026-04-29T15:56:55.9686106-04:00",
 "UpdateUserID": 6,
 "SortOrder": 7,
 "MetaTag": "sample string 9"
 }
]

---

## Inspections

Inspections
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 GetReadPreSignedURL
 InspectionAreas
 Inspector
 InspectorSignatureFile
 MakeReadyPostItem
 Property
 QuickSearch
 Search
 Status
 SubmittedByUser
 SubmittedByWebUser
 Tenant
 TenantSignatureFile
 Type
 Unit
 UploadInspectorSignature
 UploadTenantSignature
 WebInspectionReportURL
 Rent Manager Web API Reference
 Inspections Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Inspections?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 InspectionFilterFields List
 Define this parameter in the request URI.
 embeds
 InspectionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InspectionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 InspectionGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InspectionModel
 Properties
 NameTypeOptimized FiltersAttributes
 InspectionID
 Integer
 EqualTo
, 
 In
 Primary Key
 Description
 String
 InspectionDate
 DateTime
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 TenantID
 Integer
 EqualTo
 InspectorID
 Int32
 EqualTo
 InspectionTypeID
 Integer
 EqualTo
 InspectionStatusID
 Integer
 EqualTo
 Notes
 String
 InspectorSignatureFileID
 Integer
 InspectorSignatureName
 String
 InspectorSignatureDate
 DateTime
 TenantSignatureFileID
 Integer
 TenantSignatureName
 String
 TenantSignatureDate
 DateTime
 InspectorType
 eInspectorType
 EqualTo
 InspectionMode
 eInspectionMode
 ExpirationDate
 DateTime
 SubmittedByWebUserID
 Integer
 SubmittedByUserID
 Integer
 IsAllRequired
 Boolean
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ConcurrencyID
 Integer
 CompletionDate
 DateTime
 Property
 PropertyModel
 Unit
 UnitModel
 Tenant
 TenantModel
 Inspector
 UserModel
 Type
 InspectionTypeModel
 Status
 InspectionStatusModel
 ScheduledDate
 DateTime
 InspectionAreas
 InspectionAreaModel
 MakeReadyPostItem
 MakeReadyPostItemModel
 WebInspectionURL
 String
 InspectorSignatureFile
 FileModel
 TenantSignatureFile
 FileModel
 SubmittedByWebUser
 WebUserModel
 SubmittedByUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InspectionID": 1,
 "Description": "sample string 2",
 "InspectorID": 1,
 "InspectionStatusID": 8,
 "CompletionDate": "2026-04-29T15:56:56.1096481-04:00"
 }
]

---

## InterestedRentals

InterestedRentals
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Property
 Prospect
 QuickSearch
 Search
 Unit
 Rent Manager Web API Reference
 InterestedRentals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InterestedRentals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 InterestedRentalFilterFields List
 Define this parameter in the request URI.
 embeds
 InterestedRentalEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InterestedRentalOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InterestedRentalModel
 Properties
 NameTypeOptimized FiltersAttributes
 InterestedRentalID
 Integer
 EqualTo
 Primary Key
 EntityTypeID
 eEntityType
 EntityKeyID
 Integer
 ProspectID
 Integer
 EqualTo
, 
 In
 PropertyID
 Integer
 Calculated Field
 UnitID
 Integer
 Calculated Field
 IsWaitingList
 Boolean
 CreateDate
 DateTime
 Prospect
 ProspectModel
 Property
 PropertyModel
 Unit
 UnitModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InterestedRentalID": 1,
 "EntityTypeID": "Unit",
 "EntityKeyID": 5,
 "ProspectID": 3,
 "UnitID": 5,
 "IsWaitingList": true,
 "CreateDate": "2026-04-29T15:56:56.3028503-04:00",
 "MetaTag": "sample string 9"
 }
]

---

## InternalAutomation

InternalAutomatio...
 GetTaskStatus
 Rent Manager Web API Reference
 InternalAutomation
 Please select a resource on the left to view more information
 Request Information
 Url
 GET InternalAutomation

---

## InventoryItem

InventoryItem
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Decreases
 GetByPost
 Increases
 QuickSearch
 Search
 Transactions
 TransferInventory
 UserDefinedFields
 UserDefinedValues
 Rent Manager Web API Reference
 InventoryItem Retrieve Collection
 (DEPRECATED) As of 3/18/2022
 replaced by InventoryItems
 Retrieve a collection of items.
 Request Information
 Url
 GET InventoryItem?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 InventoryItemFilterFields List
 Define this parameter in the request URI.
 embeds
 InventoryItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InventoryItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 InventoryItemGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InventoryItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 InventoryItemID
 Integer
 In
, 
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IncomeChargeTypeID
 Integer
 EqualTo
 ExpenseChartAccountID
 Integer
 EqualTo
 ExpenseGLAccountID
 Integer
 EqualTo
 AssetChartAccountID
 (DEPRECATED) As of 6/25/2020
 replaced by AssetGLAccountID
 Integer
 EqualTo
 AssetGLAccountID
 Integer
 EqualTo
 CostOfGoodsSoldChartAccountID
 (DEPRECATED) As of 6/25/2020
 replaced by CostOfGoodsSoldGLAccountID
 Integer
 EqualTo
 CostOfGoodsSoldGLAccountID
 Integer
 EqualTo
 PurchaseOrderWorkFlowID
 Integer
 EqualTo
 Markup
 Decimal
 IsMarkupPercentage
 Boolean
 Cost
 Decimal
 IsTaxable
 Boolean
 IsTrackingCostOfGoodsSold
 Boolean
 IsInventory
 Boolean
 IsNote
 (DEPRECATED) As of 3/25/2021
 Boolean
 EqualTo
 Read Only
 IsActive
 Boolean
 ReorderQuantity
 Decimal
 Location
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 IncomeChargeType
 ChargeTypeModel
 ExpenseGLAccount
 GLAccountModel
 AssetGLAccount
 GLAccountModel
 CostOfGoodsSoldGLAccount
 GLAccountModel
 PurchaseOrderWorkFlow
 PurchaseOrderWorkFlowModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 UserDefinedValues
 UserDefinedValueModel
 Increases
 InventoryItemIncreaseModel
 Decreases
 InventoryItemDecreaseModel
 InventorySummaryInformation
 InventoryTransactionsSummaryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InventoryItemID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## InventoryItems

InventoryItems
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssetGLAccount
 CostOfGoodsSoldGLAccount
 CreateUser
 Decreases
 ExpenseGLAccount
 GetByPost
 IncomeChargeType
 Increases
 PurchaseOrderWorkFlow
 QuickSearch
 Search
 Transactions
 TransferInventory
 UpdateUser
 UserDefinedFields
 UserDefinedValues
 Rent Manager Web API Reference
 InventoryItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET InventoryItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 InventoryItemFilterFields List
 Define this parameter in the request URI.
 embeds
 InventoryItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InventoryItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 InventoryItemGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InventoryItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 InventoryItemID
 Integer
 In
, 
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IncomeChargeTypeID
 Integer
 EqualTo
 ExpenseChartAccountID
 Integer
 EqualTo
 ExpenseGLAccountID
 Integer
 EqualTo
 AssetChartAccountID
 (DEPRECATED) As of 6/25/2020
 replaced by AssetGLAccountID
 Integer
 EqualTo
 AssetGLAccountID
 Integer
 EqualTo
 CostOfGoodsSoldChartAccountID
 (DEPRECATED) As of 6/25/2020
 replaced by CostOfGoodsSoldGLAccountID
 Integer
 EqualTo
 CostOfGoodsSoldGLAccountID
 Integer
 EqualTo
 PurchaseOrderWorkFlowID
 Integer
 EqualTo
 Markup
 Decimal
 IsMarkupPercentage
 Boolean
 Cost
 Decimal
 IsTaxable
 Boolean
 IsTrackingCostOfGoodsSold
 Boolean
 IsInventory
 Boolean
 IsNote
 (DEPRECATED) As of 3/25/2021
 Boolean
 EqualTo
 Read Only
 IsActive
 Boolean
 ReorderQuantity
 Decimal
 Location
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 IncomeChargeType
 ChargeTypeModel
 ExpenseGLAccount
 GLAccountModel
 AssetGLAccount
 GLAccountModel
 CostOfGoodsSoldGLAccount
 GLAccountModel
 PurchaseOrderWorkFlow
 PurchaseOrderWorkFlowModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 UserDefinedValues
 UserDefinedValueModel
 Increases
 InventoryItemIncreaseModel
 Decreases
 InventoryItemDecreaseModel
 InventorySummaryInformation
 InventoryTransactionsSummaryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InventoryItemID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## Invoices

Invoices
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Accounts
 CreateUser
 Estimate
 FileAttachments
 GetByPost
 GetFromAllLocations
 InvoiceDetails
 Job
 Owner
 Property
 Prospect
 PurchaseOrder
 QuickSearch
 SalesRepresentative
 Search
 Tenant
 Term
 Unit
 UpdateUser
 Rent Manager Web API Reference
 Invoices Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Invoices?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 InvoiceFilterFields List
 Define this parameter in the request URI.
 embeds
 InvoiceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 InvoiceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 InvoiceGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
InvoiceModel
 Properties
 NameTypeOptimized FiltersAttributes
 InvoiceID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 AccountID
 Integer
 AccountType
 eAccountType
 Read Only
 InvoiceDate
 DateTime
 DueDate
 DateTime
 Comment
 String
 EqualTo
 IsTaxable
 Boolean
 TaxPercent
 Decimal
 SubTotal
 Decimal
 TaxAmount
 Decimal
 TotalAmount
 Decimal
 ChargeAmount
 Decimal
 ChargeAmountPaid
 Decimal
 IsFullyAllocated
 Boolean
 EqualTo
 TaxTypeID
 Integer
 EqualTo
 TaxChargeTypeID
 Integer
 EqualTo
 TaxChargeID
 Integer
 EqualTo
 TermID
 Integer
 EqualTo
 SalesRepresentativeUserID
 Integer
 EqualTo
 JobID
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 EstimateID
 Integer
 Read Only
 PurchaseOrderID
 Integer
 EqualTo
, 
 In
 ConcurrencyID
 Integer
 Concurrency Key
 BalanceDue
 Decimal
 InvoiceDetails
 InvoiceDetailModel
 Account
 AccountModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 Unit
 UnitModel
 Property
 PropertyModel
 Term
 TermModel
 Job
 JobModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Estimate
 EstimateModel
 PurchaseOrder
 PurchaseOrderModel
 SalesRepresentative
 UserModel
 FileAttachments
 FileAttachmentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "InvoiceID": 1,
 "PropertyID": 2,
 "UnitID": 3,
 "AccountID": 4,
 "InvoiceDate": "2026-04-29T15:56:56.9278131-04:00",
 "DueDate": "2026-04-29T15:56:56.9278131-04:00",
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
 "CreateDate": "2026-04-29T15:56:56.9434454-04:00",
 "CreateUserID": 23,
 "UpdateDate": "2026-04-29T15:56:56.9434454-04:00",
 "UpdateUserID": 25,
 "EstimateID": 26,
 "PurchaseOrderID": 27,
 "ConcurrencyID": 28,
 "MetaTag": "sample string 31"
 }
]

---

## JobTypes

JobTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 JobTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET JobTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 JobTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 JobTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 JobTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 JobTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
JobTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 JobTypeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "JobTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## Jobs

Jobs
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Asset
 CreateUser
 GetByPost
 History
 HistoryNotes
 HistorySystemNotes
 JobBudgets
 JobType
 Property
 QuickSearch
 Search
 TestScript
 Unit
 UpdateUser
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 Rent Manager Web API Reference
 Jobs Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Jobs?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 JobFilterFields List
 Define this parameter in the request URI.
 embeds
 JobEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 JobOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 JobGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
JobModel
 Properties
 NameTypeOptimized FiltersAttributes
 JobID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 AssetID
 Integer
 EqualTo
 Name
 String
 EqualTo
 ShortName
 String
 EqualTo
 Description
 String
 JobTypeID
 Integer
 EqualTo
 StartDate
 DateTime
 ExpectedEndDate
 DateTime
 EndDate
 DateTime
 IsActive
 Boolean
 BudgetComment
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 Unit
 UnitModel
 Asset
 AssetModel
 JobType
 JobTypeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryNotes
 HistoryNoteModel
 History
 HistoryModel
 JobBudgets
 JobBudgetModel
 UserDefinedValues
 UserDefinedValueModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "JobID": 1,
 "Name": "sample string 5",
 "ShortName": "sample string 6",
 "Description": "sample string 7"
 }
]

---

## Journals

Journals
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Attachments
 CreateUser
 DepreciationPosting
 Details
 GetByPost
 GPRPostingHistory
 LoanPayable
 ManagementFeePostingHistory
 QuickSearch
 RemoveJournalReversal
 Reversal
 ReverseJournal
 Search
 SubsidyPayment
 UpdateUser
 Rent Manager Web API Reference
 Journals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Journals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 JournalFilterFields List
 Define this parameter in the request URI.
 embeds
 JournalEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 JournalOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 JournalGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
JournalModel
 Properties
 NameTypeOptimized FiltersAttributes
 JournalID
 Integer
 EqualTo
, 
 In
 Primary Key
 JournalDisplayID
 Integer
 Read Only
 ReversalDisplayID
 Int32
 Read Only
 Basis
 eBasis
 EqualTo
 Comment
 String
 Reference
 String
 EqualTo
 TransactionDate
 DateTime
 Amount
 Decimal
 IsPeriodAdjustment
 Boolean
 ReversalDate
 DateTime
 LoanPayableID
 Integer
 EqualTo
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 IsBeginningBalance
 Boolean
 EqualTo
, 
 NotEqualTo
 IsDepreciated
 Boolean
 Requires Embed (IsDepreciated)
 CreateUser
 UserModel
 UpdateUser
 UserModel
 LoanPayable
 LoanPayableModel
 Attachments
 FileAttachmentModel
 Details
 JournalDetailModel
 Required (create)
 SubsidyPayment
 CrossJournalSubsidyPaymentModel
 IsJournalLinkedToAccountGroupAdjustmentCredits
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (IsJournalLinkedToAccountGroupAdjustmentCredits)
 DepreciationPosting
 DepreciationPostingModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "JournalID": 1,
 "JournalDisplayID": 2,
 "ReversalDisplayID": 1,
 "Comment": "sample string 3",
 "Reference": "sample string 4",
 "TransactionDate": "2026-04-29T15:56:57.4533459-04:00",
 "Amount": 6.0,
 "IsPeriodAdjustment": true,
 "ReversalDate": "2026-04-29T15:56:57.4533459-04:00",
 "LoanPayableID": 8,
 "CreateDate": "2026-04-29T15:56:57.4533459-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:57.4533459-04:00",
 "UpdateUserID": 12,
 "ConcurrencyID": 13,
 "IsBeginningBalance": true,
 "IsDepreciated": true,
 "Details": [],
 "IsJournalLinkedToAccountGroupAdjustmentCredits": true,
 "MetaTag": "sample string 17"
 }
]

---

## LateFeeAutomationSchedules

LateFeeAutomation...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 FeeChargeType
 GetByPost
 LateFeeAutomationScheduleChargeTypes
 LateFeeAutomationScheduleProperties
 PropertyGroup
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 LateFeeAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LateFeeAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LateFeeAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 LateFeeAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LateFeeAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LateFeeAutomationScheduleModel
 Late Fee Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 LateFeeAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 IsRunLastDayOfMonth
 Boolean
 IsPostLastDayOfMonth
 Boolean
 PropertyGroupID
 Integer
 EqualTo
 DelinquentCriteria
 eLateFeeSchedulesDelinquencyCriteriaOperator
 DelinquentCriteriaAmount
 Decimal
 DaysDelinquentMin
 Integer
 DaysDelinquentMax
 Integer
 AsOfOffset
 Integer
 IsActiveLeasesOnly
 Boolean
 IsLastChargeOnly
 Boolean
 Name
 String
 IsActive
 Boolean
 StartDate
 DateTime
 EndDate
 DateTime
 RunDay
 Integer
 PostingDay
 Integer
 NotificationEmail
 String
 IncludeDetails
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 FeeChargeTypeID
 Integer
 EqualTo
 Comment
 String
 IsLateFeeOverride
 Boolean
 IsOverrideLateFeePercent
 Boolean
 LateFeeOverridePercentAmount
 Decimal
 IsOverridePercentOnFullCharge
 Boolean
 IsOverrideFixedAmount
 Boolean
 OverrideFixedAmount
 Decimal
 IsAddHistoryNoteForEachCharge
 Boolean
 IsScript
 Boolean
 Script
 String
 UserDefinedFieldID
 Integer
 UserDefinedValue
 String
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 PropertyGroup
 PropertyGroupModel
 LateFeeAutomationScheduleProperties
 LateFeeAutomationSchedulePropertyModel
 Required (create)
 FeeChargeType
 ChargeTypeModel
 LateFeeAutomationScheduleChargeTypes
 LateFeeAutomationScheduleChargeTypeModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LateFeeAutomationScheduleID": 1,
 "IsRunLastDayOfMonth": true,
 "IsPostLastDayOfMonth": true,
 "PropertyGroupID": 4,
 "DelinquentCriteriaAmount": 5.0,
 "DaysDelinquentMin": 6,
 "DaysDelinquentMax": 7,
 "AsOfOffset": 8,
 "IsActiveLeasesOnly": true,
 "IsLastChargeOnly": true,
 "Name": "sample string 11",
 "IsActive": true,
 "StartDate": "2026-04-29T15:56:57.6309192-04:00",
 "EndDate": "2026-04-29T15:56:57.6309192-04:00",
 "RunDay": 15,
 "PostingDay": 16,
 "NotificationEmail": "sample string 17",
 "IncludeDetails": true,
 "CreateDate": "2026-04-29T15:56:57.6309192-04:00",
 "UpdateDate": "2026-04-29T15:56:57.6309192-04:00",
 "FeeChargeTypeID": 21,
 "Comment": "sample string 22",
 "IsLateFeeOverride": true,
 "IsOverrideLateFeePercent": true,
 "LateFeeOverridePercentAmount": 25.0,
 "IsOverridePercentOnFullCharge": true,
 "IsOverrideFixedAmount": true,
 "OverrideFixedAmount": 28.0,
 "IsAddHistoryNoteForEachCharge": true,
 "IsScript": true,
 "Script": "sample string 31",
 "UserDefinedFieldID": 32,
 "UserDefinedValue": "sample string 33",
 "ConcurrencyID": 34,
 "CreateUserID": 35,
 "UpdateUserID": 36,
 "LastRunDate": "2026-04-29T15:56:57.6309192-04:00",
 "NextRunDate": "2026-04-29T15:56:57.6309192-04:00",
 "MetaTag": "sample string 39"
 }
]

---

## LateFees

LateFees
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CalculateDelinquentAccountsWithLateFees
 GetByPost
 PostLateFees
 Property
 QuickSearch
 Search
 Tenant
 Rent Manager Web API Reference
 LateFees Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LateFees?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LateFeeFilterFields List
 Define this parameter in the request URI.
 embeds
 LateFeeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LateFeeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LateFeeModel
 Properties
 NameTypeOptimized FiltersAttributes
 LateFeeID
 Integer
 EqualTo
 Primary Key
 EntityKeyID
 Integer
 EqualTo
 EntityTypeID
 eEntityType
 EqualTo
 IsFixed
 Boolean
 FixedAmount
 Decimal
 IsFixedRentOnly
 Boolean
 IsPercent
 Boolean
 PercentAmount
 Decimal
 IsPercentRentOnly
 Boolean
 IsPercentFullChargeAmount
 Boolean
 IsPerDay
 Boolean
 PerDayAmount
 Decimal
 IsPerDayGrace
 Boolean
 PerDayGraceCount
 Integer
 IsPerDayGraceNonRetroactive
 Boolean
 IsPerDayExcludeWeekends
 Boolean
 IsPerDayExcludeHolidays
 Boolean
 IsPerDayUseInvoiceDueDate
 Boolean
 IsPerDayOneMonth
 Boolean
 PerDayGraceLimitCount
 Integer
 IsPerDayGraceExcludeWeekends
 Boolean
 IsPerDayGraceExcludeHolidays
 Boolean
 LateMinimumBalance
 Decimal
 PerDayLateFeeLimitAmount
 Decimal
 MultipleMethodAction
 eLateFeeMultipleMethodOperators
 IsScript
 Boolean
 ScriptedLateFee
 String
 Tenant
 TenantModel
 Property
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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

---

## LeadSources

LeadSources
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 LeadSources Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LeadSources?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 LeadSourceFilterFields List
 Define this parameter in the request URI.
 embeds
 LeadSourceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeadSourceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 LeadSourceGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeadSourceModel
 Properties
 NameTypeOptimized FiltersAttributes
 ProspectLeadSourceID
 Integer
 EqualTo
 Primary Key
 Description
 String
 EqualTo
 IsActive
 Boolean
 PhoneNumber
 String
 StrippedPhoneNumber
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ProspectLeadSourceID": 1,
 "Description": "sample string 2",
 "IsActive": true,
 "PhoneNumber": "sample string 4",
 "StrippedPhoneNumber": "sample string 5",
 "MetaTag": "sample string 7"
 }
]

---

## LeaseRenewalIncreaseEntityRoundingSettings

LeaseRenewalIncre...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 LeaseRenewalIncreaseEntityRoundingSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LeaseRenewalIncreaseEntityRoundingSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LeaseRenewalIncreaseEntityRoundingSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 LeaseRenewalIncreaseEntityRoundingSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeaseRenewalIncreaseEntityRoundingSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeaseRenewalIncreaseEntityRoundingSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 LeaseRenewalIncreaseEntityRoundingSettingID
 Integer
 EqualTo
 Primary Key
 IsEnabled
 Boolean
 PropertyID
 Int32
 EqualTo
 RoundingRule
 eLeaseRenewalIncreaseRoundingRule
 RoundToNearestType
 eLeaseRenewalIncreaseRoundToNearestType
 MonetaryUnit
 eMonetaryUnit
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 IsOverride
 Boolean
 Calculated Field
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LeaseRenewalIncreaseEntityRoundingSettingID": 1,
 "IsEnabled": true,
 "PropertyID": 1,
 "CreateDate": "2026-04-29T15:56:58.1407999-04:00",
 "CreateUserID": 4,
 "UpdateDate": "2026-04-29T15:56:58.1407999-04:00",
 "UpdateUserID": 6,
 "IsOverride": true,
 "MetaTag": "sample string 10"
 }
]

---

## LeaseRenewalIncreaseOffers

LeaseRenewalIncre...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 CreateUser
 GetByPost
 IsApprovalRequiredOrAtLeastOneRecordPresent
 LeaseRenewal
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 LeaseRenewalIncreaseOffers Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LeaseRenewalIncreaseOffers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LeaseRenewalIncreaseOfferFilterFields List
 Define this parameter in the request URI.
 embeds
 LeaseRenewalIncreaseOfferEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeaseRenewalIncreaseOfferOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeaseRenewalIncreaseOfferModel
 Properties
 NameTypeOptimized FiltersAttributes
 LeaseRenewalIncreaseOfferID
 Integer
 EqualTo
, 
 In
 Primary Key
 LeaseRenewalID
 Integer
 EqualTo
 Amount
 Decimal
 RecurringChargeID
 Int32
 ChargeIncrease
 Decimal
 ChargeTypeID
 Integer
 EqualTo
 SetUserID
 Integer
 EqualTo
 SetDate
 DateTime
 ApprovalUserID
 Int32
 EqualTo
 ApprovalDate
 DateTime
 Comment
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ApprovalUser
 UserModel
 ChargeType
 ChargeTypeModel
 LeaseRenewal
 LeaseRenewalModel
 SetUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LeaseRenewalIncreaseOfferID": 1,
 "LeaseRenewalID": 2,
 "Amount": 3.0,
 "RecurringChargeID": 1,
 "ChargeIncrease": 4.0,
 "ChargeTypeID": 5,
 "SetUserID": 6,
 "SetDate": "2026-04-29T15:56:58.3028129-04:00",
 "ApprovalUserID": 1,
 "ApprovalDate": "2026-04-29T15:56:58.3028129-04:00",
 "Comment": "sample string 8",
 "CreateDate": "2026-04-29T15:56:58.3028129-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:56:58.3028129-04:00",
 "UpdateUserID": 12,
 "MetaTag": "sample string 15"
 }
]

---

## LeaseRenewals

LeaseRenewals
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Attachments
 ChargeEscalations
 ChargeEscalationsFromRecurringCharges
 ChargeTypeSetups
 CommercialRecoverableExpenseSetups
 CommercialUserDefinedFields
 CommercialUserDefinedValues
 CreateUser
 GetByPost
 LeaseRenewalAttachments
 LeaseRenewalIncreaseOffer
 LeaseRenewalSignableDocumentPackets
 LeaseTerm
 LeaseTermProperties
 LeaseTerms
 NonCommercialUserDefinedFields
 NonCommercialUserDefinedValues
 ParentLease
 QuickSearch
 Search
 SignableDocumentPackets
 Unit
 UpdateUser
 UploadAttachment
 UserDefinedValues
 Rent Manager Web API Reference
 LeaseRenewals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LeaseRenewals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 LeaseRenewalFilterFields List
 Define this parameter in the request URI.
 embeds
 LeaseRenewalEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeaseRenewalOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 LeaseRenewalGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeaseRenewalModel
 Properties
 NameTypeOptimized FiltersAttributes
 LeaseRenewalID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentLeaseID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
, 
 In
 LeaseTermID
 Integer
 EqualTo
 LeaseLength
 Integer
 SignDate
 DateTime
 StartDate
 DateTime
 EndDate
 DateTime
 DefaultCommercialExpensePercentage
 Decimal
 DefaultCommercialExpenseAdminPercentage
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 SignableDocumentStatus
 String
 Read Only
 SignableDocumentPackets
 CrossLeaseRenewalSignableDocumentPacketModel
 UserDefinedValues
 UserDefinedValueModel
 ParentLease
 LeaseModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Unit
 UnitModel
 Tenant
 TenantModel
 LeaseRenewalAttachments
 LeaseRenewalAttachmentModel
 LeaseRenewalSignableDocumentPackets
 LeaseRenewalSignableDocumentPacketModel
 LeaseTerm
 LeaseTermModel
 ChargeTypeSetups
 ChargeTypeSetupModel
 CommercialRecoverableExpenseSetups
 CommercialRecoverableExpenseSetupModel
 ChargeEscalations
 ChargeEscalationModel
 LeaseRenewalIncreaseOffer
 LeaseRenewalIncreaseOfferModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LeaseRenewalID": 1,
 "ParentLeaseID": 2,
 "UnitID": 3,
 "LeaseTermID": 4,
 "LeaseLength": 5,
 "SignDate": "2026-04-29T15:56:58.4798514-04:00",
 "StartDate": "2026-04-29T15:56:58.4798514-04:00",
 "EndDate": "2026-04-29T15:56:58.4798514-04:00",
 "DefaultCommercialExpensePercentage": 6.0,
 "DefaultCommercialExpenseAdminPercentage": 7.0,
 "CreateDate": "2026-04-29T15:56:58.4798514-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:56:58.4798514-04:00",
 "UpdateUserID": 11,
 "SignableDocumentStatus": "sample string 12",
 "MetaTag": "sample string 14"
 }
]

---

## LeaseTermEntityDifferentials

LeaseTermEntityDi...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 LeaseTerm
 Property
 QuickSearch
 Search
 Rent Manager Web API Reference
 LeaseTermEntityDifferentials Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LeaseTermEntityDifferentials?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LeaseTermEntityDifferentialFilterFields List
 Define this parameter in the request URI.
 embeds
 LeaseTermEntityDifferentialEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeaseTermEntityDifferentialOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeaseTermEntityDifferentialModel
 Properties
 NameTypeOptimized FiltersAttributes
 LeaseTermEntityDifferentialID
 Integer
 EqualTo
 Primary Key
 LeaseTermID
 Integer
 In
, 
 EqualTo
 PropertyID
 Int32
 EqualTo
 Differential
 Decimal
 IsDifferentialPercentage
 Boolean
 EnableRentOffset
 Boolean
 IsAppliedToORI
 Boolean
 IsAppliedToAssets
 Boolean
 Property
 PropertyModel
 LeaseTerm
 LeaseTermModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LeaseTermEntityDifferentialID": 1,
 "LeaseTermID": 2,
 "PropertyID": 1,
 "Differential": 3.0,
 "IsDifferentialPercentage": true,
 "EnableRentOffset": true,
 "IsAppliedToORI": true,
 "IsAppliedToAssets": true,
 "MetaTag": "sample string 9"
 }
]

---

## LeaseTerms

LeaseTerms
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 LeaseTermEntityDifferentials
 LeaseTermProperties
 Properties
 QuickSearch
 Search
 Rent Manager Web API Reference
 LeaseTerms Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LeaseTerms?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 LeaseTermFilterFields List
 Define this parameter in the request URI.
 embeds
 LeaseTermEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeaseTermOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 LeaseTermGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeaseTermModel
 Properties
 NameTypeOptimized FiltersAttributes
 LeaseTermID
 Integer
 EqualTo
, 
 In
 Primary Key
 LeaseTerm
 String
 EqualTo
 Duration
 Integer
 TimeInterval
 eLeaseTermPeriod
 IsMonthToMonth
 Boolean
 EqualTo
 IsConsiderAsRenewal
 Boolean
 EnableRentOffset
 Boolean
 IsAppliedToORI
 Boolean
 IsAppliedToAssets
 Boolean
 LeaseTermProperties
 LeaseTermPropertyModel
 Properties
 PropertyModel
 PropertyIDsToInclude
 Integer
 LeaseTermEntityDifferentials
 LeaseTermEntityDifferentialModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LeaseTermID": 1,
 "LeaseTerm": "sample string 2"
 }
]

---

## Leases

Leases
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ActiveLeaseRenewal
 CreateUser
 GetByPost
 LeaseRenew
 LeaseRenewals
 Property
 QuickSearch
 RetailSales
 Search
 Tenant
 Unit
 UpdateUser
 Rent Manager Web API Reference
 Leases Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Leases?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LeaseFilterFields List
 Define this parameter in the request URI.
 embeds
 LeaseEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LeaseOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LeaseModel
 Properties
 NameTypeOptimized FiltersAttributes
 LeaseID
 Integer
 EqualTo
, 
 In
 Primary Key
 TenantID
 Integer
 EqualTo
, 
 In
 UnitID
 Int32
 EqualTo
, 
 In
 PropertyID
 Integer
 EqualTo
, 
 In
 IsCommercial
 Boolean
 MoveInDate
 DateTime
 MoveOutDate
 DateTime
 ExpectedMoveOutDate
 DateTime
 NoticeDate
 DateTime
 IsMoveOutConfirmed
 Boolean
 ArrivalDate
 DateTime
 DepartureDate
 DateTime
 IsExcludeFromMasterPolicy
 Boolean
 SortOrder
 Integer
 CreateDate
 DateTime
 UpdateDate
 DateTime
 StartDate
 DateTime
 Read Only
, 
 Calculated Field
, 
 Requires Embed (LeaseRenewals)
 EndDate
 DateTime
 Read Only
, 
 Calculated Field
, 
 Requires Embed (LeaseRenewals)
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 LeaseRenewals
 LeaseRenewalModel
 Property
 PropertyModel
 Tenant
 TenantModel
 Unit
 UnitModel
 RetailSales
 RetailSaleModel
 RenterInsurancePolicies
 RenterInsurancePolicyModel
 ActiveRenterInsurancePolicy
 RenterInsurancePolicyModel
 PropertyUnit
 String
 Read Only
, 
 Calculated Field
 UnitProperty
 String
 Read Only
, 
 Calculated Field
 ActiveLeaseRenewal
 LeaseRenewalModel
 PromotionPeriods
 PromotionPeriodModel
 LeaseVehicles
 LeaseVehicleModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LeaseID": 1,
 "TenantID": 2
 }
]

---

## LetterTemplateFolders

LetterTemplateFol...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 LetterTemplateLetterTemplateFolders
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 LetterTemplateFolders Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LetterTemplateFolders?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LetterTemplateFolderFilterFields List
 Define this parameter in the request URI.
 embeds
 LetterTemplateFolderEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LetterTemplateFolderOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LetterTemplateFolderModel
 Properties
 NameTypeOptimized FiltersAttributes
 LetterTemplateFolderID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 LetterTemplateType
 eLetterTemplateType
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 LetterTemplateLetterTemplateFolders
 LetterTemplateLetterTemplateFolderModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LetterTemplateFolderID": 1,
 "Name": "sample string 2",
 "CreateDate": "2026-04-29T15:57:09.0366363-04:00",
 "CreateUserID": 4,
 "UpdateDate": "2026-04-29T15:57:09.0366363-04:00",
 "UpdateUserID": 6,
 "ConcurrencyID": 7,
 "MetaTag": "sample string 9"
 }
]

---

## LetterTemplateLetterTemplateFolders

LetterTemplateLet...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 LetterTemplate
 LetterTemplateFolder
 QuickSearch
 Search
 Rent Manager Web API Reference
 LetterTemplateLetterTemplateFolders Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LetterTemplateLetterTemplateFolders?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LetterTemplateLetterTemplateFolderFilterFields List
 Define this parameter in the request URI.
 embeds
 LetterTemplateLetterTemplateFolderEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LetterTemplateLetterTemplateFolderOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LetterTemplateLetterTemplateFolderModel
 Properties
 NameTypeOptimized FiltersAttributes
 LetterTemplateLetterTemplateFolderID
 Integer
 EqualTo
, 
 In
 Primary Key
 LetterTemplateID
 Integer
 EqualTo
, 
 In
 LetterTemplateFolderID
 Integer
 EqualTo
 LetterTemplate
 LetterTemplateModel
 LetterTemplateFolder
 LetterTemplateFolderModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LetterTemplateLetterTemplateFolderID": 1,
 "LetterTemplateID": 2,
 "LetterTemplateFolderID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## LetterTemplates

LetterTemplates
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 DownloadFile
 Footer
 GetByPost
 Header
 HistoryCategory
 LetterTemplateFilters
 LetterTemplateLetterTemplateFolder
 LetterTemplateRoles
 LetterTemplateUsers
 MergeLetterTemplate
 QuickSearch
 RunLetterTemplates
 Search
 UpdateUser
 UploadFile
 Rent Manager Web API Reference
 LetterTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LetterTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 LetterTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 LetterTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LetterTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 LetterTemplateGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LetterTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 LetterTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 LetterTemplateType
 eLetterTemplateType
 EqualTo
, 
 In
 Description
 String
 SortOrder
 Integer
 Token
 String
 IsAllUsers
 Boolean
 RecordsPerPage
 Integer
 HeaderLetterTemplateID
 Integer
 FooterLetterTemplateID
 Integer
 ScriptBeforeMerge
 String
 IsKeepTogether
 Boolean
 IsLockAfterMerged
 Boolean
 IsVPOReady
 Boolean
 IsSignable
 Boolean
 IsAdverseActionLetter
 Boolean
 IsIncomeVerificationAdverseActionLetter
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 IsOnRightClickMenu
 Boolean
 EqualTo
 IsOnLetterMenu
 Boolean
 EqualTo
 VPOToAddress
 String
 VPOFromAddress
 String
 LetterTemplateUsers
 LetterTemplateUserModel
 LetterTemplateRoles
 LetterTemplateRoleModel
 LetterTemplateFilters
 LetterTemplateFilterModel
 Header
 LetterTemplateModel
 Footer
 LetterTemplateModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MaximumSignerCount
 Integer
 Read Only
 RequiresCompanyRepresentativeSignatures
 Boolean
 Read Only
 HistoryCategoryID
 Integer
 EqualTo
 IsEmailEnabled
 Boolean
 EmailSubject
 String
 SignableFields
 LetterTemplateSignableFieldModel
 LetterTemplateLetterTemplateFolder
 LetterTemplateLetterTemplateFolderModel
 DocumentPacketDocuments
 DocumentPacketDocumentModel
 HistoryCategory
 HistoryCategoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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

---

## LoanAutomationSchedules

LoanAutomationSch...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 LoanAutomationScheduleProperties
 PropertyGroup
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 LoanAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LoanAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LoanAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 LoanAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LoanAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LoanAutomationScheduleModel
 Loan Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 LoanAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 Name
 String
 PropertyGroupID
 Integer
 IsActive
 Boolean
 RunDay
 Integer
 PostingDay
 Integer
 StartDate
 DateTime
 EndDate
 DateTime
 CreateUserID
 Integer
 UpdateUserID
 Integer
 NotificationEmail
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 IncludeDetails
 Boolean
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyGroup
 PropertyGroupModel
 LoanAutomationScheduleProperties
 LoanAutomationSchedulePropertyModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LoanAutomationScheduleID": 1,
 "Name": "sample string 2",
 "PropertyGroupID": 3,
 "IsActive": true,
 "RunDay": 5,
 "PostingDay": 6,
 "StartDate": "2026-04-29T15:57:09.5464527-04:00",
 "EndDate": "2026-04-29T15:57:09.5464527-04:00",
 "CreateUserID": 9,
 "UpdateUserID": 10,
 "NotificationEmail": "sample string 11",
 "CreateDate": "2026-04-29T15:57:09.5464527-04:00",
 "UpdateDate": "2026-04-29T15:57:09.5464527-04:00",
 "IncludeDetails": true,
 "LastRunDate": "2026-04-29T15:57:09.5464527-04:00",
 "NextRunDate": "2026-04-29T15:57:09.5464527-04:00",
 "ConcurrencyID": 16,
 "MetaTag": "sample string 18"
 }
]

---

## LoanLateFeeAutomationSchedules

LoanLateFeeAutoma...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 FeeChargeType
 GetByPost
 LoanLateFeeAutomationScheduleChargeTypes
 LoanLateFeeAutomationScheduleProperties
 PropertyGroup
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 LoanLateFeeAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LoanLateFeeAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LoanLateFeeAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 LoanLateFeeAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LoanLateFeeAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LoanLateFeeAutomationScheduleModel
 Loan Late Fee Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 LoanLateFeeAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 IsRunLastDayOfMonth
 Boolean
 IsPostLastDayOfMonth
 Boolean
 PropertyGroupID
 Integer
 EqualTo
 Name
 String
 IsActive
 Boolean
 StartDate
 DateTime
 EndDate
 DateTime
 RunDay
 Integer
 PostingDay
 Integer
 NotificationEmail
 String
 IncludeDetails
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 DelinquentCriteria
 eLateFeeSchedulesDelinquencyCriteriaOperator
 DelinquentCriteriaAmount
 Decimal
 DaysDelinquentMin
 Integer
 DaysDelinquentMax
 Integer
 AsOfOffset
 Integer
 IsCurrentTenantsOnly
 Boolean
 IsLastChargeOnly
 Boolean
 FeeChargeTypeID
 Integer
 EqualTo
 Comment
 String
 IsLoanLateFeePercent
 Boolean
 IsOverrideFixedAmount
 Boolean
 LoanLateFeePercentAmount
 Decimal
 LoanLateFeeFixedAmount
 Decimal
 IsAddHistoryNoteForEachCharge
 Boolean
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyGroup
 PropertyGroupModel
 LoanLateFeeAutomationScheduleProperties
 LoanLateFeeAutomationSchedulePropertyModel
 Required (create)
 FeeChargeType
 ChargeTypeModel
 LoanLateFeeAutomationScheduleChargeTypes
 LoanLateFeeAutomationScheduleChargeTypeModel
 Required (create)
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LoanLateFeeAutomationScheduleID": 1,
 "IsRunLastDayOfMonth": true,
 "IsPostLastDayOfMonth": true,
 "PropertyGroupID": 4,
 "Name": "sample string 5",
 "IsActive": true,
 "StartDate": "2026-04-29T15:57:09.7084927-04:00",
 "EndDate": "2026-04-29T15:57:09.7084927-04:00",
 "RunDay": 8,
 "PostingDay": 9,
 "NotificationEmail": "sample string 10",
 "IncludeDetails": true,
 "CreateDate": "2026-04-29T15:57:09.7084927-04:00",
 "UpdateDate": "2026-04-29T15:57:09.7084927-04:00",
 "DelinquentCriteriaAmount": 14.0,
 "DaysDelinquentMin": 15,
 "DaysDelinquentMax": 16,
 "AsOfOffset": 17,
 "IsCurrentTenantsOnly": true,
 "IsLastChargeOnly": true,
 "FeeChargeTypeID": 20,
 "Comment": "sample string 21",
 "IsLoanLateFeePercent": true,
 "IsOverrideFixedAmount": true,
 "LoanLateFeePercentAmount": 24.0,
 "LoanLateFeeFixedAmount": 25.0,
 "IsAddHistoryNoteForEachCharge": true,
 "CreateUserID": 27,
 "UpdateUserID": 28,
 "LastRunDate": "2026-04-29T15:57:09.7084927-04:00",
 "NextRunDate": "2026-04-29T15:57:09.7084927-04:00",
 "ConcurrencyID": 30,
 "MetaTag": "sample string 32"
 }
]

---

## LoanPayables

LoanPayables
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AmortizationSchedule
 Asset
 Checks
 CreateUser
 Entity
 FileAttachments
 GetByPost
 HistoryNotes
 HistorySystemNotes
 Journals
 LoanPayableOtherCost
 LoanPayableRateSchedule
 LoanPayableTransaction
 NextMonthlyPayment
 NextPaymentPostingInformation
 QuickSearch
 RefinancesLoanPayable
 Search
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 LoanPayables Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LoanPayables?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LoanPayableFilterFields List
 Define this parameter in the request URI.
 embeds
 LoanPayableEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LoanPayableOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LoanPayableModel
 Properties
 NameTypeOptimized FiltersAttributes
 LoanPayableID
 Integer
 EqualTo
 Primary Key
 Name
 String
 LoanNumber
 String
 EntityID
 Integer
 EqualTo
 AssetID
 Integer
 EqualTo
 VendorID
 Integer
 EqualTo
 PrincipalGLAccountID
 Integer
 EqualTo
 InterestGLAccountID
 Integer
 EqualTo
 BankID
 Integer
 EqualTo
 OriginationDate
 DateTime
 DueDay
 Integer
 FirstPaymentDate
 DateTime
 TermInMonths
 Integer
 MaturityDate
 DateTime
 OriginalPrincipal
 Decimal
 RemainingPrincipal
 Decimal
 Read Only
 PreexistingStartingPaymentNumber
 Integer
 Read Only
 PreexistingStartingPaymentDate
 DateTime
 PreexistingPrincipal
 Decimal
 InterestMethod
 eLoanPayablesInterestMethod
 InterestType
 eLoanPayablesInterestType
 InitialInterestRatePercentage
 Decimal
 IsInterestOnlyLoan
 Boolean
 InterestOnlyLoanTermType
 eLoanPayablesInterestOnlyLoanTermType
 InterestOnlyStartDate
 DateTime
 InterestOnlyEndDate
 DateTime
 PaymentMethod
 eLoanPayablesPaymentMethod
 IncludesBalloonPayment
 Boolean
 BalloonPaymentDate
 DateTime
 RefinancesLoanPayableID
 Integer
 EqualTo
 RefinanceType
 eLoanPayablesRefinanceType
 EqualTo
 IsAutomate
 Boolean
 AutomationPostDay
 Integer
 AutomationNotificationEmail
 String
 Comment
 String
 IsShowCommentBanner
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Checks
 CheckModel
 Journals
 JournalModel
 FileAttachments
 FileAttachmentModel
 ConcurrencyID
 Integer
 Concurrency Key
 Asset
 AssetModel
 PrincipalGLAccount
 GLAccountModel
 InterestGLAccount
 GLAccountModel
 Bank
 GLAccountModel
 Entity
 PropertyModel
 RefinancesLoanPayable
 LoanPayableModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Vendor
 VendorModel
 LoanPayableTransactions
 LoanPayableTransactionModel
 LoanPayableRateSchedules
 LoanPayableRateScheduleModel
 LoanPayableOtherCosts
 LoanPayableOtherCostModel
 History
 HistoryModel
 HistoryNotes
 HistoryNoteModel
 HistorySystemNotes
 HistorySystemNoteModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LoanPayableID": 1,
 "Name": "sample string 2",
 "LoanNumber": "sample string 3",
 "EntityID": 4,
 "AssetID": 5,
 "VendorID": 6,
 "PrincipalGLAccountID": 7,
 "InterestGLAccountID": 8,
 "BankID": 9,
 "OriginationDate": "2026-04-29T15:57:09.8856154-04:00",
 "DueDay": 11,
 "FirstPaymentDate": "2026-04-29T15:57:09.8856154-04:00",
 "TermInMonths": 12,
 "MaturityDate": "2026-04-29T15:57:09.8856154-04:00",
 "OriginalPrincipal": 13.0,
 "RemainingPrincipal": 14.0,
 "PreexistingStartingPaymentNumber": 15,
 "PreexistingStartingPaymentDate": "2026-04-29T15:57:09.8856154-04:00",
 "PreexistingPrincipal": 16.0,
 "InitialInterestRatePercentage": 17.0,
 "IsInterestOnlyLoan": true,
 "InterestOnlyStartDate": "2026-04-29T15:57:09.8856154-04:00",
 "InterestOnlyEndDate": "2026-04-29T15:57:09.8856154-04:00",
 "IncludesBalloonPayment": true,
 "BalloonPaymentDate": "2026-04-29T15:57:09.8856154-04:00",
 "RefinancesLoanPayableID": 21,
 "IsAutomate": true,
 "AutomationPostDay": 23,
 "AutomationNotificationEmail": "sample string 24",
 "Comment": "sample string 25",
 "IsShowCommentBanner": true,
 "CreateDate": "2026-04-29T15:57:09.8856154-04:00",
 "CreateUserID": 28,
 "UpdateDate": "2026-04-29T15:57:09.8856154-04:00",
 "UpdateUserID": 30,
 "ConcurrencyID": 31,
 "MetaTag": "sample string 33"
 }
]

---

## LoanTransactions

LoanTransactions
 Retrieve Collection
 Retrieve Instance
 Charge
 Credit
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 LoanTransactions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET LoanTransactions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LoanTransactionFilterFields List
 Define this parameter in the request URI.
 embeds
 LoanTransactionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LoanTransactionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LoanTransactionModel
 Properties
 NameTypeOptimized FiltersAttributes
 LoanTransactionID
 Integer
 EqualTo
, 
 In
 Primary Key
 LoanID
 Integer
 EqualTo
, 
 In
 ChargeID
 Integer
 EqualTo
, 
 In
 CreditID
 Integer
 EqualTo
, 
 In
 PaymentNumber
 Integer
 PaymentGroup
 Integer
 IsDefaultingCharge
 Boolean
 IsDefaultingCredit
 Boolean
 Charge
 ChargeModel
 Credit
 CreditModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LoanTransactionID": 1,
 "LoanID": 2,
 "ChargeID": 3,
 "CreditID": 4,
 "PaymentNumber": 5,
 "PaymentGroup": 6,
 "IsDefaultingCharge": true,
 "IsDefaultingCredit": true,
 "MetaTag": "sample string 10"
 }
]

---

## Loans

Loans
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 AmortizationSchedule
 Default
 ExtraPayment
 GetByPost
 InterestChargeType
 LoanContacts
 LoanOtherCharges
 LoanRates
 LoanTransactions
 MetroLoan
 MetroLoans
 Payoff
 PostLoanLateFees
 PostLoans
 PrepayChargeType
 PrincipalChargeType
 Property
 Prospect
 QuickSearch
 RollbackLastLoanPosting
 Search
 Tenant
 Unit
 UserDefinedValues
 Rent Manager Web API Reference
 Loans Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Loans?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 LoanFilterFields List
 Define this parameter in the request URI.
 embeds
 LoanEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 LoanOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 LoanGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LoanModel
 Properties
 NameTypeOptimized FiltersAttributes
 LoanID
 Integer
 EqualTo
, 
 In
 Primary Key
 Reference
 String
 EqualTo
 AccountID
 Integer
 EqualTo
, 
 In
 AccountType
 eAccountType
 OriginalPrincipal
 Decimal
 DownPayment
 Decimal
 CloseDate
 DateTime
 LoanDate
 DateTime
 PaymentStartDate
 DateTime
 PaymentDay
 Integer
 StartingPaymentNumber
 Integer
 AdjustedPrincipal
 Decimal
 AdjustedStartDate
 DateTime
 LastPreexistingPaymentDate
 DateTime
 PreexistingInterestYear
 Integer
 PreexistingInterest
 Decimal
 Term
 Integer
 InterestMethod
 eInterestMethod
 VisibleDaysBeforeDueDate
 Integer
 IsRounded
 Boolean
 IsExtendTerm
 Boolean
 IsIncreasePrincipal
 Boolean
 PrincipalChargeTypeID
 Integer
 EqualTo
 InterestChargeTypeID
 Integer
 EqualTo
 PrepayChargeTypeID
 Integer
 EqualTo
 SaleTransactionID
 Integer
 EqualTo
 CreditTransactionID
 Integer
 EqualTo
 ChargesPosted
 Integer
 LastPostDate
 DateTime
 InsuranceExpirationDate
 DateTime
 IsUsingAveragePrincipal
 Boolean
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 PrincipalPaid
 Decimal
 PrincipalCredited
 Decimal
 PrincipalBalance
 Decimal
 Read Only
, 
 Calculated Field
 Status
 String
 Read Only
, 
 Calculated Field
 AcquisitionDate
 DateTime
 IsOpen
 Boolean
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 LoanTransactions
 LoanTransactionModel
 LoanRates
 LoanRateModel
 Required (create)
 LoanOtherCharges
 LoanOtherChargeModel
 Required (create)
 UserDefinedValues
 UserDefinedValueModel
 Required (create)
 Account
 AccountModel
 Property
 PropertyModel
 Unit
 UnitModel
 PrepayChargeType
 ChargeTypeModel
 PrincipalChargeType
 ChargeTypeModel
 InterestChargeType
 ChargeTypeModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 LoanContacts
 LoanContactModel
 MetroLoan
 MetroLoanModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LoanID": 1,
 "Reference": "sample string 2",
 "AccountID": 3,
 "OriginalPrincipal": 4.0,
 "DownPayment": 5.0,
 "CloseDate": "2026-04-29T15:57:10.2182929-04:00",
 "LoanDate": "2026-04-29T15:57:10.2182929-04:00",
 "PaymentStartDate": "2026-04-29T15:57:10.2182929-04:00",
 "PaymentDay": 9,
 "StartingPaymentNumber": 10,
 "AdjustedPrincipal": 11.0,
 "AdjustedStartDate": "2026-04-29T15:57:10.2182929-04:00",
 "LastPreexistingPaymentDate": "2026-04-29T15:57:10.2182929-04:00",
 "PreexistingInterestYear": 14,
 "PreexistingInterest": 15.0,
 "Term": 16,
 "VisibleDaysBeforeDueDate": 17,
 "IsRounded": true,
 "IsExtendTerm": true,
 "IsIncreasePrincipal": true,
 "PrincipalChargeTypeID": 21,
 "InterestChargeTypeID": 22,
 "PrepayChargeTypeID": 23,
 "SaleTransactionID": 25,
 "CreditTransactionID": 27,
 "ChargesPosted": 28,
 "LastPostDate": "2026-04-29T15:57:10.2339178-04:00",
 "InsuranceExpirationDate": "2026-04-29T15:57:10.2339178-04:00",
 "IsUsingAveragePrincipal": true,
 "PropertyID": 31,
 "UnitID": 32,
 "PrincipalPaid": 33.0,
 "PrincipalCredited": 34.0,
 "PrincipalBalance": 12.0,
 "Status": "Open",
 "AcquisitionDate": "2026-04-29T15:57:10.2339178-04:00",
 "IsOpen": true,
 "CreateDate": "2026-04-29T15:57:10.2339178-04:00",
 "CreateUserID": 38,
 "UpdateDate": "2026-04-29T15:57:10.2339178-04:00",
 "UpdateUserID": 40,
 "ConcurrencyID": 41,
 "MetaTag": "sample string 43"
 }
]

---

## Locations

Locations
 Retrieve Collection
 Retrieve Instance
 CurrentLocation
 GetByPost
 LocationSortOrder
 PostingAutomationWorkflows
 QuickSearch
 Search
 Users
 Rent Manager Web API Reference
 Locations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Locations?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 LocationFilterFields List
 Define this parameter in the request URI.
 embeds
 LocationEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
LocationModel
 Properties
 NameTypeOptimized FiltersAttributes
 LocationID
 Integer
 Primary Key
 Name
 String
 FriendlyName
 String
 LocationSortOrder
 LocationSortOrderModel
 IsMainLocation
 Boolean
 IsLWAEnabled
 Boolean
 IsTWAEnabled
 Boolean
 IsOWAEnabled
 Boolean
 IsAvidPay
 Boolean
 IsEcheckEnabled
 Boolean
 Read Only
 IsOAPEnabled
 Boolean
 NDTUsername
 String
 BroadcastUsername
 String
 IsStrOnlineBookingEnabled
 Boolean
 CreateDate
 DateTime
 PostingAutomationWorkflows
 LocationsPostingAutomationWorkflowModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "LocationID": 1,
 "Name": "sample string 2",
 "FriendlyName": "sample string 3",
 "IsMainLocation": true,
 "IsLWAEnabled": true,
 "IsTWAEnabled": true,
 "IsOWAEnabled": true,
 "IsAvidPay": true,
 "IsEcheckEnabled": true,
 "IsOAPEnabled": true
 }
]

---

## MaintenanceSchedulingServiceManagerCategories

MaintenanceSchedu...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 ServiceManagerCategory
 Rent Manager Web API Reference
 MaintenanceSchedulingServiceManagerCategories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MaintenanceSchedulingServiceManagerCategories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MaintenanceSchedulingServiceManagerCategoryFilterFields List
 Define this parameter in the request URI.
 embeds
 MaintenanceSchedulingServiceManagerCategoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MaintenanceSchedulingServiceManagerCategoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MaintenanceSchedulingServiceManagerCategoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 MaintenanceSchedulingServiceManagerCategoryID
 Integer
 EqualTo
 Primary Key
 ServiceManagerCategoryID
 Integer
 EqualTo
 ServiceManagerCategory
 ServiceManagerCategoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MaintenanceSchedulingServiceManagerCategoryID": 1,
 "ServiceManagerCategoryID": 2,
 "MetaTag": "sample string 4"
 }
]

---

## MaintenanceTechs

MaintenanceTechs
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MaintenanceGroupMaintenanceTechs
 MaintenanceTechAvailability
 MaintenanceTechTimeOff
 QuickSearch
 Search
 ServiceManagerIssues
 UpdateUser
 User
 Rent Manager Web API Reference
 MaintenanceTechs Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MaintenanceTechs?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MaintenanceTechFilterFields List
 Define this parameter in the request URI.
 embeds
 MaintenanceTechEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MaintenanceTechOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MaintenanceTechModel
 Properties
 NameTypeOptimized FiltersAttributes
 MaintenanceTechID
 Integer
 EqualTo
 Primary Key
 UserID
 Integer
 EqualTo
 IsOnDuty
 Boolean
 Requires Embed (IsOnDuty)
 IsScheduleOverride
 Boolean
 ScheduleOverrideDate
 DateTime
 IsScheduleEnabled
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 User
 UserModel
 MaintenanceTechAvailability
 MaintenanceTechAvailabilityModel
 MaintenanceTechTimeOff
 MaintenanceTechTimeOffModel
 MaintenanceGroupMaintenanceTechs
 MaintenanceGroupMaintenanceTechModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MaintenanceTechID": 1,
 "UserID": 2,
 "IsOnDuty": true,
 "IsScheduleOverride": true,
 "ScheduleOverrideDate": "2026-04-29T15:57:10.7338889-04:00",
 "IsScheduleEnabled": true,
 "CreateDate": "2026-04-29T15:57:10.7338889-04:00",
 "CreateUserID": 8,
 "UpdateDate": "2026-04-29T15:57:10.7338889-04:00",
 "UpdateUserID": 10,
 "MetaTag": "sample string 13"
 }
]

---

## MakeReadyActions

MakeReadyActions
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MakeReadyActions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MakeReadyActions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MakeReadyActionFilterFields List
 Define this parameter in the request URI.
 embeds
 MakeReadyActionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MakeReadyActionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MakeReadyActionGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MakeReadyActionModel
 Properties
 NameTypeOptimized FiltersAttributes
 MakeReadyActionID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MakeReadyActionID": 1,
 "Name": "sample string 2"
 }
]

---

## MakeReadyPosts

MakeReadyPosts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignMakeReadyProcess
 CompletionUnitStatusType
 CreateItemFromTemplate
 CreateUser
 GetByPost
 Job
 Lease
 MakeReadyPostItems
 ManagerUser
 QuickSearch
 Search
 Unit
 UpdateUser
 Rent Manager Web API Reference
 MakeReadyPosts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MakeReadyPosts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MakeReadyPostFilterFields List
 Define this parameter in the request URI.
 embeds
 MakeReadyPostEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MakeReadyPostOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MakeReadyPostModel
 Properties
 NameTypeOptimized FiltersAttributes
 MakeReadyPostID
 Integer
 EqualTo
 Primary Key
 UnitID
 Integer
 EqualTo
, 
 In
 LeaseID
 Integer
 EqualTo
 IsEnforceSequence
 Boolean
 StartDate
 DateTime
 CompletionDate
 DateTime
 CompletionUnitStatusTypeID
 Integer
 EqualTo
 IsMaintainCurrentStatus
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 Comments
 String
 ManagerUserID
 Integer
 JobID
 Integer
 IsHighPriority
 Boolean
 ConcurrencyID
 Integer
 Concurrency Key
 MakeReadyPostItems
 MakeReadyPostItemModel
 Unit
 UnitModel
 Lease
 LeaseModel
 CompletionUnitStatusType
 UnitStatusTypeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ManagerUser
 UserModel
 Job
 JobModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MakeReadyPostID": 1,
 "UnitID": 2,
 "LeaseID": 3,
 "IsEnforceSequence": true,
 "StartDate": "2026-04-29T15:57:11.0417974-04:00",
 "CompletionDate": "2026-04-29T15:57:11.0417974-04:00",
 "CompletionUnitStatusTypeID": 6,
 "IsMaintainCurrentStatus": true,
 "CreateDate": "2026-04-29T15:57:11.0417974-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:11.0417974-04:00",
 "UpdateUserID": 11,
 "Comments": "sample string 12",
 "ManagerUserID": 13,
 "JobID": 14,
 "IsHighPriority": true,
 "ConcurrencyID": 16,
 "MetaTag": "sample string 18"
 }
]

---

## MakeReadyTemplateItems

MakeReadyTemplate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignedToUser
 CreateUser
 GetByPost
 InspectionIssuesAction
 InspectionStatus
 InspectionTemplate
 InspectionType
 InspectorUser
 MakeReadyAction
 MakeReadyTemplate
 QuickSearch
 Search
 ServiceManagerCategory
 ServiceManagerIssueCheckListItems
 ServiceManagerPriority
 ServiceManagerStatus
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 MakeReadyTemplateItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MakeReadyTemplateItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MakeReadyTemplateItemFilterFields List
 Define this parameter in the request URI.
 embeds
 MakeReadyTemplateItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MakeReadyTemplateItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MakeReadyTemplateItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 MakeReadyTemplateItemID
 Integer
 EqualTo
 Primary Key
 MakeReadyTemplateID
 Integer
 EqualTo
 MakeReadyActionID
 Integer
 EqualTo
 MakeReadyItemType
 eMakeReadyItemType
 ServiceManagerIssueName
 String
 Description
 String
 VendorID
 Integer
 EqualTo
 ServiceManagerCategoryID
 Integer
 EqualTo
 ServiceManagerPriorityID
 Integer
 EqualTo
 ServiceManagerStatusID
 Integer
 EqualTo
 IsAssignedToPropertyDefaultUser
 Boolean
 AssignedToUserID
 Integer
 EqualTo
 InspectionTemplateID
 Integer
 EqualTo
 InspectorUserID
 Integer
 EqualTo
 InspectionTypeID
 Integer
 EqualTo
 InspectionStatusID
 Integer
 EqualTo
 IsNotifyWhenReady
 Boolean
 InspectionIssuesActionID
 Integer
 EqualTo
 InspectorType
 eInspectorType
 ExpirationDateOffset
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 DueDateOffset
 Int32
 ScheduledDateOffset
 Int32
 MakeReadyTemplate
 MakeReadyTemplateModel
 MakeReadyAction
 MakeReadyActionModel
 Vendor
 VendorModel
 ServiceManagerCategory
 ServiceManagerCategoryModel
 ServiceManagerPriority
 ServiceManagerPriorityModel
 ServiceManagerStatus
 ServiceManagerStatusModel
 AssignedToUser
 UserModel
 InspectionTemplate
 InspectionTemplateModel
 InspectorUser
 UserModel
 InspectionType
 InspectionTypeModel
 InspectionStatus
 InspectionStatusModel
 InspectionIssuesAction
 MakeReadyActionModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ServiceManagerIssueCheckListItems
 CheckListItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MakeReadyTemplateItemID": 1,
 "MakeReadyTemplateID": 2,
 "MakeReadyActionID": 3,
 "ServiceManagerIssueName": "sample string 4",
 "Description": "sample string 5",
 "VendorID": 6,
 "ServiceManagerCategoryID": 7,
 "ServiceManagerPriorityID": 8,
 "ServiceManagerStatusID": 9,
 "IsAssignedToPropertyDefaultUser": true,
 "AssignedToUserID": 11,
 "InspectionTemplateID": 12,
 "InspectorUserID": 13,
 "InspectionTypeID": 14,
 "InspectionStatusID": 15,
 "IsNotifyWhenReady": true,
 "InspectionIssuesActionID": 17,
 "ExpirationDateOffset": 18,
 "CreateDate": "2026-04-29T15:57:11.2028015-04:00",
 "CreateUserID": 20,
 "UpdateDate": "2026-04-29T15:57:11.2028015-04:00",
 "UpdateUserID": 22,
 "ConcurrencyID": 23,
 "DueDateOffset": 1,
 "ScheduledDateOffset": 1,
 "MetaTag": "sample string 25"
 }
]

---

## MakeReadyTemplates

MakeReadyTemplate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CompletionUnitStatusType
 CreateUser
 GetByPost
 MakeReadyTemplateItems
 MakeReadyTemplateProperties
 QuickSearch
 Search
 UnitStatus
 UpdateUser
 Rent Manager Web API Reference
 MakeReadyTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MakeReadyTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MakeReadyTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 MakeReadyTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MakeReadyTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MakeReadyTemplateGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MakeReadyTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 MakeReadyTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 IsActive
 Boolean
 EqualTo
 CompletionUnitStatusTypeID
 (DEPRECATED) As of 12/7/2020
 replaced by UnitStatusID
 Integer
 EqualTo
 IsMaintainCurrentStatus
 Boolean
 IsEnforceSequence
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 UnitStatusID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CompletionUnitStatusType
 (DEPRECATED) As of 12/7/2020
 replaced by UnitStatus
 UnitStatusTypeModel
 UnitStatus
 UnitStatusModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MakeReadyTemplateProperties
 MakeReadyTemplatePropertyModel
 MakeReadyTemplateItems
 MakeReadyTemplateItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MakeReadyTemplateID": 1,
 "Name": "sample string 2",
 "IsActive": true
 }
]

---

## ManagementFeeAdjustments

ManagementFeeAdju...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 ManagementFeeHistory
 QuickSearch
 Search
 Rent Manager Web API Reference
 ManagementFeeAdjustments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ManagementFeeAdjustments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ManagementFeeAdjustmentFilterFields List
 Define this parameter in the request URI.
 embeds
 ManagementFeeAdjustmentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ManagementFeeAdjustmentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ManagementFeeAdjustmentModel
 Properties
 NameTypeOptimized FiltersAttributes
 ManagementFeeAdjustmentID
 Integer
 EqualTo
 Primary Key
 ManagementFeeHistoryID
 Integer
 MaxFeeAdjustment
 Decimal
 MinFeeAdjustment
 Decimal
 ManagementFeeHistory
 ManagementFeeHistoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ManagementFeeAdjustmentID": 1,
 "ManagementFeeHistoryID": 2,
 "MaxFeeAdjustment": 3.0,
 "MinFeeAdjustment": 4.0,
 "MetaTag": "sample string 6"
 }
]

---

## ManagementFeeAutomationSchedules

ManagementFeeAuto...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 ManagementFeeAutomationScheduleProperties
 PropertyGroup
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ManagementFeeAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ManagementFeeAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ManagementFeeAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 ManagementFeeAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ManagementFeeAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ManagementFeeAutomationScheduleModel
 ManagementFee Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 ManagementFeeAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 PropertyGroupID
 Integer
 Name
 String
 IsActive
 Boolean
 StartDate
 DateTime
 EndDate
 DateTime
 RunDay
 Integer
 PostingDay
 Integer
 NotificationEmail
 String
 IncludeDetails
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 PostingType
 eLeasePeriod
 PayMethod
 eBillPayMethod
 Comment
 String
 IsGroupChkBills
 Boolean
 CreateUserID
 Integer
 UpdateUserID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyGroup
 PropertyGroupModel
 ManagementFeeAutomationScheduleProperties
 ManagementFeeAutomationSchedulePropertyModel
 Required (create)
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ManagementFeeAutomationScheduleID": 1,
 "PropertyGroupID": 2,
 "Name": "sample string 3",
 "IsActive": true,
 "StartDate": "2026-04-29T15:57:11.7028002-04:00",
 "EndDate": "2026-04-29T15:57:11.7028002-04:00",
 "RunDay": 6,
 "PostingDay": 7,
 "NotificationEmail": "sample string 8",
 "IncludeDetails": true,
 "CreateDate": "2026-04-29T15:57:11.7028002-04:00",
 "UpdateDate": "2026-04-29T15:57:11.7028002-04:00",
 "Comment": "sample string 12",
 "IsGroupChkBills": true,
 "CreateUserID": 14,
 "UpdateUserID": 15,
 "LastRunDate": "2026-04-29T15:57:11.7028002-04:00",
 "NextRunDate": "2026-04-29T15:57:11.7028002-04:00",
 "ConcurrencyID": 17,
 "MetaTag": "sample string 19"
 }
]

---

## ManagementFeeHistory

ManagementFeeHist...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 ManagementFeeHistoryCharges
 QuickSearch
 Search
 Rent Manager Web API Reference
 ManagementFeeHistory Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ManagementFeeHistory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ManagementFeeHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 ManagementFeeHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ManagementFeeHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ManagementFeeHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 ManagementFeeHistoryID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 FromDate
 DateTime
 FeeDate
 DateTime
 MinimumFee
 Decimal
 MaximumFee
 Decimal
 FlatFee
 Decimal
 PerUnitFee
 Decimal
 PercentNetIncome
 Decimal
 PercentTotalIncome
 Decimal
 PerOccupiedFee
 Decimal
 IsProratePerOccupiedFee
 Boolean
 IsPostPerUnit
 Boolean
 GLAccountPercentagesAmount
 Decimal
 PassThruAmount
 Decimal
 TransferAmount
 Decimal
 FeeAmount
 Decimal
 PostingID
 Integer
 IsEmptyEndOfContractPost
 Boolean
 ManagementFeeHistoryCharges
 ManagementFeeHistoryChargesModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ManagementFeeHistoryID": 1,
 "PropertyID": 2,
 "FromDate": "2026-04-29T15:57:11.8744575-04:00",
 "FeeDate": "2026-04-29T15:57:11.8744575-04:00",
 "MinimumFee": 5.0,
 "MaximumFee": 6.0,
 "FlatFee": 7.0,
 "PerUnitFee": 8.0,
 "PercentNetIncome": 9.0,
 "PercentTotalIncome": 10.0,
 "PerOccupiedFee": 11.0,
 "IsProratePerOccupiedFee": true,
 "IsPostPerUnit": true,
 "GLAccountPercentagesAmount": 14.0,
 "PassThruAmount": 15.0,
 "TransferAmount": 16.0,
 "FeeAmount": 17.0,
 "PostingID": 18,
 "IsEmptyEndOfContractPost": true,
 "MetaTag": "sample string 21"
 }
]

---

## ManagementFeesSetup

ManagementFeesSet...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeTypePercentages
 ChartAccountPercentages
 ChartAccountTransfers
 GetByPost
 GetFromAllLocations
 Properties
 QuickSearch
 Search
 Rent Manager Web API Reference
 ManagementFeesSetup Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ManagementFeesSetup?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ManagementFeeSetupFilterFields List
 Define this parameter in the request URI.
 embeds
 ManagementFeeSetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ManagementFeeSetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ManagementFeeSetupModel
 Management Fee Setup Model
 Properties
 NameTypeOptimized FiltersAttributes
 ManagementFeeSetupID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsActive
 Boolean
 IsTemplate
 Boolean
 IsPostPerUnit
 Boolean
 IsFromPayment
 Boolean
 MinimumFee
 Decimal
 MaximumFee
 Decimal
 FlatFee
 Decimal
 PerUnitFee
 Decimal
 PercentNetIncome
 Decimal
 PercentTotalIncome
 Decimal
 PerOccupiedFee
 Decimal
 IsProratePerOccupiedFee
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Properties
 CrossManagementFeeSetupPropertyModel
 ChartAccountPercentages
 ManagementFeeSetupGLAccountsModel
 ChartAccountTransfers
 ManagementFeeTransfersModel
 ChargeTypePercentages
 ManagementFeeSetupChargeTypeModel
 CreditChargeTypes
 ManagementFeeSetupCreditChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ManagementFeeSetupID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "IsTemplate": true,
 "IsPostPerUnit": true,
 "IsFromPayment": true,
 "MinimumFee": 7.0,
 "MaximumFee": 8.0,
 "FlatFee": 9.0,
 "PerUnitFee": 10.0,
 "PercentNetIncome": 11.0,
 "PercentTotalIncome": 12.0,
 "PerOccupiedFee": 13.0,
 "IsProratePerOccupiedFee": true,
 "CreateDate": "2026-04-29T15:57:12.0208761-04:00",
 "CreateUserID": 16,
 "UpdateDate": "2026-04-29T15:57:12.0208761-04:00",
 "UpdateUserID": 18,
 "ConcurrencyID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## MarketRents

MarketRents
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BulkModifyMarketRents
 CreateUser
 GetByPost
 QuickSearch
 Search
 Unit
 UpdateUser
 Rent Manager Web API Reference
 MarketRents Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MarketRents?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MarketRentFilterFields List
 Define this parameter in the request URI.
 embeds
 MarketRentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MarketRentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MarketRentModel
 Properties
 NameTypeOptimized FiltersAttributes
 MarketRentID
 Integer
 EqualTo
 Primary Key
 UnitID
 Integer
 In
, 
 EqualTo
 Amount
 Decimal
 Comment
 String
 FromDate
 DateTime
 ToDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Unit
 UnitModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MarketRentID": 1,
 "UnitID": 2,
 "Amount": 3.0,
 "Comment": "sample string 4",
 "FromDate": "2026-04-29T15:57:12.1667646-04:00",
 "ToDate": "2026-04-29T15:57:12.1667646-04:00",
 "CreateDate": "2026-04-29T15:57:12.1667646-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:57:12.1667646-04:00",
 "UpdateUserID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## MarketingFields

MarketingFields
 Retrieve Collection
 Retrieve Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 MarketingFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MarketingFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MarketingFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 MarketingFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MarketingFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MarketingFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 MarketingFieldID
 Integer
 EqualTo
 Primary Key
 MarketingFieldInternalID
 eOnlineListingField
 Read Only
 IsEnabled
 Boolean
 EqualTo
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MarketingFieldID": 1,
 "IsEnabled": true,
 "MetaTag": "sample string 4"
 }
]

---

## MasterMeters

MasterMeters
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Property
 QuickSearch
 Search
 Utility
 Vendor
 Rent Manager Web API Reference
 MasterMeters Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MasterMeters?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MasterMeterFilterFields List
 Define this parameter in the request URI.
 embeds
 MasterMeterEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MasterMeterOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MasterMeterModel
 Properties
 NameTypeOptimized FiltersAttributes
 MasterMeterID
 Integer
 EqualTo
, 
 In
 Primary Key
 UtilityID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
 VendorID
 Integer
 ExpenseAccountGLAccountID
 Integer
 EqualTo
 MeterNumber
 String
 IsActive
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 Utility
 UtilityModel
 Vendor
 VendorModel
 GLAccount
 GLAccountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MasterMeterID": 1,
 "UtilityID": 2,
 "PropertyID": 3,
 "VendorID": 4,
 "ExpenseAccountGLAccountID": 5,
 "MeterNumber": "sample string 6",
 "IsActive": true,
 "CreateDate": "2026-04-29T15:57:12.4681824-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:12.4681824-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## MemorizedComments

MemorizedComments
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MemorizedComments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedComments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedCommentFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedCommentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedCommentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MemorizedCommentGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedCommentModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedCommentID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Comment
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedCommentID": 1,
 "Name": "sample string 2",
 "Comment": "sample string 3",
 "CreateDate": "2026-04-29T15:57:12.6302422-04:00",
 "UpdateDate": "2026-04-29T15:57:12.6302422-04:00",
 "CreateUserID": 6,
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## MemorizedEstimateDetails

MemorizedEstimate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 InventoryItem
 QuickSearch
 Search
 Rent Manager Web API Reference
 MemorizedEstimateDetails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedEstimateDetails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedEstimateDetailFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedEstimateDetailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedEstimateDetailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedEstimateDetailModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedEstimateDetailID
 Integer
 EqualTo
 Primary Key
 MemorizedEstimateID
 Integer
 EqualTo
 InventoryItemID
 Integer
 EqualTo
 Quantity
 Decimal
 MarkUp
 Decimal
 IsTaxable
 Boolean
 Description
 String
 SortOrder
 Integer
 Rate
 Decimal
 IsMarkUpPercentage
 Boolean
 Amount
 Decimal
 Total
 Decimal
 InventoryItem
 InventoryItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedEstimateDetailID": 1,
 "MemorizedEstimateID": 2,
 "InventoryItemID": 3,
 "Quantity": 4.0,
 "MarkUp": 5.0,
 "IsTaxable": true,
 "Description": "sample string 7",
 "SortOrder": 8,
 "Rate": 9.0,
 "IsMarkUpPercentage": true,
 "Amount": 36.0,
 "Total": 56.0,
 "MetaTag": "sample string 12"
 }
]

---

## MemorizedEstimates

MemorizedEstimate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MemorizedEstimateDetails
 Property
 QuickSearch
 SalesRepresentativeUser
 Search
 TaxType
 UpdateUser
 Rent Manager Web API Reference
 MemorizedEstimates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedEstimates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedEstimateFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedEstimateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedEstimateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MemorizedEstimateGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedEstimateModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedEstimateID
 Integer
 EqualTo
 Primary Key
 Reference
 String
 EstimateNumber
 String
 PropertyID
 Integer
 EqualTo
, 
 In
 TaxRate
 Decimal
 IsTaxable
 Boolean
 TaxTypeID
 Integer
 EqualTo
 Interest
 (DEPRECATED) As of 4/17/2020
 Integer
 TotalValue
 Decimal
 Read Only
 MemorizedType
 eMemorizedEstimateType
 MemorizedName
 String
 MemorizedDescription
 String
 Comments
 String
 SalesRepresentativeID
 Integer
 EqualTo
 FromAddress
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 MemorizedEstimateDetails
 MemorizedEstimateDetailModel
 AmountTotal
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (MemorizedEstimateDetails)
 MarkUpTotal
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (MemorizedEstimateDetails)
 Tax
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (MemorizedEstimateDetails)
 Total
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (MemorizedEstimateDetails)
 Property
 PropertyModel
 TaxType
 TaxTypeModel
 SalesRepresentativeUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedEstimateID": 1,
 "Reference": "sample string 2",
 "EstimateNumber": "sample string 3",
 "PropertyID": 4,
 "TaxRate": 5.0,
 "IsTaxable": true,
 "TaxTypeID": 7,
 "Interest": 8,
 "TotalValue": 9.0,
 "MemorizedName": "sample string 10",
 "MemorizedDescription": "sample string 11",
 "Comments": "sample string 12",
 "SalesRepresentativeID": 13,
 "FromAddress": "sample string 14",
 "CreateDate": "2026-04-29T15:57:12.9215308-04:00",
 "CreateUserID": 16,
 "UpdateDate": "2026-04-29T15:57:12.9215308-04:00",
 "UpdateUserID": 18,
 "ConcurrencyID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## MemorizedInvoices

MemorizedInvoices
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 CreateUser
 GetByPost
 MemorizedInvoiceDetails
 Owner
 Property
 Prospect
 QuickSearch
 SalesRepresentativeUser
 Search
 TaxChargeType
 TaxType
 Tenant
 Term
 Unit
 UpdateUser
 Rent Manager Web API Reference
 MemorizedInvoices Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedInvoices?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedInvoiceFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedInvoiceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedInvoiceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MemorizedInvoiceGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedInvoiceModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedInvoiceID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 AccountID
 Integer
 EqualTo
 AccountType
 eAccountType
 Read Only
 Comment
 String
 IsTaxable
 Boolean
 TaxPercentage
 Decimal
 SubTotal
 Decimal
 TaxAmount
 Decimal
 TotalAmount
 Decimal
 TaxTypeID
 Integer
 EqualTo
 TaxChargeTypeID
 Integer
 EqualTo
 TermID
 Integer
 EqualTo
 SalesRepresentativeUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Name
 String
 Description
 String
 Account
 AccountModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 Property
 PropertyModel
 Unit
 UnitModel
 Term
 TermModel
 MemorizedInvoiceDetails
 MemorizedInvoiceDetailModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 SalesRepresentativeUser
 UserModel
 TaxType
 TaxTypeModel
 TaxChargeType
 ChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedInvoiceID": 1,
 "PropertyID": 2,
 "UnitID": 3,
 "AccountID": 4,
 "Comment": "sample string 5",
 "IsTaxable": true,
 "TaxPercentage": 7.0,
 "SubTotal": 8.0,
 "TaxAmount": 9.0,
 "TotalAmount": 10.0,
 "TaxTypeID": 11,
 "TaxChargeTypeID": 12,
 "TermID": 13,
 "SalesRepresentativeUserID": 14,
 "CreateDate": "2026-04-29T15:57:13.0931458-04:00",
 "CreateUserID": 16,
 "UpdateDate": "2026-04-29T15:57:13.0931458-04:00",
 "UpdateUserID": 18,
 "ConcurrencyID": 19,
 "Name": "sample string 20",
 "Description": "sample string 21",
 "MetaTag": "sample string 23"
 }
]

---

## MemorizedJournals

MemorizedJournals
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MemorizedJournalDetails
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MemorizedJournals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedJournals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedJournalFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedJournalEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedJournalOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MemorizedJournalGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedJournalModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedJournalID
 Integer
 EqualTo
 Primary Key
 Basis
 eBasis
 Comment
 String
 IsPeriodAdjustment
 Boolean
 Reference
 String
 Amount
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 IsBeginningBalance
 Boolean
 MemorizedName
 String
 MemorizedDescription
 String
 MemorizedJournalDetails
 MemorizedJournalDetailModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedJournalID": 1,
 "Comment": "sample string 2",
 "IsPeriodAdjustment": true,
 "Reference": "sample string 4",
 "Amount": 5.0,
 "CreateDate": "2026-04-29T15:57:13.2760901-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:13.2760901-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "IsBeginningBalance": true,
 "MemorizedName": "sample string 12",
 "MemorizedDescription": "sample string 13",
 "MetaTag": "sample string 15"
 }
]

---

## MemorizedReports

MemorizedReports
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MemorizedReportReportParameters
 MemorizedReportSavedReportParameterValues
 Report
 RunParameters
 RunReport
 RunReportSeparate
 UpdateUser
 Rent Manager Web API Reference
 MemorizedReports Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedReports?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedReportFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedReportEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedReportOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedReportID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 ReportID
 eReport
 EqualTo
 IsExcludedFromMenu
 Boolean
 SortOrder
 Integer
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 MemorizedReportSavedReportParameterValues
 MemorizedReportSavedReportParameterValueModel
 MemorizedReportReportParameters
 MemorizedReportReportParameterModel
 Report
 ReportModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedReportID": 1,
 "Name": "sample string 2",
 "ReportID": "NotSet",
 "IsExcludedFromMenu": true,
 "SortOrder": 4,
 "CreateUserID": 5,
 "CreateDate": "2026-04-29T15:57:13.4215275-04:00",
 "UpdateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:13.4215275-04:00",
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## MemorizedTasks

MemorizedTasks
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Attachments
 Color
 CreateUser
 GetByPost
 MemorizedTaskUsers
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MemorizedTasks Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MemorizedTasks?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 MemorizedTaskFilterFields List
 Define this parameter in the request URI.
 embeds
 MemorizedTaskEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MemorizedTaskOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 MemorizedTaskGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MemorizedTaskModel
 Properties
 NameTypeOptimized FiltersAttributes
 MemorizedTaskID
 Integer
 EqualTo
 Primary Key
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ColorID
 Integer
 EqualTo
 Title
 String
 Description
 String
 MemorizedName
 String
 MemorizedDescription
 String
 ActionType
 eTaskActionType
 DueDateDaysOffset
 Integer
 DueDateTimeComponent
 DateTime
 IsReminder
 Boolean
 ReminderDays
 Integer
 ReminderHours
 Integer
 ReminderMinutes
 Integer
 IsCalendarIntegration
 Boolean
 Pattern
 Integer
 Frequency
 Integer
 DayOfPeriod
 Integer
 MonthOfPeriod
 Integer
 NumberOfRepetitions
 Integer
 CreateDate
 DateTime
 UpdateDate
 DateTime
 Color
 ColorModel
 MemorizedTaskUsers
 MemorizedTaskUserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Attachments
 FileAttachmentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MemorizedTaskID": 1,
 "Title": "sample string 6",
 "Description": "sample string 7",
 "MemorizedName": "sample string 8",
 "MemorizedDescription": "sample string 9",
 "ActionType": "ViewProperties",
 "DueDateDaysOffset": 10
 }
]

---

## MeterTypePlusCalculations

MeterTypePlusCalc...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 MeterTypePlusCalculations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypePlusCalculations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypePlusCalculationFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypePlusCalculationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypePlusCalculationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypePlusCalculationModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypePlusCalculationID
 Integer
 EqualTo
 Primary Key
 MeterTypeID
 Integer
 EqualTo
 VariableName
 String
 Calculation
 String
 Round
 Int32
 RoundingMethod
 eRoundingMethod
 Description
 String
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypePlusCalculationID": 1,
 "MeterTypeID": 2,
 "VariableName": "sample string 3",
 "Calculation": "sample string 4",
 "Round": 1,
 "Description": "sample string 5",
 "SortOrder": 6,
 "MetaTag": "sample string 8"
 }
]

---

## MeterTypePlusRateVariables

MeterTypePlusRate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 MeterTypePlusRates
 QuickSearch
 Search
 Rent Manager Web API Reference
 MeterTypePlusRateVariables Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypePlusRateVariables?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypePlusRateVariableFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypePlusRateVariableEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypePlusRateVariableOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypePlusRateVariableModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypePlusRateVariableID
 Integer
 EqualTo
 Primary Key
 MeterTypeID
 Integer
 EqualTo
 Name
 String
 MeterTypePlusRates
 MeterTypePlusRateModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypePlusRateVariableID": 1,
 "MeterTypeID": 2,
 "Name": "sample string 3",
 "MetaTag": "sample string 5"
 }
]

---

## MeterTypePlusRates

MeterTypePlusRate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MeterTypePlusRates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypePlusRates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypePlusRateFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypePlusRateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypePlusRateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypePlusRateModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypePlusRateID
 Integer
 EqualTo
 Primary Key
 MeterTypePlusRateVariableID
 Integer
 EqualTo
 Date
 DateTime
 StandardRate
 Decimal
 LowIncomeRate
 Decimal
 Description
 String
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypePlusRateID": 1,
 "MeterTypePlusRateVariableID": 2,
 "Date": "2026-04-29T15:57:14.0308947-04:00",
 "StandardRate": 1.0,
 "LowIncomeRate": 1.0,
 "Description": "sample string 4",
 "CreateUserID": 5,
 "CreateDate": "2026-04-29T15:57:14.0308947-04:00",
 "UpdateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:14.0308947-04:00",
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## MeterTypePlusStatementFields

MeterTypePlusStat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 MeterTypePlusStatementFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypePlusStatementFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypePlusStatementFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypePlusStatementFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypePlusStatementFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypePlusStatementFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypePlusStatementFieldID
 Integer
 EqualTo
 Primary Key
 MeterTypeID
 Integer
 EqualTo
 Description
 String
 Title
 String
 Value
 String
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypePlusStatementFieldID": 1,
 "MeterTypeID": 2,
 "Description": "sample string 3",
 "Title": "sample string 4",
 "Value": "sample string 5",
 "SortOrder": 6,
 "MetaTag": "sample string 8"
 }
]

---

## MeterTypeStandardCalculations

MeterTypeStandard...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 MeterTypeStandardCalculations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypeStandardCalculations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypeStandardCalculationFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypeStandardCalculationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypeStandardCalculationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypeStandardCalculationModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypeStandardCalculationID
 Integer
 EqualTo
 Primary Key
 MeterTypeID
 Integer
 EqualTo
 Level
 Decimal
 Calculation
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypeStandardCalculationID": 1,
 "MeterTypeID": 2,
 "Level": 3.0,
 "Calculation": "sample string 4",
 "MetaTag": "sample string 6"
 }
]

---

## MeterTypeStandardVariables

MeterTypeStandard...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 MeterTypeStandardVariables Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypeStandardVariables?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypeStandardVariableFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypeStandardVariableEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypeStandardVariableOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypeStandardVariableModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypeStandardVariableID
 Integer
 EqualTo
 Primary Key
 MeterTypeID
 Integer
 EqualTo
 Name
 String
 Value
 String
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypeStandardVariableID": 1,
 "MeterTypeID": 2,
 "Name": "sample string 3",
 "Value": "sample string 4",
 "SortOrder": 5,
 "MetaTag": "sample string 7"
 }
]

---

## MeterTypes

MeterTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Rent Manager Web API Reference
 MeterTypes Retrieve Collection
 (DEPRECATED) As of 4/23/2021
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypes?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypeEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 ShortName
 String
 EqualTo
 IsMUPlus
 Boolean
 MinimumCharge
 Decimal
 FlatFee
 Decimal
 IsPerDay
 Boolean
 IsGraduated
 Boolean
 ConversionFormula
 String
 IsRangeEqual
 Boolean
 BaseRate
 Decimal
 BaseLine
 Decimal
 ExcessRate
 Decimal
 StatementPosition
 String
 Comments
 String
 CreateUserID
 Integer
 Read Only
 CreateDate
 DateTime
 UpdateUserID
 Integer
 Read Only
 UpdateDate
 DateTime
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypeID": 1,
 "Name": "sample string 2",
 "ShortName": "sample string 3",
 "IsMUPlus": true,
 "MinimumCharge": 5.0,
 "FlatFee": 6.0,
 "IsPerDay": true,
 "IsGraduated": true,
 "ConversionFormula": "sample string 9",
 "IsRangeEqual": true,
 "BaseRate": 11.0,
 "BaseLine": 12.0,
 "ExcessRate": 13.0,
 "StatementPosition": "sample string 14",
 "Comments": "sample string 15",
 "CreateUserID": 16,
 "CreateDate": "2026-04-29T15:57:14.6090112-04:00",
 "UpdateUserID": 18,
 "UpdateDate": "2026-04-29T15:57:14.6090112-04:00",
 "MetaTag": "sample string 21"
 }
]

---

## MeterTypesPlus

MeterTypesPlus
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MeterTypePlusCalculations
 MeterTypePlusRateVariables
 MeterTypePlusStatementFields
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MeterTypesPlus Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypesPlus?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypePlusFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypePlusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypePlusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypePlusModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 ShortName
 String
 EqualTo
 IsMUPlus
 Boolean
 DateRangeOptions
 eUtilityMeterDateRangeOptions
 MinimumCharge
 Decimal
 IsPerDay
 Boolean
 IsGraduated
 Boolean
 ConversionFormula
 String
 IsRangeEqual
 Boolean
 BaseRate
 Decimal
 BaseLine
 Decimal
 ExcessRate
 Decimal
 StatementPosition
 String
 Comments
 String
 UtilityTypeID
 Integer
 EqualTo
 DefaultUoM
 Integer
 BillingUoM
 Integer
 IsAutoConvertMeterUoMToBillingUoM
 Boolean
 CreateUserID
 Integer
 EqualTo
 Read Only
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MeterTypePlusStatementFields
 MeterTypePlusStatementFieldModel
 MeterTypePlusCalculations
 MeterTypePlusCalculationModel
 MeterTypePlusRateVariables
 MeterTypePlusRateVariableModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypeID": 1,
 "Name": "sample string 2",
 "ShortName": "sample string 3"
 }
]

---

## MeterTypesStandard

MeterTypesStandar...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MeterTypeStandardCalculations
 MeterTypeStandardVariables
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 MeterTypesStandard Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MeterTypesStandard?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MeterTypeStandardFilterFields List
 Define this parameter in the request URI.
 embeds
 MeterTypeStandardEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MeterTypeStandardOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MeterTypeStandardModel
 Properties
 NameTypeOptimized FiltersAttributes
 MeterTypeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 ShortName
 String
 EqualTo
 MinimumCharge
 Decimal
 FlatFee
 Decimal
 IsPerDay
 Boolean
 IsGraduated
 Boolean
 IsRangeEqual
 Boolean
 ConversionFormula
 String
 BaseRate
 Decimal
 Baseline
 Decimal
 ExcessRate
 Decimal
 DateRangeOptions
 Integer
 StatementPosition
 String
 Comments
 String
 UtilityTypeID
 Integer
 EqualTo
 DefaultUoM
 Integer
 BillingUoM
 Integer
 IsAutoConvertMeterUoMToBillingUoM
 Boolean
 CreateUserID
 Integer
 EqualTo
 Read Only
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MeterTypeStandardCalculations
 MeterTypeStandardCalculationModel
 Required (create)
 MeterTypeStandardVariables
 MeterTypeStandardVariableModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MeterTypeID": 1,
 "Name": "sample string 2",
 "ShortName": "sample string 3"
 }
]

---

## MultiTenantMasterPayments

MultiTenantMaster...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Deposit
 GetByPost
 Payments
 Rent Manager Web API Reference
 MultiTenantMasterPayments Retrieve Collection
 (DEPRECATED) As of 3/15/2019
 replaced by MultiTenantPayments
 Retrieve a collection of items.
 Request Information
 Url
 GET MultiTenantMasterPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MultiTenantMasterPaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 MultiTenantMasterPaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MultiTenantMasterPaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MultiTenantMasterPaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 MultiTenantMasterPaymentID
 Integer
 EqualTo
 Primary Key
 CheckNumber
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 DepositID
 Integer
 EqualTo
 PaymentFrom
 String
 Comment
 String
 ReceiptID
 Integer
 Deposit
 DepositModel
 Payments
 PaymentModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MultiTenantMasterPaymentID": 1,
 "CheckNumber": "sample string 2",
 "Amount": 3.0,
 "TransactionDate": "2026-04-29T15:57:15.0933766-04:00",
 "DepositID": 5,
 "PaymentFrom": "sample string 6",
 "Comment": "sample string 7",
 "ReceiptID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## MultiTenantPayments

MultiTenantPaymen...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Deposit
 GetByPost
 Payments
 QuickSearch
 Search
 Rent Manager Web API Reference
 MultiTenantPayments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET MultiTenantPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 MultiTenantPaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 MultiTenantPaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 MultiTenantPaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
MultiTenantPaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 MultiTenantPaymentID
 Integer
 EqualTo
 Primary Key
 CheckNumber
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 DepositID
 Integer
 EqualTo
 PaymentFrom
 String
 Comment
 String
 ReceiptID
 Integer
 Deposit
 DepositModel
 Payments
 PaymentModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "MultiTenantPaymentID": 1,
 "CheckNumber": "sample string 2",
 "Amount": 3.0,
 "TransactionDate": "2026-04-29T15:57:15.2492849-04:00",
 "DepositID": 5,
 "PaymentFrom": "sample string 6",
 "Comment": "sample string 7",
 "ReceiptID": 8,
 "MetaTag": "sample string 11"
 }
]

---

## NDTBroadcastLists

NDTBroadcastLists
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 NDTBroadcastListItems
 QuickSearch
 Search
 Rent Manager Web API Reference
 NDTBroadcastLists Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET NDTBroadcastLists?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NDTBroadcastGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 NDTBroadcastGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NDTBroadcastGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NDTBroadcastGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 NDTBroadcastListID
 Integer
 EqualTo
 Primary Key
 ListName
 String
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NDTBroadcastListID": 1,
 "ListName": "sample string 2",
 "CreateDate": "2026-04-29T15:57:15.3957454-04:00",
 "CreateUserID": 4,
 "UpdateDate": "2026-04-29T15:57:15.3957454-04:00",
 "UpdateUserID": 6,
 "ConcurrencyID": 7,
 "MetaTag": "sample string 9"
 }
]

---

## NDTPhoneBroadcastBatches

NDTPhoneBroadcast...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 NDTBroadcastBatchDetails
 PhoneRecording
 QuickSearch
 Search
 Rent Manager Web API Reference
 NDTPhoneBroadcastBatches Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET NDTPhoneBroadcastBatches?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NDTPhoneBroadcastBatchFilterFields List
 Define this parameter in the request URI.
 embeds
 NDTPhoneBroadcastBatchEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NDTPhoneBroadcastBatchOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NDTPhoneBroadcastBatchModel
 Properties
 NameTypeOptimized FiltersAttributes
 NDTPhoneBroadcastBatchID
 Integer
 EqualTo
 Primary Key
 BroadcastType
 eBroadcastType
 Read Only
 NDTBroadcastResponseBatchID
 Integer
 Read Only
 MessageName
 String
 MessageDescription
 String
 PhoneRecordingID
 Integer
 EqualTo
 IsScheduledNow
 Boolean
 ScheduledDate
 DateTime
 IsCancelled
 Boolean
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 PhoneRecording
 FileModel
 CreateUser
 UserModel
 NDTBroadcastBatchDetails
 NDTBroadcastBatchDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NDTPhoneBroadcastBatchID": 1,
 "BroadcastType": "NotSet",
 "NDTBroadcastResponseBatchID": 2,
 "MessageName": "sample string 3",
 "MessageDescription": "sample string 4",
 "PhoneRecordingID": 5,
 "IsScheduledNow": true,
 "ScheduledDate": "2026-04-29T15:57:15.5572604-04:00",
 "IsCancelled": true,
 "CreateUserID": 9,
 "CreateDate": "2026-04-29T15:57:15.5572604-04:00",
 "MetaTag": "sample string 12"
 }
]

---

## NDTPhoneBroadcasts

NDTPhoneBroadcast...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 NDTPhoneBroadcasts Retrieve Collection
 (DEPRECATED) As of 3/18/2021
 replaced by PhoneBroadcastRecordings
 Retrieve a collection of items.
 Request Information
 Url
 GET NDTPhoneBroadcasts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NDTPhoneBroadcastFilterFields List
 Define this parameter in the request URI.
 embeds
 NDTPhoneBroadcastEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NDTPhoneBroadcastOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NDTPhoneBroadcastModel
 Properties
 NameTypeOptimized FiltersAttributes
 NDTPhoneBroadcastID
 Integer
 EqualTo
 Primary Key
 RecordingName
 String
 PhoneRecordingID
 Integer
 EqualTo
 Description
 String
 PhoneRecording
 FileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NDTPhoneBroadcastID": 1,
 "RecordingName": "sample string 2",
 "PhoneRecordingID": 3,
 "Description": "sample string 4",
 "MetaTag": "sample string 6"
 }
]

---

## NDTTextBroadcastBatches

NDTTextBroadcastB...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 NDTBroadcastBatchDetails
 QuickSearch
 Search
 Rent Manager Web API Reference
 NDTTextBroadcastBatches Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET NDTTextBroadcastBatches?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NDTTextBroadcastBatchFilterFields List
 Define this parameter in the request URI.
 embeds
 NDTTextBroadcastBatchEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NDTTextBroadcastBatchOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NDTTextBroadcastBatchModel
 Properties
 NameTypeOptimized FiltersAttributes
 NDTTextBroadcastBatchID
 Integer
 EqualTo
 Primary Key
 BroadcastType
 eBroadcastType
 Read Only
 NDTBroadcastResponseBatchID
 Integer
 Read Only
 MessageName
 String
 MessageDescription
 String
 ScriptingType
 eLetterTemplateType
 IsScheduledNow
 Boolean
 ScheduledDate
 DateTime
 IsCancelled
 Boolean
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUser
 UserModel
 NDTBroadcastBatchDetails
 NDTBroadcastBatchDetailModel
 Required (create)
 FileAttachments
 FileAttachmentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NDTTextBroadcastBatchID": 1,
 "BroadcastType": "NotSet",
 "NDTBroadcastResponseBatchID": 2,
 "MessageName": "sample string 3",
 "MessageDescription": "sample string 4",
 "IsScheduledNow": true,
 "ScheduledDate": "2026-04-29T15:57:15.8586282-04:00",
 "IsCancelled": true,
 "CreateUserID": 8,
 "CreateDate": "2026-04-29T15:57:15.8586282-04:00",
 "MetaTag": "sample string 11"
 }
]

---

## NDTTextBroadcasts

NDTTextBroadcasts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 NDTTextBroadcasts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET NDTTextBroadcasts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NDTTextBroadcastFilterFields List
 Define this parameter in the request URI.
 embeds
 NDTTextBroadcastEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NDTTextBroadcastOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NDTTextBroadcastModel
 Properties
 NameTypeOptimized FiltersAttributes
 NDTTextBroadcastID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 ScriptingType
 eLetterTemplateType
 MessageText
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NDTTextBroadcastID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "MessageText": "sample string 4",
 "CreateDate": "2026-04-29T15:57:16.0050879-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:57:16.0050879-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## NachaODFIBanks

NachaODFIBanks
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 NachaODFIBanks Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET NachaODFIBanks?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NachaODFIBankFilterFields List
 Define this parameter in the request URI.
 embeds
 NachaODFIBankEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NachaODFIBankOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NachaODFIBankModel
 Properties
 NameTypeOptimized FiltersAttributes
 NachaODFIBankID
 Integer
 EqualTo
 Primary Key
 NachaODFIBankName
 String
 ImmediateOriginNumber
 String
 CompanyID
 String
 IndividualID
 String
 IsBalancedFormat
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NachaODFIBankID": 1,
 "NachaODFIBankName": "sample string 2",
 "ImmediateOriginNumber": "sample string 3",
 "CompanyID": "sample string 4",
 "IndividualID": "sample string 5",
 "IsBalancedFormat": true,
 "CreateDate": "2026-04-29T15:57:16.1666036-04:00",
 "CreateUserID": 8,
 "UpdateDate": "2026-04-29T15:57:16.1666036-04:00",
 "UpdateUserID": 10,
 "ConcurrencyID": 11,
 "MetaTag": "sample string 13"
 }
]

---

## Notes

Notes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 Notes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Notes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 NoteFilterFields List
 Define this parameter in the request URI.
 embeds
 NoteEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 NoteOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
NoteModel
 Properties
 NameTypeOptimized FiltersAttributes
 NoteID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 CreateUserID
 Integer
 Read Only
 UpdateUserID
 Integer
 Read Only
 CreateDate
 DateTime
 Read Only
 UpdateDate
 DateTime
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "NoteID": 1,
 "Name": "sample string 3",
 "Description": "sample string 4"
 }
]

---

## OnlineBookingMarketingOptions

OnlineBookingMark...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MenuOptions
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 OnlineBookingMarketingOptions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OnlineBookingMarketingOptions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OnlineBookingMarketingOptionFilterFields List
 Define this parameter in the request URI.
 embeds
 OnlineBookingMarketingOptionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OnlineBookingMarketingOptionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OnlineBookingMarketingOptionModel
 Properties
 NameTypeOptimized FiltersAttributes
 OnlineBookingMarketingOptionID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 MarketingField
 eOnlineBookingMarketingFields
 EqualTo
, 
 In
 UseDefault
 Boolean
 ParentTypeID
 eOnlineBookingMarketingEntityType
 EqualTo
, 
 In
 ParentID
 Integer
 Description
 String
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OnlineBookingMarketingOptionID": 1,
 "PropertyID": 2,
 "UseDefault": true,
 "ParentID": 4,
 "Description": "sample string 5",
 "CreateDate": "2026-04-29T15:57:16.4737874-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:16.4737874-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## OnlineListingsRegister

OnlineListingsReg...
 Retrieve Collection
 UnitAvailabilityDates
 Rent Manager Web API Reference
 OnlineListingsRegister Retrieve Collection
 Retrieve the current online listings
 Request Information
 Url
 GET OnlineListingsRegister?embeds={embeds}&getOptions={getOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 embeds
 OnlineListingEmbedOptions
 Define this parameter in the request URI.
 getOptions
 OnlineListingsRegisterGetOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OnlineListingModel
 Properties
 NameTypeOptimized FiltersAttributes
 PropertyShortName
 String
 UnitShortName
 (DEPRECATED) As of 10/2/2018
 replaced by UnitName
 String
 UnitName
 String
 UnitID
 Integer
 PropertyID
 Integer
 Property
 PropertyModel
 Unit
 UnitModel
 OnlineListingFieldMappings
 OnlineListingFieldMappingModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PropertyShortName": "sample string 1",
 "UnitShortName": "sample string 2",
 "UnitName": "sample string 3",
 "UnitID": 4,
 "PropertyID": 5,
 "OnlineListingFieldMappings": [],
 "MetaTag": "sample string 7"
 }
]

---

## OutgoingTexts

OutgoingTexts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Location
 MMSImages
 Owner
 Property
 Prospect
 QuickSearch
 Search
 SendingPhoneNumber
 SentUser
 Tenant
 UpdateHistoryCategory
 Vendor
 Rent Manager Web API Reference
 OutgoingTexts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OutgoingTexts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OutgoingTextFilterFields List
 Define this parameter in the request URI.
 embeds
 OutgoingTextEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OutgoingTextOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OutgoingTextModel
 Properties
 NameTypeOptimized FiltersAttributes
 OutgoingTextID
 Integer
 EqualTo
 Primary Key
 NDTBroadcastBatchID
 Integer
 EqualTo
 PhoneNumber
 String
 EqualTo
, 
 In
 Message
 String
 ParentID
 Integer
 EqualTo
 ParentType
 eTextMessageConversationType
 EqualTo
 SentUserID
 Integer
 EqualTo
 Read Only
 SentDate
 DateTime
 Read Only
 IsMMS
 Boolean
 Read Only
 SegmentCount
 Integer
 Read Only
 LocationID
 Integer
 EqualTo
 Read Only
 MainLocationOutgoingTextID
 Integer
 Read Only
 SendingPhoneNumberString
 String
 HistoryCategoryID
 Integer
 EqualTo
 HistoryCategory
 HistoryCategoryModel
 SentUser
 UserModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 Vendor
 VendorModel
 Property
 PropertyModel
 Location
 LocationModel
 MMSImages
 MMSImageModel
 MMSImage
 (DEPRECATED) As of 3/29/2022
 replaced by MMSImages
 MMSImageModel
 SendingPhoneNumber
 PhoneNumberModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OutgoingTextID": 1,
 "NDTBroadcastBatchID": 2,
 "PhoneNumber": "sample string 3",
 "Message": "sample string 4",
 "ParentID": 5,
 "ParentType": "Tenant",
 "SentUserID": 6,
 "SentDate": "2026-04-29T15:57:16.7652411-04:00",
 "IsMMS": true,
 "SegmentCount": 9,
 "LocationID": 10,
 "MainLocationOutgoingTextID": 11,
 "SendingPhoneNumberString": "sample string 12",
 "HistoryCategoryID": 13,
 "MetaTag": "sample string 16"
 }
]

---

## OwnerCheckSetups

OwnerCheckSetups
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 OwnerCheckSetupAccountExclusions
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 OwnerCheckSetups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerCheckSetups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OwnerCheckSetupFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerCheckSetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerCheckSetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerCheckSetupModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnerCheckSetupID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsTemplate
 Boolean
 Read Only
 IsSubtractSecurityDeposits
 Boolean
 IsSubtractDepositedPrepayments
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 OwnerCheckSetupAccountExclusions
 OwnerCheckSetupAccountExclusionModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnerCheckSetupID": 1,
 "Name": "sample string 2"
 }
]

---

## OwnerGroupFilters

OwnerGroupFilters
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 OwnerGroupFilterDetails
 Owners
 QuickSearch
 Search
 Rent Manager Web API Reference
 OwnerGroupFilters Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerGroupFilters?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OwnerGroupFilterFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerGroupFilterEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerGroupFilterOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerGroupFilterModel
 Properties
 NameTypeOptimized FiltersAttributes
 FilterID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 TargetTypeID
 eFilterTargetType
 EqualTo
 TargetID
 Integer
 EqualTo
 SubTargetID
 Integer
 EqualTo
 IsSystem
 Boolean
 IsAdvanced
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 UserID
 Integer
 EqualTo
 OwnerGroupFilterDetails
 OwnerGroupFilterDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "FilterID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "TargetID": 4,
 "SubTargetID": 5,
 "IsSystem": true,
 "IsAdvanced": true,
 "CreateDate": "2026-04-29T15:57:27.1392928-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:27.1392928-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "UserID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## OwnerGroups

OwnerGroups
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 OwnerGroupDetails
 OwnerGroupFilter
 OwnerGroupFilters
 Owners
 QuickSearch
 Search
 Rent Manager Web API Reference
 OwnerGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 OwnerGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 OwnerGroupGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 GroupID
 (DEPRECATED) As of 12/4/2018
 replaced by OwnerGroupID
 Integer
 EqualTo
, 
 In
 OwnerGroupID
 Integer
 EqualTo
, 
 In
 Primary Key
 Owners
 OwnerModel
 Required (create)
 OwnerGroupFilter
 OwnerGroupFilterModel
 Required (create)
 OwnerGroupDetails
 OwnerGroupDetailModel
 FilterID
 (DEPRECATED) As of 12/4/2018
 replaced by OwnerGroupFilterID
 Integer
 EqualTo
 OwnerGroupFilterID
 Integer
 EqualTo
 Name
 String
 EqualTo
, 
 StartsWith
, 
 EndsWith
, 
 Contains
 UserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 OwnerGroupFilters
 (DEPRECATED) As of 4/15/2022
 replaced by OwnerGroupFilter
 OwnerGroupFilterModel
 Required (create)
 CreateDate
 DateTime
 UpdateDate
 DateTime
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GroupID": 1,
 "OwnerGroupID": 2,
 "Name": "sample string 5"
 }
]

---

## OwnerProspectLeadSources

OwnerProspectLead...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 OwnerProspectLeadSources Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerProspectLeadSources?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 OwnerProspectLeadSourceFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerProspectLeadSourceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerProspectLeadSourceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 OwnerProspectLeadSourceGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerProspectLeadSourceModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnerProspectLeadSourceID
 Integer
 EqualTo
, 
 In
 Primary Key
 Description
 String
 EqualTo
 PhoneNumber
 String
 EqualTo
 IsActive
 Boolean
 EqualTo
 StrippedPhoneNumber
 String
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnerProspectLeadSourceID": 1,
 "Description": "sample string 2"
 }
]

---

## OwnerProspects

OwnerProspects
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 AddressTypes
 Appointments
 BatchEmailOwnerProspects
 ChangeOwnerProspectStatus
 Color
 Contact
 GetByPost
 History
 HistoryCalls
 HistoryEmails
 HistoryNotes
 HistorySystemNotes
 HistoryVisits
 OwnerProspectLeadSource
 Ownerships
 PhoneNumberTypes
 QuickSearch
 RMVoIPCallHistory
 SalesRepresentative
 Search
 TestScript
 UserDefinedFields
 UserDefinedValues
 Rent Manager Web API Reference
 OwnerProspects Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerProspects?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 OwnerProspectFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerProspectEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerProspectOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 OwnerProspectGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerProspectModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnerProspectID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 DisplayName
 String
 ColorID
 Integer
 EqualTo
 OwnerProspectLeadSourceID
 Integer
 EqualTo
 OwnerProspectLeadSource
 OwnerProspectLeadSourceModel
 OwnerProspectStatus
 eOwnerProspectStatus
 EqualTo
, 
 In
 Read Only
 InterestLevel
 Integer
 ApplicationDate
 DateTime
 LastStatusChangedDate
 DateTime
 Read Only
 Comment
 String
 Email
 (DEPRECATED) As of 5/8/2019
 replaced by Contact.Email
 String
 Addresses
 AddressModel
 Contact
 ContactModel
 UserDefinedValues
 UserDefinedValueModel
 OwnerID
 Integer
 EqualTo
, 
 In
 SalesRepresentativeID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 History
 HistoryModel
 Ownerships
 OwnerProspectOwnershipModel
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryCalls
 HistoryCallModel
 HistoryEmails
 HistoryEmailModel
 HistoryVisits
 HistoryVisitModel
 HistoryNotes
 HistoryNoteModel
 WebMessage
 String
 RMVoIPCallHistory
 RMVoIPCallHistoryModel
 Color
 ColorModel
 SalesRepresentative
 UserModel
 WebUsers
 WebUserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnerProspectID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3"
 }
]

---

## OwnerWebAccessOwnerPreferences

OwnerWebAccessOwn...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Owner
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 OwnerWebAccessOwnerPreferences Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerWebAccessOwnerPreferences?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OwnerWebAccessOwnerPreferenceFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerWebAccessOwnerPreferenceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerWebAccessOwnerPreferenceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerWebAccessOwnerPreferenceModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnerWebAccessOwnerPreferenceID
 Integer
 EqualTo
 Primary Key
 OwnerID
 Integer
 EqualTo
 Message
 String
 OverrideDefaults
 Boolean
 ShowReports
 Boolean
 AllowContributions
 Boolean
 ShowChecks
 Boolean
 ShowFees
 Boolean
 ShowOwnerships
 Boolean
 ShowOpenIssues
 Boolean
 ShowClosedIssues
 Boolean
 ShowWorkOrders
 Boolean
 ShowSecurityDepositsHeld
 Boolean
 ShowBalance
 Boolean
 ShowOwnershipPercentage
 Boolean
 ShowReserve
 Boolean
 ShowOwnerChecks
 Boolean
 ShowBills
 Boolean
 ShowBillAttachments
 Boolean
 ShowPassthruFees
 Boolean
 ExcludeVendorInformationFromServiceIssues
 Boolean
 ExcludeTenantInformationFromServiceIssues
 Boolean
 AllowNotes
 Boolean
 ShowOpenEstimates
 Boolean
 ShowClosedEstimates
 Boolean
 ShowInspectionReports
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Owner
 OwnerModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnerWebAccessOwnerPreferenceID": 1,
 "OwnerID": 2,
 "Message": "sample string 3",
 "OverrideDefaults": true,
 "ShowReports": true,
 "AllowContributions": true,
 "ShowChecks": true,
 "ShowFees": true,
 "ShowOwnerships": true,
 "ShowOpenIssues": true,
 "ShowClosedIssues": true,
 "ShowWorkOrders": true,
 "ShowSecurityDepositsHeld": true,
 "ShowBalance": true,
 "ShowOwnershipPercentage": true,
 "ShowReserve": true,
 "ShowOwnerChecks": true,
 "ShowBills": true,
 "ShowBillAttachments": true,
 "ShowPassthruFees": true,
 "ExcludeVendorInformationFromServiceIssues": true,
 "ExcludeTenantInformationFromServiceIssues": true,
 "AllowNotes": true,
 "ShowOpenEstimates": true,
 "ShowClosedEstimates": true,
 "ShowInspectionReports": true,
 "CreateDate": "2026-04-29T15:57:27.779891-04:00",
 "CreateUserID": 28,
 "UpdateDate": "2026-04-29T15:57:27.779891-04:00",
 "UpdateUserID": 30,
 "ConcurrencyID": 31,
 "MetaTag": "sample string 33"
 }
]

---

## OwnerWebAccessReportPrivileges

OwnerWebAccessRep...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Owner
 QuickSearch
 Report
 Search
 Rent Manager Web API Reference
 OwnerWebAccessReportPrivileges Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnerWebAccessReportPrivileges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OwnerWebAccessReportPrivilegeFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerWebAccessReportPrivilegeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerWebAccessReportPrivilegeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerWebAccessReportPrivilegeModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnerWebAccessReportPrivilegeModelID
 Integer
 EqualTo
 Primary Key
 OwnerID
 Integer
 EqualTo
 ReportID
 eReport
 EqualTo
 Owner
 OwnerModel
 Report
 ReportModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnerWebAccessReportPrivilegeModelID": 1,
 "OwnerID": 2,
 "MetaTag": "sample string 4"
 }
]

---

## Owners

Owners
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ActivePartnerships
 Addresses
 AddressesList
 AddressTypes
 Appointments
 Balance
 BalanceAccount
 BatchEmailOwners
 BatchEmailOwnersFromOwnerships
 BatchEmailOwnersFromProperties
 BatchEmailOwnersFromProspects
 BatchEmailOwnersFromTenants
 BatchEmailOwnersFromUnits
 BillableExpenses
 Bills
 CalculateChecks
 Charges
 Checks
 Color
 Contact
 ContactPhoneNumbers
 ContributionAccount
 CreateUser
 Credits
 DownloadNachaFile
 DrawAccount
 EpayInformation
 GenerateNACHAFile
 GetByPost
 History
 HistoryCalls
 HistoryEmails
 HistoryNotes
 HistorySystemNotes
 HistoryVisits
 HistoryWithUnitHistory
 Invoices
 MakePayments
 NachaOwnerBank
 OpenPrepays
 OpenReceivables
 OWAFile
 OWAFiles
 OwnerBankBalance
 OwnerChecks
 OwnerContracts
 OwnerContributions
 OwnerGroupDetails
 OwnerGroups
 Ownerships
 OwnerWebAccessOwnerPreference
 OwnerWebAccessOwnerPreferences
 OwnerWebAccessReportPrivileges
 PaymentMethods
 PaymentReversals
 Payments
 PayOwners
 PayOwnersManually
 PhoneNumbers
 PhoneNumbersList
 PhoneNumberTypes
 QuickSearch
 RMVoIPCallHistory
 RunReportBatch
 RunReportBatchSeparate
 Search
 Status
 Tasks
 TestScript
 TransferOwnership
 UpdateUser
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 ValidateWebUserCredentials
 WebUserAccounts
 WebUsers
 Rent Manager Web API Reference
 Owners Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Owners?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OwnerFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnerEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnerOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnerModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnerID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 DisplayName
 String
 WebMessage
 String
 TaxID
 String
 Calculated Field
 DrawAccountID
 Int32
 EqualTo
 DrawAccount
 GLAccountModel
 ContributionAccountID
 Int32
 EqualTo
 ContributionAccount
 GLAccountModel
 LastPayDate
 DateTime
 IsOverridingCheckDefault
 Boolean
 IsBalanceReserves
 Boolean
 BalanceAccountID
 Int32
 EqualTo
 BalanceAccount
 GLAccountModel
 BalancingJournalMemo
 String
 EcheckEmail
 String
 StatementComment
 String
 IsSeparateChecks
 Boolean
 IsStopPrintChecks
 Boolean
 Status
 eOwnerStatus
 EqualTo
 Read Only
 ColorID
 Int32
 Color
 ColorModel
 DefaultPayMethod
 eBillPayMethod
 CheckPayeeName
 String
 Comment
 String
 Balance
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (Balance)
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 Addresses
 AddressModel
 PhoneNumbers
 PhoneNumberModel
 Contact
 ContactModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 OwnerReportBatchID
 Int32
 EqualTo
 Ownerships
 OwnerContractModel
 UserDefinedValues
 UserDefinedValueModel
 WebUserAccounts
 WebUserAccountModel
 OwnerContracts
 OwnerContractModel
 History
 HistoryModel
 HistoryWithUnitHistory
 HistoryModel
 HistoryCalls
 HistoryCallModel
 HistoryEmails
 HistoryEmailModel
 HistoryVisits
 HistoryVisitModel
 HistoryNotes
 HistoryNoteModel
 HistorySystemNotes
 HistorySystemNoteModel
 RMVoIPCallHistory
 RMVoIPCallHistoryModel
 OwnerWebAccessOwnerPreference
 OwnerWebAccessOwnerPreferenceModel
 OwnerWebAccessOwnerPreferences
 (DEPRECATED) As of 5/1/2022
 replaced by OwnerWebAccessOwnerPreference
 OwnerWebAccessOwnerPreferenceModel
 OwnerWebAccessReportPrivileges
 OwnerWebAccessReportPrivilegeModel
 NachaOwnerBank
 NachaOwnerBankModel
 OwnerGroups
 OwnerGroupModel
 OwnerGroupDetails
 OwnerGroupDetailModel
 EpayInfo
 EpayInformationModel
 OwnerChecks
 OwnerCheckSummaryModel
 BillableExpenses
 BillableExpenseModel
 Payments
 PaymentModel
 Charges
 ChargeModel
 WebUsers
 WebUserModel
 OpenReceivables
 OpenReceivableModel
 Credits
 CreditModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnerID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "ColorID": 1
 }
]

---

## OwnershipTransferPostings

OwnershipTransfer...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 OwnershipTransferPostingLogDataReport
 OwnershipTransferPostingLogMessages
 Rent Manager Web API Reference
 OwnershipTransferPostings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET OwnershipTransferPostings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 OwnershipTransferPostingFilterFields List
 Define this parameter in the request URI.
 embeds
 OwnershipTransferPostingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 OwnershipTransferPostingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
OwnershipTransferPostingModel
 Properties
 NameTypeOptimized FiltersAttributes
 OwnershipTransferPostingID
 Integer
 Primary Key
 PostingDate
 DateTime
 OwnershipTransferPostingLogMessages
 OwnershipTransferPostingLogMessageModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "OwnershipTransferPostingID": 1,
 "PostingDate": "2026-04-29T15:57:28.3276012-04:00",
 "MetaTag": "sample string 4"
 }
]

---

## Payments

Payments
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccountGroupPayment
 Allocations
 CreateUser
 GetByPost
 MakePayments
 ManagementFeeHistoryTransactions
 MultiTenantPayment
 Owner
 PaymentImages
 PaymentReversal
 Preallocations
 PrepayProperty
 Prepays
 PrepayUnit
 PrintReceipt
 Prospect
 QuickSearch
 ReversalReconciliation
 Search
 SubsidyPayment
 Tenant
 UpdateUser
 Rent Manager Web API Reference
 Payments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Payments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 PaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 PaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 PaymentGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 Allocations
 AllocationModel
 Required (create)
 Prepays
 AllocationModel
 ManagementFeeHistoryTransactions
 ManagementFeeHistoryTransactionModel
 Read Only
 PrepayProperty
 PropertyModel
 PrepayUnit
 UnitModel
 ReversalReconcilialtion
 ReconciliationModel
 PaymentID
 Integer
 EqualTo
, 
 In
 ID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountID
 Integer
 EqualTo
, 
 In
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TransactionType
 eTransactionType
 Calculated Field
 AmountAllocated
 Decimal
 IsFullyAllocated
 Boolean
 IsSecurityDepositPriorToGLStartDate
 Boolean
 ReceiptID
 Integer
 PaymentReversal
 PaymentReversalModel
 ReversalDate
 DateTime
 ReversalType
 eReversalType
 ReversalReconcileID
 Integer
 EqualTo
 ReversalElectronicReconcileID
 Integer
 EqualTo
 IsRestrictAutomaticAllocationsToUnit
 Boolean
 IsRecordingCashReallocations
 Boolean
 IsRecordingCashPreallocationsAsLiability
 Boolean
 IsRecordingAccrualPrepayments
 Boolean
 IsSplitPayment
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (IsSplitPayment)
 HasChargeTypesWithChargeTypeBankSetup
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (HasChargeTypesWithChargeTypeBankSetup)
 PrepayPropertyID
 Integer
 PrepayUnitID
 Integer
 Preallocations
 PreallocationModel
 Required (create)
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 AccountType
 eAccountType
 Reference
 String
 Read Only
 Comment
 String
 Amount
 Decimal
 TransactionDate
 DateTime
 EpayTransactionInformationDetail
 EpayTransactionInformationDetailModel
 Read Only
 IsDepositable
 Boolean
 Requires Embed (IsDepositable)
 PaymentImages
 CheckScanPaymentModel
 AccountGroupPayment
 CrossPaymentAccountGroupPaymentModel
 SubsidyPayment
 CrossPaymentSubsidyPaymentModel
 MultiTenantPayment
 CrossPaymentMultiTenantPaymentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PaymentID": 3,
 "ID": 3,
 "AccountID": 4,
 "CreateDate": "2026-04-29T15:57:28.4517257-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:57:28.4517257-04:00",
 "UpdateUserID": 8,
 "TransactionType": "Payment",
 "AmountAllocated": 9.0,
 "IsFullyAllocated": true,
 "IsSecurityDepositPriorToGLStartDate": true,
 "ReceiptID": 12,
 "ReversalDate": "2026-04-29T15:57:28.4673502-04:00",
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
 "TransactionDate": "2026-04-29T15:57:28.4673502-04:00",
 "IsDepositable": true,
 "MetaTag": "sample string 26"
 }
]

---

## PetTypes

PetTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 PetTypeProperties
 QuickSearch
 Search
 Rent Manager Web API Reference
 PetTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PetTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 PetTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 PetTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PetTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 PetTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PetTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 PetTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 Description
 String
 RecurringAmount
 Decimal
 IsRecurringAmountPerPet
 Boolean
 RecurringAmountMax
 Decimal
 OneTimeFeeAmount
 Decimal
 IsOneTimeFeeAmountPerPet
 Boolean
 OneTimeFeeAmountMax
 Decimal
 PetDepositAmount
 Decimal
 IsPetDepositAmountPerPet
 Boolean
 PetDepositAmountMax
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 PetTypeProperties
 PetTypePropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PetTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## Pets

Pets
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Image
 ImageTypes
 PetType
 PetTypes
 Prospect
 QuickSearch
 Search
 Tenant
 UpdateUser
 UploadImage
 Rent Manager Web API Reference
 Pets Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Pets?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PetFilterFields List
 Define this parameter in the request URI.
 embeds
 PetEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PetOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PetModel
 Properties
 NameTypeOptimized FiltersAttributes
 PetID
 Integer
 EqualTo
 Primary Key
 Name
 String
 TenantID
 Integer
 EqualTo
 ProspectID
 Integer
 EqualTo
 Description
 String
 PetTypeID
 Integer
 EqualTo
 Breed
 String
 Color
 String
 Age
 String
 Weight
 String
 ImageID
 Integer
 EqualTo
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 PetType
 PetTypeModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Image
 ImageModel
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PetID": 1,
 "Name": "sample string 2",
 "Description": "sample string 5"
 }
]

---

## PhoneBroadcastRecordings

PhoneBroadcastRec...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 File
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 PhoneBroadcastRecordings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PhoneBroadcastRecordings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PhoneBroadcastRecordingFilterFields List
 Define this parameter in the request URI.
 embeds
 PhoneBroadcastRecordingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PhoneBroadcastRecordingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PhoneBroadcastRecordingModel
 Properties
 NameTypeOptimized FiltersAttributes
 PhoneBroadcastRecordingID
 Integer
 EqualTo
 Primary Key
 RecordingName
 String
 FileID
 Int32
 Read Only
 Description
 String
 File
 FileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PhoneBroadcastRecordingID": 1,
 "RecordingName": "sample string 2",
 "FileID": 1,
 "Description": "sample string 3",
 "MetaTag": "sample string 6"
 }
]

---

## PhoneNumbers

PhoneNumbers
 Retrieve Collection
 Retrieve Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 PhoneNumbers Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PhoneNumbers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PhoneNumberFilterFields List
 Define this parameter in the request URI.
 embeds
 PhoneNumberEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PhoneNumberOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PhoneNumberModel
 Properties
 NameTypeOptimized FiltersAttributes
 PhoneNumberID
 Integer
 EqualTo
 Primary Key
 PhoneNumberTypeID
 Integer
 EqualTo
 PhoneNumber
 String
 Extension
 String
 EqualTo
, 
 In
 StrippedPhoneNumber
 String
 EqualTo
, 
 In
 IsPrimary
 Boolean
 EqualTo
 IsTextReady
 Boolean
 EqualTo
 IsInvalidForTexting
 Boolean
 EqualTo
, 
 NotEqualTo
 Read Only
 InvalidTextingErrorCode
 String
 EqualTo
, 
 NotEqualTo
 Read Only
 IsOptOut
 Boolean
 EqualTo
, 
 NotEqualTo
 Read Only
 ParentID
 Integer
 EqualTo
, 
 In
 ParentType
 ePhoneNumberRelatedObjectTypes
 EqualTo
, 
 In
 Contact
 ContactModel
 Utility
 UtilityModel
 Vendor
 VendorModel
 User
 UserModel
 Property
 PropertyModel
 OwnerProspect
 OwnerProspectModel
 PhoneNumberType
 PhoneNumberTypeModel
 WebUser
 WebUserModel
 LoanContact
 LoanContactModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PhoneNumber": "sample string 3"
 }
]

---

## PositivePayFormats

PositivePayFormat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 PositivePayFormatDetails
 QuickSearch
 Search
 Rent Manager Web API Reference
 PositivePayFormats Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PositivePayFormats?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PositivePayFormatFilterFields List
 Define this parameter in the request URI.
 embeds
 PositivePayFormatEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PositivePayFormatOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PositivePayFormatModel
 Properties
 NameTypeOptimized FiltersAttributes
 PositivePayFormatID
 Integer
 Primary Key
 FormatName
 String
 IsSystem
 Boolean
 Read Only
 TransmissionHeaderRecordLength
 Integer
 FileHeaderRecordLength
 Integer
 DetailRecordLength
 Integer
 TrailerRecordLength
 Integer
 PositivePayFormatDetails
 PositivePayFormatDetailModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PositivePayFormatID": 1,
 "FormatName": "sample string 2",
 "IsSystem": true,
 "TransmissionHeaderRecordLength": 4,
 "FileHeaderRecordLength": 5,
 "DetailRecordLength": 6,
 "TrailerRecordLength": 7,
 "MetaTag": "sample string 9"
 }
]

---

## Postings

Postings
 Retrieve Collection
 Retrieve Instance
 CreateUser
 GetByPost
 PartialUtilityChargeRollback
 PostingEntities
 PostingMessages
 PostingSummaryDataReport
 QuickSearch
 RollbackPosting
 Search
 Rent Manager Web API Reference
 Postings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Postings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PostingFilterFields List
 Define this parameter in the request URI.
 embeds
 PostingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PostingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PostingModel
 Properties
 NameTypeOptimized FiltersAttributes
 PostingID
 Integer
 EqualTo
, 
 In
 Primary Key
 PostingDate
 DateTime
 PostingCount
 Integer
 Amount
 Decimal
 PostingType
 ePostingType
 IncludesUtilities
 Boolean
 Information
 String
 Read Only
, 
 Requires Embed (Information)
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 IsRolledBack
 Boolean
 EqualTo
, 
 NotEqualTo
 CreateUser
 UserModel
 PostingMessages
 PostingMessageModel
 PostingEntities
 PostingEntityModel
 PostingTransactions
 PostingTransactionModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PostingID": 1,
 "PostingDate": "2026-04-29T15:57:29.430146-04:00",
 "PostingCount": 2,
 "Amount": 3.0,
 "IncludesUtilities": true,
 "Information": "sample string 5",
 "CreateDate": "2026-04-29T15:57:29.430146-04:00",
 "CreateUserID": 7,
 "IsRolledBack": true,
 "MetaTag": "sample string 10"
 }
]

---

## Privileges

Privileges
 Retrieve Collection
 Retrieve Instance
 GetByPost
 PrivilegeCategory
 QuickSearch
 Search
 Rent Manager Web API Reference
 Privileges Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Privileges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PrivilegeFilterFields List
 Define this parameter in the request URI.
 embeds
 PrivilegeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PrivilegeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PrivilegeModel
 Properties
 NameTypeOptimized FiltersAttributes
 PrivilegeID
 ePrivilege
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 SortOrder
 Integer
 IsHidden
 Boolean
 PrivilegeCategoryID
 ePrivilegeCategory
 EqualTo
 IsAdd
 Boolean
 IsView
 Boolean
 IsEdit
 Boolean
 IsDelete
 Boolean
 IsOn
 Boolean
 PrivilegeCategory
 PrivilegeCategoryModel
 IsImplemented
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Name": "sample string 1",
 "Description": "sample string 2",
 "SortOrder": 3,
 "IsHidden": true,
 "IsAdd": true,
 "IsView": true,
 "IsEdit": true,
 "IsDelete": true,
 "IsOn": true,
 "IsImplemented": true,
 "MetaTag": "sample string 12"
 }
]

---

## PromotionPeriods

PromotionPeriods
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Lease
 QuickSearch
 Search
 Rent Manager Web API Reference
 PromotionPeriods Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PromotionPeriods?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PromotionPeriodFilterFields List
 Define this parameter in the request URI.
 embeds
 PromotionPeriodEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PromotionPeriodOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PromotionPeriodModel
 Properties
 NameTypeOptimized FiltersAttributes
 PromotionPeriodID
 Integer
 EqualTo
, 
 In
 Primary Key
 LeaseID
 Integer
 EqualTo
, 
 In
 StartDate
 DateTime
 EndDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 Lease
 LeaseModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PromotionPeriodID": 1,
 "LeaseID": 2,
 "StartDate": "2026-04-29T15:57:29.73291-04:00",
 "EndDate": "2026-04-29T15:57:29.73291-04:00",
 "CreateDate": "2026-04-29T15:57:29.73291-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:57:29.73291-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## Properties

Properties
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccountingClose
 Addresses
 AddressTypes
 AllocationOrders
 ApplicationSettings
 ApplicationTemplates
 ARAutomationSchedule
 AssetLocationHistory
 Assets
 AssignedUser
 AssociationSettings
 Availability
 Banks
 BatchEmailProperties
 BatchEmailPropertiesFromUnits
 BatchEmailTenantAndProspectContactList
 BeginningBalances
 BillingAddress
 BoardMembers
 BoardMemberTerms
 CalculateIndividualSecurityDepositInterests
 CalculateManagementFees
 CalculateManagementFundSweep
 CalculateSecurityDepositInterests
 ChargeTypeBanks
 Color
 CommitteeMembers
 CommunityEvents
 CreateUser
 CurrentAssetLocation
 CurrentOwners
 DefaultBank
 DefaultChargeSettings
 DefaultInspector
 Floorplans
 Floors
 GetByPost
 History
 HistoryNotes
 HistorySystemNotes
 Holidays
 Images
 ImageTypes
 LateFees
 LateFeeSetup
 LeaseRenewalIncreaseEntityRoundingSetting
 LeaseTermEntityDifferential
 LeaseTermProperties
 LimitedAccessSearch
 LinkUnitTypes
 Logo
 LogoFile
 MakeReadyTemplateProperties
 ManagementFeeBreakdownFee
 ManagementFeeHistory
 ManagementFeeHistoryCharges
 ManagementFeeSetup
 ManagementFundSweep
 MarketingData
 MarketingSetup
 MarketingValues
 MergeProperties
 MigrateAssets
 MigrateUnits
 MITSMarketingSetup
 MITSMarketingValues
 OccupancySummary
 OnlineBookingPolicies
 OnlineListings
 OpenViolations
 OwnerCheckSetup
 OwnerContracts
 Owners
 Ownerships
 PetTypeProperties
 PetTypes
 PhoneNumbers
 PhoneNumberTypes
 PostManagementFees
 PostSecurityDepositInterest
 PrimaryAddress
 PrimaryOwner
 PrimaryPhoneNumber
 PropertyAmenities
 PropertyBanks
 PropertyContracts
 PropertyFileFolders
 PropertyFiles
 PropertyFloors
 PropertyGroup
 PropertyGroupDetails
 PropertyGroups
 PropertyManagementFeeSetups
 PropertyRentChargeTypes
 PublishedTWAReports
 QuickSearch
 RateDiscounts
 RateSchedules
 RateSettings
 RateTaxes
 RecurringCharges
 RecurringChargeSummaries
 RentChargeTypeItems
 RentChargeTypes
 RentQuotes
 ReservableAmenities
 RMVoIPCallHistory
 RollbackLastManagementFeePosting
 SaveRecurringChargeSortOrders
 ScreeningCredentials
 ScreeningReportTypesForUser
 ScreeningSetting
 ScreeningSettings
 Search
 SecurityDepositInterest
 ServiceManagerAssignedUser
 ShortTermRentalOnlineBookingSetting
 TestConnectionForScreenings
 TestScript
 TextNumberProperties
 TextNumbers
 TWAReportTemplates
 Units
 UnitSquareFootage
 UnitTypeProperties
 UnitTypes
 UnitTypesForMultipleProperties
 UnLinkUnitTypes
 UpdateUser
 UploadImage
 UploadLogoFile
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 UserProperties
 Users
 UtilityProperties
 Violations
 Rent Manager Web API Reference
 Properties Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Properties?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 PropertyFilterFields List
 Define this parameter in the request URI.
 embeds
 PropertyEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PropertyOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 PropertyGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PropertyModel
 Properties
 NameTypeOptimized FiltersAttributes
 PropertyID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 ShortName
 String
 EqualTo
, 
 In
 BillingName1
 String
 BillingName2
 String
 ManagerName
 String
 IsActive
 Boolean
 IsCommercial
 Boolean
 PropertyType
 ePropertyType
 EqualTo
, 
 In
 Email
 String
 TaxID
 String
 StatementMethod
 eStatementMethod
 EqualTo
 Comment
 String
 LogoFileID
 Integer
 EqualTo
 ServiceManagerAssignedUserID
 Integer
 IsSystemDefaultAssignedUser
 Boolean
 Calculated Field
 IsOverrideAssignedUserID
 Boolean
 IsAllocationOrderDisabled
 Boolean
 IsAllocationOrderSortedByMonth
 Boolean
 IsOverwriteTimeZone
 Boolean
 IsTimeZoneOffsetEnabled
 Boolean
 TimeZoneOffset
 Integer
 IsDaylightSavingsTime
 Boolean
 IsOverrideFiscalYear
 Boolean
 FiscalYearStartDay
 Integer
 FiscalYearStartMonth
 Integer
 FiscalYearEndDay
 Integer
 FiscalYearEndMonth
 Integer
 IsOverrideDefaultHolidays
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 ColorID
 Integer
 Color
 ColorModel
 DefaultInspectorID
 Integer
 IsLateChargeEnabled
 Boolean
 IsOwnerPayPerUnit
 Boolean
 IsEpayEnabled
 Boolean
 IsLockboxEnabled
 Boolean
 IsEndorsementOverride
 Boolean
 EndorsementOverride
 String
 SquareFootage
 Integer
 DefaultBankID
 Integer
 EqualTo
 PrimaryOwnerID
 Integer
 EqualTo
 PostingDay
 Integer
 CheckTemplateID
 (DEPRECATED) As of 8/7/2018
 replaced by OwnerCheckSetupID
 Integer
 EqualTo
 OwnerCheckSetupID
 Integer
 EqualTo
 LastMonthlyPost
 DateTime
 Read Only
 LastWeeklyPost
 DateTime
 Read Only
 LastDailyPost
 DateTime
 Read Only
 LastManagementFeePost
 DateTime
 Read Only
 IsSecurityDepositInterestEnabled
 Boolean
 EqualTo
 ARAutomationUseSystemPreference
 Boolean
 ARAutomationSchedule
 ARAutomationScheduleModel
 OccupancyUnitCount
 Integer
 Calculated Field
 LastUnitCountPost
 DateTime
 Read Only
 ARAutomationScheduleID
 Integer
 AccountingCloseOption
 eAccountingCloseOption
 EvictionWorkflowID
 Int32
 IsShortTermRental
 Boolean
 EqualTo
 Read Only
 IsTrackRentersInsurance
 Boolean
 EqualTo
 IsUseMasterPolicy
 (DEPRECATED) As of 3/15/2026
 Boolean
 EqualTo
 Read Only
 MasterPolicyChargeAmount
 Decimal
 Read Only
 IsOverrideNSFFee
 Boolean
 NSFFeeAmount
 Decimal
 AccountingClose
 AccountingCloseModel
 ServiceManagerAssignedUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PhoneNumbers
 PhoneNumberModel
 PrimaryPhoneNumber
 PhoneNumberModel
 DefaultBank
 GLAccountModel
 PrimaryOwner
 OwnerModel
 Addresses
 AddressModel
 PrimaryAddress
 AddressModel
 BillingAddress
 AddressModel
 RentChargeTypes
 (DEPRECATED) As of 7/30/2018
 replaced by PropertyRentChargeTypes
 SelectListItemModel
 Required (create)
 PropertyRentChargeTypes
 PropertyRentChargeTypeModel
 DefaultInspector
 UserModel
 ChargeTypeBanks
 ChargeTypeBankModel
 PropertyFloors
 PropertyFloorModel
 RentChargeTypeItems
 ChargeTypeModel
 Floors
 FloorModel
 Banks
 BankModel
 PropertyBanks
 PropertyBankModel
 UnitTypeProperties
 UnitTypePropertyModel
 History
 HistoryModel
 UserDefinedValues
 UserDefinedValueModel
 RecurringCharges
 RecurringChargeModel
 RecurringChargeSummaries
 RecurringChargeSummaryModel
 Units
 UnitModel
 UserProperties
 UserPropertyModel
 Users
 UserModel
 MarketingData
 PropertyMarketingDataModel
 FeedTypeID
 eOnlineListingFeedType
 Read Only
 ScreeningSetting
 ScreeningSettingModel
 LogoFile
 FileModel
 Images
 ImageModel
 ManagementFeeHistory
 ManagementFeeHistoryModel
 ApplicationTemplates
 ApplicationTemplateModel
 ApplicationSettings
 ApplicationSettingsModel
 PropertyManagementFeeSetups
 PropertyManagementFeeSetupModel
 ManagementFeeSetup
 ManagementFeeSetupModel
 LastSuccessfulOnlineListingsPosting
 DateTime
 Read Only
 IsOptOutCreditReporting
 Boolean
 PropertyGroups
 PropertyGroupModel
 PropertyGroupDetails
 PropertyGroupDetailModel
 OwnerContracts
 OwnerContractModel
 Ownerships
 OwnerContractModel
 PropertyFiles
 PropertyFileModel
 PropertyFileFolders
 PropertyFileFolderModel
 HistorySystemNotes
 HistorySystemNoteModel
 CurrentOwners
 OwnerModel
 Read Only
, 
 Calculated Field
, 
 Requires Embed (OwnerContracts.Owner)
 UnitCount
 Integer
 Read Only
, 
 Calculated Field
, 
 Requires Embed (Units)
 VacantUnits
 UnitModel
 OccupiedUnitCount
 Integer
 Read Only
, 
 Calculated Field
, 
 Requires Embed (VacantUnits)
 VacantUnitCount
 Integer
 Read Only
, 
 Calculated Field
, 
 Requires Embed (VacantUnits)
 OccupiedUnitSquareFootage
 Integer
 Read Only
, 
 Calculated Field
, 
 Requires Embed (Units.IsVacant)
 VacantUnitSquareFootage
 Integer
 Read Only
, 
 Calculated Field
, 
 Requires Embed (VacantUnits)
 VacantUnitIDs
 String
 Read Only
, 
 Calculated Field
, 
 Requires Embed (VacantUnits)
 OwnerCheckSetup
 OwnerCheckSetupModel
 IsPropertyLevelOnlineListings
 Boolean
 IsOnlyIncludePropertyListing
 Boolean
 OnlineListingsUsage
 eOnlineListingsUsage
 IsStrOnlineBookingEnabled
 Boolean
 PetTypeProperties
 PetTypePropertyModel
 PetTypes
 PetTypeModel
 LateFeeSetup
 LateFeeModel
 MakeReadyTemplateProperties
 MakeReadyTemplatePropertyModel
 TextNumbers
 TextNumberModel
 TextNumberProperties
 TextNumberPropertyModel
 RMVoIPCallHistory
 RMVoIPCallHistoryModel
 MarketingValues
 MarketingValueModel
 MarketingSetup
 MarketingSetupModel
 Violations
 ViolationModel
 OpenViolations
 ViolationModel
 CurrentAssetLocation
 AssetLocationHistoryModel
 Requires Embed (AssetLocationHistory)
 AssetLocationHistory
 AssetLocationHistoryModel
 AssociationSettings
 AssociationSettingsModel
 CommitteeMembers
 CommitteeMemberModel
 BoardMembers
 BoardMemberTermModel
 AllocationOrder
 AllocationOrderModel
 CommunityEvents
 CommunityEventModel
 ReservableAmenities
 ReservableAmenityModel
 Holidays
 HolidayModel
 SecurityDepositInterest
 SecurityDepositInterestModel
 LeaseTermProperties
 LeaseTermPropertyModel
 RateSetting
 RateSettingModel
 RateTaxes
 RateTaxModel
 RateDiscounts
 RateDiscountModel
 SiteGroups
 SiteGroupModel
 RateSchedules
 RateScheduleModel
 PropertyAmenities
 PropertyAmenityModel
 OnlineBookingPolicies
 OnlineBookingPolicyModel
 ShortTermRentalOnlineBookingSetting
 ShortTermRentalOnlineBookingSettingModel
 TWAReportTemplates
 TWAReportTemplateModel
 PublishedTWAReports
 PublishedTWAReportModel
 HistoryNotes
 HistoryNoteModel
 Floorplans
 FloorplanModel
 MarketingFloorplans
 FloorplanMarketingSummaryModel
 LeaseTermEntityDifferential
 LeaseTermEntityDifferentialModel
 LeaseRenewalIncreaseEntityRoundingSetting
 LeaseRenewalIncreaseEntityRoundingSettingModel
 RentQuotes
 RentQuoteModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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

---

## PropertyGroupFilter

PropertyGroupFilt...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 PropertyGroupFilterDetails
 Rent Manager Web API Reference
 PropertyGroupFilter Retrieve Collection
 (DEPRECATED) As of 12/21/2018
 replaced by PropertyGroupFilters
 Retrieve a collection of items.
 Request Information
 Url
 GET PropertyGroupFilter?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PropertyGroupFilterFilterFields List
 Define this parameter in the request URI.
 embeds
 PropertyGroupFilterEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PropertyGroupFilterOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PropertyGroupFilterModel
 Properties
 NameTypeOptimized FiltersAttributes
 FilterID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 TargetTypeID
 eFilterTargetType
 EqualTo
 TargetID
 Integer
 EqualTo
 SubTargetID
 Integer
 EqualTo
 IsSystem
 Boolean
 IsAdvanced
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 UserID
 Integer
 EqualTo
 PropertyGroupFilterDetails
 PropertyGroupFilterDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "FilterID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "TargetID": 4,
 "SubTargetID": 5,
 "IsSystem": true,
 "IsAdvanced": true,
 "CreateDate": "2026-04-29T15:57:30.0082409-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:30.0082409-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "UserID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## PropertyGroupFilters

PropertyGroupFilt...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Properties
 PropertyGroupFilterDetails
 QuickSearch
 Search
 Rent Manager Web API Reference
 PropertyGroupFilters Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PropertyGroupFilters?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PropertyGroupFilterFilterFields List
 Define this parameter in the request URI.
 embeds
 PropertyGroupFilterEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PropertyGroupFilterOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PropertyGroupFilterModel
 Properties
 NameTypeOptimized FiltersAttributes
 FilterID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 TargetTypeID
 eFilterTargetType
 EqualTo
 TargetID
 Integer
 EqualTo
 SubTargetID
 Integer
 EqualTo
 IsSystem
 Boolean
 IsAdvanced
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 UserID
 Integer
 EqualTo
 PropertyGroupFilterDetails
 PropertyGroupFilterDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "FilterID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "TargetID": 4,
 "SubTargetID": 5,
 "IsSystem": true,
 "IsAdvanced": true,
 "CreateDate": "2026-04-29T15:57:30.1713252-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:30.1713252-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "UserID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## PropertyGroups

PropertyGroups
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Properties
 PropertyGroupDetails
 PropertyGroupFilter
 PropertyGroupFilters
 QuickSearch
 Search
 Rent Manager Web API Reference
 PropertyGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PropertyGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 PropertyGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 PropertyGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PropertyGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 PropertyGroupGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PropertyGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 GroupID
 (DEPRECATED) As of 12/4/2018
 replaced by PropertyGroupID
 Integer
 EqualTo
, 
 In
 PropertyGroupID
 Integer
 EqualTo
, 
 In
 Primary Key
 FilterID
 (DEPRECATED) As of 12/4/2018
 replaced by PropertyGroupFilterID
 Integer
 EqualTo
 PropertyGroupFilterID
 Int32
 EqualTo
 Name
 String
 EqualTo
, 
 StartsWith
, 
 EndsWith
, 
 Contains
 UserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Properties
 PropertyModel
 Required (create)
 PropertyGroupFilters
 (DEPRECATED) As of 5/1/2022
 replaced by PropertyGroupFilter
 PropertyGroupFilterModel
 Required (create)
 PropertyGroupFilter
 PropertyGroupFilterModel
 Required (create)
 PropertyGroupDetails
 PropertyGroupDetailModel
 CreateDate
 DateTime
 UpdateDate
 DateTime
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "GroupID": 1,
 "PropertyGroupID": 2,
 "Name": "sample string 4"
 }
]

---

## PropertyManagementFeeSetup

PropertyManagemen...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 PassThruGLAccountIDs
 Rent Manager Web API Reference
 PropertyManagementFeeSetup Retrieve Collection
 (DEPRECATED) As of 5/1/2022
 Retrieve a collection of items.
 Request Information
 Url
 GET PropertyManagementFeeSetup?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PropertyManagementFeeSetupFilterFields List
 Define this parameter in the request URI.
 embeds
 PropertyManagementFeeSetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PropertyManagementFeeSetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PropertyManagementFeeSetupModel
 Property Management Fee Setup Model
 Properties
 NameTypeOptimized FiltersAttributes
 PropertyManagementFeeSetupID
 Integer
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 ManagementFeeSetupID
 Integer
 EqualTo
, 
 In
 ActiveStartDate
 DateTime
 ActiveEndDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 Property
 PropertyModel
 ManagementFeeSetup
 ManagementFeeSetupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PropertyManagementFeeSetupID": 1,
 "PropertyID": 2,
 "ManagementFeeSetupID": 3,
 "ActiveStartDate": "2026-04-29T15:57:30.4731611-04:00",
 "ActiveEndDate": "2026-04-29T15:57:30.4731611-04:00",
 "CreateDate": "2026-04-29T15:57:30.4731611-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:30.4731611-04:00",
 "UpdateUserID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## PropertyManagementFeeSetups

PropertyManagemen...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 ManagementFeeSetup
 PassThruGLAccountIDs
 Property
 QuickSearch
 Search
 Rent Manager Web API Reference
 PropertyManagementFeeSetups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PropertyManagementFeeSetups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PropertyManagementFeeSetupFilterFields List
 Define this parameter in the request URI.
 embeds
 PropertyManagementFeeSetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PropertyManagementFeeSetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PropertyManagementFeeSetupModel
 Property Management Fee Setup Model
 Properties
 NameTypeOptimized FiltersAttributes
 PropertyManagementFeeSetupID
 Integer
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 ManagementFeeSetupID
 Integer
 EqualTo
, 
 In
 ActiveStartDate
 DateTime
 ActiveEndDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 Property
 PropertyModel
 ManagementFeeSetup
 ManagementFeeSetupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PropertyManagementFeeSetupID": 1,
 "PropertyID": 2,
 "ManagementFeeSetupID": 3,
 "ActiveStartDate": "2026-04-29T15:57:30.6176139-04:00",
 "ActiveEndDate": "2026-04-29T15:57:30.6176139-04:00",
 "CreateDate": "2026-04-29T15:57:30.6176139-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:30.6176139-04:00",
 "UpdateUserID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## ProspectApplicationTemplateFields

ProspectApplicati...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationFieldComboboxItems
 ApplicationFieldLeadSources
 ApplicationFieldOptions
 GetByPost
 GetFromAllLocations
 ProspectApplicationDetails
 ProspectApplicationTemplateFieldComboboxItem
 ProspectApplicationTemplateFieldOption
 QuickSearch
 Search
 Rent Manager Web API Reference
 ProspectApplicationTemplateFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectApplicationTemplateFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationFieldID
 Integer
 EqualTo
, 
 In
 Primary Key
 ApplicationMinorSectionID
 Integer
 EqualTo
, 
 In
 LabelText
 String
 HelpText
 String
 ColumnSpan
 Integer
 InputFieldType
 eApplicationFieldInputFieldTypes
 MatchToID
 Integer
 MatchToHandlerID
 Integer
 DependentApplicationFieldID
 Integer
 EqualTo
, 
 In
 VerticalAlignment
 eVerticalAlignment
 IsRequired
 Boolean
 SortOrder
 Integer
 AllowAnotherChoice
 Boolean
 ProspectApplicationDetails
 ProspectApplicationDetailModel
 ApplicationFieldComboboxItems
 ApplicationFieldComboboxItemModel
 ApplicationFieldOptions
 ApplicationFieldOptionModel
 ApplicationFieldLeadSources
 ApplicationFieldLeadSourceModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationFieldID": 1,
 "ApplicationMinorSectionID": 2,
 "LabelText": "sample string 3",
 "HelpText": "sample string 4",
 "ColumnSpan": 5,
 "MatchToID": 6,
 "MatchToHandlerID": 7,
 "DependentApplicationFieldID": 8,
 "IsRequired": true,
 "SortOrder": 10,
 "AllowAnotherChoice": true,
 "MetaTag": "sample string 13"
 }
]

---

## ProspectApplicationTemplateMajorSections

ProspectApplicati...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationMinorSections
 ApplicationSubApplicantField
 GetByPost
 GetFromAllLocations
 ProspectApplicationTemplateMinorSection
 ProspectApplicationTemplateSubApplicantField
 QuickSearch
 Search
 Rent Manager Web API Reference
 ProspectApplicationTemplateMajorSections Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectApplicationTemplateMajorSections?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationMajorSectionFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationMajorSectionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationMajorSectionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationMajorSectionModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationMajorSectionID
 Integer
 EqualTo
, 
 In
 Primary Key
 ApplicationTemplateID
 Integer
 EqualTo
, 
 In
 Title
 String
 TitleBinaryFileID
 Integer
 Text
 String
 TextBinaryFileID
 Integer
 HelpText
 String
 SortOrder
 Integer
 IsSystem
 Boolean
 SectionTemplateType
 eApplicationMajorSection
 IsAdditionalApplicantSection
 Boolean
 EqualTo
 ApplicationMinorSections
 ApplicationMinorSectionModel
 ApplicationSubApplicantField
 ApplicationSubApplicantFieldModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {}
]

---

## ProspectApplicationTemplateMinorSections

ProspectApplicati...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationFields
 GetByPost
 GetFromAllLocations
 ProspectApplicationTemplateMinorSectionField
 QuickSearch
 Search
 Rent Manager Web API Reference
 ProspectApplicationTemplateMinorSections Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectApplicationTemplateMinorSections?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationMinorSectionFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationMinorSectionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationMinorSectionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationMinorSectionModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationMinorSectionID
 Integer
 EqualTo
, 
 In
 Primary Key
 ApplicationMajorSectionID
 Integer
 EqualTo
, 
 In
 Title
 String
 TitleBinaryFileID
 Integer
 Text
 String
 TextBinaryFileID
 Integer
 HelpText
 String
 NumberOfColumns
 Integer
 WrapAlignment
 Integer
 SortOrder
 Integer
 ApplicationFields
 ApplicationFieldModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationMinorSectionID": 1,
 "ApplicationMajorSectionID": 2,
 "Title": "sample string 3",
 "TitleBinaryFileID": 4,
 "Text": "sample string 5",
 "TextBinaryFileID": 6,
 "HelpText": "sample string 7",
 "NumberOfColumns": 8,
 "WrapAlignment": 9,
 "SortOrder": 10,
 "MetaTag": "sample string 12"
 }
]

---

## ProspectApplicationTemplates

ProspectApplicati...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationMajorSections
 CloneProspectApplicationTemplate
 DefaultProperty
 FeeProperty
 GetByPost
 GetFromAllLocations
 ImportProspectApplicationTemplate
 ProspectApplicationTemplateMajorSection
 QuickSearch
 ReplaceAssignedProperties
 Search
 Rent Manager Web API Reference
 ProspectApplicationTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectApplicationTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ApplicationTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 ApplicationTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ApplicationTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ApplicationTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 ApplicationTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 TemplateType
 eApplicationTemplateType
 DisplayName
 String
 FeePropertyID
 Integer
 EqualTo
 DefaultPropertyID
 Integer
 EqualTo
 Description
 String
 EqualTo
 IsSystem
 Boolean
 IsReadOnly
 Boolean
 IsPropertyRequired
 Boolean
 IsUnitUnitTypeRequired
 Boolean
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 ApplicationMajorSections
 ApplicationMajorSectionModel
 ApplicationSettings
 ApplicationSettingsModel
 ApplicationSubApplicantSetups
 ApplicationSubApplicantSetupModel
 ApplicationTemplateActiveProperties
 ApplicationTemplateActivePropertiesModel
 ProspectApplications
 ProspectApplicationModel
 FeeProperty
 PropertyModel
 DefaultProperty
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ApplicationTemplateID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "Description": "sample string 6"
 }
]

---

## ProspectApplications

ProspectApplicati...
 Retrieve Collection
 Retrieve Instance
 ApplicationTemplate
 Contact
 GetByPost
 GetFromAllLocations
 PetTypes
 Property
 Prospect
 ProspectApplicationDetailDataReport
 ProspectApplicationDetails
 ProspectSubApplicantDetails
 Unit
 Rent Manager Web API Reference
 ProspectApplications Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectApplications?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ProspectApplicationFilterFields List
 Define this parameter in the request URI.
 embeds
 ProspectApplicationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ProspectApplicationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ProspectApplicationModel
 Properties
 NameTypeOptimized FiltersAttributes
 ProspectApplicationID
 Integer
 EqualTo
, 
 In
 Primary Key
 ApplicationTemplateID
 Integer
 EqualTo
 AccountID
 Integer
 EqualTo
, 
 In
 WebUserAccountID
 Integer
 EqualTo
 ContactID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitTypeID
 Integer
 EqualTo
 UnitID
 Integer
 EqualTo
 IPAddress
 String
 EqualTo
 WaiverText
 String
 EsignCheckboxText
 String
 ConsentToScreenCheckboxText
 String
 EpayTransactionText
 String
 ApplicationStatus
 eProspectApplicationStatus
 EqualTo
 EpayTranID
 Integer
 ApplicationSubmissionDate
 DateTime
 IsTemplateLocked
 Boolean
 DisclaimerSignature
 String
 DisclaimerSignatureTimeStamp
 DateTime
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ApplicationTemplate
 ApplicationTemplateModel
 ProspectApplicationDetails
 ProspectApplicationDetailModel
 ProspectApplicationMakePaymentModel
 MakePaymentModel
 Property
 PropertyModel
 Unit
 UnitModel
 ProspectSubApplicantDetails
 ProspectSubApplicantDetailModel
 ApplyNowIncomeVerification
 ApplyNowIncomeVerificationModel
 Prospect
 ProspectModel
 Contact
 ContactModel
 PetTypes
 PetTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ProspectApplicationID": 1,
 "ApplicationTemplateID": 2,
 "AccountID": 3,
 "WebUserAccountID": 4,
 "ContactID": 5,
 "PropertyID": 6,
 "UnitTypeID": 7,
 "UnitID": 8,
 "IPAddress": "sample string 9",
 "WaiverText": "sample string 10",
 "EsignCheckboxText": "sample string 11",
 "ConsentToScreenCheckboxText": "sample string 12",
 "EpayTransactionText": "sample string 13",
 "EpayTranID": 14,
 "ApplicationSubmissionDate": "2026-04-29T15:57:31.4213085-04:00",
 "IsTemplateLocked": true,
 "DisclaimerSignature": "sample string 17",
 "DisclaimerSignatureTimeStamp": "2026-04-29T15:57:31.4213085-04:00",
 "CreateDate": "2026-04-29T15:57:31.4213085-04:00",
 "UpdateDate": "2026-04-29T15:57:31.4213085-04:00",
 "MetaTag": "sample string 22"
 }
]

---

## ProspectLostReasons

ProspectLostReaso...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ProspectLostReasons Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectLostReasons?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ProspectLostReasonFilterFields List
 Define this parameter in the request URI.
 embeds
 ProspectLostReasonEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ProspectLostReasonOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ProspectLostReasonGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ProspectLostReasonModel
 Properties
 NameTypeOptimized FiltersAttributes
 ProspectLostReasonID
 Integer
 EqualTo
 Primary Key
 ProspectStatus
 eProspectStatus
 EqualTo
 Name
 String
 EqualTo
 Description
 String
 IsActive
 Boolean
 EqualTo
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ProspectLostReasonID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true,
 "SortOrder": 5,
 "CreateDate": "2026-04-29T15:57:31.5921903-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:31.5921903-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## ProspectStages

ProspectStages
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 IsAtleastOneSignableDocumentPublishedTriggerSetForAllTemplates
 ProspectStageChargeTypes
 ProspectStageScreeningDecisions
 ProspectStageSignableTemplates
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 ProspectStages Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectStages?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ProspectStageFilterFields List
 Define this parameter in the request URI.
 embeds
 ProspectStageEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ProspectStageOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ProspectStageModel
 Properties
 NameTypeOptimized FiltersAttributes
 ProspectStageID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IsActive
 Boolean
 TriggeredBy
 eProspectTrigger
 EqualTo
 SignableDocumentCompletedBy
 eSignableDocumentCompletedBy
 EqualTo
 HasScreeningDecisionsWhichPrevent
 Boolean
 PreventedByLaterTrigger
 Boolean
 EqualTo
 SortOrder
 Integer
 FollowUpDays
 Int32
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ProspectStageScreeningDecisions
 ProspectStageScreeningDecisionModel
 ProspectStageChargeTypes
 ProspectStageChargeTypeModel
 ProspectStageSignableTemplates
 ProspectStageSignableTemplateModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ProspectStageID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true,
 "HasScreeningDecisionsWhichPrevent": true,
 "PreventedByLaterTrigger": true,
 "SortOrder": 7,
 "FollowUpDays": 1,
 "CreateDate": "2026-04-29T15:57:31.7543518-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:31.7543518-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## ProspectSubApplicantDetails

ProspectSubApplic...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApplicationSubApplicantSetup
 Contact
 GetByPost
 ParentProspectApplication
 PrimaryProspectApplication
 ProspectApplication
 Rent Manager Web API Reference
 ProspectSubApplicantDetails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ProspectSubApplicantDetails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ProspectSubApplicantDetailFilterFields List
 Define this parameter in the request URI.
 embeds
 ProspectSubApplicantDetailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ProspectSubApplicantDetailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ProspectSubApplicantDetailModel
 Properties
 NameTypeOptimized FiltersAttributes
 ProspectSubApplicantDetailsID
 Integer
 EqualTo
 Primary Key
 ProspectApplicationID
 Integer
 EqualTo
 PrimaryProspectApplicationID
 Integer
 EqualTo
, 
 In
 ApplicationSubApplicantSetupID
 Integer
 EqualTo
 FullName
 String
 EmailAddress
 String
 IsFromPrimaryApplication
 Boolean
 IsChargeAdded
 Boolean
 ParentProspectApplicationID
 Integer
 SubApplicantContactID
 Integer
 ApplicationSubApplicantSetup
 ApplicationSubApplicantSetupModel
 ProspectApplication
 ProspectApplicationModel
 PrimaryProspectApplication
 ProspectApplicationModel
 ParentProspectApplication
 ProspectApplicationModel
 Contact
 ContactModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ProspectSubApplicantDetailsID": 1,
 "ProspectApplicationID": 2,
 "PrimaryProspectApplicationID": 3,
 "ApplicationSubApplicantSetupID": 4,
 "FullName": "sample string 5",
 "EmailAddress": "sample string 6",
 "IsFromPrimaryApplication": true,
 "IsChargeAdded": true,
 "ParentProspectApplicationID": 9,
 "SubApplicantContactID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## Prospects

Prospects
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 AddressTypes
 Amenities
 ApplyNSFFees
 Appointments
 Balance
 BatchEmailProspects
 BillAllocations
 Bills
 CashPayUser
 ChangeStatus
 Charges
 Checks
 Color
 Contacts
 ContactTypes
 CreateUser
 Credits
 CurrentProspectStage
 ExpectedLeaseTerm
 Floors
 GetByPost
 History
 HistoryCalls
 HistoryEmails
 HistoryNotes
 HistorySystemNotes
 HistoryVisits
 HistoryWebAccountNotes
 IncomeVerifications
 InterestedRentals
 InterestedUnits
 Invoices
 LeadSource
 LeasingAgent
 Loans
 MakePayments
 MergeProspects
 MoveIn
 OpenPrepays
 OpenReceivables
 OverrideCreateUser
 OverrideUpdateUser
 PaymentReversals
 Payments
 Pets
 PhoneNumberTypes
 PreferredAmenities
 PreferredFloors
 PreferredFloorSelectList
 PreferredUnitTypes
 PreferredUnitTypeSelectList
 PreferredUnitUserDefinedValues
 PrimaryContact
 PrimaryContactPhoneNumbers
 Property
 ProspectAmenities
 ProspectColor
 ProspectFloors
 ProspectLostReason
 ProspectStageHistory
 ProspectUnitTypes
 QuickSearch
 RefundSecurityDeposit
 RentQuotes
 ReservedUnitAttachments
 RMVoIPCallHistory
 RunScreening
 ScreeningMappedFieldValues
 ScreeningReportTypesForUser
 Screenings
 Search
 SecurityDepositHeld
 SecurityDeposits
 SecurityDepositSummaries
 ShortTermReservation
 Tasks
 TenantBills
 TenantCheckDetails
 TenantChecks
 TenantColor
 TestScript
 Transactions
 TransferProspect
 TransferSecurityDeposits
 UnitTypes
 UnitUserDefinedFieldModel
 UpdateUser
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 ValidateWebUserCredentials
 Vehicles
 WebUserAccounts
 WebUsers
 Rent Manager Web API Reference
 Prospects Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Prospects?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ProspectFilterFields List
 Define this parameter in the request URI.
 embeds
 ProspectEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ProspectOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ProspectGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ProspectModel
 Prospect Model
 Properties
 NameTypeOptimized FiltersAttributes
 ProspectID
 Integer
 EqualTo
, 
 In
 Primary Key
 ProspectDisplayID
 Integer
 EqualTo
 Read Only
 PropertyID
 Integer
 EqualTo
, 
 In
 Name
 String
 EqualTo
 FirstName
 String
 LastName
 String
 WebMessage
 String
 IsCompany
 Boolean
 ColorID
 (DEPRECATED) As of 3/10/2020
 replaced by TenantColorID
 Integer
 TenantColorID
 Integer
 ProspectColorID
 Integer
 EqualTo
 Contacts
 ContactModel
 Comment
 String
 OverrideScreeningDecision
 Boolean
 OverrideReason
 String
 WasCreatedFromTransfer
 Boolean
 Read Only
, 
 Calculated Field
 OverrideCreateDate
 DateTime
 Read Only
 OverrideCreateUserID
 Integer
 Read Only
 OverrideUpdateDate
 DateTime
 Read Only
 OverrideUpdateUserID
 Integer
 Read Only
 CreateDate
 DateTime
 EqualTo
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 LeasingAgentID
 Int32
 LeadSourceID
 Integer
 EqualTo
 ProspectStatus
 eProspectStatus
 EqualTo
, 
 In
 Read Only
 CurrentProspectStageID
 Integer
 EqualTo
 ProspectLostReasonID
 Integer
 EqualTo
 ProspectLostReasonDescription
 String
 InterestLevel
 Integer
 ApplicationDate
 DateTime
 Addresses
 AddressModel
 PeopleCount
 Integer
 RentMin
 Integer
 RentMax
 Integer
 MoveInDate
 DateTime
 MoveOutDate
 DateTime
 ReservedUnitID
 Int32
 EqualTo
 ReservedMoveIn
 DateTime
 ReservedMoveOut
 DateTime
 ExpectedLeaseStart
 DateTime
 ExpectedLeaseEnd
 DateTime
 ExpectedLeasePeriod
 eLeasePeriod
 ExpectedRentDueDay
 Integer
 Length
 Decimal
 Width
 Decimal
 Amps
 eRVAmp
 IsPullThrough
 Boolean
 IsShowCommentBanner
 Boolean
 IsReserveAssociatedHome
 Boolean
 CashPayUser
 CashPayUserModel
 UserDefinedValues
 UserDefinedValueModel
 History
 HistoryModel
 HistoryCalls
 HistoryCallModel
 HistoryEmails
 HistoryEmailModel
 HistoryVisits
 HistoryVisitModel
 HistoryNotes
 HistoryNoteModel
 HistoryWebAccountNotes
 HistoryWebAccountNoteModel
 Transactions
 TransactionModelBase
 Charges
 ChargeModel
 Payments
 PaymentModel
 Credits
 CreditModel
 Checks
 CheckModel
 Bills
 BillModel
 Balance
 Decimal
 Requires Embed (Balance)
 InterestedUnits
 InterestedUnitModel
 Property
 PropertyModel
 Color
 (DEPRECATED) As of 3/10/2020
 replaced by TenantColor
 ColorModel
 TenantColor
 ColorModel
 ProspectColor
 ColorModel
 PrimaryContact
 (DEPRECATED) As of 10/4/2018
 replaced by Contacts
 ContactModel
 Required (create)
 LeadSource
 LeadSourceModel
 PreferredUnitUserDefinedValues
 PreferredUnitUserDefinedValueModel
 PreferredUnitTypes
 (DEPRECATED) As of 8/27/2018
 replaced by ProspectUnitTypes
 UnitTypeModel
 PreferredUnitTypesList
 (DEPRECATED) As of 8/27/2018
 replaced by ProspectUnitTypes
 CrossProspectPreferredUnitTypeModel
 ProspectUnitTypes
 ProspectUnitTypeModel
 PreferredAmenities
 (DEPRECATED) As of 8/27/2018
 replaced by ProspectAmenities
 PreferredAmenityModel
 ProspectAmenities
 ProspectAmenityModel
 PreferredFloors
 FloorModel
 PreferredFloorsList
 (DEPRECATED) As of 8/27/2018
 replaced by ProspectFloors
 CrossProspectPreferredFloorModel
 ProspectFloors
 ProspectFloorModel
 LeasingAgent
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 WebUserAccounts
 WebUserAccountModel
 ReservedUnit
 UnitModel
 ScreeningStatus
 String
 Read Only
, 
 Calculated Field
 Appointments
 AppointmentModel
 Invoices
 InvoiceModel
 Screenings
 ScreeningModel
 SecurityDepositSummaries
 SecurityDepositSummaryModel
 SecurityDepositHeld
 Decimal
 Requires Embed (SecurityDepositHeld)
 Tasks
 TaskModel
 WebUsers
 WebUserModel
 Floors
 FloorModel
 Amenities
 AmenityModel
 UnitTypes
 UnitTypeModel
 HistorySystemNotes
 HistorySystemNoteModel
 RMVoIPCallHistory
 RMVoIPCallHistoryModel
 LastStatusChangedDate
 DateTime
 InterestedRentals
 InterestedRentalModel
 ReservedUnitAttachments
 ProspectReservedUnitAttachmentModel
 FirstContact
 DateTime
 Read Only
 LastContact
 DateTime
 Read Only
 NextContact
 DateTime
 Read Only
 LastHistoryItem
 DateTime
 Read Only
 ExpectedLeaseTermID
 Integer
 ExpectedLeaseTerm
 LeaseTermModel
 Pets
 PetModel
 CurrentProspectStage
 CrossProspectProspectStageModel
 ProspectStageHistory
 ProspectStageHistoryModel
 ProspectLostReason
 ProspectLostReasonModel
 PaymentReversals
 PaymentReversalModel
 ShortTermReservations
 ShortTermReservationModel
 Vehicles
 VehicleModel
 OpenReceivables
 OpenReceivableModel
 OverrideCreateUser
 UserModel
 OverrideUpdateUser
 UserModel
 IncomeVerifications
 IncomeVerificationModel
 RentQuotes
 RentQuoteModel
 RentQuoteOtherRentableItems
 RentQuoteOtherRentableItemModel
 ReservedOtherRentableItems
 ReservedOtherRentableItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ProspectID": 1,
 "ProspectDisplayID": 2,
 "Name": "sample string 4",
 "FirstName": "sample string 5",
 "LastName": "sample string 6",
 "ColorID": 9,
 "TenantColorID": 10,
 "ProspectColorID": 11
 }
]

---

## PublishedTWAReports

PublishedTWARepor...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 PublishedTWAReportCommittees
 PublishedTWAReportReportParameters
 PublishedTWAReportReportParameterValues
 QuickSearch
 Report
 RunReport
 Search
 TWAReportTemplate
 UpdateUser
 Rent Manager Web API Reference
 PublishedTWAReports Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PublishedTWAReports?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PublishedTWAReportFilterFields List
 Define this parameter in the request URI.
 embeds
 PublishedTWAReportEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PublishedTWAReportOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PublishedTWAReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 PublishedTWAReportID
 Integer
 EqualTo
 Primary Key
 TWAReportTemplateID
 Int32
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 ReportID
 eReport
 EqualTo
 PublishDate
 DateTime
 IsActiveCommitteeMembersOnly
 Boolean
 IsCurrentBoardMembersOnly
 Boolean
 ExpirationDateResolved
 DateTime
 DisplayName
 String
 DisplayNameResolved
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Property
 PropertyModel
 Report
 ReportModel
 TWAReportTemplate
 TWAReportTemplateModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PublishedTWAReportCommittees
 PublishedTWAReportCommitteeModel
 Required (create)
 PublishedTWAReportReportParameterValues
 PublishedTWAReportReportParameterValueModel
 Required (create)
 PublishedTWAReportReportParameters
 PublishedTWAReportReportParameterModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PublishedTWAReportID": 1,
 "TWAReportTemplateID": 1,
 "PropertyID": 2,
 "PublishDate": "2026-04-29T15:57:32.3421459-04:00",
 "IsActiveCommitteeMembersOnly": true,
 "IsCurrentBoardMembersOnly": true,
 "ExpirationDateResolved": "2026-04-29T15:57:32.3421459-04:00",
 "DisplayName": "sample string 6",
 "DisplayNameResolved": "sample string 7",
 "CreateDate": "2026-04-29T15:57:32.3421459-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:32.3421459-04:00",
 "UpdateUserID": 11,
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## PurchaseOrderWorkFlows

PurchaseOrderWork...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 InventoryItems
 PurchaseOrderWorkFlowUsers
 QuickSearch
 Search
 Rent Manager Web API Reference
 PurchaseOrderWorkFlows Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PurchaseOrderWorkFlows?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 PurchaseOrderWorkFlowFilterFields List
 Define this parameter in the request URI.
 embeds
 PurchaseOrderWorkFlowEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PurchaseOrderWorkFlowOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PurchaseOrderWorkFlowModel
 Properties
 NameTypeOptimized FiltersAttributes
 PurchaseOrderWorkFlowID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsActive
 Boolean
 RestrictApprovalToWorkflow
 (DEPRECATED) As of 12/15/2023
 Boolean
 Calculated Field
 RestrictAssignedUserToWorkflow
 (DEPRECATED) As of 12/15/2023
 Boolean
 Calculated Field
 PurchaseOrderWorkFlowUsers
 PurchaseOrderWorkFlowUserModel
 InventoryItems
 InventoryItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PurchaseOrderWorkFlowID": 1
 }
]

---

## PurchaseOrders

PurchaseOrders
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Advance
 Approve
 ApprovedByUser
 AssignedToUser
 Bill
 Bills
 Close
 CreateUser
 Estimate
 GetByPost
 GetNextPurchaseOrderNumber
 History
 HistoryNotes
 HistorySystemNotes
 Invoice
 LinkToBill
 Owner
 Prospect
 PurchaseOrderAssignUserHistory
 PurchaseOrderDetails
 PurchaseOrderWorkFlow
 QuickSearch
 Receive
 Reject
 Reopen
 Reply
 RequestUser
 Search
 ServiceManagerIssue
 Tenant
 UnlinkBill
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 PurchaseOrders Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET PurchaseOrders?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 PurchaseOrderFilterFields List
 Define this parameter in the request URI.
 embeds
 PurchaseOrderEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 PurchaseOrderOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 PurchaseOrderGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
PurchaseOrderModel
 Properties
 NameTypeOptimized FiltersAttributes
 PurchaseOrderID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountType
 eAccountType
 TenantID
 (DEPRECATED) As of 4/24/2020
 replaced by AccountID
 Integer
 EqualTo
, 
 In
 AccountID
 Integer
 EqualTo
, 
 In
 PurchaseOrderWorkFlowID
 Integer
 EqualTo
, 
 In
 PurchaseOrderWorkFlowStep
 Integer
 RequestUserID
 Integer
 EqualTo
, 
 In
 Description
 String
 AssignedToUserID
 Integer
 EqualTo
, 
 In
 VendorID
 Integer
 EqualTo
, 
 In
 StatusID
 (DEPRECATED) As of 7/31/2019
 replaced by PurchaseOrderStatusID
 Integer
 Read Only
 IsClosed
 Boolean
 PurchaseOrderStatusID
 ePurchaseOrderStatus
 Total
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (PurchaseOrderDetails)
 TotalQuantity
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (PurchaseOrderDetails)
 StatusMessage
 String
 Read Only
, 
 Calculated Field
 ApprovedByUserID
 Integer
 CreateUserID
 Integer
 EqualTo
, 
 In
 UpdateUserID
 Integer
 EqualTo
, 
 In
 ApprovedDate
 DateTime
 IssueDate
 DateTime
 RequestDate
 DateTime
 CreateDate
 DateTime
 UpdateDate
 DateTime
 TaxRate
 Decimal
 PurchaseOrderNumber
 String
 BillingAddress
 String
 ShippingAddress
 String
 IsInvoiceRequired
 Boolean
 PurchaseOrderDetails
 PurchaseOrderDetailModel
 Required (create)
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 Vendor
 VendorModel
 RequestUser
 UserModel
 AssignedToUser
 UserModel
 ApprovedByUser
 UserModel
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PurchaseOrderWorkFlow
 PurchaseOrderWorkFlowModel
 HistoryNotes
 HistoryNoteModel
 HistorySystemNotes
 HistorySystemNoteModel
 History
 HistoryModel
 PurchaseOrderAssignUserHistory
 PurchaseOrderAssignUserHistoryModel
 ServiceManagerIssueID
 (DEPRECATED) As of 8/19/2019
 Integer
 ServiceManagerIssue
 (DEPRECATED) As of 8/19/2019
 ServiceManagerIssueModel
 InvoiceID
 (DEPRECATED) As of 8/19/2019
 Integer
 Invoice
 (DEPRECATED) As of 8/19/2019
 InvoiceModel
 BillID
 (DEPRECATED) As of 9/1/2024
 replaced by Bills
 Integer
 Read Only
 Bill
 (DEPRECATED) As of 9/1/2024
 replaced by Bills
 BillModel
 Read Only
 Bills
 BillModel
 EstimateID
 Integer
 Estimate
 EstimateModel
 Account
 AccountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "PurchaseOrderID": 1,
 "TenantID": 2,
 "AccountID": 3,
 "PurchaseOrderWorkFlowID": 4,
 "PurchaseOrderWorkFlowStep": 5,
 "RequestUserID": 6,
 "Description": "sample string 7",
 "AssignedToUserID": 8,
 "VendorID": 9,
 "StatusID": 10,
 "IsClosed": true,
 "StatusMessage": "Pending - Closed",
 "ApprovedByUserID": 12,
 "CreateUserID": 13,
 "UpdateUserID": 14,
 "ApprovedDate": "2026-04-29T15:57:32.6331174-04:00",
 "IssueDate": "2026-04-29T15:57:32.6331174-04:00",
 "RequestDate": "2026-04-29T15:57:32.6331174-04:00",
 "CreateDate": "2026-04-29T15:57:32.6331174-04:00",
 "UpdateDate": "2026-04-29T15:57:32.6331174-04:00",
 "TaxRate": 18.0,
 "PurchaseOrderNumber": "sample string 19",
 "BillingAddress": "sample string 20",
 "ShippingAddress": "sample string 21",
 "IsInvoiceRequired": true,
 "ServiceManagerIssueID": 23,
 "InvoiceID": 24,
 "BillID": 25,
 "EstimateID": 26,
 "MetaTag": "sample string 28"
 }
]

---

## RMResidentPushNotificationTokens

RMResidentPushNot...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 RMResidentPushNotificationTokens Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RMResidentPushNotificationTokens?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RMResidentPushNotificationTokensFilterFields List
 Define this parameter in the request URI.
 embeds
 RMResidentPushNotificatonTokenEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RMResidentPushNotificationTokensOrderingIOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RMResidentPushNotificationTokensModel
 Properties
 NameTypeOptimized FiltersAttributes
 RMResidentPushNotificationTokenID
 Integer
 Primary Key
 WebUserID
 Integer
 EqualTo
, 
 In
 Token
 String
 GroupNotificationKey
 String
 GroupNotificationKeyName
 String
 DeviceID
 String
 DeviceType
 Integer
 RegistrationDate
 DateTime
 CreateDate
 DateTime
 CreateUser
 Integer
 UpdateDate
 DateTime
 UpdateUser
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RMResidentPushNotificationTokenID": 1,
 "WebUserID": 2,
 "Token": "sample+string+3",
 "GroupNotificationKey": "sample string 4",
 "GroupNotificationKeyName": "sample string 5",
 "DeviceID": "sample string 6",
 "DeviceType": 7,
 "RegistrationDate": "2026-04-29T15:57:32.8431637-04:00",
 "CreateDate": "2026-04-29T15:57:32.8431637-04:00",
 "CreateUser": 10,
 "UpdateDate": "2026-04-29T15:57:32.8431637-04:00",
 "UpdateUser": 12,
 "ConcurrencyID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## RMVoIPCallHistory

RMVoIPCallHistory
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 HistoryCategory
 HuntGroupAssociations
 LeadSource
 Owner
 OwnerProspect
 OwnerProspectLeadSource
 Property
 Prospect
 QuickSearch
 Search
 Tenant
 UserFrom
 UserTo
 Vendor
 Rent Manager Web API Reference
 RMVoIPCallHistory Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RMVoIPCallHistory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RMVoIPCallHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 RMVoIPCallHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RMVoIPCallHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RMVoIPCallHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 RMVoIPCallHistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
, 
 Read Only
 RMVoIPMainLocationCallHistoryID
 Integer
 Read Only
 LocationID
 Integer
 Read Only
 ParentID
 Integer
 EqualTo
 Read Only
 ParentType
 eRMVoIPCallHistoryRelatedObjectTypes
 EqualTo
 Read Only
 UserIDTo
 Integer
 EqualTo
 Read Only
 UserIDFrom
 Integer
 EqualTo
 Read Only
 CallTo
 String
 Read Only
 CallFrom
 String
 Read Only
 DialedPhoneNumber
 String
 IsOutbound
 Boolean
 Read Only
 IsContactMade
 Boolean
 HistoryCategoryID
 Int32
 EqualTo
 LeadSourceID
 Int32
 EqualTo
 Read Only
 OwnerProspectLeadSourceID
 Integer
 EqualTo
 Read Only
 StartTime
 DateTime
 Read Only
 EndTime
 DateTime
 Read Only
 StartTimeUTC
 DateTime
 Read Only
 Notes
 String
 CallerID
 String
 Read Only
 ChannelID
 String
 RMVoIPFileName
 String
 HistoryCategory
 HistoryCategoryModel
 UserTo
 UserModel
 UserFrom
 UserModel
 LeadSource
 LeadSourceModel
 OwnerProspectLeadSource
 OwnerProspectLeadSourceModel
 ProspectID
 Integer
 Read Only
 Prospect
 ProspectModel
 TenantID
 Integer
 Read Only
 Tenant
 TenantModel
 VendorID
 Integer
 Read Only
 Vendor
 VendorModel
 OwnerID
 Integer
 Read Only
 Owner
 OwnerModel
 OwnerProspectID
 Integer
 Read Only
 OwnerProspect
 OwnerProspectModel
 PropertyID
 Integer
 Read Only
 Property
 PropertyModel
 HuntGroupAssociations
 RMVoIPHuntGroupAssociationModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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
 "StartTime": "2026-04-29T15:57:32.982736-04:00",
 "EndTime": "2026-04-29T15:57:32.982736-04:00",
 "StartTimeUTC": "2026-04-29T15:57:32.982736-04:00",
 "Notes": "sample string 16",
 "CallerID": "sample string 17",
 "ChannelID": "sample string 18",
 "RMVoIPFileName": "sample string 19",
 "MetaTag": "sample string 21"
 }
]

---

## RateDiscounts

RateDiscounts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 CreateUser
 GetByPost
 Property
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 RateDiscounts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RateDiscounts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RateDiscountFilterFields List
 Define this parameter in the request URI.
 embeds
 RateDiscountEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RateDiscountOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RateDiscountModel
 Properties
 NameTypeOptimized FiltersAttributes
 RateDiscountID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 Amount
 Decimal
 IsPercent
 Boolean
 ChargeTypeID
 Integer
 EqualTo
 Timeframe
 eRateTimeFrame
 AllowOnLengthsOfStay
 eLengthOfStay
 IsMaxNightsEnabled
 Boolean
 MaxNights
 Integer
 IsGuestAllowedToSelectFromPortal
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Property
 PropertyModel
 ChargeType
 ChargeTypeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RateDiscountID": 1,
 "Name": "sample string 2",
 "PropertyID": 3,
 "Amount": 4.0,
 "IsPercent": true,
 "ChargeTypeID": 6,
 "IsMaxNightsEnabled": true,
 "MaxNights": 8,
 "IsGuestAllowedToSelectFromPortal": true,
 "CreateDate": "2026-04-29T15:57:35.8010836-04:00",
 "CreateUserID": 11,
 "UpdateDate": "2026-04-29T15:57:35.8010836-04:00",
 "UpdateUserID": 13,
 "ConcurrencyID": 14,
 "MetaTag": "sample string 16"
 }
]

---

## RateSchedules

RateSchedules
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Properties
 QuickSearch
 Rates
 Search
 Rent Manager Web API Reference
 RateSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RateSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RateScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 RateScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RateScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RateScheduleModel
 Properties
 NameTypeOptimized FiltersAttributes
 RateScheduleID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Name
 String
 StartDate
 DateTime
 EndDate
 DateTime
 CreateDate
 DateTime
 UpdateDate
 DateTime
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Rates
 RateModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RateScheduleID": 1,
 "PropertyID": 2,
 "CreateUserID": 3,
 "UpdateUserID": 4,
 "ConcurrencyID": 5,
 "Name": "sample string 6",
 "StartDate": "2026-04-29T15:57:35.9923577-04:00",
 "EndDate": "2026-04-29T15:57:35.9923577-04:00",
 "CreateDate": "2026-04-29T15:57:35.9923577-04:00",
 "UpdateDate": "2026-04-29T15:57:35.9923577-04:00",
 "MetaTag": "sample string 11"
 }
]

---

## Rates

Rates
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeTypes
 DynamicRates
 GetByPost
 QuickSearch
 RateAdditionalFees
 RateDetails
 RateFees
 RateSchedules
 Search
 SiteGroups
 Units
 Rent Manager Web API Reference
 Rates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Rates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RateFilterFields List
 Define this parameter in the request URI.
 embeds
 RateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RateModel
 Properties
 NameTypeOptimized FiltersAttributes
 RateID
 Integer
 EqualTo
 Primary Key
 Name
 String
 RateScheduleID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
, 
 In
 SiteGroupID
 Integer
 EqualTo
, 
 In
 ChargeTypeID
 Integer
 EqualTo
 IsDynamicRatesEnabled
 Boolean
 ApplyRateTo
 eRateApplyTo
 IsNightlyRateFlat
 Boolean
 NightlyFlatRate
 Decimal
 RateMonday
 Decimal
 RateTuesday
 Decimal
 RateWednesday
 Decimal
 RateThursday
 Decimal
 RateFriday
 Decimal
 RateSaturday
 Decimal
 RateSunday
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 RateDetails
 RateDetailModel
 RateFees
 RateFeeModel
 RateAdditionalFees
 RateAdditionalFeeModel
 RateSchedule
 RateScheduleModel
 Unit
 UnitModel
 SiteGroup
 SiteGroupModel
 ChargeType
 ChargeTypeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 DynamicRates
 DynamicRateModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RateID": 1,
 "Name": "sample string 2",
 "RateScheduleID": 3,
 "UnitID": 4,
 "SiteGroupID": 5,
 "ChargeTypeID": 6,
 "IsDynamicRatesEnabled": true,
 "IsNightlyRateFlat": true,
 "NightlyFlatRate": 9.0,
 "RateMonday": 10.0,
 "RateTuesday": 11.0,
 "RateWednesday": 12.0,
 "RateThursday": 13.0,
 "RateFriday": 14.0,
 "RateSaturday": 15.0,
 "RateSunday": 16.0,
 "CreateDate": "2026-04-29T15:57:36.1243756-04:00",
 "CreateUserID": 18,
 "UpdateDate": "2026-04-29T15:57:36.1243756-04:00",
 "UpdateUserID": 20,
 "ConcurrencyID": 21,
 "MetaTag": "sample string 23"
 }
]

---

## ReconciliationChanges

ReconciliationCha...
 Retrieve Collection
 Retrieve Instance
 CreateUser
 GetByPost
 GLAccount
 QuickSearch
 Reconciliation
 Search
 UpdateUser
 Rent Manager Web API Reference
 ReconciliationChanges Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReconciliationChanges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReconciliationChangeFilterFields List
 Define this parameter in the request URI.
 embeds
 ReconciliationChangeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReconciliationChangeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReconciliationChangeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReconciliationChangeID
 Integer
 Primary Key
 TransactionTypeID
 eTransactionType
 TransactionID
 Integer
 GLAccountID
 Integer
 TransactionDate
 DateTime
 Amount
 Decimal
 Description
 String
 ReconcileAction
 eReconciliationChangeAction
 ReconcileID
 Int32
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 GLAccount
 GLAccountModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Reconciliation
 ReconciliationModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReconciliationChangeID": 1,
 "TransactionID": 2,
 "GLAccountID": 3,
 "TransactionDate": "2026-04-29T15:57:36.2950683-04:00",
 "Amount": 4.0,
 "Description": "sample string 5",
 "ReconcileID": 1,
 "CreateDate": "2026-04-29T15:57:36.2950683-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:36.2950683-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## Reconciliations

Reconciliations
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Attachments
 CreateUser
 FileAttachments
 GetByPost
 GLAccount
 QuickSearch
 ReportFile
 Search
 Transactions
 UpdateUser
 Rent Manager Web API Reference
 Reconciliations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Reconciliations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ReconciliationFilterFields List
 Define this parameter in the request URI.
 embeds
 ReconciliationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReconciliationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ReconciliationGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReconciliationModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReconciliationID
 Integer
 EqualTo
, 
 In
 Primary Key
 GeneralLedgerAccountID
 Integer
 EqualTo
 ReconciliationDate
 DateTime
 PreviouslyReconciledAmount
 Decimal
 Read Only
 Payments
 Decimal
 Read Only
 Deposits
 Decimal
 Read Only
 Goal
 Decimal
 Comment
 String
 FinishDate
 DateTime
 IsAuto
 Boolean
 EqualTo
 IsManual
 Boolean
 EqualTo
 IsSavedForLater
 Boolean
 EqualTo
 IsReconciled
 Boolean
 EqualTo
 Read Only
 ReportFileID
 Integer
 EqualTo
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Read Only
 ReconcileTransactions
 ReconcileTransactionModel
 Required (create)
 Transactions
 BankTransactionModel
 Read Only
 GLAccount
 GLAccountModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 FileAttachments
 FileAttachmentModel
 ReportFile
 FileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReconciliationID": 1,
 "GeneralLedgerAccountID": 2,
 "ReconciliationDate": "2026-04-29T15:57:36.4572534-04:00",
 "PreviouslyReconciledAmount": 4.0,
 "Payments": 5.0,
 "Deposits": 6.0,
 "Goal": 7.0,
 "Comment": "sample string 8",
 "FinishDate": "2026-04-29T15:57:36.4572534-04:00",
 "IsAuto": true,
 "IsManual": true,
 "IsSavedForLater": true,
 "IsReconciled": true,
 "ReportFileID": 14,
 "CreateDate": "2026-04-29T15:57:36.4572534-04:00",
 "CreateUserID": 16,
 "UpdateDate": "2026-04-29T15:57:36.4572534-04:00",
 "UpdateUserID": 18,
 "ConcurrencyID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## RecurringBills

RecurringBills
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Bank
 CreateUser
 GetByPost
 GLAccount
 History
 HistoryNotes
 Owner
 PostRecurringBills
 QuickSearch
 RecurringBillDetails
 Search
 Term
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 RecurringBills Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RecurringBills?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 RecurringBillFilterFields List
 Define this parameter in the request URI.
 embeds
 RecurringBillEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RecurringBillOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 RecurringBillGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RecurringBillModel
 Properties
 NameTypeOptimized FiltersAttributes
 RecurringBillID
 Integer
 EqualTo
, 
 In
 Primary Key
 PayeeAccountID
 Integer
 EqualTo
 Reference
 String
 StartDate
 DateTime
 EndDate
 DateTime
 LastPostDate
 DateTime
 Read Only
 Amount
 Decimal
 TermID
 Integer
 Comment
 String
 TimesLeft
 Integer
 Period
 eBillPeriod
 Frequency
 Integer
 BankID
 Integer
 AccountType
 eAccountType
 DefaultBankOption
 eDefaultBankOption
 PayMethod
 eBillPayMethod
 AdjustedPostDate
 DateTime
 AdjustedDueDate
 DateTime
 IsAutomated
 Boolean
 AutomationNotificationEmail
 String
 NextPostDate
 DateTime
 DueDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Bank
 BankModel
 GLAccount
 GLAccountModel
 Vendor
 VendorModel
 Owner
 OwnerModel
 Account
 AccountModel
 Term
 TermModel
 RecurringBillDetails
 RecurringBillDetailModel
 Required (create)
 History
 HistoryModel
 HistoryNotes
 HistoryNoteModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RecurringBillID": 1,
 "PayeeAccountID": 2,
 "Reference": "sample string 3",
 "StartDate": "2026-04-29T15:57:36.6329622-04:00",
 "EndDate": "2026-04-29T15:57:36.6329622-04:00",
 "LastPostDate": "2026-04-29T15:57:36.6329622-04:00",
 "Amount": 4.0,
 "TermID": 5,
 "Comment": "sample string 6",
 "TimesLeft": 7,
 "Frequency": 8,
 "BankID": 9,
 "AdjustedPostDate": "2026-04-29T15:57:36.6329622-04:00",
 "AdjustedDueDate": "2026-04-29T15:57:36.6329622-04:00",
 "IsAutomated": true,
 "AutomationNotificationEmail": "sample string 13",
 "NextPostDate": "2026-04-29T15:57:36.6329622-04:00",
 "DueDate": "2026-04-29T15:57:36.6329622-04:00",
 "CreateDate": "2026-04-29T15:57:36.6329622-04:00",
 "CreateUserID": 15,
 "UpdateDate": "2026-04-29T15:57:36.6329622-04:00",
 "UpdateUserID": 17,
 "MetaTag": "sample string 19"
 }
]

---

## RecurringChargeExceptions

RecurringChargeEx...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 RecurringChargeExceptions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RecurringChargeExceptions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RecurringChargeExceptionFilterFields List
 Define this parameter in the request URI.
 embeds
 RecurringChargeExceptionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RecurringChargeExceptionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RecurringChargeExceptionModel
 Properties
 NameTypeOptimized FiltersAttributes
 RecurringChargeExceptionID
 Integer
 EqualTo
, 
 In
 Primary Key
 RecurringChargeID
 Integer
 EntityTypeID
 eEntityType
 EqualTo
 EntityKeyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RecurringChargeExceptionID": 1,
 "RecurringChargeID": 2,
 "EntityKeyID": 3,
 "UnitID": 4,
 "CreateDate": "2026-04-29T15:57:36.8118656-04:00",
 "CreateUserID": 6,
 "MetaTag": "sample string 8"
 }
]

---

## RecurringCharges

RecurringCharges
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 GetByPost
 PostRecurringCharges
 Property
 QuickSearch
 RecurringChargeExceptions
 RecurringChargesWithTotal
 RecurringCreditAllocations
 Search
 Tenant
 Unit
 UnitType
 Rent Manager Web API Reference
 RecurringCharges Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RecurringCharges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RecurringChargeFilterFields List
 Define this parameter in the request URI.
 embeds
 RecurringChargeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RecurringChargeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RecurringChargeModel
 Properties
 NameTypeOptimized FiltersAttributes
 RecurringChargeID
 Integer
 EqualTo
, 
 In
 Primary Key
 EntityType
 eEntityType
 EqualTo
 EntityKeyID
 Int32
 EqualTo
, 
 In
 UnitID
 Int32
 EqualTo
 Frequency
 Integer
 ChargeTypeID
 Integer
 EqualTo
, 
 In
 Amount
 Decimal
 OriginalAmount
 Decimal
 Calculated Field
 AmountPerSquareFoot
 Decimal
 Comment
 String
 FromDate
 DateTime
 ToDate
 DateTime
 IsCalculated
 Boolean
 Calculation
 String
 CamRecurringChargeID
 Int32
 EqualTo
 SortOrder
 Integer
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ChargeType
 ChargeTypeModel
 RecurringChargeExceptions
 RecurringChargeExceptionModel
 TenantID
 Int32
 Read Only
 Tenant
 TenantModel
 LinkedUnit
 UnitModel
 Unit
 UnitModel
 UnitTypeID
 Int32
 Read Only
 UnitType
 UnitTypeModel
 PropertyID
 Int32
 Read Only
 Property
 PropertyModel
 CreditAllocations
 RecurringCreditAllocationModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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
 "FromDate": "2026-04-29T15:57:36.9669088-04:00",
 "ToDate": "2026-04-29T15:57:36.9669088-04:00",
 "IsCalculated": true,
 "Calculation": "sample string 9",
 "CamRecurringChargeID": 1,
 "SortOrder": 10,
 "CreateDate": "2026-04-29T15:57:36.9669088-04:00",
 "CreateUserID": 12,
 "UpdateDate": "2026-04-29T15:57:36.9669088-04:00",
 "UpdateUserID": 14,
 "MetaTag": "sample string 16"
 }
]

---

## RecurringChargesAutomationSchedules

RecurringChargesA...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 PropertyGroup
 QuickSearch
 RecurringChargesAutomationScheduleProperties
 Search
 UpdateUser
 Rent Manager Web API Reference
 RecurringChargesAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RecurringChargesAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RecurringChargesAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 RecurringChargesAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RecurringChargesAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RecurringChargesAutomationScheduleModel
 RecurringCharges Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 RecurringChargesAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 PostingType
 eLeasePeriod
 IsUseRentDueDayForPosting
 Boolean
 IsPostZeroCharges
 Boolean
 IsPostUtilities
 Boolean
 IsPostLoans
 Boolean
 IsAccountGroupInvoice
 Boolean
 InvoiceComment
 String
 CRESetupCapOverages
 eCRESetupCapOverages
 Memo
 String
 Name
 String
 IsActive
 Boolean
 StartDate
 DateTime
 EndDate
 DateTime
 RunDay
 Integer
 PostingDay
 Integer
 NotificationEmail
 String
 IncludeDetails
 Boolean
 PropertyGroupID
 Integer
 CreateUserID
 Integer
 CreateDate
 DateTime
 UpdateUserID
 Integer
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyGroup
 PropertyGroupModel
 RecurringChargesAutomationScheduleProperties
 RecurringChargesAutomationSchedulePropertyModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RecurringChargesAutomationScheduleID": 1,
 "IsUseRentDueDayForPosting": true,
 "IsPostZeroCharges": true,
 "IsPostUtilities": true,
 "IsPostLoans": true,
 "IsAccountGroupInvoice": true,
 "InvoiceComment": "sample string 7",
 "Memo": "sample string 8",
 "Name": "sample string 9",
 "IsActive": true,
 "StartDate": "2026-04-29T15:57:37.1447443-04:00",
 "EndDate": "2026-04-29T15:57:37.1447443-04:00",
 "RunDay": 13,
 "PostingDay": 14,
 "NotificationEmail": "sample string 15",
 "IncludeDetails": true,
 "PropertyGroupID": 17,
 "CreateUserID": 18,
 "CreateDate": "2026-04-29T15:57:37.1447443-04:00",
 "UpdateUserID": 20,
 "UpdateDate": "2026-04-29T15:57:37.1447443-04:00",
 "ConcurrencyID": 22,
 "LastRunDate": "2026-04-29T15:57:37.1447443-04:00",
 "NextRunDate": "2026-04-29T15:57:37.1447443-04:00",
 "MetaTag": "sample string 25"
 }
]

---

## RecurringJournals

RecurringJournals
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 PostRecurringJournals
 QuickSearch
 RecurringJournalDetails
 Search
 UpdateUser
 Rent Manager Web API Reference
 RecurringJournals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RecurringJournals?filters={filters}&embeds={embeds}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 RecurringJournalFilterFields List
 Define this parameter in the request URI.
 embeds
 RecurringJournalEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 RecurringJournalGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RecurringJournalModel
 Properties
 NameTypeOptimized FiltersAttributes
 RecurringJournalID
 Integer
 EqualTo
 Primary Key
 Basis
 eBasis
 IsPeriodAdjustment
 Boolean
 Reference
 String
 Memo
 String
 Amount
 Decimal
 StartDate
 DateTime
 EndDate
 DateTime
 LastPostDate
 DateTime
 AdjustedPostDate
 DateTime
 NextPostDate
 DateTime
 Frequency
 Integer
 Period
 eJournalPeriod
 TimesLeft
 Integer
 IsAutomated
 Boolean
 AutomationNotificationEmail
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 RecurringJournalDetails
 RecurringJournalDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RecurringJournalID": 1,
 "IsPeriodAdjustment": true,
 "Reference": "sample string 3",
 "Memo": "sample string 4",
 "Amount": 5.0,
 "StartDate": "2026-04-29T15:57:37.3360554-04:00",
 "EndDate": "2026-04-29T15:57:37.3360554-04:00",
 "LastPostDate": "2026-04-29T15:57:37.3360554-04:00",
 "AdjustedPostDate": "2026-04-29T15:57:37.3360554-04:00",
 "NextPostDate": "2026-04-29T15:57:37.3360554-04:00",
 "Frequency": 6,
 "TimesLeft": 7,
 "IsAutomated": true,
 "AutomationNotificationEmail": "sample string 9",
 "CreateDate": "2026-04-29T15:57:37.3360554-04:00",
 "CreateUserID": 11,
 "UpdateDate": "2026-04-29T15:57:37.3360554-04:00",
 "UpdateUserID": 13,
 "ConcurrencyID": 14,
 "MetaTag": "sample string 16"
 }
]

---

## Reminders

Reminders
 Retrieve Collection
 Retrieve Instance
 Color
 CreateUser
 Dismiss
 GetByPost
 QuickSearch
 Search
 Snooze
 TaskUsers
 UpdateUser
 Rent Manager Web API Reference
 Reminders Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Reminders?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReminderFilterFields List
 Define this parameter in the request URI.
 embeds
 ReminderEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReminderOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReminderModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReminderID
 Integer
 Primary Key
 ParentReminderID
 Integer
 TaskType
 eTaskType
 Subject
 String
 DueDate
 DateTime
 DueIn
 String
 CreateUserID
 Integer
 CreateDate
 DateTime
 UpdateUserID
 Integer
 UpdateDate
 DateTime
 ColorID
 Integer
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TaskUsers
 TaskUserModel
 Color
 ColorModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReminderID": 1,
 "ParentReminderID": 2,
 "TaskType": "TaskType",
 "Subject": "sample string 3",
 "DueDate": "2026-04-29T15:57:37.4993615-04:00",
 "DueIn": "sample string 5",
 "CreateUserID": 6,
 "CreateDate": "2026-04-29T15:57:37.4993615-04:00",
 "UpdateUserID": 8,
 "UpdateDate": "2026-04-29T15:57:37.4993615-04:00",
 "ColorID": 11,
 "MetaTag": "sample string 13"
 }
]

---

## ReportBatchReports

ReportBatchReport...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CustomForm
 CustomReport
 GetByPost
 MemorizedReport
 PluginReport
 Report
 ReportBatchReportReportParameters
 ReportBatchReportSavedReportParameterValues
 Rent Manager Web API Reference
 ReportBatchReports Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReportBatchReports?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReportBatchReportFilterFields List
 Define this parameter in the request URI.
 embeds
 ReportBatchReportEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReportBatchReportOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReportBatchReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReportBatchReportID
 Integer
 EqualTo
 Primary Key
 ReportBatchID
 Integer
 EqualTo
, 
 In
 MemorizedReportID
 Integer
 EqualTo
 ReportID
 eReport
 EqualTo
 CustomFormID
 Integer
 EqualTo
 CustomReportID
 Integer
 EqualTo
 PluginReportID
 Guid
 SortOrder
 Integer
 ReportBatchReportSavedReportParameterValues
 ReportBatchReportSavedReportParameterValueModel
 Required (create)
 ReportBatchReportReportParameters
 ReportBatchReportReportParameterModel
 Report
 ReportModel
 MemorizedReport
 MemorizedReportModel
 CustomReport
 CustomReportModel
 CustomForm
 CustomFormModel
 PluginReport
 PluginReportModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReportBatchReportID": 1,
 "ReportBatchID": 2,
 "MemorizedReportID": 3,
 "CustomFormID": 4,
 "CustomReportID": 5,
 "PluginReportID": "162370f2-8c7f-411f-aca0-c44e7c6a1d6c",
 "SortOrder": 7,
 "MetaTag": "sample string 9"
 }
]

---

## ReportBatches

ReportBatches
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AutomationSchedules
 CreateUser
 DownloadPDF
 GetByPost
 OwnedByUser
 Parameters
 ReportBatchScheduleHistory
 ReportBatchSorts
 Reports
 RunParameters
 RunReport
 RunReportSeparate
 SharedReportBatches
 UpdateUser
 Rent Manager Web API Reference
 ReportBatches Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReportBatches?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReportBatchFilterFields List
 Define this parameter in the request URI.
 embeds
 ReportBatchEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReportBatchOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReportBatchModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReportBatchID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 OwnerID
 Integer
 EqualTo
 IsExcludedFromMenu
 Boolean
 IsScheduled
 Boolean
 EqualTo
 Read Only
 OwnedByUserID
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Reports
 ReportBatchReportModel
 ReportBatchSorts
 ReportBatchSortModel
 ReportBatchScheduleHistory
 ReportBatchScheduleHistoryModel
 Read Only
 OwnedByUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReportBatchID": 1,
 "Name": "sample string 2",
 "OwnerID": 3,
 "IsExcludedFromMenu": true,
 "IsScheduled": true,
 "OwnedByUserID": 6,
 "CreateUserID": 7,
 "UpdateUserID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## ReportSortOptions

ReportSortOptions
 Retrieve Collection
 Retrieve Instance
 GetByPost
 Rent Manager Web API Reference
 ReportSortOptions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReportSortOptions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReportSortOptionFilterFields List
 Define this parameter in the request URI.
 embeds
 ReportSortOptionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReportSortOptionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReportSortOptionModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReportSortOptionPrimaryKeyID
 Integer
 EqualTo
 Primary Key
 ReportSortOptionID
 eReportSortOption
 EqualTo
 ReportID
 eReport
 EqualTo
 SortOrder
 Integer
 DisplayName
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReportSortOptionPrimaryKeyID": 1,
 "SortOrder": 2,
 "DisplayName": "sample string 3",
 "MetaTag": "sample string 5"
 }
]

---

## ReportWriterReportColumns

ReportWriterRepor...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 GetReportWriterReport
 QuickSearch
 ReportWriterReport
 ReportWriterReportColumnFilters
 Search
 Rent Manager Web API Reference
 ReportWriterReportColumns Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReportWriterReportColumns?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReportWriterReportColumnFilterFields List
 Define this parameter in the request URI.
 embeds
 ReportWriterReportColumnEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReportWriterReportColumnOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReportWriterReportColumnModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReportWriterReportColumnID
 Integer
 EqualTo
 Primary Key
 ReportWriterReportID
 Integer
 EqualTo
, 
 In
 ColumnOrder
 Integer
 OrderByPrecedence
 Integer
 OrderByType
 eCustomReportColumnOrderByType
 IsOrderBy
 Boolean
 IsHidden
 Boolean
 HasTotal
 Boolean
 Header
 String
 Formula
 String
 Width
 Decimal
 ExecuteOrder
 Integer
 TotalType
 eCustomReportColumnTotalType
 TotalScript
 String
 DataType
 eCustomReportColumnDataType
 LeftSpacing
 Decimal
 Calculated Field
 Height
 Decimal
 Calculated Field
 CanGrow
 Boolean
 Calculated Field
 IsWordWrap
 Boolean
 Calculated Field
 Alignment
 eCustomReportColumnAlignment
 Calculated Field
 Format
 String
 Calculated Field
 HeadingFontName
 String
 Calculated Field
 HeadingFontSize
 Decimal
 Calculated Field
 IsHeadingFontBold
 Boolean
 Calculated Field
 IsHeadingFontItalic
 Boolean
 Calculated Field
 ValueFontName
 String
 Calculated Field
 ValueFontSize
 Decimal
 Calculated Field
 IsValueFontBold
 Boolean
 Calculated Field
 IsValueFontItalic
 Boolean
 Calculated Field
 TotalFontName
 String
 Calculated Field
 TotalFontSize
 Decimal
 Calculated Field
 IsTotalFontBold
 Boolean
 Calculated Field
 IsTotalFontItalic
 Boolean
 Calculated Field
 ReportWriterReport
 ReportWriterReportModel
 ReportWriterReportColumnFilters
 ReportWriterReportColumnFilterModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReportWriterReportColumnID": 1,
 "ReportWriterReportID": 2,
 "ColumnOrder": 3,
 "OrderByPrecedence": 4,
 "IsOrderBy": true,
 "IsHidden": true,
 "HasTotal": true,
 "Header": "sample string 8",
 "Formula": "sample string 9",
 "Width": 10.0,
 "ExecuteOrder": 11,
 "TotalScript": "sample string 12",
 "LeftSpacing": 13.0,
 "Height": 14.0,
 "CanGrow": true,
 "IsWordWrap": true,
 "Format": "sample string 17",
 "HeadingFontName": "sample string 18",
 "HeadingFontSize": 19.0,
 "IsHeadingFontBold": true,
 "IsHeadingFontItalic": true,
 "ValueFontName": "sample string 22",
 "ValueFontSize": 23.0,
 "IsValueFontBold": true,
 "IsValueFontItalic": true,
 "TotalFontName": "sample string 26",
 "TotalFontSize": 27.0,
 "IsTotalFontBold": true,
 "IsTotalFontItalic": true,
 "MetaTag": "sample string 31"
 }
]

---

## ReportWriterReports

ReportWriterRepor...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 HeaderFile
 QuickSearch
 ReportWriterReportColumns
 ReportWriterReportParameters
 ReportWriterReportRoles
 ReportWriterReportUsers
 RunReportWriterReport
 RunReportWriterReportSeparate
 Search
 UpdateUser
 Rent Manager Web API Reference
 ReportWriterReports Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReportWriterReports?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReportWriterReportFilterFields List
 Define this parameter in the request URI.
 embeds
 ReportWriterReportEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReportWriterReportOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReportWriterReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReportWriterReportID
 Integer
 EqualTo
, 
 In
 Primary Key
 ReportTypeID
 eReportWriterReportType
 EqualTo
 MenuOption
 eReportWriterMenuType
 Name
 String
 EqualTo
 Description
 String
 Title
 String
 Subtitle
 String
 FieldSeparator
 eCustomReportRowSeparator
 ExecuteBeforeReportScript
 String
 ExecuteBeforeRecordScript
 String
 ExecuteAfterRecordScript
 String
 HeaderFileID
 Integer
 PaperSize
 eCustomReportPaperSize
 Orientation
 eCustomReportOrientation
 LineColor
 eCustomReportColorMethod
 MarginTop
 Decimal
 MarginBottom
 Decimal
 MarginLeft
 Decimal
 MarginRight
 Decimal
 TitleFontName
 String
 Calculated Field
 TitleFontSize
 Decimal
 Calculated Field
 IsTitleFontBold
 Boolean
 Calculated Field
 IsTitleFontItalic
 Boolean
 Calculated Field
 SubtitleFontName
 String
 Calculated Field
 SubtitleFontSize
 Decimal
 Calculated Field
 IsSubtitleFontBold
 Boolean
 Calculated Field
 IsSubtitleFontItalic
 Boolean
 Calculated Field
 IsSystem
 Boolean
 EqualTo
 Read Only
 IsAllUsers
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (ReportWriterReportUsers)
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 ReportWriterReportParameters
 ReportWriterReportParameterSummaryModel
 ReportWriterReportUsers
 ReportWriterReportUserModel
 ReportWriterReportRoles
 ReportWriterReportRoleModel
 HeaderFile
 FileModel
 ReportWriterReportColumns
 ReportWriterReportColumnModel
 SortOrder
 Integer
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReportWriterReportID": 1,
 "Name": "sample string 2",
 "SortOrder": 28
 }
]

---

## Reports

Reports
 Retrieve Collection
 Retrieve Instance
 DataReport
 DownloadFile
 GetByPost
 Parameters
 ReportCategory
 ReportParameters
 ReportSortOptions
 RunReport
 RunReportSeparate
 Rent Manager Web API Reference
 Reports Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Reports?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReportFilterFields List
 Define this parameter in the request URI.
 embeds
 ReportEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReportOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReportModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReportID
 eReport
 Primary Key
 ReportCategoryID
 Integer
 Name
 String
 Description
 String
 HideGridView
 Boolean
 ReportParameters
 ReportReportParameterModel
 CantExportCSV
 Boolean
 Read Only
, 
 Calculated Field
 CantExportExcel
 Boolean
 Read Only
, 
 Calculated Field
 CantExportHtml
 Boolean
 Read Only
, 
 Calculated Field
 CantExportText
 Boolean
 Read Only
, 
 Calculated Field
 CantMemorize
 Boolean
 Read Only
, 
 Calculated Field
 CantPublishToVPO
 Boolean
 Read Only
, 
 Calculated Field
 CantAddToPropertyFiles
 Boolean
 Read Only
, 
 Calculated Field
 CanAnalyzeWithAI
 Boolean
 Read Only
, 
 Calculated Field
 IsReportPrivilegeRequired
 Boolean
 Read Only
, 
 Calculated Field
 ReportCategory
 ReportCategoryModel
 PropertyTypeGroup
 ePropertyTypeGroup
 Read Only
, 
 Calculated Field
 PropertyTypes
 ePropertyType
 Read Only
, 
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReportCategoryID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "HideGridView": true,
 "IsReportPrivilegeRequired": true,
 "PropertyTypes": [],
 "MetaTag": "sample string 7"
 }
]

---

## ReservableAmenities

ReservableAmeniti...
 Retrieve Collection
 Retrieve Instance
 AmenityReservationFees
 Color
 CreateUser
 FileAttachments
 GetByPost
 Property
 QuickSearch
 ReservableAmenityAvailabilitySchedules
 ReservableAmenityReservationRequests
 ReservableAmenityUnavailabilitySchedules
 Search
 UpdateUser
 Rent Manager Web API Reference
 ReservableAmenities Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReservableAmenities?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReservableAmenityFilterFields List
 Define this parameter in the request URI.
 embeds
 ReservableAmenityEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReservableAmenityOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReservableAmenityModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReservableAmenityID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 Property
 PropertyModel
 Name
 String
 EqualTo
 DisplayName
 String
 ColorID
 Integer
 EqualTo
 Color
 ColorModel
 DescriptionRTF
 String
 DescriptionHTML
 String
 Read Only
 IsActive
 Boolean
 EqualTo
 IsAllowTWAReservation
 Boolean
 IsRequireDisclaimer
 Boolean
 IsAutomaticallyApproveRequestsSubmittedOnTWA
 Boolean
 IsRequirePaymentForRequestsSubmittedOnTWA
 Boolean
 DisclaimerRTF
 String
 DisclaimerHTML
 String
 Read Only
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 UpdateDate
 DateTime
 AmenityReservationFees
 AmenityReservationFeeModel
 ConcurrencyID
 Integer
 Concurrency Key
 ReservableAmenityAvailabilitySchedules
 ReservableAmenityAvailabilityScheduleModel
 Required (create)
 ReservableAmenityUnavailabilitySchedules
 ReservableAmenityUnavailabilityScheduleModel
 FileAttachments
 FileAttachmentModel
 ReservableAmenityReservationRequests
 ReservableAmenityReservationRequestModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReservableAmenityID": 1,
 "PropertyID": 2,
 "Name": "sample string 3",
 "DisplayName": "sample string 4",
 "ColorID": 5,
 "DescriptionRTF": "sample string 6",
 "DescriptionHTML": "sample string 7",
 "IsActive": true,
 "IsAllowTWAReservation": true,
 "IsRequireDisclaimer": true,
 "IsAutomaticallyApproveRequestsSubmittedOnTWA": true,
 "IsRequirePaymentForRequestsSubmittedOnTWA": true,
 "DisclaimerRTF": "sample string 13",
 "DisclaimerHTML": "sample string 14",
 "CreateUserID": 15,
 "CreateDate": "2026-04-29T15:57:47.8512291-04:00",
 "UpdateUserID": 17,
 "UpdateDate": "2026-04-29T15:57:47.8512291-04:00",
 "ConcurrencyID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## ReservableAmenityAvailabilitySchedules

ReservableAmenity...
 Retrieve Collection
 Retrieve Instance
 CreateUser
 GetByPost
 QuickSearch
 ReservableAmenity
 ReservableAmenityAvailabilities
 Search
 UpdateUser
 Rent Manager Web API Reference
 ReservableAmenityAvailabilitySchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReservableAmenityAvailabilitySchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReservableAmenityAvailabilityScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 ReservableAmenityAvailabilityScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReservableAmenityAvailabilityScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReservableAmenityAvailabilityScheduleModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReservableAmenityAvailabilityScheduleID
 Integer
 EqualTo
 Primary Key
 ReservableAmenityID
 Integer
 EqualTo
 ReservableAmenity
 ReservableAmenityModel
 FromDate
 DateTime
 ToDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 ReservableAmenityAvailabilities
 ReservableAmenityAvailabilityModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReservableAmenityAvailabilityScheduleID": 1,
 "ReservableAmenityID": 2,
 "FromDate": "2026-04-29T15:57:48.1086053-04:00",
 "ToDate": "2026-04-29T15:57:48.1086053-04:00",
 "CreateUserID": 4,
 "CreateDate": "2026-04-29T15:57:48.1086053-04:00",
 "UpdateUserID": 6,
 "UpdateDate": "2026-04-29T15:57:48.1086053-04:00",
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## ReservableAmenityReservationRequests

ReservableAmenity...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AmenityReservationTransactions
 CreateUser
 CreateWebUser
 FileAttachments
 GetByPost
 QuickSearch
 ReservableAmenity
 ReservableAmenityReservationRequestStatuses
 Search
 Tenant
 UpdateUser
 Rent Manager Web API Reference
 ReservableAmenityReservationRequests Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ReservableAmenityReservationRequests?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ReservableAmenityReservationRequestFilterFields List
 Define this parameter in the request URI.
 embeds
 ReservableAmenityReservationRequestEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ReservableAmenityReservationRequestOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ReservableAmenityReservationRequestModel
 Properties
 NameTypeOptimized FiltersAttributes
 ReservableAmenityReservationRequestID
 Integer
 EqualTo
 Primary Key
 ReservableAmenityID
 Integer
 EqualTo
, 
 In
 TenantID
 Integer
 EqualTo
 FromDateTime
 DateTime
 ToDateTime
 DateTime
 Notes
 String
 TotalAmountDue
 Decimal
 Read Only
, 
 Requires Embed (TotalAmountDue)
 RemainingBalance
 Decimal
 Read Only
, 
 Requires Embed (RemainingBalance)
 CreateWebUserID
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CurrentStatus
 eReservableAmenityReservationRequestStatuses
 ReservableAmenity
 ReservableAmenityModel
 Tenant
 TenantModel
 CreateWebUser
 WebUserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ReservableAmenityReservationRequestStatuses
 ReservableAmenityReservationRequestStatusModel
 FileAttachments
 FileAttachmentModel
 AmenityReservationTransactions
 AmenityReservationTransactionModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ReservableAmenityReservationRequestID": 1,
 "ReservableAmenityID": 2,
 "TenantID": 3,
 "FromDateTime": "2026-04-29T15:57:48.2788285-04:00",
 "ToDateTime": "2026-04-29T15:57:48.2788285-04:00",
 "Notes": "sample string 6",
 "TotalAmountDue": 1.0,
 "RemainingBalance": 1.0,
 "CreateWebUserID": 7,
 "CreateUserID": 8,
 "CreateDate": "2026-04-29T15:57:48.2788285-04:00",
 "UpdateUserID": 10,
 "UpdateDate": "2026-04-29T15:57:48.2788285-04:00",
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## RevenuePricing

RevenuePricing
 Retrieve Collection
 Retrieve Instance
 GetByPost
 Property
 QuickSearch
 Search
 Tenant
 Unit
 Rent Manager Web API Reference
 RevenuePricing Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RevenuePricing?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RevenuePricingFilterFields List
 Define this parameter in the request URI.
 embeds
 RevenuePricingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RevenuePricingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RevenuePricingModel
 Properties
 NameTypeOptimized FiltersAttributes
 RevenuePricingID
 Integer
 EqualTo
 Primary Key
 ParentType
 eRevenuePricingType
 EqualTo
 ParentID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 LeaseTerm
 Integer
 BaseRent
 Decimal
 Concession
 Decimal
 EffectiveRent
 Decimal
 ConcessionType
 String
 ConcessionValue
 Decimal
 StartDate
 DateTime
 EndDate
 DateTime
 Available
 DateTime
 DiscountedConcession
 Decimal
 MoveInRate
 Decimal
 PostDate
 DateTime
 Property
 PropertyModel
 Unit
 UnitModel
 Tenant
 TenantModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RevenuePricingID": 1,
 "ParentID": 2,
 "PropertyID": 3,
 "LeaseTerm": 4,
 "BaseRent": 5.0,
 "Concession": 6.0,
 "EffectiveRent": 7.0,
 "ConcessionType": "sample string 8",
 "ConcessionValue": 9.0,
 "StartDate": "2026-04-29T15:57:48.456716-04:00",
 "EndDate": "2026-04-29T15:57:48.456716-04:00",
 "Available": "2026-04-29T15:57:48.456716-04:00",
 "DiscountedConcession": 13.0,
 "MoveInRate": 14.0,
 "PostDate": "2026-04-29T15:57:48.456716-04:00",
 "MetaTag": "sample string 17"
 }
]

---

## RevenueRenewals

RevenueRenewals
 Retrieve Collection
 Retrieve Instance
 GetByPost
 Property
 QuickSearch
 RevenuePricing
 Search
 Tenant
 Unit
 UnitType
 Rent Manager Web API Reference
 RevenueRenewals Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET RevenueRenewals?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RevenueRenewalFilterFields List
 Define this parameter in the request URI.
 embeds
 RevenueRenewalEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RevenueRenewalOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RevenueRenewalModel
 Properties
 NameTypeOptimized FiltersAttributes
 RevenueRenewalID
 Integer
 EqualTo
 Primary Key
 TenantID
 Integer
 EqualTo
 UnitID
 Integer
 EqualTo
 UnitTypeID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 AmenityValue
 Decimal
 OriginalMoveInDate
 DateTime
 RenewalDate
 DateTime
 CurrentLeaseTerm
 Integer
 LeaseType
 String
 PerceivedRent
 Decimal
 MarketRent
 Decimal
 HasGivenNotice
 Boolean
 PostDate
 DateTime
 Tenant
 TenantModel
 Unit
 UnitModel
 UnitType
 UnitTypeModel
 Property
 PropertyModel
 RevenuePricing
 RevenuePricingModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RevenueRenewalID": 1,
 "TenantID": 2,
 "UnitID": 3,
 "UnitTypeID": 4,
 "PropertyID": 5,
 "AmenityValue": 6.0,
 "OriginalMoveInDate": "2026-04-29T15:57:48.6168359-04:00",
 "RenewalDate": "2026-04-29T15:57:48.6168359-04:00",
 "CurrentLeaseTerm": 9,
 "LeaseType": "sample string 10",
 "PerceivedRent": 11.0,
 "MarketRent": 12.0,
 "HasGivenNotice": true,
 "PostDate": "2026-04-29T15:57:48.6168359-04:00",
 "MetaTag": "sample string 16"
 }
]

---

## Roles

Roles
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 DocumentPacketRoles
 GetByPost
 LetterTemplateRoles
 Privileges
 QuickSearch
 Reports
 ReportWriterReportRoles
 Search
 SignablePDFTemplateRoles
 UpdateUser
 UserPrivileges
 UserReports
 UserRoles
 Users
 Rent Manager Web API Reference
 Roles Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Roles?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 RoleFilterFields List
 Define this parameter in the request URI.
 embeds
 RoleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 RoleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
RoleModel
 Properties
 NameTypeOptimized FiltersAttributes
 RoleID
 Integer
 Primary Key
 Name
 String
 UserRoles
 UserRoleModel
 CreateDate
 DateTime
 CreateUserID
 Integer
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 UpdateUser
 UserModel
 IsActive
 Boolean
 UserPrivileges
 UserPrivilegeModel
 UserReports
 UserReportModel
 LetterTemplateRoles
 LetterTemplateRoleModel
 DocumentPacketRoles
 DocumentPacketRoleModel
 ReportWriterReportRoles
 ReportWriterReportRoleModel
 SignablePDFTemplateRoles
 SignablePDFTemplateRoleModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RoleID": 1,
 "Name": "sample string 2"
 }
]

---

## ScheduledRequests

ScheduledRequests
 Retrieve Collection
 Retrieve Instance
 GetByPost
 Response
 Rent Manager Web API Reference
 ScheduledRequests Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScheduledRequests?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScheduledRequestSummaryFilterFields List
 Define this parameter in the request URI.
 embeds
 ScheduledRequestSummaryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScheduledRequestOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScheduledRequestSummaryModel
 Properties
 NameTypeOptimized FiltersAttributes
 RequestToken
 Guid
 LocationID
 Integer
 RequestStatus
 eScheduledRequestStatus
 Action
 String
 Response
 ScheduledRequestResponseSummaryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "RequestToken": "cd4aa7c7-538a-4dd6-bca5-974bc87b6c07",
 "LocationID": 2,
 "Action": "sample string 3",
 "MetaTag": "sample string 5"
 }
]

---

## ScreeningCredentials

ScreeningCredenti...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChangePasswordForScreenings
 GetByPost
 TestConnectionForScreenings
 Rent Manager Web API Reference
 ScreeningCredentials Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScreeningCredentials?filters={filters}&embeds={embeds}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningCredentialsFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningCredentialsEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningCredentialsModel
 Describes details about a Screening Credential
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningCredentialID
 Integer
 EqualTo
 Primary Key
 UserName
 String
 PropertyID
 Integer
 EqualTo
, 
 In
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ScreeningCredentialID": 1,
 "UserName": "sample string 2",
 "PropertyID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## ScreeningDetails

ScreeningDetails
 Retrieve Collection
 Retrieve Instance
 Contact
 GetByPost
 GetFromAllLocations
 QuickSearch
 Screening
 Search
 Rent Manager Web API Reference
 ScreeningDetails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScreeningDetails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningDetailFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningDetailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScreeningDetailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningDetailModel
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningDetailID
 Integer
 EqualTo
 Primary Key
 ScreeningID
 Integer
 EqualTo
 ContactID
 Integer
 EqualTo
 ApplicantType
 eApplicantType
 DecisionCode
 eScreeningDecision
 DecisionText
 String
 FirstName
 String
 MiddleName
 String
 LastName
 String
 PhoneNumber
 String
 SocialSecurityNumber
 String
 Calculated Field
 BirthDate
 DateTime
 AnnualIncome
 Decimal
 Street
 String
 City
 String
 State
 String
 PostalCode
 String
 AdditionalMappedFields
 String
 Screening
 ScreeningModel
 Contact
 ContactModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ScreeningDetailID": 1,
 "ScreeningID": 2,
 "ContactID": 3,
 "DecisionText": "sample string 4",
 "FirstName": "sample string 5",
 "MiddleName": "sample string 6",
 "LastName": "sample string 7",
 "PhoneNumber": "sample string 8",
 "SocialSecurityNumber": "sample string 11",
 "BirthDate": "2026-04-29T15:57:49.2105469-04:00",
 "AnnualIncome": 13.0,
 "Street": "sample string 14",
 "City": "sample string 15",
 "State": "sample string 16",
 "PostalCode": "sample string 17",
 "AdditionalMappedFields": "sample string 18",
 "MetaTag": "sample string 20"
 }
]

---

## ScreeningResponseFactors

ScreeningResponse...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 GetFromAllLocations
 QuickSearch
 ScreeningResponse
 Search
 Rent Manager Web API Reference
 ScreeningResponseFactors Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScreeningResponseFactors?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningResponseFactorFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningResponseFactorEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScreeningResponseFactorOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningResponseFactorModel
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningResponseFactorID
 Integer
 EqualTo
 Primary Key
 ScreeningResponseID
 Integer
 EqualTo
 Factor
 String
 ScreeningResponse
 ScreeningResponseModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ScreeningResponseFactorID": 1,
 "ScreeningResponseID": 2,
 "Factor": "sample string 3",
 "MetaTag": "sample string 5"
 }
]

---

## ScreeningResponses

ScreeningResponse...
 Retrieve Collection
 Retrieve Instance
 Contact
 CreateUser
 GetByPost
 GetFromAllLocations
 QuickSearch
 Screening
 ScreeningResponseFactors
 Search
 UpdateUser
 Rent Manager Web API Reference
 ScreeningResponses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScreeningResponses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningResponseFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningResponseEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScreeningResponseOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningResponseModel
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningResponseID
 Integer
 EqualTo
 Primary Key
 ScreeningID
 Integer
 EqualTo
 ContactID
 Integer
 EqualTo
, 
 In
 Agency
 eCreditAgency
 Score
 Integer
 Calculated Field
 ScoreDate
 DateTime
 RangeMinimum
 Integer
 RangeMaximum
 Integer
 CreateUserID
 Integer
 EqualTo
 Read Only
 CreateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 Screening
 ScreeningModel
 Contact
 ContactModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ScreeningResponseFactors
 ScreeningResponseFactorModel
 MetaTag
 String
 Response body formats
 application/json
 Sample:
 Sample not available.
 text/json
 Sample:
 Sample not available.
 multipart/form-data
 Sample:
 Sample not available.

---

## ScreeningSettings

ScreeningSettings
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Property
 QuickSearch
 ScreeningFieldMappings
 ScreeningReportUsers
 Search
 Rent Manager Web API Reference
 ScreeningSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScreeningSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScreeningSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningSettingID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 IsDSReport
 Boolean
 IsTransunion
 Boolean
 IsEquifax
 Boolean
 IsExperian
 Boolean
 IsAmRent
 Boolean
 IsBundledScreening
 Boolean
 IsCrossCheck
 Boolean
 IsDecisionCriminalOnly
 Boolean
 IsDecisionEvictionsOnly
 Boolean
 IsInfileCriminalOnly
 Boolean
 IsInfileEvictionsOnly
 Boolean
 IsRPCReport
 Boolean
 MinimumDecision
 Integer
 DefaultScreeningType
 eDefaultScreeningType
 IsInherited
 Boolean
 Calculated Field
 ParentID
 Integer
 Calculated Field
 ParentType
 eScreeningSettingType
 Calculated Field
 Property
 PropertyModel
 ScreeningReportUsers
 ScreeningReportUsersModel
 Required (create)
 ScreeningFieldMappings
 ScreeningFieldMappingModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ScreeningSettingID": 1,
 "PropertyID": 2,
 "IsDSReport": true,
 "IsTransunion": true,
 "IsEquifax": true,
 "IsExperian": true,
 "IsAmRent": true,
 "IsBundledScreening": true,
 "IsCrossCheck": true,
 "IsDecisionCriminalOnly": true,
 "IsDecisionEvictionsOnly": true,
 "IsInfileCriminalOnly": true,
 "IsInfileEvictionsOnly": true,
 "IsRPCReport": true,
 "MinimumDecision": 15,
 "IsInherited": true,
 "ParentID": 17,
 "MetaTag": "sample string 19"
 }
]

---

## ScreeningUpgrades

ScreeningUpgrades
 Retrieve Collection
 Retrieve Instance
 GetByPost
 GetFromAllLocations
 QuickSearch
 Screening
 ScreeningUpgradeDetails
 Search
 Rent Manager Web API Reference
 ScreeningUpgrades Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ScreeningUpgrades?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningUpgradeFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningUpgradeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScreeningUpgradeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningUpgradeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningUpgradeID
 Integer
 EqualTo
 Primary Key
 ScreeningID
 Integer
 EqualTo
 RequestingUserName
 String
 EmailAddress
 String
 PhoneNumber
 String
 FaxNumber
 String
 IsEmailReport
 Boolean
 IsFaxReport
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 Screening
 ScreeningModel
 ScreeningUpgradeDetails
 ScreeningUpgradeDetailModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ScreeningUpgradeID": 1,
 "ScreeningID": 2,
 "RequestingUserName": "sample string 3",
 "EmailAddress": "sample string 4",
 "PhoneNumber": "sample string 5",
 "FaxNumber": "sample string 6",
 "IsEmailReport": true,
 "IsFaxReport": true,
 "CreateDate": "2026-04-29T15:57:49.8667714-04:00",
 "CreateUserID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## Screenings

Screenings
 Retrieve Collection
 Retrieve Instance
 Delete Collection
 Delete Instance
 Account
 DownloadScreeningReport
 GetByPost
 GetFromAllLocations
 Property
 Prospect
 QuickSearch
 ResubmitScreening
 RunScreening
 ScreeningDetails
 ScreeningReport
 ScreeningResponses
 ScreeningUpgrades
 Search
 Tenant
 UpgradeUser
 User
 Rent Manager Web API Reference
 Screenings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Screenings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ScreeningFilterFields List
 Define this parameter in the request URI.
 embeds
 ScreeningEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ScreeningOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ScreeningGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ScreeningModel
 Screening Model
 Properties
 NameTypeOptimized FiltersAttributes
 ScreeningID
 Integer
 EqualTo
, 
 In
 Primary Key
 AccountID
 Integer
 EqualTo
 Regarding
 String
 Date
 DateTime
 Type
 eEntityType
 EqualTo
 UserID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 UpgradeUserID
 Integer
 EqualTo
 FileID
 Integer
 EqualTo
 SubmittedDate
 DateTime
 RentAmount
 Decimal
 ScreeningName
 String
 Options
 String
 UpgradeDate
 DateTime
 ReportType
 eScreeningReport
 Protected
 Boolean
 Account
 AccountModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 User
 UserModel
 UpgradeUser
 UserModel
 ScreeningUpgrades
 ScreeningUpgradeModel
 ScreeningDetails
 ScreeningDetailModel
 ScreeningReport
 FileModel
 ScreeningResponses
 ScreeningResponseModel
 Property
 PropertyModel
 ScreeningReportExportType
 eExportType
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ScreeningID": 1,
 "AccountID": 2,
 "Regarding": "sample string 3",
 "Date": "2026-04-29T15:57:50.0304529-04:00",
 "Type": 0,
 "UserID": 5,
 "PropertyID": 6,
 "UpgradeUserID": 7,
 "FileID": 8,
 "SubmittedDate": "2026-04-29T15:57:50.0304529-04:00",
 "RentAmount": 10.0,
 "ScreeningName": "sample string 11",
 "Options": "sample string 12",
 "UpgradeDate": "2026-04-29T15:57:50.0304529-04:00",
 "Protected": true,
 "MetaTag": "sample string 17"
 }
]

---

## SecurityDepositInterest

SecurityDepositIn...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 QuickSearch
 Search
 SecurityDepositInterestYear
 UpdateUser
 Rent Manager Web API Reference
 SecurityDepositInterest Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SecurityDepositInterest?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SecurityDepositInterestFilterFields List
 Define this parameter in the request URI.
 embeds
 SecurityDepositInterestEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SecurityDepositInterestOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SecurityDepositInterestModel
 Properties
 NameTypeOptimized FiltersAttributes
 SecurityDepositInterestOptionID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 IsEnabled
 (DEPRECATED) As of 8/14/2018
 replaced by PropertyModel.IsSecurityDepositInterestEnabled
 Boolean
 Calculated Field
 IsOverride
 Boolean
 Read Only
, 
 Calculated Field
 InterestCalculationMethod
 eSecurityDepositInterestInterestMethod
 DisbursementMethod
 eSecurityDepositInterestDisbursementMethod
 DisbursementChargeTypeID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 Property
 PropertyModel
 SecurityDepositInterestYear
 SecurityDepositInterestYearModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SecurityDepositInterestOptionID": 1,
 "PropertyID": 2,
 "IsEnabled": true,
 "IsOverride": true,
 "InterestCalculationMethod": "Simple",
 "DisbursementMethod": "Credit",
 "DisbursementChargeTypeID": 3,
 "CreateDate": "2026-04-29T15:57:50.184971-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:57:50.184971-04:00",
 "UpdateUserID": 7,
 "MetaTag": "sample string 9"
 }
]

---

## SecurityDepositTypes

SecurityDepositTy...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 SecurityDepositTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SecurityDepositTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SecurityDepositTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 SecurityDepositTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SecurityDepositTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SecurityDepositTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 SecurityDepositTypeID
 Integer
 EqualTo
 Primary Key
 ChargeTypeID
 Integer
 EqualTo
 Description
 String
 Read Only
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ChargeType
 ChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SecurityDepositTypeID": 1,
 "ChargeTypeID": 2,
 "Description": "sample string 3",
 "SortOrder": 4,
 "CreateDate": "2026-04-29T15:57:50.3316479-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:57:50.3316479-04:00",
 "UpdateUserID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## ServiceManagerCategories

ServiceManagerCat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ServiceManagerCategories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerCategories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerCategoryFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerCategoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerCategoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerCategoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerCategoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 SortOrder
 Integer
 Bold
 Boolean
 Calculated Field
 Italic
 Boolean
 Calculated Field
 Underline
 Boolean
 Calculated Field
 Color
 String
 Calculated Field
 IsActive
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerCategoryID": 1,
 "Name": "sample string 2",
 "SortOrder": 4,
 "Color": "#000000",
 "IsActive": true
 }
]

---

## ServiceManagerIssueLayoutLinkedFields

ServiceManagerIss...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 PhoneNumberType
 QuickSearch
 Search
 ServiceManagerIssueLayout
 UpdateUser
 UserDefinedField
 Rent Manager Web API Reference
 ServiceManagerIssueLayoutLinkedFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerIssueLayoutLinkedFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerIssueLayoutLinkedFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerIssueLayoutLinkedFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerIssueLayoutLinkedFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerIssueLayoutLinkedFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerIssueLayoutLinkedFieldID
 Integer
 EqualTo
, 
 In
 Primary Key
 ServiceManagerIssueLayoutID
 Int32
 EqualTo
 EntityTypeID
 eEntityType
 Read Only
 LinkedFieldType
 eServiceManagerIssueLayoutLinkedFieldType
 UserDefinedFieldID
 Int32
 EqualTo
 PhoneNumberTypeID
 Int32
 EqualTo
 Name
 String
 DisplayName
 String
 Read Only
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 ServiceManagerIssueLayout
 ServiceManagerIssueLayoutModel
 PhoneNumberType
 PhoneNumberTypeModel
 UserDefinedField
 UserDefinedFieldModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerIssueLayoutLinkedFieldID": 1,
 "ServiceManagerIssueLayoutID": 1,
 "UserDefinedFieldID": 1,
 "PhoneNumberTypeID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "SortOrder": 4,
 "CreateDate": "2026-04-29T15:57:50.639818-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:57:50.639818-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## ServiceManagerIssueLayouts

ServiceManagerIss...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 MakeDefault
 QuickSearch
 Search
 ServiceManagerIssueLayoutLinkedFields
 ServiceManagerIssueLayoutSections
 ServiceManagerIssueLayoutUserDefinedFields
 ServiceManagerIssueLayoutUsers
 UpdateUser
 Rent Manager Web API Reference
 ServiceManagerIssueLayouts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerIssueLayouts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerIssueLayoutFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerIssueLayoutEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerIssueLayoutOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ServiceManagerIssueLayoutGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerIssueLayoutModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerIssueLayoutID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 InfoWidth
 Integer
 CaptionWidth
 Integer
 DetailHeightMode
 eServiceIssueDetailHeightMode
 IsDefault
 Boolean
 EqualTo
 IsSystemDefault
 Boolean
 EqualTo
 Read Only
 DetailHeight
 Integer
 DescriptionHeightRatio
 Decimal
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ServiceManagerIssueLayoutSections
 ServiceManagerIssueLayoutSectionModel
 ServiceManagerIssueLayoutUserDefinedFields
 ServiceManagerIssueLayoutUserDefinedFieldModel
 ServiceManagerIssueLayoutLinkedFields
 ServiceManagerIssueLayoutLinkedFieldModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerIssueLayoutID": 1,
 "Name": "sample string 2",
 "InfoWidth": 3,
 "CaptionWidth": 4,
 "IsDefault": true,
 "IsSystemDefault": true,
 "DetailHeight": 7,
 "DescriptionHeightRatio": 8.0,
 "CreateDate": "2026-04-29T15:57:50.8099431-04:00",
 "CreateUserID": 10,
 "UpdateDate": "2026-04-29T15:57:50.8099431-04:00",
 "UpdateUserID": 12,
 "ConcurrencyID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## ServiceManagerIssueTemplates

ServiceManagerIss...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignedToUser
 Category
 CheckListItems
 CreateUser
 GetByPost
 Priority
 QuickSearch
 Search
 Status
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 ServiceManagerIssueTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerIssueTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerIssueTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerIssueTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerIssueTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerIssueTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerIssueTemplateID
 Integer
 EqualTo
 Primary Key
 ServiceManagerProjectTemplateID
 Integer
 EqualTo
 Title
 String
 Description
 String
 CategoryID
 Integer
 EqualTo
 StatusID
 Integer
 EqualTo
 PriorityID
 Integer
 EqualTo
 AssignedToUserID
 Integer
 EqualTo
 Notes
 String
 OpenDaysAfterStart
 Integer
 DueDaysAfterOpen
 Integer
 Hours
 (DEPRECATED) As of 3/19/2019
 replaced by Seconds
 Decimal
 Seconds
 Decimal
 Sequence
 Integer
 VendorID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Category
 ServiceManagerCategoryModel
 Status
 ServiceManagerStatusModel
 Priority
 ServiceManagerPriorityModel
 Vendor
 VendorModel
 AssignedToUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CheckListItems
 CheckListItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerIssueTemplateID": 1,
 "ServiceManagerProjectTemplateID": 2,
 "Title": "sample string 3",
 "Description": "sample string 4",
 "CategoryID": 5,
 "StatusID": 6,
 "PriorityID": 7,
 "AssignedToUserID": 8,
 "Notes": "sample string 9",
 "OpenDaysAfterStart": 10,
 "DueDaysAfterOpen": 11,
 "Hours": 12.0,
 "Seconds": 13.0,
 "Sequence": 14,
 "VendorID": 15,
 "CreateDate": "2026-04-29T15:57:50.9722394-04:00",
 "CreateUserID": 17,
 "UpdateDate": "2026-04-29T15:57:50.9722394-04:00",
 "UpdateUserID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## ServiceManagerIssueWorkOrders

ServiceManagerIss...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateAndLinkOwnerBill
 CreateAndLinkPurchaseOrder
 CreateAndLinkTenantInvoice
 CreateAndLinkVendorBill
 GetByPost
 InventoryItem
 Invoice
 Job
 OwnerBill
 Property
 PurchaseOrder
 QuickSearch
 Search
 ServiceManagerIssue
 Unit
 Vendor
 VendorBill
 Rent Manager Web API Reference
 ServiceManagerIssueWorkOrders Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerIssueWorkOrders?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerIssueWorkOrderFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerIssueWorkOrderEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerIssueWorkOrderOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerIssueWorkOrderModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerIssueWorkOrderID
 Integer
 EqualTo
 Primary Key
 WorkOrderID
 (DEPRECATED) As of 8/17/2018
 replaced by ServiceManagerIssueWorkOrderID
 Integer
 ServiceManagerIssueID
 Integer
 EqualTo
, 
 In
 HasInvoiceLink
 Boolean
 EqualTo
 InvoiceID
 Integer
 EqualTo
 InvoiceDetailID
 Integer
 EqualTo
 HasVendorBillLink
 Boolean
 EqualTo
 VendorBillID
 Integer
 EqualTo
 HasOwnerBillLink
 Boolean
 EqualTo
 OwnerBillID
 Integer
 EqualTo
 PayeeAccountID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 JobID
 Integer
 Description
 String
 Quantity
 Decimal
 Cost
 Decimal
 Price
 Decimal
 InventoryItemID
 Integer
 EqualTo
 HasPurchaseOrderLink
 Boolean
 EqualTo
 PurchaseOrderID
 Integer
 EqualTo
 SmartReceiptID
 Integer
 EqualTo
 QuickBillID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Property
 PropertyModel
 Unit
 UnitModel
 Vendor
 VendorModel
 InventoryItem
 InventoryItemModel
 PurchaseOrder
 PurchaseOrderModel
 Invoice
 InvoiceModel
 VendorBill
 BillModel
 OwnerBill
 BillModel
 Job
 JobModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 QuickBill
 QuickBillModel
 SmartReceipt
 SmartReceiptModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerIssueWorkOrderID": 1,
 "WorkOrderID": 2,
 "ServiceManagerIssueID": 3,
 "HasInvoiceLink": true,
 "InvoiceID": 5,
 "InvoiceDetailID": 6,
 "HasVendorBillLink": true,
 "VendorBillID": 8,
 "HasOwnerBillLink": true,
 "OwnerBillID": 10,
 "PayeeAccountID": 11,
 "PropertyID": 12,
 "UnitID": 13,
 "JobID": 14,
 "Description": "sample string 15",
 "Quantity": 16.0,
 "Cost": 17.0,
 "Price": 18.0,
 "InventoryItemID": 19,
 "HasPurchaseOrderLink": true,
 "PurchaseOrderID": 21,
 "SmartReceiptID": 22,
 "QuickBillID": 23,
 "CreateDate": "2026-04-29T15:57:51.1323426-04:00",
 "CreateUserID": 25,
 "UpdateDate": "2026-04-29T15:57:51.1323426-04:00",
 "UpdateUserID": 27,
 "MetaTag": "sample string 29"
 }
]

---

## ServiceManagerIssues

ServiceManagerIss...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Advance
 Appointments
 AssignedToUser
 AvailableChildLinksForAsset
 AvailableChildLinksForProspect
 AvailableChildLinksForTenant
 AvailableChildLinksForUnit
 Category
 CheckListItems
 CloseUser
 CreateAndLinkAllItems
 CreateAndLinkOwnerBills
 CreateAndLinkPurchaseOrders
 CreateAndLinkTenantInvoices
 CreateAndLinkVendorBills
 CreateUser
 CreateWebUser
 GetByPost
 History
 HistoryNotes
 LinkedProperties
 LinkedProspects
 LinkedTenants
 LinkedUnits
 LinkProperties
 LinkProperty
 LinkProspect
 LinkTenant
 LinkTenants
 LinkUnit
 LinkUnits
 MakeReadyPostItem
 MakeReadyPostItems
 PayeeAccount
 Priority
 Project
 Properties
 Prospects
 QuickSearch
 RelatedIssues
 Search
 ServiceManagerIssueLinkedProperties
 ServiceManagerIssueLinkedProspects
 ServiceManagerIssueLinkedTenants
 ServiceManagerIssueLinkedUnits
 ServiceManagerIssueLock
 SignatureFile
 Status
 Tasks
 TechTimes
 Tenants
 TestScript
 Units
 UnlinkProperties
 UnlinkProperty
 UnlinkProspect
 UnlinkTenant
 UnlinkTenants
 UnlinkUnit
 UnlinkUnits
 UpdateUser
 UploadSignatureFile
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 UtilityMeterReadings
 Vendor
 WorkOrders
 Rent Manager Web API Reference
 ServiceManagerIssues Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerIssues?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerIssueFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerIssueEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerIssueOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ServiceManagerIssueGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerIssueModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerIssueID
 Integer
 EqualTo
, 
 In
 Primary Key
 Title
 String
 Description
 String
 Resolution
 String
 CategoryID
 Integer
 EqualTo
 StatusID
 Integer
 EqualTo
 PriorityID
 Integer
 EqualTo
 JobID
 Integer
 EqualTo
 Job
 JobModel
 Hours
 Decimal
 Read Only
, 
 Calculated Field
, 
 Requires Embed (TechTimes)
 IsClosed
 Boolean
 EqualTo
 CloseDate
 DateTime
 Read Only
 CloseUserID
 Integer
 EqualTo
 AssignedOpenDate
 DateTime
 AssignedCloseDate
 DateTime
 DueDate
 DateTime
 PayeeAccountID
 (DEPRECATED) As of 5/16/2021
 replaced by VendorID
 Integer
 EqualTo
 VendorID
 Int32
 EqualTo
 PayeeAccount
 (DEPRECATED) As of 5/16/2021
 replaced by Vendor
 VendorModel
 Vendor
 VendorModel
 IsRead
 Boolean
 AssignedToUserID
 Integer
 EqualTo
 ProjectID
 Integer
 EqualTo
, 
 In
 ProjectSequence
 Integer
 CurrentProjectSequence
 Integer
 IsCustomerInitiated
 Boolean
 CustomerDescription
 String
 NoteText
 String
 EqualTo
 IsConfirmed
 Boolean
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 CreateWebUserID
 Integer
 EqualTo
 Read Only
 LinkedTenants
 TenantModel
 LinkedProspects
 ProspectModel
 LinkedProperties
 PropertyModel
 LinkedUnits
 UnitModel
 RelatedIssues
 ServiceManagerIssueModel
 Category
 ServiceManagerCategoryModel
 Status
 ServiceManagerStatusModel
 Priority
 ServiceManagerPriorityModel
 Project
 ServiceManagerProjectModel
 CloseUser
 UserModel
 AssignedToUser
 UserListItemModel
 HasPets
 Boolean
 IsAllowedToEnter
 Boolean
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CreateWebUser
 WebUserModel
 WorkOrders
 ServiceManagerIssueWorkOrderModel
 History
 HistoryModel
 HistoryNotes
 HistoryNoteModel
 UserDefinedValues
 UserDefinedValueModel
 TechTimes
 ServiceManagerTechTimeModel
 IsSignatureOnFile
 Boolean
 SignatureFileID
 Integer
 Read Only
 SignatureFile
 FileModel
 IsSigned
 Boolean
 Read Only
, 
 Calculated Field
 Age
 TimeSpan
 Read Only
, 
 Calculated Field
 ScheduledDate
 DateTime
 Tenants
 TenantModel
 ServiceManagerIssueLinkedTenants
 ServiceManagerIssueLinkedTenantModel
 Prospects
 ProspectModel
 ServiceManagerIssueLinkedProspects
 ServiceManagerIssueLinkedProspectModel
 Units
 UnitModel
 ServiceManagerIssueLinkedUnits
 ServiceManagerIssueLinkedUnitModel
 ServiceManagerIssueLinkedAssets
 ServiceManagerIssueLinkedAssetModel
 Properties
 PropertyModel
 ServiceManagerIssueLinkedProperties
 ServiceManagerIssueLinkedPropertyModel
 CheckListItems
 CheckListItemModel
 ServiceManagerIssueLock
 ServiceManagerIssueLockModel
 MakeReadyPostItem
 MakeReadyPostItemModel
 MakeReadyPostItems
 (DEPRECATED) As of 12/7/2020
 replaced by MakeReadyPostItem
 MakeReadyPostItemModel
 Tasks
 TaskModel
 Appointments
 AppointmentModel
 ServiceManagerIssuePreferredTimes
 ServiceManagerIssuePreferredTimeModel
 MaintenanceGroupTimeBlock
 MaintenanceGroupTimeBlockModel
 UtilityMeterReadings
 UtilityMeterReadingModel
 UtilityMeterReadingHistory
 UtilityMeterReadingHistoryModel
 IsSchedulable
 Boolean
 Read Only
, 
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerIssueID": 1,
 "Title": "sample string 2",
 "Description": "sample string 3",
 "StatusID": 6,
 "AssignedCloseDate": "2026-04-29T15:14:46.2985522-04:00",
 "DueDate": "2026-04-29T15:14:46.2985522-04:00",
 "AssignedToUserID": 13
 }
]

---

## ServiceManagerMemorizedIssues

ServiceManagerMem...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignedToUser
 AvailableChildLinksForProspect
 AvailableChildLinksForTenant
 AvailableChildLinksForUnit
 Category
 CheckListItems
 CreateUser
 GetByPost
 MemorizedUserDefinedValues
 MemorizedWorkOrders
 PayeeAccount
 Priority
 Project
 Properties
 Prospects
 QuickSearch
 Search
 ServiceManagerMemorizedIssueLinkedProperties
 ServiceManagerMemorizedIssueLinkedProspects
 ServiceManagerMemorizedIssueLinkedTenants
 ServiceManagerMemorizedIssueLinkedUnits
 Status
 Tenants
 Units
 UpdateUser
 UploadMemorizedUserDefinedValueAttachment
 UserDefinedFields
 Rent Manager Web API Reference
 ServiceManagerMemorizedIssues Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerMemorizedIssues?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerMemorizedIssueFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerMemorizedIssueEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerMemorizedIssueOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ServiceManagerMemorizedIssueGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerMemorizedIssueModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerMemorizedIssueID
 Integer
 EqualTo
 Primary Key
 MemorizedName
 String
 MemorizedDescription
 String
 Title
 String
 Description
 String
 Resolution
 String
 CategoryID
 Integer
 EqualTo
 StatusID
 Integer
 EqualTo
 PriorityID
 Integer
 EqualTo
 AssignedOpenDate
 DateTime
 DueDate
 DateTime
 PayeeAccountID
 Integer
 EqualTo
 IsRead
 Boolean
 AssignedToUserID
 Integer
 EqualTo
 ProjectID
 Integer
 EqualTo
 ProjectSequence
 Integer
 CurrentProjectSequence
 Integer
 IsCustomerInitiated
 Boolean
 CustomerDescription
 String
 NoteText
 String
 HasPets
 Boolean
 IsAllowedToEnter
 Boolean
 IsSignatureOnFile
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Category
 ServiceManagerCategoryModel
 Status
 ServiceManagerStatusModel
 Priority
 ServiceManagerPriorityModel
 Project
 ServiceManagerProjectModel
 AssignedToUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MemorizedWorkOrders
 MemorizedWorkOrderModel
 MemorizedUserDefinedValues
 MemorizedUserDefinedValueModel
 SignatureFileID
 Integer
 Read Only
 PayeeAccount
 VendorModel
 Tenants
 CrossServiceManagerMemorizedIssueTenantModel
 ServiceManagerMemorizedIssueLinkedTenants
 ServiceManagerMemorizedIssueLinkedTenantModel
 Prospects
 CrossServiceManagerMemorizedIssueProspectModel
 ServiceManagerMemorizedIssueLinkedProspects
 ServiceManagerMemorizedIssueLinkedProspectModel
 Units
 CrossServiceManagerMemorizedIssueUnitModel
 ServiceManagerMemorizedIssueLinkedUnits
 ServiceManagerMemorizedIssueLinkedUnitModel
 Properties
 CrossServiceManagerMemorizedIssuePropertyModel
 ServiceManagerMemorizedIssueLinkedProperties
 ServiceManagerMemorizedIssueLinkedPropertyModel
 CheckListItems
 CheckListItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerMemorizedIssueID": 1,
 "MemorizedName": "sample string 2",
 "MemorizedDescription": "sample string 3",
 "Title": "sample string 4",
 "Description": "sample string 5",
 "Resolution": "sample string 6",
 "CategoryID": 7,
 "StatusID": 8,
 "PriorityID": 9,
 "AssignedOpenDate": "2026-04-29T15:57:51.4505345-04:00",
 "DueDate": "2026-04-29T15:57:51.4505345-04:00",
 "PayeeAccountID": 10,
 "IsRead": true,
 "AssignedToUserID": 12,
 "ProjectID": 13,
 "ProjectSequence": 14,
 "CurrentProjectSequence": 15,
 "IsCustomerInitiated": true,
 "CustomerDescription": "sample string 17",
 "NoteText": "sample string 18",
 "HasPets": true,
 "IsAllowedToEnter": true,
 "IsSignatureOnFile": true,
 "CreateDate": "2026-04-29T15:57:51.4505345-04:00",
 "CreateUserID": 23,
 "UpdateDate": "2026-04-29T15:57:51.4505345-04:00",
 "UpdateUserID": 25,
 "ConcurrencyID": 26,
 "SignatureFileID": 27,
 "MetaTag": "sample string 29"
 }
]

---

## ServiceManagerPriorities

ServiceManagerPri...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ServiceManagerPriorities Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerPriorities?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerPriorityFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerPriorityEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerPriorityOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerPriorityModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerPriorityID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 SortOrder
 Integer
 Bold
 Boolean
 Calculated Field
 Italic
 Boolean
 Calculated Field
 Underline
 Boolean
 Calculated Field
 IsActive
 Boolean
 Color
 String
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerPriorityID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "SortOrder": 4,
 "IsActive": true,
 "Color": "#000000",
 "MetaTag": "sample string 12"
 }
]

---

## ServiceManagerProjectTemplates

ServiceManagerPro...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignedToUser
 Category
 CreateUser
 GetByPost
 Issues
 PrepareServiceManagerIssues
 Priority
 QuickSearch
 Search
 ServiceManagerIssueTemplates
 Status
 UpdateUser
 Vendor
 Rent Manager Web API Reference
 ServiceManagerProjectTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerProjectTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerProjectTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerProjectTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerProjectTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerProjectTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerProjectTemplateID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 CategoryID
 Integer
 EqualTo
 StatusID
 Integer
 EqualTo
 PriorityID
 Integer
 EqualTo
 IsEnforceSequence
 Boolean
 VendorID
 Integer
 EqualTo
 AssignedToUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Category
 ServiceManagerCategoryModel
 Status
 ServiceManagerStatusModel
 Priority
 ServiceManagerPriorityModel
 Issues
 (DEPRECATED) As of 10/8/2019
 ServiceManagerIssueTemplateModel
 ServiceManagerIssueTemplates
 ServiceManagerIssueTemplateModel
 Vendor
 VendorModel
 AssignedToUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerProjectTemplateID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "CategoryID": 4,
 "StatusID": 5,
 "PriorityID": 6,
 "IsEnforceSequence": true,
 "VendorID": 8,
 "AssignedToUserID": 9,
 "CreateDate": "2026-04-29T15:57:51.7885651-04:00",
 "CreateUserID": 11,
 "UpdateDate": "2026-04-29T15:57:51.7885651-04:00",
 "UpdateUserID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## ServiceManagerProjects

ServiceManagerPro...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignedToUser
 AuthorUser
 Category
 GetByPost
 Issues
 LinkedProperty
 LinkedProspect
 LinkedTenant
 LinkedUnit
 LinkProperty
 LinkProspect
 LinkTenant
 LinkUnit
 Parent
 PayeeAccount
 Priority
 QuickSearch
 Search
 Sequence
 ServiceManagerIssues
 Status
 SubProjects
 SubProjectTree
 UnlinkProperty
 UnlinkProspect
 UnlinkTenant
 UnlinkUnit
 Rent Manager Web API Reference
 ServiceManagerProjects Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerProjects?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerProjectFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerProjectEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerProjectOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerProjectModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerProjectID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 Comments
 String
 AuthorUserID
 Integer
 EqualTo
 AuthorUser
 UserModel
 AssignedToUserID
 Integer
 EqualTo
 AssignedToUser
 UserModel
 StartDate
 DateTime
 CategoryID
 Integer
 EqualTo
 StatusID
 Integer
 EqualTo
 PriorityID
 Integer
 EqualTo
 ParentID
 Integer
 EqualTo
 Parent
 ServiceManagerProjectModel
 IsEnforceSequence
 Boolean
 ParentSequence
 Integer
 IsClosed
 Boolean
 PayeeAccountID
 Integer
 EqualTo
 CreateDate
 DateTime
 DefaultLinkKeyID
 Integer
 EqualTo
 DefaultLinkType
 eEntityType
 EqualTo
 JobID
 Integer
 ServiceManagerIssues
 ServiceManagerIssueModel
 SubProjects
 ServiceManagerProjectModel
 Category
 ServiceManagerCategoryModel
 Status
 ServiceManagerStatusModel
 Priority
 ServiceManagerPriorityModel
 PayeeAccount
 AccountModel
 LinkedProperties
 PropertyModel
 LinkedUnits
 UnitModel
 LinkedTenants
 TenantModel
 LinkedProspects
 ProspectModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerProjectID": 1,
 "Name": "sample string 2"
 }
]

---

## ServiceManagerRecurringIssues

ServiceManagerRec...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AssignedToUser
 AvailableChildLinksForProspect
 AvailableChildLinksForTenant
 AvailableChildLinksForUnit
 Category
 CheckListItems
 CreateUser
 GetByPost
 LinkedProperties
 LinkedProspects
 LinkedTenants
 LinkedUnits
 LinkProperty
 LinkProspect
 LinkTenant
 LinkUnit
 PayeeAccount
 Priority
 Properties
 Prospects
 QuickSearch
 Search
 ServiceManagerRecurringIssueLinkedProperties
 ServiceManagerRecurringIssueLinkedProspects
 ServiceManagerRecurringIssueLinkedTenants
 ServiceManagerRecurringIssueLinkedUnits
 ServiceManagerRecurringWorkOrders
 Status
 Tenants
 Units
 UnlinkProperty
 UnlinkProspect
 UnlinkTenant
 UnlinkUnit
 UpdateUser
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 Vendor
 Rent Manager Web API Reference
 ServiceManagerRecurringIssues Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerRecurringIssues?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerRecurringIssueFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerRecurringIssueEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerRecurringIssueOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ServiceManagerRecurringIssueGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerRecurringIssueModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerRecurringIssueID
 Integer
 EqualTo
, 
 In
 Primary Key
 Title
 String
 EqualTo
 Description
 String
 ServiceManagerCategoryID
 Integer
 EqualTo
 ServiceManagerStatusID
 Integer
 EqualTo
 AssignedToUserID
 Integer
 EqualTo
 ServiceManagerPriorityID
 Integer
 EqualTo
 VendorID
 Integer
 EqualTo
 NextPostDate
 DateTime
 LessThanOrEqualTo
 PostFrequency
 Integer
 PostPeriod
 eServiceManagerRecurringIssuesPostPeriod
 PostTerm
 eServiceManagerRecurringIssuesPostTerm
 PostTimesLeft
 Integer
 PostDay
 Integer
 UntilDue
 Integer
 LastPostDate
 DateTime
 AutomationNotificationEmail
 String
 HasPets
 Boolean
 IsSignatureOnFile
 Boolean
 IsAllowedToEnter
 Boolean
 ConcurrencyID
 Integer
 Concurrency Key
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Vendor
 VendorModel
 LinkedTenants
 TenantModel
 LinkedProspects
 ProspectModel
 LinkedProperties
 PropertyModel
 LinkedUnits
 UnitModel
 Category
 ServiceManagerCategoryModel
 Status
 ServiceManagerStatusModel
 Priority
 ServiceManagerPriorityModel
 AssignedToUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ServiceManagerRecurringWorkOrders
 ServiceManagerRecurringWorkOrderModel
 UserDefinedValues
 UserDefinedValueModel
 ServiceManagerRecurringIssueLinkedTenants
 ServiceManagerRecurringIssueLinkedTenantModel
 Tenants
 TenantModel
 ServiceManagerRecurringIssueLinkedProspects
 ServiceManagerRecurringIssueLinkedProspectModel
 Prospects
 ProspectModel
 ServiceManagerRecurringIssueLinkedUnits
 ServiceManagerRecurringIssueLinkedUnitModel
 Units
 UnitModel
 ServiceManagerRecurringIssueLinkedProperties
 ServiceManagerRecurringIssueLinkedPropertyModel
 Properties
 PropertyModel
 CheckListItems
 CheckListItemModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerRecurringIssueID": 1,
 "Title": "sample string 2"
 }
]

---

## ServiceManagerSavedLists

ServiceManagerSav...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 ServiceManagerIssues
 UpdateUser
 Rent Manager Web API Reference
 ServiceManagerSavedLists Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerSavedLists?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerSavedListFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerSavedListEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerSavedListOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerSavedListModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerSavedListID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 OnStart
 Boolean
 EqualTo
 SortOrder
 Integer
 Notify
 Boolean
 RefreshMinutes
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CreateWebUserID
 Integer
 EqualTo
 Read Only
 IsCustomerInitiated
 Boolean
 IncludeOpenIssues
 Boolean
 Calculated Field
 IncludeClosedIssues
 Boolean
 Calculated Field
 IsRunByOwner
 Boolean
 Calculated Field
 OwnerIDs
 Integer
 Calculated Field
 PropertyIDs
 Integer
 Calculated Field
 CategoryID
 Integer
 Calculated Field
 OwnerGroupID
 Integer
 Calculated Field
 PropertyGroupID
 Integer
 Calculated Field
 PriorityID
 Integer
 Calculated Field
 StatusID
 Integer
 Calculated Field
 AssignedToUserID
 Integer
 Calculated Field
 IssueCreatedByUserID
 Integer
 Calculated Field
 VendorID
 Integer
 Calculated Field
 LinkedEntityType
 eEntityType
 Calculated Field
 LinkedPropertyID
 Integer
 Calculated Field
 FilterID
 Integer
 Calculated Field
 ProjectID
 Integer
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerSavedListID": 1,
 "Name": "sample string 2",
 "OnStart": true,
 "SortOrder": 4,
 "Notify": true,
 "RefreshMinutes": 6,
 "CreateDate": "2026-04-29T15:57:52.3471596-04:00",
 "CreateUserID": 8,
 "UpdateDate": "2026-04-29T15:57:52.3471596-04:00",
 "UpdateUserID": 10,
 "CreateWebUserID": 11,
 "IsCustomerInitiated": true,
 "IncludeOpenIssues": true,
 "OwnerIDs": [],
 "PropertyIDs": [
 -2
 ],
 "LinkedEntityType": "Tenant",
 "FilterID": 0,
 "MetaTag": "sample string 29"
 }
]

---

## ServiceManagerStatuses

ServiceManagerSta...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 ServiceManagerStatuses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerStatuses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerStatusFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerStatusEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerStatusOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerStatusModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerStatusID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 SortOrder
 Integer
 Bold
 Boolean
 Calculated Field
 Italic
 Boolean
 Calculated Field
 Underline
 Boolean
 Calculated Field
 Color
 String
 Calculated Field
 IsActive
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerStatusID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "SortOrder": 4,
 "Color": "#000000",
 "IsActive": true,
 "MetaTag": "sample string 12"
 }
]

---

## ServiceManagerTechTimes

ServiceManagerTec...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 ServiceManagerIssue
 TechUser
 UpdateUser
 Rent Manager Web API Reference
 ServiceManagerTechTimes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ServiceManagerTechTimes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ServiceManagerTechTimeFilterFields List
 Define this parameter in the request URI.
 embeds
 ServiceManagerTechTimeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ServiceManagerTechTimeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ServiceManagerTechTimeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ServiceManagerTechTimeID
 Integer
 EqualTo
 Primary Key
 ServiceManagerIssueID
 Integer
 EqualTo
, 
 In
 TechUserID
 Integer
 EqualTo
 TechUser
 UserModel
 CheckInTime
 DateTime
 CheckInLongitude
 Decimal
 CheckInLatitude
 Decimal
 CheckOutTime
 DateTime
 CheckOutLongitude
 Decimal
 CheckOutLatitude
 Decimal
 CheckInToIssueDistance
 Int32
 GreaterThan
 CheckOutToIssueDistance
 Int32
 GreaterThan
 Hours
 Decimal
 Comment
 String
 CreateUserID
 Integer
 CreateUser
 UserModel
 CreateDate
 DateTime
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 ServiceManagerIssue
 ServiceManagerIssueModel
 RedirectToEntity
 eEntityType
 Calculated Field
 UserID
 (DEPRECATED) As of 3/24/2022
 replaced by TechUserID
 Integer
 EqualTo
 User
 (DEPRECATED) As of 3/24/2022
 replaced by TechUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ServiceManagerTechTimeID": 1,
 "ServiceManagerIssueID": 2,
 "TechUserID": 3,
 "CheckInTime": "2026-04-29T15:57:52.6710442-04:00",
 "CheckInLongitude": 1.0,
 "CheckInLatitude": 1.0,
 "CheckOutTime": "2026-04-29T15:57:52.6710442-04:00",
 "CheckOutLongitude": 1.0,
 "CheckOutLatitude": 1.0,
 "CheckInToIssueDistance": 1,
 "CheckOutToIssueDistance": 1,
 "Hours": 1.0,
 "Comment": "sample string 4",
 "CreateUserID": 5,
 "CreateDate": "2026-04-29T15:57:52.6710442-04:00",
 "UpdateDate": "2026-04-29T15:57:52.6710442-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "UserID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## SessionInformation

SessionInformatio...
 SessionStatus
 Rent Manager Web API Reference
 SessionInformation
 Please select a resource on the left to view more information
 Request Information
 Url
 GET SessionInformation

---

## SharedReportBatches

SharedReportBatch...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 ReportBatch
 User
 Rent Manager Web API Reference
 SharedReportBatches Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SharedReportBatches?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SharedReportBatchFilterFields List
 Define this parameter in the request URI.
 embeds
 SharedReportBatchEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SharedReportBatchOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SharedReportBatchModel
 Properties
 NameTypeOptimized FiltersAttributes
 SharedReportBatchID
 Integer
 Primary Key
 ReportBatchID
 Integer
 UserID
 Integer
 CustomToolbarGroupID
 Integer
 IsExcludedFromMenu
 Boolean
 User
 UserModel
 ReportBatch
 ReportBatchModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SharedReportBatchID": 1,
 "ReportBatchID": 2,
 "UserID": 3,
 "CustomToolbarGroupID": 4,
 "IsExcludedFromMenu": true,
 "MetaTag": "sample string 7"
 }
]

---

## ShortTermRentalOnlineBookingSettings

ShortTermRentalOn...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 BirdsEyeViewMap
 GetByPost
 HasPrivileges
 Property
 QuickSearch
 ReservationLeadSources
 Search
 ShortTermRentalPaymentPolicy
 Rent Manager Web API Reference
 ShortTermRentalOnlineBookingSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ShortTermRentalOnlineBookingSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ShortTermRentalOnlineBookingSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 ShortTermRentalOnlineBookingSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ShortTermRentalOnlineBookingSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ShortTermRentalOnlineBookingSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 ShortTermRentalOnlineBookingSettingID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 IsAskGuestNumberOfChildren
 Boolean
 IsShowInteractiveMapView
 Boolean
 BirdsEyeViewMapID
 Integer
 IsOverrideGuestInfoSystemWebPreferences
 Boolean
 IsRequireVehicleMakeModel
 Boolean
 IsRequireVehicleLicense
 Boolean
 IsRequireVehicleYear
 Boolean
 IsAllowAdditionalVehicles
 Boolean
 IsLeadSourcesEnabled
 Boolean
 IsOverrideSettingsSystemWebPreferences
 Boolean
 IsCreateTenantAccount
 Boolean
 NumberDaysInFuture
 Integer
 ReservationCutoffDate
 DateTime
 IsAllowSameDayBookings
 Boolean
 NumberDaysInAdvanceRequired
 Integer
 IsMinimumNightsAllowed
 Boolean
 NumberMinimumNightsAllowed
 Integer
 MessageMinimumNightsAllowed
 String
 IsMaximumNightsAllowed
 Boolean
 NumberMaximumNightsAllowed
 Integer
 MessageMaximumNightsAllowed
 String
 IsDisplayApplyNowButton
 Boolean
 BookingSuccessMessage
 String
 TermsAndConditions
 String
 IsRestrictRVs
 Boolean
 RestrictedRVAge
 Integer
 RVExceedsAgeMessage
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 ShortTermRentalPaymentPolicyID
 Integer
 SiteHeaderColorHex
 String
 ConcurrencyID
 Integer
 Concurrency Key
 BirdsEyeViewMap
 BirdsEyeViewMapModel
 Property
 PropertyModel
 ShortTermRentalPaymentPolicy
 ShortTermRentalPaymentPolicyModel
 ReservationLeadSources
 ReservationLeadSourceModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ShortTermRentalOnlineBookingSettingID": 1,
 "PropertyID": 2,
 "IsAskGuestNumberOfChildren": true,
 "IsShowInteractiveMapView": true,
 "BirdsEyeViewMapID": 5,
 "IsOverrideGuestInfoSystemWebPreferences": true,
 "IsRequireVehicleMakeModel": true,
 "IsRequireVehicleLicense": true,
 "IsRequireVehicleYear": true,
 "IsAllowAdditionalVehicles": true,
 "IsLeadSourcesEnabled": true,
 "IsOverrideSettingsSystemWebPreferences": true,
 "IsCreateTenantAccount": true,
 "NumberDaysInFuture": 14,
 "ReservationCutoffDate": "2026-04-29T15:57:53.1010173-04:00",
 "IsAllowSameDayBookings": true,
 "NumberDaysInAdvanceRequired": 16,
 "IsMinimumNightsAllowed": true,
 "NumberMinimumNightsAllowed": 18,
 "MessageMinimumNightsAllowed": "sample string 19",
 "IsMaximumNightsAllowed": true,
 "NumberMaximumNightsAllowed": 21,
 "MessageMaximumNightsAllowed": "sample string 22",
 "IsDisplayApplyNowButton": true,
 "BookingSuccessMessage": "sample string 24",
 "TermsAndConditions": "sample string 25",
 "IsRestrictRVs": true,
 "RestrictedRVAge": 27,
 "RVExceedsAgeMessage": "sample string 28",
 "CreateDate": "2026-04-29T15:57:53.1010173-04:00",
 "CreateUserID": 30,
 "UpdateDate": "2026-04-29T15:57:53.1010173-04:00",
 "UpdateUserID": 32,
 "ShortTermRentalPaymentPolicyID": 33,
 "SiteHeaderColorHex": "sample string 34",
 "ConcurrencyID": 35,
 "MetaTag": "sample string 37"
 }
]

---

## ShortTermRentalPaymentPolicies

ShortTermRentalPa...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 ShortTermRentalPaymentPolicyRules
 UpdateUser
 Rent Manager Web API Reference
 ShortTermRentalPaymentPolicies Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ShortTermRentalPaymentPolicies?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ShortTermRentalPaymentPolicyFilterFields List
 Define this parameter in the request URI.
 embeds
 ShortTermRentalPaymentPolicyEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ShortTermRentalPaymentPolicyOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ShortTermRentalPaymentPolicyModel
 Properties
 NameTypeOptimized FiltersAttributes
 ShortTermRentalPaymentPolicyID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 IsActive
 Boolean
 DueAtBooking
 Decimal
 IsPercent
 Boolean
 RemainderDueDaysBeforeArrival
 Integer
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ShortTermRentalPaymentPolicyRules
 ShortTermRentalPaymentPolicyRuleModel
 ShortTermRentalOnlineBookingSettings
 ShortTermRentalOnlineBookingSettingModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ShortTermRentalPaymentPolicyID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "DueAtBooking": 4.0,
 "IsPercent": true,
 "RemainderDueDaysBeforeArrival": 6,
 "CreateDate": "2026-04-29T15:57:53.2804039-04:00",
 "CreateUserID": 8,
 "UpdateDate": "2026-04-29T15:57:53.2804039-04:00",
 "UpdateUserID": 10,
 "ConcurrencyID": 11,
 "MetaTag": "sample string 13"
 }
]

---

## ShortTermReservations

ShortTermReservat...
 Retrieve Collection
 Retrieve Instance
 Account
 CheckInUser
 CreateUser
 GetByPost
 HistoryNotes
 Lease
 Lock
 Promotion
 PromotionPromotionEntities
 ProspectLeadSource
 QuickSearch
 RateDiscount
 ReservationTransactions
 Search
 Unlock
 UpdateUser
 Rent Manager Web API Reference
 ShortTermReservations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ShortTermReservations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ShortTermReservationFilterFields List
 Define this parameter in the request URI.
 embeds
 ShortTermReservationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ShortTermReservationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ShortTermReservationModel
 Properties
 NameTypeOptimized FiltersAttributes
 ShortTermReservationID
 Integer
 EqualTo
, 
 In
 Primary Key
 LeaseID
 Integer
 EqualTo
, 
 In
 Read Only
 AccountID
 Integer
 NumberNights
 Integer
 Read Only
 NumberAdults
 Integer
 NumberChildren
 Integer
 NumberPets
 Integer
 NumberVehicles
 Integer
 Comment
 String
 IsLongTermRental
 Boolean
 CheckInDate
 DateTime
 CheckOutDate
 DateTime
 ReservationSource
 eShortTermReservationSource
 ConfirmationNumber
 Integer
 EqualTo
, 
 In
 ProspectLeadSourceID
 Integer
 AmountDueAtBooking
 Decimal
 RemainingBalanceDueDate
 DateTime
 IsLocked
 Boolean
 TotalAmountDue
 Decimal
 Read Only
 RemainingBalance
 Decimal
 Read Only
 ArrivalDate
 DateTime
 DepartureDate
 DateTime
 PropertyID
 Integer
 UnitID
 Integer
 CheckInUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 PromotionID
 Integer
 EqualTo
 RateDiscountID
 Integer
 EqualTo
 Lease
 LeaseModel
 Property
 PropertyModel
 Unit
 UnitModel
 Account
 AccountModel
 CheckInUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 ProspectLeadSource
 LeadSourceModel
 ReservationTransactions
 ReservationTransactionModel
 HistoryNotes
 HistoryNoteModel
 Promotion
 PromotionModel
 RateDiscount
 RateDiscountModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ShortTermReservationID": 1,
 "LeaseID": 2,
 "AccountID": 3,
 "NumberNights": 4,
 "NumberAdults": 5,
 "NumberChildren": 6,
 "NumberPets": 7,
 "NumberVehicles": 8,
 "Comment": "sample string 9",
 "IsLongTermRental": true,
 "CheckInDate": "2026-04-29T15:57:53.4348073-04:00",
 "CheckOutDate": "2026-04-29T15:57:53.4348073-04:00",
 "ConfirmationNumber": 11,
 "ProspectLeadSourceID": 12,
 "AmountDueAtBooking": 13.0,
 "RemainingBalanceDueDate": "2026-04-29T15:57:53.4348073-04:00",
 "IsLocked": true,
 "TotalAmountDue": 15.0,
 "RemainingBalance": 16.0,
 "ArrivalDate": "2026-04-29T15:57:53.4348073-04:00",
 "DepartureDate": "2026-04-29T15:57:53.4348073-04:00",
 "PropertyID": 18,
 "UnitID": 19,
 "CheckInUserID": 20,
 "CreateDate": "2026-04-29T15:57:53.4348073-04:00",
 "CreateUserID": 22,
 "UpdateDate": "2026-04-29T15:57:53.4348073-04:00",
 "UpdateUserID": 24,
 "ConcurrencyID": 25,
 "PromotionID": 26,
 "RateDiscountID": 27,
 "MetaTag": "sample string 29"
 }
]

---

## SignableDocumentPackets

SignableDocumentP...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 CompletePacket
 CreateUser
 DownloadFile
 GetByPost
 GetPacketPDF
 LeaseRenewals
 LeaseRenewalSignableDocumentPacket
 LeaseRenewalSignableDocumentPackets
 Owner
 Prospect
 Publish
 QuickSearch
 Search
 SignableDocuments
 Tenant
 VoidPacket
 Rent Manager Web API Reference
 SignableDocumentPackets Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SignableDocumentPackets?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SignableDocumentPacketFilterFields List
 Define this parameter in the request URI.
 embeds
 SignableDocumentPacketEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SignableDocumentPacketOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SignableDocumentPacketModel
 Properties
 NameTypeOptimized FiltersAttributes
 SignableDocumentPacketID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 AccountID
 Integer
 EqualTo
, 
 In
 AccountType
 eAccountType
 Status
 eSignableDocumentPacketStatus
 EqualTo
 CompletedDate
 DateTime
 VoidedDate
 DateTime
 SignableDocuments
 SignableDocumentModel
 Account
 AccountModel
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 TotalSignerCount
 Int32
 Read Only
 CompletedSignerCount
 Int32
 Read Only
 ExpirationDate
 DateTime
 Comment
 String
 LeaseRenewalSignableDocumentPacket
 LeaseRenewalSignableDocumentPacketModel
 LeaseRenewal
 CrossSignableDocumentPacketLeaseRenewalModel
 CreateUser
 UserModel
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SignableDocumentPacketID": 1,
 "Name": "sample string 2",
 "AccountID": 3,
 "CompletedDate": "2026-04-29T15:57:53.6283555-04:00",
 "VoidedDate": "2026-04-29T15:57:53.6283555-04:00",
 "CreateDate": "2026-04-29T15:57:53.6283555-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:53.6283555-04:00",
 "UpdateUserID": 9,
 "TotalSignerCount": 1,
 "CompletedSignerCount": 1,
 "ExpirationDate": "2026-04-29T15:57:53.6283555-04:00",
 "Comment": "sample string 11",
 "MetaTag": "sample string 13"
 }
]

---

## SignableDocuments

SignableDocuments
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 CurrentFile
 GetByPost
 OriginalFile
 Packet
 QuickSearch
 Search
 SignableDocumentFields
 SignableDocumentPageViews
 SignatureBlockGroups
 SignatureBlocks
 UpdateUser
 WebUsers
 Rent Manager Web API Reference
 SignableDocuments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SignableDocuments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SignableDocumentFilterFields List
 Define this parameter in the request URI.
 embeds
 SignableDocumentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SignableDocumentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SignableDocumentModel
 Properties
 NameTypeOptimized FiltersAttributes
 SignableDocumentID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 PageCount
 Integer
 SignableDocumentPacketID
 Integer
 EqualTo
, 
 In
 OriginalFileID
 Integer
 EqualTo
 CurrentFileID
 Integer
 EqualTo
 PageSize
 ePageSize
 IsLandscape
 Boolean
 SignatureBlockGroups
 SignableDocumentSignatureBlockGroupModel
 SignatureBlocks
 SignableDocumentSignatureBlockModel
 WebUsers
 SignableDocumentWebUserModel
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 SignerCount
 Int32
 Read Only
, 
 Calculated Field
, 
 Requires Embed (SignatureBlocks.WebUser)
 Packet
 SignableDocumentPacketModel
 SignableDocumentFields
 SignableDocumentFieldModel
 OriginalFile
 FileModel
 CurrentFile
 FileModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SignableDocumentID": 1,
 "Name": "sample string 2",
 "PageCount": 3,
 "SignableDocumentPacketID": 4,
 "OriginalFileID": 5,
 "CurrentFileID": 6,
 "IsLandscape": true,
 "CreateDate": "2026-04-29T15:57:53.788501-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:57:53.788501-04:00",
 "UpdateUserID": 11,
 "SignerCount": 1,
 "MetaTag": "sample string 13"
 }
]

---

## SignablePDFTemplates

SignablePDFTempla...
 Retrieve Collection
 Retrieve Instance
 Fields
 GetByPost
 QuickSearch
 Search
 SignablePDFTemplateUsers
 SignatureBlockGroups
 Users
 Rent Manager Web API Reference
 SignablePDFTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SignablePDFTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SignablePDFTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 SignablePDFTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SignablePDFTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SignablePDFTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 SignablePDFTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 TemplateType
 eLetterTemplateType
 EqualTo
 Description
 String
 FileID
 Integer
 EqualTo
 IsActive
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 SignatureBlockGroups
 SignablePDFTemplateSignatureBlockGroupModel
 SignablePDFTemplateUsers
 SignablePDFTemplateUserModel
 Fields
 SignablePDFTemplateFieldModel
 MaximumSignerCount
 Integer
 Read Only
, 
 Calculated Field
, 
 Requires Embed (SignatureBlockGroups.SignatureBlocks)
 RequiresCompanyRepresentativeSignatures
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (SignatureBlockGroups)
 DocumentPacketDocuments
 DocumentPacketDocumentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## Signatures

Signatures
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 File
 GetByPost
 QuickSearch
 Search
 UpdateUser
 UserSignatures
 Rent Manager Web API Reference
 Signatures Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Signatures?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SignatureFilterFields List
 Define this parameter in the request URI.
 embeds
 SignatureEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SignatureOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SignatureModel
 Properties
 NameTypeOptimized FiltersAttributes
 SignatureID
 Integer
 EqualTo
 Primary Key
 Name
 String
 Description
 String
 FileID
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 UserSignatures
 UserSignatureModel
 File
 FileModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SignatureID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "FileID": 4,
 "CreateUserID": 5,
 "CreateDate": "2026-04-29T15:57:54.1066477-04:00",
 "UpdateUserID": 7,
 "UpdateDate": "2026-04-29T15:57:54.1066477-04:00",
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## SiteClassifications

SiteClassificatio...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 QuickSearch
 Search
 SiteClassificationHistory
 Rent Manager Web API Reference
 SiteClassifications Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SiteClassifications?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SiteClassificationFilterFields List
 Define this parameter in the request URI.
 embeds
 SiteClassificationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SiteClassificationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SiteClassificationModel
 Properties
 NameTypeOptimized FiltersAttributes
 SiteClassificationID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 ShortName
 String
 SortOrder
 Integer
 Read Only
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SiteClassificationID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "ShortName": "sample string 4",
 "SortOrder": 5,
 "MetaTag": "sample string 7"
 }
]

---

## SiteGroups

SiteGroups
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 QuickSearch
 Search
 SiteGroupImages
 Units
 UpdateUser
 Rent Manager Web API Reference
 SiteGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SiteGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SiteGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 SiteGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SiteGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SiteGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 SiteGroupID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Name
 String
 MarketingName
 String
 MarketingDescription
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 Units
 UnitModel
 Property
 PropertyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 SiteGroupImages
 SiteGroupImageModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SiteGroupID": 1,
 "PropertyID": 2,
 "CreateUserID": 3,
 "UpdateUserID": 4,
 "ConcurrencyID": 5,
 "Name": "sample string 6",
 "MarketingName": "sample string 7",
 "MarketingDescription": "sample string 8",
 "CreateDate": "2026-04-29T15:57:54.397828-04:00",
 "UpdateDate": "2026-04-29T15:57:54.397828-04:00",
 "MetaTag": "sample string 12"
 }
]

---

## SiteTypes

SiteTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 SiteTypeUnitTypes
 UpdateUser
 Rent Manager Web API Reference
 SiteTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SiteTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SiteTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 SiteTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SiteTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SiteTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 SiteTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 IsEquipmentTypeNotRequired
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 SiteTypeUnitTypes
 SiteTypeUnitTypeModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SiteTypeID": 1,
 "Name": "sample string 2",
 "IsEquipmentTypeNotRequired": true,
 "CreateDate": "2026-04-29T15:57:54.561652-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:57:54.561652-04:00",
 "UpdateUserID": 7,
 "ConcurrencyID": 8,
 "MetaTag": "sample string 10"
 }
]

---

## Subsidies

Subsidies
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 DistinctChargeTypeIDs
 GetByPost
 MakeSubsidyPayment
 QuickSearch
 Search
 SubsidyTenants
 Tenants
 Rent Manager Web API Reference
 Subsidies Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Subsidies?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 SubsidyFilterFields List
 Define this parameter in the request URI.
 embeds
 SubsidyEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SubsidyOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 SubsidyGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SubsidyModel
 Properties
 NameTypeOptimized FiltersAttributes
 SubsidyID
 Integer
 EqualTo
, 
 In
 Primary Key
 ChargeTypeID
 Integer
 EqualTo
 Name
 String
 ShortName
 String
 PaymentFrom
 String
 PreallocatePayment
 Boolean
 Tenants
 (DEPRECATED) As of 6/11/2021
 replaced by Tenants
 TenantModel
 SubsidyTenants
 SubsidyTenantModel
 ChargeType
 ChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SubsidyID": 1,
 "ChargeTypeID": 2,
 "Name": "sample string 3",
 "ShortName": "sample string 4",
 "PaymentFrom": "sample string 5",
 "PreallocatePayment": true,
 "MetaTag": "sample string 8"
 }
]

---

## SubsidyMasterPayments

SubsidyMasterPaym...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Charges
 Deposit
 GetByPost
 Journals
 Payments
 QuickSearch
 Search
 Subsidy
 Rent Manager Web API Reference
 SubsidyMasterPayments Retrieve Collection
 (DEPRECATED) As of 3/4/2019
 replaced by SubsidyPayments
 Retrieve a collection of items.
 Request Information
 Url
 GET SubsidyMasterPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SubsidyMasterPaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 SubsidyMasterPaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SubsidyMasterPaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SubsidyMasterPaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 SubsidyMasterPaymentID
 Integer
 EqualTo
 Primary Key
 SubsidyID
 Integer
 EqualTo
 CheckNumber
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 DepositID
 Integer
 EqualTo
 PaymentFrom
 String
 Comment
 String
 ReceiptID
 Integer
 Subsidy
 SubsidyModel
 Deposit
 DepositModel
 Required (create)
 Journals
 JournalModel
 Charges
 ChargeModel
 Payments
 PaymentModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SubsidyMasterPaymentID": 1,
 "SubsidyID": 2,
 "CheckNumber": "sample string 3",
 "Amount": 4.0,
 "TransactionDate": "2026-04-29T15:57:54.8626812-04:00",
 "DepositID": 6,
 "PaymentFrom": "sample string 7",
 "Comment": "sample string 8",
 "ReceiptID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## SubsidyPayments

SubsidyPayments
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Charges
 Deposit
 GetByPost
 Journals
 Payments
 QuickSearch
 Search
 Subsidy
 TransactionLinks
 Rent Manager Web API Reference
 SubsidyPayments Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SubsidyPayments?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 SubsidyPaymentFilterFields List
 Define this parameter in the request URI.
 embeds
 SubsidyPaymentEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SubsidyPaymentOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 SubsidyPaymentGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SubsidyPaymentModel
 Properties
 NameTypeOptimized FiltersAttributes
 SubsidyPaymentID
 Integer
 EqualTo
 Primary Key
 SubsidyID
 Integer
 EqualTo
 CheckNumber
 String
 Amount
 Decimal
 Read Only
 TransactionDate
 DateTime
 DepositID
 Integer
 EqualTo
 PaymentFrom
 String
 Comment
 String
 ReceiptID
 Integer
 Subsidy
 SubsidyModel
 Deposit
 DepositModel
 Required (create)
 TransactionLinks
 SubsidyPaymentTransactionLinksModel
 Journals
 (DEPRECATED) As of 5/26/2021
 replaced by TransactionLinks.Journals
 JournalModel
 Charges
 (DEPRECATED) As of 5/26/2021
 replaced by TransactionLinks.Charges
 ChargeModel
 Payments
 PaymentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SubsidyPaymentID": 1,
 "SubsidyID": 2,
 "CheckNumber": "sample string 3",
 "Amount": 4.0,
 "TransactionDate": "2026-04-29T15:57:55.0071808-04:00",
 "DepositID": 6,
 "PaymentFrom": "sample string 7",
 "Comment": "sample string 8",
 "ReceiptID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## SubsidyTenants

SubsidyTenants
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Subsidy
 Tenant
 Rent Manager Web API Reference
 SubsidyTenants Retrieve Collection
 (DEPRECATED) As of 3/15/2019
 Retrieve a collection of items.
 Request Information
 Url
 GET SubsidyTenants?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SubsidyTenantFilterFields List
 Define this parameter in the request URI.
 embeds
 SubsidyTenantEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SubsidyTenantOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SubsidyTenantModel
 Properties
 NameTypeOptimized FiltersAttributes
 SubsidyTenantID
 Integer
 EqualTo
 Primary Key
 SubsidyID
 Integer
 EqualTo
 TenantID
 Integer
 EqualTo
 Tenant
 TenantModel
 Subsidy
 SubsidyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SubsidyTenantID": 1,
 "SubsidyID": 2,
 "TenantID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## SurveyAnswers

SurveyAnswers
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 SurveyAnswerQuestionComboOptions
 Rent Manager Web API Reference
 SurveyAnswers Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SurveyAnswers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SurveyAnswerFilterFields List
 Define this parameter in the request URI.
 embeds
 SurveyAnswerEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SurveyAnswerOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SurveyAnswerModel
 Properties
 NameTypeOptimized FiltersAttributes
 SurveyAnswerID
 Integer
 EqualTo
, 
 In
 Primary Key
 SurveyQuestionID
 Integer
 EqualTo
, 
 In
 SurveyResponseID
 Integer
 EqualTo
 AnswerValue
 String
 AnswerOther
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 SurveyAnswerQuestionComboOptions
 SurveyAnswerQuestionComboOptionModel
 SurveyQuestion
 SurveyQuestionModel
 SurveyResponse
 SurveyResponseModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SurveyAnswerID": 1,
 "SurveyQuestionID": 2,
 "SurveyResponseID": 3,
 "AnswerValue": "sample string 4",
 "AnswerOther": "sample string 5",
 "CreateDate": "2026-04-29T15:58:05.1373265-04:00",
 "CreateUserID": 7,
 "UpdateDate": "2026-04-29T15:58:05.1373265-04:00",
 "UpdateUserID": 9,
 "ConcurrencyID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## SurveyAutomationSettings

SurveyAutomationS...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Survey
 SurveyAutomationIssueCategory
 SurveyAutomationIssueStatus
 SurveyAutomationProperty
 Rent Manager Web API Reference
 SurveyAutomationSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SurveyAutomationSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SurveyAutomationSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 SurveyAutomationSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SurveyAutomationSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SurveyAutomationSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 SurveyAutomationSettingID
 Integer
 EqualTo
 Primary Key
 SurveyID
 Integer
 EqualTo
 TriggerAction
 ePollSendAction
 DeliveryOption
 ePollDeliveryOption
 IsActive
 Boolean
 IsSendOnCloseIfNotPreviouslySent
 Boolean
 Survey
 SurveyModel
 SurveyAutomationIssueCategories
 SurveyAutomationIssueCategoryModel
 SurveyAutomationIssueStatuses
 SurveyAutomationIssueStatusModel
 SurveyAutomationProperties
 SurveyAutomationPropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SurveyAutomationSettingID": 1,
 "SurveyID": 2,
 "IsActive": true,
 "IsSendOnCloseIfNotPreviouslySent": true,
 "MetaTag": "sample string 6"
 }
]

---

## SurveyQuestions

SurveyQuestions
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 SurveyAnswers
 SurveyQuestionComboOptions
 Rent Manager Web API Reference
 SurveyQuestions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SurveyQuestions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SurveyQuestionFilterFields List
 Define this parameter in the request URI.
 embeds
 SurveyQuestionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SurveyQuestionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SurveyQuestionModel
 Properties
 NameTypeOptimized FiltersAttributes
 SurveyQuestionID
 Integer
 EqualTo
, 
 In
 Primary Key
 SurveyID
 Integer
 EqualTo
, 
 In
 Question
 String
 QuestionHTML
 String
 Read Only
 QuestionTypeID
 ePollQuestionType
 IsRequired
 Boolean
 IncludeOtherResponse
 Boolean
 LimitSelectionCount
 Boolean
 SelectionCountMax
 Int32
 SortOrder
 Integer
 IsActive
 Boolean
 DateInactivated
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 Survey
 SurveyModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 SurveyAnswers
 SurveyAnswerModel
 SurveyQuestionComboOptions
 SurveyQuestionComboOptionModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SurveyQuestionID": 1,
 "SurveyID": 2,
 "Question": "sample string 3",
 "QuestionHTML": "sample string 4",
 "IsRequired": true,
 "IncludeOtherResponse": true,
 "LimitSelectionCount": true,
 "SelectionCountMax": 1,
 "SortOrder": 8,
 "IsActive": true,
 "DateInactivated": "2026-04-29T15:58:05.4442428-04:00",
 "CreateUserID": 11,
 "CreateDate": "2026-04-29T15:58:05.4442428-04:00",
 "UpdateUserID": 13,
 "UpdateDate": "2026-04-29T15:58:05.4442428-04:00",
 "ConcurrencyID": 15,
 "MetaTag": "sample string 17"
 }
]

---

## SurveyResponses

SurveyResponses
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Attachments
 CreateUser
 EmailSentItem
 GetByPost
 QuickSearch
 Search
 SurveyAnswers
 SurveyResponseTexts
 UpdateUser
 UpdateWebUser
 Rent Manager Web API Reference
 SurveyResponses Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SurveyResponses?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SurveyResponseFilterFields List
 Define this parameter in the request URI.
 embeds
 SurveyResponseEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SurveyResponseOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SurveyResponseModel
 Properties
 NameTypeOptimized FiltersAttributes
 SurveyResponseID
 Integer
 EqualTo
, 
 In
 Primary Key
 SurveyID
 Integer
 EqualTo
, 
 In
 AccountID
 Integer
 EqualTo
 PropertyID
 Integer
 EqualTo
 ServiceManagerIssueID
 Integer
 EqualTo
 ResponseMethod
 ePollResponseMethod
 UpdateWebUserID
 Int32
 EqualTo
 FinishDate
 DateTime
 ExpirationDate
 DateTime
 Read Only
 EmailSentItemID
 Integer
 EqualTo
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 Survey
 SurveyModel
 Account
 AccountModel
 EmailSentItem
 EmailSentItemModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 UpdateWebUser
 WebUserModel
 Attachments
 FileAttachmentModel
 SurveyAnswers
 SurveyAnswerModel
 SurveyResponseTexts
 SurveyResponseTextModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SurveyResponseID": 1,
 "SurveyID": 2,
 "AccountID": 3,
 "PropertyID": 4,
 "ServiceManagerIssueID": 5,
 "UpdateWebUserID": 1,
 "FinishDate": "2026-04-29T15:58:05.608385-04:00",
 "ExpirationDate": "2026-04-29T15:58:05.608385-04:00",
 "EmailSentItemID": 7,
 "CreateUserID": 8,
 "CreateDate": "2026-04-29T15:58:05.608385-04:00",
 "UpdateUserID": 10,
 "UpdateDate": "2026-04-29T15:58:05.608385-04:00",
 "ConcurrencyID": 12,
 "MetaTag": "sample string 14"
 }
]

---

## SurveySetups

SurveySetups
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Survey
 Rent Manager Web API Reference
 SurveySetups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SurveySetups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SurveySetupFilterFields List
 Define this parameter in the request URI.
 embeds
 SurveySetupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SurveySetupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SurveySetupModel
 Properties
 NameTypeOptimized FiltersAttributes
 SurveySetupID
 Integer
 EqualTo
 Primary Key
 SurveyID
 Integer
 EqualTo
 LinkExpiryDays
 Integer
 DeliveryOption
 ePollDeliveryOption
 FromName
 String
 Subject
 String
 EmailMessage
 String
 TextMessage
 String
 ButtonColor
 String
 LogoUserDefinedFieldID
 Integer
 EqualTo
 LogoFileID
 Integer
 EqualTo
 LogoFile
 FileModel
 Survey
 SurveyModel
 LogoUserDefinedField
 UserDefinedFieldModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SurveySetupID": 1,
 "SurveyID": 2,
 "LinkExpiryDays": 3,
 "FromName": "sample string 4",
 "Subject": "sample string 5",
 "EmailMessage": "sample string 6",
 "TextMessage": "sample string 7",
 "ButtonColor": "sample string 8",
 "LogoUserDefinedFieldID": 9,
 "LogoFileID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## Surveys

Surveys
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 GetSurveyForPortal
 PostSurveyResponseForPortal
 PublishSurvey
 QuickSearch
 Search
 SendSurvey
 SurveyAutomationSettings
 SurveyProperties
 SurveyQuestions
 SurveyResponses
 SurveySetups
 Rent Manager Web API Reference
 Surveys Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Surveys?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SurveyFilterFields List
 Define this parameter in the request URI.
 embeds
 SurveyEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SurveyOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SurveyModel
 Properties
 NameTypeOptimized FiltersAttributes
 SurveyID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 DisplayName
 String
 IsBoardMemberSurvey
 Boolean
 Description
 String
 InternalComments
 String
 Status
 ePollStatus
 PublishDate
 DateTime
 PublishUserID
 Int32
 EqualTo
 EndDate
 DateTime
 VoidDate
 DateTime
 VoidUserID
 Int32
 EqualTo
 SurveyType
 eSurveyType
 ClosingPageText
 String
 SendOption
 ePollSendOption
 IntroductionPageText
 String
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 SurveyQuestions
 SurveyQuestionModel
 Required (create)
 SurveyResponses
 SurveyResponseModel
 PublishUser
 UserModel
 CreateUser
 UserModel
 VoidUser
 UserModel
 UpdateUser
 UserModel
 SurveySetup
 SurveySetupModel
 SurveyAutomationSetting
 SurveyAutomationSettingModel
 SurveyProperties
 SurveyPropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "SurveyID": 1,
 "Name": "sample string 2",
 "DisplayName": "sample string 3",
 "IsBoardMemberSurvey": true,
 "Description": "sample string 5",
 "InternalComments": "sample string 6",
 "PublishDate": "2026-04-29T15:58:05.9715552-04:00",
 "PublishUserID": 1,
 "EndDate": "2026-04-29T15:58:05.9715552-04:00",
 "VoidDate": "2026-04-29T15:58:05.9715552-04:00",
 "VoidUserID": 1,
 "ClosingPageText": "sample string 7",
 "IntroductionPageText": "sample string 8",
 "CreateUserID": 9,
 "CreateDate": "2026-04-29T15:58:05.9715552-04:00",
 "UpdateUserID": 11,
 "UpdateDate": "2026-04-29T15:58:05.9715552-04:00",
 "ConcurrencyID": 13,
 "MetaTag": "sample string 15"
 }
]

---

## System

System
 AccountingClose
 SecurityDepositInterest
 SystemPreferenceInfo
 SystemWebPreferenceInfo
 UnitLicensingSummary
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 Rent Manager Web API Reference
 System
 Please select a resource on the left to view more information
 Request Information
 Url
 GET System

---

## SystemPreferences

SystemPreferences
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 DefaultChargeSettings
 EntityType
 GetByPost
 GetFromAllLocations
 TenantSetupDefaultChargeTypes
 Rent Manager Web API Reference
 SystemPreferences Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SystemPreferences?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SystemPreferenceFilterFields List
 Define this parameter in the request URI.
 embeds
 SystemPreferenceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SystemPreferenceOrderingOption List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SystemPreferenceModel
 Properties
 NameTypeOptimized FiltersAttributes
 PreferenceID
 eSystemPreference
 Primary Key
 Name
 String
 Value
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Name": "sample string 1",
 "Value": "sample string 2",
 "MetaTag": "sample string 4"
 }
]

---

## SystemWebPreferences

SystemWebPreferen...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 GetFromAllLocations
 Rent Manager Web API Reference
 SystemWebPreferences Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET SystemWebPreferences?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 SystemWebPreferenceFilterFields List
 Define this parameter in the request URI.
 embeds
 SystemWebPreferenceEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 SystemWebPreferenceOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
SystemWebPreferenceModel
 Properties
 NameTypeOptimized FiltersAttributes
 PreferenceID
 eSystemWebPreference
 Primary Key
 Name
 String
 EqualTo
 Read Only
 Value
 String
 EqualTo
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Name": "sample string 1",
 "Value": "sample string 2",
 "MetaTag": "sample string 4"
 }
]

---

## TWADisabledProperties

TWADisabledProper...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Property
 PropertyGroup
 QuickSearch
 Search
 Rent Manager Web API Reference
 TWADisabledProperties Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TWADisabledProperties?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TWADisabledPropertyFilterFields List
 Define this parameter in the request URI.
 embeds
 TWADisabledPropertyEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TWADisabledPropertyOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TWADisabledPropertyModel
 Properties
 NameTypeOptimized FiltersAttributes
 TWADisabledPropertyID
 Integer
 EqualTo
 Primary Key
 PropertyID
 Integer
 EqualTo
 PropertyGroupID
 Integer
 EqualTo
 Property
 PropertyModel
 PropertyGroup
 PropertyGroupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TWADisabledPropertyID": 1,
 "PropertyID": 2,
 "PropertyGroupID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## TWAReportTemplates

TWAReportTemplate...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 Property
 QuickSearch
 Report
 Search
 TWAReportTemplateCommittees
 TWAReportTemplateReportParameters
 TWAReportTemplateReportParameterValues
 UpdateUser
 Rent Manager Web API Reference
 TWAReportTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TWAReportTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TWAReportTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 TWAReportTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TWAReportTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TWAReportTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 TWAReportTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 ReportID
 eReport
 EqualTo
 PropertyID
 Integer
 EqualTo
, 
 In
 DisplayName
 String
 IsActiveCommitteeMembersOnly
 Boolean
 IsCurrentBoardMembersOnly
 Boolean
 IsExpirePublishedReport
 Boolean
 ExpireAfterNumber
 Integer
 ExpireAfterPeriodType
 eTWAReportExpirationPeriodType
 FirstRunDate
 DateTime
 IsRecurring
 Boolean
 RecurrenceFrequencyType
 eTWAReportRecurrenceFrequencyType
 RecurrencePatternEndType
 eTWAReportRecurrencePatternEndType
 RecurrenceEndDate
 DateTime
 NextPublishDate
 DateTime
 Read Only
 IsActive
 Boolean
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Property
 PropertyModel
 Report
 ReportModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TWAReportTemplateCommittees
 TWAReportTemplateCommitteeModel
 Required (create)
 TWAReportTemplateReportParameterValues
 TWAReportTemplateReportParameterValueModel
 Required (create)
 TWAReportTemplateReportParameters
 TWAReportTemplateReportParameterModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TWAReportTemplateID": 1,
 "PropertyID": 2,
 "DisplayName": "sample string 3",
 "IsActiveCommitteeMembersOnly": true,
 "IsCurrentBoardMembersOnly": true,
 "IsExpirePublishedReport": true,
 "ExpireAfterNumber": 7,
 "ExpireAfterPeriodType": "NotSet",
 "FirstRunDate": "2026-04-29T15:58:06.7098513-04:00",
 "IsRecurring": true,
 "RecurrenceEndDate": "2026-04-29T15:58:06.7098513-04:00",
 "NextPublishDate": "2026-04-29T15:58:06.7098513-04:00",
 "IsActive": true,
 "CreateDate": "2026-04-29T15:58:06.7098513-04:00",
 "CreateUserID": 12,
 "UpdateDate": "2026-04-29T15:58:06.7098513-04:00",
 "UpdateUserID": 14,
 "ConcurrencyID": 15,
 "MetaTag": "sample string 17"
 }
]

---

## Tasks

Tasks
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CloseUser
 Color
 CreateUser
 FileAttachments
 GetByPost
 History
 Owner
 OwnerProspect
 Owners
 OwnersSelectList
 Prospect
 Prospects
 ProspectsSelectList
 QuickSearch
 Search
 ServiceManagerIssue
 ServiceManagerIssues
 ServiceManagerIssuesSelectList
 TaskUser
 TaskUsers
 Tenant
 Tenants
 TenantsSelectList
 UpdateUser
 Vendor
 Vendors
 VendorsSelectList
 Rent Manager Web API Reference
 Tasks Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Tasks?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 TaskFilterFields List
 Define this parameter in the request URI.
 embeds
 TaskEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TaskOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 TaskGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TaskModel
 Properties
 NameTypeOptimized FiltersAttributes
 TaskID
 Integer
 EqualTo
, 
 In
 Primary Key
 ParentTaskID
 Integer
 EqualTo
 TaskType
 Integer
 EqualTo
 DueDate
 DateTime
 ToDate
 DateTime
 ReminderDate
 DateTime
 Subject
 String
 Description
 String
 ActionType
 eTaskActionType
 ColorID
 Integer
 IsReminder
 Boolean
 IsRecurring
 Boolean
 IsCalendarIntegration
 Boolean
 Calculated Field
 IsClosed
 Boolean
 CloseDate
 DateTime
 ServiceManagerIssueID
 Integer
 EqualTo
, 
 In
 OwnerProspectID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Int32
 EqualTo
 CloseUserID
 Integer
 EqualTo
 TenantID
 Integer
 ProspectID
 Integer
 OwnerID
 Integer
 VendorID
 Integer
 History
 HistoryModel
 HistoryID
 Integer
 Location
 String
 FileAttachments
 FileAttachmentModel
 Color
 ColorModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 CloseUser
 UserModel
 TaskUsers
 TaskUserModel
 Tenant
 TenantModel
 TenantSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Tenant
 CrossTaskTenantModel
 Prospect
 ProspectModel
 ProspectSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Prospect
 CrossTaskProspectModel
 Vendor
 VendorModel
 VendorSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Vendor
 CrossTaskVendorModel
 OwnerProspect
 OwnerProspectModel
 Owner
 OwnerModel
 OwnerSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by Owner
 CrossTaskOwnerModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 ServiceManagerIssueSelectList
 (DEPRECATED) As of 4/9/2019
 replaced by ServiceManagerIssue
 CrossTaskServiceManagerIssueModel
 TaskRecurrencePatternOfRecurrence
 eAppointmentRecurrencePatternTypes
 TaskRecurrenceFromDate
 DateTime
 TaskRecurrenceToDate
 DateTime
 TaskRecurrenceValue1
 Integer
 TaskRecurrenceValue2
 Integer
 TaskRecurrenceDatePostedThru
 DateTime
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TaskID": 1,
 "Subject": "sample string 7",
 "Description": "sample string 8"
 }
]

---

## TaxTypes

TaxTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 GetByPost
 GetFromAllLocations
 QuickSearch
 Search
 Rent Manager Web API Reference
 TaxTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TaxTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 TaxTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 TaxTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TaxTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 TaxTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TaxTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 TaxTypeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Rate
 Decimal
 ChargeTypeID
 Integer
 EqualTo
 ChargeType
 ChargeTypeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TaxTypeID": 1,
 "Name": "sample string 2"
 }
]

---

## TenantStatementAutomatedPostingSettings

TenantStatementAu...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 LetterTemplate
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 TenantStatementAutomatedPostingSettings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TenantStatementAutomatedPostingSettings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TenantStatementAutomatedPostingSettingFilterFields List
 Define this parameter in the request URI.
 embeds
 TenantStatementAutomatedPostingSettingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TenantStatementAutomatedPostingSettingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TenantStatementAutomatedPostingSettingModel
 Properties
 NameTypeOptimized FiltersAttributes
 TenantStatementAutomatedPostingSettingID
 Integer
 EqualTo
 Primary Key
 Subject
 String
 IsHtml
 Boolean
 Calculated Field
 EmailBodyText
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 LetterTemplateID
 Integer
 LetterTemplate
 LetterTemplateModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TenantStatementAutomatedPostingSettingID": 1,
 "Subject": "sample string 2",
 "IsHtml": true,
 "EmailBodyText": "sample string 4",
 "CreateDate": "2026-04-29T15:58:07.2058469-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:58:07.2058469-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "LetterTemplateID": 10,
 "MetaTag": "sample string 12"
 }
]

---

## TenantStatementAutomations

TenantStatementAu...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AddressType
 CreateUser
 CustomForm
 GetByPost
 HistoryCategory
 QuickSearch
 Search
 TenantStatementAutomationContactTypes
 TenantStatementAutomationProperties
 TenantStatementAutomationStatementMethods
 UpdateUser
 Rent Manager Web API Reference
 TenantStatementAutomations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TenantStatementAutomations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TenantStatementAutomationFilterFields List
 Define this parameter in the request URI.
 embeds
 TenantStatementAutomationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TenantStatementAutomationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TenantStatementAutomationModel
 Properties
 NameTypeOptimized FiltersAttributes
 TenantStatementAutomationID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 IsActive
 Boolean
 AutomationType
 eAutomationType
 RunDay
 Integer
 NotificationEmail
 String
 IncludeDetails
 Boolean
 AttachToHistory
 Boolean
 HistoryCategoryID
 Integer
 EqualTo
 CustomFormID
 Integer
 EqualTo
 IsPrimaryContact
 Boolean
 IsPast
 Boolean
 IsCurrent
 Boolean
 IsFuture
 Boolean
 FromDateOption
 eTenantStatementAutomationsDateOptions
 FromDate
 Integer
 ToDateOption
 eTenantStatementAutomationsDateOptions
 ToDate
 Integer
 PropertyGroupID
 Integer
 EqualTo
 AddressTypeID
 Integer
 EqualTo
 ShowUnpostedPerDayLateFees
 Boolean
 ShowDailyInterestLoans
 Boolean
 ShowMeterReadings
 Boolean
 ShowCalculationDetails
 Boolean
 UseAccountGroups
 Boolean
 Comment
 String
 StartDate
 DateTime
 EndDate
 DateTime
 ExcludeZeroes
 Boolean
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 Read Only
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ConcurrencyID
 Integer
 Concurrency Key
 AddressType
 AddressTypeModel
 CustomForm
 CustomFormModel
 HistoryCategory
 HistoryCategoryModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TenantStatementAutomationStatementMethods
 TenantStatementAutomationStatementMethodModel
 TenantStatementAutomationProperties
 TenantStatementAutomationPropertyModel
 TenantStatementAutomationContactTypes
 TenantStatementAutomationContactTypeModel
 PropertyGroup
 PropertyGroupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TenantStatementAutomationID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "RunDay": 4,
 "NotificationEmail": "sample string 5",
 "IncludeDetails": true,
 "AttachToHistory": true,
 "HistoryCategoryID": 8,
 "CustomFormID": 9,
 "IsPrimaryContact": true,
 "IsPast": true,
 "IsCurrent": true,
 "IsFuture": true,
 "FromDate": 14,
 "ToDate": 15,
 "PropertyGroupID": 16,
 "AddressTypeID": 17,
 "ShowUnpostedPerDayLateFees": true,
 "ShowDailyInterestLoans": true,
 "ShowMeterReadings": true,
 "ShowCalculationDetails": true,
 "UseAccountGroups": true,
 "Comment": "sample string 23",
 "StartDate": "2026-04-29T15:58:07.3816615-04:00",
 "EndDate": "2026-04-29T15:58:07.3816615-04:00",
 "ExcludeZeroes": true,
 "CreateDate": "2026-04-29T15:58:07.3816615-04:00",
 "CreateUserID": 28,
 "UpdateDate": "2026-04-29T15:58:07.3816615-04:00",
 "UpdateUserID": 30,
 "ConcurrencyID": 31,
 "MetaTag": "sample string 33"
 }
]

---

## Tenants

Tenants
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AccountStatements
 Addresses
 AddressTypes
 ApplyNSFFees
 Appointments
 Balance
 BatchEmailTenants
 BatchEmailTenantsFromProperties
 BatchEmailTenantsFromUnits
 BatchPayments
 BillableExpenses
 BillAllocations
 Bills
 CashPayUser
 Charges
 Checks
 Color
 Contacts
 ContactTypes
 CreateUser
 CreditReversals
 Credits
 Evictions
 GetByPost
 GetFromAllLocations
 History
 HistoryCalls
 HistoryEmails
 HistoryEviction
 HistoryEvictionNotes
 HistoryNotes
 HistorySystemNotes
 HistoryViolationNotes
 HistoryVisits
 HistoryWebAccountNotes
 HistoryWithUnitHistory
 IncomeVerifications
 Invoices
 LateFees
 LateFeeSetup
 Leases
 LeasingAgent
 Loans
 MakePayments
 OpenPrepays
 OpenReceivables
 PaymentReversals
 Payments
 Pets
 PhoneNumberTypes
 PrimaryContact
 PrimaryContactPhoneNumbers
 Property
 Prospect
 QuickSearch
 RecurringCharges
 RecurringChargeSummaries
 RefundSecurityDeposit
 RevenueRenewals
 RMVoIPCallHistory
 RunScreening
 SaveRecurringChargeSortOrders
 ScreeningMappedFieldValues
 ScreeningReportTypesForUser
 Screenings
 Search
 SecurityDepositHeld
 SecurityDeposits
 SecurityDepositSummaries
 ServiceManagerProjects
 ShortTermReservations
 Subsidies
 SubsidyTenants
 Tasks
 TenantBills
 TenantCheckDetails
 TenantChecks
 TestScript
 Transactions
 TransactionsSearch
 TransferPayment
 TransferSecurityDeposits
 TransferTenant
 UpdateUser
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 ValidateWebUserCredentials
 Vehicles
 Violations
 WebUserAccounts
 WebUsers
 Rent Manager Web API Reference
 Tenants Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Tenants?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 TenantFilterFields List
 Define this parameter in the request URI.
 embeds
 TenantEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TenantOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 TenantGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TenantModel
 Properties
 NameTypeOptimized FiltersAttributes
 TenantID
 Integer
 EqualTo
, 
 In
 Primary Key
 TenantDisplayID
 Integer
 EqualTo
, 
 In
 Read Only
 Name
 String
 EqualTo
 FirstName
 String
 LastName
 String
 WebMessage
 String
 IsCompany
 Boolean
 ColorID
 Int32
 CheckPayeeName
 String
 StatementMethod
 eStatementMethod
 EqualTo
 Comment
 String
 RentDueDay
 Integer
 RentPeriod
 eLeasePeriod
 EqualTo
 DoNotChargeLateFees
 Boolean
 DoNotPrintStatements
 (DEPRECATED) As of 11/12/2024
 replaced by StatementMethod
 Boolean
 Calculated Field
 DoNotAcceptChecks
 Boolean
 DoNotAcceptPayments
 Boolean
 DoNotAllowTWAPayments
 Boolean
 DoNotSendARAutomationNotifications
 Boolean
 IsProspect
 (DEPRECATED) As of 7/16/2019
 Boolean
 Read Only
 LeasingAgentID
 Int32
 EqualTo
, 
 In
 AccountGroupID
 Int32
 EqualTo
, 
 In
, 
 NotIn
 Read Only
 TotalCalls
 Integer
 FailedCalls
 Integer
 IsAccountGroupMaster
 Boolean
 EqualTo
, 
 NotEqualTo
 Read Only
 TotalVisits
 Integer
 TotalEmails
 Integer
 FirstContact
 DateTime
 LastContact
 DateTime
 PropertyID
 Integer
 EqualTo
, 
 In
 PostingStartDate
 DateTime
 Read Only
 PostingEndDate
 DateTime
 Read Only
 DefaultTaxTypeID
 Int32
 EqualTo
 OverrideScreeningDecision
 Boolean
 Read Only
 OverrideReason
 String
 Read Only
 OverrideCreateDate
 DateTime
 Read Only
 OverrideCreateUserID
 Integer
 Read Only
 OverrideUpdateDate
 DateTime
 Read Only
 OverrideUpdateUserID
 Integer
 Read Only
 IsShowCommentBanner
 Boolean
 IsDoNotAcceptPartialPayments
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 FlexibleRentStatus
 eFlexibleRentStatus
 EqualTo
 Read Only
 FlexibleRentInternalStatus
 eFlexibleRentInternalStatus
 EqualTo
 Read Only
 Contacts
 ContactModel
 Color
 ColorModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 LeasingAgent
 UserModel
 Property
 PropertyModel
 PrimaryContact
 (DEPRECATED) As of 10/5/2018
 replaced by Contacts
 ContactModel
 Required (create)
 UserDefinedValues
 UserDefinedValueModel
 Leases
 LeaseModel
 History
 HistoryModel
 HistoryWithUnitHistory
 (DEPRECATED) As of 1/7/2019
 HistoryModel
 HistoryCalls
 HistoryCallModel
 HistoryEmails
 HistoryEmailModel
 HistoryVisits
 HistoryVisitModel
 HistoryNotes
 HistoryNoteModel
 HistoryViolationNotes
 HistoryViolationNoteModel
 Transactions
 TransactionModelBase
 Charges
 ChargeModel
 Payments
 PaymentModel
 Credits
 CreditModel
 Checks
 (DEPRECATED) As of 3/22/2022
 replaced by TenantChecks
 CheckModel
 Bills
 (DEPRECATED) As of 3/22/2022
 replaced by TenantBills
 BillModel
 Addresses
 AddressModel
 Invoices
 InvoiceModel
 RecurringCharges
 RecurringChargeModel
 WebUserAccounts
 WebUserAccountModel
 Subsidies
 SubsidyModel
 ScreeningStatus
 String
 Read Only
, 
 Calculated Field
 Appointments
 AppointmentModel
 LateFees
 (DEPRECATED) As of 11/28/2018
 replaced by LateFeeSetup
 LateFeeModel
 LateFeeSetup
 LateFeeModel
 OpenReceivables
 OpenReceivableModel
 RecurringChargeSummaries
 RecurringChargeSummaryModel
 Screenings
 ScreeningModel
 SecurityDepositSummaries
 SecurityDepositSummaryModel
 Tasks
 TaskModel
 WebUsers
 WebUserModel
 PaymentReversals
 PaymentReversalModel
 SecurityDepositHeld
 Decimal
 Requires Embed (SecurityDepositHeld)
 Balance
 Decimal
 Requires Embed (Balance)
 OpenBalance
 Decimal
 Requires Embed (OpenBalance)
 Prospect
 ProspectModel
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryWebAccountNotes
 HistoryWebAccountNoteModel
 Pets
 PetModel
 Loans
 LoanModel
 Status
 eTenantStatus
 EqualTo
 ServiceManagerProjects
 ServiceManagerProjectModel
 SubsidyTenants
 SubsidyTenantModel
 RMVoIPCallHistory
 RMVoIPCallHistoryModel
 BillableExpenses
 BillableExpenseModel
 CashPayUser
 CashPayUserModel
 Violations
 ViolationModel
 RevenueRenewals
 RevenueRenewalModel
 Vehicles
 VehicleModel
 ShortTermReservations
 ShortTermReservationModel
 OverrideCreateUser
 UserModel
 OverrideUpdateUser
 UserModel
 TenantBills
 TenantBillModel
 TenantChecks
 TenantCheckModel
 CreditReversals
 CreditReversalModel
 AccountStatements
 AccountStatementModel
 OpenPrepays
 OpenPrepayModel
 IncomeVerifications
 IncomeVerificationModel
 EvictionID
 Int32
 EqualTo
 Read Only
 Evictions
 EvictionModel
 HistoryEvictionNotes
 HistoryEvictionNoteModel
 HistoryEviction
 HistoryEvictionModel
 TransferGroupID
 Int32
 EqualTo
 SourceCustomerID
 Int32
 EqualTo
 TransferDate
 DateTime
 LastNameFirstName
 String
 Read Only
, 
 Calculated Field
 TWAExpirationDate
 DateTime
 Read Only
 AccountGroupMasterTenantID
 Integer
 Read Only
, 
 Calculated Field
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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

---

## Terms

Terms
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 Terms Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Terms?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 TermFilterFields List
 Define this parameter in the request URI.
 embeds
 TermEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TermOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 TermGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TermModel
 Properties
 NameTypeOptimized FiltersAttributes
 TermID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 MonthDay
 Integer
 NetDays
 Integer
 NetMonths
 Integer
 IsActive
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TermID": 1,
 "Name": "sample string 2"
 }
]

---

## TextMessagingConversations

TextMessagingConv...
 Retrieve Collection
 ConversationHistory
 Search
 SendText
 Rent Manager Web API Reference
 TextMessagingConversations Retrieve Collection
 Gets a list of Text Message Conversations
 Request Information
 Url
 GET TextMessagingConversations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&pageSize={pageSize}&pageNumber={pageNumber}&ignorePaging={ignorePaging}
 Parameters
 NameTypeAdditional information
 filters
 TextMessageConversationFilterFields List
 Define this parameter in the request URI.
 embeds
 TextMessageConversationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TextMessageConversationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 ignorePaging
 Boolean
 Define this parameter in the request URI.
 Response Information
 Model
TextMessageConversationSummaryModel
 Properties
 NameTypeOptimized FiltersAttributes
 Messages
 TextMessageSummaryModel
 LastMessage
 TextMessageSummaryModel
 ExternalPhoneNumber
 String
 ParentType
 eTextMessageConversationType
 ParentID
 Integer
 LastTextDate
 DateTime
 Read Only
, 
 Calculated Field
, 
 Requires Embed (LastMessage)
 Tenant
 TenantModel
 Prospect
 ProspectModel
 Owner
 OwnerModel
 OwnerProspect
 OwnerProspectModel
 Vendor
 VendorModel
 User
 UserModel
 Property
 PropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ExternalPhoneNumber": "sample string 1",
 "ParentType": "Tenant",
 "ParentID": 2,
 "LastTextDate": "0001-01-01T00:00:00",
 "MetaTag": "sample string 4"
 }
]

---

## TextNumbers

TextNumbers
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 SyncPhoneNumbers
 TextNumberProperties
 Rent Manager Web API Reference
 TextNumbers Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TextNumbers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TextNumberFilterFields List
 Define this parameter in the request URI.
 embeds
 TextNumberEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TextNumberOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TextNumberModel
 Properties
 NameTypeOptimized FiltersAttributes
 TextNumberID
 Integer
 EqualTo
, 
 In
 Primary Key
, 
 Read Only
 TextNumber
 String
 Read Only
 IsForBroadcast
 Boolean
 EqualTo
 IsSystemDefault
 Boolean
 EqualTo
 IsActive
 Boolean
 EqualTo
 Read Only
 Name
 String
 Description
 String
 StrippedTextNumber
 String
 EqualTo
 Read Only
 IsAllProperties
 Boolean
 Read Only
, 
 Calculated Field
, 
 Requires Embed (TextNumberProperties)
 SortOrder
 Integer
 TextNumberProperties
 TextNumberPropertyModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TextNumberID": 1,
 "TextNumber": "sample string 2",
 "IsForBroadcast": true,
 "IsSystemDefault": true,
 "IsActive": true,
 "Name": "sample string 6",
 "Description": "sample string 7",
 "StrippedTextNumber": "sample string 8",
 "SortOrder": 9,
 "MetaTag": "sample string 11"
 }
]

---

## TextTemplateFolders

TextTemplateFolde...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 TextTemplates
 UpdateUser
 Rent Manager Web API Reference
 TextTemplateFolders Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TextTemplateFolders?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TextTemplateFolderFilterFields List
 Define this parameter in the request URI.
 embeds
 TextTemplateFolderEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TextTemplateFolderOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TextTemplateFolderModel
 Properties
 NameTypeOptimized FiltersAttributes
 TextTemplateFolderID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 TextTemplateType
 eTextTemplateType
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TextTemplates
 TextTemplateModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TextTemplateFolderID": 1,
 "Name": "sample string 2",
 "SortOrder": 3,
 "CreateDate": "2026-04-29T15:58:08.1552347-04:00",
 "CreateUserID": 5,
 "UpdateDate": "2026-04-29T15:58:08.1552347-04:00",
 "UpdateUserID": 7,
 "MetaTag": "sample string 10"
 }
]

---

## TextTemplates

TextTemplates
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 HistoryCategory
 QuickSearch
 Search
 TextTemplateFolder
 TextTemplateRoles
 TextTemplateUsers
 UpdateUser
 Rent Manager Web API Reference
 TextTemplates Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET TextTemplates?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 TextTemplateFilterFields List
 Define this parameter in the request URI.
 embeds
 TextTemplateEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 TextTemplateOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
TextTemplateModel
 Properties
 NameTypeOptimized FiltersAttributes
 TextTemplateID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 MessageText
 String
 TextTemplateType
 eTextTemplateType
 TextTemplateFolderID
 Integer
 EqualTo
 HistoryCategoryID
 Integer
 EqualTo
 SortOrder
 Integer
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 HistoryCategory
 HistoryCategoryModel
 TextTemplateFolder
 TextTemplateFolderModel
 TextTemplateUsers
 TextTemplateUserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 TextTemplateRoles
 TextTemplateRoleModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "TextTemplateID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "MessageText": "sample string 4",
 "TextTemplateFolderID": 5,
 "HistoryCategoryID": 6,
 "SortOrder": 7,
 "CreateDate": "2026-04-29T15:58:08.3090373-04:00",
 "CreateUserID": 9,
 "UpdateDate": "2026-04-29T15:58:08.3090373-04:00",
 "UpdateUserID": 11,
 "MetaTag": "sample string 14"
 }
]

---

## UnitAmenities

UnitAmenities
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Amenity
 GetByPost
 QuickSearch
 Search
 Unit
 Rent Manager Web API Reference
 UnitAmenities Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UnitAmenities?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UnitAmenityFilterFields List
 Define this parameter in the request URI.
 embeds
 UnitAmenityEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UnitAmenityOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UnitAmenityModel
 Properties
 NameTypeOptimized FiltersAttributes
 UnitAmenityID
 Integer
 EqualTo
 Primary Key
 UnitID
 Integer
 EqualTo
, 
 In
 AmenityID
 Integer
 EqualTo
 Amenity
 AmenityModel
 Unit
 UnitModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UnitAmenityID": 1,
 "UnitID": 2,
 "AmenityID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## UnitStatusTypes

UnitStatusTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 UnitStatusTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UnitStatusTypes?filters={filters}&embeds={embeds}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 UnitStatusTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 UnitStatusTypeEmbedOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 UnitStatusTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UnitStatusTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 UnitStatusTypeID
 Integer
 Primary Key
 Name
 String
 Description
 String
 IsAvailable
 Boolean
 IsVacant
 Boolean
 IsSystem
 Boolean
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UnitStatusTypeID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3"
 }
]

---

## UnitTypes

UnitTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 Images
 ImageTypes
 InspectionTemplate
 LinkProperties
 Properties
 QuickSearch
 RecurringCharges
 RecurringChargeSummaries
 SaveRecurringChargeSortOrders
 Search
 Units
 UnitTypeProperties
 UnLinkProperties
 UploadImage
 Rent Manager Web API Reference
 UnitTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UnitTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 UnitTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 UnitTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UnitTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 UnitTypeGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UnitTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 UnitTypeID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Comment
 String
 EqualTo
 Bedrooms
 Integer
 EqualTo
 Bathrooms
 Decimal
 EqualTo
 InspectionTemplateID
 Int32
 EqualTo
 IsExcludeFromRentersInsurance
 Boolean
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 RecurringCharges
 RecurringChargeModel
 RecurringChargeSummaries
 RecurringChargeSummaryModel
 Properties
 PropertyModel
 UnitTypeProperties
 UnitTypePropertyModel
 Units
 UnitModel
 Images
 ImageModel
 IsOtherRentableItem
 Boolean
 EqualTo
 InspectionTemplate
 InspectionTemplateModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UnitTypeID": 1,
 "Name": "sample string 2"
 }
]

---

## Units

Units
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 AddressTypes
 Amenities
 AssetLocationHistory
 Assets
 AssignMakeReadyProcess
 Availability
 ClosedServiceManagerIssues
 Color
 ConvertUnitToAsset
 CreateUser
 CurrentAssetLocation
 CurrentMarketRent
 CurrentOccupancyStatus
 CurrentOccupant
 CurrentOccupants
 CurrentUnitStatus
 DownloadImage
 FinancialAsset
 FinanciallyTrackableUnits
 Floor
 GetByPost
 GetUnitLicenseCountRequirementForConversion
 GetUnitLicenseCountRequirementForConversionByLocation
 History
 HistoryNotes
 HistorySystemNotes
 Images
 ImageTypes
 Leases
 MarketingData
 MarketingSetup
 MarketingValues
 MarketRent
 MITSMarketingSetup
 MITSMarketingValues
 Occupancy
 OccupancyStatusHistory
 OccupancySummary
 OnlineListings
 OpenViolations
 OwnerContracts
 Owners
 PrimaryAddress
 Property
 QuickSearch
 RecurringCharges
 RecurringChargeSummaries
 RentQuotes
 RevenuePricing
 SaveRecurringChargeSortOrders
 Search
 ServiceManagerIssues
 SiteGroup
 SiteTypeUnitTypes
 TestScript
 UnitAmenities
 UnitDefaultSecurityDeposits
 UnitLicenseHistory
 UnitProhibitedRVTypes
 UnitStatuses
 UnitType
 UpdateUser
 UploadImage
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 UtilityMeterReadings
 Violations
 Rent Manager Web API Reference
 Units Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Units?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 UnitFilterFields List
 Define this parameter in the request URI.
 embeds
 UnitEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UnitOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 UnitGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UnitModel
 Properties
 NameTypeOptimized FiltersAttributes
 UnitID
 Integer
 EqualTo
, 
 In
, 
 NotIn
 Primary Key
, 
 Read Only
 PropertyID
 Integer
 EqualTo
, 
 In
 Name
 String
 EqualTo
 Comment
 String
 UnitTypeID
 Int32
 EqualTo
 SquareFootage
 Integer
 EqualTo
 FloorID
 Int32
 EqualTo
 MaxOccupancy
 Integer
 Bedrooms
 Integer
 EqualTo
 Bathrooms
 Decimal
 EqualTo
 Length
 Decimal
 Width
 Decimal
 Amps
 eRVAmp
 IsPullThrough
 Boolean
 SortOrder
 Integer
 Read Only
 IsLicensed
 Boolean
 Read Only
 Property
 PropertyModel
 Read Only
 InspectionTemplateID
 Int32
 EqualTo
 CreateDate
 DateTime
 Read Only
 CreateUserID
 Integer
 EqualTo
 Read Only
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 Read Only
 ColorID
 Int32
 SiteGroupID
 Integer
 SupportedRVSlideOut
 eSupportedRVSlideOuts
 Color
 ColorModel
 UserDefinedValues
 UserDefinedValueModel
 History
 HistoryModel
 Addresses
 AddressModel
 PrimaryAddress
 AddressModel
 CurrentUnitStatus
 UnitStatusModel
 Requires Embed (UnitStatuses)
 UnitStatuses
 UnitStatusModel
 Amenities
 CrossUnitAmenityModel
 IsAsset
 Boolean
 Read Only
 CurrentMarketRent
 MarketRentModel
 Requires Embed (CurrentMarketRent)
 MarketRent
 MarketRentModel
 Read Only
 STRMarketingDescription
 String
 Images
 ImageModel
 Leases
 LeaseModel
 CurrentOccupants
 TenantModel
 UnitType
 UnitTypeModel
 Floor
 FloorModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MarketingData
 MarketingDataModel
 FeedTypeID
 eOnlineListingFeedType
 Read Only
 LastSuccessfulOnlineListingsPosting
 DateTime
 Read Only
 Assets
 CrossUnitAssetModel
 RecurringCharges
 RecurringChargeModel
 RecurringChargeSummaries
 RecurringChargeSummaryModel
 UnitDefaultSecurityDeposits
 UnitDefaultSecurityDepositModel
 UnitAmenities
 UnitAmenityModel
 OnlineListingsUsage
 eOnlineListingsUsage
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryNotes
 HistoryNoteModel
 FinancialAsset
 AssetModel
 MarketingValues
 MarketingValueModel
 MarketingSetup
 MarketingSetupModel
 OccupancyStatusHistory
 OccupancyStatusModel
 CurrentOccupancyStatus
 OccupancyStatusModel
 IsVacant
 Boolean
 Requires Embed (IsVacant)
 CurrentAssetLocation
 AssetLocationHistoryModel
 Requires Embed (AssetLocationHistory)
 AssetLocationHistory
 AssetLocationHistoryModel
 UnitLicenseHistory
 UnitLicenseHistoryModel
 UtilityMeterReadings
 UtilityMeterReadingModel
 Violations
 ViolationModel
 OpenViolations
 ViolationModel
 RevenuePricing
 RevenuePricingModel
 SiteGroup
 SiteGroupModel
 UnitProhibitedRVTypes
 UnitProhibitedRVTypeModel
 SiteTypeUnitTypes
 SiteTypeUnitTypeModel
 InspectionTemplate
 InspectionTemplateModel
 GeoLocationCode
 GeoLocationCodeModel
 RentQuotes
 RentQuoteModel
 ServiceManagerIssues
 ServiceManagerIssueModel
 ClosedServiceManagerIssues
 ServiceManagerIssueModel
 SiteClassification
 SiteClassificationModel
 SiteClassificationHistories
 SiteClassificationHistoryModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UnitID": 1,
 "PropertyID": 2,
 "Name": "sample string 3",
 "SortOrder": 12
 }
]

---

## UserDefinedFields

UserDefinedFields
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 DecryptedUserDefinedValue
 DefaultAttachment
 GetByPost
 OwnerProspectUserDefinedFieldLink
 ProspectUserDefinedFieldLink
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 UserDefinedFields Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UserDefinedFields?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 UserDefinedFieldFilterFields List
 Define this parameter in the request URI.
 embeds
 UserDefinedFieldEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UserDefinedFieldOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 UserDefinedFieldGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UserDefinedFieldModel
 Properties
 NameTypeOptimized FiltersAttributes
 UserDefinedFieldID
 Integer
 EqualTo
, 
 NotEqualTo
, 
 In
 Primary Key
 SortOrder
 Integer
 Name
 String
 EqualTo
 IsRequired
 Boolean
 FieldType
 eUserDefinedFieldType
 EqualTo
 ComboList
 String
 PrecisionValue
 Integer
 DefaultValue
 String
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 DefaultAttachmentID
 Integer
 DefaultAttachment
 FileModel
 ParentType
 eUserDefinedFieldRelatedObjectTypes
 EqualTo
 Read Only
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ProspectUserDefinedFieldLink
 ProspectUserDefinedFieldLinkModel
 OwnerProspectUserDefinedFieldLink
 OwnerProspectUserDefinedFieldLinkModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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

---

## Users

Users
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AddressBookDetails
 AddUser
 Banks
 ChangePassword
 CheckAndReturnPasswordRules
 CreateUser
 CreditCards
 CurrentUser
 EmailSignature
 EmailSignatures
 GetByPost
 Image
 LetterTemplates
 Locations
 MergeUsers
 PhoneNumbers
 PhoneNumberTypes
 Preferences
 Privileges
 Properties
 PropertyGroups
 PushToLocations
 PushUserPrivilegesToLocations
 QuickSearch
 Reports
 Roles
 Search
 SignablePDFTemplateUsers
 Supervisor
 Tasks
 TaskUser
 UpdateUser
 UploadUserDefinedValueAttachment
 UserBanks
 UserDefinedFields
 UserDefinedValues
 UserLocations
 UserPrivileges
 UserProperties
 UserPropertyGroups
 UserReports
 UserRoles
 UserTasks
 Rent Manager Web API Reference
 Users Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Users?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UserFilterFields List
 Define this parameter in the request URI.
 embeds
 UserEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UserOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UserModel
 User Model
 Properties
 NameTypeOptimized FiltersAttributes
 UserID
 Integer
 In
, 
 EqualTo
 Primary Key
 MainLocationUserID
 Integer
 EqualTo
 Username
 String
 EqualTo
 Lastname
 String
 EqualTo
 Firstname
 String
 UserTitle
 String
 Name
 String
 Read Only
, 
 Calculated Field
 IsActive
 Boolean
 IsAdmin
 Boolean
 IsStrongPassword
 Boolean
 IsPasswordReset
 Boolean
 TabGroup
 Integer
 CustomFormUserGroupID
 Integer
 EqualTo
 CustomToolbarGroupID
 Integer
 EqualTo
 IsToolbarSearch
 Boolean
 ToolbarSize
 Integer
 ToolbarText
 Integer
 Email
 String
 IsLeasingAgent
 Boolean
 IsSalesRepresentative
 Boolean
 IsOwnerSalesRepresentative
 Boolean
 IsInspector
 Boolean
 HasMobileRentManagerAccess
 Boolean
 HasSiteManagerAccess
 Boolean
 IsRmServiceUser
 Boolean
 HasAPIAccess
 Boolean
 LastWebLoginDate
 DateTime
 LockoutDate
 DateTime
 LastPasswordChangeDate
 DateTime
 IsPhoneSystemUser
 Boolean
 PhoneSystemExtension
 String
 EqualTo
 SupervisorID
 Integer
 EqualTo
 IsReadOnly
 Boolean
 IsOverrideTimeZone
 Boolean
 IsTimeZoneEnabled
 Boolean
 TimeZoneOffset
 Integer
 IsTimeZoneDaylightSavingsTime
 Boolean
 IsGroup
 Boolean
 IsPartnerUser
 Boolean
 IsPartnerAuthorized
 Boolean
 EqualTo
 IsLocked
 Boolean
 Read Only
 LastPartnerProfileRefreshDate
 DateTime
 EqualTo
 PartnerID
 Integer
 EqualTo
 PartnerToken
 Guid
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 DefaultLocationID
 Integer
 EqualTo
 Supervisor
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PhoneNumbers
 PhoneNumberModel
 Properties
 PropertyModel
 UserProperties
 UserPropertyModel
 PropertyGroups
 PropertyGroupModel
 Banks
 BankModel
 CreditCards
 CreditCardModel
 Locations
 SelectListItemModel
 UserReports
 UserReportModel
 UserPropertyGroups
 UserPropertyGroupModel
 UserRoles
 UserRoleModel
 UserPrivileges
 UserPrivilegeModel
 EffectivePrivileges
 EffectiveUserPrivilegeModel
 UserBanks
 UserBankModel
 TaskUsers
 (DEPRECATED) As of 5/14/2019
 replaced by UserTasks
 TaskUserModel
 UserTasks
 TaskUserModel
 UserDefinedValues
 UserDefinedValueModel
 UserLocations
 UserLocationModel
 CustomProductUserPreferences
 (DEPRECATED) As of 9/23/2021
 CustomProductUserPreferenceModel
 LetterTemplates
 UserLetterTemplateModel
 MaintenanceTech
 MaintenanceTechModel
 Image
 ImageModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
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

---

## Utilities

Utilities
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 AddressTypes
 ChargeType
 CreateUser
 GetByPost
 MasterMeters
 PhoneNumbers
 PhoneNumberTypes
 PostUtilities
 Properties
 QuickSearch
 ReadingSourceUtility
 Search
 UpdateUser
 UtilityProperties
 Rent Manager Web API Reference
 Utilities Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Utilities?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityModel
 Utility Model
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityID
 Integer
 EqualTo
, 
 In
, 
 NotIn
 Primary Key
 Name
 String
 ContactName
 String
 ContactEmail
 String
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 DefaultExpenseAccountGLAccountID
 Integer
 EqualTo
 DefaultExpenseAccountGLAccount
 GLAccountModel
 DefaultVendorID
 Integer
 EqualTo
 DefaultVendor
 VendorModel
 ChargeTypeID
 Integer
 EqualTo
, 
 In
 ChargeType
 ChargeTypeModel
 ReadingSourceUtilityID
 Integer
 EqualTo
, 
 In
 ReadingSourceUtility
 UtilityModel
 Comment
 String
 Addresses
 AddressModel
 PhoneNumbers
 PhoneNumberModel
 Properties
 (DEPRECATED) As of 1/14/2019
 PropertyModel
 UtilityProperties
 UtilityPropertyModel
 MasterMeters
 MasterMeterModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityID": 1,
 "Name": "sample string 2"
 }
]

---

## UtilitiesAutomationSchedules

UtilitiesAutomati...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 PropertyGroup
 QuickSearch
 Search
 UpdateUser
 UtilitiesAutomationScheduleProperties
 UtilitiesAutomationScheduleUtilities
 Rent Manager Web API Reference
 UtilitiesAutomationSchedules Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilitiesAutomationSchedules?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilitiesAutomationScheduleFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilitiesAutomationScheduleEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilitiesAutomationScheduleOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilitiesAutomationScheduleModel
 Utilities Automation Schedule Model
 Properties
 NameTypeOptimized FiltersAttributes
 UtilitiesAutomationScheduleID
 Integer
 EqualTo
 Primary Key
 Name
 String
 IsActive
 Boolean
 StartDate
 DateTime
 EndDate
 DateTime
 RunDay
 Integer
 PostingDay
 Integer
 NotificationEmail
 String
 IncludeDetails
 Boolean
 CreateDate
 DateTime
 UpdateDate
 DateTime
 IsUseCurrentReadingDay
 Boolean
 IsPostZeroCharges
 Boolean
 IsCreateInvoices
 Boolean
 InvoiceComment
 String
 CRESetupCapOverages
 eCRESetupCapOverages
 TransactionMemo
 String
 PropertyGroupID
 Integer
 LastRunDate
 DateTime
 Read Only
 NextRunDate
 DateTime
 Read Only
 CreateUserID
 Integer
 UpdateUserID
 Integer
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PropertyGroup
 PropertyGroupModel
 UtilitiesAutomationScheduleProperties
 UtilitiesAutomationSchedulePropertyModel
 Required (create)
 UtilitiesAutomationScheduleUtilities
 UtilitiesAutomationScheduleUtilityModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilitiesAutomationScheduleID": 1,
 "Name": "sample string 2",
 "IsActive": true,
 "StartDate": "2026-04-29T15:58:09.5902213-04:00",
 "EndDate": "2026-04-29T15:58:09.5902213-04:00",
 "RunDay": 6,
 "PostingDay": 7,
 "NotificationEmail": "sample string 8",
 "IncludeDetails": true,
 "CreateDate": "2026-04-29T15:58:09.5902213-04:00",
 "UpdateDate": "2026-04-29T15:58:09.5902213-04:00",
 "IsUseCurrentReadingDay": true,
 "IsPostZeroCharges": true,
 "IsCreateInvoices": true,
 "InvoiceComment": "sample string 15",
 "TransactionMemo": "sample string 16",
 "PropertyGroupID": 17,
 "LastRunDate": "2026-04-29T15:58:09.5902213-04:00",
 "NextRunDate": "2026-04-29T15:58:09.5902213-04:00",
 "CreateUserID": 19,
 "UpdateUserID": 20,
 "ConcurrencyID": 21,
 "MetaTag": "sample string 23"
 }
]

---

## UtilityConsumptionGroupMeterTypes

UtilityConsumptio...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 UtilityConsumptionGroup
 UtilityMeter
 Rent Manager Web API Reference
 UtilityConsumptionGroupMeterTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityConsumptionGroupMeterTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityConsumptionGroupMeterTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityConsumptionGroupMeterTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityConsumptionGroupMeterTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityConsumptionGroupMeterTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityConsumptionGroupMeterTypeID
 Integer
 EqualTo
 Primary Key
 UtilityConsumptionGroupID
 Integer
 EqualTo
 UtilityMeterID
 Integer
 EqualTo
 UtilityConsumptionGroup
 UtilityConsumptionGroupModel
 UtilityMeter
 UtilityMeterModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityConsumptionGroupMeterTypeID": 1,
 "UtilityConsumptionGroupID": 2,
 "UtilityMeterID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## UtilityConsumptionGroupRanges

UtilityConsumptio...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 UtilityConsumptionGroup
 Rent Manager Web API Reference
 UtilityConsumptionGroupRanges Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityConsumptionGroupRanges?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityConsumptionGroupRangeFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityConsumptionGroupRangeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityConsumptionGroupRangeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityConsumptionGroupRangeModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityConsumptionGroupRangeID
 Integer
 EqualTo
 Primary Key
 UtilityConsumptionGroupID
 Integer
 EqualTo
 Name
 String
 LowValue
 Integer
 HighValue
 Integer
 ExpressThemeColorID
 Integer
 HexValue
 String
 IsException
 Boolean
 ExceptionDescription
 String
 IsRequireExceptionImage
 Boolean
 IsRequireExceptionComment
 Boolean
 ConsumptionUnitStatus
 Integer
 IsZeroConsumption
 Boolean
 IsNegativeConsumption
 Boolean
 UtilityConsumptionGroup
 UtilityConsumptionGroupModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityConsumptionGroupRangeID": 1,
 "UtilityConsumptionGroupID": 2,
 "Name": "sample string 3",
 "LowValue": 4,
 "HighValue": 5,
 "ExpressThemeColorID": 6,
 "HexValue": "sample string 7",
 "IsException": true,
 "ExceptionDescription": "sample string 9",
 "IsRequireExceptionImage": true,
 "IsRequireExceptionComment": true,
 "ConsumptionUnitStatus": 12,
 "IsZeroConsumption": true,
 "IsNegativeConsumption": true,
 "MetaTag": "sample string 16"
 }
]

---

## UtilityConsumptionGroups

UtilityConsumptio...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 UtilityType
 UtilityUnitOfMeasure
 Rent Manager Web API Reference
 UtilityConsumptionGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityConsumptionGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityConsumptionGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityConsumptionGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityConsumptionGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityConsumptionGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityConsumptionGroupID
 Integer
 EqualTo
 Primary Key
 Name
 String
 UtilityTypeID
 Integer
 EqualTo
 ConsumptionRangeUoM
 Integer
 EqualTo
 IsVacantOccupiedSplit
 Boolean
 IsShowNegativeConsumption
 Boolean
 IsShowZeroConsumption
 Boolean
 UtilityType
 UtilityTypeModel
 UtilityUnitOfMeasure
 UtilityUnitOfMeasureModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityConsumptionGroupID": 1,
 "Name": "sample string 2",
 "UtilityTypeID": 3,
 "ConsumptionRangeUoM": 4,
 "IsVacantOccupiedSplit": true,
 "IsShowNegativeConsumption": true,
 "IsShowZeroConsumption": true,
 "MetaTag": "sample string 9"
 }
]

---

## UtilityMeterLinkedReadings

UtilityMeterLinke...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 UtilityMeterReading
 UtilityReadingFileMap
 Rent Manager Web API Reference
 UtilityMeterLinkedReadings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityMeterLinkedReadings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityMeterLinkedReadingFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityMeterLinkedReadingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityMeterLinkedReadingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityMeterLinkedReadingModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityMeterLinkedReadingID
 Integer
 EqualTo
 Primary Key
 UtilityReadingID
 Integer
 EqualTo
 IsUseDefaultMeterType
 Boolean
 MeterNumber
 String
 IsLowIncome
 Boolean
 ClassCode
 String
 CurrentReading
 Decimal
 CurrentReadingDate
 DateTime
 PreviousReading
 Decimal
 PreviousReadingDate
 DateTime
 RZone
 String
 ReadingType
 Integer
 UtilityReadingFileMapID
 Integer
 EqualTo
 ReadingUoM
 Integer
 EqualTo
 IsPending
 Boolean
 ReadingDueDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 UtilityReadingFileMap
 UtilityReadingFileMapModel
 UtilityReading
 UtilityMeterReadingModel
 UtilityUnitOfMeasure
 UtilityUnitOfMeasureModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityMeterLinkedReadingID": 1,
 "UtilityReadingID": 2,
 "IsUseDefaultMeterType": true,
 "MeterNumber": "sample string 4",
 "IsLowIncome": true,
 "ClassCode": "sample string 6",
 "CurrentReading": 1.0,
 "CurrentReadingDate": "2026-04-29T15:58:10.2151871-04:00",
 "PreviousReading": 1.0,
 "PreviousReadingDate": "2026-04-29T15:58:10.2151871-04:00",
 "RZone": "sample string 9",
 "ReadingType": 10,
 "UtilityReadingFileMapID": 11,
 "ReadingUoM": 12,
 "IsPending": true,
 "ReadingDueDate": "2026-04-29T15:58:10.2151871-04:00",
 "CreateUserID": 15,
 "CreateDate": "2026-04-29T15:58:10.2151871-04:00",
 "UpdateUserID": 17,
 "UpdateDate": "2026-04-29T15:58:10.2151871-04:00",
 "ConcurrencyID": 19,
 "MetaTag": "sample string 21"
 }
]

---

## UtilityMeterReadingHistory

UtilityMeterReadi...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Count
 CreateUser
 GetByPost
 GetLastPosting
 MeterType
 Property
 QuickSearch
 Search
 ServiceManagerIssue
 Unit
 UpdateUser
 Utility
 Rent Manager Web API Reference
 UtilityMeterReadingHistory Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityMeterReadingHistory?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityMeterReadingHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityMeterReadingHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityMeterReadingHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityMeterReadingHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityMeterReadingHistoryID
 Integer
 EqualTo
, 
 In
 Primary Key
 UtilityID
 Integer
 EqualTo
 Utility
 UtilityModel
 MeterNumber
 String
 EqualTo
, 
 In
, 
 HasValue
 Route
 Integer
 PropertyID
 Integer
 EqualTo
, 
 In
 Property
 PropertyModel
 UnitID
 Integer
 EqualTo
 Unit
 UnitModel
 MeterTypeID
 Integer
 EqualTo
 MeterType
 MeterTypeModel
 IsLowIncome
 Boolean
 ClassCode
 String
 CurrentReading
 Decimal
 CurrentReadingDate
 DateTime
 PreviousReading
 Decimal
 PreviousReadingDate
 DateTime
 Consumption
 Decimal
 AdjustedConsumption
 Decimal
 ChargeAmount
 Decimal
 PostDate
 DateTime
 AccountID
 Integer
 EqualTo
 Account
 AccountModel
 ChargeID
 Integer
 EqualTo
 PostingID
 Integer
 EqualTo
 RZone
 String
 Other
 String
 Other2
 String
 Other3
 String
 Other4
 String
 Other5
 String
 Comments
 String
 ReadingType
 eUtilityReadingsTypes
 Read Only
 ServiceManagerIssueID
 Integer
 EqualTo
 UtilityReadingFileMapID
 Integer
 EqualTo
 ExceptionReason
 String
 ApprovalStatus
 eMeterApprovalStatus
 ConditionalApproverNote
 String
 FinalApproverNote
 String
 ReviewerUserID
 Integer
 EqualTo
 ConditionalApproverUserID
 Integer
 EqualTo
 FinalApproverUserID
 Integer
 EqualTo
 ConsumptionRange
 String
 ConsumptionRangeThemeColorID
 Integer
 ConsumptionRangeHex
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityMeterReadingHistoryID": 1,
 "UtilityID": 2,
 "MeterNumber": "sample string 3"
 }
]

---

## UtilityMeterReadings

UtilityMeterReadi...
 Retrieve Collection
 Retrieve Instance
 Save
 Save
 BeginMeterSwap
 CancelMeterSwap
 CreateUser
 EstimateMeterReading
 EstimateMeterReadingManually
 GetByPost
 GetMeterEstimates
 MeterType
 OffCycleMoveInReading
 OffCycleMoveOutReading
 Property
 QuickSearch
 Search
 ServiceManagerIssue
 Unit
 UpdateUser
 Utility
 Rent Manager Web API Reference
 UtilityMeterReadings Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityMeterReadings?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 UtilityMeterReadingFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityMeterReadingEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityMeterReadingOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 UtilityMeterReadingGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityMeterReadingModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityMeterReadingID
 Integer
 EqualTo
, 
 NotIn
 Primary Key
 UtilityID
 Integer
 EqualTo
 MeterTypeID
 Integer
 EqualTo
 UseDefaultMeterType
 Boolean
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 MeterNumber
 String
 EqualTo
 Route
 Integer
 IsLowIncome
 Boolean
 ClassCode
 String
 CurrentReading
 Decimal
 CurrentReadingDate
 DateTime
 PreviousReading
 Decimal
 PreviousReadingDate
 DateTime
 BillingMonth
 eMonth
 EqualTo
 BillingYear
 Integer
 EqualTo
 RZone
 String
 Other
 String
 Other2
 String
 Other3
 String
 Other4
 String
 Other5
 String
 Comments
 String
 ReadingType
 eUtilityReadingsTypes
 Read Only
 UtilityReadingFileMapID
 Integer
 EqualTo
 ReadingUoM
 Integer
 ServiceManagerIssueID
 Integer
 EqualTo
 IsPending
 Boolean
 ReadingDueDate
 DateTime
 ExceptionReasonID
 Integer
 EqualTo
 ApprovalStatus
 eMeterApprovalStatus
 ConditionalApproverNote
 String
 FinalApproverNote
 String
 ReviewerUserID
 Integer
 EqualTo
 ConditionalApproverUserID
 Integer
 EqualTo
 FinalApproverUserID
 Integer
 EqualTo
 ConsumptionRange
 String
 ConsumptionRangeThemeColorID
 Integer
 ConsumptionRangeHex
 String
 CreateDate
 DateTime
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUserID
 Integer
 EqualTo
 UpdateUser
 UserModel
 Property
 PropertyModel
 Unit
 UnitModel
 Utility
 UtilityModel
 MeterType
 MeterTypeModel
 UtilityReadingFileMap
 UtilityReadingFileMapModel
 NormalizedRanges
 UtilityConsumptionGroupNormalizedRangeModel
 ServiceManagerIssue
 ServiceManagerIssueModel
 UtilityMeterLinkedReadings
 UtilityMeterLinkedReadingModel
 ExceptionReason
 MeterExceptionReasonModel
 ReviewerUser
 UserModel
 ConditionalApproverUser
 UserModel
 FinalApproverUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityMeterReadingID": 1,
 "UtilityID": 2,
 "MeterTypeID": 3,
 "UseDefaultMeterType": true,
 "PropertyID": 5,
 "UnitID": 6,
 "MeterNumber": "sample string 7",
 "Route": 8,
 "IsLowIncome": true,
 "ClassCode": "sample string 10",
 "CurrentReading": 1.0,
 "CurrentReadingDate": "2026-04-29T15:58:10.6315277-04:00",
 "PreviousReading": 1.0,
 "PreviousReadingDate": "2026-04-29T15:58:10.6315277-04:00",
 "BillingYear": 13,
 "RZone": "sample string 14",
 "Other": "sample string 15",
 "Other2": "sample string 16",
 "Other3": "sample string 17",
 "Other4": "sample string 18",
 "Other5": "sample string 19",
 "Comments": "sample string 20",
 "UtilityReadingFileMapID": 21,
 "ReadingUoM": 22,
 "ServiceManagerIssueID": 23,
 "IsPending": true,
 "ReadingDueDate": "2026-04-29T15:58:10.6315277-04:00",
 "ExceptionReasonID": 26,
 "ConditionalApproverNote": "sample string 27",
 "FinalApproverNote": "sample string 28",
 "ReviewerUserID": 29,
 "ConditionalApproverUserID": 30,
 "FinalApproverUserID": 31,
 "ConsumptionRange": "sample string 32",
 "ConsumptionRangeThemeColorID": 33,
 "ConsumptionRangeHex": "sample string 34",
 "CreateDate": "2026-04-29T15:58:10.6315277-04:00",
 "UpdateDate": "2026-04-29T15:58:10.6315277-04:00",
 "ConcurrencyID": 37,
 "CreateUserID": 38,
 "UpdateUserID": 39,
 "MetaTag": "sample string 41"
 }
]

---

## UtilityMeters

UtilityMeters
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 NormalizedConsumptionGroupRanges
 QuickSearch
 Search
 UpdateUser
 Rent Manager Web API Reference
 UtilityMeters Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityMeters?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityMeterFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityMeterEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityMeterOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityMeterModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityMeterID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 ShortName
 String
 EqualTo
 IsUtilityMeterPlus
 Boolean
 MinimumCharge
 Decimal
 FlatFee
 Decimal
 IsPerDay
 Boolean
 IsGraduated
 Boolean
 ConversionFormula
 String
 IsRangeEqual
 Boolean
 BaseRate
 Decimal
 BaseLine
 Decimal
 ExcessRate
 Decimal
 StatementPosition
 String
 Comments
 String
 UtilityTypeID
 Integer
 EqualTo
 DefaultUoM
 Integer
 BillingUoM
 Integer
 IsAutoConvertMeterUoMToBillingUoM
 Boolean
 ConcurrencyID
 Integer
 Concurrency Key
 CreateDate
 DateTime
 UpdateDate
 DateTime
 CreateUserID
 Integer
 CreateUser
 UserModel
 UpdateUserID
 Integer
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityMeterID": 1,
 "Name": "sample string 2",
 "ShortName": "sample string 3",
 "IsUtilityMeterPlus": true,
 "MinimumCharge": 5.0,
 "FlatFee": 6.0,
 "IsPerDay": true,
 "IsGraduated": true,
 "ConversionFormula": "sample string 9",
 "IsRangeEqual": true,
 "BaseRate": 11.0,
 "BaseLine": 12.0,
 "ExcessRate": 13.0,
 "StatementPosition": "sample string 14",
 "Comments": "sample string 15",
 "UtilityTypeID": 16,
 "DefaultUoM": 17,
 "BillingUoM": 18,
 "IsAutoConvertMeterUoMToBillingUoM": true,
 "CreateDate": "2026-04-29T15:58:10.920836-04:00",
 "UpdateDate": "2026-04-29T15:58:10.920836-04:00",
 "CreateUserID": 23,
 "UpdateUserID": 24,
 "MetaTag": "sample string 26"
 }
]

---

## UtilityReadingFileMapFiles

UtilityReadingFil...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 File
 GetByPost
 QuickSearch
 Search
 UtilityReadingFileMap
 Rent Manager Web API Reference
 UtilityReadingFileMapFiles Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityReadingFileMapFiles?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityReadingFileMapFileFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityReadingFileMapFileEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityReadingFileMapFileOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityReadingFileMapFileModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityReadingFileMapFileID
 Integer
 EqualTo
 Primary Key
 UtilityReadingFileMapID
 Integer
 EqualTo
 FileID
 Integer
 EqualTo
 File
 FileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityReadingFileMapFileID": 1,
 "UtilityReadingFileMapID": 2,
 "FileID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## UtilityReadingFileMaps

UtilityReadingFil...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Files
 GetByPost
 QuickSearch
 Search
 UtilityConsumptionGroupRange
 UtilityMeter
 Rent Manager Web API Reference
 UtilityReadingFileMaps Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityReadingFileMaps?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityReadingFileMapFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityReadingFileMapEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityReadingFileMapOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityReadingFileMapModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityReadingFileMapID
 Integer
 EqualTo
 Primary Key
 UtilityMeterID
 Integer
 EqualTo
 UtilityConsumptionGroupRangeID
 Integer
 EqualTo
 UtilityMeter
 UtilityMeterModel
 UtilityConsumptionGroupRange
 UtilityConsumptionGroupRangeModel
 UtilityReadingFileMapFiles
 UtilityReadingFileMapFileModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityReadingFileMapID": 1,
 "UtilityMeterID": 2,
 "UtilityConsumptionGroupRangeID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## UtilityReadingsFileFormats

UtilityReadingsFi...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 UtilityReadingsFileFormatFields
 Rent Manager Web API Reference
 UtilityReadingsFileFormats Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityReadingsFileFormats?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityReadingsFileFormatFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityReadingsFileFormatEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityReadingsFileFormatOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityReadingsFileFormatModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityReadingsFileFormatID
 Integer
 EqualTo
 Primary Key
 CreateUserID
 Integer
 EqualTo
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 Name
 String
 IsExcludeFirstLine
 Boolean
 IsFixedLengthField
 Boolean
 FixedLengthRecordTerminator
 Integer
 RecordLength
 Integer
 FieldDelimiter
 Integer
 TextQualifier
 Integer
 CreateDate
 DateTime
 UpdateDate
 DateTime
 UtilityReadingsFileFormatFields
 UtilityReadingsFileFormatFieldModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityReadingsFileFormatID": 1,
 "CreateUserID": 2,
 "UpdateUserID": 3,
 "ConcurrencyID": 4,
 "Name": "sample string 5",
 "IsExcludeFirstLine": true,
 "IsFixedLengthField": true,
 "FixedLengthRecordTerminator": 8,
 "RecordLength": 9,
 "FieldDelimiter": 10,
 "TextQualifier": 11,
 "CreateDate": "2026-04-29T15:58:11.3658608-04:00",
 "UpdateDate": "2026-04-29T15:58:11.3658608-04:00",
 "MetaTag": "sample string 15"
 }
]

---

## UtilityReadingsHistories

UtilityReadingsHi...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Account
 Charge
 CreateUser
 GetByPost
 Posting
 Property
 QuickSearch
 Search
 Unit
 UpdateUser
 Utility
 UtilityMeter
 UtilityReadingFileMap
 UtilityUnitOfMeasureBilling
 UtilityUnitOfMeasureReading
 Rent Manager Web API Reference
 UtilityReadingsHistories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityReadingsHistories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityReadingsHistoryFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityReadingsHistoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityReadingsHistoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityReadingsHistoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityReadingsHistoryID
 Integer
 EqualTo
 Primary Key
 UtilityID
 Integer
 EqualTo
 MeterNumber
 String
 EqualTo
 Route
 Integer
 EntityID
 Integer
 EqualTo
 UtilityMeterID
 Integer
 EqualTo
 UtilityReadingFileMapID
 Integer
 EqualTo
 ReadingUoM
 Integer
 EqualTo
 BillingUoM
 Integer
 EqualTo
 IsLowIncome
 Boolean
 ClassCode
 String
 CurrentReading
 Decimal
 CurrentReadingDate
 DateTime
 PreviousReading
 Decimal
 PreviousReadingDate
 DateTime
 BillingMonth
 eMonth
 EqualTo
 BillingYear
 Integer
 EqualTo
 Consumption
 Decimal
 AdjustedConsumption
 Decimal
 ChargeAmount
 Decimal
 PostDate
 DateTime
 AccountID
 Integer
 EqualTo
 ChargeID
 Integer
 EqualTo
 PostingID
 Integer
 EqualTo
 RZone
 String
 Other
 String
 Other2
 String
 Other3
 String
 Other4
 String
 Other5
 String
 Comments
 String
 SubEntityID
 Integer
 EqualTo
 ExceptionReason
 String
 ApprovalStatus
 eMeterApprovalStatus
 ReviewerUserID
 Integer
 EqualTo
 ConditionalApproverNote
 String
 FinalApproverNote
 String
 ConditionalApproverUserID
 Integer
 EqualTo
 FinalApproverUserID
 Integer
 EqualTo
 ConsumptionRange
 String
 ConsumptionRangeThemeColorID
 Integer
 ConsumptionRangeHex
 String
 CreateUserID
 Integer
 EqualTo
 CreateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 ConcurrencyID
 Integer
 Concurrency Key
 Account
 AccountModel
 Charge
 ChargeModel
 Property
 PropertyModel
 Posting
 PostingModel
 Unit
 UnitModel
 ReviewerUser
 UserModel
 ConditionalApproverUser
 UserModel
 FinalApproverUser
 UserModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 Utility
 UtilityModel
 UtilityReadingFileMap
 UtilityReadingFileMapModel
 UtilityMeter
 UtilityMeterModel
 UtilityUnitOfMeasureReading
 UtilityUnitOfMeasureModel
 UtilityUnitOfMeasureBilling
 UtilityUnitOfMeasureModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityReadingsHistoryID": 1,
 "UtilityID": 2,
 "MeterNumber": "sample string 3",
 "Route": 4,
 "EntityID": 5,
 "UtilityMeterID": 6,
 "UtilityReadingFileMapID": 7,
 "ReadingUoM": 8,
 "BillingUoM": 9,
 "IsLowIncome": true,
 "ClassCode": "sample string 11",
 "CurrentReading": 12.0,
 "CurrentReadingDate": "2026-04-29T15:58:11.5301885-04:00",
 "PreviousReading": 14.0,
 "PreviousReadingDate": "2026-04-29T15:58:11.5301885-04:00",
 "BillingYear": 16,
 "Consumption": 17.0,
 "AdjustedConsumption": 18.0,
 "ChargeAmount": 19.0,
 "PostDate": "2026-04-29T15:58:11.5301885-04:00",
 "AccountID": 21,
 "ChargeID": 22,
 "PostingID": 23,
 "RZone": "sample string 24",
 "Other": "sample string 25",
 "Other2": "sample string 26",
 "Other3": "sample string 27",
 "Other4": "sample string 28",
 "Other5": "sample string 29",
 "Comments": "sample string 30",
 "SubEntityID": 31,
 "ExceptionReason": "sample string 32",
 "ReviewerUserID": 33,
 "ConditionalApproverNote": "sample string 34",
 "FinalApproverNote": "sample string 35",
 "ConditionalApproverUserID": 36,
 "FinalApproverUserID": 37,
 "ConsumptionRange": "sample string 38",
 "ConsumptionRangeThemeColorID": 39,
 "ConsumptionRangeHex": "sample string 40",
 "CreateUserID": 41,
 "CreateDate": "2026-04-29T15:58:11.5301885-04:00",
 "UpdateUserID": 43,
 "UpdateDate": "2026-04-29T15:58:11.5301885-04:00",
 "ConcurrencyID": 45,
 "MetaTag": "sample string 47"
 }
]

---

## UtilityTypeUnitOfMeasures

UtilityTypeUnitOf...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 UtilityType
 UtilityUnitOfMeasure
 Rent Manager Web API Reference
 UtilityTypeUnitOfMeasures Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityTypeUnitOfMeasures?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityTypeUnitOfMeasureFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityTypeUnitOfMeasureEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityTypeUnitOfMeasureOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityTypeUnitOfMeasureModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityTypeUnitOfMeasureID
 Integer
 EqualTo
 Primary Key
 UtilityTypeID
 Integer
 EqualTo
 UtilityUnitOfMeasureID
 Integer
 EqualTo
 UtilityType
 UtilityTypeModel
 UtilityUnitOfMeasure
 UtilityUnitOfMeasureModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityTypeUnitOfMeasureID": 1,
 "UtilityTypeID": 2,
 "UtilityUnitOfMeasureID": 3,
 "MetaTag": "sample string 5"
 }
]

---

## UtilityTypes

UtilityTypes
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 UtilityTypes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityTypes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityTypeFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityTypeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityTypeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityTypeModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityTypeID
 Integer
 EqualTo
 Primary Key
 Name
 String
 PostingRestriction
 ePostingRestriction
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityTypeID": 1,
 "Name": "sample string 2",
 "MetaTag": "sample string 4"
 }
]

---

## UtilityUnitOfMeasureConversions

UtilityUnitOfMeas...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 UtilityUnitOfMeasureConversions Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityUnitOfMeasureConversions?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityUnitOfMeasureConversionFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityUnitOfMeasureConversionEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityUnitOfMeasureConversionOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityUnitOfMeasureConversionModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityUnitOfMeasureConversionID
 Integer
 EqualTo
 Primary Key
 ReadingUoM
 Integer
 EqualTo
 BillingUoM
 Integer
 EqualTo
 Multiplier
 Decimal
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityUnitOfMeasureConversionID": 1,
 "ReadingUoM": 2,
 "BillingUoM": 3,
 "Multiplier": 4.0,
 "MetaTag": "sample string 6"
 }
]

---

## UtilityUnitOfMeasures

UtilityUnitOfMeas...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 UtilityUnitOfMeasures Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET UtilityUnitOfMeasures?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 UtilityUnitOfMeasureFilterFields List
 Define this parameter in the request URI.
 embeds
 UtilityUnitOfMeasureEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 UtilityUnitOfMeasureOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
UtilityUnitOfMeasureModel
 Properties
 NameTypeOptimized FiltersAttributes
 UtilityUnitOfMeasureID
 Integer
 EqualTo
 Primary Key
 Name
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "UtilityUnitOfMeasureID": 1,
 "Name": "sample string 2",
 "MetaTag": "sample string 4"
 }
]

---

## Vendor1099Categories

Vendor1099Categor...
 Retrieve Collection
 Retrieve Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 Vendor1099Categories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Vendor1099Categories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 Vendor1099CategoryFilterFields List
 Define this parameter in the request URI.
 embeds
 Vendor1099CategoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 Vendor1099CategoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
Vendor1099CategoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 Vendor1099CategoryID
 Integer
 EqualTo
 Primary Key
 Description
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "Vendor1099CategoryID": 1,
 "Description": "sample string 2",
 "MetaTag": "sample string 5"
 }
]

---

## VendorCredits

VendorCredits
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AddAllocations
 Attachment
 AvailableVendorCreditsToAllocate
 AvidInvoiceURLs
 CreateUser
 DeleteAllocations
 GetByPost
 PartialUpdate
 PayeeAccount
 Property
 QuickSearch
 Search
 Unit
 UpdateUser
 VendorCreditDetailAllocation
 VendorCreditDetails
 Rent Manager Web API Reference
 VendorCredits Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET VendorCredits?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 VendorCreditFilterFields List
 Define this parameter in the request URI.
 embeds
 VendorCreditEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 VendorCreditOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 VendorCreditGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
VendorCreditModel
 Properties
 NameTypeOptimized FiltersAttributes
 VendorCreditID
 Integer
 EqualTo
 Primary Key
 VendorID
 Integer
 EqualTo
 TransactionDate
 DateTime
 CreditAmount
 Decimal
 AmountLeft
 Decimal
 Read Only
 IsCreditFullyAllocated
 Boolean
 Comment
 String
 Reference
 String
 EqualTo
, 
 Contains
 PropertyID
 Integer
 EqualTo
, 
 In
 UnitID
 Integer
 EqualTo
 JobID
 Integer
 AmountUsed
 Decimal
 IsOpen
 Boolean
 EqualTo
, 
 NotEqualTo
 Read Only
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 AvidInvoiceURLs
 AvidInvoiceURLModel
 Property
 PropertyModel
 Unit
 UnitModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 PayeeAccount
 AccountModel
 VendorCreditDetails
 VendorCreditDetailModel
 Required (create)
 Attachment
 FileAttachmentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "VendorCreditID": 1,
 "VendorID": 2,
 "TransactionDate": "2026-04-29T15:58:12.4399948-04:00",
 "CreditAmount": 4.0,
 "AmountLeft": 5.0,
 "IsCreditFullyAllocated": true,
 "Comment": "sample string 7",
 "Reference": "sample string 8",
 "PropertyID": 9,
 "UnitID": 10,
 "JobID": 11,
 "AmountUsed": 12.0,
 "IsOpen": true,
 "CreateDate": "2026-04-29T15:58:12.4399948-04:00",
 "CreateUserID": 15,
 "UpdateDate": "2026-04-29T15:58:12.4399948-04:00",
 "UpdateUserID": 17,
 "ConcurrencyID": 18,
 "MetaTag": "sample string 21"
 }
]

---

## Vendors

Vendors
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 Addresses
 AddressTypes
 Appointments
 AssociatedProperties
 BatchEmailVendors
 Bills
 Checks
 Color
 Contact
 Contacts
 CreateUser
 CreditCardTransactions
 Credits
 DefaultAccount
 DefaultTerm
 GetByPost
 History
 HistoryNotes
 HistorySystemNotes
 MergeVendors
 PayLeaseExpenseManagementBillsPostingBatch
 PaymentMethods
 PhoneNumbers
 PhoneNumberTypes
 PrimaryAddress
 Properties
 QuickSearch
 RMVoIPCallHistory
 Search
 Tasks
 TestScript
 Transactions
 UpdateUser
 UploadUserDefinedValueAttachment
 UserDefinedFields
 UserDefinedValues
 Vendor1099BeginningBalances
 Vendor1099Category
 VendorProperties
 Rent Manager Web API Reference
 Vendors Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Vendors?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 VendorFilterFields List
 Define this parameter in the request URI.
 embeds
 VendorEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 VendorOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 VendorGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
VendorModel
 Properties
 NameTypeOptimized FiltersAttributes
 VendorID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 Payee
 String
 EqualTo
 Contacts
 ContactModel
 Contact
 ContactModel
 Required (create)
 InsuranceExpiration
 DateTime
 WorkersCompExpiration
 DateTime
 TaxID
 String
 Calculated Field
 Is1099
 Boolean
 EqualTo
 Vendor1099CategoryID
 Integer
 Vendor1099BeginningBalanceYear
 Integer
 AccountNumber
 String
 DefaultAccountID
 Integer
 EqualTo
 DefaultAccount
 GLAccountModel
 Category
 String
 ColorID
 Integer
 Color
 ColorModel
 IsActive
 Boolean
 IsPrivate
 Boolean
 IsAutoFillCheckBillInformation
 Boolean
 DefaultTermID
 Integer
 DefaultTerm
 TermModel
 PaymentMethod
 eBillPayMethod
 EcheckEmail
 String
 Comment
 String
 PhoneNumbers
 PhoneNumberModel
 Addresses
 AddressModel
 PrimaryAddress
 AddressModel
 YTD1099Balances
 (DEPRECATED) As of 7/31/2019
 YTD1099BalanceModel
 Vendor1099BeginningBalances
 Vendor1099BeginningBalanceModel
 AssociatedProperties
 (DEPRECATED) As of 8/14/2019
 replaced by VendorProperties
 PropertyListItemModel
 UserDefinedValues
 UserDefinedValueModel
 VendorProperties
 VendorPropertyModel
 Properties
 PropertyModel
 History
 HistoryModel
 Transactions
 VendorTransactionModel
 Vendor1099Category
 Vendor1099CategoryModel
 Checks
 CheckModel
 Credits
 VendorCreditModel
 CreditCardTransactions
 CreditCardTransactionModel
 Bills
 BillModel
 CreateUserID
 Integer
 CreateUser
 UserModel
 CreateDate
 DateTime
 UpdateUserID
 Integer
 UpdateUser
 UserModel
 UpdateDate
 DateTime
 HistorySystemNotes
 HistorySystemNoteModel
 RMVoIPCallHistory
 RMVoIPCallHistoryModel
 EpayInfo
 EpayInformationModel
 HistoryNotes
 HistoryNoteModel
 LinkedUserID
 Integer
 LinkedUser
 UserModel
 MasterMeters
 MasterMeterModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "VendorID": 1,
 "Name": "sample string 2",
 "Payee": "sample string 3",
 "ColorID": 13
 }
]

---

## ViolationCategories

ViolationCategori...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 ViolationCodes
 Rent Manager Web API Reference
 ViolationCategories Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ViolationCategories?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ViolationCategoryFilterFields List
 Define this parameter in the request URI.
 embeds
 ViolationCategoryEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ViolationCategoryOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ViolationCategoryGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ViolationCategoryModel
 Properties
 NameTypeOptimized FiltersAttributes
 ViolationCategoryID
 Integer
 EqualTo
 Primary Key
 Name
 String
 EqualTo
 Description
 String
 IsActive
 Boolean
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 ViolationCodes
 ViolationCodeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ViolationCategoryID": 1,
 "Name": "sample string 2",
 "Description": "sample string 3",
 "IsActive": true
 }
]

---

## ViolationCodeGroups

ViolationCodeGrou...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChargeType
 CreateUser
 GetByPost
 LetterTemplate
 QuickSearch
 Search
 UpdateUser
 ViolationCodeGroupProperties
 ViolationCodeGroupStages
 ViolationCodes
 Rent Manager Web API Reference
 ViolationCodeGroups Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ViolationCodeGroups?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ViolationCodeGroupFilterFields List
 Define this parameter in the request URI.
 embeds
 ViolationCodeGroupEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ViolationCodeGroupOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ViolationCodeGroupGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ViolationCodeGroupModel
 Properties
 NameTypeOptimized FiltersAttributes
 ViolationCodeGroupID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 EqualTo
 LetterTemplateID
 Integer
 EqualTo
 LetterTemplate
 LetterTemplateModel
 ChargeTypeID
 Integer
 EqualTo
 ChargeType
 ChargeTypeModel
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 ViolationCodeGroupProperties
 ViolationCodeGroupPropertyModel
 ViolationCodeGroupStages
 ViolationCodeGroupStageModel
 ViolationCodes
 ViolationCodeModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ViolationCodeGroupID": 1,
 "Name": "sample string 2",
 "LetterTemplateID": 3,
 "ChargeTypeID": 4,
 "CreateDate": "2026-04-29T15:58:12.9806722-04:00",
 "CreateUserID": 6,
 "UpdateDate": "2026-04-29T15:58:12.9806722-04:00",
 "UpdateUserID": 8,
 "ConcurrencyID": 9,
 "MetaTag": "sample string 11"
 }
]

---

## ViolationCodes

ViolationCodes
 Retrieve Collection
 Retrieve Instance
 ChargeType
 CreateUser
 DefaultViolationStages
 GetByPost
 LetterTemplate
 QuickSearch
 Search
 UpdateUser
 ViolationCategory
 ViolationCodeGroup
 ViolationCodeStages
 Rent Manager Web API Reference
 ViolationCodes Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET ViolationCodes?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 ViolationCodeFilterFields List
 Define this parameter in the request URI.
 embeds
 ViolationCodeEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ViolationCodeOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ViolationCodeModel
 Properties
 NameTypeOptimized FiltersAttributes
 ViolationCodeID
 Integer
 EqualTo
, 
 In
 Primary Key
 ViolationCodeGroupID
 Integer
 EqualTo
, 
 In
 ViolationCodeGroup
 ViolationCodeGroupModel
 Code
 String
 EqualTo
 ViolationCategoryID
 Integer
 EqualTo
 ViolationCategory
 ViolationCategoryModel
 Description
 String
 ResolveAction
 String
 CCRReference
 String
 InternalNotes
 String
 IsOverrideViolationCodeGroupStages
 Boolean
 LetterTemplateID
 Integer
 EqualTo
 LetterTemplate
 LetterTemplateModel
 ChargeTypeID
 Integer
 EqualTo
 ChargeType
 ChargeTypeModel
 IsActive
 Boolean
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 ViolationCodeStages
 ViolationCodeStageModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ViolationCodeID": 1,
 "ViolationCodeGroupID": 2,
 "Code": "sample string 3",
 "ViolationCategoryID": 4,
 "Description": "sample string 5",
 "ResolveAction": "sample string 6",
 "CCRReference": "sample string 7",
 "InternalNotes": "sample string 8",
 "IsOverrideViolationCodeGroupStages": true,
 "LetterTemplateID": 10,
 "ChargeTypeID": 11,
 "IsActive": true,
 "CreateDate": "2026-04-29T15:58:13.1430905-04:00",
 "CreateUserID": 14,
 "UpdateDate": "2026-04-29T15:58:13.1430905-04:00",
 "UpdateUserID": 16,
 "ConcurrencyID": 17,
 "MetaTag": "sample string 19"
 }
]

---

## Violations

Violations
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 AllViolationStages
 BatchEmailViolations
 Close
 CreateUser
 Escalate
 GetByPost
 History
 HistoryNotes
 HistorySystemNotes
 HistoryViolationStageRevertNotes
 Image
 Property
 QuickSearch
 Revert
 Search
 Tenant
 TestScript
 Unit
 UpdateUser
 ViolationCategory
 ViolationCode
 ViolationStages
 WriteLetters
 Rent Manager Web API Reference
 Violations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET Violations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}&getOptions={getOptions}
 Parameters
 NameTypeAdditional information
 filters
 ViolationFilterFields List
 Define this parameter in the request URI.
 embeds
 ViolationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 ViolationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 getOptions
 ViolationGetOptions List
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
ViolationModel
 Properties
 NameTypeOptimized FiltersAttributes
 ViolationID
 Integer
 EqualTo
, 
 In
 Primary Key
 PropertyID
 Integer
 EqualTo
, 
 In
 Property
 PropertyModel
 ImageID
 Integer
 EqualTo
 Image
 ImageModel
 TenantID
 Integer
 EqualTo
 Tenant
 TenantModel
 UnitID
 Integer
 EqualTo
 Unit
 UnitModel
 ViolationCodeID
 Integer
 EqualTo
 ViolationCategoryID
 Integer
 Read Only
 ViolationDate
 DateTime
 Description
 String
 ResolveAction
 String
 CCRReference
 String
 InternalNotes
 String
 Read Only
 IsClosed
 Boolean
 CloseDate
 DateTime
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 CreateUser
 UserModel
 UpdateUser
 UserModel
 ConcurrencyID
 Integer
 Concurrency Key
 ViolationStages
 ViolationStageModel
 CurrentStage
 ViolationStageModel
 Requires Embed (ViolationStages)
 ViolationCode
 ViolationCodeModel
 ViolationCategory
 ViolationCategoryModel
 History
 HistoryModel
 HistoryNotes
 HistoryNoteModel
 HistorySystemNotes
 HistorySystemNoteModel
 HistoryViolationStageRevertNotes
 HistoryViolationStageRevertNoteModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "ViolationID": 1,
 "PropertyID": 2,
 "ImageID": 3,
 "TenantID": 4,
 "UnitID": 5,
 "ViolationCodeID": 6,
 "ViolationCategoryID": 7,
 "ViolationDate": "2026-04-29T15:58:13.3032905-04:00",
 "Description": "sample string 9",
 "ResolveAction": "sample string 10",
 "CCRReference": "sample string 11",
 "InternalNotes": "sample string 12",
 "IsClosed": true,
 "CloseDate": "2026-04-29T15:58:13.3032905-04:00",
 "CreateDate": "2026-04-29T15:58:13.3032905-04:00",
 "CreateUserID": 15,
 "UpdateDate": "2026-04-29T15:58:13.3032905-04:00",
 "UpdateUserID": 17,
 "ConcurrencyID": 18,
 "MetaTag": "sample string 20"
 }
]

---

## VirtualPostOfficeJobs

VirtualPostOffice...
 Retrieve Collection
 Retrieve Instance
 Documents
 GetByPost
 QuickSearch
 Search
 Status
 Rent Manager Web API Reference
 VirtualPostOfficeJobs Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET VirtualPostOfficeJobs?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 VirtualPostOfficeJobFilterFields List
 Define this parameter in the request URI.
 embeds
 VirtualPostOfficeJobEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 VirtualPostOfficeJobOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
VirtualPostOfficeJobModel
 Properties
 NameTypeOptimized FiltersAttributes
 VirtualPostOfficeJobID
 Integer
 EqualTo
 Primary Key
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 Fee
 Decimal
 Status
 eVPOStatus
 Requires Embed (Status)
 CreateUser
 UserModel
 Documents
 VirtualPostOfficeDocumentModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "VirtualPostOfficeJobID": 1,
 "CreateDate": "2026-04-29T15:58:13.4832909-04:00",
 "CreateUserID": 3,
 "Fee": 4.0,
 "Status": "None",
 "MetaTag": "sample string 6"
 }
]

---

## WebChatConversationItems

WebChatConversati...
 Retrieve Collection
 Retrieve Instance
 CreateUser
 GetByPost
 QuickSearch
 Search
 WebChatImages
 Rent Manager Web API Reference
 WebChatConversationItems Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebChatConversationItems?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebChatConversationItemFilterFields List
 Define this parameter in the request URI.
 embeds
 WebChatConversationItemEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebChatConversationItemOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebChatConversationItemModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebChatConversationItemID
 Integer
 EqualTo
 Primary Key
 WebChatConversationID
 Integer
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UTCCreateDate
 DateTime
 Message
 String
 HasImages
 Boolean
 UpdateDate
 DateTime
 WebChatImages
 WebChatImageModel
 IsSystemMessage
 Boolean
 CreateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebChatConversationItemID": 1,
 "WebChatConversationID": 2,
 "CreateDate": "2026-04-29T15:58:13.6368887-04:00",
 "CreateUserID": 4,
 "UTCCreateDate": "2026-04-29T15:58:13.6368887-04:00",
 "Message": "sample string 6",
 "HasImages": true,
 "UpdateDate": "2026-04-29T15:58:13.6368887-04:00",
 "IsSystemMessage": true,
 "MetaTag": "sample string 11"
 }
]

---

## WebChatConversations

WebChatConversati...
 Retrieve Collection
 Retrieve Instance
 AgentUser
 CreateUser
 GetByPost
 QuickSearch
 Search
 UpdateUser
 WebChatConversationItems
 WebChatConversationLinkedEntities
 WebChatQueue
 WebChatQueueCustomQuestionAnswers
 Rent Manager Web API Reference
 WebChatConversations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebChatConversations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebChatConversationFilterFields List
 Define this parameter in the request URI.
 embeds
 WebChatConversationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebChatConversationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebChatConversationModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebChatConversationID
 Integer
 EqualTo
 Primary Key
 CreateDate
 DateTime
 UTCCreateDate
 DateTime
 InteractiveStartDate
 DateTime
 UTCInteractiveStartDate
 DateTime
 AgentUserID
 Integer
 EqualTo
 IsOfflineQuestion
 Boolean
 WebChatQueueID
 Integer
 EqualTo
 SortOrder
 Integer
 Comment
 String
 Notes
 String
 Name
 String
 EmailAddress
 String
 PhoneNumber
 String
 PropertyName
 String
 UnitName
 String
 AccountNumber
 String
 EndDate
 DateTime
 UTCEndDate
 DateTime
 TimeOutDate
 DateTime
 UTCTimeOutDate
 DateTime
 WaitTime
 TimeSpan
 Read Only
 IsTimedOut
 Boolean
 IsTransferred
 Boolean
 IsClientActive
 Boolean
 HubGroupName
 String
 ConversationStatus
 eWebChatConversationStatus
 Read Only
 Duration
 TimeSpan
 Read Only
 CreateUserID
 Integer
 UpdateUserID
 Integer
 UpdateDate
 DateTime
 WebChatConversationItems
 WebChatConversationItemModel
 WebChatConversationLinkedEntities
 WebChatConversationLinkedEntityModel
 WebChatQueueCustomQuestionAnswers
 WebChatQueueCustomQuestionAnswerModel
 AgentUser
 UserModel
 WebChatQueue
 WebChatQueueModel
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebChatConversationID": 1,
 "CreateDate": "2026-04-29T15:58:13.7836797-04:00",
 "UTCCreateDate": "2026-04-29T15:58:13.7836797-04:00",
 "InteractiveStartDate": "2026-04-29T15:58:13.7836797-04:00",
 "UTCInteractiveStartDate": "2026-04-29T15:58:13.7836797-04:00",
 "AgentUserID": 4,
 "IsOfflineQuestion": true,
 "WebChatQueueID": 6,
 "SortOrder": 7,
 "Comment": "sample string 8",
 "Notes": "sample string 9",
 "Name": "sample string 10",
 "EmailAddress": "sample string 11",
 "PhoneNumber": "sample string 12",
 "PropertyName": "sample string 13",
 "UnitName": "sample string 14",
 "AccountNumber": "sample string 15",
 "EndDate": "2026-04-29T15:58:13.7836797-04:00",
 "UTCEndDate": "2026-04-29T15:58:13.7836797-04:00",
 "TimeOutDate": "2026-04-29T15:58:13.7836797-04:00",
 "UTCTimeOutDate": "2026-04-29T15:58:13.7836797-04:00",
 "WaitTime": "00:00:00.1234567",
 "IsTimedOut": true,
 "IsTransferred": true,
 "IsClientActive": true,
 "HubGroupName": "sample string 20",
 "Duration": "00:00:00.1234567",
 "CreateUserID": 21,
 "UpdateUserID": 22,
 "UpdateDate": "2026-04-29T15:58:13.7836797-04:00",
 "MetaTag": "sample string 25"
 }
]

---

## WebChatQueues

WebChatQueues
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 WebChatQueueActions
 WebChatQueueCustomQuestionLinks
 WebChatQueueCustomReplies
 WebChatQueueUsers
 Rent Manager Web API Reference
 WebChatQueues Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebChatQueues?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebChatQueueFilterFields List
 Define this parameter in the request URI.
 embeds
 WebChatQueueEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebChatQueueOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebChatQueueModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebChatQueueID
 Integer
 EqualTo
, 
 In
 Primary Key
 Name
 String
 DisplayName
 String
 IsEnabled
 Boolean
 MaxConversationsPerAgent
 Integer
 OnlineButtonText
 String
 OfflineButtonText
 String
 OfflineMessage
 String
 IsShowButtonWhenOffline
 Boolean
 IsAllowOfflineQuestions
 Boolean
 IsAllowChatEmailTranscript
 Boolean
 QueueHubGroupName
 String
 Read Only
 WebChatQueueUsers
 WebChatQueueUserModel
 WebChatQueueCustomQuestionLinks
 WebChatQueueCustomQuestionLinkModel
 WebChatQueueCustomReplies
 WebChatQueueCustomReplyModel
 WebChatQueueActions
 WebChatQueueActionModel
 Required (create)
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebChatQueueID": 1,
 "Name": "sample string 2"
 }
]

---

## WebMessageBoardPosts

WebMessageBoardPo...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ApprovalUser
 GetByPost
 PostTenant
 PostUser
 QuickSearch
 Search
 Rent Manager Web API Reference
 WebMessageBoardPosts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebMessageBoardPosts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebMessageBoardPostFilterFields List
 Define this parameter in the request URI.
 embeds
 WebMessageBoardPostEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebMessageBoardPostOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebMessageBoardPostModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebMessageBoardPostID
 Integer
 EqualTo
 Primary Key
 PostText
 String
 PostDate
 DateTime
 EqualTo
 PostParentID
 Integer
 EntityType
 eEntityType
 EqualTo
 IsApproved
 Boolean
 EqualTo
 ApprovalUserID
 Integer
 EqualTo
 Read Only
 PostTenant
 TenantModel
 PostUser
 UserModel
 ApprovalUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebMessageBoardPostID": 1,
 "PostText": "sample string 2",
 "PostDate": "2026-04-29T15:58:14.1239087-04:00",
 "PostParentID": 4,
 "IsApproved": true,
 "ApprovalUserID": 6,
 "MetaTag": "sample string 8"
 }
]

---

## WebPageCustomizations

WebPageCustomizat...
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 WebPageCustomizations Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebPageCustomizations?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebPageCustomizationFilterFields List
 Define this parameter in the request URI.
 embeds
 WebPageCustomizationEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebPageCustomizationOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebPageCustomizationModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebPagesCustomizationID
 Integer
 Primary Key
 TWAPageID
 eTWAPage
 Title
 String
 CustomMessage
 String
 CustomMenu
 String
 Singular
 String
 Plural
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebPagesCustomizationID": 1,
 "Title": "sample string 2",
 "CustomMessage": "sample string 3",
 "CustomMenu": "sample string 4",
 "Singular": "sample string 5",
 "Plural": "sample string 6",
 "MetaTag": "sample string 8"
 }
]

---

## WebUserAccounts

WebUserAccounts
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChangeUserName
 GetByPost
 Owner
 OwnerProspect
 Prospect
 QuickSearch
 ResetPassword
 Search
 Tenant
 WebUser
 Rent Manager Web API Reference
 WebUserAccounts Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebUserAccounts?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebUserAccountFilterFields List
 Define this parameter in the request URI.
 embeds
 WebUserAccountEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebUserAccountOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebUserAccountModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebUserAccountID
 Integer
 EqualTo
 Primary Key
 WebUserID
 Integer
 EqualTo
, 
 In
 AccountID
 Integer
 EqualTo
, 
 In
 DisplayID
 Integer
 Nickname
 String
 IsDefault
 Boolean
 IsEnabled
 Boolean
 EqualTo
 CreateDate
 DateTime
 UpdateDate
 DateTime
 AccountType
 eAccountType
 WebUser
 WebUserModel
 Tenant
 TenantModel
 Owner
 OwnerModel
 Prospect
 ProspectModel
 WebUserAccountAutomaticPaymentSetting
 WebUserAccountAutomaticPaymentSettingModel
 OwnerProspect
 OwnerProspectModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebUserAccountID": 1,
 "WebUserID": 2,
 "AccountID": 3,
 "DisplayID": 4,
 "Nickname": "sample string 5",
 "IsDefault": true,
 "IsEnabled": true,
 "CreateDate": "2026-04-29T15:58:14.4242645-04:00",
 "UpdateDate": "2026-04-29T15:58:14.4242645-04:00",
 "MetaTag": "sample string 11"
 }
]

---

## WebUsers

WebUsers
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 ChangeUserName
 GetByPost
 PhoneNumbers
 PhoneNumberTypes
 QuickSearch
 ResendVerificationEmail
 ResetPassword
 Search
 WebUserAccounts
 Rent Manager Web API Reference
 WebUsers Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebUsers?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebUserFilterFields List
 Define this parameter in the request URI.
 embeds
 WebUserEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebUserOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebUserModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebUserID
 Integer
 EqualTo
, 
 In
 Primary Key
 UserName
 String
 EqualTo
, 
 In
 UserNameIsVerified
 Boolean
 EqualTo
 EmailAddress
 String
 EqualTo
 Read Only
 IsVerifiedEmail
 Boolean
 FirstName
 String
 LastName
 String
 Name
 String
 Read Only
, 
 Calculated Field
 LastSuccessfulLogin
 DateTime
 LastFailedLogin
 DateTime
 LastLogout
 DateTime
 LastLockout
 DateTime
 FailedLogins
 Integer
 IsPasswordReset
 Boolean
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 WebUserAccounts
 WebUserAccountModel
 Required (create)
 IsOptInCreditReporting
 Boolean
 IsShowNameAddressInDirectory
 Boolean
 IsShowPhoneNumberInDirectory
 Boolean
 IsShowEmailAddressInDirectory
 Boolean
 PaymentLockoutTime
 DateTime
 Read Only
 OverridePaymentLockoutTime
 DateTime
 Read Only
 PreferredLanguageID
 eLanguage
 CreditReportingID
 Integer
 Read Only
 ViewedOWAWhatsNew
 (DEPRECATED) As of 10/15/2019
 Boolean
 PhoneNumbers
 PhoneNumberModel
 TAToken
 String
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebUserID": 1,
 "UserName": "sample string 2",
 "UserNameIsVerified": true,
 "EmailAddress": "sample string 4",
 "IsVerifiedEmail": true,
 "FirstName": "sample string 6",
 "LastName": "sample string 7",
 "Name": "sample string 6 sample string 7",
 "LastSuccessfulLogin": "2026-04-29T15:58:14.6001089-04:00",
 "LastFailedLogin": "2026-04-29T15:58:14.6001089-04:00",
 "LastLogout": "2026-04-29T15:58:14.6001089-04:00",
 "LastLockout": "2026-04-29T15:58:14.6001089-04:00",
 "FailedLogins": 8,
 "IsPasswordReset": true,
 "CreateDate": "2026-04-29T15:58:14.6001089-04:00",
 "CreateUserID": 11,
 "UpdateDate": "2026-04-29T15:58:14.6001089-04:00",
 "UpdateUserID": 13,
 "ConcurrencyID": 14,
 "IsOptInCreditReporting": true,
 "IsShowNameAddressInDirectory": true,
 "IsShowPhoneNumberInDirectory": true,
 "IsShowEmailAddressInDirectory": true,
 "PaymentLockoutTime": "2026-04-29T15:58:14.6001089-04:00",
 "OverridePaymentLockoutTime": "2026-04-29T15:58:14.6001089-04:00",
 "CreditReportingID": 19,
 "ViewedOWAWhatsNew": true,
 "TAToken": "sample string 21",
 "MetaTag": "sample string 23"
 }
]

---

## WebhookDetails

WebhookDetails
 Retrieve Collection
 Retrieve Instance
 Save
 Delete Collection
 Delete Instance
 GetByPost
 QuickSearch
 Search
 Rent Manager Web API Reference
 WebhookDetails Retrieve Collection
 Retrieve a collection of items.
 Request Information
 Url
 GET WebhookDetails?filters={filters}&embeds={embeds}&orderingOptions={orderingOptions}&fields={fields}
 Parameters
 NameTypeAdditional information
 filters
 WebhookDetailFilterFields List
 Define this parameter in the request URI.
 embeds
 WebhookDetailEmbedOptions List
 Define this parameter in the request URI.
 orderingOptions
 WebhookDetailOrderingOptions List
 Define this parameter in the request URI.
 fields
 String
 Define this parameter in the request URI.
 pageSize
 Integer
 Define this parameter in the request URI.
 pageNumber
 Integer
 Define this parameter in the request URI.
 Response Information
 Model
WebhookDetailModel
 Properties
 NameTypeOptimized FiltersAttributes
 WebhookDetailID
 Integer
 EqualTo
 Primary Key
 WebhookEventType
 eWebhookEventType
 EqualTo
 URL
 String
 PartnerProductID
 Guid
 EqualTo
 CreateDate
 DateTime
 CreateUserID
 Integer
 EqualTo
 UpdateDate
 DateTime
 UpdateUserID
 Integer
 EqualTo
 ConcurrencyID
 Integer
 Concurrency Key
 CreateUser
 UserModel
 UpdateUser
 UserModel
 MetaTag
 String
 Response body formats
 application/json, text/json, multipart/form-data
 Sample:
[
 {
 "WebhookDetailID": 1,
 "URL": "sample string 2",
 "PartnerProductID": "45d3a12e-0a04-4c89-ac5d-3f6a5088746a",
 "CreateDate": "2026-04-29T15:58:14.764528-04:00",
 "CreateUserID": 3,
 "UpdateDate": "2026-04-29T15:58:14.7801472-04:00",
 "UpdateUserID": 4,
 "ConcurrencyID": 5,
 "MetaTag": "sample string 7"
 }
]

---

