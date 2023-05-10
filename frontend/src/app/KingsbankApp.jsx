import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Body from '../layout/body/Body'

const KingsbankApp = () => {
  return (
    <div>
      <Routes>
        <Route element={<Body/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      
        <Route path='/my' element={<h1>Dashboard</h1>}/>
      </Routes>
    </div>
  )
}

export default KingsbankApp