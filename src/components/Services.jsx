import CardServices from './services/CardServices'
import ArrayServices from './services/ArrayServices'

const Services = ({img, title, text, attrl}) => {
    return (
        <div className='services'>
            {ArrayServices.map((services) => (
                    <CardServices
                        key={services.id}
                        img={services.img}
                        title={services.title}  
                        text={services.text}               
                        attlr={services.attlr}
                    />
                ))}
        </div>
    )
}

export default Services