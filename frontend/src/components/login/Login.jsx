import { useState } from 'react'
import { Col, Form, FormGroup, Row, Button } from 'reactstrap'
import { Alert, Stack, TextField, } from '@mui/material'

const initLoginAuthorizationBody = {
    email: '',
    password: ''
}

const Login = () => {

    const [loginAuthorizationBody, setLoginAuthorizationBody] = useState(initLoginAuthorizationBody)

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
        console.log(loginAuthorizationBody)
    }
    const validateEmail = (email) => {
    const emailRegex = /^\w+([-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/
    if (email.match(emailRegex)){
        return true
    }
    return false
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Stack 
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2, md: 2}}
                useFlexGap
                flexWrap='wrap'
                >
                <Col>
                    <FormGroup floating>
                        <TextField autoComplete='off' id='userEmailLogin' name='email' label='Email' type='email' variant='standard' color='neutral' value={loginAuthorizationBody.email} onChange={handleChange} /> 
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup floating>
                        <TextField autoComplete='off' id='userPasswordLogin' name='password' label='Password' type='text' variant='standard' color='neutral' value={loginAuthorizationBody.password} onChange={handleChange}/> 
                    </FormGroup>
                </Col>
                <Col>
                    <Button type="submit">
                        Login
                    </Button>
                </Col>
                </Stack>
            </Row>
        </Form>
    )
}

export default Login