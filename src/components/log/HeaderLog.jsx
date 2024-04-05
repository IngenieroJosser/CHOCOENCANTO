import '../../style/scss/login/_headerlog.scss'
import { NavLink } from 'react-router-dom'

const HeaderLog = () => {
    return (
        <header>
            <NavLink to='/'><h4>@ChocóEncanto</h4></NavLink>

            <nav className='nav-none'>
                <NavLink to="#">Servicios</NavLink>
                <NavLink to="/Reservas" exact>Reservas</NavLink>
                <NavLink to="#">Experiencias</NavLink>
                <NavLink to="#">Atención al cliente</NavLink>
            </nav>
        </header>
    )
}

export default HeaderLog