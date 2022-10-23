import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
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