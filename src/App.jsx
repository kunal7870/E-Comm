import { useState } from 'react'

import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Poster from './components/Poster'
import FilterPanel from './components/FilterPanel'
function App() {


  return (
    <>
      <header className="header h-[45px] border-2 mt-[26px] border-amber-700 flex justify-between ">
        <div className="Company flex m-2 gap-2 items-center font-bold text-2xl"><Logo /> E-Comm</div>
        <Navbar />
        <div className="cartArea flex m-2 gap-3 ">
          <div className="cartpng"><img src="" alt="" />cart</div>
          <div>item</div>
          <div> $ 0.00</div>
        </div>
      </header>
      <div className='flex'>
        <Sidebar />
        <div>
          <Poster />
          <FilterPanel />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
