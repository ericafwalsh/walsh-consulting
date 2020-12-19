import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { theme, device } from "../theme";
import { scrollTo } from "../components/utils/scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const renderNavItems = () => {
  return (
    <>
      <NavItem onClick={() => scrollTo("what-we-do", "center", true, 95)}>
        What We Do
      </NavItem>
      <Divider />
      <NavItem onClick={() => scrollTo("meet-the-team", "center", true, 110)}>
        Meet the Team
      </NavItem>
      <Divider />
      <NavItem onClick={() => scrollTo("testimonials", "center", true, 110)}>
        Testimonials
      </NavItem>
      <Divider />
      <ContactNavItem
        onClick={() => scrollTo("contact-us", "center", true, 110)}
      >
        Contact Us
      </ContactNavItem>
      <Divider />
      <IconWrapper>
        <MobileLink href="mailto:tim@walsh.consulting">
          <ContactInfo>Tim@walsh.consulting</ContactInfo>
        </MobileLink>
        <MobileLink href="tel:+9173042597">
          <ContactInfo>(917) 304-2597</ContactInfo>
        </MobileLink>
      </IconWrapper>
    </>
  );
};

const Header = ({ siteTitle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <NavBar>
      <Wrapper>
        <Name onClick={() => dropdownVisible && setDropdownVisible(false)}>
          <SLink to="/" onClick={() => scrollTo("hero", "center", false)}>
            {siteTitle}
          </SLink>
        </Name>
        <NavItems>{renderNavItems()}</NavItems>
        <Hamburger onClick={() => setDropdownVisible(!dropdownVisible)}>
          <FontAwesomeIcon size="2x" icon={faBars} color="#040404" />
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
  margin-bottom: 20px;
  border-bottom: 2px solid ${theme.colors.navy};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  height: 80px;

  @media ${device.tablet} {
    height: 95px;
  }
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

  display: none;

  @media ${device.mobileM} {
    font-size: 34px;
  }

  @media ${device.laptop} {
    font-size: 41px;
  }

  @media ${device.mobileS} {
    display: block;
  }
`;

const SLink = styled(Link)`
  color: ${theme.colors.primaryBlack};
  text-decoration: none;
`;

const NavItems = styled.div`
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 20px;

  @media ${device.tablet} {
    display: flex;
  }
`;

const NavItem = styled.div`
  color: white;
  padding-left: 20px;
  flex-wrap: nowrap;
  cursor: pointer;

  @media ${device.tablet} {
    color: ${theme.colors.primaryBlack};
  }
`;

const Hamburger = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 16px;
  cursor: pointer;
  overflow: hidden;

  @media ${device.tablet} {
    display: none;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: ${theme.colors.primaryBlack};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  top 80px;
  padding: 10px 0;
  width: 100%;
  height: auto;
  font-size: 28px;
  line-height: 100px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

const Divider = styled.div`
  border: 0.5px solid ${theme.colors.primaryGreen};
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: block;
  padding: 20px;

  @media ${device.tablet} {
    display: none;
  }
`;

const MobileLink = styled.a`
  line-height: 30px;
  font-size: 18px;
  color: white;
  &:active {
    color: ${theme.colors.primaryGreen};
  }
`;

const ContactInfo = styled.div``;

const ContactNavItem = styled(NavItem)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export default Header;
