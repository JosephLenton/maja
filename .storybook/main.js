const path = require('path')

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
  webpackFinal: async (config, env) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "..", "src"),
    }

    config.resolve.modules.push(__dirname, "..", "src")
    config.resolve.modules.push(__dirname, "..", "node_modules")

    return config
  },
}
