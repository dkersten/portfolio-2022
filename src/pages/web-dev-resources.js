import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import WebResourcesHeader from "../components/resources-header"
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
            fontsResources: allContentfulDevResources(filter: {resourceCategory:{eq: "fonts"}}) {
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
            imagesResources: allContentfulDevResources(filter: {resourceCategory:{eq: "img"}}) {
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
    
    const sectionJSX = () => {
        const ElementArr = []
        for (const [key, value] of Object.entries(data)) {

            // remove "Resources" from query name for Section Title
            const sectionName = key.replace('Resources', '')

            // capitalize Section Title's first character
            const capitalizedSectionName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1)

            ElementArr.push(
                <section key={sectionName} id={sectionName} className="resource-section">
                    <div className="page-width">
                        <h2>{capitalizedSectionName}</h2>
                        <div className="flex-container">
                            {
                                value.edges.map(resource =>
                                    <ResourceCard
                                        key={resource.node.id}
                                        {...resource.node}
                                    />
                                )
                            }
                        </div>
                    </div>
                </section>
            )
        }

        return ElementArr
    }

    return(
        <Layout>
            <div className="dev-resources">
                <WebResourcesHeader />
                <main>
                    { sectionJSX() }
                </main>
            </div>
        </Layout>
    )
}

export default WebDevResources