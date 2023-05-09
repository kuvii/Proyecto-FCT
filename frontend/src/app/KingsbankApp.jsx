import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import MainNavbar from '../components/navbar/MainNavbar'

const KingsbankApp = () => {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/my' element={<h1>Dashboard</h1>}/>
      </Routes>
    </div>
  )
}

export default KingsbankApp