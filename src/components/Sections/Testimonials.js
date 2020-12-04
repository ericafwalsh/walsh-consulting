import React from "react";
import styled from "styled-components";

const Testimonials = () => (
  <Wrapper id="testimonials">
    <Heading>Testimonials</Heading>
    <Testimonial>
      <Quote>
        “Tim is a skillful, financial leader. His business acumen, integrity,
        honesty, and tireless dedication has proven invaluable to Wenner Media
        and my family throughout our nearly 30 year relationship.”
      </Quote>
      <Name>
        <b>- Jann Wenner, </b>
      </Name>
      <Name> Founder, Chief Executive Officer, Wenner Media</Name>
    </Testimonial>
    <Testimonial>
      <Quote>
        “Tim was instrumental in the operation and sale of Wenner Media and is
        steadfast in his commitment to my family. I am extremely pleased that he
        has established Walsh Consulting and that he will continue to manage my
        Family’s wealth.”
      </Quote>
      <Name>
        <b>- Gus Wenner, </b>
      </Name>
      <Name> President, Chief Operating Officer, Wenner Media</Name>
    </Testimonial>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 1180px;
  padding: 40px 1.0875rem 1.45rem;
`;

const Heading = styled.h2`
  font-family: Raleway;
  margin-bottom: 40px;
`;

const Testimonial = styled.div`
  margin: 0 0 40px;
`;

const Quote = styled.div`
  font-style: italic;
  margin-bottom: 6px;
`;

const Name = styled.span`
  font-size: 15px;
  font-family: Raleway;
`;

export default Testimonials;
