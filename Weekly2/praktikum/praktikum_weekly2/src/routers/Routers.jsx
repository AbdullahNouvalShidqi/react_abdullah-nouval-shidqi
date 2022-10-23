import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;