module.exports = {
  env: {
    browser: true,
    jest: true
  },
  root: true,
  ignorePatterns: ['dist/**/*', 'devdocs/**/*'],
  globals: {
    niivue: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    curly: ['error', 'all'],
    camelcase: 'off',
    'import/order': 'error',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    ]
  }
}
