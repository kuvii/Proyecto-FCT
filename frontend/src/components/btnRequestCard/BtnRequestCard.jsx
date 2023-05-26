import { Button, Box } from '@mui/material'
import { useState } from 'react';

const BtnRequestCard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <Box>
            <Button variant='contained' size='small' onClick={openModal}>Nueva tarjeta</Button>

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
        
        </Box>
    )
}

export default BtnRequestCard