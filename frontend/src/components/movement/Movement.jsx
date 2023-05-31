import { Box, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext } from '../../app/KingsbankApp';
import themeHandler from '../../utils/theme';

const Movement = (props) => {
    const { content, style } = props

    const { mode } = useContext(ColorModeContext);

    return (
        <Box>
            <Paper sx={{margin: 1, padding: 2, backgroundColor: mode === 'dark' ? themeHandler.DARK_MODE.secondary_color : themeHandler.LIGHT_MODE.secondary_color, ...style}}>
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
                            {content?.quantity + '€' || <div>?€</div>}
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