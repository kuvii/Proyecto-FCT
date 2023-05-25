import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Body from '../layout/body/Body'
import Main from '../components/customer-components/Main'
import Dashboard from '../components/dashboard/Dashboard'
import MovementsList from '../components/customer-components/MovementsList'
import CardsList from '../components/customer-components/CardsList'
import AdminDashboard from '../screens/admin/AdminDashboard'
import LoansPage from '../screens/admin/LoansPage'
import CardsPage from '../screens/admin/CardsPage'

const KingsbankApp = () => {

  function RequireAuth ({ children }) {
    return localStorage.getItem("userLogged") !== null ? children : <Navigate to="/" replace/>
  }

  return (
    <div>
      <Routes>
        <Route element={
          <Body />
          }>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route
        element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        >
        <Route path='/my' element={
            <Dashboard />
        }/>

        <Route path='/my/movements' element={
          <RequireAuth>
            <MovementsList />
          </RequireAuth>
        }/>

        <Route path='/my/cards' element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <RequireAuth>
              <CardsList />
            </RequireAuth>
          </Suspense>
        }/>

          <Route path='/admin' element={
            <AdminDashboard />
          } />

          <Route path='/admin/loans' element={
            <LoansPage />
          } />

          <Route path='/admin/clients' element={
            <h1>Clientes</h1>
          } />

          <Route path='/admin/cards' element={
            <CardsPage/>
          } />
        </Route>

      </Routes>
    </div>
  )
}

export default KingsbankApp