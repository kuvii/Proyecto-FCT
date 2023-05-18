import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Card from '../card/Card'
import Movement from '../movement/Movement'

const Dashboard = ({ userInfo }) => {
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <Box component='div' sx={{ overflowY: 'auto' }}>
        <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        >
            <Grid item xs={4} sm={4} md={6}>
                <Box margin={1} height='400px' sx={{ overflowY: 'auto'}}>
                    {userInfo.account.cards && userInfo.account.cards.map((card) => (
                        <Card cardInfo={card} key={card.id} style={ {marginY: 1} } />
                    ))}
                </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={6}>
                <Box height='400px' sx={{ overflowY: 'auto'}}>
                    {userInfo.account.movements && userInfo.account.movements.map((move) => (
                        <Movement content={move} key={move.id} style={ {marginY: 1} } />
                    ))}
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}

export default Dashboard