import React from "react";
import { AppBar, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'

const MainScreenNavbar = ({open, handleOpen}) => {
    const drawerWidth = '240px'
    
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    const flexibleWidth = isPc ? (`calc(100% - ${drawerWidth})`) : '100%'
    return (
        <AppBar position='static' sx={{ backgroundColor: '#209d5c', boxShadow: 'none', width: flexibleWidth, mr: `${drawerWidth}px`}} open={open} >
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <img src={imagenLogo1} alt='logoImage' height={isPc ? 100 : 70} width={isPc ? 100 : 70} />
                <Typography
                fontFamily='Space Mono'
                fontSize={isPc ? 42 : 24}
                >
                    Welcome Back
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
    )
}

export default MainScreenNavbar