import * as React from "react"

const Experience = () => {
    return (
        <section id="experience" className="full-width experience">
            <div className="page-width">
                    {/* <svg id="experience-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" className="animate-svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style="enable-background:new 0 0 43.1 85.9;">
                        <path stroke-linecap="round" stroke-linejoin="round" className="svg-path animated draw"
                        d="M 45 19 C 30 17, 15 10, -30 40"
                        />
                        <path stroke-linecap="round" stroke-linejoin="round" className="svg-path animated draw tail1"
                        d="M -30 40 -26 30"     
                        />
                        <path stroke-linecap="round" stroke-linejoin="round" className="svg-path animated draw tail2"
                        d="M -30 40 -22 44"     
                        />
                    </svg> */}
                <h2>Experience</h2>
                <div className="columns-container">
                    <div className="left">
                        <p>I am currently employed as a web developer at Mainstreethost in Buffalo, NY where I build Wordpress sites for a variety of different clients and industries. I also recently finished an immersive full stack web development program at The Flatiron School through the Manhattan, NYC campus so I could become a more well rounded developer. You can see my full experience below.</p>
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
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
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