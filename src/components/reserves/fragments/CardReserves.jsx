import '../../../style/scss/reservas/_bannerReserves.scss'

const CardReserves = ({place, namePlace, price, imgEnterprise, attrl}) => {
    return (
        <section className="banner">
            <div className="content-banner">
                <img src={place} alt={attrl} />
                
                <div className="place">
                    <h4>{namePlace}</h4>
                    <p>{imgEnterprise}</p>
                    <span>{price}</span>
                </div>
            </div>
        </section>
    )
}

export default CardReserves