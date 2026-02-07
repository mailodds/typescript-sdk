import { ResponseError } from '../runtime';

export class MailOddsError extends Error {
    public readonly statusCode: number;
    public readonly errorCode?: string;
    public readonly errorMessage?: string;
    public readonly body: Record<string, unknown>;

    constructor(statusCode: number, body: Record<string, unknown>) {
        const message = (body.message as string) || `HTTP ${statusCode}`;
        super(message);
        this.name = 'MailOddsError';
        this.statusCode = statusCode;
        this.errorCode = body.error as string | undefined;
        this.errorMessage = body.message as string | undefined;
        this.body = body;
    }

    /**
     * Convert a ResponseError into a typed MailOddsError.
     * Clones the response before reading the body so the original
     * response remains consumable by the caller.
     */
    static async fromResponseError(err: ResponseError): Promise<MailOddsError> {
        const status = err.response.status;
        let body: Record<string, unknown> = {};
        try {
            body = await err.response.clone().json();
        } catch {
            // response may not be JSON
        }

        switch (status) {
            case 400: return new BadRequestError(body);
            case 401: return new UnauthorizedError(body);
            case 402: return new InsufficientCreditsError(body);
            case 403: return new ForbiddenError(body);
            case 429: return new RateLimitError(body, err.response.headers);
            default:
                if (status >= 500) return new ServerError(status, body);
                return new MailOddsError(status, body);
        }
    }
}

export class BadRequestError extends MailOddsError {
    constructor(body: Record<string, unknown>) {
        super(400, body);
        this.name = 'BadRequestError';
    }
}

export class UnauthorizedError extends MailOddsError {
    constructor(body: Record<string, unknown>) {
        super(401, body);
        this.name = 'UnauthorizedError';
    }
}

export class InsufficientCreditsError extends MailOddsError {
    public readonly creditsAvailable: number;
    public readonly creditsNeeded: number;
    public readonly upgradeUrl?: string;

    constructor(body: Record<string, unknown>) {
        super(402, body);
        this.name = 'InsufficientCreditsError';
        this.creditsAvailable = (body.credits_available as number) ?? 0;
        this.creditsNeeded = (body.credits_needed as number) ?? 0;
        this.upgradeUrl = body.upgrade_url as string | undefined;
    }
}

export class ForbiddenError extends MailOddsError {
    constructor(body: Record<string, unknown>) {
        super(403, body);
        this.name = 'ForbiddenError';
    }
}

export class RateLimitError extends MailOddsError {
    public readonly retryAfter?: number;

    constructor(body: Record<string, unknown>, headers?: Headers) {
        super(429, body);
        this.name = 'RateLimitError';
        const retryHeader = headers?.get('Retry-After');
        if (retryHeader) {
            this.retryAfter = parseFloat(retryHeader) || undefined;
        }
    }
}

export class ServerError extends MailOddsError {
    constructor(statusCode: number, body: Record<string, unknown>) {
        super(statusCode, body);
        this.name = 'ServerError';
    }
}
