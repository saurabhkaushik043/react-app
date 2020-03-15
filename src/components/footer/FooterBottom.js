import React from 'react';
import SocialLink from '../SocialLink'

function FooterBottom(){
    return (
        <div className="footer-copyright-block ">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-md-flex justify-content-between align-items-center">
                        <p>© 2020 Yoresa.com, All rights Reserved</p>
                        <SocialLink />
                        <div className="copyright-links">
                            <a href="#!">Terms & Condition</a>
                            <a href="#!">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterBottom;