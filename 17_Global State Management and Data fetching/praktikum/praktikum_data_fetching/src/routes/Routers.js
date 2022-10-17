import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutApp from '../pages/AboutApp';
import AboutAuthor from '../pages/AboutAuthor';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about/about-app' element={<AboutApp />}/>
                <Route path='/about/about-author' element={<AboutAuthor/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;