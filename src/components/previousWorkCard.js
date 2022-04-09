import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PreviousWorkCard = (props) => {
    let {
        projectName: name, 
        projectUrl: url, 
        resourceImageDescription: altTag,
        projectScreenshot: image,
        projectDescription: description
    } = props

    console.log(props)
    const img = getImage(image)

    return(
        <div className="carousel-cell">
            <GatsbyImage 
                image={img}
                alt={altTag}
            />
            <h3><a target="_blank" rel="noreferrer" href={url} aria-label={"Visit " + name + " (Opens in new tab)"}>{name}</a></h3>
            <p>{description.projectDescription}</p>
        </div>
    )
}

export default PreviousWorkCard