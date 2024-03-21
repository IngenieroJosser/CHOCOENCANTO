import '../../style/scss/components/home/_viewservices.scss'

import gastronomy from  '../../assets/icons/restaurant.png'
import expedition from  '../../assets/icons/camping.png'
import network from  '../../assets/icons/network.png'

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
        </section>
    )
}

export default ViewServices