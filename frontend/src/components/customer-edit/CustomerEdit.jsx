import React from 'react'
import { Box, Paper, Stack, useMediaQuery, useTheme } from '@mui/material'

const CustomerEdit = (props) => {
    const {content, style } = props

    const theme = useTheme();
    const isPc = useMediaQuery(theme.breakpoints.up('sm'));

    const { name, email } = content
    const shortName = name.substring(0, 7).replace(' ', '') + '...'
    const shortEmail = email.substring(0, 7).replace(' ', '') + '...' 

    return (
        <Box>
            <Paper sx={{margin: 1, padding: 2, backgroundColor: '#3590E4', ...style}}>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                >
                    <Box>
                        {(isPc
                            ? name
                            : (
                                name.length > 10 
                                ? shortName
                                : name
                                )
                        ) || <div>Data not found</div>}
                    </Box>
                    <Box>
                        <Stack>
                        {(isPc
                            ? email
                            : (
                                email.length > 10 
                                ? shortEmail
                                : email
                                )
                        ) || <div>Data not found</div>}
                        </Stack>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}

export default CustomerEdit