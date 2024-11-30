const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './main.js',
  target: 'electron-main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // Optimize for production
  optimization: {
    minimize: true, // Minify the output
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'package.json', to: 'package.json' }, // Copy package.json to dist
      ],
    }),
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
};
