export type AnalyticsProps = Record<string, string | number | boolean | undefined>;

declare global {
    interface Window {
        posthog?: {
            capture: (event: string, props?: AnalyticsProps) => void;
            register: (props: Record<string, unknown>) => void;
        };
    }
}

/**
 * Envía un evento a PostHog. Si el script no cargó (adblocker, sin key, SSR),
 * no hace nada y no rompe la página.
 */
export function track(event: string, props?: AnalyticsProps): void {
    if (typeof window === 'undefined') return;
    window.posthog?.capture(event, props);
}
