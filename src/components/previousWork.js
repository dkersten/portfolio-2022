import React, { useEffect } from "react"
import Vivus from "vivus"
import { StaticImage } from "gatsby-plugin-image"
import Flickity from "react-flickity-component"

const PreviousWork = () => {
    useEffect(() => {
        new Vivus('previous-work-svg', {
            type: 'oneByOne', 
            duration: 50,
            animTimingFunction: Vivus.LINEAR
        });
    })

    const flickityOptions = {
        initialIndex: 0,
        freeScroll: true,
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        touchVerticalScroll: false
      }

    return (
        <section id="previous-work" className="previous-work">
            <div className="page-width">
                <svg id="previous-work-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" className="animate-svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" xmlSpace="preserve">
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
                <h2>Previous Work</h2>
            </div>
            <div className="full-width">
                <div className="page-width">
                <Flickity
                    className={"prev-work-carousel group flickity-enabled is-draggable"}
                    elementType={"div"}
                    options={flickityOptions}
                >
                    <div className="carousel-cell">
                        <StaticImage 
                            src="../images/dan.jpeg"
                            alt="Screenshot of the EZ Golf Scorecard UI"
                        />
                        <h3><a target="_blank" rel="noreferrer" href="https://ez-golf-scorecard.herokuapp.com/" aria-label="Visit EZ Golf Scorecard app (Opens in new tab)">EZ Golf Scorecard</a></h3>
                        <p>A full stack, mobile focused golf scorecard app. The front end is built with React and React Router and the back end is built with Ruby on Rails with a Postgresql database. User authentication and authorization is provided by Auth0 and the app is hosted on Heroku. If you don't want to create an account you can find a demo account credentials in the <a aria-label="The github repository for the EZ Golf Scorecard project w/ demo account credentials" href="https://github.com/dkersten/golf-scorecard-frontend-v2" target="_blank" rel="noreferrer">github readme</a>.</p>
                    </div>
                    <div className="carousel-cell">
                        <StaticImage 
                            src="../images/dan.jpeg"
                            alt="Screenshot of the EZ Golf Scorecard UI"
                        />
                        <h3><a target="_blank" rel="noreferrer" href="https://ez-golf-scorecard.herokuapp.com/" aria-label="Visit EZ Golf Scorecard app (Opens in new tab)">EZ Golf Scorecard</a></h3>
                        <p>A full stack, mobile focused golf scorecard app. The front end is built with React and React Router and the back end is built with Ruby on Rails with a Postgresql database. User authentication and authorization is provided by Auth0 and the app is hosted on Heroku. If you don't want to create an account you can find a demo account credentials in the <a aria-label="The github repository for the EZ Golf Scorecard project w/ demo account credentials" href="https://github.com/dkersten/golf-scorecard-frontend-v2" target="_blank" rel="noreferrer">github readme</a>.</p>
                    </div>
                    <div className="carousel-cell">
                        <StaticImage 
                            src="../images/dan.jpeg"
                            alt="Screenshot of the EZ Golf Scorecard UI"
                        />
                        <h3><a target="_blank" rel="noreferrer" href="https://ez-golf-scorecard.herokuapp.com/" aria-label="Visit EZ Golf Scorecard app (Opens in new tab)">EZ Golf Scorecard</a></h3>
                        <p>A full stack, mobile focused golf scorecard app. The front end is built with React and React Router and the back end is built with Ruby on Rails with a Postgresql database. User authentication and authorization is provided by Auth0 and the app is hosted on Heroku. If you don't want to create an account you can find a demo account credentials in the <a aria-label="The github repository for the EZ Golf Scorecard project w/ demo account credentials" href="https://github.com/dkersten/golf-scorecard-frontend-v2" target="_blank" rel="noreferrer">github readme</a>.</p>
                    </div>
                    <div className="carousel-cell">
                        <StaticImage 
                            src="../images/dan.jpeg"
                            alt="Screenshot of the EZ Golf Scorecard UI"
                        />
                        <h3><a target="_blank" rel="noreferrer" href="https://ez-golf-scorecard.herokuapp.com/" aria-label="Visit EZ Golf Scorecard app (Opens in new tab)">EZ Golf Scorecard</a></h3>
                        <p>A full stack, mobile focused golf scorecard app. The front end is built with React and React Router and the back end is built with Ruby on Rails with a Postgresql database. User authentication and authorization is provided by Auth0 and the app is hosted on Heroku. If you don't want to create an account you can find a demo account credentials in the <a aria-label="The github repository for the EZ Golf Scorecard project w/ demo account credentials" href="https://github.com/dkersten/golf-scorecard-frontend-v2" target="_blank" rel="noreferrer">github readme</a>.</p>
                    </div>
                </Flickity>
                </div>
            </div>
        </section>
    )
}

export default PreviousWork