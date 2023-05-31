import { Box, IconButton, Paper, Stack, useTheme, useMediaQuery } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { useContext, useState } from 'react';
import EditCustomer from '../editCustomer/EditCustomer';
import themeHandler from '../../utils/theme';
import { ColorModeContext } from '../../app/KingsbankApp';


const Customer = (props) => {

    const { customerData } = props
    const { mode } = useContext(ColorModeContext)

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
            <Paper sx={{margin: 1, padding: 2, backgroundColor: mode === 'dark' ? themeHandler.DARK_MODE.secondary_color : themeHandler.LIGHT_MODE.secondary_color}}>
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