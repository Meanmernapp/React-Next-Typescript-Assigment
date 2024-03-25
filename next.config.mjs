/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  	{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com'
		  	}
		],
		domains: ['via.placeholder.com','fakestoreapi.com'],
	},
};

export default nextConfig;
