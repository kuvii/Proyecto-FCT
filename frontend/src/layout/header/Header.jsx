import React from 'react'
import MainNavbar from '../../components/navbar/MainNavbar'

const Header = (props) => {
  return (
    <div>
        <MainNavbar 
        setCardsFromUser={props.setCardsFromUser}
        setLoansFromUser={props.setLoansFromUser}
        setMovementsFromUser={props.setMovementsFromUser}
        />
    </div>
  )
}

export default Header