import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { Alert, Box, Snackbar, useMediaQuery, useTheme } from '@mui/material'
import apiCustomer from '../../api/customer'
import themeHandler from '../../utils/theme'
import RequestCard from '../requestCard/ButtonRequestCard'

const CardsList = () => {

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'));

    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
    const [cardList, setCardList] = useState([])

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const cards = await apiCustomer.getCustomerCards(JSON.parse(localStorage.getItem("userInfo")).id)
                setCardList(cards)
            } catch (error) {
                setOpenErrorSnackbar(true)
            }
        }
        fetchCards()
    }, [])
    
    return (
        <Box display='flex' {... isPc ? {maxWidth: 500} : ''}>
            <RequestCard/>
            {
                cardList.length === 0 ? (
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
                        No tienes tarjetas
                    </Box>
                    ) : (
                    <>
                        {cardList && cardList.map((card) => (
                            <Card cardInfo={card} key={card.id} style={ {marginY: 1} } />
                        ))}
                    </>
                    )
            }
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se ha podido cargar las tarjetas
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default CardsList