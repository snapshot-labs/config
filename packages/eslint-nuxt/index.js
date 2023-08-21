module.exports = {
  extends: ['@nuxt/eslint-config', '@snapshot-labs/eslint-config-base'],
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/block-lang': [
          'error',
          {
            script: {
              lang: 'ts'
            }
          }
        ],
        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style']
          }
        ],
        'vue/component-api-style': ['error', ['script-setup', 'composition']],
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: false
          }
        ],
        'vue/define-emits-declaration': ['error', 'type-based'],
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineSlots'
            ]
          }
        ],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/html-button-has-type': [
          'error',
          {
            button: true,
            submit: true,
            reset: true
          }
        ],
        'vue/no-required-prop-with-default': [
          'error',
          {
            autofix: false
          }
        ],
        'vue/no-root-v-if': 'error',
        'vue/no-template-target-blank': [
          'error',
          {
            allowReferrer: true,
            enforceDynamicLinks: 'always'
          }
        ],
        'vue/no-unused-refs': 'error',
        'vue/no-v-text': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-define-options': 'error',
        'vue/prefer-true-attribute-shorthand': ['error', 'always'],
        'vue/require-macro-variable-name': [
          'error',
          {
            defineProps: 'props',
            defineEmits: 'emit',
            defineSlots: 'slots',
            useSlots: 'slots',
            useAttrs: 'attrs'
          }
        ],
        'vue/v-for-delimiter-style': ['error', 'in']
      }
    }
  ]
};
