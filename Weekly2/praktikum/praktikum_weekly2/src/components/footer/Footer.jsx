import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return(
        <div className='costum-footer'>
            <label htmlFor="list" className='custum-label'>
                <h3>You can find me at</h3>
                <ul className='costum-ul'>
                    <li><a href='https://wa.me/087823232237' target='_blank' rel="noreferrer">Whatsapp</a></li>
                    <li><a href='https://www.instagram.com/abdullah_nouval/' target='_blank' rel="noreferrer">Instagram</a></li>
                    <li><a href='https://www.linkedin.com/in/abdullah-nouval-182a01232/' target='_blank' rel="noreferrer">Linkedin</a></li>
                </ul>
            </label>
            <div className='main-footer-title'>
                <h1 className='costum-h1'>My APP</h1>
                <Link to='/about'>About Us</Link>
                <p>&#169; Abdullah Nouval Shidqi</p>
            </div>
            
            <label htmlFor="list" className='custum-label'>
                <h3>My contact info</h3>
                <ul className='costum-ul'>
                    <li>Number: 087823232237</li>
                    <li>Address: Jl. Kawista no 2 Bandung</li>
                </ul>
            </label>
        </div>
    );
}

export default Footer;