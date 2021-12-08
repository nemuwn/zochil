import React from 'react'
import Navbar_logo from './navbar_logo'
import Navbar_menu from './navbar_menu'
import Navbar_social from './navbar_social'
import './navbar_style.css'


function Navbar() {
    return (
        <div classNameNAme="navbar">
            <div className="container">
                <Navbar_logo />
                <Navbar_menu />
                <Navbar_social />
            </div>
        </div>
    )
}

export default Navbar;
