//Root component
import React from 'react'
import './styles.css'
import WebpackImg from './webpackImg.jpeg'
import Profile from './defaultProfile.svg'
import ClickCounter from './ClickCounter'
const App = () => {
  return (
    <>
      {/* 기본 전역 환경변수  */}
      <h1>
        HMR- React Typescript Webpack Starter Template - {process.env.NODE_ENV}
      </h1>
      {/* 개발 모드에 따라 바뀌는 전역 환경변수를 웹팩에서 추가로 설정해줌 */}
      <h2>Process.env.name : {process.env.name}</h2>
      <img src={WebpackImg} alt="imgs" width="400" height="300"></img>
      <img src={Profile} alt="imgs" width="400" height="300"></img>
      <ClickCounter />
    </>
  )
}

export default App
