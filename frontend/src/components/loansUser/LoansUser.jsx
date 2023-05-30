import { Box, Paper, Stack, } from '@mui/material'

const LoansUser = (props) => {

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
                        {content?.description}
                    </Box>
                    <Box>
                        <Stack>
                            {content?.total}€
                        </Stack>
                    </Box>
                </Stack>
                <Stack>
                </Stack>
            </Paper>
        </Box>
    )
}

export default LoansUser