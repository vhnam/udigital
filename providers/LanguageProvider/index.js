import React from 'react';
import { IntlProvider } from 'react-intl';
import { defaultsDeep } from 'lodash';

const LanguageProvider = ({ children, messages, locale }) => {
  const _messages = defaultsDeep(messages[locale], messages.en);

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={_messages} textComponent="span">
      {React.Children.only(children)}
    </IntlProvider>
  );
};

export default LanguageProvider;
