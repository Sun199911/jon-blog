/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.apple.com',
      },
    ],
  },
};

module.exports = nextConfig;
