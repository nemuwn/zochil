import React from 'react'
import "./navbar_style.css"

function Navbar_social () {
    return (
        <div className="nav_social">
            <ul>
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
    )
}

export default Navbar_social;