import React, { useState } from "react";
import styled from "styled-components";
import { device, theme } from "../../theme";
import Tooltip from "../utils/tooltip";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("Copy to clipboard");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess("Copied!");
  };

  return (
    <Wrapper id="contact-us">
      <Divider />
      <Container>
        <MobileEmail href="mailto:tim@walsh.consulting">
          <ContactInfo>Tim@walsh.consulting</ContactInfo>
        </MobileEmail>
        <DesktopEmail>
          <Tooltip text={copySuccess} showArrow={false}>
            <Email
              onClick={() => copyToClipboard("Tim@walsh.consulting")}
              onMouseLeave={() => setCopySuccess("Copy to clipboard")}
            >
              Tim@walsh.consulting
            </Email>
          </Tooltip>
        </DesktopEmail>
        <Dot>&#8226;</Dot>
        <DesktopPhoneNumber>
          <ContactInfo>(917) 304-2597</ContactInfo>
        </DesktopPhoneNumber>
        <MobilePhoneNumber href="tel:+1-917-304-2597">
          <ContactInfo>(917) 304-2597</ContactInfo>
        </MobilePhoneNumber>
        <Dot>&#8226;</Dot>
        <ContactInfo>
          © {new Date().getFullYear()}, Walsh Consulting, LLC. All rights
          reserved.
        </ContactInfo>
      </Container>
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px auto 10px;
  max-width: 1180px;
  padding: 10px 1.0875rem;

  @media ${device.tablet} {
    margin: 40px auto;
    padding: 40px 1.0875rem 20px;
  }
`;

const Divider = styled.div`
  border: 0.5px solid #ddd;
  margin: 20px 0;
`;

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ContactInfo = styled.div`
  margin: 6px auto 0;

  @media ${device.tablet} {
    margin: 0 10px;
  }
`;

const Dot = styled(ContactInfo)`
  color: #ddd;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const Email = styled(ContactInfo)`
  cursor: pointer;
`;

const DesktopEmail = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const MobileEmail = styled.a`
  display: block;
  margin: 0 auto;
  color: ${theme.colors.primaryBlack};
  &:active {
    color: ${theme.colors.primaryGreen};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const DesktopPhoneNumber = styled(ContactInfo)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const MobilePhoneNumber = styled.a`
  display: block;
  margin: 0 auto;
  color: ${theme.colors.primaryBlack};
  &:active {
    color: ${theme.colors.primaryGreen};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export default Contact;
