import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import Formulary from '../formulary/Formulary'

const Register = () => {

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
                            <div className='containerRegisterLogin'>
                                <h2 className='titulo'>Registro</h2>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <Formulary/>

            <div className="footer">
                <span className="footerText">KingsBank &copy; 2023</span>
            </div>
        </>

        
    )
}

export default Register