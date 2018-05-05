const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  title: 'Advanced React App',
  template: 'views/index.jade',
  filename: 'index.html',
  hash: true
});
const extractSass = new ExtractTextPlugin('[name].bundle.css');
const copyAssets = new CopyWebpackPlugin([
  {
    from: 'src/assets/images/**/*',
    to: '[name].[ext]'
  }
]);

const config = {
  entry: [
    'assets/styles/main.scss',
    'babel-polyfill',
    'app/renderers/dom.js'
  ],
  resolve: {
    modules: [
      path.resolve('./views'),
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.jade$/, loader: 'jade-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        }),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    htmlWebpack,
    extractSass,
    copyAssets,
  ]
};

module.exports = config;
