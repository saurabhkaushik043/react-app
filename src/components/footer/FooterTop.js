import React from 'react';
import {NavLink} from "react-router-dom";

function FooterTop(){
    return (
        <div className="footer-menu-block">
            <div className="footer-links">
                <NavLink exact  activeclassName="active" to="/">Home</NavLink> 
                <NavLink exact  activeclassName="active" to="/pages/about-us">About US</NavLink> 
                <a href="#!">Contact US</a>
                <NavLink exact  activeclassName="active" to="/pages/term-conditions">Term & Conditions</NavLink>  
            </div>
            <div className="footer-contact">
                <p><i className="fas fa-envelope-open"></i><a href="mailto:support@yoresa.com">Support@yoresa.com</a></p>
                <p><i className="fas fa-mobile-alt"></i><a href="tel:0758957033">0758 957 033</a></p>
                <p><i className="fas fa-map-marker-alt"></i> 123/2, Street Name, City Name, Country Name</p>
            </div>
        </div>
    )
}
export default FooterTop;