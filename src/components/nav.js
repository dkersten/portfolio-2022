import * as React from "react"

const Nav = () => {

    return (
        <nav>
            <div className="page-width">
                <div className="logo-container">
                    <div className="logo">
                        <span>&lt;/dk&gt;</span>
                    </div>
                    <div className="logo-bg"></div>
                </div>
                <div className="nav-menu-container">
                    <button for="menu" tabindex="0" id="menu-toggle" className="menu-toggle" aria-expanded="false">Menu</button>
                    <ul id="menu" className="hide">
                        <li id="close-mobile-menu"><button for="menu">Close Menu</button></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#previous-work">Projects</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav