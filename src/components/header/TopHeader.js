import React from 'react';

function TopHeader(){
    return (
        <div class="head-top-block">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <a href="#!">Add Advert</a>
                        <a href="login.html">Sign In Or Register</a>
                        <a href="#!">Help & Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;