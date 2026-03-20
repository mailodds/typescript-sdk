# MailOdds TypeScript SDK

The official TypeScript client for email validation, transactional sending, and deliverability monitoring through the MailOdds API. Works in Node.js, Webpack, and Browserify environments.

[![npm](https://img.shields.io/npm/v/@mailodds/sdk)](https://www.npmjs.com/package/@mailodds/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![API Docs](https://img.shields.io/badge/docs-api--reference-blue)](https://mailodds.com/api-reference)

## Installation

```bash
npm install @mailodds/sdk
```

## Quick Start

```typescript
import { Configuration, EmailValidationApi, ValidateRequest } from '@mailodds/sdk';

const config = new Configuration({
  basePath: 'https://api.mailodds.com/v1',
  accessToken: process.env.MAILODDS_API_KEY,
});

const api = new EmailValidationApi(config);

async function main() {
  const request: ValidateRequest = { email: 'user@example.com' };
  const result = await api.validateEmail(request);
  console.log(`Status: ${result.result.status}, Action: ${result.result.action}`);
}

main();
```

## Error Handling

```typescript
try {
  const result = await api.validateEmail(request);
} catch (error) {
  if (error instanceof Response) {
    console.error(`API error ${error.status}: ${await error.text()}`);
  }
  throw error;
}
```

All API methods throw on non-2xx responses. The thrown object includes the HTTP status, response body, and headers.

## MailOdds Platform

<details>
<summary>This SDK is part of the MailOdds email deliverability platform. Explore all capabilities.</summary>

- [Email Validation API](https://mailodds.com/email-validation-api) - Single and batch email verification with 25+ real-time checks
- [Bulk Email Validation](https://mailodds.com/bulk-email-validation) - Process lists of up to 500,000 emails per job
- [Email Sending API](https://mailodds.com/email-sending-api) - Transactional email delivery with DKIM dual signing
- [Email Deliverability Platform](https://mailodds.com/email-deliverability-platform) - Full-stack deliverability monitoring and optimization
- [DMARC Monitoring](https://mailodds.com/dmarc-monitoring) - Aggregate report analysis with policy recommendations
- [Sender Reputation](https://mailodds.com/sender-reputation) - Real-time sender health scoring and trend analysis
- [SMTP Server Test](https://mailodds.com/smtp-server-test) - DNS, MX, and SMTP connectivity diagnostics
- [API Reference](https://mailodds.com/api-reference) - Full endpoint documentation with request and response examples
- [Guide: Email Authentication](https://mailodds.com/guides/email-authentication) - SPF, DKIM, and DMARC setup guide
- [Security](https://mailodds.com/security) - Infrastructure security and data protection practices

</details>

## Features

- **Fetch API based** - Built on the standard Fetch API for broad runtime compatibility across Node.js, browsers, and edge runtimes
- **Full TypeScript types** - Every request and response is fully typed with generated interfaces for compile-time safety
- **ES5 and ES6 support** - Works with both CommonJS and ES module systems
- **Async/await** - All API methods return Promises for clean async control flow
- **Full platform coverage** - Access all MailOdds capabilities including validation, sending, campaigns, DMARC monitoring, blacklist checks, and suppression management
- **Structured error handling** - API errors include HTTP status codes, response bodies, and request IDs for debugging

## Why MailOdds

MailOdds is a complete email deliverability platform built for developers. Every email validated or sent through MailOdds passes through 25+ real-time checks including syntax verification, DNS and MX validation, SMTP mailbox probing, disposable domain detection, and role account identification.

The platform maintains sub-200ms median response times for single validations, 99.9% API uptime, and processes bulk lists of up to 500,000 emails per job. MailOdds supports 11 language SDKs, an MCP server for AI agent integration, a CLI for local development, and a WordPress plugin for no-code deployments.

All email sending uses DKIM dual signing with automated key rotation, and the deliverability monitoring stack covers DMARC aggregate reports, blacklist surveillance across 80+ DNSBLs, and real-time sender health scoring.

## API Reference

Full documentation is available at the [MailOdds API Reference](https://mailodds.com/api-reference).

All URIs are relative to `https://api.mailodds.com/v1`.

<details>
<summary>All Endpoints</summary>

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
*CampaignsApi* | [**getCampaign**](docs/CampaignsApi.md#getcampaign) | **GET** /v1/campaigns/{campaign_id} | Get campaign with stats
*CampaignsApi* | [**listCampaigns**](docs/CampaignsApi.md#listcampaigns) | **GET** /v1/campaigns | List campaigns
*CampaignsApi* | [**scheduleCampaign**](docs/CampaignsApi.md#schedulecampaignoperation) | **POST** /v1/campaigns/{campaign_id}/schedule | Schedule a campaign
*CampaignsApi* | [**sendCampaign**](docs/CampaignsApi.md#sendcampaign) | **POST** /v1/campaigns/{campaign_id}/send | Send a campaign
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
*DMARCMonitoringApi* | [**addDmarcDomain**](docs/DMARCMonitoringApi.md#adddmarcdomainoperation) | **POST** /v1/dmarc-domains | Add DMARC domain
*DMARCMonitoringApi* | [**deleteDmarcDomain**](docs/DMARCMonitoringApi.md#deletedmarcdomain) | **DELETE** /v1/dmarc-domains/{domain_id} | Delete a DMARC domain
*DMARCMonitoringApi* | [**getDmarcDomain**](docs/DMARCMonitoringApi.md#getdmarcdomain) | **GET** /v1/dmarc-domains/{domain_id} | Get DMARC domain
*DMARCMonitoringApi* | [**getDmarcRecommendation**](docs/DMARCMonitoringApi.md#getdmarcrecommendation) | **GET** /v1/dmarc-domains/{domain_id}/recommendation | Get DMARC policy recommendation
*DMARCMonitoringApi* | [**getDmarcSources**](docs/DMARCMonitoringApi.md#getdmarcsources) | **GET** /v1/dmarc-domains/{domain_id}/sources | Get DMARC sending sources
*DMARCMonitoringApi* | [**getDmarcTrend**](docs/DMARCMonitoringApi.md#getdmarctrend) | **GET** /v1/dmarc-domains/{domain_id}/trend | Get DMARC trend
*DMARCMonitoringApi* | [**listDmarcDomains**](docs/DMARCMonitoringApi.md#listdmarcdomains) | **GET** /v1/dmarc-domains | List DMARC domains
*DMARCMonitoringApi* | [**verifyDmarcDomain**](docs/DMARCMonitoringApi.md#verifydmarcdomain) | **POST** /v1/dmarc-domains/{domain_id}/verify | Verify DMARC DNS records
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
*EventsApi* | [**trackEvent**](docs/EventsApi.md#trackeventoperation) | **POST** /v1/events/track | Track a commerce event
*InboundProcessingApi* | [**correctInboundMessage**](docs/InboundProcessingApi.md#correctinboundmessageoperation) | **PATCH** /v1/inbound-messages/{message_id}/correction | Correct inbound message classification
*InboundProcessingApi* | [**getBounceStats**](docs/InboundProcessingApi.md#getbouncestats) | **GET** /v1/bounce-stats | Get bounce statistics
*InboundProcessingApi* | [**getBounceStatsSummary**](docs/InboundProcessingApi.md#getbouncestatssummary) | **GET** /v1/bounce-stats/summary | Get bounce statistics summary
*InboundProcessingApi* | [**getComplaintAssessment**](docs/InboundProcessingApi.md#getcomplaintassessment) | **GET** /v1/complaint-assessment | Get complaint assessment
*InboundProcessingApi* | [**getInboundMessage**](docs/InboundProcessingApi.md#getinboundmessage) | **GET** /v1/inbound-messages/{message_id} | Get inbound message
*InboundProcessingApi* | [**listInboundMessages**](docs/InboundProcessingApi.md#listinboundmessages) | **GET** /v1/inbound-messages | List inbound messages
*MessageEventsApi* | [**getMessageEvents**](docs/MessageEventsApi.md#getmessageevents) | **GET** /v1/message-events | Get message events
*OAuth20Api* | [**createToken**](docs/OAuth20Api.md#createtoken) | **POST** /oauth/token | Create token
*OAuth20Api* | [**getJwks**](docs/OAuth20Api.md#getjwks) | **GET** /.well-known/jwks.json | Get JSON Web Key Set
*OAuth20Api* | [**introspectToken**](docs/OAuth20Api.md#introspecttoken) | **POST** /oauth/introspect | Introspect token
*OAuth20Api* | [**oauthServerMetadata**](docs/OAuth20Api.md#oauthservermetadata) | **GET** /.well-known/oauth-authorization-server | OAuth server metadata
*OAuth20Api* | [**revokeToken**](docs/OAuth20Api.md#revoketoken) | **POST** /oauth/revoke | Revoke token
*OutOfOfficeApi* | [**batchCheckOoo**](docs/OutOfOfficeApi.md#batchcheckooooperation) | **POST** /v1/out-of-office/batch-check | Batch check OOO status
*OutOfOfficeApi* | [**deleteOooContact**](docs/OutOfOfficeApi.md#deleteooocontact) | **DELETE** /v1/out-of-office/{email} | Delete OOO contact
*OutOfOfficeApi* | [**getOooStatus**](docs/OutOfOfficeApi.md#getooostatus) | **GET** /v1/out-of-office/{email}/status | Get OOO status for email
*OutOfOfficeApi* | [**listOooContacts**](docs/OutOfOfficeApi.md#listooocontacts) | **GET** /v1/out-of-office | List out-of-office contacts
*OutOfOfficeApi* | [**updateOooContact**](docs/OutOfOfficeApi.md#updateooocontactoperation) | **PATCH** /v1/out-of-office/{email} | Update OOO contact
*PixelSettingsApi* | [**getPixelSettings**](docs/PixelSettingsApi.md#getpixelsettings) | **GET** /v1/pixel-settings | Get pixel settings
*PixelSettingsApi* | [**updatePixelSettings**](docs/PixelSettingsApi.md#updatepixelsettingsoperation) | **PATCH** /v1/pixel-settings | Update pixel settings
*ProductsApi* | [**batchProducts**](docs/ProductsApi.md#batchproductsoperation) | **POST** /v1/stores/{store_id}/products/batch | Batch push products
*ProductsApi* | [**bulkUpdateProducts**](docs/ProductsApi.md#bulkupdateproductsoperation) | **PATCH** /v1/store-products/bulk | Bulk update products
*ProductsApi* | [**getProduct**](docs/ProductsApi.md#getproduct) | **GET** /v1/store-products/{product_id} | Get a product
*ProductsApi* | [**queryProducts**](docs/ProductsApi.md#queryproducts) | **GET** /v1/store-products | Query products
*ReputationApi* | [**getReputation**](docs/ReputationApi.md#getreputation) | **GET** /v1/reputation | Get account reputation
*ReputationApi* | [**getReputationTimeline**](docs/ReputationApi.md#getreputationtimeline) | **GET** /v1/reputation/timeline | Get reputation timeline
*SenderHealthApi* | [**getSenderHealth**](docs/SenderHealthApi.md#getsenderhealth) | **GET** /v1/sender-health | Get sender health score
*SenderHealthApi* | [**getSenderHealthTrend**](docs/SenderHealthApi.md#getsenderhealthtrend) | **GET** /v1/sender-health/trend | Get sender health trend
*SendingDomainsApi* | [**createSendingDomain**](docs/SendingDomainsApi.md#createsendingdomainoperation) | **POST** /v1/sending-domains | Add a sending domain
*SendingDomainsApi* | [**deleteSendingDomain**](docs/SendingDomainsApi.md#deletesendingdomain) | **DELETE** /v1/sending-domains/{domain_id} | Delete a sending domain
*SendingDomainsApi* | [**getReplyForwarding**](docs/SendingDomainsApi.md#getreplyforwarding) | **GET** /v1/sending-domains/{domain_id}/reply-forwarding | Get reply forwarding config
*SendingDomainsApi* | [**getSendingDomain**](docs/SendingDomainsApi.md#getsendingdomain) | **GET** /v1/sending-domains/{domain_id} | Get a sending domain
*SendingDomainsApi* | [**getSendingDomainIdentityScore**](docs/SendingDomainsApi.md#getsendingdomainidentityscore) | **GET** /v1/sending-domains/{domain_id}/identity-score | Get domain identity score
*SendingDomainsApi* | [**getSendingStats**](docs/SendingDomainsApi.md#getsendingstats) | **GET** /v1/sending-stats | Get sending statistics
*SendingDomainsApi* | [**listSendingDomains**](docs/SendingDomainsApi.md#listsendingdomains) | **GET** /v1/sending-domains | List sending domains
*SendingDomainsApi* | [**updateReplyForwarding**](docs/SendingDomainsApi.md#updatereplyforwardingoperation) | **PATCH** /v1/sending-domains/{domain_id}/reply-forwarding | Update reply forwarding config
*SendingDomainsApi* | [**verifySendingDomain**](docs/SendingDomainsApi.md#verifysendingdomain) | **POST** /v1/sending-domains/{domain_id}/verify | Verify domain DNS records
*ServerTestsApi* | [**getServerTest**](docs/ServerTestsApi.md#getservertest) | **GET** /v1/server-tests/{test_id} | Get server test
*ServerTestsApi* | [**listServerTests**](docs/ServerTestsApi.md#listservertests) | **GET** /v1/server-tests | List server tests
*ServerTestsApi* | [**runServerTest**](docs/ServerTestsApi.md#runservertestoperation) | **POST** /v1/server-tests | Run server test
*SpamChecksApi* | [**deleteSpamCheck**](docs/SpamChecksApi.md#deletespamcheck) | **DELETE** /v1/spam-checks/{check_id} | Delete spam check
*SpamChecksApi* | [**getSpamCheck**](docs/SpamChecksApi.md#getspamcheck) | **GET** /v1/spam-checks/{check_id} | Get spam check
*SpamChecksApi* | [**listSpamChecks**](docs/SpamChecksApi.md#listspamchecks) | **GET** /v1/spam-checks | List spam checks
*SpamChecksApi* | [**runSpamCheck**](docs/SpamChecksApi.md#runspamcheckoperation) | **POST** /v1/spam-checks | Run spam check
*StoreConnectionsApi* | [**createStore**](docs/StoreConnectionsApi.md#createstoreoperation) | **POST** /v1/stores | Create a store connection
*StoreConnectionsApi* | [**disconnectStore**](docs/StoreConnectionsApi.md#disconnectstore) | **DELETE** /v1/stores/{store_id} | Disconnect a store
*StoreConnectionsApi* | [**getStore**](docs/StoreConnectionsApi.md#getstore) | **GET** /v1/stores/{store_id} | Get a store connection
*StoreConnectionsApi* | [**getSyncJobErrors**](docs/StoreConnectionsApi.md#getsyncjoberrors) | **GET** /v1/stores/{store_id}/sync-jobs/{job_id}/errors | Get sync job errors
*StoreConnectionsApi* | [**listStores**](docs/StoreConnectionsApi.md#liststores) | **GET** /v1/stores | List store connections
*StoreConnectionsApi* | [**listSyncJobs**](docs/StoreConnectionsApi.md#listsyncjobs) | **GET** /v1/stores/{store_id}/sync-jobs | List sync jobs
*StoreConnectionsApi* | [**triggerSync**](docs/StoreConnectionsApi.md#triggersync) | **POST** /v1/stores/{store_id}/sync | Trigger product sync
*StoreConnectionsApi* | [**updateStore**](docs/StoreConnectionsApi.md#updatestoreoperation) | **PUT** /v1/stores/{store_id} | Update a store connection
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
*WebhookCLIApi* | [**createWebhookCliSession**](docs/WebhookCLIApi.md#createwebhookclisessionoperation) | **POST** /v1/webhook-cli/sessions | Create CLI forwarding session
*WebhookCLIApi* | [**deleteWebhookCliSession**](docs/WebhookCLIApi.md#deletewebhookclisession) | **DELETE** /v1/webhook-cli/sessions/{session_id} | Close CLI session
*WebhookCLIApi* | [**listWebhookDeliveries**](docs/WebhookCLIApi.md#listwebhookdeliveries) | **GET** /v1/webhook-cli/deliveries | List recent webhook deliveries
*WebhookCLIApi* | [**replayWebhookDelivery**](docs/WebhookCLIApi.md#replaywebhookdelivery) | **POST** /v1/webhook-cli/deliveries/{delivery_id}/replay | Replay webhook delivery

</details>

<details>
<summary>All Models</summary>

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
- [BulkUpdateProducts200Response](docs/BulkUpdateProducts200Response.md)
- [BulkUpdateProductsRequest](docs/BulkUpdateProductsRequest.md)
- [Campaign](docs/Campaign.md)
- [CampaignResponse](docs/CampaignResponse.md)
- [CampaignStats](docs/CampaignStats.md)
- [CampaignVariant](docs/CampaignVariant.md)
- [CheckSuppressionRequest](docs/CheckSuppressionRequest.md)
- [ClassifyContent200Response](docs/ClassifyContent200Response.md)
- [ClassifyContent200ResponseContentCheck](docs/ClassifyContent200ResponseContentCheck.md)
- [ClassifyContentRequest](docs/ClassifyContentRequest.md)
- [ConfirmSubscription200Response](docs/ConfirmSubscription200Response.md)
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
- [CreateStore201Response](docs/CreateStore201Response.md)
- [CreateStoreRequest](docs/CreateStoreRequest.md)
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
- [DisconnectStore200Response](docs/DisconnectStore200Response.md)
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
- [GetProduct200Response](docs/GetProduct200Response.md)
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
- [GetSyncJobErrors200Response](docs/GetSyncJobErrors200Response.md)
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
- [ListStores200Response](docs/ListStores200Response.md)
- [ListSyncJobs200Response](docs/ListSyncJobs200Response.md)
- [ListWebhookDeliveries200Response](docs/ListWebhookDeliveries200Response.md)
- [ListWebhookDeliveries200ResponseDeliveriesInner](docs/ListWebhookDeliveries200ResponseDeliveriesInner.md)
- [McpCapabilities](docs/McpCapabilities.md)
- [McpCapabilitiesPillarsInner](docs/McpCapabilitiesPillarsInner.md)
- [McpCapabilitiesPillarsInnerToolsInner](docs/McpCapabilitiesPillarsInnerToolsInner.md)
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
- [QueryProducts200Response](docs/QueryProducts200Response.md)
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
- [UpdateStoreRequest](docs/UpdateStoreRequest.md)
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

</details>

## Other SDKs

| Language | Package | Source |
|----------|---------|--------|
| [Python](https://mailodds.com/sdks) | [PyPI](https://pypi.org/project/mailodds/) | [GitHub](https://github.com/mailodds/python-sdk) |
| [TypeScript](https://mailodds.com/sdks) | [npm](https://www.npmjs.com/package/@mailodds/sdk) | [GitHub](https://github.com/mailodds/typescript-sdk) |
| [PHP](https://mailodds.com/sdks) | [Packagist](https://packagist.org/packages/mailodds/mailodds-php) | [GitHub](https://github.com/mailodds/php-sdk) |
| [Java](https://mailodds.com/sdks) | [GitHub](https://github.com/mailodds/java-sdk) | [GitHub](https://github.com/mailodds/java-sdk) |
| [Go](https://mailodds.com/sdks) | [pkg.go.dev](https://pkg.go.dev/github.com/mailodds/go-sdk) | [GitHub](https://github.com/mailodds/go-sdk) |
| [C# / .NET](https://mailodds.com/sdks) | [GitHub](https://github.com/mailodds/csharp-sdk) | [GitHub](https://github.com/mailodds/csharp-sdk) |
| [Ruby](https://mailodds.com/sdks) | [RubyGems](https://rubygems.org/gems/mailodds) | [GitHub](https://github.com/mailodds/ruby-sdk) |
| [Kotlin](https://mailodds.com/sdks) | [GitHub](https://github.com/mailodds/kotlin-sdk) | [GitHub](https://github.com/mailodds/kotlin-sdk) |
| [Rust](https://mailodds.com/sdks) | [crates.io](https://crates.io/crates/mailodds) | [GitHub](https://github.com/mailodds/rust-sdk) |
| [Swift](https://mailodds.com/sdks) | [GitHub](https://github.com/mailodds/swift-sdk) | [GitHub](https://github.com/mailodds/swift-sdk) |
| [Dart / Flutter](https://mailodds.com/sdks) | [pub.dev](https://pub.dev/packages/mailodds) | [GitHub](https://github.com/mailodds/dart-sdk) |

## Resources

- [Documentation](https://mailodds.com/docs)
- [Developer Quickstart](https://mailodds.com/developers)
- [All SDKs](https://mailodds.com/sdks)
- [Security](https://mailodds.com/security)
- [Guide: Email Authentication](https://mailodds.com/guides/email-authentication)

## License

MIT
