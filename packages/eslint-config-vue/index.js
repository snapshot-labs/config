module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@snapshot-labs/eslint-config-base'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['~icons/*'],
            message: 'No need to import icons directly, they are auto-imported'
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn'
      }
    }
  ]
};
