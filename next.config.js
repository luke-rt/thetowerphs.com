/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
	swcMinify: true,
	images: {
    domains: ['lh5.googleusercontent.com'],
  },
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
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

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withBundleAnalyzer(withMDX(nextConfig))
