import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'react'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        ignores: ['dist'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'object-curly-spacing': ['warn', 'always'],
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            'no-multiple-empty-lines': ['error', { max: 1 }],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
