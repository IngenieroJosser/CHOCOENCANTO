import '../../style/scss/reservas/_headerReservas.scss'
import { NavLink } from 'react-router-dom'

const HeaderReservas = () => {
    return (
        <header className='reserve-header'>
            <input className='input-date' type="date" name="horaLlegada" id="horaLlegada"/>
            <input className='input-date' type="date" name="horaSalida" id="horaSalida"/>            
            <NavLink className="logIn" to='/Registro'>Iniciar sesión</NavLink>
        </header>
    )
}

export default HeaderReservas