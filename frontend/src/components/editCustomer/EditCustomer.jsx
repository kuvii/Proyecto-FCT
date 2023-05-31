import { useState } from "react";
import apiAdmin from "../../api/admin";

const EditCustomer = ({ closeModal, customerData }) => {

    const [newCustomer, setNewCustomer] = useState(customerData)

    const handleChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value
        })
    }

    const editCustomer = async () => {
        try {
            const response = await apiAdmin.updateCustomer(newCustomer, customerData.id);

            closeModal()
            } catch (error) {
            console.error(error);
            }
        
    };

    return (
        <div className="boxEditCustomer">
            <div className="containerRegister">
                <div className="row formRegister">
                    <div className="col-md-6">
                        <form id="form1">
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputForm" 
                                id="name" 
                                name="first_name"
                                placeholder={customerData?.first_name}
                                value={newCustomer.first_name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    id="birthdate"
                                    name="birthdate"
                                    className="form-control inputForm"
                                    placeholder={customerData?.birthdate}
                                    value={newCustomer.birthdate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputForm" 
                                id="dni" 
                                name="dni"
                                placeholder={customerData?.dni}
                                value={newCustomer.dni}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputForm" 
                                id="postalCode"  
                                name="postal_code"
                                placeholder={customerData?.postal_code}
                                value={newCustomer.postal_code}
                                onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form id="form2">
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputForm" 
                                id="lastName"  
                                name="last_name"
                                placeholder={customerData?.last_name}
                                value={newCustomer.last_name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="tel" 
                                className="form-control inputForm" 
                                id="phone"  
                                name="phone"
                                placeholder={customerData?.phone}
                                value={newCustomer.phone}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="email" 
                                className="form-control inputForm" 
                                id="email" 
                                name="email"
                                placeholder={customerData?.email}
                                value={newCustomer.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputForm" 
                                id="direction"  
                                name="direction"
                                placeholder={customerData?.address}
                                value={newCustomer.direction}
                                onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                        <div className='buttonsFormulary'>
                            <button className="buttonRegister" onClick={() => editCustomer()}>Actualizar</button>
                            <button onClick={closeModal} className="cancelCreateUser">Cancelar</button>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default EditCustomer