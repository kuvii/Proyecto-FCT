import { Box, IconButton, Paper, Stack, useTheme, useMediaQuery } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';


const Customer = (props) => {

    const { customerData } = props

    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Box>
            <Paper sx={{margin: 1, padding: 2}}>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        <Stack spacing={isPc ? 15 : 8} direction='row'>
                            <Box>
                                {customerData?.first_name}
                            </Box>
                            <Box>
                                {customerData?.last_name}
                            </Box>
                            {isPc ? (
                                <>
                                    <Box>
                                        {customerData?.email}
                                    </Box>
                                    <Box>
                                        {customerData?.account.iban}
                                    </Box>
                                </>
                            ): null}
                            <IconButton sx={{ height: 20, width: 20}} >
                                <InfoIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}

export default Customer