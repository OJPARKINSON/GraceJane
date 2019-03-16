import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Header from "../components/header";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Grace Jane`, `application`, `react`]} />
    <Header />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
