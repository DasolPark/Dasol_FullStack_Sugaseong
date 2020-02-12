const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/assets/js/main.js',
    './src/assets/scss/style.scss',
    './src/assets/images/file.js'
  ],
  output: {
    path: path.resolve(__dirname, 'src/dist/'),
    filename: 'js/bundle.js'
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'css/style.css' })],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/assets/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name() {
            if (process.env.NODE_ENV === 'development') {
              return 'images/[name].[ext]';
            }

            return 'images/[name].[ext]';
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
};
