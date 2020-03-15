module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // Order is important
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'prettier', // These turn prettier errors into linting errors
    'prettier/vue',
    'prettier/@typescript-eslint'
  ],
  // add your custom rules here
  rules: {},
  plugins: ['vue', '@typescript-eslint']
};
