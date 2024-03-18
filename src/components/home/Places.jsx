import '../../style/scss/components/home/_places.scss';
import CardPlace from './places/CardPlace'
import Array from './places/Array'


const Places = ({img, name_servicies, name_place, description}) => {
    return (
        <>
            <section className='services'>
                <h2 className='contrast'>Nuestros <strong className='services-title'>LUGARES</strong></h2>

                <div className='projects-grid-container'>
                        {Array.map((place) => (
                        <CardPlace 
                        key={place.id}
                        image={place.img} 
                        name={place.name_services}
                        name_place={place.name_place}
                        description={place.description}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Places