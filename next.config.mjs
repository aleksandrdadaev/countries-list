/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		SERVER_URL: process.env.REACT_SERVER_URL,
	},
}

export default nextConfig
