import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://70eb4ee3fc781ba80b60cb56821446a0@o4510812498493440.ingest.us.sentry.io/4510812505243648",
  tracesSampleRate: 1.0,
});
