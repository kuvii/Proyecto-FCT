import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import imagenUsuario1 from '../../assets/usuario1.png'

import React, { useState } from 'react';
import { AppBar, Drawer, Grid, IconButton, List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, useTheme } from '@mui/system';

import Card from '../card/Card'

import Movement from '../movement/Movement';

const drawerWidth = '240px'

const HomePage = () => {

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const LinkList = () => {
        return (
            <List>
                {["Inicio", "Movimientos", "Tarjetas", "Prestamos"].map((text, index) => {
                    const routes = ["/my", "/my/movements", "/my/cards", "/my/loans"]
                    return (
                        <ListItem key={text} disablePadding sx={ { marginY: 5, justifyContent: 'center'} } >
                            <Link to={routes[index]} className='userLinks' >{text}</Link>
                        </ListItem>
                    )
                })
                }
            </List>
        )
    }

    const Navbar = () => {
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

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }} >
            <Navbar />
            <Drawer variant={isPc ? 'permanent' : 'persistent'} open={open} anchor='right' 
            PaperProps={ { 
                    style: { 
                        borderTopLeftRadius: 20, 
                        borderBottomLeftRadius: 20, 
                        backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#000000' ,
                        minWidth: isPc ? 200 : 100,
                        flex: 1
                    }
                } }>
                    {isPc 
                        ? ''
                        : (
                        <IconButton sx={ {position: 'absolute'} } onClick={handleOpen}>
                            <ChevronRightIcon/>
                        </IconButton>
                        ) 
                        
                    }
                    <Box alignItems='center' justifyContent='center'>
                        <img src={imagenUsuario1} alt="usuario1" className='imgUsuario1' />
                    </Box>
                    <span className='titleUser'>User</span>
                    <LinkList />
            </Drawer>
            <Box component='div' sx={{ overflowY: 'auto', marginRight: (isPc ? '205px' : null) }}>
                <Grid 
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} sm={4} md={6}>
                        <Box margin={1} sx={{backgroundColor: 'red'}}>
                            <Card />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <Box sx={{backgroundColor: 'red'}}>
                            <Movement />
                            <Movement />
                            <Movement />
                        </Box>
                    </Grid>
                </Grid>
                
            </Box>
        </Box>
    )
}

export default HomePage