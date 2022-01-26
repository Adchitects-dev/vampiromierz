/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pl.wikipedia.org','upload.wikimedia.org'],
  },
}

module.exports = nextConfig
