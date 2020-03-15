import React from 'react';
import {Link} from "react-router-dom";
import Logo from "./logo.png";

function Search(){
    console.log(process.env);
    return(
        <div class="head-logo-block">
            <div className="container">
                <div className="row">
                <div className="col-12 d-md-flex justify-content-between">
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                        </div>
                    <div className="search-block d-md-flex">
                    <div className="search-inp-block d-flex w-100 align-items-center">
                        <select className="form-control">
                        <option value="">Fashion</option>
                        <option value="">Fashion</option>
                        </select>
                        <div className="search-inp w-100">
                        <input type="text" className="form-control" placeholder="I'm looking for..." />
                        </div>
                    </div>
                    <div className="search-btn-block d-flex align-items-center justify-content-center">
                        <button className="btn btn-custom">Search</button>
                        <a href="#!" className="advance-btn">Advance</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default Search;