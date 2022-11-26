import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { store } from 'src/ducks/store';
import { CartProvider } from 'use-shopping-cart';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'src/styles/nprogress.css';
import { ModalsProvider } from '@mantine/modals';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'arial, YuGothic, 游ゴシック Yu Gothic sans-serif',
        }}
      >
        <ModalsProvider>
          <NotificationsProvider limit={3}>
            <CartProvider
              mode="payment"
              cartMode="client-only"
              stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY}
              currency="JPY"
              successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/success`}
              cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}`}
            >
              <Component key={router.asPath} {...pageProps} />
            </CartProvider>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default MyApp;
