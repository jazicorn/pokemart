# [SWAGGER](https://swagger.io/)
> API Documentation & Development

- **Swagger Page: [./pages/_doc.tsx](../../../pages/_doc.tsx)**

## About
Swagger is a powerful yet easy-to-use suite of API developer tools for teams and individuals, enabling development across the entire API lifecycle, from design and documentation, to test and deployment.

- [Documentation](https://swagger.io/docs/)
- [OpenAPI Specifications](https://swagger.io/specification/)
- [Installation](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/)
- [Basic Structure](https://swagger.io/docs/specification/basic-structure/)

## Setup
1. Install packages
   1. ```yarn add next-swagger-doc swagger-ui-react```
   2. ```yarn add -D @types/swagger-ui-react```
2. Create an live swagger page, e.g: pages/api-doc.tsx
3. Add JSdoc to any NextJS API routes, for example: pages/api/hello.ts
4. create a JSON config file as swagger.json
5. run cli for generating swagger file
   1. ```yarn next-swagger-doc-cli next-swagger-doc.json```

## Useful Packages
- [swagger-ui: Github](https://github.com/swagger-api/swagger-ui)
- [js-doc: Github](https://github.com/Surnet/swagger-jsdoc)
- [next-swagger-doc: Github](https://github.com/jellydn/next-swagger-doc)
- [next-swagger-doc: Website](https://next-swagger-doc.productsway.com/)

## Articles
- [Can You Add SwaggerUI to Nextjs?](https://stackoverflow.com/questions/66955625/next-js-with-swagger)
- [SwaggerUI + Nextjs](https://blogs.perficient.com/2022/09/13/nextjs-swagger-openapi/)
- [Swaggerui + nodejs](https://javascript.plainenglish.io/how-to-implement-and-use-swagger-in-nodejs-d0b95e765245)
- [Add swaggerui to existing nodejs project](https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b)
