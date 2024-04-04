import CardPlaces from './places/CardPlaces'
import ArrayPlaces from './places/ArrayPlaces'
import '../style/scss/home/_someplaces.scss'

const SomePlaces = ({img, attlr}) => {
    return (
        <div className='some-places'>
                {/* <p>Alguno de nuestros lugares</p> */}
                <hr />
            <div className='banner-img'>
                {ArrayPlaces.map((places) => (
                    <CardPlaces
                        key={places.id}
                        img={places.img}                    
                        attlr={places.attlr}
                    />
                ))}
            </div>
        </div>
    )
}

export default SomePlaces