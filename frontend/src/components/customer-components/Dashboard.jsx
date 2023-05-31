import { Box, Grid, Skeleton, Typography, useMediaQuery, useTheme, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import Movement from '../movement/Movement'
import themeHandler from '../../utils/theme'
import apiCustomer from '../../api/customer'

const initUserInfo = {
    id: null,
    first_name: '',
    last_name: '',
    birthdate: '',
    password: '',
    email: '',
    dni: '',
    phone: '',
    postal_code: '',
    address: '',
    account: {
        id: null,
        role: 0,
        money: '',
        iban: '',
        customerId: null,
        cards: [],
        loans: [],
        movements: []
    }
}


const Dashboard = () => {

    const boxHeightPc = '400px'
    const boxHeightPhone = '300px'

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    const { LIGHT_MODE, DARK_MODE } = themeHandler

    const [userInfo, setUserInfo] = useState(initUserInfo)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                const loginInfo = localStorage.getItem("userLogged")
                const user = await apiCustomer.getCustomerInfo(loginInfo)
                setUserInfo(user)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        loadUserInfo()
    }, [])

    return (
        <Box display='grid' alignItems='center' sx={{ overflowY: 'auto' }}>
            <Box 
            justifyContent='center' 
            display='flex'
            margin={1}
            >
                {
                    loading ? (
                        <Skeleton 
                        variant="rectangular" 
                        width={isPc ? 500 : 300} 
                        height={100} 
                        sx={{ borderRadius: 5}}
                        />
                    ) : (
                        <Box sx={{
                            borderRadius: 5,
                            backgroundColor: theme.palette.mode === 'light' ? 
                                LIGHT_MODE.secondary_color : 
                                DARK_MODE.secondary_color,
                            flex: 1,
                            maxWidth: isPc ? 500 : 300,
                            height: 100
                        }}
                        display='grid'
                        alignItems='center'
                        >
                            <Typography
                            fontSize={40}
                            >
                                {userInfo.account.money}€
                            </Typography>
                        </Box>
                    )
                }
            </Box>
            <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid item xs={4} sm={4} md={6}>
                    {
                        loading ? (
                            <Skeleton variant="rectangular" width='95%' height={isPc ? boxHeightPc : boxHeightPhone} />
                        ) : (
                            <>
                            {
                                userInfo.account.cards.length === 0 ? (
                                    <Box sx={{backgroundColor: theme.palette.mode === 'light' ? 
                                            themeHandler.LIGHT_MODE.secondary_color : 
                                            themeHandler.DARK_MODE.secondary_color,
                                            }}
                                        height={50}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        borderRadius={2}
                                        margin={1}
                                        >
                                        No hay tarjetas
                                    </Box>
                                ) : (
                                    <Box height={isPc ? boxHeightPc : boxHeightPhone} sx={{ overflowY: 'auto'}}>
                                        {userInfo.account.cards && userInfo.account.cards.map((card) => (
                                            <Card cardInfo={card} key={card.id} style={ {marginY: 1} } />
                                        ))}
                                    </Box>
                                )
                            }
                            </>
                        )
                    }
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                    {
                        loading ? (
                            <Skeleton variant="rectangular" width='95%' height={isPc ? boxHeightPc : boxHeightPhone} />
                        ) : (
                            <>
                            {
                                userInfo.account.movements.length === 0 ? (
                                    <Box sx={{backgroundColor: theme.palette.mode === 'light' ? 
                                            themeHandler.LIGHT_MODE.secondary_color : 
                                            themeHandler.DARK_MODE.secondary_color,
                                            }}
                                        height={50}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        borderRadius={2}
                                        margin={1}
                                        >
                                        No hay movimientos
                                    </Box>
                                ) : (
                                    <Box height={isPc ? boxHeightPc : boxHeightPhone} sx={{ overflowY: 'auto'}}>
                                        {userInfo.account.movements && userInfo.account.movements.map((move) => (
                                            <Movement content={move} key={move.id} style={ {marginY: 1} } />
                                        ))}
                                    </Box>
                                )
                            }
                            </>
                        )
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard