import React, { useContext, useEffect, useState } from "react";
import { AppBar, IconButton, Stack, ThemeProvider, Typography, createTheme, useMediaQuery, useTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/KingsBank_BlancoVerde1.png'
import logo_dark from '../../assets/KingsBank_BlancoNegro.png'
import { useLocation } from "react-router-dom";
import { ColorModeContext } from "../../app/KingsbankApp";
import themeHandler from "../../utils/theme";

const MainScreenNavbar = ({open, handleOpen}) => {
    const drawerWidth = '240px'
    
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    const { mode } = useContext(ColorModeContext)

    const flexibleWidth = isPc ? (`calc(100% - ${drawerWidth})`) : '100%'

    const location = useLocation()

    const [currentPageHeader, setCurrentPageHeader] = useState('Welcome Back')

    useEffect(() => {
        const options = localStorage.getItem('navbar_options')
        setCurrentPageHeader(JSON.parse(options)?.header || 'Inicio')
    }, [location])

    const customTheme = createTheme({
        palette: {
            background: {
                paper: mode === 'dark' ? themeHandler.DARK_MODE.secondary_color : themeHandler.LIGHT_MODE.primary_color,
            },
        },
    })

    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position='static' 
            sx={{ backgroundColor: mode === 'dark' ? '#000000' : '#209d5c',
                boxShadow: 'none', 
                width: flexibleWidth, 
                mr: `${drawerWidth}px`}} 
                open={open} >
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <img src={mode === 'dark' ? logo_dark : logo} alt='logoImage' height={isPc ? 100 : 70} width={isPc ? 100 : 70} />
                    <Typography
                    fontFamily='Space Mono'
                    fontSize={isPc ? 42 : 24}
                    >
                        {currentPageHeader}
                    </Typography>
                    {isPc ? (
                        <div />
                    ): <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                    }
                </Stack>
            </AppBar>
        </ThemeProvider>
    )
}

export default MainScreenNavbar