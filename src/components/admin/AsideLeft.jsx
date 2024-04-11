import '../../style/scss/admin/_asideleft.scss'
import { NavLink } from 'react-router-dom'

import search from '../../assets/icons/loupe.png'
import home from '../../assets/icons/home.png'
import flag from '../../assets/icons/finish.png'
import data_analytics from '../../assets/icons/data-analytics.png'
import user from '../../assets/icons/user.png'
import setting from '../../assets/icons/settings.png'

const AsideLeft = () => {
    return (
        <aside>
            <NavLink to=''><img src={search} alt="buscar" /></NavLink>
            <NavLink to='/'><img src={home} alt="inicio" /></NavLink>
            <NavLink><img src={flag} alt="bandera" /></NavLink>
            <NavLink><img src={data_analytics} alt="analisis de información" /></NavLink>
            <NavLink><img src={user} alt="usuario" /></NavLink>
            <NavLink><img src={setting} alt="configuración" /></NavLink>
        </aside>
    )
}

export default AsideLeft