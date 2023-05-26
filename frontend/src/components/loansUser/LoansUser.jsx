import { Box, useTheme, Button } from '@mui/material'
import { useState } from 'react';
import Loan from '../loan/Loan'
import themeHandler from '../../utils/theme'

const LoansUser = () => {

    const theme = useTheme()

    const [loansList, setLoansList] = useState([])
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
                                <label>Razón: </label>
                                <input type='text' placeholder='Añade la razón' style={{backgroundColor: '#000'}}/>
                            </span>

                            <span>
                                <label>Fecha: </label>
                                <input type='text' placeholder='Fecha...' style={{backgroundColor: '#000'}}/>
                            </span>
                        </div>
                        <div className='part2OfRequest'>
                            <label>Descripción: </label>
                            <textarea type='text' placeholder='Añada la descripción...'/>
                        </div>
                    </div>
                    <div className='btnRequestLoans'>
                        <button onClick={closeModal} className="cancelCreateUser">Cancelar</button>
                        <button onClick={closeModal} className="cancelCreateUser">Enviar</button>
                    </div>
                </div>
            )}

            {
                loansList.length === 0 ? (
                    <Box sx={{backgroundColor: theme.palette.mode === 'light' ? 
                                themeHandler.LIGHT_MODE.secondary_color : 
                                themeHandler.DARK_MODE.secondary_color,
                            }}
                        height={50}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        borderRadius={2}
                        margin={1}
                    >
                        No hay préstamos
                    </Box>
                ) : (
                    <>
                    {loansList && loansList.map((loans) => (
                        <Loan content={loans} key={loans.id} style={ {marginY: 1} } />
                    ))}
                    </>
                )
            } 
        </Box>
    )
}

export default LoansUser