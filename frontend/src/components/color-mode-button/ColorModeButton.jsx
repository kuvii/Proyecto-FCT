import { IconButton, } from '@mui/material';
import React, { useContext, } from 'react'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { ColorModeContext } from '../../app/KingsbankApp';

const ColorModeButton = () => {

    const { mode, toggleColorMode } = useContext(ColorModeContext);

    return (
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}
export default ColorModeButton