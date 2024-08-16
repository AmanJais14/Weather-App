import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function App() {
  

  return (
    <div  className='weather'>
      <h1 style={{textAlign :"center"}}>Weather App</h1>
      <SearchBox/>
      <video autoPlay muted loop id="myVideo">
        <source src="./vdo.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default App
