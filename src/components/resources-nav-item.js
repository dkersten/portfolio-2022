import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ResourceNavItem = (props) => {
    const {
        name: name,
        img: img
    } = props

    const anchor = name.toLowerCase()
    const image = getImage(props.img)

    return(
        <Link to={"#" + anchor}>
            <div className="icon-container">
                <GatsbyImage image={props.img} alt="" />
            </div>
            <span>{name}</span>
        </Link>
    )
}

export default ResourceNavItem