import { useState } from 'react'
import { Col, Form, FormGroup, Row, Button } from 'reactstrap'
import { Stack, TextField, } from '@mui/material'
import { useNavigate } from 'react-router'
import isAuthorized from '../../api/auth'

const initLoginAuthorizationBody = {
    email: '',
    password: ''
}

const Login = () => {

    const navigate = useNavigate()

    

    const [loginAuthorizationBody, setLoginAuthorizationBody] = useState(initLoginAuthorizationBody)
    const [emptyField, setEmptyField] = useState('')
    const [errorText, setErrorText] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLoginAuthorizationBody(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        setEmptyField('')
        setErrorText(prevState => ({
            ...prevState,
            [e.target.name]: ''
        }))
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

    const emptyFieldName = Object.keys(loginAuthorizationBody).find(key => loginAuthorizationBody[key] === '')

        if (emptyFieldName) {
            setEmptyField(emptyFieldName)
            setErrorText(prevState => ({
                ...prevState,
                [emptyFieldName]: 'Este campo es requerido'
            }))
        } else {
            try {
                const result = await isAuthorized(loginAuthorizationBody)
                if (result) {
                    navigate("/my")
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Stack 
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2, md: 2}}
                alignItems='center'
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
                        error={emptyField === 'email'}
                        helperText={emptyField === 'email' ? errorText.email : ''}
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
                        error={emptyField === 'password'}
                        helperText={emptyField === 'password' ? errorText.password : ''}
                        /> 
                    </FormGroup>
                </Col>
                <Col>
                    <Button type="submit" color='dark'>
                        Login
                    </Button>
                </Col>
                </Stack>
            </Row>
        </Form>
    )
}

export default Login