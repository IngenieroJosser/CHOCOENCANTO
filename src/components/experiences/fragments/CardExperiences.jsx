import '../../../style/scss/experiences/_experiences.scss'
import facebook from '../../../assets/icons/facebook.png'
import instagram from '../../../assets/icons/instagram.png'
import twitter from '../../../assets/icons/twitter.png'
import youtube from '../../../assets/icons/youtube.png'

const CardExperiences = ({img1, img2, nameplace1, nameplace2, description1, descripcion2}) => {
    return (
        <section>
            <div className="banner-social-media">
                <a href=""><img src={facebook} alt="facebook" /></a>
                <a href=""><img src={instagram} alt="instagram" /></a>
                <a href=""><img src={twitter} alt="twitter" /></a>
                <a href=""><img src={youtube} alt="youtube" /></a>
            </div>

            <div className="experience-place">
                    <div className="place1">
                        <img src={img1} alt="Lugar1" />
                        <h2>{nameplace1}</h2>
                        <p>{description1}</p>
                    </div>

                    <div className="place2">
                        <img src={img2} alt="Lugar2" />
                        <h2>{nameplace2}</h2>
                        <p>{descripcion2}</p>
                    </div>
                </div>
        </section>
    )
}

export default CardExperiences