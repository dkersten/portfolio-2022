import React, { useEffect } from "react"
import Vivus from "vivus"
import Flickity from "react-flickity-component"
import { useStaticQuery, graphql } from "gatsby"

import PreviousWorkCard from "./previousWorkCard"

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

    const data = useStaticQuery(graphql`
        query PreviousProjectsQuery {
            allContentfulProject(sort: {order: DESC, fields: updatedAt}) {
                edges {
                  node {
                    id
                    projectName
                    projectUrl
                    resourceImageDescription
                    projectScreenshot {
                      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                    }
                    projectDescription {
                      projectDescription
                    }
                  }
                }
              }
        }
    `)

    const projectsArr = data.allContentfulProject.edges
    
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
                    {
                        projectsArr.map(project =>
                            <PreviousWorkCard
                                key={project.node.id}
                                {...project.node}
                            />
                        )
                    }
                </Flickity>
                </div>
            </div>
        </section>
    )
}

export default PreviousWork