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
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
    {/* <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Testing CI/CD pipeline, v2</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
