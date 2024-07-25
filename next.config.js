/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

module.exports = withPWA(nextConfig);
