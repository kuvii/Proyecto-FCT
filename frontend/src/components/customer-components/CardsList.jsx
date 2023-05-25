import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { Alert, Box, Snackbar } from '@mui/material'
import apiCustomer from '../../api/customer'

const CardsList = () => {

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
        <Box marginX={1}>
            {cardList && cardList.map((card) => (
                <Card cardInfo={card} key={card.id} style={ {marginY: 1} } />
            ))}
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se ha podido cargar las tarjetas
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default CardsList