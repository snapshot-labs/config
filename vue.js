module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  ignorePatterns: ['/node_modules/**/*.*'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'no-console': 'off',
    'prefer-template': 'error',
    'no-debugger': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off'
  },
  globals: {
    $ref: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly'
  }
};
