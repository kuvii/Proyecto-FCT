import { Button } from '@mui/material'
import { useState } from 'react';
import { addYears } from 'date-fns';
import apiCustomer from '../../api/customer';

const ButtonRequestCard = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const saveOption = (option) => {
        closeModal();
        requestNewCard(option);
    };

    const generateNumberCard = () => {
        const numbers = [];
            for (let i = 0; i < 12; i++) {
                const randomNumbers = Math.floor(Math.random() * 9);
                numbers.push(randomNumbers);
            }
        return parseInt(numbers.join("").toString())
    };

    const generateNumberCVV = () => {
        const numbers = [];
            for (let i = 0; i < 3; i++) {
                const randomNumbers = Math.floor(Math.random() * 9);
                numbers.push(randomNumbers);
            }
        return parseInt(numbers.join("").toString())
    };

    const user = JSON.parse(localStorage.getItem("userInfo"));

    const dateNow = new Date();
    const dateExpiration = addYears(dateNow, 4);

    
    const requestNewCard = async (option) => {
        try {
            const cardInfo = {
                holder_name: user.first_name + " " + user.last_name,
                number: generateNumberCard(),
                status: "pending",
                type: option,
                cvv: generateNumberCVV(),
                date_expiration: dateExpiration
            }
            await apiCustomer.requestNewCard(cardInfo, user.id)
            
            } catch (error) {
                console.error(error)
            }
        
    };
    
    return (
        <div style={{display: 'flex'}}>
            <Button variant='contained' size='small' onClick={openModal} style={{width: '150px'}}>Nueva Tarjeta</Button>
    
            {showModal && (
                <div className="modal">
                <div className="modal-content">
                    <div className='closeOptions' onClick={closeModal}>
                        X
                    </div>
                    <h2>Selecciona una opción</h2>
                    <div className='buttonsOption'>
                        <button onClick={() => saveOption('debit')} className='selectionCard'>Débito</button>
                        <button onClick={() => saveOption('credit')} className='selectionCard'>Crédito</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default ButtonRequestCard