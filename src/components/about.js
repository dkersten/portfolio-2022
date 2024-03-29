import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    return (
        <section id="about" className="full-width about">
            <div className="page-width columns-container">
                <div className="left">
                    <p>
                        I love designing and building clean and responsive sites. Coding and web development started as a hobby and grew into my passion and career. I currently focus on front end development.
                    </p>
                    <p>
                        When I'm not developing I enjoy playing golf, soccer, and hockey. If I'm not doing one of those, chances are I'm watching Arrested Development or 30 Rock. I am a Sabres and Liverpool FC fan. I'm also an avid traveler. 
                    </p>
                </div>
                <div className="right">
                    <StaticImage 
                        src="../images/dan.jpeg"
                        alt="Dan Kersten on the Pier in Santa Monica, California"
                        formats={["auto", "webp", "avif"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default About