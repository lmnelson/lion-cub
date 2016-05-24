const path              = require('path');
const nesting           = require('postcss-nested');
const variables         = require('postcss-simple-vars');
const mixins            = require('postcss-mixins');
const autoprefixer      = require('autoprefixer');
const postcssImport     = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./index.js",
  module: {
    loaders: [
      {
        test: /\.pcss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader?')")
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      variables,
      mixins,
      nesting,
      autoprefixer
    ]
  },
  resolve: {
    extensions: ['', '.js', '.pcss'],
    root: [path.join(__dirname, './stylesheets')]
  },
  watch: true,
  devtool: 'source-map'
};
