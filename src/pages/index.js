import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = ({data}) => (
  <Layout className="layout">
    <SEO title="Home" keywords={[`Grace Jane`, `Singer`, `Song Writter`]} />
    <Header />
    <h2 className="subTitle">Latest Release</h2>
    <div className="latestWork">
      <h3>
        <a target="_blank" rel="noopener noreferrer" href="https://ampl.ink/gy1X8">
          Oceans.
        </a>
      </h3>
      <a target="_blank" rel="noopener noreferrer" href="https://ampl.ink/gy1X8" >
        <img className="oceanImg" src={require('../images/oceans.jpg')} alt="Album cover for the single oceans by Grace Jane"/>
      </a>
    </div>
    <div className="buttonContainer">
      <a target="_blank" rel="noopener noreferrer" href="https://ampl.ink/gy1X8" className="fancy-btn">Listen here</a> <br/>
    </div>
    <h2 className="subTitle">Upcoming Gigs</h2>
    <div className="upcomingGigs">
      <h3>SEP 26th 2018</h3>
      <div>
        <h3>Boileroom </h3>
        <h3>Guildford, UK</h3>
      </div>
      <span id="gig"><a href="https://www.songkick.com/concerts/35183634-grace-jane-at-boileroom">Tickets</a></span>
    </div>
    <div className="upcomingGigs" id="gigs">
      <h3>SEP 26th 2018</h3>
      <div>
        <h3>Boileroom </h3>
        <h3>Guildford, UK</h3>
      </div>
      <span id="gig"><a href="https://www.songkick.com/concerts/35183634-grace-jane-at-boileroom">Tickets</a></span>
    </div>
  
  </Layout>
)

export default IndexPage

