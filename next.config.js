// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     output: 'export',
//     distDir: "out",
// };

// export default nextConfig;

// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ disable image optimization for static export
  },
};

module.exports = nextConfig;
