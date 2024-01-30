module.exports = {
  extends: ['next', 'prettier', 'next/core-web-vitals'],
  plugins: ['unused-imports'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
  }
}
