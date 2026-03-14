# @mailodds/sdk@1.0.0

A TypeScript SDK client for the api.mailodds.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @mailodds/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  BlacklistMonitoringApi,
} from '@mailodds/sdk';
import type { AddBlacklistMonitorOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BlacklistMonitoringApi(config);

  const body = {
    // AddBlacklistMonitorRequest
    addBlacklistMonitorRequest: ...,
  } satisfies AddBlacklistMonitorOperationRequest;

  try {
    const data = await api.addBlacklistMonitor(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.mailodds.com/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BlacklistMonitoringApi* | [**addBlacklistMonitor**](docs/BlacklistMonitoringApi.md#addblacklistmonitoroperation) | **POST** /v1/blacklist-monitors | Add blacklist monitor
*BlacklistMonitoringApi* | [**getBlacklistHistory**](docs/BlacklistMonitoringApi.md#getblacklisthistory) | **GET** /v1/blacklist-monitors/{monitor_id}/history | Get blacklist check history
*BlacklistMonitoringApi* | [**listBlacklistMonitors**](docs/BlacklistMonitoringApi.md#listblacklistmonitors) | **GET** /v1/blacklist-monitors | List blacklist monitors
*BlacklistMonitoringApi* | [**runBlacklistCheck**](docs/BlacklistMonitoringApi.md#runblacklistcheck) | **POST** /v1/blacklist-monitors/{monitor_id}/check | Run blacklist check
*BounceAnalysisApi* | [**createBounceAnalysis**](docs/BounceAnalysisApi.md#createbounceanalysisoperation) | **POST** /v1/bounce-analyses | Analyze bounce logs
*BounceAnalysisApi* | [**crossReferenceBounces**](docs/BounceAnalysisApi.md#crossreferencebounces) | **GET** /v1/bounce-analyses/{analysis_id}/cross-reference | Cross-reference bounces with validation logs
*BounceAnalysisApi* | [**getBounceAnalysis**](docs/BounceAnalysisApi.md#getbounceanalysis) | **GET** /v1/bounce-analyses/{analysis_id} | Get bounce analysis
*BounceAnalysisApi* | [**getBounceRecords**](docs/BounceAnalysisApi.md#getbouncerecords) | **GET** /v1/bounce-analyses/{analysis_id}/records | Get bounce records
*BulkValidationApi* | [**cancelJob**](docs/BulkValidationApi.md#canceljob) | **POST** /v1/jobs/{job_id}/cancel | Cancel a job
*BulkValidationApi* | [**createJob**](docs/BulkValidationApi.md#createjoboperation) | **POST** /v1/jobs | Create bulk validation job (JSON)
*BulkValidationApi* | [**createJobFromS3**](docs/BulkValidationApi.md#createjobfroms3operation) | **POST** /v1/jobs/upload/s3 | Create job from S3 upload
*BulkValidationApi* | [**createJobUpload**](docs/BulkValidationApi.md#createjobupload) | **POST** /v1/jobs/upload | Create bulk validation job (file upload)
*BulkValidationApi* | [**deleteJob**](docs/BulkValidationApi.md#deletejob) | **DELETE** /v1/jobs/{job_id} | Delete a job
*BulkValidationApi* | [**getJob**](docs/BulkValidationApi.md#getjob) | **GET** /v1/jobs/{job_id} | Get job status
*BulkValidationApi* | [**getJobResults**](docs/BulkValidationApi.md#getjobresults) | **GET** /v1/jobs/{job_id}/results | Get job results
*BulkValidationApi* | [**getPresignedUpload**](docs/BulkValidationApi.md#getpresigneduploadoperation) | **POST** /v1/jobs/upload/presigned | Get S3 presigned upload URL
*BulkValidationApi* | [**listJobs**](docs/BulkValidationApi.md#listjobs) | **GET** /v1/jobs | List validation jobs
*CampaignAnalyticsApi* | [**getCampaignABResults**](docs/CampaignAnalyticsApi.md#getcampaignabresults) | **GET** /v1/campaigns/{campaign_id}/ab-results | Get A/B test results
*CampaignAnalyticsApi* | [**getCampaignAttribution**](docs/CampaignAnalyticsApi.md#getcampaignattribution) | **GET** /v1/campaigns/{campaign_id}/conversions/attribution | Get campaign attribution
*CampaignAnalyticsApi* | [**getCampaignDeliveryConfidence**](docs/CampaignAnalyticsApi.md#getcampaigndeliveryconfidence) | **GET** /v1/campaigns/{campaign_id}/delivery-confidence | Get pre-send delivery confidence
*CampaignAnalyticsApi* | [**getCampaignFunnel**](docs/CampaignAnalyticsApi.md#getcampaignfunnel) | **GET** /v1/campaigns/{campaign_id}/funnel | Get campaign funnel
*CampaignAnalyticsApi* | [**getCampaignProviderIntelligence**](docs/CampaignAnalyticsApi.md#getcampaignproviderintelligence) | **GET** /v1/campaigns/{campaign_id}/provider-intelligence | Get provider intelligence
*CampaignsApi* | [**cancelCampaign**](docs/CampaignsApi.md#cancelcampaign) | **POST** /v1/campaigns/{campaign_id}/cancel | Cancel a campaign
*CampaignsApi* | [**createCampaign**](docs/CampaignsApi.md#createcampaignoperation) | **POST** /v1/campaigns | Create a campaign
*CampaignsApi* | [**createCampaignVariant**](docs/CampaignsApi.md#createcampaignvariant) | **POST** /v1/campaigns/{campaign_id}/variants | Create A/B variant
*CampaignsApi* | [**getCampaign**](docs/CampaignsApi.md#getcampaign) | **GET** /v1/campaigns/{campaign_id} | Get campaign with stats
*CampaignsApi* | [**listCampaigns**](docs/CampaignsApi.md#listcampaigns) | **GET** /v1/campaigns | List campaigns
*CampaignsApi* | [**scheduleCampaign**](docs/CampaignsApi.md#schedulecampaignoperation) | **POST** /v1/campaigns/{campaign_id}/schedule | Schedule a campaign
*CampaignsApi* | [**sendCampaign**](docs/CampaignsApi.md#sendcampaign) | **POST** /v1/campaigns/{campaign_id}/send | Send a campaign
*ContactListsApi* | [**appendToContactList**](docs/ContactListsApi.md#appendtocontactlistoperation) | **POST** /v1/contact-lists/{list_id}/append | Append to contact list
*ContactListsApi* | [**createContactList**](docs/ContactListsApi.md#createcontactlistoperation) | **POST** /v1/contact-lists | Create contact list
*ContactListsApi* | [**getInactiveContactsReport**](docs/ContactListsApi.md#getinactivecontactsreport) | **GET** /v1/contacts/inactive-report | Get inactive contacts report
*ContactListsApi* | [**listContactLists**](docs/ContactListsApi.md#listcontactlists) | **GET** /v1/contact-lists | List contact lists
*ContactListsApi* | [**queryContactList**](docs/ContactListsApi.md#querycontactlistoperation) | **POST** /v1/contact-lists/{list_id}/query | Query contact list
*ContentClassificationApi* | [**classifyContent**](docs/ContentClassificationApi.md#classifycontentoperation) | **POST** /v1/content-check | Classify email content
*DMARCMonitoringApi* | [**addDmarcDomain**](docs/DMARCMonitoringApi.md#adddmarcdomainoperation) | **POST** /v1/dmarc-domains | Add DMARC domain
*DMARCMonitoringApi* | [**getDmarcDomain**](docs/DMARCMonitoringApi.md#getdmarcdomain) | **GET** /v1/dmarc-domains/{domain_id} | Get DMARC domain
*DMARCMonitoringApi* | [**getDmarcRecommendation**](docs/DMARCMonitoringApi.md#getdmarcrecommendation) | **GET** /v1/dmarc-domains/{domain_id}/recommendation | Get DMARC policy recommendation
*DMARCMonitoringApi* | [**getDmarcSources**](docs/DMARCMonitoringApi.md#getdmarcsources) | **GET** /v1/dmarc-domains/{domain_id}/sources | Get DMARC sending sources
*DMARCMonitoringApi* | [**getDmarcTrend**](docs/DMARCMonitoringApi.md#getdmarctrend) | **GET** /v1/dmarc-domains/{domain_id}/trend | Get DMARC trend
*DMARCMonitoringApi* | [**listDmarcDomains**](docs/DMARCMonitoringApi.md#listdmarcdomains) | **GET** /v1/dmarc-domains | List DMARC domains
*DMARCMonitoringApi* | [**verifyDmarcDomain**](docs/DMARCMonitoringApi.md#verifydmarcdomain) | **POST** /v1/dmarc-domains/{domain_id}/verify | Verify DMARC DNS records
*EmailSendingApi* | [**deliverBatch**](docs/EmailSendingApi.md#deliverbatch) | **POST** /v1/deliver/batch | Send to multiple recipients (max 100)
*EmailSendingApi* | [**deliverEmail**](docs/EmailSendingApi.md#deliveremail) | **POST** /v1/deliver | Send a single email
*EmailValidationApi* | [**validateBatch**](docs/EmailValidationApi.md#validatebatchoperation) | **POST** /v1/validate/batch | Validate multiple emails (sync)
*EmailValidationApi* | [**validateEmail**](docs/EmailValidationApi.md#validateemail) | **POST** /v1/validate | Validate single email
*MessageEventsApi* | [**getMessageEvents**](docs/MessageEventsApi.md#getmessageevents) | **GET** /v1/message-events | Get message events
*SenderHealthApi* | [**getSenderHealth**](docs/SenderHealthApi.md#getsenderhealth) | **GET** /v1/sender-health | Get sender health score
*SenderHealthApi* | [**getSenderHealthTrend**](docs/SenderHealthApi.md#getsenderhealthtrend) | **GET** /v1/sender-health/trend | Get sender health trend
*SendingDomainsApi* | [**createSendingDomain**](docs/SendingDomainsApi.md#createsendingdomainoperation) | **POST** /v1/sending-domains | Add a sending domain
*SendingDomainsApi* | [**deleteSendingDomain**](docs/SendingDomainsApi.md#deletesendingdomain) | **DELETE** /v1/sending-domains/{domain_id} | Delete a sending domain
*SendingDomainsApi* | [**getSendingDomain**](docs/SendingDomainsApi.md#getsendingdomain) | **GET** /v1/sending-domains/{domain_id} | Get a sending domain
*SendingDomainsApi* | [**getSendingDomainIdentityScore**](docs/SendingDomainsApi.md#getsendingdomainidentityscore) | **GET** /v1/sending-domains/{domain_id}/identity-score | Get domain identity score
*SendingDomainsApi* | [**getSendingStats**](docs/SendingDomainsApi.md#getsendingstats) | **GET** /v1/sending-stats | Get sending statistics
*SendingDomainsApi* | [**listSendingDomains**](docs/SendingDomainsApi.md#listsendingdomains) | **GET** /v1/sending-domains | List sending domains
*SendingDomainsApi* | [**verifySendingDomain**](docs/SendingDomainsApi.md#verifysendingdomain) | **POST** /v1/sending-domains/{domain_id}/verify | Verify domain DNS records
*ServerTestsApi* | [**getServerTest**](docs/ServerTestsApi.md#getservertest) | **GET** /v1/server-tests/{test_id} | Get server test
*ServerTestsApi* | [**listServerTests**](docs/ServerTestsApi.md#listservertests) | **GET** /v1/server-tests | List server tests
*ServerTestsApi* | [**runServerTest**](docs/ServerTestsApi.md#runservertestoperation) | **POST** /v1/server-tests | Run server test
*SpamChecksApi* | [**getSpamCheck**](docs/SpamChecksApi.md#getspamcheck) | **GET** /v1/spam-checks/{check_id} | Get spam check
*SpamChecksApi* | [**listSpamChecks**](docs/SpamChecksApi.md#listspamchecks) | **GET** /v1/spam-checks | List spam checks
*SpamChecksApi* | [**runSpamCheck**](docs/SpamChecksApi.md#runspamcheckoperation) | **POST** /v1/spam-checks | Run spam check
*SubscriberListsApi* | [**confirmSubscription**](docs/SubscriberListsApi.md#confirmsubscription) | **GET** /v1/confirm/{token} | Confirm subscription
*SubscriberListsApi* | [**createList**](docs/SubscriberListsApi.md#createlistoperation) | **POST** /v1/lists | Create a subscriber list
*SubscriberListsApi* | [**deleteList**](docs/SubscriberListsApi.md#deletelist) | **DELETE** /v1/lists/{list_id} | Delete a subscriber list
*SubscriberListsApi* | [**getList**](docs/SubscriberListsApi.md#getlist) | **GET** /v1/lists/{list_id} | Get a subscriber list
*SubscriberListsApi* | [**getLists**](docs/SubscriberListsApi.md#getlists) | **GET** /v1/lists | List subscriber lists
*SubscriberListsApi* | [**getSubscribers**](docs/SubscriberListsApi.md#getsubscribers) | **GET** /v1/lists/{list_id}/subscribers | List subscribers
*SubscriberListsApi* | [**subscribe**](docs/SubscriberListsApi.md#subscribeoperation) | **POST** /v1/subscribe/{list_id} | Subscribe to a list
*SubscriberListsApi* | [**unsubscribeSubscriber**](docs/SubscriberListsApi.md#unsubscribesubscriber) | **DELETE** /v1/lists/{list_id}/subscribers/{subscriber_id} | Unsubscribe a subscriber
*SuppressionListsApi* | [**addSuppression**](docs/SuppressionListsApi.md#addsuppressionoperation) | **POST** /v1/suppression | Add suppression entries
*SuppressionListsApi* | [**checkSuppression**](docs/SuppressionListsApi.md#checksuppressionoperation) | **POST** /v1/suppression/check | Check suppression status
*SuppressionListsApi* | [**getSuppressionAuditLog**](docs/SuppressionListsApi.md#getsuppressionauditlog) | **GET** /v1/suppression/audit | Get suppression audit log
*SuppressionListsApi* | [**getSuppressionStats**](docs/SuppressionListsApi.md#getsuppressionstats) | **GET** /v1/suppression/stats | Get suppression statistics
*SuppressionListsApi* | [**listSuppression**](docs/SuppressionListsApi.md#listsuppression) | **GET** /v1/suppression | List suppression entries
*SuppressionListsApi* | [**removeSuppression**](docs/SuppressionListsApi.md#removesuppressionoperation) | **DELETE** /v1/suppression | Remove suppression entries
*SystemApi* | [**getTelemetrySummary**](docs/SystemApi.md#gettelemetrysummary) | **GET** /v1/telemetry/summary | Get validation telemetry
*SystemApi* | [**healthCheck**](docs/SystemApi.md#healthcheck) | **GET** /health | Health check
*ValidationPoliciesApi* | [**addPolicyRule**](docs/ValidationPoliciesApi.md#addpolicyrule) | **POST** /v1/policies/{policy_id}/rules | Add rule to policy
*ValidationPoliciesApi* | [**createPolicy**](docs/ValidationPoliciesApi.md#createpolicyoperation) | **POST** /v1/policies | Create policy
*ValidationPoliciesApi* | [**createPolicyFromPreset**](docs/ValidationPoliciesApi.md#createpolicyfrompresetoperation) | **POST** /v1/policies/from-preset | Create policy from preset
*ValidationPoliciesApi* | [**deletePolicy**](docs/ValidationPoliciesApi.md#deletepolicy) | **DELETE** /v1/policies/{policy_id} | Delete policy
*ValidationPoliciesApi* | [**deletePolicyRule**](docs/ValidationPoliciesApi.md#deletepolicyrule) | **DELETE** /v1/policies/{policy_id}/rules/{rule_id} | Delete rule
*ValidationPoliciesApi* | [**getPolicy**](docs/ValidationPoliciesApi.md#getpolicy) | **GET** /v1/policies/{policy_id} | Get policy
*ValidationPoliciesApi* | [**getPolicyPresets**](docs/ValidationPoliciesApi.md#getpolicypresets) | **GET** /v1/policies/presets | Get policy presets
*ValidationPoliciesApi* | [**listPolicies**](docs/ValidationPoliciesApi.md#listpolicies) | **GET** /v1/policies | List policies
*ValidationPoliciesApi* | [**testPolicy**](docs/ValidationPoliciesApi.md#testpolicyoperation) | **POST** /v1/policies/test | Test policy evaluation
*ValidationPoliciesApi* | [**updatePolicy**](docs/ValidationPoliciesApi.md#updatepolicyoperation) | **PUT** /v1/policies/{policy_id} | Update policy


### Models

- [AddBlacklistMonitor201Response](docs/AddBlacklistMonitor201Response.md)
- [AddBlacklistMonitorRequest](docs/AddBlacklistMonitorRequest.md)
- [AddDmarcDomain201Response](docs/AddDmarcDomain201Response.md)
- [AddDmarcDomainRequest](docs/AddDmarcDomainRequest.md)
- [AddPolicyRule201Response](docs/AddPolicyRule201Response.md)
- [AddSuppressionRequest](docs/AddSuppressionRequest.md)
- [AddSuppressionRequestEntriesInner](docs/AddSuppressionRequestEntriesInner.md)
- [AddSuppressionResponse](docs/AddSuppressionResponse.md)
- [AppendToContactList200Response](docs/AppendToContactList200Response.md)
- [AppendToContactListRequest](docs/AppendToContactListRequest.md)
- [BatchDeliverRequest](docs/BatchDeliverRequest.md)
- [BatchDeliverRequestStructuredData](docs/BatchDeliverRequestStructuredData.md)
- [BatchDeliverResponse](docs/BatchDeliverResponse.md)
- [BatchDeliverResponseDelivery](docs/BatchDeliverResponseDelivery.md)
- [BatchDeliverResponseRejectedInner](docs/BatchDeliverResponseRejectedInner.md)
- [BlacklistMonitor](docs/BlacklistMonitor.md)
- [BlacklistMonitorLatestCheck](docs/BlacklistMonitorLatestCheck.md)
- [BounceAnalysisResponse](docs/BounceAnalysisResponse.md)
- [BounceAnalysisResponseAnalysis](docs/BounceAnalysisResponseAnalysis.md)
- [BounceAnalysisResponseAnalysisCategories](docs/BounceAnalysisResponseAnalysisCategories.md)
- [BounceAnalysisResponseAnalysisTopDomainsInner](docs/BounceAnalysisResponseAnalysisTopDomainsInner.md)
- [Campaign](docs/Campaign.md)
- [CampaignResponse](docs/CampaignResponse.md)
- [CampaignStats](docs/CampaignStats.md)
- [CampaignVariant](docs/CampaignVariant.md)
- [CheckSuppressionRequest](docs/CheckSuppressionRequest.md)
- [ClassifyContent200Response](docs/ClassifyContent200Response.md)
- [ClassifyContent200ResponseContentCheck](docs/ClassifyContent200ResponseContentCheck.md)
- [ClassifyContent200ResponseContentCheckCategoriesInner](docs/ClassifyContent200ResponseContentCheckCategoriesInner.md)
- [ClassifyContentRequest](docs/ClassifyContentRequest.md)
- [ConfirmSubscription200Response](docs/ConfirmSubscription200Response.md)
- [ContactList](docs/ContactList.md)
- [CreateBounceAnalysisRequest](docs/CreateBounceAnalysisRequest.md)
- [CreateCampaignRequest](docs/CreateCampaignRequest.md)
- [CreateCampaignVariant201Response](docs/CreateCampaignVariant201Response.md)
- [CreateContactList201Response](docs/CreateContactList201Response.md)
- [CreateContactListRequest](docs/CreateContactListRequest.md)
- [CreateJobFromS3Request](docs/CreateJobFromS3Request.md)
- [CreateJobRequest](docs/CreateJobRequest.md)
- [CreateList201Response](docs/CreateList201Response.md)
- [CreateListRequest](docs/CreateListRequest.md)
- [CreatePolicyFromPresetRequest](docs/CreatePolicyFromPresetRequest.md)
- [CreatePolicyRequest](docs/CreatePolicyRequest.md)
- [CreateSendingDomain201Response](docs/CreateSendingDomain201Response.md)
- [CreateSendingDomainRequest](docs/CreateSendingDomainRequest.md)
- [CreateVariantRequest](docs/CreateVariantRequest.md)
- [CrossReferenceBounces200Response](docs/CrossReferenceBounces200Response.md)
- [CrossReferenceBounces200ResponseCrossReference](docs/CrossReferenceBounces200ResponseCrossReference.md)
- [CrossReferenceBounces200ResponseCrossReferenceEntriesInner](docs/CrossReferenceBounces200ResponseCrossReferenceEntriesInner.md)
- [DeleteJob200Response](docs/DeleteJob200Response.md)
- [DeletePolicy200Response](docs/DeletePolicy200Response.md)
- [DeletePolicyRule200Response](docs/DeletePolicyRule200Response.md)
- [DeliverRequest](docs/DeliverRequest.md)
- [DeliverRequestOptions](docs/DeliverRequestOptions.md)
- [DeliverRequestStructuredData](docs/DeliverRequestStructuredData.md)
- [DeliverRequestToInner](docs/DeliverRequestToInner.md)
- [DeliverResponse](docs/DeliverResponse.md)
- [DeliverResponseDelivery](docs/DeliverResponseDelivery.md)
- [DmarcDomain](docs/DmarcDomain.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [GetBlacklistHistory200Response](docs/GetBlacklistHistory200Response.md)
- [GetBlacklistHistory200ResponseChecksInner](docs/GetBlacklistHistory200ResponseChecksInner.md)
- [GetBounceRecords200Response](docs/GetBounceRecords200Response.md)
- [GetBounceRecords200ResponseRecordsInner](docs/GetBounceRecords200ResponseRecordsInner.md)
- [GetCampaignABResults200Response](docs/GetCampaignABResults200Response.md)
- [GetCampaignABResults200ResponseVariantsInner](docs/GetCampaignABResults200ResponseVariantsInner.md)
- [GetCampaignABResults200ResponseWinner](docs/GetCampaignABResults200ResponseWinner.md)
- [GetCampaignAttribution200Response](docs/GetCampaignAttribution200Response.md)
- [GetCampaignAttribution200ResponseAttribution](docs/GetCampaignAttribution200ResponseAttribution.md)
- [GetCampaignAttribution200ResponseAttributionFirstTouch](docs/GetCampaignAttribution200ResponseAttributionFirstTouch.md)
- [GetCampaignDeliveryConfidence200Response](docs/GetCampaignDeliveryConfidence200Response.md)
- [GetCampaignDeliveryConfidence200ResponseFactors](docs/GetCampaignDeliveryConfidence200ResponseFactors.md)
- [GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth](docs/GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth.md)
- [GetCampaignDeliveryConfidence200ResponseFactorsListQuality](docs/GetCampaignDeliveryConfidence200ResponseFactorsListQuality.md)
- [GetCampaignDeliveryConfidence200ResponseFactorsSenderReputation](docs/GetCampaignDeliveryConfidence200ResponseFactorsSenderReputation.md)
- [GetCampaignFunnel200Response](docs/GetCampaignFunnel200Response.md)
- [GetCampaignFunnel200ResponseFunnel](docs/GetCampaignFunnel200ResponseFunnel.md)
- [GetCampaignFunnel200ResponseRates](docs/GetCampaignFunnel200ResponseRates.md)
- [GetCampaignProviderIntelligence200Response](docs/GetCampaignProviderIntelligence200Response.md)
- [GetCampaignProviderIntelligence200ResponseProvidersInner](docs/GetCampaignProviderIntelligence200ResponseProvidersInner.md)
- [GetDmarcDomain200Response](docs/GetDmarcDomain200Response.md)
- [GetDmarcDomain200ResponseDomain](docs/GetDmarcDomain200ResponseDomain.md)
- [GetDmarcDomain200ResponseDomainAllOfSummary](docs/GetDmarcDomain200ResponseDomainAllOfSummary.md)
- [GetDmarcRecommendation200Response](docs/GetDmarcRecommendation200Response.md)
- [GetDmarcRecommendation200ResponseRecommendation](docs/GetDmarcRecommendation200ResponseRecommendation.md)
- [GetDmarcSources200Response](docs/GetDmarcSources200Response.md)
- [GetDmarcSources200ResponseSourcesInner](docs/GetDmarcSources200ResponseSourcesInner.md)
- [GetDmarcTrend200Response](docs/GetDmarcTrend200Response.md)
- [GetDmarcTrend200ResponseTrendInner](docs/GetDmarcTrend200ResponseTrendInner.md)
- [GetInactiveContactsReport200Response](docs/GetInactiveContactsReport200Response.md)
- [GetInactiveContactsReport200ResponseByListInner](docs/GetInactiveContactsReport200ResponseByListInner.md)
- [GetLists200Response](docs/GetLists200Response.md)
- [GetMessageEvents200Response](docs/GetMessageEvents200Response.md)
- [GetMessageEvents200ResponseClicksInner](docs/GetMessageEvents200ResponseClicksInner.md)
- [GetMessageEvents200ResponseEventsInner](docs/GetMessageEvents200ResponseEventsInner.md)
- [GetMessageEvents200ResponseSummary](docs/GetMessageEvents200ResponseSummary.md)
- [GetPresignedUploadRequest](docs/GetPresignedUploadRequest.md)
- [GetSenderHealth200Response](docs/GetSenderHealth200Response.md)
- [GetSenderHealth200ResponseComponents](docs/GetSenderHealth200ResponseComponents.md)
- [GetSenderHealth200ResponseComponentsDeliveryRate](docs/GetSenderHealth200ResponseComponentsDeliveryRate.md)
- [GetSenderHealth200ResponseVolume](docs/GetSenderHealth200ResponseVolume.md)
- [GetSenderHealthTrend200Response](docs/GetSenderHealthTrend200Response.md)
- [GetSenderHealthTrend200ResponseDataPointsInner](docs/GetSenderHealthTrend200ResponseDataPointsInner.md)
- [GetSendingDomainIdentityScore200Response](docs/GetSendingDomainIdentityScore200Response.md)
- [GetSendingStats200Response](docs/GetSendingStats200Response.md)
- [GetSendingStats200ResponseStats](docs/GetSendingStats200ResponseStats.md)
- [GetSubscribers200Response](docs/GetSubscribers200Response.md)
- [HealthCheck200Response](docs/HealthCheck200Response.md)
- [IdentityScoreCheck](docs/IdentityScoreCheck.md)
- [Job](docs/Job.md)
- [JobArtifacts](docs/JobArtifacts.md)
- [JobListResponse](docs/JobListResponse.md)
- [JobResponse](docs/JobResponse.md)
- [JobSummary](docs/JobSummary.md)
- [ListBlacklistMonitors200Response](docs/ListBlacklistMonitors200Response.md)
- [ListCampaigns200Response](docs/ListCampaigns200Response.md)
- [ListContactLists200Response](docs/ListContactLists200Response.md)
- [ListDmarcDomains200Response](docs/ListDmarcDomains200Response.md)
- [ListSendingDomains200Response](docs/ListSendingDomains200Response.md)
- [ListServerTests200Response](docs/ListServerTests200Response.md)
- [ListSpamChecks200Response](docs/ListSpamChecks200Response.md)
- [Pagination](docs/Pagination.md)
- [Policy](docs/Policy.md)
- [PolicyListResponse](docs/PolicyListResponse.md)
- [PolicyListResponseLimits](docs/PolicyListResponseLimits.md)
- [PolicyPresetsResponse](docs/PolicyPresetsResponse.md)
- [PolicyPresetsResponsePresetsInner](docs/PolicyPresetsResponsePresetsInner.md)
- [PolicyResponse](docs/PolicyResponse.md)
- [PolicyRule](docs/PolicyRule.md)
- [PolicyRuleAction](docs/PolicyRuleAction.md)
- [PolicyTestResponse](docs/PolicyTestResponse.md)
- [PresignedUploadResponse](docs/PresignedUploadResponse.md)
- [PresignedUploadResponseUpload](docs/PresignedUploadResponseUpload.md)
- [QueryContactList200Response](docs/QueryContactList200Response.md)
- [QueryContactList200ResponseEmailsInner](docs/QueryContactList200ResponseEmailsInner.md)
- [QueryContactListRequest](docs/QueryContactListRequest.md)
- [QueryContactListRequestFiltersInner](docs/QueryContactListRequestFiltersInner.md)
- [RemoveSuppression200Response](docs/RemoveSuppression200Response.md)
- [RemoveSuppressionRequest](docs/RemoveSuppressionRequest.md)
- [ResultsResponse](docs/ResultsResponse.md)
- [RunBlacklistCheck200Response](docs/RunBlacklistCheck200Response.md)
- [RunBlacklistCheck200ResponseCheck](docs/RunBlacklistCheck200ResponseCheck.md)
- [RunServerTest201Response](docs/RunServerTest201Response.md)
- [RunServerTestRequest](docs/RunServerTestRequest.md)
- [RunSpamCheck201Response](docs/RunSpamCheck201Response.md)
- [RunSpamCheckRequest](docs/RunSpamCheckRequest.md)
- [ScheduleCampaignRequest](docs/ScheduleCampaignRequest.md)
- [SendingDomain](docs/SendingDomain.md)
- [SendingDomainDnsRecords](docs/SendingDomainDnsRecords.md)
- [SendingDomainDnsRecordsNs](docs/SendingDomainDnsRecordsNs.md)
- [SendingDomainIdentityScore](docs/SendingDomainIdentityScore.md)
- [SendingDomainIdentityScoreBreakdown](docs/SendingDomainIdentityScoreBreakdown.md)
- [ServerTest](docs/ServerTest.md)
- [ServerTestDnsChecks](docs/ServerTestDnsChecks.md)
- [ServerTestMxRecordsInner](docs/ServerTestMxRecordsInner.md)
- [ServerTestSmtpCheck](docs/ServerTestSmtpCheck.md)
- [SpamCheck](docs/SpamCheck.md)
- [SpamCheckChecks](docs/SpamCheckChecks.md)
- [SubscribeRequest](docs/SubscribeRequest.md)
- [Subscriber](docs/Subscriber.md)
- [SubscriberList](docs/SubscriberList.md)
- [SuppressionAuditResponse](docs/SuppressionAuditResponse.md)
- [SuppressionAuditResponseEntriesInner](docs/SuppressionAuditResponseEntriesInner.md)
- [SuppressionCheckResponse](docs/SuppressionCheckResponse.md)
- [SuppressionEntry](docs/SuppressionEntry.md)
- [SuppressionListResponse](docs/SuppressionListResponse.md)
- [SuppressionStatsResponse](docs/SuppressionStatsResponse.md)
- [SuppressionStatsResponseByType](docs/SuppressionStatsResponseByType.md)
- [TelemetrySummary](docs/TelemetrySummary.md)
- [TelemetrySummaryRates](docs/TelemetrySummaryRates.md)
- [TelemetrySummaryTopDomainsInner](docs/TelemetrySummaryTopDomainsInner.md)
- [TelemetrySummaryTopReasonsInner](docs/TelemetrySummaryTopReasonsInner.md)
- [TelemetrySummaryTotals](docs/TelemetrySummaryTotals.md)
- [TestPolicyRequest](docs/TestPolicyRequest.md)
- [TestPolicyRequestTestResult](docs/TestPolicyRequestTestResult.md)
- [UnsubscribeSubscriber200Response](docs/UnsubscribeSubscriber200Response.md)
- [UpdatePolicyRequest](docs/UpdatePolicyRequest.md)
- [ValidateBatch200Response](docs/ValidateBatch200Response.md)
- [ValidateBatch200ResponseSummary](docs/ValidateBatch200ResponseSummary.md)
- [ValidateBatchRequest](docs/ValidateBatchRequest.md)
- [ValidateRequest](docs/ValidateRequest.md)
- [ValidationResponse](docs/ValidationResponse.md)
- [ValidationResponsePolicyApplied](docs/ValidationResponsePolicyApplied.md)
- [ValidationResponseSuppressionMatch](docs/ValidationResponseSuppressionMatch.md)
- [ValidationResult](docs/ValidationResult.md)
- [ValidationResultSuppression](docs/ValidationResultSuppression.md)
- [WebhookEvent](docs/WebhookEvent.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://mailodds.com/contact](https://mailodds.com/contact)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[Proprietary](https://mailodds.com/terms)
