/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  async redirects() {
    return [
      // Legacy path still being requested (seen in Netlify's 404 log, Sep 2026).
      { source: '/on-premises-support', destination: '/on-premises', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/feedback', destination: '/feedback.html' },
    ]
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
    ]
  },
}

module.exports = nextConfig
