import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { theme } from "../theme";

import { scrollTo } from "../components/utils/scroll";

const Header = ({ siteTitle }) => (
  <NavBar>
    <Wrapper>
      <Name>
        <SLink to="/" onClick={() => scrollTo("hero")}>
          {siteTitle}
        </SLink>
      </Name>
      <NavItems>
        <NavItem onClick={() => scrollTo("what-we-do")}>What We Do</NavItem>
        <NavItem onClick={() => scrollTo("meet-the-team")}>
          Meet the Team
        </NavItem>
        <NavItem onClick={() => scrollTo("testimonials")}>Testimonials</NavItem>
        <NavItem onClick={() => scrollTo("contact-us")}>Contact Us</NavItem>
      </NavItems>
    </Wrapper>
  </NavBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const NavBar = styled.header`
  margin-bottom: 1.45rem;
  border-bottom: 2px solid ${theme.colors.navy};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.h1`
  margin: 0;
  font-family: Lora, serif;
  font-weight: 400;
`;

const SLink = styled(Link)`
  color: #040404;
  text-decoration: none;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

const NavItem = styled.div`
  color: #040404;
  padding-left: 20px;
  flex-wrap: nowrap;
  cursor: pointer;
`;

export default Header;
