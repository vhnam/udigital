import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import Head from 'next/head';

import { translationMessages } from '@/config/i18n';

import LanguageProvider from '@/providers/LanguageProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';

import { globalStyles } from '@/styles/globals';

const queryClient = new QueryClient();

const UDigital = ({ Component, pageProps, router }) => {
  const { locale, defaultLocale } = router;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="msapplication-TileColor" content="#32B260" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="This is a cloned website based on https://ui8.net/shmizanur/products/agency-landing-page"
        />

        <title>UDigital</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider locale={locale || defaultLocale} messages={translationMessages}>
            <Hydrate state={pageProps.dehydratedState}>
              {globalStyles}
              <Component {...pageProps} />
              <ModalProvider />
              <ToastProvider />
            </Hydrate>
          </LanguageProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default UDigital;
