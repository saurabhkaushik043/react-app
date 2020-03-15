import React from 'react';
import App from '../../../App';
import Slider from './Slider';
import Category from './Category';
import Advertisement from './Advertisement';


function Home(){
    return(
        <App>
            <div className="middle-section">
                <Slider />
            </div>
            <div className="top-category-section marB70">
                <Category />
            </div>
            <div className="advertisement-section marB70">
                <Advertisement />
            </div>
        </App>
    )
}
export default Home;