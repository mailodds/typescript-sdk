/**
 * Webhook signature verification for MailOdds webhook events.
 *
 * Works in both Node.js (using crypto module) and edge runtimes
 * (using Web Crypto API).
 */

export class WebhookVerifier {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    /**
     * Verify the HMAC-SHA256 signature of a webhook payload.
     */
    async verify(payload: string, signature: string): Promise<boolean> {
        const expected = await this.computeHmac(payload);
        return this.timingSafeEqual(expected, signature);
    }

    /**
     * Verify the signature and parse the payload as JSON.
     * Throws if the signature is invalid.
     */
    async verifyAndParse<T = Record<string, unknown>>(
        payload: string,
        signature: string,
    ): Promise<T> {
        const valid = await this.verify(payload, signature);
        if (!valid) {
            throw new Error('Invalid webhook signature');
        }
        return JSON.parse(payload) as T;
    }

    private async computeHmac(payload: string): Promise<string> {
        // Node.js path -- use crypto.timingSafeEqual for constant-time comparison
        if (typeof globalThis.process !== 'undefined' && globalThis.process.versions?.node) {
            const crypto = await import('crypto');
            return crypto.createHmac('sha256', this.secret)
                .update(payload, 'utf-8')
                .digest('hex');
        }

        // Web Crypto API path (edge runtimes, Deno, Bun)
        const encoder = new TextEncoder();
        const key = await crypto.subtle.importKey(
            'raw',
            encoder.encode(this.secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign'],
        );
        const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
        return Array.from(new Uint8Array(sig))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    private timingSafeEqual(a: string, b: string): boolean {
        // Use Node.js crypto.timingSafeEqual when available
        try {
            if (typeof globalThis.process !== 'undefined' && globalThis.process.versions?.node) {
                const crypto = require('crypto');
                const bufA = Buffer.from(a, 'utf-8');
                const bufB = Buffer.from(b, 'utf-8');
                if (bufA.length !== bufB.length) return false;
                return crypto.timingSafeEqual(bufA, bufB);
            }
        } catch {
            // Fall through to manual implementation
        }

        // Manual constant-time comparison for non-Node environments
        if (a.length !== b.length) return false;
        let result = 0;
        for (let i = 0; i < a.length; i++) {
            result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return result === 0;
    }
}
