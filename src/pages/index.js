import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Header from "../components/header";

const IndexPage = () => (
  <Layout className="layout">
    <SEO title="Home" keywords={[`Grace Jane`, `Singer`, `Song Writter`]} />
    <Header />
    <h2 className="subTitle">Latest Release</h2>
    <div className="latestWork">
      <h3><a target="_blank" rel="noopener noreferrer" href="https://ampl.ink/gy1X8" >
        Oceans.
      </a></h3>
      <a target="_blank" rel="noopener noreferrer" href="https://ampl.ink/gy1X8" >
        <img alt="Album cover for the single oceans by Grace Jane" src={require("../images/oceans.jpg")}/>
      </a>
    </div>
    <h2 className="subTitle">Upcoming Gigs</h2>
    <div className="gigSetup">
      <h3>Venue</h3>
      <h3 id="gig">Date</h3>
      <h3>Tickets</h3>
    </div>
    <div className="upcomingGigs">
      <h3>Boileroom, Guildford, UK</h3>
      <h3 id="gig">26th September 2018</h3>
      <span><a href="https://www.songkick.com/concerts/35183634-grace-jane-at-boileroom">Tickets</a></span>
    </div>
    

  </Layout>
)

export default IndexPage
