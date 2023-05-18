import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Movement = (props) => {
    const { content, style } = props
    return (
        <Box>
            <Paper sx={{margin: 1, padding: 2, ...style}}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        {content?.description || <div>Message not found</div>}
                    </Box>
                    <Box>
                        <Stack>
                            {content?.quantity || <div>?€</div>}
                            <Typography variant="caption" display="block" gutterBottom>
                                {content?.date || <div>xx-xx-xxxx</div>}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack>
                </Stack>
            </Paper>
        </Box>
    )
}

export default Movement