import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';
import './HomeSidebar.css'
import { useState } from 'react';
import { IconContext } from 'react-icons';

const HomeSidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);
    

    return(
        <>
            <IconContext.Provider value={sidebar ? {color: '#fff'} : {color: '#060b26'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/'>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/about/about-app'>
                            <span>About</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default HomeSidebar;