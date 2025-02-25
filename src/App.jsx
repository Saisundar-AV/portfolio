// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Education from './Components/Education'
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <hr style={{top:"20px",position:"relative",width:"100%"}}></hr>
      <Education />
    </>
  )
}

export default App
