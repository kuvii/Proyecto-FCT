import React from "react";

const Formulario = () => {

    return (
        <div className="contenedorRegistro">
            <div className="row formRegistro">
                <div className="col-md-6">
                    <form id="form1">
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            id="nombre" 
                            placeholder="Nombre:"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="date"
                                id="fechaNacimiento"
                                className="form-control"
                                placeholder="Fecha de Nacimiento:"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            id="dni" 
                            placeholder="Dni:"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            id="codigoPostal"  
                            placeholder="Código Postal:"
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <form id="form2">
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            id="apellidos"  
                            placeholder="Apellidos:"/>
                        </div>
                        <div className="form-group">
                            <input type="tel" 
                            className="form-control" 
                            id="telefono"  
                            placeholder="Teléfono:"
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Email:"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            id="direccion"  
                            placeholder="Dirección:"
                            />
                        </div>
                    </form>
                </div>
                    <div>
                        <button className="botonRegistro">Enviar</button>
                    </div>
            </div>
        </div>
    );
};

export default Formulario;
