import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <SwaggerUI spec={spec} />;
}

const SwaggerUI = dynamic<{ spec: Record<string, any> }>(
    import('swagger-ui-react'),
    {
        ssr: false,
    }
);

export const getStaticProps: GetStaticProps = async () => {
    const spec: Record<string, any> = createSwaggerSpec({
        apiFolder: 'pages/api',
        schemaFolders: ['./lib/models'],
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Template-Nextjs-Full-User',
                version: '1.0',
            },
        },
    });

    return {
        props: {
            spec,
        },
    };
};

export default ApiDoc;
