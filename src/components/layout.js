/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => (
      <>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a target="_blank" rel="noopener noreferrer" href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
          </footer>
      </>
    )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
