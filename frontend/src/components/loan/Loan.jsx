import { Box, IconButton, Paper, Stack, } from '@mui/material'
import React, { useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import themeHandler from '../../utils/theme';
import { ColorModeContext } from '../../app/KingsbankApp';

const Loan = (props) => {


    const { mode } = useContext(ColorModeContext);


    const {content, style, handleUpdate } = props
    let setColor = ''
    let setStatusText = ''
    switch (content?.status){
        case 'accepted':
            setColor = '#106036'
            setStatusText ='Aprovado'
            break
        case 'pending':
            setColor = '#FFFF00'
            setStatusText = 'Esperando'
            break
        case 'canceled':
            setColor = '#FF5F5F'
            setStatusText = 'Cancelada'
            break
        default:
            setColor = '#ffffff'
            setStatusText = 'type'
            break
    }

    return (
        <Box>
            <Paper sx={{margin: 1, padding: 2, backgroundColor: mode === 'dark' ? themeHandler.DARK_MODE.secondary_color : themeHandler.LIGHT_MODE.complement_color, ...style}}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        {content?.description}
                    </Box>
                    <Box color={setColor}>
                        {setStatusText || <div>Type</div>}
                    </Box>
                    <Box>
                        <Stack>
                            {content?.total + '€' || <div>?€</div>}
                        </Stack>
                    </Box>
                    <Box>
                        <IconButton onClick={() => handleUpdate(content.id, content.accountId, 'accepted', content.total)}>
                            <CheckCircleIcon/>
                        </IconButton>
                        <IconButton onClick={() => handleUpdate(content.id, content.accountId, 'canceled', content.total)}>
                            <CancelIcon/>
                        </IconButton>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}

export default Loan