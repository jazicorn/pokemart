# Eslint

> formatting

## About

- [Eslint Documentation](https://eslint.org/docs/latest/)
- [Next.js/Eslint Documentation](https://nextjs.org/docs/basic-features/eslint)

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

## Articles/Help
- https://www.jakeprins.com/blog/how-to-use-eslint-and-prettier-in-your-next-js-application-with-typescript
- https://stackoverflow.com/questions/58233482/next-js-setting-up-eslint-for-nextjs
- https://dev.to/jonasmerlin/automatically-lint-format-your-code-on-commit-when-using-next-js-3p6g 
- https://blog.back4app.com/javascript-coding-standards/
