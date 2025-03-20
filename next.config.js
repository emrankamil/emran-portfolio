/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
    config.resolve.alias.canvas = false;
    
    return config;
    },
    swcMinify: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
