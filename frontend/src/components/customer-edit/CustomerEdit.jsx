import React from 'react'
import { Box, Paper, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const CustomerEdit = (props) => {
    const {content, style } = props

    const theme = useTheme()
    const navigate = useNavigate()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'));

    const { id, name, email } = content
    const shortName = name.substring(0, 7).replace(' ', '') + '...'
    const shortEmail = email.substring(0, 7).replace(' ', '') + '...' 

    const handleClick = (id) => {
        navigate('/admin/customer/' + id, {state: {content}})
    }

    return (
        <Box onClick={() => handleClick(id)} style={{cursor: 'pointer'}}>
            <Paper sx={{margin: 1, padding: 2, backgroundColor: (theme.palette.mode === 'light' ? '#3590E4' : '#000000'), color: '#ffffff', ...style}}>
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