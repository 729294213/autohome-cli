import globals from 'globals'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'
export default tseslint.config(
  {
      ignores: ['*.js','node_modules'],
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
        parser: tseslint.parser,
        parserOptions: {
            project: ['./tsconfig.eslint.json','**/*/tsconfig.json']
        },
      globals: {
          ...globals.node
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'none', ignoreRestSiblings: true },
      ],
        'no-console':'error'
    }
  }
)
