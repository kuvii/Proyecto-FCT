import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, Snackbar, useTheme } from '@mui/material'
import themeHandler from '../../utils/theme'
import LoansUser from '../loansUser/LoansUser'
import RequestLoanModal from '../request-loan/RequestLoanModal'
import apiCustomer from '../../api/customer'

const LoanList = () => {

    const theme = useTheme()

    const [loansList, setLoanList] = useState([])
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const user = await JSON.parse(localStorage.getItem("userInfo"))
                const loans = await apiCustomer.getCustomerLoans(user.id)
                setLoanList(loans)
            } catch (error) {
                setOpenErrorSnackbar(true)
            }
        }
        fetchLoans()
    }, [])

    return (
        <div>
            {
                loansList.length === 0 ? (
                    <Box>
                        <div className='btnRequestLoan'>
                            <Button variant='contained' size='small' onClick={openModal}>Nuevo</Button>
                        </div>
                        {
                            isOpen && <RequestLoanModal isOpen={isOpen} closeModal={closeModal}/>
                        }

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
                            No hay prestamos
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <div className='btnRequestLoan'>
                            <Button variant='contained' size='small' onClick={openModal}>Nuevo</Button>
                        </div>

                        {
                            isOpen && <RequestLoanModal isOpen={isOpen} closeModal={closeModal}/>
                        }
                        
                        {loansList && loansList.map((loan) => (
                            <LoansUser content={loan} key={loan.id} style={ {marginY: 1} } />
                        ))}
                    </Box>
                )
            }
            <Snackbar open={openErrorSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'left'}} autoHideDuration={3000} onClose={() => setOpenErrorSnackbar(false)}>
                <Alert variant='filled' onClose={() => setOpenErrorSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                    No se ha podido cargar los prestamos
                </Alert>
            </Snackbar>
        </div>
    )
}

export default LoanList