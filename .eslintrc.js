module.exports = {
  globals: {
    module: true,
    describe: true,
    context: true,
    it: true,
    require: true,
  },
  root: true,
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-inline-comments': 'off',
    'prettier/prettier': 'error',
  },
};
