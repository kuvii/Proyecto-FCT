import { useEffect, useState } from 'react'
import { Col, Form, FormGroup, Row, Button } from 'reactstrap'
import { Stack, TextField, } from '@mui/material'
import { useNavigate } from 'react-router'
import authApi from '../../api/auth'
import { sha256 } from 'hash.js'
import apiCustomer from '../../api/customer'
import apiAuth from '../../api/auth'

const initLoginAuthorizationBody = {
    email: '',
    password: ''
}

const Login = ({setUserInfo, setCardsFromUser, setMovementsFromUser}) => {

    const navigate = useNavigate()
    
    useEffect(() => {
        const userAlreadyLogged = localStorage.getItem('user')
        if (userAlreadyLogged){
            navigate("/")
        }
    })
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
                const result = await authApi.checkIfUserExists(loginAuthorizationBody)
                if (result) {
                    const userData = await apiCustomer.getCustomerInfo(loginAuthorizationBody.email)
                    setUserInfo(userData)

                    const userDataCards = await apiCustomer.getCustomerCards(userData.id)
                    setCardsFromUser(userDataCards)

                    const userDataMovements = await apiCustomer.getCustomerMovements(userData.id)
                    setMovementsFromUser(userDataMovements)
                    
                    const hashedPassword = sha256(loginAuthorizationBody.password)
                    localStorage.setItem("user", JSON.stringify({ email: loginAuthorizationBody.email, password: hashedPassword.digest('Hex')}))

                    const userRole = await apiAuth.checkIfUserIsAdmin(userData.id)

                    if (userRole === 0) {
                        localStorage.setItem('userRole', 0)
                        navigate('/my')
                    }
                    if (userRole === 1) {
                        localStorage.setItem('userRole', 1)
                        navigate('/admin')
                    }
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