import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { store } from 'src/ducks/store';
import { CartProvider } from 'use-shopping-cart';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'arial, YuGothic, 游ゴシック Yu Gothic sans-serif',
        }}
      >
        <NotificationsProvider limit={3}>
          <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY}
            currency="JPY"
            successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/success`}
            cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}`}
          >
            <Component {...pageProps} />
          </CartProvider>
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default MyApp;
