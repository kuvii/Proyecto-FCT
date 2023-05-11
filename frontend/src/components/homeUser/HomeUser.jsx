import imagenLogo1 from '../../assets/KingsBank_BlancoVerde1.png'
import imagenUsuario1 from '../../assets/usuario1.png'

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
                        <span className='textTitleHomeUser'>Total</span>
                        <div className='card'>
                            <div className='subContainerMoney'>
                                <span className='textBox'>dLoans€</span>
                                <span className='textBox'>dinero€</span>
                            </div>
                            <span className='textBoxLoan'>loans</span>
                            <div className='subContainerES'>
                                <span className='textBox'>número de cuenta ES</span>
                            </div>
                        </div>
                        <span className='textTitleHomeUser'>Tarjetas</span>
                        <div className='card2'>
                            <a href='/SolicitudTarjeta' className='subContainerRequestCard'><span>Solicitar nueva tarjeta</span></a>
                        </div>
                    </div>
                    <div className='containerMovements'>
                        <div className='titleMovements'>
                            <span className='textTitleHomeUser'>Últimos movimientos</span>
                        </div>
                        <div className='lastMovements'>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                            <div className='movements'>
                                Pago
                                <div className='inMovements'>
                                    Importe
                                    <span className='date'>fecha</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerPage2'>
                <img src={imagenUsuario1} alt="usuario2" className='imgUsuario2' />
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

export default HomeUser