import React, { useMemo, useState, } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Body from '../layout/body/Body'
import Main from '../components/customer-components/Main'
import Dashboard from '../components/customer-components/Dashboard'
import MovementsList from '../components/customer-components/MovementsList'
import CardsList from '../components/customer-components/CardsList'
import AdminDashboard from '../screens/admin/AdminDashboard'
import LoansPage from '../screens/admin/LoansPage'
import CardsPage from '../screens/admin/CardsPage'
import { ThemeProvider, createTheme } from '@mui/material'
import LoanList from '../components/customer-components/LoanList'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {}, mode: 'light' })

const KingsbankApp = () => {

  function RequireAuth ({ children }) {
    return localStorage.getItem("userLogged") !== null ? children : <Navigate to="/" replace/>
  }

  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light'

      const body = document.querySelector('body')
      if (newMode === 'light') {
        body.classList.remove('dark-mode')
      } else {
        body.classList.add('dark-mode')
      }

      return newMode
    })
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={{ toggleColorMode, mode}}>
          <Routes>

            <Route element={ <Body /> }>
              <Route path='/' element={<Home/>}/>
            </Route>

            <Route element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }>

            <Route path='/my' element={ 
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }/>

            <Route path='/my/movements' element={
              <RequireAuth>
                <MovementsList />
              </RequireAuth>
            }/>

            <Route path='/my/cards' element={
              <RequireAuth>
                <CardsList />
              </RequireAuth>
            }/>

            <Route path='/my/loans' element={
              <RequireAuth>
                <LoanList/>
              </RequireAuth>
            }/>

            <Route path='/admin' element={
              <RequireAuth>
                <AdminDashboard />
              </RequireAuth>
            }/>

            <Route path='/admin/loans' element={
              <RequireAuth>
                <LoansPage />
              </RequireAuth>
            }/>

            <Route path='/admin/cards' element={
              <RequireAuth>
                <CardsPage/>
              </RequireAuth>
            }/>

            </Route>
          </Routes>
        </ColorModeContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default KingsbankApp