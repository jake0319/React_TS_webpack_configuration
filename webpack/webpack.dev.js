const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports={
  mode: 'development',
  devServer: {
    hot: true,
    open: true  // package.json의 scripts 옵션중 --open 삭제 가능 
  },
  devtool: 'cheap-module-source-map', 
  //원본 소스와 변환된 코드 사이의 매핑을 제공하며, 빌드 속도와 파일 크기 사이에 좋은 균형을 제공, 하지만, //column 매핑은 제공하지 않아 프로덕션 환경의 정확한 오류 추적에는 적합하지 않을 수 있습니다.
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Jake-Dev')
    }),
    new ReactRefreshWebpackPlugin(),
  ]
  }
  