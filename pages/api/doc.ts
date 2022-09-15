import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Template-Nextjs-Full-User',
      version: '0.1.0',
    },
  },
  schemaFolders: ['./lib/models'],
});
export default swaggerHandler();
