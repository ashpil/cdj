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
  },
  settings: {
    'svelte3/ignore-styles': (t => "lang" in t),
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
        'import/no-unresolved': 'off'
      }
    }
  ]
}
