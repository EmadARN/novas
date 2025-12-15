/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, //  رفع خطا در Build
  },
  images: {
    domains: ["nova-back.runflare.run"], //  فقط دامنه بدون https
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nova-back.runflare.run", //  فقط دامنه
        pathname: "/**", // همه مسیرها
      },
    ],
  },
};

export default nextConfig;
