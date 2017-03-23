var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './js/index',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    modules: [
      path.join(__dirname, "js"),
      "node_modules"
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'my-project.js',
    library: 'MyProject',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin('my-project.css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            loader: ['css-loader?minimize', 'postcss-loader', 'sass-loader?sourceMap']
          }
        )
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?name=images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    compress: true,
    port: 9000,
    inline: true,
    contentBase: './public'
  }
};
