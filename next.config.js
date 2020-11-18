module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  amp: "hybrid",
  distDir: "build",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "~": __dirname,
    };

    return config;
  },
};
