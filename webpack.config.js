const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

const mode = process.env.MODE;

console.log(path.resolve(__dirname, 'src/'));

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: './',
    filename: '[name][contenthash].js',
  },
  mode,
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@fonts': path.resolve(__dirname, 'src/fonts/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  devtool: 'source-map',
  context: __dirname,
  devServer: {
    port: 3003,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
