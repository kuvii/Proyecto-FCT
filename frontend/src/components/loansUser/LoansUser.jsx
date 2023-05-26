import { Box, Paper, Stack, Typography, Button } from '@mui/material'
import { useState } from 'react';

const LoansUser = (props) => {

    const { content, style } = props

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Box>
            <div className='btnRequestLoan'>
                <Button variant='contained' size='small' onClick={openModal}>Nuevo</Button>
            </div>

            {isOpen && (
                <div className="modal-backdrop containerModalRequestLoan">
                    <div className='boxRequestLoan'> 
                        <div className='part1OfRequest'>
                            <span>
                                <label>Reason: </label>
                                <input type='text' placeholder='What is a reason?' style={{backgroundColor: '#000'}}/>
                            </span>

                            <span>
                                <label>Date: </label>
                                <input type='text' placeholder='Date...' style={{backgroundColor: '#000'}}/>
                            </span>
                        </div>
                        <div className='part2OfRequest'>
                            <label>Description: </label>
                            <textarea type='text' placeholder='Description...'/>
                        </div>
                    </div>
                    <div className='btnRequestLoans'>
                        <button onClick={closeModal} className="cancelCreateUser">Cancelar</button>
                        <button onClick={closeModal} className="cancelCreateUser">OK</button>
                    </div>
                </div>
            )}

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

export default LoansUser