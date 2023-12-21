const webpack = require('webpack')

module.exports={
  mode: 'production',
  devtool: 'source-map', //CRA환경에 대해 권장, 성능 최적화와 정확한 소스 맵핑에 초점을 맞추고 있는 설정
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Jake-Prod')
    })
  ]
  }