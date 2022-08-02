/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
});

// export default nextConfig;
