# Eslint

> formatting

## About

...

## Table of Contents

...

## Issues

1. **_Error: Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser for gatsby/typescript_**
   1. [Solution](https://stackoverflow.com/questions/72065978/parsing-error-parseroptions-project-has-been-set-for-typescript-eslint-parse)

## Notes

### [Eslint config for next.js](https://nextjs.org/docs/basic-features/eslint#migrating-existing-config)

**packages:**

```bash
# dev packages
yarn add --dev @next/eslint-plugin-next
```

```json
// configure eslint.json file
module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
}
```
