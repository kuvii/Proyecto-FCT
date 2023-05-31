import { useState } from "react";
import Formulary from "../formulary/Formulary";

import Button from '@mui/material/Button';

const ButtonCreateUser = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div style={{display: 'flex', marginBottom: '10px', marginLeft: '8px'}}>
            <Button variant='contained' size='small' onClick={openModal}>Crear usuario</Button>

            {isOpen && (
                <div className="modal-backdrop">
                    <Formulary closeModal={closeModal}/>
                </div>
            )}
        </div>
    )
}

export default ButtonCreateUser