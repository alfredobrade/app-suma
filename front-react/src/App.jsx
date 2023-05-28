import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ButtonYes from './components/ButtonYes'

function App() {

  return (
    <>
      <Header/>
      <h1>eric me enseña react</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
