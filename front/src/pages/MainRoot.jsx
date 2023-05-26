import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../companent/Navbar'
import Footer from '../companent/Footer'

const MainRoot = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainRoot
