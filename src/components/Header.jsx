import '../style/scss/home/_header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h4>@ChocóEncanto</h4>

            <nav>
                <NavLink to="#">Servicios</NavLink>
                <NavLink to="/Reservas" exact>Reservas</NavLink>
                <NavLink to="#">Contactanos</NavLink>
                <NavLink to="#">Atención al cliente</NavLink>
            </nav>

            <div className="log-sign">
                <NavLink className='btn1' to="/Registro" exact>Iniciar sesión</NavLink>
                <NavLink className='btn2' to="/Registro" exact>Registrarse</NavLink>
            </div>
        </header>
    )
}

export default Header