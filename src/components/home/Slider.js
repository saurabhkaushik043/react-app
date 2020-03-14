import React from 'react';

function Slider(){
    return(
        <div class="main-slide-section marB70">
            <div class="container">
                <div class="row no-gutters">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="home-slide-left d-flex align-items-center">
                    <div class="home-slide-cont-inner">
                        <h1><span>#1 </span>Uganda website for listing local business</h1>
                        <a href="#!" class="btn btn-custom btn-yellow">All Advertisement</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-6 col-12">
                    <div class="home-slide-right">
                    <div class="owl-carousel owl-theme home-main-slides">
                        <div class="item">
                        <div class="main-product-col">
                            <img src={process.env.PUBLIC_URL+"img/main-slide-trans.png"} alt="" />
                            <div class="main-pro-thumb">
                            <img src={process.env.PUBLIC_URL+"img/tv-img.png"} alt="" />
                            </div>
                            <div class="main-pro-btn">
                            <a href="#!" class="btn btn-custom btn-yellow">Electronics Store</a>
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="main-product-col">
                            <img src={process.env.PUBLIC_URL+"img/main-slide-trans.png"} alt="" />
                            <div class="main-pro-thumb">
                            <img src={process.env.PUBLIC_URL+"img/shoes-img.png"} alt="" />
                            </div>
                            <div class="main-pro-btn">
                            <a href="#!" class="btn btn-custom btn-yellow">Shoes Store</a>
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="main-product-col">
                            <img src={process.env.PUBLIC_URL+"img/main-slide-trans.png"} alt="" />
                            <div class="main-pro-thumb">
                            <img src={process.env.PUBLIC_URL+"img/watch-img.png"} alt="" />
                            </div>
                            <div class="main-pro-btn">
                            <a href="#!" class="btn btn-custom btn-yellow">Fashion Store</a>
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="main-product-col">
                            <img src={process.env.PUBLIC_URL+"img/main-slide-trans.png"} alt="" />
                            <div class="main-pro-thumb">
                            <img src={process.env.PUBLIC_URL+"img/tv-img.png"} alt="" />
                            </div>
                            <div class="main-pro-btn">
                            <a href="#!" class="btn btn-custom btn-yellow">Electronics Store</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default Slider;