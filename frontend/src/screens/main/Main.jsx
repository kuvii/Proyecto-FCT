import React, { useState } from 'react'

import Dashboard from '../../components/dashboard/Dashboard';
import MainScreenNavbar from '../../components/main_screen_navbar/MainScreenNavbar';
import MainDrawer from '../../components/maindrawer/MainDrawer';
import { Box } from '@mui/material';


const Main = ({children, userInfo}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }} >
        <MainScreenNavbar open={open} handleOpen={handleOpen} />
        <MainDrawer open={open} handleOpen={handleOpen} userInfo={userInfo} />
            <Dashboard userInfo={userInfo} />
            {children}
        </Box>
    )
}

export default Main