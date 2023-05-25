import React, { useEffect, useState } from 'react'
import Movement from '../movement/Movement'
import apiCustomer from '../../api/customer'
import { Alert, Snackbar } from '@mui/material'

const MovementsList = () => {

    const [movementList, setMovementList] = useState([])
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)

    useEffect(() => {
        const fetchMovements = async () => {
            try {
                const movements = await apiCustomer.getCustomerMovements(JSON.parse(localStorage.getItem("userInfo")).id)
                setMovementList(movements)
            } catch (error) {
                setOpenErrorSnackbar(true)
            }
        }
        fetchMovements()
    })
    
    return (
        <div>
            {movementList && movementList.map((move) => (
                <Movement content={move} key={move.id} style={ {marginY: 1} } />
            ))}
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se ha podido cargar los movimientos
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MovementsList