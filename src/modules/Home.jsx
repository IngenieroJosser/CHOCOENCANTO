import Header from '../components/home/Header'
import Presentation from '../components/home/Presentation'
import About from '../components/home/About'
import ViewServices from '../components/home/ViewServices'
import ViewPlace from '../components/home/ViewPlace'
import Places from '../components/home/Places'
import Footer from '../components/home/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Presentation />
            <About />
            <ViewServices />
            <ViewPlace />
            <Places />
            <Footer />
        </>
    )
}

export default Home