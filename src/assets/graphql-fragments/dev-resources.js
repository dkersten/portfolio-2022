import { graphql } from "gatsby"

export const resourcesQuerty = graphql`
    fragment webResourcesFragment on ContentfulDevResources {
        resourceName
        resourceUrl
        resourceAbbreviation
        resourceCategory
        resourceDescription {
            resourceDescription
        }
        id
    }
`