/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
	swcMinify: true,
	images: {
    domains: ['lh5.googleusercontent.com'],
  },
	async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
			{
				source: '/about',
				destination: `/about/${new Date().getFullYear()}`,
				permanent: true,
			}
    ]
  },
	async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
