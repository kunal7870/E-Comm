import { useState } from 'react'

import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
 

  return (
    <>
      <div className="header h-[45px] border-2 mt-[26px] border-amber-700 flex justify-between ">
        <div className="Company flex m-2"> <img src="" alt="logo" /> E-Comm</div>
          <Navbar/>
          <div className="cartArea flex m-2">
            <div className="cartpng"><img src="" alt=""/>cart</div>
            <div>item</div>
            <div>$ 0.00</div>
          </div>
      </div>
        <Footer/>
    </>
  )
}

export default App
