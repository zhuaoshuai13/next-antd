/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["hooks", "sotre", "utils", "components", "server", "lib"],
    ignoreDuringBuilds: false,
  },

  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://tire.laicteam.com/:path*", // 将此替换为你要请求的目标服务器的URL
      },
    ]
  },
}

module.exports = nextConfig
