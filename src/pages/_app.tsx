import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Verdana, sans-serif',
      }}
    >
      <NotificationsProvider limit={3}>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
