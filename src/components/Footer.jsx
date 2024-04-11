import '../style/scss/home/_footer.scss'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'
import youtube from '../assets/icons/youtube.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <span>Siguenos</span>
            
            <div className="social-media">
                <a href="https://web.facebook.com/allinson.tomm/?_rdc=2&_rdr"><img src={facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/itsjosser/"><img src={instagram} alt="instagram" /></a>
                <a href="https://twitter.com/JosserCordoba"><img src={twitter} alt="twitter" /></a>
                <a href="https://www.youtube.com/channel/UCxXr04IWXRAnUAdRvLszIFQ"><img src={youtube} alt="youtube" /></a>
            </div>
            
            <p>Descubre la belleza natural de Quibdó, Chocó, con nuestros tours ecológicos y gastronómicos. Sumérgete en la cultura local y vive experiencias inolvidables en este paraíso tropical. ¡Reserva ahora y comienza tu aventura con nosotros!</p>
            <p>Calle 29 # 4-50, Barrio El Poblado, 270007 Quibdó, Chocó, Colombia, COLOMBIA</p>
            <NavLink className='login-footer' to='/Registro'>Registrarse</NavLink>
            <span className='all-right'> &copy; 2024 Todos los derechos reservados</span>
            <span className='all'> &copy;Desarrollado por <span>Josser Cordoba Rivas</span></span>
        </footer>
    )
}

export default Footer