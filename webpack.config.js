var nesting       = require('postcss-nested');
var variables     = require('postcss-simple-vars');
var mixins        = require('postcss-mixins');
var autoprefixer  = require('autoprefixer');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.pcss$/, loader: "style-loader!css-loader!postcss-loader" }
    ]
  },
  postcss: function () {
    return [mixins, variables, nesting, autoprefixer]
  },
};
