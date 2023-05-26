import React, { Suspense, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Body from '../layout/body/Body'
import Main from '../screens/main/Main'
import Dashboard from '../components/dashboard/Dashboard'
import MovementsList from '../components/movements_list/MovementsList'
import CardsList from '../components/cards_list/CardsList'
import AdminDashboard from '../screens/admin/AdminDashboard'
import LoansPage from '../screens/admin/LoansPage'
import CardsPage from '../screens/admin/CardsPage'
import LoansUser from '../components/loansUser/LoansUser'

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

  const [userRole, setUserRole] = useState(null)

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
          setUserRole={setUserRole}
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
            <MovementsList 
              movementsFromUser={movementsFromUser} 
              setMovementsFromUser={setMovementsFromUser}
            />
          </RequireAuth>
        }/>

        <Route path='/my/cards' element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <RequireAuth>
              <CardsList 
              cardsFromUser={cardsFromUser}
              setCardsFromUser={setCardsFromUser}
              />
            </RequireAuth>
          </Suspense>
        }/>

        <Route path='/my/loans' element={
          <RequireAuth>
            <LoansUser 
              loansFromUser={loansFromUser} 
              setLoansFromUser={setLoansFromUser}
            />
          </RequireAuth>
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