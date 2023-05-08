import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Nav, Navbar, NavbarBrand, NavbarToggler, Row, Collapse } from 'reactstrap'
import { Stack, TextField, ThemeProvider, createTheme, useMediaQuery, useTheme } from '@mui/material'
import logo from '../../assets/KingsBank_BlancoVerde1.png'

const MainNavbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => setIsOpen(!isOpen)

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

  const EmailLoginInput = () => {
    return (
      <Col>
        <FormGroup floating>
          <ThemeProvider theme={theme}>
            <TextField id='userEmailLogin' name='userEmailLogin' label='Email' type='email' variant='standard' color='neutral' /> 
          </ThemeProvider>
        </FormGroup>
      </Col>
    )
  }

  const PasswordLoginInput = () => {
    return (
      <Col>
        <FormGroup floating>
          <ThemeProvider theme={theme}>
            <TextField id='userPasswordLogin' name='userPasswordLogin' label='Password' type='password' variant='standard' color='neutral' /> 
          </ThemeProvider>
        </FormGroup>
      </Col>
    )
  }

  const ButtonLogin = () => {
    return (
      <Col>
        <Button>
          Login
        </Button>
      </Col>
    )
  }

  const CollapsedForm = () => {
    return (
      <>
        <NavbarToggler onClick={toggleNavBar}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <LoginForm/>
          </Nav>
        </Collapse>
      </>
    )
  }

  const LoginForm = () => {
    return (
      <Form>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Stack 
          direction={{xs: 'column', sm: 'row'}}
          spacing={{xs: 1, sm: 2, md: 2}}
          useFlexGap
          flexWrap='wrap'
          >
            <EmailLoginInput/>
            <PasswordLoginInput/>
            <ButtonLogin/>
          </Stack>
        </Row>
      </Form>
    )
  }

  return (
    <div>
      <Navbar container={'fluid'} >
        <NavbarBrand href='/'>
            <img alt='kingsbankLogo' src={logo} style={{height: 70, width: 80}}/>
          KingsBank
        </NavbarBrand>
        {widthControlTrigger ? <LoginForm/> : <CollapsedForm/>}
    </Navbar>
    </div>
  )
}

export default MainNavbar