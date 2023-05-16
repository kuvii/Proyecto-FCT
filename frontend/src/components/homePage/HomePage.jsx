import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import imagenUsuario1 from '../../assets/usuario1.png'

import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import Hidden from '@mui/material/Hidden';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ChevronRightOutlined } from '@mui/icons-material';

const HomePage = (props) => {
    const { children } = props

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    return (

        <div>
            <Hidden mdUp>
                <div className='dropDown'>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={handleDrawerOpen}
                        className='imageSize'
                    />
                </div>
            
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={open}
                >

                    <div className='closeDrawer'>
                        <ChevronRightOutlined onClick={handleDrawerClose}/>
                    </div>
                
                    <div className='generalContainer1'>
                        <div className='containerPage'>
                            <nav className="navbar navbar-expand-lg mainContainer">
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <img src={imagenLogo1} className='imagenKingBank' alt='Imagen del Logo'/>
                                    <div className="header">
                                        <h2 className='title'>Welcome back</h2>
                                    </div>
                                </div>
                            </nav>
                            
                            {children}
                            
                        </div>
                        <div className='containerPage2'>
                            <img src={imagenUsuario1} alt="usuario1" className='imgUsuario1' />
                            <span className='titleUser'>User</span>
                            <div className='containerUserLinks'>
                                <a href='/Inicio' className='userLinks'>Inicio</a>
                                <a href='/' className='userLinks'>Movimientos</a>
                                <a href='/' className='userLinks'>Tarjetas</a>
                                <a href='/' className='userLinks'>Préstamos</a>
                            </div>
                        </div>
                    </div>

                </Drawer>
            </Hidden>

            <div className='generalContainer2'>
                <div className='containerPage'>
                    <nav className="navbar navbar-expand-lg contenedorNavbar mainContainer">
                        <div className="collapse navbar-collapse headerContainer" id="navbarTogglerDemo01">
                            <img src={imagenLogo1} className='imagenKingBank' alt='Imagen del Logo'/>
                            <div className="header">
                                <h2 className='title'>Welcome back</h2>
                            </div>
                        </div>
                    </nav>
                    
                    {children}
                    
                </div>
                <div className='containerPage2'>
                    <img src={imagenUsuario1} alt="usuario1" className='imgUsuario1' />
                    <span className='titleUser'>User</span>
                    <div className='containerUserLinks'>
                        <a href='/Inicio' className='userLinks'>Inicio</a>
                        <a href='/' className='userLinks'>Movimientos</a>
                        <a href='/' className='userLinks'>Tarjetas</a>
                        <a href='/' className='userLinks'>Préstamos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage