import '../../../style/scss/components/home/_services.scss'

const Services = ({servicesImg, servicesText}) => {
    return (
        <>    
            <div className="services-grid">
                <img className='img-services' src={servicesImg} alt="" />
                <p className='text-services'>{servicesText}</p>
            </div>
            
        </>
    )
}

export default Services