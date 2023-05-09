import { useState } from 'react'
import { Col, Form, FormGroup, Row, Button } from 'reactstrap'
import { Stack, TextField, } from '@mui/material'

const initLoginAuthorizationBody = {
    email: '',
    password: ''
}

const Login = ({onLogin}) => {

    const isAuthorized = async (authBody) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(authBody)
        }
        const response = await fetch('http://localhost:8000', requestOptions)
        const result = await response.json()
        return result
    }

    const [loginAuthorizationBody, setLoginAuthorizationBody] = useState(initLoginAuthorizationBody)
    const [isError, setIsError ] = useState(false)

    const handleChange = (e) => {
        setLoginAuthorizationBody(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

    setIsError(loginAuthorizationBody.email === '' || loginAuthorizationBody.password === '')

        if (!isError) {
            const result = await isAuthorized(loginAuthorizationBody)
            onLogin(result)
        }
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
                        <TextField 
                        autoComplete='off' 
                        id='userEmailLogin' 
                        name='email' 
                        label='Email' 
                        type='email' 
                        variant='standard' 
                        color='neutral' 
                        value={loginAuthorizationBody.email} 
                        onChange={handleChange} 
                        error={isError}
                        helperText={isError ? 'Introduce el Email' : ''}
                        /> 
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup floating>
                        <TextField 
                        autoComplete='off' 
                        id='userPasswordLogin' 
                        name='password' 
                        label='Password' 
                        type='password' 
                        variant='standard' 
                        color='neutral' 
                        value={loginAuthorizationBody.password} 
                        onChange={handleChange}
                        error={isError}
                        helperText={isError ? 'Introduce la contraseña' : ''}
                        /> 
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