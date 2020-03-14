import React from 'react';

function NavBar(){
    return(        
        <div class="head-nav-block">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <a href="javascript:void(0)" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></a>
                        <nav class="navbar navbar-expand-xl navbar-custom">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav text-right">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Motors</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Land</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Properties</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Electronics</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Electricals</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Education</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Entertainment</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Jobs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Other Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Other Services</a>
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