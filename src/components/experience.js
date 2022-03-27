import React, { useEffect } from "react"
import Vivus from "vivus"
import 'font-awesome/css/font-awesome.min.css'

const Experience = () => {
    useEffect(() => {
        new Vivus('experience-svg', {
            type: 'oneByOne', 
            duration: 50,
            animTimingFunction: Vivus.LINEAR
        });
    });

    return (
        <section id="experience" className="full-width experience">
            <div className="page-width">
                    <svg id="experience-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" className="animate-svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9">
                        <path strokeLinecap="round" strokeLinejoin="round" className="svg-path animated draw"
                        d="M 45 19 C 30 17, 15 10, -30 40"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" className="svg-path animated draw tail1"
                        d="M -30 40 -26 30"     
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" className="svg-path animated draw tail2"
                        d="M -30 40 -22 44"     
                        />
                    </svg>
                <h2>Experience</h2>
                <div className="columns-container">
                    <div className="left">
                        <p>I am currently employed as a Front End Engineer at Airtank, working on a variety of projects and platforms, ranging from our in-house ziftrshop ecommerce platform, to Vue/React and static site generators, to WordPress. Previously I worked as a web developer at Mainstreethost. You can see my full experience below.</p>
                        <div className="btn-container">
                            <a target="_blank" href="src/assets/images/resume-september-2021.pdf">My Resume</a>
                        </div>
                    </div>
                    <div className="right">
                        <p>I have experience with the following technologies:
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Vue</li>
                            <li>Cypress Testing</li>
                            <li>CMS's</li>
                            <li>Gatsby/Gridsome</li>
                            <li>Express</li>
                            <li>PHP</li>
                            <li>WordPress</li>
                            <li>And more!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience