import { Box, IconButton, Paper, Stack, useTheme, useMediaQuery } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import EditCustomer from '../editCustomer/EditCustomer';


const Customer = (props) => {

    const { customerData } = props

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Box>
            <Paper sx={{margin: 1, padding: 2}}>
                <Stack direction='row'>
                    <Box flex={1}>
                        {customerData?.first_name}
                    </Box>
                    <Box flex={1}>
                        {customerData?.last_name}
                    </Box>
                    {isPc ? (
                        <>
                            <Box flex={1}>
                                {customerData?.email}
                            </Box>
                            <Box flex={1}>
                                {customerData?.account.iban}
                            </Box>
                        </>
                    ): null}
                    <IconButton sx={{ height: 20, width: 20, flex: 1}} onClick={openModal}>
                        <InfoIcon />
                    </IconButton>
                </Stack>
                {showModal && (
                <div className="modal-backdrop">
                    <EditCustomer closeModal={closeModal} customerData={customerData}/>
                </div>
                )}
            </Paper>
        </Box>
    )
}

export default Customer