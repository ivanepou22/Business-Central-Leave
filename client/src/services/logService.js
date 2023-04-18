// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

function init() {
    // Sentry.init({
    //     dsn: "https://2b6833ff4d014331b7157fb5033bcd46@o1139798.ingest.sentry.io/6196276",
    //     integrations: [new BrowserTracing()],

    //     // Set tracesSampleRate to 1.0 to capture 100%
    //     // of transactions for performance monitoring.
    //     // We recommend adjusting this value in production
    //     tracesSampleRate: 1.0,
    // });
}

function log(error) {
    // Sentry.captureException(error);
    console.log(error);
}

export default {
    init,
    log
}