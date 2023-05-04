import imagenCandado from '../../assets/candado.png'
import imagenUsuario from '../../assets/usuario.png'
import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'

const Login = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg contenedorNavbar">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="logoTitulo">
                        <img src={imagenLogo1} className='imagenKingBank' alt='Imagen del Logo'/>
                        <span className="titulo">Kings Bank</span>
                    </div>
                    <div className="header">
                        <form className="d-flex ml-auto formMax">
                            <div className='containerInputs'>   
                                <div className="inputContainer1">
                                    <input className="space" 
                                    type="text" 
                                    placeholder="Username" 
                                    />
                                    <span className="inputLogo"><img src={imagenUsuario} className='imagenLogo' alt='Imagen del Logo Usuario'/></span>
                                </div>
                                
                                <div className="inputContainer2">
                                    <input className="space" 
                                    type="text" 
                                    placeholder="Password"
                                    />
                                    <span className="inputLogo"><img src={imagenCandado} className='imagenLogo' alt='Imagen del Logo Contraseña'/></span>
                                </div>
                            </div>

                            <div className='containerRegisterLogin'>
                                <button className="botonLogin" type="submit">Login</button>
                                <a href='/' className="botonRegister">Crear cuenta</a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>



            <div className="footer">
                <span className="footerText">KingsBank &copy; 2023</span>
            </div>
        </>
    )
}

export default Login