import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Global ignores
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'test/**',
      'coverage/**',
      '*.min.js',
      'test/eval/jquery.min.js',
      'rollup.config.mjs',
      'jest.config.js',
      'eslint.config.mjs'
    ]
  },
  // Base config for all TypeScript files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      'no-fallthrough': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^lastLastLastLastPart' }],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-this-alias': 'off'
    }
  },
  // Scripts that are part of the test tsconfig
  {
    files: ['scripts/export-tests.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './test/tsconfig.json'
      },
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      'no-fallthrough': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^lastLastLastLastPart' }],
      '@typescript-eslint/no-unsafe-assignment': 'off'
    }
  }
]
