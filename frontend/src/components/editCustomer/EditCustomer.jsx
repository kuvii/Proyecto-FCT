import { useState } from "react";

const EditCustomer = ({ closeModal, customerData }) => {

    const [newCustomer, setNewCustomer] = useState(customerData)

    const handleChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newCustomer);
    };

    return (
        <div className="boxEditCustomer">
            <div className="contenedorRegistro">
                <div className="row formRegistro">
                    <div className="col-md-6">
                        <form id="form1">
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputFormulario" 
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
                                    className="form-control inputFormulario"
                                    placeholder={customerData?.birthdate}
                                    value={newCustomer.birthdate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputFormulario" 
                                id="dni" 
                                name="dni"
                                placeholder={customerData?.dni}
                                value={newCustomer.dni}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputFormulario" 
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
                                className="form-control inputFormulario" 
                                id="lastName"  
                                name="last_name"
                                placeholder={customerData?.last_name}
                                value={newCustomer.last_name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="tel" 
                                className="form-control inputFormulario" 
                                id="phone"  
                                name="phone"
                                placeholder={customerData?.phone}
                                value={newCustomer.phone}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="email" 
                                className="form-control inputFormulario" 
                                id="email" 
                                name="email"
                                placeholder={customerData?.email}
                                value={newCustomer.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control inputFormulario" 
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
                            <button className="buttonRegister" onClick={handleSubmit}>Actualizar</button>
                            <button onClick={closeModal} className="cancelCreateUser">Cancelar</button>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default EditCustomer