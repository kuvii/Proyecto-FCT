import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, } from 'reactstrap'
import { Collapse, Container, ThemeProvider, createTheme, useMediaQuery, useTheme, } from '@mui/material'
import logo from '../../assets/KingsBank_BlancoVerde1.png'
import Login from '../login/Login'

const MainNavbar = (props) => {

  const defaultTheme = useTheme()
  const widthControlTrigger = useMediaQuery(defaultTheme.breakpoints.up('sm'))

  const theme = createTheme({
      palette: {
        neutral: {
          main: '#fff',
          contrastText: '#fff',
          contrastThreshold: 3,
        }
      },
      typography: {
        fontFamily: 'Space Mono'
      },
  })

  const [isOpen, setIsOpen] = useState(false)
  const toggleNavBar = () => setIsOpen(!isOpen)

  const CollapsedNavbar = ({isOpen}) => {

    return (
      <>
        <NavbarToggler onClick={toggleNavBar}/>
        <Container maxWidth='sm'>
          <Collapse in={isOpen} >
              <Login 
                setCardsFromUser={props.setCardsFromUser}
                setLoansFromUser={props.setLoansFromUser}
                setMovementsFromUser={props.setMovementsFromUser}
              />
          </Collapse>
        </Container>
      </>
    )
  }

  return (
    <div>
      <Navbar container={'fluid'} >
        <NavbarBrand href='/'>
            <img alt='kingsbankLogo' src={logo} style={{height: 70, width: 80}}/>
          KingsBank
        </NavbarBrand>
        <ThemeProvider theme={theme}>
          {widthControlTrigger ? (
            <Login 
            setCardsFromUser={props.setCardsFromUser}
            setLoansFromUser={props.setLoansFromUser}
            setMovementsFromUser={props.setMovementsFromUser}
            />
          ) : (
            <CollapsedNavbar isOpen={isOpen} />
          )}
        </ThemeProvider>
    </Navbar>
    </div>
  )
}

export default MainNavbar