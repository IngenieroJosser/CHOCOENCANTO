import '../../style/scss/admin/_dataAnalytics.scss'
import dataAnalytics from '../../assets/img/analytics.png'

const DataAnalytics = () => {
    return (
        <section className='container--admin'>
            <section className='data-analytics'>
                {/* <img className='data' src={dataAnalytics} alt="" /> */}

                <div className="banner--admin">
                    <div className="content--admin">
                        
                    </div>

                    <div className="content--admin">
                        
                    </div>
                    
                    <div className="content--admin">

                    </div>

                    <div className="content--admin">

                    </div>
                </div>

                <div className="banner-content">
                    <img src={dataAnalytics} alt="" />
                </div>
            </section>

            <div className='data-analytics-grafic'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' height="240" viewBox="0 -960 960 960" width="240"><path d="M441-82Q287-97 184-211T81-480q0-155 103-269t257-129v120q-104 14-172 93t-68 185q0 106 68 185t172 93v120Zm80 0v-120q94-12 159-78t79-160h120q-14 143-114.5 243.5T521-82Zm238-438q-14-94-79-160t-159-78v-120q143 14 243.5 114.5T879-520H759Z"/></svg>
            </div>
        </section>
    )
}

export default DataAnalytics