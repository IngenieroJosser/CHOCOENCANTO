import '../../style/scss/home/_services.scss'

const CardServices = ({img, title, text, attrl}) => {
    return (
        <section id='services'>
            <div className="services-content">
                <img src={img} alt={attrl} />
                <h3>{title}</h3> 
                <p>{text}</p>
            </div>
        </section>
    )
}

export default CardServices