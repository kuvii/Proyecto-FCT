import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Body from '../layout/body/Body'
import Main from '../screens/main/Main'
import Dashboard from '../components/dashboard/Dashboard'

const initUserInfo = {
    id: null,
    first_name: '',
    last_name: '',
    birthdate: '',
    password: '',
    email: '',
    dni: '',
    phone: '',
    postal_code: '',
    address: '',
    account: {
      id: null,
      role: 0,
      money: '',
      iban: '',
      customerId: null,
      cards: [],
      loans: [],
      movements: []
    }
}

const KingsbankApp = () => {

  function RequireAuth ({ children }) {
    return localStorage.getItem("user") !== null ? children : <Navigate to="/" replace/>
  }

  const [cardsFromUser, setCardsFromUser] = useState([])
  const [loansFromUser, setLoansFromUser] = useState([])
  const [movementsFromUser, setMovementsFromUser] = useState([])

  const [userInfo, setUserInfo] = useState(initUserInfo)

  return (
    <div>
      <Routes>
        <Route element={
          <Body 
          setUserInfo={setUserInfo} 
          setCardsFromUser={setCardsFromUser}
          setLoansFromUser={setLoansFromUser}
          setMovementsFromUser={setMovementsFromUser}
          />
          }>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route
        element={
            <RequireAuth>
              <Main 
              userInfo={userInfo} 
              setUserInfo={setUserInfo}
              
              cardsFromUser={cardsFromUser} 
              setCardsFromUser={setCardsFromUser}

              loansFromUser={loansFromUser} 
              setLoansFromUser={setLoansFromUser}
              
              movementsFromUser={movementsFromUser} 
              setMovementsFromUser={setMovementsFromUser}
              />
            </RequireAuth>
          }
        >
        <Route path='/my' element={
            <Dashboard userInfo={userInfo} />
        }/>

        <Route path='/my/movements' element={
          <RequireAuth>
            <h1>Movements</h1>
          </RequireAuth>
        }
        />
        </Route>
      </Routes>
    </div>
  )
}

export default KingsbankApp