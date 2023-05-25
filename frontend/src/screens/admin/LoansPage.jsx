import React, { useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import Loan from '../../components/loan/Loan'
import { Alert, Box, Snackbar } from '@mui/material'

const LoansPage = () => {
    const [loanList, setLoanList] = useState([])
    
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
        <Box>{loanList && loanList.map((loan) => (
            <Loan 
            content={loan} 
            openErrorSnackbar={openErrorSnackbar} 
            setOpenErrorSnackbar={setOpenErrorSnackbar} 
            handleUpdate={handleUpdate} 
            />
        ))}
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se pudo modificar
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default LoansPage