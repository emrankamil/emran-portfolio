/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
    config.resolve.alias.canvas = false;
    
    return config;
    },
    swcMinify: true,
}

module.exports = nextConfig
