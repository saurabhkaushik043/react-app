import React from 'react';
import {
    NavLink
  } from "react-router-dom";

function CmsPagesHeader(props){
    const slug = props.slug;
    let pageTitle   =   '';
    if (slug=='about-us') {
    pageTitle = "About Us";
    } else if (slug=='term-conditions') {
    pageTitle = "Term & Conditions";
    }
    return(               
        <div className="row">
            <div className="col-12">
                <div className="inner-page-banner d-flex justify-content-center align-items-center">
                    <div className="inner-banner-caption">
                        <h1>{pageTitle}</h1>
                        <div className="breadcrumb-block">
                            <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">{pageTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default CmsPagesHeader;