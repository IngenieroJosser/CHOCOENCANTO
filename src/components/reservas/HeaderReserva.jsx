import '../../style/scss/components/reservas/_headerReserva.scss';
import back from '../../assets/icons/previous.png';
import { NavLink } from 'react-router-dom';
import ContactForm from '../home/ContactForm';

const HeaderReserva = () => {
    return (
        <header>
            <NavLink to="/"><img className='back-img' src={back} alt="pagina previa" /></NavLink>

            <nav className='reservas-menu'>
                <NavLink to="/" className="link">Inicio</NavLink>
                <NavLink to="/Contactanos" className="link">Contactos</NavLink>
                <NavLink to="/" className="link">Testimonio</NavLink>
            </nav>
        </header>
        
    )
}

export default HeaderReserva