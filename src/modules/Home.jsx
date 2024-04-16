import Header from "../components/Header"
import Presentation from "../components/Presentation"
import SomePlaces from "../components/SomePlaces"
import Services from "../components/Services"
import UserSay from "../components/UserSay"
import Footer from "../components/Footer"
// import LiveChatButton from "../components/costumerService/LiveChatButton "

const Home = () => {
    return (
        <>
            <Header />
            <Presentation />
            <SomePlaces />
            <Services />
            <UserSay />
            <Footer />
            {/* <LiveChatButton /> */}
        </>
    )
}

export default Home