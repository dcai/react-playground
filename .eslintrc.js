module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    commonjs: true,
    jest: true,
    es6: true,
    node: true,
    browser: true,
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
      },
    },
  ],
};
