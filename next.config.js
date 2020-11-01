const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports = {
  trailingSlash: true,
  webpack: function (config) {
    
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    }
    
    config.plugins.push(
      new BundleAnalyzerPlugin({ token: process.env.ANALYZER_TOKEN })
    )
    
    return config
  }
}
