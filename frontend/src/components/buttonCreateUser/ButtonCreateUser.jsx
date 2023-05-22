import { useState } from "react";
import Formulary from "../formulary/Formulary";

const ButtonCreateUser = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>

            <button className="btnCreateUser" onClick={openModal}>Crear Usuario</button>
    
            {isOpen && (
                <div className="modal-backdrop">
                    <Formulary/>
                    <button onClick={closeModal} className="cancelCreateUser">Cancelar</button>
                </div>
            )}

        </div>
    )
}

export default ButtonCreateUser