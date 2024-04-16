import '../style/scss/home/_header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to='/Admin'><h4>@ChocóEncanto</h4></NavLink> {/* Aqui va / --> Pongo el de admin para prueba*/}

            <nav>
                <NavLink to="/Reservas" exact>Reservas</NavLink>
                <NavLink to="/Experiencias">Experiencias</NavLink>
                <a href="https://wa.me/573232842193?text=Hola,%20Bienvenido%20a%20ChocóEncanto,%20en%20qué%20te%20puedo%20ayudar%3F" target="_blank" rel="noopener noreferrer">Atención al cliente</a>
            </nav>

            <div className="log-sign">
                <NavLink className='btn1' to="/Registro" exact>Iniciar sesión</NavLink>
                <NavLink className='btn2' to="/Unete" exact>Únete</NavLink>
            </div>
        </header>
    )
}

export default Header