import { Box, Paper, Stack, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Loan = (props) => {

    const theme = useTheme();
    const isPc = useMediaQuery(theme.breakpoints.up('sm'));

    const {content, style } = props
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
            <Paper sx={{margin: 1, padding: 2, backgroundColor: '#3590E4', ...style}}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        {(isPc ? content?.description : content?.customer.substring(0, 12) + '...') || <div>Data not found</div>}
                    </Box>
                    <Box color={setColor}>
                        {setStatusText || <div>Type</div>}
                    </Box>
                    <Box>
                        <Stack>
                            {content?.total + '€' || <div>?€</div>}
                        </Stack>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}

export default Loan