const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      // css관련 웹팩 설정
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
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
  //process.env.node_env를 어떤 모드 기준으로 할 것인지
  mode: 'development', 
  // mode: 'production', 
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}