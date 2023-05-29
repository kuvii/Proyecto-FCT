import React, { useContext, useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import Loan from '../../components/loan/Loan'
import { Alert, Box, Snackbar } from '@mui/material'
import { ColorModeContext } from '../../app/KingsbankApp'
import themeHandler from '../../utils/theme'

const LoansPage = () => {
    const [loanList, setLoanList] = useState([])
    const { mode } = useContext(ColorModeContext);
    
    useEffect(() => {
        const loadLoanList = async () => {
            try {
                const loans = await apiAdmin.getLoanList()
                setLoanList(loans)
            } catch (error) {
                console.error(error)
            }
        }
        loadLoanList()
    }, [])

    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)

    const handleUpdate = async (id, status) => {
        try {
            await apiAdmin.updateLoanRequestStatus(id, status)
            setLoanList(loanList.filter((loan) => loan.id !== id))
        } catch (error) {
            setOpenErrorSnackbar(true)
        }
    }

    return (
        <Box>
                {
                    loanList.length === 0 ? (
                        <Box sx={{backgroundColor: mode === 'light' ? 
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
                        No hay solicitudes
                    </Box>
                    ) : (
                    <>
                        {loanList && loanList.map((loan) => (
                            <Loan 
                            content={loan} 
                            openErrorSnackbar={openErrorSnackbar} 
                            setOpenErrorSnackbar={setOpenErrorSnackbar} 
                            handleUpdate={handleUpdate} 
                            />
                        ))}
                    </>
                    )
                }
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se pudo modificar
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default LoansPage