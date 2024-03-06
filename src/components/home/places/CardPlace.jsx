import React, { useState } from 'react';
import '../../../style/scss/components/home/_cardPlace.scss'
// import recommend from '../../assets/icons/i_like_it.png'

const CardPlace = ({image, name_servicies, name_place, description}) => {
    const [contador, setContador] = useState(0);

    const manejarClic = () => {
        setContador(contador + 1);
    };

    return (
        <div className="card">
            <div className="grid-item">
                <img className='img-services' src={image} alt="Card-Image" />

                <div className="description-places">
                    <h3>{name_place}</h3>
                    <p className='description'>{description}</p>
                    <button className='read-more'>Leer más</button>
                    {/* <button className='read-more'>Saber más</button> */}
                </div>

                <div className="react">
                    <span className='star'>Reacciones: </span>
                    <button className='recommend' onClick={manejarClic}><svg aria-label="Ya no me gusta" className="img-recommend" fill="#55F5A3" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Ya no me gusta</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button>
                    <p className='view-count'>{contador} likes</p>
                </div>
            </div>
        </div>
    )
}

export default CardPlace