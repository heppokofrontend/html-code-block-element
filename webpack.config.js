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
`
})(require('./package.json'));


module.exports = {
  entry: {
    'html-code-block-element.core.min': './src/index.core.ts',
    'html-code-block-element.common.min': './src/index.common.ts',
    'html-code-block-element.all.min': './src/index.all.ts',
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
    rules: [{
      test: /\.(ts|js)$/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    contentBase: __dirname,
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true,
    }),
    new LicenseWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          keep_classnames: true,
        }
      })
    ],
  },
};
