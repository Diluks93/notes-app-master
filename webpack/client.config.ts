import path from 'path';
import { Configuration } from 'webpack';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const config: Configuration = {
  entry: [
    // 'webpack-hot-middleware/client?reload=true&noInfo=true',
    './client/index.tsx',
  ],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              require.resolve('react-refresh/babel')
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '/assets/images/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: '/assets/icons/',
            },
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new ReactRefreshWebpackPlugin(),
  // ],
  devtool: 'inline-source-map',
  // watch: true,
};

export default config;
