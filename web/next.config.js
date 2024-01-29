/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 4000 * 100000 // 4mb,
  },
};

module.exports = nextConfig;
