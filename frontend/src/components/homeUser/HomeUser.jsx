import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'

const HomeUser = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg contenedorNavbar mainContainer">
                    <div className="collapse navbar-collapse headerContainer" id="navbarTogglerDemo01">
                        <img src={imagenLogo1} className='imagenKingBank' alt='Imagen del Logo'/>
                        <div className="header">
                            <div className='contenedorTitulo'>
                                <h2 className='title'>Welcome back</h2>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default HomeUser