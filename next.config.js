const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// @ts-check

/*@type {import('next').NextConfig}*/ 

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
    }
  }

  return {
    /* config options for all phases except development here */
  }
}
