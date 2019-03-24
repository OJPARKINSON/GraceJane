import PropTypes from "prop-types"
import React from "react"
import '../components/layout'


const Header = () => (
  <header>
    <div className="headerContainer">
      <h1>Grace Jane Music</h1>
      <h2 id="setter"><a href="#gigs">Gigs</a></h2>
      <h2><a href="#a"> Social</a></h2>
      <h2><a href="#a"> About</a></h2>
      <h2><a href="#m">Music</a></h2>
    </div>
    
   
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
