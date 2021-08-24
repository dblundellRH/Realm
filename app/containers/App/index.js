/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import HomePage from 'containers/HomePage/index';
import Footer from 'components/Footer';

import useRealmStore from '../../hooks/useRealmStore';
import useUserStore from '../../hooks/useUserStore';
import GlobalStyle from '../../global-styles';

export default function App() {
  const user = useUserStore();
  const realm = useRealmStore();

  return (
    <div style={{ width: '700px', margin: 'auto', marginTop: '2rem' }}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <main>
        <HomePage
          user={user}
          realm={realm}
        />
      </main>

      <Footer
        user={user}
        realm={realm}
      />

      <GlobalStyle />
    </div>
  );
}
