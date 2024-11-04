/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  

  output: 'export',
  basePath: isProd ? '/dcsAI.github.io/home' : '',
  assetPrefix: isProd ? '/dcsAI.github.io/' : '',
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;














