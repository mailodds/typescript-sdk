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
  AgentControlPlaneApi,
} from '@mailodds/sdk';
import type { GetMcpCapabilitiesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new AgentControlPlaneApi();

  try {
    const data = await api.getMcpCapabilities();
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

All URIs are relative to *https://api.mailodds.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AgentControlPlaneApi* | [**getMcpCapabilities**](docs/AgentControlPlaneApi.md#getmcpcapabilities) | **GET** /v1/mcp/capabilities | Get MCP capabilities
*AlertRulesApi* | [**createAlertRule**](docs/AlertRulesApi.md#createalertruleoperation) | **POST** /v1/alert-rules | Create alert rule
*AlertRulesApi* | [**deleteAlertRule**](docs/AlertRulesApi.md#deletealertrule) | **DELETE** /v1/alert-rules/{rule_id} | Delete alert rule
*AlertRulesApi* | [**getAlertRule**](docs/AlertRulesApi.md#getalertrule) | **GET** /v1/alert-rules/{rule_id} | Get alert rule
*AlertRulesApi* | [**listAlertRules**](docs/AlertRulesApi.md#listalertrules) | **GET** /v1/alert-rules | List alert rules
*AlertRulesApi* | [**updateAlertRule**](docs/AlertRulesApi.md#updatealertruleoperation) | **PUT** /v1/alert-rules/{rule_id} | Update alert rule
*BlacklistMonitoringApi* | [**addBlacklistMonitor**](docs/BlacklistMonitoringApi.md#addblacklistmonitoroperation) | **POST** /v1/blacklist-monitors | Add blacklist monitor
*BlacklistMonitoringApi* | [**deleteBlacklistMonitor**](docs/BlacklistMonitoringApi.md#deleteblacklistmonitor) | **DELETE** /v1/blacklist-monitors/{monitor_id} | Delete a blacklist monitor
*BlacklistMonitoringApi* | [**getBlacklistHistory**](docs/BlacklistMonitoringApi.md#getblacklisthistory) | **GET** /v1/blacklist-monitors/{monitor_id}/history | Get blacklist check history
*BlacklistMonitoringApi* | [**listBlacklistMonitors**](docs/BlacklistMonitoringApi.md#listblacklistmonitors) | **GET** /v1/blacklist-monitors | List blacklist monitors
*BlacklistMonitoringApi* | [**runBlacklistCheck**](docs/BlacklistMonitoringApi.md#runblacklistcheck) | **POST** /v1/blacklist-monitors/{monitor_id}/check | Run blacklist check
*BounceAnalysisApi* | [**createBounceAnalysis**](docs/BounceAnalysisApi.md#createbounceanalysisoperation) | **POST** /v1/bounce-analyses | Analyze bounce logs
*BounceAnalysisApi* | [**crossReferenceBounces**](docs/BounceAnalysisApi.md#crossreferencebounces) | **GET** /v1/bounce-analyses/{analysis_id}/cross-reference | Cross-reference bounces with validation logs
*BounceAnalysisApi* | [**deleteBounceAnalysis**](docs/BounceAnalysisApi.md#deletebounceanalysis) | **DELETE** /v1/bounce-analyses/{analysis_id} | Delete bounce analysis
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
*BulkValidationApi* | [**retryJob**](docs/BulkValidationApi.md#retryjob) | **POST** /v1/jobs/{job_id}/retry | Retry failed job
*CampaignAnalyticsApi* | [**getCampaignABResults**](docs/CampaignAnalyticsApi.md#getcampaignabresults) | **GET** /v1/campaigns/{campaign_id}/ab-results | Get A/B test results
*CampaignAnalyticsApi* | [**getCampaignAttribution**](docs/CampaignAnalyticsApi.md#getcampaignattribution) | **GET** /v1/campaigns/{campaign_id}/conversions/attribution | Get campaign attribution
*CampaignAnalyticsApi* | [**getCampaignDeliveryConfidence**](docs/CampaignAnalyticsApi.md#getcampaigndeliveryconfidence) | **GET** /v1/campaigns/{campaign_id}/delivery-confidence | Get pre-send delivery confidence
*CampaignAnalyticsApi* | [**getCampaignFunnel**](docs/CampaignAnalyticsApi.md#getcampaignfunnel) | **GET** /v1/campaigns/{campaign_id}/funnel | Get campaign funnel
*CampaignAnalyticsApi* | [**getCampaignProviderIntelligence**](docs/CampaignAnalyticsApi.md#getcampaignproviderintelligence) | **GET** /v1/campaigns/{campaign_id}/provider-intelligence | Get provider intelligence
*CampaignsApi* | [**cancelCampaign**](docs/CampaignsApi.md#cancelcampaign) | **POST** /v1/campaigns/{campaign_id}/cancel | Cancel a campaign
*CampaignsApi* | [**createCampaign**](docs/CampaignsApi.md#createcampaignoperation) | **POST** /v1/campaigns | Create a campaign
*CampaignsApi* | [**createCampaignVariant**](docs/CampaignsApi.md#createcampaignvariant) | **POST** /v1/campaigns/{campaign_id}/variants | Create A/B variant
*CampaignsApi* | [**deleteCampaign**](docs/CampaignsApi.md#deletecampaign) | **DELETE** /v1/campaigns/{campaign_id} | Delete a campaign
*CampaignsApi* | [**getCampaign**](docs/CampaignsApi.md#getcampaign) | **GET** /v1/campaigns/{campaign_id} | Get campaign with stats
*CampaignsApi* | [**listCampaigns**](docs/CampaignsApi.md#listcampaigns) | **GET** /v1/campaigns | List campaigns
*CampaignsApi* | [**scheduleCampaign**](docs/CampaignsApi.md#schedulecampaignoperation) | **POST** /v1/campaigns/{campaign_id}/schedule | Schedule a campaign
*CampaignsApi* | [**sendCampaign**](docs/CampaignsApi.md#sendcampaign) | **POST** /v1/campaigns/{campaign_id}/send | Send a campaign
*ConfigurationSetsApi* | [**createConfigurationSet**](docs/ConfigurationSetsApi.md#createconfigurationset) | **POST** /v1/configuration-sets | Create a configuration set
*ConfigurationSetsApi* | [**deleteConfigurationSet**](docs/ConfigurationSetsApi.md#deleteconfigurationset) | **DELETE** /v1/configuration-sets/{name} | Delete a configuration set
*ConfigurationSetsApi* | [**getConfigurationSet**](docs/ConfigurationSetsApi.md#getconfigurationset) | **GET** /v1/configuration-sets/{name} | Get a configuration set
*ConfigurationSetsApi* | [**getConfigurationSetMetrics**](docs/ConfigurationSetsApi.md#getconfigurationsetmetrics) | **GET** /v1/configuration-sets/{name}/metrics | Get configuration set metrics
*ConfigurationSetsApi* | [**listConfigurationSets**](docs/ConfigurationSetsApi.md#listconfigurationsets) | **GET** /v1/configuration-sets | List configuration sets
*ConfigurationSetsApi* | [**updateConfigurationSet**](docs/ConfigurationSetsApi.md#updateconfigurationset) | **PUT** /v1/configuration-sets/{name} | Update a configuration set
*ContactListsApi* | [**addContact**](docs/ContactListsApi.md#addcontactoperation) | **POST** /v1/contact-lists/{list_id}/contacts | Add contact to list
*ContactListsApi* | [**appendToContactList**](docs/ContactListsApi.md#appendtocontactlistoperation) | **POST** /v1/contact-lists/{list_id}/append | Append to contact list
*ContactListsApi* | [**createContactList**](docs/ContactListsApi.md#createcontactlistoperation) | **POST** /v1/contact-lists | Create contact list
*ContactListsApi* | [**deleteContact**](docs/ContactListsApi.md#deletecontact) | **DELETE** /v1/contact-lists/{list_id}/contacts/{contact_id} | Delete contact
*ContactListsApi* | [**deleteContactList**](docs/ContactListsApi.md#deletecontactlist) | **DELETE** /v1/contact-lists/{list_id} | Delete a contact list
*ContactListsApi* | [**exportContactList**](docs/ContactListsApi.md#exportcontactlist) | **GET** /v1/contact-lists/{list_id}/export | Export contact list
*ContactListsApi* | [**getInactiveContactsReport**](docs/ContactListsApi.md#getinactivecontactsreport) | **GET** /v1/contacts/inactive-report | Get inactive contacts report
*ContactListsApi* | [**importContactList**](docs/ContactListsApi.md#importcontactlist) | **POST** /v1/contact-lists/{list_id}/import | Import contacts from CSV
*ContactListsApi* | [**listContactLists**](docs/ContactListsApi.md#listcontactlists) | **GET** /v1/contact-lists | List contact lists
*ContactListsApi* | [**queryContactList**](docs/ContactListsApi.md#querycontactlistoperation) | **POST** /v1/contact-lists/{list_id}/query | Query contact list
*ContactListsApi* | [**updateContact**](docs/ContactListsApi.md#updatecontactoperation) | **PATCH** /v1/contact-lists/{list_id}/contacts/{contact_id} | Update contact
*ContentClassificationApi* | [**classifyContent**](docs/ContentClassificationApi.md#classifycontentoperation) | **POST** /v1/content-check | Classify email content
*DKIMManagementApi* | [**getDkimDnsRecord**](docs/DKIMManagementApi.md#getdkimdnsrecord) | **GET** /v1/sending-domains/{domain_id}/dkim/dns-record | Get DKIM DNS record
*DKIMManagementApi* | [**rotateDkim**](docs/DKIMManagementApi.md#rotatedkim) | **POST** /v1/sending-domains/{domain_id}/dkim/rotate | Rotate DKIM keys
*DMARCMonitoringApi* | [**addDmarcDomain**](docs/DMARCMonitoringApi.md#adddmarcdomainoperation) | **POST** /v1/dmarc-domains | Add DMARC domain
*DMARCMonitoringApi* | [**deleteDmarcDomain**](docs/DMARCMonitoringApi.md#deletedmarcdomain) | **DELETE** /v1/dmarc-domains/{domain_id} | Delete a DMARC domain
*DMARCMonitoringApi* | [**getDmarcDomain**](docs/DMARCMonitoringApi.md#getdmarcdomain) | **GET** /v1/dmarc-domains/{domain_id} | Get DMARC domain
*DMARCMonitoringApi* | [**getDmarcRecommendation**](docs/DMARCMonitoringApi.md#getdmarcrecommendation) | **GET** /v1/dmarc-domains/{domain_id}/recommendation | Get DMARC policy recommendation
*DMARCMonitoringApi* | [**getDmarcSources**](docs/DMARCMonitoringApi.md#getdmarcsources) | **GET** /v1/dmarc-domains/{domain_id}/sources | Get DMARC sending sources
*DMARCMonitoringApi* | [**getDmarcTrend**](docs/DMARCMonitoringApi.md#getdmarctrend) | **GET** /v1/dmarc-domains/{domain_id}/trend | Get DMARC trend
*DMARCMonitoringApi* | [**listDmarcDomains**](docs/DMARCMonitoringApi.md#listdmarcdomains) | **GET** /v1/dmarc-domains | List DMARC domains
*DMARCMonitoringApi* | [**verifyDmarcDomain**](docs/DMARCMonitoringApi.md#verifydmarcdomain) | **POST** /v1/dmarc-domains/{domain_id}/verify | Verify DMARC DNS records
*DNSProviderApi* | [**connectDnsProvider**](docs/DNSProviderApi.md#connectdnsprovideroperation) | **POST** /v1/account/dns-provider | Connect DNS provider
*DNSProviderApi* | [**disconnectDnsProvider**](docs/DNSProviderApi.md#disconnectdnsprovider) | **DELETE** /v1/account/dns-provider | Disconnect DNS provider
*DNSProviderApi* | [**getDnsProvider**](docs/DNSProviderApi.md#getdnsprovider) | **GET** /v1/account/dns-provider | Get DNS provider status
*DeliverabilityAdvisorApi* | [**dismissDeliverabilityRecommendation**](docs/DeliverabilityAdvisorApi.md#dismissdeliverabilityrecommendation) | **POST** /v1/deliverability/recommendations/{recommendation_id}/dismiss | Dismiss a deliverability recommendation
*DeliverabilityAdvisorApi* | [**getDeliverabilityRecommendations**](docs/DeliverabilityAdvisorApi.md#getdeliverabilityrecommendations) | **GET** /v1/deliverability/recommendations | Get deliverability recommendations
*DomainInsightsApi* | [**getDomainHookEffectiveness**](docs/DomainInsightsApi.md#getdomainhookeffectiveness) | **GET** /v1/sending-domains/{domain_id}/insights/hook-effectiveness | Get hook effectiveness metrics
*DomainInsightsApi* | [**getDomainInsightsFunnel**](docs/DomainInsightsApi.md#getdomaininsightsfunnel) | **GET** /v1/sending-domains/{domain_id}/insights/funnel | Get domain engagement funnel
*DomainInsightsApi* | [**getDomainInsightsTrends**](docs/DomainInsightsApi.md#getdomaininsightstrends) | **GET** /v1/sending-domains/{domain_id}/insights/trends | Get domain engagement trends
*EmailSendingApi* | [**deliverBatch**](docs/EmailSendingApi.md#deliverbatch) | **POST** /v1/deliver/batch | Send to multiple recipients (max 100)
*EmailSendingApi* | [**deliverEmail**](docs/EmailSendingApi.md#deliveremail) | **POST** /v1/deliver | Send a single email
*EmailValidationApi* | [**validateBatch**](docs/EmailValidationApi.md#validatebatchoperation) | **POST** /v1/validate/batch | Validate multiple emails (sync)
*EmailValidationApi* | [**validateEmail**](docs/EmailValidationApi.md#validateemail) | **POST** /v1/validate | Validate single email
*EngagementApi* | [**getDisengagedContacts**](docs/EngagementApi.md#getdisengagedcontacts) | **GET** /v1/engagement/disengaged | List disengaged contacts
*EngagementApi* | [**getEngagementScore**](docs/EngagementApi.md#getengagementscore) | **GET** /v1/engagement/score/{email} | Get engagement score
*EngagementApi* | [**getEngagementSummary**](docs/EngagementApi.md#getengagementsummary) | **GET** /v1/engagement/summary | Get engagement summary
*EngagementApi* | [**suppressDisengaged**](docs/EngagementApi.md#suppressdisengagedoperation) | **POST** /v1/engagement/suppress-disengaged | Suppress disengaged contacts
*EventDestinationsApi* | [**createEventDestination**](docs/EventDestinationsApi.md#createeventdestination) | **POST** /v1/event-destinations | Create an event destination
*EventDestinationsApi* | [**deleteEventDestination**](docs/EventDestinationsApi.md#deleteeventdestination) | **DELETE** /v1/event-destinations/{destination_id} | Delete an event destination
*EventDestinationsApi* | [**getEventDestination**](docs/EventDestinationsApi.md#geteventdestination) | **GET** /v1/event-destinations/{destination_id} | Get an event destination
*EventDestinationsApi* | [**listEventDestinationTemplates**](docs/EventDestinationsApi.md#listeventdestinationtemplates) | **GET** /v1/event-destinations/templates | List event destination templates
*EventDestinationsApi* | [**listEventDestinations**](docs/EventDestinationsApi.md#listeventdestinations) | **GET** /v1/event-destinations | List event destinations
*EventDestinationsApi* | [**listEventSchemas**](docs/EventDestinationsApi.md#listeventschemas) | **GET** /v1/event-destinations/schemas | List event schemas
*EventDestinationsApi* | [**updateEventDestination**](docs/EventDestinationsApi.md#updateeventdestination) | **PUT** /v1/event-destinations/{destination_id} | Update an event destination
*EventsApi* | [**trackEvent**](docs/EventsApi.md#trackeventoperation) | **POST** /v1/events/track | Track a commerce event
*GlobalSuppressionsApi* | [**addGlobalSuppressionOverride**](docs/GlobalSuppressionsApi.md#addglobalsuppressionoverride) | **POST** /v1/global-suppressions/overrides | Add global suppression override
*GlobalSuppressionsApi* | [**checkGlobalSuppression**](docs/GlobalSuppressionsApi.md#checkglobalsuppression) | **GET** /v1/global-suppressions/check | Check global suppression
*GlobalSuppressionsApi* | [**removeGlobalSuppressionOverride**](docs/GlobalSuppressionsApi.md#removeglobalsuppressionoverride) | **DELETE** /v1/global-suppressions/overrides | Remove global suppression override
*ISPFBLGuidesApi* | [**getIspFblGuide**](docs/ISPFBLGuidesApi.md#getispfblguide) | **GET** /v1/isp-fbl/guides/{isp_id} | Get ISP FBL guide
*ISPFBLGuidesApi* | [**listIspFblGuides**](docs/ISPFBLGuidesApi.md#listispfblguides) | **GET** /v1/isp-fbl/guides | List ISP FBL guides
*InboundProcessingApi* | [**correctInboundMessage**](docs/InboundProcessingApi.md#correctinboundmessageoperation) | **PATCH** /v1/inbound-messages/{message_id}/correction | Correct inbound message classification
*InboundProcessingApi* | [**getBounceStats**](docs/InboundProcessingApi.md#getbouncestats) | **GET** /v1/bounce-stats | Get bounce statistics
*InboundProcessingApi* | [**getBounceStatsSummary**](docs/InboundProcessingApi.md#getbouncestatssummary) | **GET** /v1/bounce-stats/summary | Get bounce statistics summary
*InboundProcessingApi* | [**getComplaintAssessment**](docs/InboundProcessingApi.md#getcomplaintassessment) | **GET** /v1/complaint-assessment | Get complaint assessment
*InboundProcessingApi* | [**getInboundMessage**](docs/InboundProcessingApi.md#getinboundmessage) | **GET** /v1/inbound-messages/{message_id} | Get inbound message
*InboundProcessingApi* | [**listInboundMessages**](docs/InboundProcessingApi.md#listinboundmessages) | **GET** /v1/inbound-messages | List inbound messages
*InboundRulesApi* | [**createInboundRule**](docs/InboundRulesApi.md#createinboundrule) | **POST** /v1/sending-domains/{domain_id}/inbound-rules | Create an inbound rule
*InboundRulesApi* | [**deleteInboundRule**](docs/InboundRulesApi.md#deleteinboundrule) | **DELETE** /v1/sending-domains/{domain_id}/inbound-rules/{rule_id} | Delete an inbound rule
*InboundRulesApi* | [**dryRunInboundRules**](docs/InboundRulesApi.md#dryruninboundrules) | **POST** /v1/sending-domains/{domain_id}/inbound-rules/dry-run | Dry-run inbound rules
*InboundRulesApi* | [**getInboundRule**](docs/InboundRulesApi.md#getinboundrule) | **GET** /v1/sending-domains/{domain_id}/inbound-rules/{rule_id} | Get an inbound rule
*InboundRulesApi* | [**listInboundRules**](docs/InboundRulesApi.md#listinboundrules) | **GET** /v1/sending-domains/{domain_id}/inbound-rules | List inbound rules
*InboundRulesApi* | [**updateInboundRule**](docs/InboundRulesApi.md#updateinboundrule) | **PUT** /v1/sending-domains/{domain_id}/inbound-rules/{rule_id} | Update an inbound rule
*ManagedSPFApi* | [**createManagedSpf**](docs/ManagedSPFApi.md#createmanagedspf) | **POST** /v1/sending-domains/{domain_id}/managed-spf | Create managed SPF record
*ManagedSPFApi* | [**getManagedSpf**](docs/ManagedSPFApi.md#getmanagedspf) | **GET** /v1/sending-domains/{domain_id}/managed-spf | Get managed SPF record
*ManagedSPFApi* | [**refreshManagedSpf**](docs/ManagedSPFApi.md#refreshmanagedspf) | **POST** /v1/sending-domains/{domain_id}/managed-spf/refresh | Refresh managed SPF record
*ManagedSPFApi* | [**updateManagedSpf**](docs/ManagedSPFApi.md#updatemanagedspf) | **PUT** /v1/sending-domains/{domain_id}/managed-spf | Update managed SPF settings
*MessageEventsApi* | [**getMessageEvents**](docs/MessageEventsApi.md#getmessageevents) | **GET** /v1/message-events | Get message events
*OAuth20Api* | [**createToken**](docs/OAuth20Api.md#createtoken) | **POST** /oauth/token | Create token
*OAuth20Api* | [**getJwks**](docs/OAuth20Api.md#getjwks) | **GET** /.well-known/jwks.json | Get JSON Web Key Set
*OAuth20Api* | [**introspectToken**](docs/OAuth20Api.md#introspecttoken) | **POST** /oauth/introspect | Introspect token
*OAuth20Api* | [**oauthRegisterClient**](docs/OAuth20Api.md#oauthregisterclient) | **POST** /oauth/register | Register OAuth client
*OAuth20Api* | [**oauthServerMetadata**](docs/OAuth20Api.md#oauthservermetadata) | **GET** /.well-known/oauth-authorization-server | OAuth server metadata
*OAuth20Api* | [**revokeToken**](docs/OAuth20Api.md#revoketoken) | **POST** /oauth/revoke | Revoke token
*OutOfOfficeApi* | [**batchCheckOoo**](docs/OutOfOfficeApi.md#batchcheckooooperation) | **POST** /v1/out-of-office/batch-check | Batch check OOO status
*OutOfOfficeApi* | [**deleteOooContact**](docs/OutOfOfficeApi.md#deleteooocontact) | **DELETE** /v1/out-of-office/{email} | Delete OOO contact
*OutOfOfficeApi* | [**getOooStatus**](docs/OutOfOfficeApi.md#getooostatus) | **GET** /v1/out-of-office/{email}/status | Get OOO status for email
*OutOfOfficeApi* | [**listOooContacts**](docs/OutOfOfficeApi.md#listooocontacts) | **GET** /v1/out-of-office | List out-of-office contacts
*OutOfOfficeApi* | [**updateOooContact**](docs/OutOfOfficeApi.md#updateooocontactoperation) | **PATCH** /v1/out-of-office/{email} | Update OOO contact
*PipelineSimulationApi* | [**simulatePipeline**](docs/PipelineSimulationApi.md#simulatepipeline) | **POST** /v1/simulate | Simulate sending pipeline
*PixelSettingsApi* | [**getPixelSettings**](docs/PixelSettingsApi.md#getpixelsettings) | **GET** /v1/pixel-settings | Get pixel settings
*PixelSettingsApi* | [**updatePixelSettings**](docs/PixelSettingsApi.md#updatepixelsettingsoperation) | **PATCH** /v1/pixel-settings | Update pixel settings
*ReputationApi* | [**getReputation**](docs/ReputationApi.md#getreputation) | **GET** /v1/reputation | Get account reputation
*ReputationApi* | [**getReputationTimeline**](docs/ReputationApi.md#getreputationtimeline) | **GET** /v1/reputation/timeline | Get reputation timeline
*ReputationPoliciesApi* | [**createReputationPolicy**](docs/ReputationPoliciesApi.md#createreputationpolicy) | **POST** /v1/reputation-policies | Create a reputation policy
*ReputationPoliciesApi* | [**createReputationPolicyFromPreset**](docs/ReputationPoliciesApi.md#createreputationpolicyfrompreset) | **POST** /v1/reputation-policies/from-preset | Create a reputation policy from preset
*ReputationPoliciesApi* | [**deleteReputationPolicy**](docs/ReputationPoliciesApi.md#deletereputationpolicy) | **DELETE** /v1/reputation-policies/{policy_id} | Delete a reputation policy
*ReputationPoliciesApi* | [**getReputationPolicy**](docs/ReputationPoliciesApi.md#getreputationpolicy) | **GET** /v1/reputation-policies/{policy_id} | Get a reputation policy
*ReputationPoliciesApi* | [**getReputationPolicyStatus**](docs/ReputationPoliciesApi.md#getreputationpolicystatus) | **GET** /v1/reputation-policies/{policy_id}/status | Get reputation policy status
*ReputationPoliciesApi* | [**listReputationPolicies**](docs/ReputationPoliciesApi.md#listreputationpolicies) | **GET** /v1/reputation-policies | List reputation policies
*ReputationPoliciesApi* | [**testReputationPolicy**](docs/ReputationPoliciesApi.md#testreputationpolicy) | **POST** /v1/reputation-policies/{policy_id}/test | Test a reputation policy
*ReputationPoliciesApi* | [**updateReputationPolicy**](docs/ReputationPoliciesApi.md#updatereputationpolicy) | **PUT** /v1/reputation-policies/{policy_id} | Update a reputation policy
*SenderHealthApi* | [**getSenderHealth**](docs/SenderHealthApi.md#getsenderhealth) | **GET** /v1/sender-health | Get sender health score
*SenderHealthApi* | [**getSenderHealthTrend**](docs/SenderHealthApi.md#getsenderhealthtrend) | **GET** /v1/sender-health/trend | Get sender health trend
*SendingDelegationsApi* | [**createDelegation**](docs/SendingDelegationsApi.md#createdelegation) | **POST** /v1/sending-domains/{domain_id}/delegations | Create a sending delegation
*SendingDelegationsApi* | [**listDelegations**](docs/SendingDelegationsApi.md#listdelegations) | **GET** /v1/sending-domains/{domain_id}/delegations | List sending delegations
*SendingDelegationsApi* | [**revokeDelegation**](docs/SendingDelegationsApi.md#revokedelegation) | **DELETE** /v1/sending-domains/{domain_id}/delegations/{delegation_id} | Revoke a sending delegation
*SendingDomainsApi* | [**createSendingDomain**](docs/SendingDomainsApi.md#createsendingdomainoperation) | **POST** /v1/sending-domains | Add a sending domain
*SendingDomainsApi* | [**deleteSendingDomain**](docs/SendingDomainsApi.md#deletesendingdomain) | **DELETE** /v1/sending-domains/{domain_id} | Delete a sending domain
*SendingDomainsApi* | [**getReplyForwarding**](docs/SendingDomainsApi.md#getreplyforwarding) | **GET** /v1/sending-domains/{domain_id}/reply-forwarding | Get reply forwarding config
*SendingDomainsApi* | [**getSendingDomain**](docs/SendingDomainsApi.md#getsendingdomain) | **GET** /v1/sending-domains/{domain_id} | Get a sending domain
*SendingDomainsApi* | [**getSendingDomainIdentityScore**](docs/SendingDomainsApi.md#getsendingdomainidentityscore) | **GET** /v1/sending-domains/{domain_id}/identity-score | Get domain identity score
*SendingDomainsApi* | [**getSendingStats**](docs/SendingDomainsApi.md#getsendingstats) | **GET** /v1/sending-stats | Get sending statistics
*SendingDomainsApi* | [**listSendingDomains**](docs/SendingDomainsApi.md#listsendingdomains) | **GET** /v1/sending-domains | List sending domains
*SendingDomainsApi* | [**setPrimarySendingDomain**](docs/SendingDomainsApi.md#setprimarysendingdomain) | **POST** /v1/sending-domains/{domain_id}/set-primary | Set primary sending domain
*SendingDomainsApi* | [**updateReplyForwarding**](docs/SendingDomainsApi.md#updatereplyforwardingoperation) | **PATCH** /v1/sending-domains/{domain_id}/reply-forwarding | Update reply forwarding config
*SendingDomainsApi* | [**verifySendingDomain**](docs/SendingDomainsApi.md#verifysendingdomain) | **POST** /v1/sending-domains/{domain_id}/verify | Verify domain DNS records
*ServerTestsApi* | [**getServerTest**](docs/ServerTestsApi.md#getservertest) | **GET** /v1/server-tests/{test_id} | Get server test
*ServerTestsApi* | [**listServerTests**](docs/ServerTestsApi.md#listservertests) | **GET** /v1/server-tests | List server tests
*ServerTestsApi* | [**runServerTest**](docs/ServerTestsApi.md#runservertestoperation) | **POST** /v1/server-tests | Run server test
*SpamChecksApi* | [**deleteSpamCheck**](docs/SpamChecksApi.md#deletespamcheck) | **DELETE** /v1/spam-checks/{check_id} | Delete spam check
*SpamChecksApi* | [**getSpamCheck**](docs/SpamChecksApi.md#getspamcheck) | **GET** /v1/spam-checks/{check_id} | Get spam check
*SpamChecksApi* | [**listSpamChecks**](docs/SpamChecksApi.md#listspamchecks) | **GET** /v1/spam-checks | List spam checks
*SpamChecksApi* | [**runSpamCheck**](docs/SpamChecksApi.md#runspamcheckoperation) | **POST** /v1/spam-checks | Run spam check
*StorefrontDomainsApi* | [**createStorefrontDomain**](docs/StorefrontDomainsApi.md#createstorefrontdomainoperation) | **POST** /v1/storefront-domains | Add a custom storefront domain
*StorefrontDomainsApi* | [**deleteStorefrontDomain**](docs/StorefrontDomainsApi.md#deletestorefrontdomain) | **DELETE** /v1/storefront-domains/{domain_id} | Delete a storefront domain
*StorefrontDomainsApi* | [**getStorefrontDomain**](docs/StorefrontDomainsApi.md#getstorefrontdomain) | **GET** /v1/storefront-domains/{domain_id} | Get storefront domain details
*StorefrontDomainsApi* | [**listStorefrontDomains**](docs/StorefrontDomainsApi.md#liststorefrontdomains) | **GET** /v1/storefront-domains | List storefront domains
*StorefrontDomainsApi* | [**verifyStorefrontDomain**](docs/StorefrontDomainsApi.md#verifystorefrontdomain) | **POST** /v1/storefront-domains/{domain_id}/verify | Verify storefront domain DNS
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
*TemplateVersionsApi* | [**canaryTemplateVersion**](docs/TemplateVersionsApi.md#canarytemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions/{version_id}/canary | Start canary deployment
*TemplateVersionsApi* | [**createTemplateVersion**](docs/TemplateVersionsApi.md#createtemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions | Create a template version
*TemplateVersionsApi* | [**getTemplateVersion**](docs/TemplateVersionsApi.md#gettemplateversion) | **GET** /v1/campaigns/{campaign_id}/template-versions/{version_id} | Get a template version
*TemplateVersionsApi* | [**listTemplateVersions**](docs/TemplateVersionsApi.md#listtemplateversions) | **GET** /v1/campaigns/{campaign_id}/template-versions | List template versions
*TemplateVersionsApi* | [**promoteTemplateVersion**](docs/TemplateVersionsApi.md#promotetemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions/{version_id}/promote | Promote a template version
*TemplateVersionsApi* | [**rollbackTemplateVersion**](docs/TemplateVersionsApi.md#rollbacktemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions/rollback | Rollback template version
*TemplateVersionsApi* | [**updateTemplateVersion**](docs/TemplateVersionsApi.md#updatetemplateversion) | **PUT** /v1/campaigns/{campaign_id}/template-versions/{version_id} | Update a template version
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
*WebhookCLIApi* | [**createWebhookCliSession**](docs/WebhookCLIApi.md#createwebhookclisessionoperation) | **POST** /v1/webhook-cli/sessions | Create CLI forwarding session
*WebhookCLIApi* | [**deleteWebhookCliSession**](docs/WebhookCLIApi.md#deletewebhookclisession) | **DELETE** /v1/webhook-cli/sessions/{session_id} | Close CLI session
*WebhookCLIApi* | [**listWebhookDeliveries**](docs/WebhookCLIApi.md#listwebhookdeliveries) | **GET** /v1/webhook-cli/deliveries | List recent webhook deliveries
*WebhookCLIApi* | [**replayWebhookDelivery**](docs/WebhookCLIApi.md#replaywebhookdelivery) | **POST** /v1/webhook-cli/deliveries/{delivery_id}/replay | Replay webhook delivery


### Models

- [AddBlacklistMonitor201Response](docs/AddBlacklistMonitor201Response.md)
- [AddBlacklistMonitorRequest](docs/AddBlacklistMonitorRequest.md)
- [AddContact201Response](docs/AddContact201Response.md)
- [AddContactRequest](docs/AddContactRequest.md)
- [AddDmarcDomain201Response](docs/AddDmarcDomain201Response.md)
- [AddDmarcDomainRequest](docs/AddDmarcDomainRequest.md)
- [AddPolicyRule201Response](docs/AddPolicyRule201Response.md)
- [AddSuppressionRequest](docs/AddSuppressionRequest.md)
- [AddSuppressionRequestEntriesInner](docs/AddSuppressionRequestEntriesInner.md)
- [AddSuppressionResponse](docs/AddSuppressionResponse.md)
- [AlertRule](docs/AlertRule.md)
- [AppendToContactList200Response](docs/AppendToContactList200Response.md)
- [AppendToContactListRequest](docs/AppendToContactListRequest.md)
- [BatchCheckOoo200Response](docs/BatchCheckOoo200Response.md)
- [BatchCheckOoo200ResponseResultsInner](docs/BatchCheckOoo200ResponseResultsInner.md)
- [BatchCheckOooRequest](docs/BatchCheckOooRequest.md)
- [BatchDeliverRequest](docs/BatchDeliverRequest.md)
- [BatchDeliverRequestStructuredData](docs/BatchDeliverRequestStructuredData.md)
- [BatchDeliverResponse](docs/BatchDeliverResponse.md)
- [BatchDeliverResponseDelivery](docs/BatchDeliverResponseDelivery.md)
- [BatchDeliverResponseRejectedInner](docs/BatchDeliverResponseRejectedInner.md)
- [BatchProductsRequest](docs/BatchProductsRequest.md)
- [BatchProductsRequestProductsInner](docs/BatchProductsRequestProductsInner.md)
- [BatchProductsResponse](docs/BatchProductsResponse.md)
- [BatchProductsResponseErrorsInner](docs/BatchProductsResponseErrorsInner.md)
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
- [ClassifyContentRequest](docs/ClassifyContentRequest.md)
- [ConfirmSubscription200Response](docs/ConfirmSubscription200Response.md)
- [ConnectDnsProviderRequest](docs/ConnectDnsProviderRequest.md)
- [ContactList](docs/ContactList.md)
- [CorrectInboundMessageRequest](docs/CorrectInboundMessageRequest.md)
- [CreateAlertRule201Response](docs/CreateAlertRule201Response.md)
- [CreateAlertRuleRequest](docs/CreateAlertRuleRequest.md)
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
- [CreateStoreRequest](docs/CreateStoreRequest.md)
- [CreateStorefrontDomainRequest](docs/CreateStorefrontDomainRequest.md)
- [CreateToken200Response](docs/CreateToken200Response.md)
- [CreateVariantRequest](docs/CreateVariantRequest.md)
- [CreateWebhookCliSession201Response](docs/CreateWebhookCliSession201Response.md)
- [CreateWebhookCliSessionRequest](docs/CreateWebhookCliSessionRequest.md)
- [CrossReferenceBounces200Response](docs/CrossReferenceBounces200Response.md)
- [CrossReferenceBounces200ResponseCrossReference](docs/CrossReferenceBounces200ResponseCrossReference.md)
- [CrossReferenceBounces200ResponseCrossReferenceEntriesInner](docs/CrossReferenceBounces200ResponseCrossReferenceEntriesInner.md)
- [DeleteJob200Response](docs/DeleteJob200Response.md)
- [DeleteOooContact200Response](docs/DeleteOooContact200Response.md)
- [DeletePolicy200Response](docs/DeletePolicy200Response.md)
- [DeletePolicyRule200Response](docs/DeletePolicyRule200Response.md)
- [DeleteWebhookCliSession200Response](docs/DeleteWebhookCliSession200Response.md)
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
- [GetBounceStats200Response](docs/GetBounceStats200Response.md)
- [GetBounceStats200ResponseStats](docs/GetBounceStats200ResponseStats.md)
- [GetBounceStatsSummary200Response](docs/GetBounceStatsSummary200Response.md)
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
- [GetComplaintAssessment200Response](docs/GetComplaintAssessment200Response.md)
- [GetDisengagedContacts200Response](docs/GetDisengagedContacts200Response.md)
- [GetDisengagedContacts200ResponsePagination](docs/GetDisengagedContacts200ResponsePagination.md)
- [GetDmarcDomain200Response](docs/GetDmarcDomain200Response.md)
- [GetDmarcDomain200ResponseDomain](docs/GetDmarcDomain200ResponseDomain.md)
- [GetDmarcDomain200ResponseDomainAllOfSummary](docs/GetDmarcDomain200ResponseDomainAllOfSummary.md)
- [GetDmarcRecommendation200Response](docs/GetDmarcRecommendation200Response.md)
- [GetDmarcRecommendation200ResponseRecommendation](docs/GetDmarcRecommendation200ResponseRecommendation.md)
- [GetDmarcSources200Response](docs/GetDmarcSources200Response.md)
- [GetDmarcSources200ResponseSourcesInner](docs/GetDmarcSources200ResponseSourcesInner.md)
- [GetDmarcTrend200Response](docs/GetDmarcTrend200Response.md)
- [GetDmarcTrend200ResponseTrendInner](docs/GetDmarcTrend200ResponseTrendInner.md)
- [GetDomainHookEffectiveness200Response](docs/GetDomainHookEffectiveness200Response.md)
- [GetDomainInsightsFunnel200Response](docs/GetDomainInsightsFunnel200Response.md)
- [GetDomainInsightsTrends200Response](docs/GetDomainInsightsTrends200Response.md)
- [GetEngagementScore200Response](docs/GetEngagementScore200Response.md)
- [GetInactiveContactsReport200Response](docs/GetInactiveContactsReport200Response.md)
- [GetInactiveContactsReport200ResponseByListInner](docs/GetInactiveContactsReport200ResponseByListInner.md)
- [GetInboundMessage200Response](docs/GetInboundMessage200Response.md)
- [GetLists200Response](docs/GetLists200Response.md)
- [GetMessageEvents200Response](docs/GetMessageEvents200Response.md)
- [GetMessageEvents200ResponseClicksInner](docs/GetMessageEvents200ResponseClicksInner.md)
- [GetMessageEvents200ResponseEventsInner](docs/GetMessageEvents200ResponseEventsInner.md)
- [GetMessageEvents200ResponseSummary](docs/GetMessageEvents200ResponseSummary.md)
- [GetOooStatus200Response](docs/GetOooStatus200Response.md)
- [GetPixelSettings200Response](docs/GetPixelSettings200Response.md)
- [GetPresignedUploadRequest](docs/GetPresignedUploadRequest.md)
- [GetReplyForwarding200Response](docs/GetReplyForwarding200Response.md)
- [GetReputation200Response](docs/GetReputation200Response.md)
- [GetReputationTimeline200Response](docs/GetReputationTimeline200Response.md)
- [GetReputationTimeline200ResponseTimeline](docs/GetReputationTimeline200ResponseTimeline.md)
- [GetReputationTimeline200ResponseTimelineTimelineInner](docs/GetReputationTimeline200ResponseTimelineTimelineInner.md)
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
- [ImportContactList200Response](docs/ImportContactList200Response.md)
- [IntrospectToken200Response](docs/IntrospectToken200Response.md)
- [Job](docs/Job.md)
- [JobArtifacts](docs/JobArtifacts.md)
- [JobListResponse](docs/JobListResponse.md)
- [JobResponse](docs/JobResponse.md)
- [JobSummary](docs/JobSummary.md)
- [JwksResponse](docs/JwksResponse.md)
- [JwksResponseKeysInner](docs/JwksResponseKeysInner.md)
- [ListAlertRules200Response](docs/ListAlertRules200Response.md)
- [ListBlacklistMonitors200Response](docs/ListBlacklistMonitors200Response.md)
- [ListCampaigns200Response](docs/ListCampaigns200Response.md)
- [ListContactLists200Response](docs/ListContactLists200Response.md)
- [ListDmarcDomains200Response](docs/ListDmarcDomains200Response.md)
- [ListInboundMessages200Response](docs/ListInboundMessages200Response.md)
- [ListOooContacts200Response](docs/ListOooContacts200Response.md)
- [ListSendingDomains200Response](docs/ListSendingDomains200Response.md)
- [ListServerTests200Response](docs/ListServerTests200Response.md)
- [ListSpamChecks200Response](docs/ListSpamChecks200Response.md)
- [ListWebhookDeliveries200Response](docs/ListWebhookDeliveries200Response.md)
- [ListWebhookDeliveries200ResponseDeliveriesInner](docs/ListWebhookDeliveries200ResponseDeliveriesInner.md)
- [McpCapabilities](docs/McpCapabilities.md)
- [McpCapabilitiesPillarsInner](docs/McpCapabilitiesPillarsInner.md)
- [McpCapabilitiesPillarsInnerToolsInner](docs/McpCapabilitiesPillarsInnerToolsInner.md)
- [OAuthClientRegistration](docs/OAuthClientRegistration.md)
- [OAuthServerMetadata](docs/OAuthServerMetadata.md)
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
- [ProductFacets](docs/ProductFacets.md)
- [ProductFacetsCategoriesInner](docs/ProductFacetsCategoriesInner.md)
- [ProductFacetsPriceRangesInner](docs/ProductFacetsPriceRangesInner.md)
- [ProductFacetsStoresInner](docs/ProductFacetsStoresInner.md)
- [QueryContactList200Response](docs/QueryContactList200Response.md)
- [QueryContactList200ResponseEmailsInner](docs/QueryContactList200ResponseEmailsInner.md)
- [QueryContactListRequest](docs/QueryContactListRequest.md)
- [QueryContactListRequestFiltersInner](docs/QueryContactListRequestFiltersInner.md)
- [RemoveSuppression200Response](docs/RemoveSuppression200Response.md)
- [RemoveSuppressionRequest](docs/RemoveSuppressionRequest.md)
- [ReplayWebhookDelivery200Response](docs/ReplayWebhookDelivery200Response.md)
- [ResultsResponse](docs/ResultsResponse.md)
- [RetryJob200Response](docs/RetryJob200Response.md)
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
- [StoreConnection](docs/StoreConnection.md)
- [StoreProduct](docs/StoreProduct.md)
- [SubscribeRequest](docs/SubscribeRequest.md)
- [Subscriber](docs/Subscriber.md)
- [SubscriberList](docs/SubscriberList.md)
- [SuppressDisengaged200Response](docs/SuppressDisengaged200Response.md)
- [SuppressDisengagedRequest](docs/SuppressDisengagedRequest.md)
- [SuppressionAuditResponse](docs/SuppressionAuditResponse.md)
- [SuppressionAuditResponseEntriesInner](docs/SuppressionAuditResponseEntriesInner.md)
- [SuppressionCheckResponse](docs/SuppressionCheckResponse.md)
- [SuppressionEntry](docs/SuppressionEntry.md)
- [SuppressionListResponse](docs/SuppressionListResponse.md)
- [SuppressionStatsResponse](docs/SuppressionStatsResponse.md)
- [SuppressionStatsResponseByType](docs/SuppressionStatsResponseByType.md)
- [SyncResponse](docs/SyncResponse.md)
- [TelemetrySummary](docs/TelemetrySummary.md)
- [TelemetrySummaryRates](docs/TelemetrySummaryRates.md)
- [TelemetrySummaryTopDomainsInner](docs/TelemetrySummaryTopDomainsInner.md)
- [TelemetrySummaryTopReasonsInner](docs/TelemetrySummaryTopReasonsInner.md)
- [TelemetrySummaryTotals](docs/TelemetrySummaryTotals.md)
- [TestPolicyRequest](docs/TestPolicyRequest.md)
- [TestPolicyRequestTestResult](docs/TestPolicyRequestTestResult.md)
- [TrackEventRequest](docs/TrackEventRequest.md)
- [TrackEventResponse](docs/TrackEventResponse.md)
- [UnsubscribeSubscriber200Response](docs/UnsubscribeSubscriber200Response.md)
- [UpdateAlertRuleRequest](docs/UpdateAlertRuleRequest.md)
- [UpdateContactRequest](docs/UpdateContactRequest.md)
- [UpdateOooContactRequest](docs/UpdateOooContactRequest.md)
- [UpdatePixelSettingsRequest](docs/UpdatePixelSettingsRequest.md)
- [UpdatePolicyRequest](docs/UpdatePolicyRequest.md)
- [UpdateReplyForwardingRequest](docs/UpdateReplyForwardingRequest.md)
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
