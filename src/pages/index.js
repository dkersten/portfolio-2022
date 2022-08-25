import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import Seo from "../components/seo"

// assets
import "../assets/app.scss"

// components
import Nav from "../components/nav"
import Banner from "../components/banner"
import About from "../components/about"
import Experience from "../components/experience"
import PreviousWork from "../components/previousWork"
import Resources from "../components/resources"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Nav />
    <main className="main-content">
      <Banner />
      <About />
      <Experience />
      <PreviousWork />
      <Resources />
      <Contact />
    </main>
    <footer
      style={{
        marginTop: `2rem`,
        marginBottom: `1rem`,
        textAlign: `center`,
        marginLeft: `auto`,
        marginRight: `auto`,
        fontSize: `14px`
      }}
    >
      © {new Date().getFullYear()}, Built by {`Dan Kersten`}
    </footer>
  </Layout>
)

export default IndexPage
