import React, { useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import { Alert, Box, IconButton, Snackbar, Stack } from '@mui/material'
import Card from '../../components/card/Card'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const CardsPage = () => {
    const [cardList, setCardList] = useState([])
    
    useEffect(() => {
        const loadCardsList = async () => {
            try {
                const cards = await apiAdmin.getCardsList()
                setCardList(cards)
            } catch (error) {
                console.error(error)
            }
        }
        loadCardsList()
    }, [])

    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)

    const handleUpdate = async (id, status) => {
        try {
            await apiAdmin.updateCardStatus(id, status)
            setCardList(cardList.filter((card) => card.id !== id))
        } catch (error) {
            setOpenErrorSnackbar(true)
        }
    }

    return (
        <Box>{cardList && cardList.map((card) => (
            <Stack direction='row' alignItems='center' justifyContent='center'>
                <Card
                cardInfo={card} 
                openErrorSnackbar={openErrorSnackbar} 
                setOpenErrorSnackbar={setOpenErrorSnackbar} 
                handleUpdate={handleUpdate} 
                />
                <IconButton sx={{maxHeight: 40}} onClick={() => handleUpdate(card.id, 'accepted')}>
                    <CheckCircleIcon/>
                </IconButton>
                <IconButton sx={{maxHeight: 40}} onClick={() => handleUpdate(card.id, 'canceled')}>
                    <CancelIcon/>
                </IconButton>
            </Stack>
        ))}
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se pudo modificar
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default CardsPage