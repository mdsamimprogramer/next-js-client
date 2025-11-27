
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com', // replace with your image host
      },
    ],
  },
};

export default nextConfig;
