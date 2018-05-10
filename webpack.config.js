const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    extractSass,
    copyAssets,
  ]
};

module.exports = config;
