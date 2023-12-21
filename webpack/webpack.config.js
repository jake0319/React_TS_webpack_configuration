const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common');

// package.json 파일에서 전달하는 환경 변수에 엑세스할 수 있음.
// 객체가 아닌 함수 형태로 할당

// module.exports = (envVars)=>{
//   const { env } = envVars // destructuring
//   const envConfig = require(`./webpack.${env}.js`)
//   const config = merge(commonConfig, envConfig) 
//   return config 
// }
module.exports = ({env})=>{
  //env변수는 dev, prod모드 실행시 각각 변경됨.
  const envConfig = require(`./webpack.${env}.js`)
  return merge(commonConfig, envConfig) // 두 config 파일을 병합
}