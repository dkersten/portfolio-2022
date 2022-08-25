import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// styling
import "../assets/component-styling/dribbble-inspiration/header.scss";
import "../assets/component-styling/dribbble-inspiration/main.scss";
import DribbbleCard from "../components/dribbble-card";

const DribbblePage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulDribbbleInspiration {
                edges {
                  node {
                    dribbbleAuthor
                    dribbbleImageUrl
                    dribbbleLinkUrl
                    dribbbleName
                    id
                  }
                }
            }
        }
    `)
    
    const dribbbles = data.allContentfulDribbbleInspiration.edges

    return(
        <div>
            <header className="dribbble">
                <h1>Dribbble Collection</h1>
            </header>
            <main className="dribbble">
                <div className="description">
                    <p>
                        A single place where I can find all the Dribbble shots that I have taken inspiration from, whether that be a component, particular layout, color scheme, or an the design in general. Please be sure to click on the card to view the original shot and support the creator!
                    </p>
                </div>
                <div className="dribbble-card-container">
                    {
                        dribbbles.map(dribbble =>
                            <DribbbleCard
                                key={dribbble.node.id}
                                {...dribbble.node}
                            />
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default DribbblePage