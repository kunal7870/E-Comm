import { useState } from 'react'

import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Poster from './components/Poster'
import FilterPanel from './components/FilterPanel'
import Cart from './assets/Cart.png'
function App() {


  return (
    <>
      <header className="header h-[45px]  mt-[26px] px-5 flex justify-between ">
        <div className="Company flex m-2  gap-2 items-center font-bold text-2xl"><Logo /> E-Comm</div>
        <Navbar />
        <div className="cartArea flex m-2 gap-3 ">
          <img src={Cart} alt="cart" />
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
