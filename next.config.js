/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  
  output: 'export',
  basePath: isProd ? '/aiSite.github.io' : '',
  assetPrefix: isProd ? '/aiSite.github.io' : '',
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;














