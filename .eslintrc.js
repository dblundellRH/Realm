const fs = require('fs');
const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'jsx-control-statements'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    "jsx-control-statements/jsx-control-statements": true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-no-undef": [2, { "allowGlobals": true }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.prod.babel.js',
      },
    },
  },
};
