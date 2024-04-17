/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {missingSuspenseWithCSRBailout: true},
};

export default nextConfig;
