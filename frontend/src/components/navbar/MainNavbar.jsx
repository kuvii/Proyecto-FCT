import React, { useContext, useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, } from 'reactstrap'
import { Collapse, Container, ThemeProvider, createTheme, useMediaQuery, useTheme, } from '@mui/material'
import logo from '../../assets/KingsBank_BlancoVerde1.png'
import Login from '../login/Login'
import { ColorModeContext } from '../../app/KingsbankApp'
import themeHandler from '../../utils/theme'
import { Stack } from '@mui/system'

const MainNavbar = (props) => {

  const defaultTheme = useTheme()
  const widthControlTrigger = useMediaQuery(defaultTheme.breakpoints.up('sm'))

  const { mode } = useContext(ColorModeContext)

  const theme = createTheme({
    palette: {
      mode: mode === 'dark' ? 'dark' : 'light',
      neutral: {
        main: themeHandler.LIGHT_MODE.secondary_color,
        contrastText: themeHandler.LIGHT_MODE.secondary_color,
        contrastThreshold: 3,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: themeHandler.LIGHT_MODE.secondary_color,
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: themeHandler.LIGHT_MODE.secondary_color,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: themeHandler.LIGHT_MODE.secondary_color,
              },
              '&:hover fieldset': {
                borderColor: themeHandler.LIGHT_MODE.secondary_color,
              },
              '&.Mui-focused fieldset': {
                borderColor: themeHandler.LIGHT_MODE.secondary_color,
              },
            },
          },
        },
      },
    }
  });
  

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
          <Stack direction='row' alignItems='center' marginLeft={1} >
              <img alt='kingsbankLogo' src={logo} style={{height: 70, width: 80}}/>
              <div className={`${mode === 'dark' ? 'dark-mode' : ''}`}>
                KingsBank
              </div>
          </Stack>
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