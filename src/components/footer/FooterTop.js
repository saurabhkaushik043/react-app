import React from 'react';

function FooterTop(){
    return (
        <div className="footer-menu-block">
            <div className="footer-links">
                <a href="#!" className="active">Home</a>
                <a href="#!">How it works</a>
                <a href="#!">Post a advert</a>
                <a href="#!">My Product & Services</a>
                <a href="#!">Contact Us</a>
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