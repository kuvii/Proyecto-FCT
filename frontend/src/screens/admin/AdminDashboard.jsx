import React, { useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import Customer from '../../components/customer/Customer'
import ButtonCreateUser from '../../components/buttonCreateUser/ButtonCreateUser'

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
            <ButtonCreateUser/>
            <Box marginX={2}>
                <Stack direction='row'>
                    <Box flex={1}>
                        Nombre
                    </Box>
                    <Box flex={1}>
                        Apellidos
                    </Box>
                    {isPc ? (
                        <>
                        <Box flex={1}>
                            Email
                        </Box>
                        <Box flex={1}>
                            Iban
                        </Box>
                        </>
                    ): null}
                    <Box flex={1}>
                        Info
                    </Box>
                </Stack>
            </Box>
            {customersList && customersList.map((customer) => (
                <div key={customer.id}>
                    <span><Customer customerData={customer}/></span>
                </div>
            ))}
        </Box>
    )
}

export default AdminDashboard