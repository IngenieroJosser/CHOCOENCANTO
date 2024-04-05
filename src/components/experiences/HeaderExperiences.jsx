import { NavLink } from "react-router-dom"
import '../../style/scss/experiences/_experiences.scss'

const HeaderExperiences = () => {
    return (
        <>
            <div className="header-experiences">
            <NavLink to='/'><h4>@ChocóEncanto</h4></NavLink>

            <nav className='nav-experiences'>
                <NavLink className='e-link' to="#">Servicios</NavLink>
                <NavLink className='e-link' to="/Reservas" exact>Reservas</NavLink>
            </nav>
        </div>
        </>
    )
}

export default HeaderExperiences