import React from 'react';

function Advertisement(){
    return(
        <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main-title">
              <h2>Advertisement</h2>
            </div>
          </div>
          <div class="col-12">
            <div class="owl-carousel owl-theme home-advertise-slides d-flex">
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img01.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Food <span>Store</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img02.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Dental <span>Clinic</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img03.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Fashion <span>Store</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img04.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Beauty <span>Salon</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img01.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Food <span>Store</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img02.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Dental <span>Clinic</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img03.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Fashion <span>Store</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div> 
              </div>
              <div class="item">
                <div class="advertise-col">
                  <img src={process.env.PUBLIC_URL+"img/advertise-trans.png"} alt="" />
                  <div class="advertise-thumb">
                    <img src={process.env.PUBLIC_URL+"img/advertise-img04.jpg"} alt="" />
                  </div>
                  <div class="advertise-title-block">
                    <h3>Beauty <span>Salon</span></h3>
                    <span class="advetise-price">$999</span>
                    <a href="#!" class="btn btn-custom advertise-btn">Make Request</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}
export default Advertisement;