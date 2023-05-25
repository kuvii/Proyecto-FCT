import React from 'react'
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import imagenUsuario1 from '../../assets/usuario1.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinkList from '../link_list/LinkList';
import AdminLinkList from '../admin_link_list/AdminLinkList';
import LogoutButton from '../logout-button/LogoutButton';
import { useNavigate } from 'react-router-dom';


const MainDrawer = ({open, handleOpen, userInfo}) => {
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            localStorage.removeItem("userRole")
            localStorage.removeItem("navbar_options")
            localStorage.removeItem("user")
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Drawer variant={isPc ? 'permanent' : 'persistent'} open={open} anchor='right' 
        PaperProps={{ 
                style: { 
                    borderTopLeftRadius: 20, 
                    borderBottomLeftRadius: 20, 
                    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#000000' ,
                    minWidth: isPc ? 200 : 100,
                    flex: 1
                }
            }}>
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
                <Typography 
                alignItems='center' 
                fontSize={isPc ? '40px' : '30px'} 
                fontFamily='Space Mono' 
                fontWeight='bold' >
                    {userInfo.first_name}
                </Typography>
                {userInfo.account.role === 0 ? (
                    <LinkList />
                    ) :
                    <AdminLinkList />
                }
                <LogoutButton handleLogout={handleLogout} />
        </Drawer>
    )
}

export default MainDrawer