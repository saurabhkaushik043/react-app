import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(){
    return(        
        <div className="head-nav-block">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <a href="javascript:void(0)" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></a>
                        <nav className="navbar navbar-expand-xl navbar-custom">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav text-right">
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" activeclassName="active" to="/">Home
                                        </NavLink> 
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" activeclassName="active" to="/pages/about-us">About US
                                        </NavLink>                                        
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact US</a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" activeclassName="active" to="/pages/term-conditions">Term & Conditions
                                        </NavLink>                                        
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        
    )
}
export default NavBar;