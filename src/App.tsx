//Root component 
import React from 'react'
import './styles.css';
import WebpackImg from './webpackImg.jpeg';

const App = () => {
  return (
    <>
    <h1>React Typescript Webpack Starter Template</h1>
    <img src={WebpackImg} alt="imgs" width="400" height="300"></img>
    </>
  )
}

export default App