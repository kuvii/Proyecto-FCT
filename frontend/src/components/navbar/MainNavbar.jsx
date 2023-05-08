import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Nav, Navbar, NavbarBrand, NavbarToggler, Row, Collapse } from 'reactstrap'
import { Alert, Stack, TextField, ThemeProvider, createTheme, useMediaQuery, useTheme } from '@mui/material'
import logo from '../../assets/KingsBank_BlancoVerde1.png'

const initLoginAuthorizationBody = {
  email: '',
  password: ''
}

const EmailLoginInput = ({value, onChange}) => {
  return (
    <Col>
      <FormGroup floating>
        <TextField autoComplete='off' id='userEmailLogin' name='email' label='Email' type='email' variant='standard' color='neutral' value={value} onChange={onChange} /> 
      </FormGroup>
    </Col>
  )
}

const PasswordLoginInput = ({value, onChange}) => {
  return (
    <Col>
      <FormGroup floating>
        <TextField autoComplete='off' id='userPasswordLogin' name='password' label='Password' type='text' variant='standard' color='neutral' value={value} onChange={onChange}/> 
      </FormGroup>
    </Col>
  )
}

const ButtonLogin = () => {
  return (
    <Col>
      <Button type="submit">
        Login
      </Button>
    </Col>
  )
}

const CollapsedForm = (props) => {
  return (
    <>
      <NavbarToggler onClick={props.toggleNavBar}/>
      <Collapse isOpen={props.isOpen} navbar>
        <Nav navbar>
          <LoginForm handleChange={props.handleChange} handleSubmit={props.handleSubmit} loginAuthorizationBody={props.loginAuthorizationBody}/>
        </Nav>
      </Collapse>
    </>
  )
}

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Row className="row-cols-lg-auto g-3 align-items-center">
        <Stack 
        direction={{xs: 'column', sm: 'row'}}
        spacing={{xs: 1, sm: 2, md: 2}}
        useFlexGap
        flexWrap='wrap'
        >
          <EmailLoginInput value={props.loginAuthorizationBody.email} onChange={(e) => props.handleChange(e)} />
          <PasswordLoginInput value={props.loginAuthorizationBody.password} onChange={(e) => props.handleChange(e)}/>
          <ButtonLogin />
        </Stack>
      </Row>
    </Form>
  )
}

const MainNavbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [loginAuthorizationBody, setLoginAuthorizationBody] = useState(initLoginAuthorizationBody)

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

  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(emailRegex)){
      return true
    }
    return false
  }

  const handleChange = (e) => {
    setLoginAuthorizationBody(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = loginAuthorizationBody

    if (email === '' || password === ''){
      <Alert severity='error'>Por favor rellena ambos campos</Alert>
    }
    if (!validateEmail(email)){
      <Alert severity='error'>Email incorrecto</Alert>
    }
  }

  return (
    <div>
      <Navbar container={'fluid'} >
        <NavbarBrand href='/'>
            <img alt='kingsbankLogo' src={logo} style={{height: 70, width: 80}}/>
          KingsBank
        </NavbarBrand>
        <ThemeProvider theme={theme}>
          {widthControlTrigger ? <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} loginAuthorizationBody={loginAuthorizationBody} /> 
          : <CollapsedForm toggleNavBar={toggleNavBar} handleChange={handleChange} handleSubmit={handleSubmit} loginAuthorizationBody={loginAuthorizationBody} />}
        </ThemeProvider>
    </Navbar>
    </div>
  )
}

export default MainNavbar