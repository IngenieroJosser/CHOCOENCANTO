import { NavLink } from 'react-router-dom'
import '../style/scss/home/_presentation.scss'
import catedral from '../assets/img/catedral.jpeg'

const Presentation = () => {
    return (
        <section className='presentation'>
            <div className="left-content">
                <h1>Un viaje al corazón del Pacífico colombiano, donde la tradición y la modernidad se encuentran.</h1>
                <p>Reserva tu viaje hoy y vive la experiencia a lo Chocó Encanto.</p>
                <NavLink href="#" className='see-you-soon'>Haz tu reserva!</NavLink>
            </div>

            <div className="right-content">
                <img src={catedral} alt="catedral de quibdó" />
                <p>Plaza catedral del Quibdó San Fransisco de Asis</p>
            </div>
        </section>
    )
}

export default Presentation