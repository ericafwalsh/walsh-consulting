import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// main green: 	#04733c
// black: #040404
// light green: #045c40
// dark green: #042420
// navy: #040424

const Header = ({ siteTitle }) => (
  <NavBar>
    <Wrapper>
      <Name>
        <SLink to="/">{siteTitle}</SLink>
      </Name>
      <NavItems>
        <NavItem>What We Do</NavItem>
        <NavItem>Meet the Team</NavItem>
        <NavItem>Testimonials</NavItem>
        <NavItem>Contact Us</NavItem>
      </NavItems>
    </Wrapper>
  </NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const NavBar = styled.header`
  margin-bottom: 1.45rem;
  border-bottom: #040424 2px;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const Name = styled.h1`
  margin: 0;
`

const SLink = styled(Link)`
  color: #040404;
  text-decoration: none;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const NavItem = styled.div`
  color: #040404;
  padding-left: 20px;
  flex-wrap: nowrap;
`

export default Header
