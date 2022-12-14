import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './Home.css'

const Home = () => {
    return(
        <div className="home-container">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Home;