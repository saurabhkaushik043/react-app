import React from 'react';
import TopHeader from '../components/header/TopHeader';
import Search from '../components/header/Search';
import NavBar from '../components/header/NavBar';
import Slider from '../components/home/Slider';
import Category from '../components/home/Category';
import Advertisement from '../components/home/Advertisement';
import Footer from '../components/footer/Footer';

function Layout(){
    return(
        <>
        <header>
            <TopHeader />
            <Search />
            <NavBar />
        </header>
        <div class="middle-section">
            <Slider />
        </div>
        <div class="top-category-section marB70">
            <Category />
        </div>
        <div class="advertisement-section marB70">
            <Advertisement />
        </div>
        <Footer />
        </>
    )
}
export default Layout;