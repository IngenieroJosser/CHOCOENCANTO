import '../../style/scss/components/reservas/_headerReserva.scss';
import back from '../../assets/icons/previous.png';
import { NavLink } from 'react-router-dom';
import Login from '../home/Login';

const HeaderReserva = () => {
    return (
        <header>
            <NavLink to="/"><img className='back-img' src={back} alt="pagina previa" /></NavLink>

            <input className='search-input' type="search" name="busqueda" id="busqueda" />

            <nav className='reservas-menu'>
                <NavLink to="/" className="link">Viajes</NavLink>
                <NavLink to="/" className="link">Descubrir</NavLink>
                <NavLink to="/" className="link">Opinión</NavLink>
                <NavLink to="/Login" className="link loginU">Iniciar sesión</NavLink>
            </nav>
        </header>
        
    )
}

export default HeaderReserva