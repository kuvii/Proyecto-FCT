import React, { useState } from 'react'

// import Dashboard from '../../components/dashboard/Dashboard
import MainScreenNavbar from '../../components/main_screen_navbar/MainScreenNavbar';
import MainDrawer from '../../components/maindrawer/MainDrawer';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router';


const Main = () => {
    const [open, setOpen] = useState(false)

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    const handleOpen = () => {
        setOpen(!open)
    }

    const drawerWidth = '200px'

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }} >
        <MainScreenNavbar open={open} handleOpen={handleOpen} />
        <MainDrawer open={open} handleOpen={handleOpen} />
            <Box maxWidth={isPc ? `calc(100% - ${drawerWidth})` : '100%'}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Main