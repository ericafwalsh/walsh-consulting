import React from "react";
import styled from "styled-components";

const Testimonials = () => (
  <Wrapper id="testimonials">
    <Heading>Testimonials</Heading>
    <h5>Jann Wenner</h5>
    <p>Founder, Chief Executive Officer, Wenner Media</p>
    <i>
      “Tim is a skillful, financial leader. His business acumen, integrity,
      honesty, and tireless dedication has proven invaluable to Wenner Media and
      my family throughout our nearly 30 year relationship.”
    </i>
    <h5>Gus Wenner</h5>
    <p>President, Chief Operating Officer, Wenner Media</p>
    <i>
      “Tim was instrumental in the operation and sale of Wenner Media and is
      steadfast in his commitment to my family. I am extremely pleased that he
      has established Walsh Consulting and that he will continue to manage my
      Family’s wealth.”
    </i>
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

export default Testimonials;
