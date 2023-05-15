import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import imagenUsuario1 from '../../assets/usuario1.png'

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import Hidden from '@mui/material/Hidden';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const HomePage = (props) => {
    const { children } = props

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    const prueba = () => {
        return (
            <div className='generalContainer'>
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
        )
    }

    return (

        <div>
            <Hidden mdUp>
                <div className='prueba'>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={handleDrawerOpen}
                    />
                </div>
            {/*<Toolbar><button onClick={handleDrawerOpen}>abrir</button></Toolbar> */}
            <Drawer
                variant="persistent"
                anchor="right"
                open={open} // Cambia el estado para controlar la apertura y cierre del Drawer
            >
                <div>
                    <Button onClick={handleDrawerClose}>Cerrar Drawer</Button>
                </div>
            
                {prueba()}
            </Drawer>
            </Hidden>

            {prueba()}
        </div>
    )
}

export default HomePage