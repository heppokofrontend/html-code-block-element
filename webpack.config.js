const webpack = require('webpack');
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
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.min.js',
    library: 'HTMLCodeBlockElement',
    libraryExport: 'HTMLCodeBlockElement',
    libraryTarget: 'window',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
    }]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true,
    }),
  ],
};
