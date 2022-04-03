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
            designResources: allContentfulDevResources(filter: {resourceCategory:{eq: "design"}}) {
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
            fontResources: allContentfulDevResources(filter: {resourceCategory:{eq: "fonts"}}) {
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
            imageResources: allContentfulDevResources(filter: {resourceCategory:{eq: "img"}}) {
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
            inspirationResources: allContentfulDevResources(filter: {resourceCategory:{eq: "inspiration"}}) {
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
            learningResources: allContentfulDevResources(filter: {resourceCategory:{eq: "learning"}}) {
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
            miscellaneousResources: allContentfulDevResources(filter: {resourceCategory:{eq: "misc"}}) {
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
            toolingResources: allContentfulDevResources(filter: {resourceCategory:{eq: "tooling"}}) {
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
    const designData = data.designResources.edges
    const fontsData = data.fontResources.edges
    const imagesData = data.imageResources.edges
    const inspirationData = data.inspirationResources.edges
    const learningData = data.learningResources.edges
    const miscellaneousData = data.miscellaneousResources.edges
    const toolingData = data.toolingResources.edges

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
                    <section className="resource-section">
                        <div className="page-width">
                            <h2>Design</h2>
                            <div className="flex-container">
                                {
                                    designData.map(resource =>
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
                            <h2>Fonts</h2>
                            <div className="flex-container">
                                {
                                    fontsData.map(resource =>
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
                            <h2>Images</h2>
                            <div className="flex-container">
                                {
                                    imagesData.map(resource =>
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
                            <h2>Inspiration</h2>
                            <div className="flex-container">
                                {
                                    inspirationData.map(resource =>
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
                            <h2>Learning</h2>
                            <div className="flex-container">
                                {
                                    learningData.map(resource =>
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
                            <h2>Miscellaneous</h2>
                            <div className="flex-container">
                                {
                                    miscellaneousData.map(resource =>
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
                            <h2>Tooling</h2>
                            <div className="flex-container">
                                {
                                    toolingData.map(resource =>
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