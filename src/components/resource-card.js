import * as React from "react"

const ResourceCard = (props) => {
    let {
        resourceName: name,
        resourceUrl: url,
        resourceAbbreviation: resourceAbbreviation,
        resourceDescription: description
    } = props

    return (
        <a target="_blank" rel="noreferrer" href={url} aria-label={"Visit " + name + " (Opens in new tab)"}>
            <div className="resource-card">
                <div className="initials-container">
                    <span>{resourceAbbreviation}</span>
                </div>
                <div className="info-container">
                    <h3>{name}</h3>
                    <p>{description.resourceDescription}</p>
                </div>
            </div>
        </a>
    )
}

export default ResourceCard