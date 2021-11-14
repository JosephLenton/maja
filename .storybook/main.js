const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  styles: [
    "../src/core/css/*.css",
  ],
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],

  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
}
