/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/feedback', destination: '/feedback.html' },
    ]
  },
}

module.exports = nextConfig
