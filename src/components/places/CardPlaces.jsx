import '../../style/scss/home/_someplaces.scss'

const CardPlaces = ({img, attlr}) => {
    return (
        <div>
            <img src={img} alt={attlr} />
        </div>
    )
}

export default CardPlaces