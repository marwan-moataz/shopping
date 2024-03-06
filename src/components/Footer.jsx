import React from 'react';
import './Footer.css';

let currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <p>Copyrights {currentYear}</p>
            <div className='contacts'>
                <ul>
                    <li><a href='/facebook.com'><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href='/facebook.com'><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='/facebook.com'><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href='/facebook.com'><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
        </div>
        
    </div>
    
)}

export default Footer;