import { useState } from "react";
import Formulary from "../formulary/Formulary";
import apiAdmin from "../../api/admin";

import Button from '@mui/material/Button';

const ButtonCreateUser = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const createUser = async (customer) => {
        console.log({customer});
        try {
            const response = await apiAdmin.createNewUser(customer);
            
            console.log(response);
            } catch (error) {
            console.error(error);
            }
    };

    return (
        <div style={{display: 'flex', marginBottom: '10px', marginLeft: '8px'}}>
            <Button variant='contained' size='small' onClick={openModal}>Crear usuario</Button>

            {isOpen && (
                <div className="modal-backdrop">
                    <Formulary closeModal={closeModal} createUser={createUser}/>
                </div>
            )}
        </div>
    )
}

export default ButtonCreateUser