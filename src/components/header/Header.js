import React from 'react';
import TopHeader from './TopHeader';
import Search from './Search';
import NavBar from './NavBar';
function Header(){
    return(        
        <header>
            <TopHeader />
            <Search />
            <NavBar />
        </header>
    )
}
export default Header;