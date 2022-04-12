import * as React from "react"

const DribbbleCard = (props) => {
    let {
      dribbbleAuthor: author,
      dribbbleImageUrl: image,
      dribbbleLinkUrl: link,
      dribbbleName: name
    } = props
    
    return(
        <a href={link} target="_blank" rel="noreferrer" aria-label={"Visit " + name + " (Opens in new tab)"} className="dribbble-card">
            <img 
                src={image}
                alt="Test"
            />
            <div className="inner-container">
                <h2>{name}</h2>
                <span>By: {author}</span>
            </div>
        </a>
    )
}

export default DribbbleCard