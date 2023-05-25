import { Box, Button } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = ({handleLogout}) => {
    return (
        <Box>
            <Button variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogout} >
                Logout
            </Button>
        </Box>
    )
}

export default LogoutButton