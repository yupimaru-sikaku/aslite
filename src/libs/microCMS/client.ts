import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
const client = createClient({
  serviceDomain: 'aslite', // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.X_MICROCMS_API_KEY,
});
