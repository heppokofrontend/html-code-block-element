const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const {LicenseWebpackPlugin} = require('license-webpack-plugin');
const path = require('path');
const banner = (({name, version, author, license}) => {
  return `
/*!
 * ${name} v${version}
 * author: ${author}
 * license: ${license}
 */
`;
})(require('./package.json'));

module.exports = {
  entry: {
    'html-code-block-element.core.min': './dist/index.core.js',
    'html-code-block-element.common.min': './dist/index.common.js',
    'html-code-block-element.all.min': './dist/index.all.js',
  },
  output: {
    path: path.join(__dirname, 'lib'),
    library: 'HTMLCodeBlockElement',
    libraryExport: 'HTMLCodeBlockElement',
    libraryTarget: 'window',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
      },
    ],
  },
  performance: {
    maxEntrypointSize: 1200000,
    maxAssetSize: 1200000,
  },
  devServer: {
    open: true,
    static: [path.resolve(__dirname, 'demo'), path.resolve(__dirname, 'lib')],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true,
    }),
    new LicenseWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
};
