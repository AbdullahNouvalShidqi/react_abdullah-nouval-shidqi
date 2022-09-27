import { Link } from 'react-router-dom';
import "./AboutSidebar.css";

const AboutSidebar = () => {
    return(
        <div className="costum-sidebar">
            <Link to='/'>Home</Link>
            <Link to='/about/about-app'>About App</Link>
            <Link to='/about/about-author'>About Author</Link>
        </div>
    );
}

export default AboutSidebar;