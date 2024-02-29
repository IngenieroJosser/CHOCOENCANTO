
import ImgServices from './services/ImgServices'
import Services from './services/Services'

const ViewServices = ({servicesImg, servicesTitle, servicesText}) => {
    return (
        <section>
            <h2 className="servicies-title">Nuestro <strong className='contrast'>SERVICIOS</strong></h2>

            <div className='img-grid'>
                        {ImgServices.map((service) => (
                        <Services 
                        key={service.id}
                        servicesImg={service.servicesImg} 
                        servicesTitle={service.servicesTitle}
                        servicesText={service.servicesText}
                        />
                    ))}
                </div>
        </section>
    )
}

export default ViewServices