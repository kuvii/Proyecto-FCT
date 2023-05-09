import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import imagenUsuario2 from '../../assets/usuario2.png'

const HomeUser = () => {

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
                <div className='containerCardAndLastMovements'>
                    <div className='containerDataCard'>
                        <span>Total</span>
                        <div className='card'>
                            <div className='subContainerMoney'>
                                <span>dinero€</span>
                            </div>
                            <div className='subContainerES'>
                                <span>número de cuenta ES</span>
                            </div>
                        </div>
                        <span>Tarjetas</span>
                        <div className='card2'>
                            <div className='subcontainerCards'>
                                cuadrado1
                            </div>
                            <div className='subContainerRequestCard'>
                                cuadrado2
                            </div>
                        </div>
                    </div>
                    <div className='lastMovements'>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                        <p>Contenido dentro del ScrollView</p>
                    </div>
                </div>
            </div>
            <div className='containerPage2'>
                <img src={imagenUsuario2} alt="usuario2" className='imgUsuario2' />
                <span className='title'>User</span>
                <div className='containerUserLinks'>
                    <a href='/Inicio' className='userLinks'>Inicio</a>
                    <a href='/' className='userLinks'>Resumen</a>
                    <a href='/' className='userLinks'>Tarjetas</a>
                </div>
            </div>
        </div>
    )
}

export default HomeUser