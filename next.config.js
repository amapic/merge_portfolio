/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath:"/agap2",
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  },

  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     'index.html': { page: '/index' },
  //     'agap2.html': { page: '/agap2' },
  //   };
  // },
  // trailingSlash: true,
};

module.exports = nextConfig;

// export default nextConfig
