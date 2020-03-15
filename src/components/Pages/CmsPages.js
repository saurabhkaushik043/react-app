import React from 'react';
import App from "../../App";
import CmsPagesHeader from './CmsPagesHeader';

function CmsPages(props){
    const { params } = props.match
    const slug = params.slug;
    let pageTitle   =   '';
    if (slug=='about-us') {
    pageTitle = "About Us";
    } else if (slug=='term-conditions') {
    pageTitle = "Term & Conditions";
    }
    return(      
                   
        <App>
            <div className="middle-section cms-page">
                <div className="container">
                    <CmsPagesHeader slug={params.slug} /> 
                    <div className="row">
                        <div className="col-12">
                            <h2><b>{pageTitle}</b></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. </p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.</p>
                            <h3>Why do we use it?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.</p>
                            <h4>Why do we use it?</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.</p>
                        </div>
                    </div>    
                </div>    
            </div>    
        </App>
    )
}
export default CmsPages;