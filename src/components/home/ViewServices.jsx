import '../../style/scss/components/home/_viewservices.scss'

import gastronomy from  '../../assets/icons/restaurant.png'
import expedition from  '../../assets/icons/camping.png'
import network from  '../../assets/icons/network.png'
import beach from  '../../assets/icons/sun-umbrella.png'
import visit from  '../../assets/icons/location-mark.png'
import history from  '../../assets/icons/history.png'

const ViewServices = () => {
    return (
        <section>
            <h2 className="servicies-title">Nuestro <strong className='contrast'>SERVICIOS</strong></h2>

            <div className='services-banner'>
                <div className="services-content">
                    <img src={gastronomy} alt="Gastronomia del Chocó" />
                    <h4>EXPLORACION GASTRONOMICA </h4>
                </div>

                <div className="services-content">
                    <img src={expedition} alt="Expediciones al Chocó" />
                    <h4>EXPEDICIONES DE AVENTURAS</h4>
                </div>

                <div className="services-content">
                    <img src={network} alt="Conexiones CHOCOENCANTO" />
                    <h4>VISITAS A COMUNIDADES TRADICIONALES</h4>
                </div>
            </div>
            
            <div className='services-banner2'>
                <div className="services-content">
                    <img className='services-image' src={beach} alt="Gastronomia del Chocó" />
                    <h4>ESCAPADAS A LA PLAYA</h4>
                </div>

                <div className="services-content">
                    <img className='visit-image' src={visit} alt="Expediciones al Chocó" />
                    <h4>VISITA A COMUNIDADES TRADICIONALES</h4>
                </div>

                <div className="services-content">
                    <img src={history} alt="Conexiones CHOCOENCANTO" />
                    <h4>HISTORIA DE CADA SITIO TURISTICO</h4>
                </div>
            </div>
        </section>
    )
}

export default ViewServices