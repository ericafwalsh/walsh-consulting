import React from "react";
import styled from "styled-components";

const Contact = () => (
  <Wrapper id="contact-us">
    <Heading>Contact Us</Heading>
    <p>Timwalsh@walshconsultingLLC.com</p>
    <p>917-304-2597</p>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 1180px;
  padding: 40px 1.0875rem 1.45rem;
`;

const Heading = styled.h2`
  font-family: Raleway;
`;

export default Contact;
