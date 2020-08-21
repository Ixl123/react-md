module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  plugins: ['jest', 'react-hooks'],
  env: {
    node: true,
    browser: true,
  },
  globals: {
    gtag: 'readonly',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    // I think it's fine to do shadowed variables. It can cause some bugs where you forget
    // to use an updated variable (like redux), but it doesn't happen much in this type of
    // project
    'no-shadow': 0,

    // only time I do empty catch statements is for prop-type imports
    'no-empty': ['error', { allowEmptyCatch: true }],

    // I don't know how to get this to work with peerDependencies
    'import/no-extraneous-dependencies': 0,

    // going to try this going forward since I normally want to do export * from "./file"
    'import/prefer-default-export': 0,

    // This doesn't play well with hooks and it doesn't mean much with Typescript to me
    'consistent-return': 0,

    // it's useful for reduce cases and a lot of other stuff. Easily caught in reviews
    'no-param-reassign': 0,

    // I normally don't use require statements other than for prop type declarations
    // on components.
    'global-require': 0,

    // I don't care about extensions
    'import/extensions': 0,

    // normally caught by Typescript instead.
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,

    // normally caught by Typescript instead and I don't care too much about speciifc objects
    'react/forbid-prop-types': 0,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // overridden by prettier so additional noise
    'react/jsx-wrap-multilines': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'react/jsx-indent': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-curly-newline': 0,

    // I don't agree with these rules...
    'react/jsx-props-no-spreading': 0,

    // This is a "better" version of the noUnusedLocals and noUnusedParameters from
    // the tsconfig.json since it can catch unused vars in rest parameters that weren't
    // meant to be omitted. I must manually rename to be _name so I know it was intentionally
    // omitted
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // Allow expressions to work with react hooks. Annoying to have to typedef each arrow
    // function in a useEffect or useCallback when it can be derived.
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        // allow FC definitions for React
        allowTypedFunctionExpressions: true,
      },
    ],

    // I like being explicit even if using a default arg can show the type of it, it might change
    // or have multiple types available
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: true },
    ],
    '@typescript-eslint/no-empty-function': 0,

    // used for dynamic prop-types and easy to catch otherwise
    '@typescript-eslint/no-var-requires': 0,

    // disabled since most of these are super easy to catch but there's a problem with
    // the `{}` version since the suggestion requires changing to `Record<string, unknown>`
    // which means that all objects **must** have an index signature which is lame. will
    // come back to this later.
    '@typescript-eslint/ban-types': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*', '**/testSetup/*'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        'jsx-a11y/no-autofocus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/control-has-associated-label': 0,
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'prefer-template': 0,
      },
    },
    {
      files: ['**/__tests__/*'],
      rules: {
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect'] }],
        'jest/lowercase-name': ['error', { ignore: ['describe'] }],
        'jest/no-commented-out-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-callback': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-try-expect': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/no-truthy-falsy': 'error',
      },
    },
    {
      files: ['**/*.tsx', '**/_app.js'],
      rules: {
        // .tsx is .jsx extension
        'react/jsx-filename-extension': 0,
      },
    },
    {
      files: ['**/types.ts'],
      rules: {
        // some type definition files will only have one export, but shouldn't be default
        'import/prefer-default-export': 0,
      },
    },
    {
      files: [
        'packages/documentation/*/**/*.ts',
        'packages/documentation/*/**/*.tsx',
      ],
      rules: {
        // handled by ts and false negatives right now with monorepo setup
        'import/no-unresolved': 0,
        'react/prop-types': 0,
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-var-requires': 0,
        'import/no-unresolved': 0,
      },
    },
    {
      files: ['packages/documentation/src/components/Demos/**/*.tsx'],
      rules: {
        // normally don't care about these for demos
        'react/no-array-index-key': 0,
      },
    },
    {
      files: ['packages/material-icons/scripts/**/*'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
