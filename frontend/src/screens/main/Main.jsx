import React, { useEffect, useState } from 'react'
import imagenUsuario1 from '../../assets/usuario1.png'
import { Box, Drawer, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import MainScreenNavbar from '../../components/main_screen_navbar/MainScreenNavbar'

import LinkList from '../../components/link_list/LinkList'
import Movement from '../../components/movement/Movement';
import Card from '../../components/card/Card';
import { margin } from '@mui/system';

const Main = (props) => {
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const MainDrawer = () => {
        return (
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
                    <span className='titleUser'>{props.userInfo.first_name}</span>
                    <LinkList />
            </Drawer>
        )
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }} >
            <MainScreenNavbar open={open} handleOpen={handleOpen} />
            <MainDrawer />
            <Box component='div' sx={{ overflowY: 'auto', marginRight: (isPc ? '205px' : null) }}>
                <Grid
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} sm={4} md={6}>
                        <Box margin={1} height='400px' sx={{ overflowY: 'auto'}}>
                            {props.userInfo.account.cards && props.userInfo.account.cards.map((card) => (
                                <Card cardInfo={card} key={card.id} style={ {marginY: 1} } />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <Box height='400px' sx={{ overflowY: 'auto'}}>
                            {props.userInfo.account.movements && props.userInfo.account.movements.map((move) => (
                                <Movement content={move} key={move.id} style={ {marginY: 1} } />
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                
            </Box>
        </Box>
    )
}

export default Main