import React, { useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import Customer from '../customer/Customer'

const AdminDashboard = () => {

    const [customersList, setCustomersList] = useState([])

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await apiAdmin.getAllCustomer()
                setCustomersList(data)
            } catch (error) {
                console.error(error)
            }
        }

        loadUsers()
    }, [])

    return (
        <Box>
            <Box marginX={2}>
                <Stack spacing={isPc ? 18 : 8} direction='row'>
                    <Box>
                        Nombre
                    </Box>
                    <Box>
                        Apellidos
                    </Box>
                    {isPc ? (
                        <>

                        <Box>
                            Email
                        </Box>
                        <Box>
                            Iban
                        </Box>
                        </>
                    ): null}
                </Stack>
            </Box>
            {customersList && customersList.map((customer) => (
                <Customer customerData={customer}/>
            ))}
        </Box>
    )
}

export default AdminDashboard