import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { theme, device } from "../theme";
import { scrollTo } from "../components/utils/scroll";

const renderHamburgerIcon = () => {
  return (
    <svg viewBox="0 0 100 80" width="35" height="35">
      <rect width="100" height="13"></rect>
      <rect y="30" width="100" height="13"></rect>
      <rect y="60" width="100" height="13"></rect>
    </svg>
  );
};

const renderNavItems = () => {
  return (
    <>
      <NavItem onClick={() => scrollTo("what-we-do")}>What We Do</NavItem>
      <NavItem onClick={() => scrollTo("meet-the-team")}>Meet the Team</NavItem>
      <NavItem onClick={() => scrollTo("testimonials")}>Testimonials</NavItem>
      <NavItem onClick={() => scrollTo("contact-us")}>Contact Us</NavItem>
    </>
  );
};

const Header = ({ siteTitle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <NavBar>
      <Wrapper>
        <Name onClick={() => dropdownVisible && setDropdownVisible(false)}>
          <SLink to="/" onClick={() => scrollTo("hero")}>
            {siteTitle}
          </SLink>
        </Name>
        <NavItems>{renderNavItems()}</NavItems>
        <Hamburger onClick={() => setDropdownVisible(!dropdownVisible)}>
          {renderHamburgerIcon()}
          {dropdownVisible && (
            <Dropdown className="dropdown">{renderNavItems()}</Dropdown>
          )}
        </Hamburger>
      </Wrapper>
    </NavBar>
  );
};

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

const Name = styled.p`
  margin: 0;
  font-family: Lora, serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;

  @media ${device.mobileM} {
    font-size: 34px;
  }

  @media ${device.laptop} {
    font-size: 41px;
  }
`;

const SLink = styled(Link)`
  color: #040404;
  text-decoration: none;
`;

const NavItems = styled.div`
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 16px;
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

const NavItem = styled.div`
  color: #040404;
  padding-left: 20px;
  flex-wrap: nowrap;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: flex;
  align-self: flex-end;
  margin-left: 16px;
  cursor: pointer;
  overflow: hidden;

  @media ${device.tablet} {
    display: none;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  top 68px;
  padding: 10px 0;
`;

export default Header;
