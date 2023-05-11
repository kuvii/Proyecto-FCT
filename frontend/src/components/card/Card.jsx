import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import logo from '../../assets/KingsBank_BlancoVerde1.png'
import WifiPasswordRoundedIcon from '@mui/icons-material/WifiPasswordRounded';
import PixRoundedIcon from '@mui/icons-material/PixRounded';

const Card = (props) => {
    const styles = {
        color: '#209d5c',
        backgroundColor: '#000',
        width: 350,
        padding: 1
    }

    return (
        <Box>
            <Paper sx={styles}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                >
                    Kingsbank
                    <img alt='logo' src={logo} style={{width: 20, height: 20}}/>
                </Stack>
            </Paper>
        </Box>
    )
}

export default Card