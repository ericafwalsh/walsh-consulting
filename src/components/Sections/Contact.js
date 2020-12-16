import React from "react";
import styled from "styled-components";
import { device } from "../../theme";

const Contact = () => (
  <Wrapper id="contact-us">
    <Divider />
    <Container>
      <ContactInfo>Tim@walsh.consulting</ContactInfo>
      <Dot>&#8226;</Dot>
      <ContactInfo>(917) 304-2597</ContactInfo>
      <Dot>&#8226;</Dot>
      <ContactInfo>
        © {new Date().getFullYear()}, Walsh Consulting, LLC. All rights
        reserved.
      </ContactInfo>
    </Container>
    <Divider />
  </Wrapper>
);

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

export default Contact;
