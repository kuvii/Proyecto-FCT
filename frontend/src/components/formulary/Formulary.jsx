import { useState } from 'react';
import apiAdmin from '../../api/admin';

const Formulario = ({ closeModal }) => {

    const [first_name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [last_name, setLastName] = useState("");
    const [bitrhdate, setBirthdate] = useState("");
    const [phone, setPhone] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [direction, setDirection] = useState("");

    const generateRandomNumbers = () => {
        const numbers = [];
        for (let i = 0; i < 22; i++) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            numbers.push(randomNumber);
        }
        return numbers.join("").toString();
    };

    const handleInputChange = (e) => {
        e.preventDefault();

        if (first_name === "" || password === "" || last_name === "" || bitrhdate === "" || phone === "" || dni === "" || email === "" || postalCode === "" || direction === "") {
            alert("Tiene que rellenar todos los campos para poder registrarse")
        } else {

            let newUser = {
                first_name: first_name,
                password: password,
                last_name: last_name,
                birthdate: bitrhdate,
                phone: phone,
                dni: dni,
                email: email,
                postal_code: postalCode,
                address: direction,
                account: {
                    role: 0,
                    money: 0.0,
                    iban: "ES" + generateRandomNumbers()
                }
            }

            
            setName("");
            setPassword("")
            setLastName("");
            setBirthdate("");
            setPhone("");
            setDni("");
            setEmail("");
            setPostalCode("");
            setDirection("");

            createUser(newUser)
            closeModal()
        }
    };

    const createUser = async (customer) => {
        try {
            await apiAdmin.createNewUser(customer);

            } catch (error) {
            console.error(error);
            }
    };

    return (
        <div className="containerRegister">
            <div className="row formRegister">
                <div className="col-md-6">
                    <form id="form1">
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputForm" 
                            id="first_name" 
                            placeholder="Nombre:"
                            value={first_name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="date"
                                id="bitrhdate"
                                className="form-control inputForm"
                                placeholder="Fecha de Nacimiento:"
                                value={bitrhdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputForm" 
                            id="dni" 
                            placeholder="Dni:"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputForm" 
                            id="postalCode"  
                            placeholder="Código Postal:"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <form id="form2">
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputForm" 
                            id="last_name"  
                            placeholder="Apellido:"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="tel" 
                            className="form-control inputForm" 
                            id="phone"  
                            placeholder="Teléfono:"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" 
                            className="form-control inputForm" 
                            id="email" 
                            placeholder="Email:"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputForm" 
                            id="direction"  
                            placeholder="Dirección:"
                            value={direction}
                            onChange={(e) => setDirection(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                className="form-control inputForm"
                                placeholder="Password:"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                    <div className='buttonsFormulary'>
                        <button className="buttonRegister" onClick={handleInputChange}>Enviar</button>
                        <button onClick={closeModal} className="cancelCreateUser">Cancelar</button>
                    </div>
            </div>
        </div>
    );
};

export default Formulario;
