const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyPlugin = require('copy-webpack-plugin');

const terraApplicationConfig = (env = {}) => ({
  entry: {
    index: './src/index.jsx',
  },
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mega-app-2',
      // remotes: {
      //   organizer: 'organizer@http://localhost:8081/OrganizerPages.js',
      // },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        '@cerner/terra-application': {
          singleton: true,
          version: '2.1',
          requiredVersion: '^2.0',
        },
        '@cerner/terra-application/': {
          singleton: true,
          version: '2.1',
          requiredVersion: '^2.0',
        },
        'react-router-dom': {
          singleton: true,
        },
        'react-intl': {
          singleton: true,
          requiredVersion: '^5.0.0',
        },
      },
    }),
    new HtmlWebpackPlugin({
      lang: env.defaultLocale || 'en',
      filename: 'index.html',
      template: './src/template/index.html',
      rootElementId: 'root',
    }),
    new DefinePlugin({
      TERRA_APPLICATION_LOCALE: JSON.stringify(env.defaultLocale || 'en'),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/config', to: 'config' },
      ],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

module.exports = mergedConfig;
