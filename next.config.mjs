/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		SERVER_URL: process.env.REACT_SERVER_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'flagcdn.com',
				port: '',
				pathname: '/w320/**',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname: '/wikipedia/commons/**',
			},
		],
	},
}

export default nextConfig
