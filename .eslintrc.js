module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'consistent-return': 'warn',
    'no-plusplus': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-vars': 'warn',
        'global-require': 'off',
        'jsx-a11y/label-has-for': 'off',
      },
    },
  ],
};
