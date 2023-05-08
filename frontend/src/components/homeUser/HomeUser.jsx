import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'

const HomeUser = () => {
    return (
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
                            <div className='prueba'>
                                cuadrado1
                            </div>
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
                <span></span>
            </div>
        </div>
    )
}

export default HomeUser