// next.config.js
const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    // 1) fallback 'buffer' to the npm buffer package
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve('buffer/'),
    };
    // 2) expose Buffer globally so modules can use it
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );
    return config;
  },
};
