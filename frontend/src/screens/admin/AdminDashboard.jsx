import React, { useEffect, useState } from 'react'
import apiAdmin from '../../api/admin'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import Customer from '../../components/customer/Customer'

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

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Box>
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
                <div>
                    <span onClick={openModal}><Customer customerData={customer}/></span>
                    {isOpen && (
                        <div className="boxEditCustomer">
                            <div className='editCustomer'>
                                {console.log(customer.first_name)}
                                <button onClick={closeModal}>cerrar</button>
                            </div>
                    </div>
                    )}
                </div>
            ))}
        </Box>
    )
}

export default AdminDashboard