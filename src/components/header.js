import PropTypes from "prop-types"
import React from "react"
import '../components/layout'


const Header = props => (
  <header>
    <div className="headerTitle">
      <h1>Grace Jane Music</h1>
    </div>
    <div className="menu">
      <button onClick={props.drawerClickHandler}>hello</button>
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
