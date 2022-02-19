/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
`

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
	}
];

const nextConfig = {
  reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
  },
	images: {
    domains: ['lh5.googleusercontent.com'],
  },
	/*
	async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
	*/
}

module.exports = nextConfig
