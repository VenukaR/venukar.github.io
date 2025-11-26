import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	output: 'export',
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default withContentlayer(nextConfig);
