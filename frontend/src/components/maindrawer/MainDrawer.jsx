import React from 'react'
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material'
import imagenUsuario1 from '../../assets/usuario1.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinkList from '../link_list/LinkList';


const MainDrawer = ({open, handleOpen, userInfo}) => {
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))
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
                <span className='titleUser'>{userInfo.first_name}</span>
                <LinkList />
        </Drawer>
    )
}

export default MainDrawer