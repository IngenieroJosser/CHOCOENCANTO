import '../style/scss/home/_header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to='/'><h4>@ChocóEncanto</h4></NavLink>

            <nav>
                <NavLink to="/">Servicios</NavLink>
                <NavLink to="/Reservas" exact>Reservas</NavLink>
                <NavLink to="/Experiencias">Experiencias</NavLink>
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