module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/no-unresolved': ['error', {
      ignore: ['^virtual:'],
    }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'import/extensions': ['error',
      'never',
      {
        json: 'always',
        vue: 'always',
      },
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
        allowFirstLine: true,
      },
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts', '.vue'] },
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
