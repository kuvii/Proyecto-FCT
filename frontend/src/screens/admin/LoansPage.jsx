import React, { useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import Loan from '../../components/loan/Loan'
import { Box } from '@mui/material'

const LoansPage = () => {
    const [loanList, setLoanList] = useState([])
    
    useEffect(() => {
        const loadLoanList = async () => {
            try {
                const loans = await apiAdmin.getLoanList()
                console.log(loans)
                setLoanList(loans)
            } catch (error) {
                console.error(error)
            }
        }
        loadLoanList()
    }, [])

    return (
        <Box>{loanList && loanList.map((loan) => (
            <Loan content={loan} />
        ))}
        </Box>
    )
}

export default LoansPage