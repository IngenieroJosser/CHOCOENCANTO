import '../style/scss/home/_header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h4>@ChocóEncanto</h4>

            <nav>
                <NavLink href="#">Caracteristicas</NavLink>
                <NavLink href="#">Reservas</NavLink>
                <NavLink href="#">Contactanos</NavLink>
                <NavLink href="#">Atencion al cliente</NavLink>
            </nav>

            <div className="log-sign">
                <NavLink className='btn1' href="#">Sign Up</NavLink>
                <NavLink className='btn2' href="#">Log in</NavLink>
            </div>
        </header>
    )
}

export default Header