/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cloudflare-ipfs.com",
      "avatars.githubusercontent.com",
      "picsum.photos",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

export default nextConfig;
