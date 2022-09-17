declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly STRIPE_API_KEY: string;
    readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY: string;
  }
}
