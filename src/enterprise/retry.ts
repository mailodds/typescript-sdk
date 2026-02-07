import type { Middleware } from '../runtime';

export interface RetryConfig {
    maxRetries?: number;
    baseDelay?: number;
    maxDelay?: number;
}

function shouldRetry(status: number): boolean {
    return status === 429 || status >= 500;
}

function calculateDelay(attempt: number, baseDelay: number, maxDelay: number): number {
    const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);
    const jitter = Math.random() * delay * 0.1;
    return delay + jitter;
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a retry middleware for 429/5xx responses with exponential backoff.
 *
 * The middleware intercepts error responses and retries the request using
 * the onError handler, which preserves the full middleware chain including
 * authentication headers and other middleware.
 *
 * Usage:
 * ```ts
 * const api = new EmailValidationApi(new Configuration({
 *     accessToken: 'mo_live_...',
 *     middleware: [retryMiddleware({ maxRetries: 3 })],
 * }));
 * ```
 */
export function retryMiddleware(config: RetryConfig = {}): Middleware {
    const maxRetries = config.maxRetries ?? 3;
    const baseDelay = config.baseDelay ?? 1000;
    const maxDelay = config.maxDelay ?? 30000;

    return {
        async post(context) {
            const { response } = context;
            if (!shouldRetry(response.status)) {
                return response;
            }

            // Return the retried response. On retry we re-fetch using the
            // same url/init that already passed through the full middleware
            // chain (auth headers, etc. are already baked into `init`).
            let lastResponse = response;
            for (let attempt = 0; attempt < maxRetries; attempt++) {
                const delay = calculateDelay(attempt, baseDelay, maxDelay);
                await sleep(delay);

                lastResponse = await (context.fetch ?? fetch)(context.url, context.init);
                if (!shouldRetry(lastResponse.status)) {
                    return lastResponse;
                }
            }
            return lastResponse;
        },
    };
}
