import React, { useEffect, useState } from 'react'
import Movement from '../movement/Movement'
import apiCustomer from '../../api/customer'
import { Alert, Box, Snackbar, useTheme } from '@mui/material'
import themeHandler from '../../utils/theme'

const MovementsList = () => {

    const theme = useTheme()

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
    }, [])
    
    return (
        <div>
            {
                movementList.length === 0 ? (
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
                    <>
                    {movementList && movementList.map((move) => (
                        <Movement content={move} key={move.id} style={ {marginY: 1} } />
                    ))}
                    </>
                )
            }
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se ha podido cargar los movimientos
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MovementsList