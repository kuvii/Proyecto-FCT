import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, } from 'reactstrap'
import { Avatar, Collapse, Container, ThemeProvider, createTheme, useMediaQuery, useTheme, } from '@mui/material'
import logo from '../../assets/KingsBank_BlancoVerde1.png'
import Login from '../login/Login'

const MainNavbar = () => {

  const defaultTheme = useTheme()
  const widthControlTrigger = useMediaQuery(defaultTheme.breakpoints.up('sm'))

  const [isLogged, setIsLogged ] = useState(false)

  const handleLogin = result => {
    setIsLogged(result)
  }

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
              <Login onLogin={handleLogin} />
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
        {isLogged ? (
            <Avatar sx={{ bgcolor: '#3f51b5', mr: 2 }}>{'U'}</Avatar>
          ) : (
            <>
              {widthControlTrigger ? (
                <Login onLogin={handleLogin}/>
              ) : (
                <CollapsedNavbar isOpen={isOpen} />
              )}
            </>
          )}
        </ThemeProvider>
    </Navbar>
    </div>
  )
}

export default MainNavbar