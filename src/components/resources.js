import { Link } from "gatsby";
import React, { useEffect } from "react"
import Vivus from "vivus"

const Resources = () => {
    useEffect(() => {
        new Vivus('resources-outline', {
            type: 'oneByOne', 
            duration: 50,
            animTimingFunction: Vivus.LINEAR
        });
    })
    return (
        <section id="resources" className="resources">
        <div className="full-width">
            <div className="page-width">
                <div className="center-container">
                    <svg id="resources-outline" className="svg-outline" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="75.64571428571428 66.00000000000001 254.99999999999994 94.60000000000004" width="270" height="96.8"><defs><path strokeLinecap="round" strokeLinejoin="round" d="M177.65 75.88C225.54 75.4 256.11 76.36 269.37 78.75C289.25 82.33 337.17 92.72 325.97 113.14C314.78 133.56 283.61 158.64 229.6 157.57C175.59 156.49 96.68 163.3 79.48 118.87C68.02 89.26 110.29 72.3 206.31 68" id="j3AIRkdB7R"></path></defs><g><g><g><use xlinkHref="#j3AIRkdB7R" opacity="1" fillOpacity="0" strokeOpacity="1"></use></g></g></g></svg>
                    <h2>Resources</h2>
                    <p>Various tools, resources, articles, and documentation I've come across while developing that I've found helpful and/or incorporated into my workflow.</p>
                    <div className="btn-container">
                        {/* <a target="_blank" rel="noreferrer" href="https://danielkerstenioresources.gatsbyjs.io/">See Resources</a> */}
                        <Link to="/web-dev-resources">See Resources</Link>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    )
}

export default Resources