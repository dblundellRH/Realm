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

export function LanguageProvider({ locale, children }) {
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={{}}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.element.isRequired,
};

LanguageProvider.defaultProps = {
  locale: 'en'
}

export default LanguageProvider;
