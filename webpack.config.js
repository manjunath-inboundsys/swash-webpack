const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode;
let target = 'web';

if (process.env.NODE_ENV) {
  if (process.env.NODE_ENV.trim() == 'production') {
    mode = 'production';
    target = 'browserslist';
  } else if (process.env.NODE_ENV.trim() == 'development') {
    mode = 'development';
    target = 'browserslist';
  }
} else {
  process.env.NODE_ENV = 'development';
  mode = 'development';
  target = 'browserslist';
}

console.log('Mode - ', mode, 'ENV - ', process.env.NODE_ENV);

module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        // type: 'asset/inline',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: false,
  devServer: {
    static: { directory: './dist' },
    hot: true,
  },
};
