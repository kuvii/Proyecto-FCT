import { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [direccion, setDireccion] = useState("");

    let lUsuarios = [];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "" || apellidos === "" || fechaNacimiento === "" || telefono === "" || dni === "" || email === "" || codigoPostal === "" || direccion === "") {
            alert("Tiene que rellenar todos los campos para poder registrarse")
        } else {
            setNombre(nombre);
            setApellidos(apellidos);
            setFechaNacimiento(fechaNacimiento);
            setTelefono(telefono);
            setDni(dni);
            setEmail(email);
            setCodigoPostal(codigoPostal);
            setDireccion(direccion);

            let nuevoUsuario = {
                nombre: nombre,
                apellidos: apellidos,
                fechaNac: fechaNacimiento,
                telf: telefono,
                dni: dni,
                email: email,
                cPostal: codigoPostal,
                direcc: direccion
            }
            
            setNombre("");
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
                            id="nombre" 
                            placeholder="Nombre:"
                            value={nombre}
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
                            id="apellidos"  
                            placeholder="Apellidos:"
                            value={apellidos}
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
                    </form>
                </div>
                    <div>
                        <button className="buttonRegister" onClick={handleSubmit}>Enviar</button>
                    </div>
            </div>
        </div>
    );
};

export default Formulario;
