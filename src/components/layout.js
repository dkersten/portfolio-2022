/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from 'react-helmet'
import Img from '../images/open-graph-img.png'

const Layout = ({ children }) => {

  return (
    <>
    <Helmet>
      <title>Dan Kersten's Portfolio</title>
      <meta name='description' content="Hi, I'm Dan! I'm currently focused on front end development, design, and accessibility. I also dabble in back end development." />
      <meta property="og:title" content="Dan Kersten's Portfolio" />
      <meta property="og:site_name" content="Daniel Kersten IO" />
      <meta property="og:url" content="https://danielkersten.io" />
      <meta property="og:description" content="Hi, I'm Dan! I'm currently focused on front end development, design, and accessibility. I also dabble in back end development." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={Img} />
    </Helmet>
    <div>
    {children}
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
