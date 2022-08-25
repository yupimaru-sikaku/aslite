import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { store } from 'src/ducks/store';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Provider store={store}>
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
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
