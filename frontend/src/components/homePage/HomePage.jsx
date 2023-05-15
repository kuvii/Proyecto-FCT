import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import imagenUsuario1 from '../../assets/usuario1.png'

const HomePage = () => {

    return (
        <div className='generalContainer'>
            <div className='containerPage'>
                <nav className="navbar navbar-expand-lg contenedorNavbar mainContainer">
                    <div className="collapse navbar-collapse headerContainer" id="navbarTogglerDemo01">
                        <img src={imagenLogo1} className='imagenKingBank' alt='Imagen del Logo'/>
                        <div className="header">
                            <h2 className='title'>Welcome back</h2>
                        </div>
                    </div>
                </nav>
                
            </div>
            <div className='containerPage2'>
                <img src={imagenUsuario1} alt="usuario1" className='imgUsuario1' />
                <span className='titleUser'>User</span>
                <div className='containerUserLinks'>
                    <a href='/Inicio' className='userLinks'>Inicio</a>
                    <a href='/' className='userLinks'>Movimientos</a>
                    <a href='/' className='userLinks'>Tarjetas</a>
                    <a href='/' className='userLinks'>Préstamos</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage