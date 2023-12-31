const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
// 진입점 파일 크기가 244kb를 초과하는 경우 코드스플리팅 권장 alert 해제 
  performance : {
    hints : false
  },
  module: { 
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      //css관련 웹팩 설정
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //image파일 관련
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //font & svg 파일 관련
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    },
    new CopyPlugin({
      patterns: [ {from: 'source', to :'dest'}]
    })),
  ],
  stats: 'errors-only',
}