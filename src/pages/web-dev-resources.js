import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import ResourceCard from "../components/resource-card"

// styling
import "../assets/component-styling/web-resources/header.scss"
import "../assets/component-styling/web-resources/main.scss"

const WebDevResources = () => {

    const data = useStaticQuery(graphql`
        query {
            accessibilityResources: allContentfulDevResources(filter: {resourceCategory:{eq: "accessibility"}}) {
                edges {
                    node {
                        resourceName
                        resourceUrl
                        resourceAbbreviation
                        resourceCategory
                        resourceDescription {
                            resourceDescription
                        }
                        id
                    }
                }
            }
            colorResources: allContentfulDevResources(filter: {resourceCategory:{eq: "color"}}) {
                edges {
                    node {
                        resourceName
                        resourceUrl
                        resourceAbbreviation
                        resourceCategory
                        resourceDescription {
                            resourceDescription
                        }
                        id
                    }
                }
            }
        }
    `)
    console.log(data)
    const accessibilityData = data.accessibilityResources.edges
    const colorData = data.colorResources.edges

    return(
        <Layout>
            <div className="dev-resources">
                <header>
                    <div className="page-width">
                        <h1>Web Dev Resources</h1>
                        <p>A collection of various tools, resources, articles, and documentation I've come across while developing that I've found helpful and/or incorporated into my workflow.</p>
                    </div>
                </header>
                <main>
                    <section className="resource-section">
                        <div className="page-width">
                            <h2>Accessibility</h2>
                            <div className="flex-container">
                                {
                                    accessibilityData.map(resource =>
                                        <ResourceCard
                                            key={resource.node.id}
                                            {...resource.node}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </section>
                    <section className="resource-section">
                        <div className="page-width">
                            <h2>Color</h2>
                            <div className="flex-container">
                                {
                                    colorData.map(resource =>
                                        <ResourceCard
                                            key={resource.node.id}
                                            {...resource.node}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}

export default WebDevResources