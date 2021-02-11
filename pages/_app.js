import { Provider } from 'jotai';

import { translationMessages } from '../i18n';

import LanguageProvider from '../providers/LanguageProvider';
import ModalProvider from '../providers/ModalProvider';

import { globalStyles } from '../styles/globals';

const UDigital = ({ Component, pageProps, router }) => {
  const { locale, defaultLocale } = router;

  return (
    <Provider>
      <LanguageProvider locale={locale || defaultLocale} messages={translationMessages}>
        <>
          {globalStyles}
          <Component {...pageProps} />
          <ModalProvider />
        </>
      </LanguageProvider>
    </Provider>
  );
};

export default UDigital;
