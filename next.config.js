/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ]
  },
  webpack: (config, { isServer }) => {
    // 클라이언트 사이드 최적화
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2
            }
          }
        }
      }
    }
    return config
  },
  // 추가 성능 최적화
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig 