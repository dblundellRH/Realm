/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

export function LanguageProvider({ locale, messages, children }) {
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={messages[locale]}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

LanguageProvider.defaultProps = {
  locale: 'en'
}

export default LanguageProvider;
