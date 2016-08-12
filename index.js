module.exports = {
  extends: require.resolve('eslint-config-signavio'),
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-unused-expressions': 'off'
  }
}
