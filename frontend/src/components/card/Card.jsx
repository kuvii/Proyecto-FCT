import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import logo from '../../assets/KingsBank_BlancoVerde1.png'
import WifiPasswordRoundedIcon from '@mui/icons-material/WifiPasswordRounded';
import PixRoundedIcon from '@mui/icons-material/PixRounded';

const Card = (props) => {

    const {cardInfo, style} = props

    return (
        <Box>
            <Paper sx={{padding: 1, margin: 1, ...style}}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                >
                    Kingsbank
                    <img alt='logo' src={logo} style={{width: 20, height: 20}}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                paddingTop={1}
                marginY={1}
                >
                    <WifiPasswordRoundedIcon />
                    <PixRoundedIcon />
                </Stack>
                <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={8}
                >
                    {<Box>{cardInfo?.number}</Box> || <div>1234123412341234</div>}
                    {<Box>{cardInfo?.type}</Box> || <div>Type</div>}
                </Stack>
                <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={5}
                >
                    Cad: {<Box>{cardInfo?.date_expiration}</Box> || <div>xx/xx</div>}
                    {<Box>{(cardInfo?.holder_name.substring(0, 21))}</Box> || <div>User Name</div>}
                </Stack>
            </Paper>
        </Box>
    )
}

export default Card