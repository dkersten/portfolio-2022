import * as React from "react"
// import ResourceNavItem from "./resources-nav-item"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const WebResourcesHeader = () => {
    return(
        <header>
            <div className="page-width">
                <h1>Web Dev Resources</h1>
                <p>A collection of various tools, resources, articles, and documentation I've come across while developing that I've found helpful and/or incorporated into my workflow.</p>
                <nav>
                <Link to="#accessibility" aria-label="Navigate to the Accessibility section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/accessibility-nav-icon.png" alt="" />
                    </div>
                    <span>Accessibility</span>
                </Link>
                <Link to="#color" aria-label="Navigate to the Color section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/color-nav-icon.png" alt="" />
                    </div>
                    <span>Color</span>
                </Link>
                <Link to="#design" aria-label="Navigate to the Design section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/design-nav-icon.png" alt="" />
                    </div>
                    <span>Design</span>
                </Link>
                <Link to="#fonts" aria-label="Navigate to the Fonts section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/font-nav-icon.png" alt="" />
                    </div>
                    <span>Fonts</span>
                </Link>
                <Link to="#images" aria-label="Navigate to the Images section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/images-nav-icon.png" alt="" />
                    </div>
                    <span>Images</span>
                </Link>
                <Link to="#inspiration" aria-label="Navigate to the Inspiration section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/inspiration-nav-icon.png" alt="" />
                    </div>
                    <span>Inspiration</span>
                </Link>
                <Link to="#learning" aria-label="Navigate to the Learning section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/learning-nav-icon.png" alt="" />
                    </div>
                    <span>Learning</span>
                </Link>
                <Link to="#miscellaneous" aria-label="Navigate to the Miscellaneous section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/miscellaneous-nav-icon.png" alt="" />
                    </div>
                    <span>Miscellaneous</span>
                </Link>
                <Link to="#tooling" aria-label="Navigate to the Tooling section">
                    <div className="icon-container">
                        <StaticImage src="../images/web-resource-icons/tooling-nav-icon.png" alt="" />
                    </div>
                    <span>Tooling</span>
                </Link>
                    {/* <ResourceNavItem
                        name={"Accessibility"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Color"}
                        img={"../images/web-resource-icons/color-nav-icon.png"}
                    />
                    <ResourceNavItem
                        name={"Design"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Fonts"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Images"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Inspiration"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Learning"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Miscellaneous"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    />
                    <ResourceNavItem
                        name={"Tooling"}
                        img={"https://www.masters.com/assets/images/nav/masters_logo.png"}
                    /> */}
                </nav>
            </div>
        </header>
    )
}

export default WebResourcesHeader