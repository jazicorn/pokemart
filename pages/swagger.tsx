import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'swagger-ui-react/swagger-ui.css';

// @ts-ignore
const SwaggerUI = dynamic<{ url: string }>(import('swagger-ui-react'), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <Head>
        <title>Template-Nextjs-Full-User</title>
        <meta name="description" content="Template for Nextjs App with Authentication" />
      </Head>
      <SwaggerUI url="/api/doc" />
    </div>
  );
}
