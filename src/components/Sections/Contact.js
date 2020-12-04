import React from "react";
import styled from "styled-components";

const Contact = () => (
  <Wrapper id="contact-us">
    <Divider />
    <Container>
      <ContactInfo>Timwalsh@walshconsultingLLC.com</ContactInfo>
      <Dot>&#8226;</Dot>
      <ContactInfo>917-304-2597</ContactInfo>
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
  margin: 40px auto;
  max-width: 1180px;
  padding: 40px 1.0875rem 20px;
`;

const Divider = styled.div`
  border: 0.5px solid #ddd;
  margin: 20px 0;
`;

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: center;
`;

const ContactInfo = styled.div`
  margin: 0 10px;
`;

const Dot = styled(ContactInfo)`
  color: #ddd;
`;

export default Contact;
