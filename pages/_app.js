import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { translationMessages } from '@/config/i18n';

import LanguageProvider from '@/providers/LanguageProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';

import { globalStyles } from '@/styles/globals';

const queryClient = new QueryClient();

const UDigital = ({ Component, pageProps, router }) => {
  const { locale, defaultLocale } = router;

  return (
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
  );
};

export default UDigital;
