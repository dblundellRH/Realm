import React from 'react';
import { Helmet } from 'react-helmet';
import useUserStore from './useUserStore'

export function HomePage({
}) {
  const user = useUserStore();

  return (
    <div>
      <Helmet>
        <title>Realm</title>
        <meta
          name="description"
          content="A game of something something darkside"
        />
      </Helmet>

      <p>Hello <span>{user.name}</span>, head of <span>{user.faction}</span></p>

      <button onClick={() => user.setFaction('boop')}>Click</button>

    </div>
  );
}

export default HomePage;
