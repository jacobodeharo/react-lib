const path = require('path');

const MAX_ASSET_SIZE = 1024 * 1024;

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');

    config.optimization = {
      ...config.optimization,
      ...{
        splitChunks: {
          chunks: 'all',
          minSize: 0,
          maxSize: MAX_ASSET_SIZE,
        },
      },
    };

    config.performance = {
      maxAssetSize: MAX_ASSET_SIZE,
      // hints: false
    };

    // Return the altered config
    return config;
  },
};
