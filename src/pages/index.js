import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Gig from "../components/gig";
import Toolbar from "../components/toolbar";
import ReactPlayer from "react-player";

class IndexPage extends Component {
  state = {
   navOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {navOpen: !prevState.navOpen};
    });
  };

  render() {
    let nav;
    if (this.state.navOpen) {
      nav = <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />;
    }
    return (
      <Layout className="layout">
        <SEO title="Home" keywords={[`Grace Jane`, `Singer`, `Song Writter`]} />
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        {nav}
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
        <div className="parallaxSpacer">
        </div>
        <h2 className="subTitle">Upcoming Gigs</h2>
        <div className="gigSetup">
        {/* Use an svg/gif/png wave or ocean and make it into a favicon as well */}
          <ReactPlayer className="gigImg" src={require('../images/waves2.gif')} playing />
          <div className="gigsContainer">
          <h3 id="gigs">Live Shows</h3>
          <Gig dateNum="03" weekDay="MON" month="JAN" location="Crash Records - Leeds, UK" />
          <Gig dateNum="12" weekDay="THUR" month="APR" location="Church - Leeds, UK" />
          <Gig dateNum="10" weekDay="SAT" month="MAY" location="O2 Academy - Leeds, UK" />
        </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

