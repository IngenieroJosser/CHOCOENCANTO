import '../../../style/scss/components/home/_services.scss'

const Services = ({servicesImg, servicesTitle}) => {
    return (
        <>    
            {/* <div className="services-grid">
                <img className='img-services' src={servicesImg} alt="" />
                <p className='text-services'>{servicesText}</p>
            </div> */}
            
            <section className="services-flex">
                <img src={servicesImg} className='img-flex' alt="" />

                <div className="services-description">
                    <h2 className='service-name'>{servicesTitle}</h2>
                    {/* <p>{servicesText}</p> */}
                </div>
            </section>
        </>
    )
}

export default Services