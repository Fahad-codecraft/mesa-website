/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com"]
  },
  typescript: {
    ignoreBuildError: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
