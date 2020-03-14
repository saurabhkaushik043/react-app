import React from 'react';

function Category(){
    return(
        <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main-title">
              <h2>Top Categories</h2>
            </div>
          </div>
          <div class="col-12">
            <div class="owl-carousel owl-theme home-top-category-slides">
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/appreals-icon.png"} alt="" />
                  </div>
                  <h3>Apparels & <br />Accessories</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/food-icon.png"} alt="" />
                  </div>
                  <h3>Food & <br />Beverages</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/beauty-icon.png"} alt="" />
                  </div>
                  <h3>Beauty & <br />Wellness</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/education-icon.png"} alt="" />
                  </div>
                  <h3>Education</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/health-icon.png"} alt="" />
                  </div>
                  <h3>Health</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/wedding-icon.png"} alt="" />
                  </div>
                  <h3>Wedding & Events</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/logistic-icon.png"} alt="" />
                  </div>
                  <h3>Logistics <br />Services</h3>
                </div>
              </div>
              <div class="item">
                <div class="top-cat-col">
                  <div class="top-cat-icon">
                    <img src={process.env.PUBLIC_URL+"img/printing-icon.png"} alt="" />
                  </div>
                  <h3>Printing & Stationaries</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}
export default Category;