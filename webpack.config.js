const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('bundle.css');

const config = {
  entry: [
    './src/assets/styles/main.scss',
    'babel-polyfill',
    './src/app/components/Index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
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
    extractSass
  ]
};

module.exports = config;
