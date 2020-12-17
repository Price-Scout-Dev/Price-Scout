const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    open: true,
    publicPath: '/build',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },
};
