# MailOdds SDK for TypeScript

Enterprise-ready TypeScript/JavaScript client for the [MailOdds Email Validation API](https://mailodds.com/docs).

## Installation

```bash
npm install @mailodds/sdk
```

## Quick Start

```typescript
import { Configuration, EmailValidationApi } from '@mailodds/sdk';

const api = new EmailValidationApi(new Configuration({
    accessToken: 'mo_live_your_api_key',
}));

const result = await api.validateEmail({
    validateRequest: { email: 'user@example.com' },
});

// Branch on action for decisioning
switch (result.action) {
    case 'accept':
        console.log('Safe to send');
        break;
    case 'accept_with_caution':
        console.log('Valid but risky -- flag for review');
        break;
    case 'reject':
        console.log('Do not send');
        break;
    case 'retry_later':
        console.log('Temporary failure -- retry after backoff');
        break;
}
```

## Enterprise Features

This SDK includes enterprise-ready features beyond the generated API client:

### Built-in Retry (429/5xx)

```typescript
import { Configuration, EmailValidationApi } from '@mailodds/sdk';
import { retryMiddleware } from '@mailodds/sdk/enterprise';

const api = new EmailValidationApi(new Configuration({
    accessToken: 'mo_live_your_api_key',
    middleware: [retryMiddleware({ maxRetries: 3, baseDelay: 1000 })],
}));
```

### Typed Errors

```typescript
import { ResponseError } from '@mailodds/sdk';
import { MailOddsError, InsufficientCreditsError } from '@mailodds/sdk/enterprise';

try {
    const result = await api.validateEmail({ validateRequest: { email } });
} catch (err) {
    if (err instanceof ResponseError) {
        const error = await MailOddsError.fromResponseError(err);
        if (error instanceof InsufficientCreditsError) {
            console.log(`Need ${error.creditsNeeded}, have ${error.creditsAvailable}`);
            console.log(`Upgrade: ${error.upgradeUrl}`);
        }
    }
}
```

### Webhook Signature Verification

```typescript
import { WebhookVerifier } from '@mailodds/sdk/enterprise';

const verifier = new WebhookVerifier('your_webhook_secret');

// Express example
app.post('/webhook', async (req, res) => {
    const payload = JSON.stringify(req.body);
    const signature = req.headers['x-mailodds-signature'] as string;

    const event = await verifier.verifyAndParse(payload, signature);
    console.log(`Event: ${event.event}`);
    console.log(`Job ID: ${event.job.id}`);

    res.sendStatus(200);
});
```

## Response Handling

Branch on the `action` field for decisioning:

| Action | Meaning | Recommended |
|--------|---------|-------------|
| `accept` | Safe to send | Add to mailing list |
| `accept_with_caution` | Valid but risky (catch-all, role account) | Flag for review |
| `reject` | Invalid or disposable | Do not send |
| `retry_later` | Temporary failure | Retry after backoff |

## Test Mode

Use an `mo_test_` prefixed API key with test domains for predictable responses without consuming credits.

## API Reference

- Website: https://mailodds.com
- Full documentation: https://mailodds.com/docs
- OpenAPI spec: https://mailodds.com/openapi.yaml
- All SDKs: https://mailodds.com/sdks

## License

MIT
