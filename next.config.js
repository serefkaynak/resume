/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: [
    //   "placebeard.it"
    // ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "placebeard.it",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
