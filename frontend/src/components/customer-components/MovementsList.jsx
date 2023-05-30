import React, { useEffect, useState } from 'react'
import Movement from '../movement/Movement'
import apiCustomer from '../../api/customer'
import { Alert, Box, Button, Modal, Snackbar, useTheme } from '@mui/material'
import themeHandler from '../../utils/theme'
import TransactionMenu from '../transaction-menu/TransactionMenu'

const MovementsList = () => {

    const theme = useTheme()

    const [movementList, setMovementList] = useState([])
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

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
                    <Box>
                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            Nueva Transaccion
                        </Button>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
                            <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                                maxWidth: 400,
                                outline: 'none',
                            }}
                            >
                            <TransactionMenu onClose={handleClose} />
                            </Box>
                        </Modal>
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
                    </Box>
                ) : (
                    <Box>
                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            Nueva Transaccion
                        </Button>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
                            <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                                maxWidth: 400,
                                outline: 'none',
                            }}
                            >
                            <TransactionMenu onClose={handleClose} />
                            </Box>
                        </Modal>
                    {movementList && movementList.map((move) => (
                        <Movement content={move} key={move.id} style={ {marginY: 1} } />
                    ))}
                    </Box>
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