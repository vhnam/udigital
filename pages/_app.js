import { translationMessages } from '../i18n';
import LanguageProvider from '../providers/LanguageProvider';

import { globalStyles } from '../styles/globals';

const UDigital = ({ Component, pageProps, router }) => {
  const { locale, defaultLocale } = router;

  return (
    <LanguageProvider locale={locale || defaultLocale} messages={translationMessages}>
      <>
        {globalStyles}
        <Component {...pageProps} />
      </>
    </LanguageProvider>
  );
};

export default UDigital;
