module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
  },
};
