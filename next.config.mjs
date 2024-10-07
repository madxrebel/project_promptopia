/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true, // Enforces best practices in React
  swcMinify: true,       // Enables SWC compiler minification for faster builds
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  webpack(config) {
    // Allows usage of top-level await
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  }
}

export default nextConfig;
