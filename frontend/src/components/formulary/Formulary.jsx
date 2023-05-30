import { useState } from 'react';

const Formulario = ({closeModal, createUser}) => {

    const [first_name, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [last_name, setApellidos] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [direccion, setDireccion] = useState("");

    let lUsuarios = [];

    const handleInputChange = (e) => {
        e.preventDefault();

        if (first_name === "" || password === "" || last_name === "" || fechaNacimiento === "" || telefono === "" || dni === "" || email === "" || codigoPostal === "" || direccion === "") {
            alert("Tiene que rellenar todos los campos para poder registrarse")
        } else {

            let nuevoUsuario = {
                first_name: first_name,
                password: password,
                last_name: last_name,
                birthdate: fechaNacimiento,
                phone: telefono,
                dni: dni,
                email: email,
                postal_code: codigoPostal,
                address: direccion,
                account: {
                    role: 0,
                    money: 0.0
                }
            }
            createUser(nuevoUsuario)
            
            setNombre("");
            setPassword("")
            setApellidos("");
            setFechaNacimiento("");
            setTelefono("");
            setDni("");
            setEmail("");
            setCodigoPostal("");
            setDireccion("");
            
            lUsuarios.push(nuevoUsuario)
    
            // Check if the new user is stored
            console.log(nuevoUsuario);
            console.log("*****************");
        }
    };

    return (
        <div className="contenedorRegistro">
            <div className="row formRegistro">
                <div className="col-md-6">
                    <form id="form1">
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputFormulario" 
                            id="first_name" 
                            placeholder="first_name:"
                            value={first_name}
                            onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="date"
                                id="fechaNacimiento"
                                className="form-control inputFormulario"
                                placeholder="Fecha de Nacimiento:"
                                value={fechaNacimiento}
                                onChange={(e) => setFechaNacimiento(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputFormulario" 
                            id="dni" 
                            placeholder="Dni:"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputFormulario" 
                            id="codigoPostal"  
                            placeholder="Código Postal:"
                            value={codigoPostal}
                            onChange={(e) => setCodigoPostal(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <form id="form2">
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputFormulario" 
                            id="last_name"  
                            placeholder="last_name:"
                            value={last_name}
                            onChange={(e) => setApellidos(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="tel" 
                            className="form-control inputFormulario" 
                            id="telefono"  
                            placeholder="Teléfono:"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" 
                            className="form-control inputFormulario" 
                            id="email" 
                            placeholder="Email:"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control inputFormulario" 
                            id="direccion"  
                            placeholder="Dirección:"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                className="form-control inputFormulario"
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
