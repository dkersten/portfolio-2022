import * as React from "react"

const ResourceCard = (props) => {
    let {
        resourceName: name,
        resourceUrl: url,
        resourceAbbreviation: resourceAbbreviation,
        resourceDescription: description
    } = props

    return (
        <div className="resource-card">
            <div className="initials-container">
                <span>{resourceAbbreviation}</span>
            </div>
            <div className="info-container">
                <h3><a target="_blank" rel="noreferrer" href={url} aria-label={"Visit " + name + " (Opens in new tab)"}>{name}</a></h3>
                <p>{description.resourceDescription}</p>
            </div>
        </div>
    )
}

export default ResourceCard