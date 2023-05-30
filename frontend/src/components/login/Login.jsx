import { useContext, useEffect, useState } from 'react'
import { Col, Form, FormGroup, Row, Button } from 'reactstrap'
import { Alert, Snackbar, Stack, TextField, } from '@mui/material'
import { useNavigate } from 'react-router'
import authApi from '../../api/auth'
import apiAuth from '../../api/auth'
import apiCustomer from '../../api/customer'
import { ColorModeContext } from '../../app/KingsbankApp'
import ColorModeButton from '../color-mode-button/ColorModeButton'

const initLoginAuthorizationBody = {
    email: '',
    password: ''
}

const Login = () => {

    const navigate = useNavigate()

    const { mode } = useContext(ColorModeContext)
    
    useEffect(() => {
        const userAlreadyLogged = localStorage.getItem('userInfo')
        if (userAlreadyLogged){
            navigate("/")
        }
    }, [])
    const [loginAuthorizationBody, setLoginAuthorizationBody] = useState(initLoginAuthorizationBody)
    const [emptyField, setEmptyField] = useState('')
    const [errorText, setErrorText] = useState({
        email: '',
        password: ''
    })
    const [openSnackbar, setOpenSnackbar] = useState(false)

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
                if (result === false) {
                    setOpenSnackbar(true)
                }

                const userRole = await apiAuth.checkIfUserIsAdmin(loginAuthorizationBody.email)
                const userData = await apiCustomer.getCustomerInfo(loginAuthorizationBody.email)
                
                localStorage.setItem('userLogged', loginAuthorizationBody.email)
                localStorage.setItem('userInfo', JSON.stringify({id: userData.id, first_name: userData.first_name, last_name: userData.last_name, role: userData.account.role}))

                if (userRole.account.role === 0) {
                    navigate('/my')
                }
                if (userRole.account.role === 1) {
                    navigate('/admin')
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
                    <Button type="submit" color={mode === 'dark' ? 'success' : 'dark' }>
                        Login
                    </Button>
                    <ColorModeButton/>
                </Col>
                </Stack>
            </Row>
            <Snackbar open={openSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    Este usuario no existe
                </Alert>
            </Snackbar>
        </Form>
    )
}

export default Login