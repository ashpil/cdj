module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  'extends': [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-underscore-dangle': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'eqeqeq': 0,
    'no-undef': 0,
    'camelcase': 0,
    'radix': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'no-mixed-operators': 0,
    'a11y-media-has-caption': 0,
    'func-names': 0,
    'object-curly-newline': 0,
  },
  settings: {
    'svelte3/ignore-styles': (t => true),
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: [
        '*.svelte'
      ],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off'
      }
    }
  ]
}
