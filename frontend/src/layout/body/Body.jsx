import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header/Header'

const Body = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Body