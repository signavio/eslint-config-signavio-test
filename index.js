module.exports = {
  extends: require.resolve('eslint-config-signavio'),
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-expressions': 'off',

    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
  },
  plugins: [
    'jest',
  ],
  env: {
    mocha: true,
    'jest/globals': true,
  },
}
