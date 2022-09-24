const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// @ts-check

/*@type {import('next').NextConfig}*/

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       /* development only config options here */
//       reactStrictMode: true,
//     }
//   }

//   return {
//     /* config options for all phases except development here */
//   }
// }

const withTM = require('next-transpile-modules')([
  'swagger-ui-react',
  'react-syntax-highlighter',
  'swagger-client'
]);

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig);

module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

