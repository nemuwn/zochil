import React from 'react'
import './topnav_style.css'


function Topnav() {
    return (
        <header id="topnav" classNameNAme="navbar">
            <div className="nav-container">
                <a className="logo" href="#">
                <img src="https://zochil.mn/static/media/logo-light.2ceff53b.png" height = "40"/>
                </a>

                <ul className="nav_menu">
                    <li>
                        <a href="#">Borluulah</a>
                    </li>
                    <li>
                        <a href="#">Avtomatjuulah</a>
                    </li>
                    <li>
                        <a href="#">Zuvlguu avah</a>
                    </li>
                    <li>
                        <a href="#">Holbogdoh</a>
                    </li>                    
                </ul>


                <ul className="social">
                    <li>
                        <a href="https://www.facebook.com/" className="btn btn-icon btn-primary me-1">
                            <i className=""></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" className="btn btn-icon btn-primary me-1">
                            <i className=""></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/" className="btn btn-icon btn-primary me-1">
                            <i className=""></i>
                        </a>
                    </li>
                </ul>

            </div>
            
            
        </header>
    )
}

export default Topnav
