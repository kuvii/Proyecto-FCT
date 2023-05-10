import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Body from '../layout/body/Body'

const KingsbankApp = () => {

  function RequireAuth ({ children }) {
    return localStorage.getItem("user") !== null ? children : <Navigate to="/" replace/>
  }

  return (
    <div>
      <Routes>
        <Route element={<Body/>}>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route path='/my' 
        element={
            <RequireAuth>
              <h1>Dashboard</h1>
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default KingsbankApp