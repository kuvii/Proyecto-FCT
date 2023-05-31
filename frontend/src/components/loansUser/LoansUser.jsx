import { Box, Paper, Stack, } from '@mui/material'
import themeHandler from '../../utils/theme'
import { useContext } from 'react'
import { ColorModeContext } from '../../app/KingsbankApp'

const LoansUser = (props) => {

    const { content, style } = props
    const {mode} = useContext(ColorModeContext)
    let setColor = ''
    let setStatusText = ''
    switch (content?.status){
        case 'accepted':
            setColor = '#106036'
            setStatusText ='Aprovado'
            break
        case 'pending':
            setColor = mode === 'light' ? '#3590E4' : '#FFFF00'
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
            <Paper sx={{margin: 1, padding: 2, backgroundColor: mode === 'dark' ? themeHandler.DARK_MODE.secondary_color : themeHandler.LIGHT_MODE.secondary_color, ...style}}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        {content?.description}
                    </Box>
                    <Box color={setColor}>
                        {setStatusText}
                    </Box>
                    <Box>
                        {content?.total}€
                    </Box>
                </Stack>
                <Stack>
                </Stack>
            </Paper>
        </Box>
    )
}

export default LoansUser