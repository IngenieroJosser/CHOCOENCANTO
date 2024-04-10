import '../../style/scss/reservas/_bannerReserves.scss'
import ArrayReserves from './fragments/ArrayReserves'
import CardReserves from './fragments/CardReserves'

const BannerReserves = (place, namePlace, price, imgEnterprise, attrl) => {
    return (
        <section className='banner-reserves'>
            {ArrayReserves.map((reserve) => (
                    <CardReserves
                        key={reserve.id}
                        place={reserve.place}
                        namePlace={reserve.namePlace}
                        price={reserve.price}
                        imgEnterprise={reserve.imgEnterprise}
                        attrl={reserve.attrl}
                    />
                ))}
        </section>
    )
}

export default BannerReserves