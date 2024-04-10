import '../../style/scss/error/_error404.scss'
// import error404 from '../../assets/icons/error-404.png'
import logo from '../../assets/icons/leaf (2).png'

const Error404 = () => {
    return (
        <div className='error-page'>
            {/* <img src={error404} alt="imagen error 404" /> */}
            <h2>Error 404</h2>
            <p>Página no encontrada!</p>
            <img src={logo} alt="Logo ChocóEncanto" className="logo" />
        </div>
    )
}

export default Error404