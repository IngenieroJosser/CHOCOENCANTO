import '../../style/scss/experiences/_experiences.scss'
import CardExperiences from './fragments/CardExperiences'
import ArrayExperiences from './fragments/ArrayExperiences'

const ImgExperiences = ({img1, img2, nameplace1, nameplace2, description1, descripcion2, link1, link2}) => {
    return (
        <section className='section-experiences'>
            {ArrayExperiences.map((places) => (
                    <CardExperiences
                        key={places.id}
                        img1={places.img1}
                        img2={places.img2}
                        nameplace1={places.nameplace1}
                        nameplace2={places.nameplace2}
                        description1={places.description1}
                        descripcion2={places.description2}
                        link1={places.link1}
                        link2={places.link2}
                    />
                ))}
        </section>
    )
}

export default ImgExperiences