module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  distDir: 'build',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
}
