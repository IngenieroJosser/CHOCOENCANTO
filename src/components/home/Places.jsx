import '../../style/scss/components/home/_places.scss';
import CardPlace from './CardPlace'
import Array from './Array'


const Services = ({img, name_servicies, name_place, description}) => {
    return (
        <>
            <section className='services'>
                <h2 className='contrast'>Nuestros <strong className='services-title'>LUGARES</strong></h2>

                <div className='projects-grid-container'>
                        {Array.map((service) => (
                        <CardPlace key={service.id}
                        image={service.img} 
                        name={service.name_services}
                        name_place={service.name_place}
                        description={service.description}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services