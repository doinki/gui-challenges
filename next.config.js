/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['next-seo']);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: { removeConsole: process.env.NODE_ENV !== 'development' },
  eslint: { dirs: ['src'] },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withBundleAnalyzer, withTM], nextConfig);
