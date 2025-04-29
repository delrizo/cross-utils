import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from 'typescript-eslint'

export default [
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off'
        }
    },
    { languageOptions: { globals: globals.node } },
    { files: ['**/*.{js,mjs,cjs,ts}'] }
]
