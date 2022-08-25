import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
    return (
        <section className="full-width banner">
            <div className="page-width">
                <div className="banner-cta">
                    <h1>Web Developer & Designer</h1>
                    <p>
                        Hi, I'm Dan! I'm currently focused on front end development, design, and accessibility. I also dabble in back end development.
                    </p>
                    <StaticImage 
                        src="../images/brackets-blue-primary.png"
                        alt=""
                        className="icon1"
                    />
                    <StaticImage 
                        src="../images/brackets-green-primary.png"
                        alt=""
                        className="icon2"
                    />
                    <StaticImage 
                        src="../images/tags-blue-primary.png"
                        alt=""
                        className="icon3"
                    />
                    <StaticImage 
                        src="../images/tags-green-primary.png"
                        alt=""
                        className="icon4"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner