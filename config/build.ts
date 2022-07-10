import { build } from 'esbuild';

/**
* Common options passed during build .
*/

interface BuildOptions {
  env: 'production' | 'development';
}

/**
* client | A builder function of the package .
*/
export async function buildApp(options: BuildOptions) {
  const { env } = options;
  await build({
    entryPoints: ['packages/client/src/index.tsx'], // We read from this entry point React Applications
    outfile: 'packages/client/public/script.js', // We are public/ Output a file in the folder （ please remember , stay HTML The page uses "script.js"）
    define: {
    'process.env.NODE_ENV': `"${env}"`, // We need to define the Node.js Environmental Science
    },
    bundle: true,
    minify: env === 'production',
    sourcemap: env === 'development',
  });
}
/**
* server | The builder function of the software package .
*/
export async function buildServer(options: BuildOptions) {
  const { env } = options;
  await build({
    entryPoints: ['packages/server/src/index.ts'],
    outfile: 'packages/server/dist/index.js',
    define: {
      'process.env.NODE_ENV': `"${env}"`,
    },
    external: ['express'], // Some libraries must be marked as external libraries
    platform: 'node', // by Node Build time , We need to set the environment for it
    target: 'node14.15.5',
    bundle: true,
    minify: env === 'production',
    sourcemap: env === 'development',
  });
}

/**
* The builder function of all packages .
*/
async function buildAll() {
  await Promise.all([
    buildApp({
      env: 'production',
    }),
    buildServer({
      env: 'production',
    }),
  ]);
}

// When we use from the terminal ts-node When running scripts , This method will be executed
buildAll();
