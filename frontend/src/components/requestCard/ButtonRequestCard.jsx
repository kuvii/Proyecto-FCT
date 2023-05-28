import { Button } from '@mui/material'
import { useState } from 'react';

const ButtonRequestCard = () => {

    const [showModal, setShowModal] = useState(false);
    const [select, setSelect] = useState(''); // Aquí se queda guardada la opcion escogida.

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const saveOption = (option) => {
        setSelect(option);
        closeModal();
    };
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button variant='contained' size='small' onClick={openModal} style={{width: '150px'}}>Nueva Tarjeta</Button>
    
            {showModal && (
                <div className="modal">
                <div className="modal-content">
                    <h2>Selecciona una opción</h2>
                    <div className='buttonsOption'>
                        <button onClick={() => saveOption('Débito')} className='selectionCard'>Débito</button>
                        <button onClick={() => saveOption('Crédito')} className='selectionCard'>Crédito</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default ButtonRequestCard