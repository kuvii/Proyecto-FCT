import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header/Header'

const Body = (props) => {
  return (
    <div>
        <Header 
        setUserInfo={props.setUserInfo}
        setCardsFromUser={props.setCardsFromUser}
        setLoansFromUser={props.setLoansFromUser}
        setMovementsFromUser={props.setMovementsFromUser}
        />
        <Outlet/>
    </div>
  )
}

export default Body