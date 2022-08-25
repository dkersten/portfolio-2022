import React, {useState} from "react"

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        const menu = document.querySelector("#menu")
        const openMenu = document.querySelector("#menu-toggle")
        
        if (menuOpen) {
            menu.classList.add('hide')
            menu.classList.remove('show')
            openMenu.setAttribute("aria-expanded", false)
            setMenuOpen(!menuOpen)
        } else {
            menu.classList.add('show')
            menu.classList.remove('hide')
            openMenu.setAttribute("aria-expanded", true)
            setMenuOpen(!menuOpen)
        }
    }

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
                    <button htmlFor="menu" tabIndex="0" id="menu-toggle" className="menu-toggle" onClick={toggleMenu} aria-expanded="false">Menu</button>
                    <ul id="menu" className="hide">
                        <li id="close-mobile-menu">
                            <button onClick={toggleMenu} htmlFor="menu">Close Menu</button>
                        </li>

                        <li>
                            {
                                menuOpen 
                                ? <a onClick={toggleMenu} href="#about">About</a> 
                                : <a href="#about">About</a>
                            }
                        </li>

                        <li>
                            {
                                menuOpen 
                                ? <a onClick={toggleMenu} href="#experience">Experience</a> 
                                : <a href="#experience">Experience</a>
                            }
                        </li>

                        <li>
                            {
                                menuOpen 
                                ? <a onClick={toggleMenu} href="#previous-work">Projects</a> 
                                : <a href="#previous-work">Projects</a>
                            }
                        </li>

                        <li>
                            {
                                menuOpen 
                                ? <a onClick={toggleMenu} href="#resources">Resources</a> 
                                : <a href="#resources">Resources</a>
                            }
                        </li>

                        <li>
                            {
                                menuOpen 
                                ? <a onClick={toggleMenu} href="#contact">Contact</a> 
                                : <a href="#contact">Contact</a>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav