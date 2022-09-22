import { Link } from 'react-router-dom';
import './NotFoundContent.css'

const NotFoundContent = () => {
    return(
        <div className='container-for-image'>
            <div className="main-image"/>
            <h1 className='costum-h1'>Opps! Something went wrong!</h1>
            <Link to='/' className='return-costum-button'>Return to home</Link>
        </div>
    );
}

export default NotFoundContent;