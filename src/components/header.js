import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "../theme/theme"

const HeaderWrapper = styled.header`
  background: ${theme.color.brandBlue};
  margin-bottom: 1.45rem;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>Rörvik Resort</h1>
      <h1>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
