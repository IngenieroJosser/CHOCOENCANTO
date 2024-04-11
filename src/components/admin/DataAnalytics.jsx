import '../../style/scss/admin/_dataAnalytics.scss'
import dataAnalytics from '../../assets/img/analytics.png'
import buys from '../../assets/icons/cart.png'
import dollar from '../../assets/icons/dollar.png'
import user from '../../assets/icons/group.png'
import conversition_rate from '../../assets/icons/rating.png'

const DataAnalytics = () => {
    return (
        <section className='container--admin'>
            <section className='data-analytics'>
                {/* <img className='data' src={dataAnalytics} alt="" /> */}

                <div className="banner--admin">
                    <div className="content--admin">
                        <img src={buys} alt="icono de compra" />
                        <p>Venta de paquetes</p>

                        <div className="content">
                            <p className='count--content'>235,867</p>
                            <h6>+3409</h6>
                        </div>
                    </div>

                    <div className="content--admin">
                        <img src={dollar} alt="peso colombiano" />
                        <p>Ingresos</p>

                        <div className="content">
                            <p className='count--content'>$235,867,090</p>
                            <h6>-$2,201</h6>
                        </div>
                    </div>
                    
                    <div className="content--admin">
                        <img src={user} alt="usuario" />
                        <p>Usuario de viajeros</p>

                        <div className="content">
                            <p className='count--content'>16, 703</p>
                            <h6>+3,392</h6>
                        </div>
                    </div>

                    <div className=" banner-a-2">
                        <img src={conversition_rate} alt="conversion" />
                        <p>Rating turisticos</p>

                        <div className="content">
                            <p className='count--content'>12,8%</p>
                            <h6>-1.22</h6>
                        </div>
                    </div>
                </div>

                <div className="banner-content">
                    <p>Rendimiento de ventas</p>
                    
                    <div className="banner-admin">
                        <div className="content--admoin">
                            <p>🔵 Paquetes</p>
                            <p>🟡 Habitaciones</p>
                            <p>🟢 Personas</p>
                            <p>🟤 Número de viajes</p>
                        </div>
                    </div>

                    <img src={dataAnalytics} alt="imagen grafica" />
                </div>
            </section>

            <div className='data-analytics-grafic'>
                <span>Categorias populares</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#07190f' height="240" viewBox="0 -960 960 960" width="240"><path d="M441-82Q287-97 184-211T81-480q0-155 103-269t257-129v120q-104 14-172 93t-68 185q0 106 68 185t172 93v120Zm80 0v-120q94-12 159-78t79-160h120q-14 143-114.5 243.5T521-82Zm238-438q-14-94-79-160t-159-78v-120q143 14 243.5 114.5T879-520H759Z"/></svg>
                <p>%</p>
            </div>
        </section>
    )
}

export default DataAnalytics