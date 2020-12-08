import React from "react";
import styled from "styled-components";
import { theme, device } from "../../theme";

const services = [
  "Bill payment, reporting & budgeting",
  "Banking & cash management",
  "Payroll processing",
  "Income tax return preparation",
  "Trust administration",
  "Coordination of estate planning, trusts, wills & investment management",
  "Property, aviation & artwork management",
  "Insurance administration",
  "Data management & protection",
];

const WhatWeDo = () => (
  <Wrapper id="what-we-do">
    <Container>
      <Heading>Family Financial Management</Heading>
      <p>
        Tailored to meet the diverse needs of each family client, Walsh
        Consulting maintains close contact with attorneys, investment advisors,
        accountants, tax professionals, insurance agents, estate managers,
        architects, aviation professionals, appraisal firms and more.
        Personalized service, customized plans and a dedicated team guarantee
        satisfaction and peace of mind.
      </p>
      <p>
        Successful financial relationships require trust, confidence, loyalty
        and confidentiality, exactly what you can expect from Walsh Consulting.
        Advanced technology and superior security measures protect each client’s
        information.
      </p>
      <p>
        For nearly three decades, Walsh Consulting founder, Timothy Walsh, has
        served as Chief Financial Officer for Wenner Media while managing the
        Wenner family office. Mr. Walsh is a trustee of the family trusts and
        was a board member of the operating company. His wide-ranging experience
        provides a unique perspective on the challenges and opportunities facing
        wealthy families. Having recognized an essential need in the marketplace
        for customized family financial management, Mr. Walsh developed Walsh
        Consulting. An expert support team has been assembled to provide a full
        suite of services.
      </p>
    </Container>
    <Container>
      <Heading>Services</Heading>
      <Grid>
        <GridBox>
          <p>Bill payment, reporting & budgeting</p>
          <p>Banking & cash management</p>
          <p>Payroll processing</p>
        </GridBox>
        <GridBox>
          <p>Income tax return preparation</p>
          <p>Trust administration</p>
          <p>
            Coordination of estate planning, trusts, wills & investment
            management
          </p>
        </GridBox>
        <GridBox>
          <p>Property, aviation & artwork management</p>
          <p>Insurance administration</p>
          <p>Data management & protection</p>
        </GridBox>
      </Grid>
      <MobileBox>
        <GridBox>
          <ul>
            {services.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </GridBox>
      </MobileBox>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px 1.0875rem 1.45rem;

  @media ${device.mobileL} {
    padding: 40px 1.0875rem 1.45rem;
  }
`;

const Container = styled.div`
  margin: 40px 0;
`;

const Heading = styled.h2`
  font-family: Raleway;
`;

const Grid = styled.div`
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;

  @media ${device.tablet} {
    display: grid;
  }
`;

const GridBox = styled.div`
  border: 6px solid ${theme.colors.primaryGreen};
  padding: 20px;
  font-weight: 600;
  color: ${theme.colors.navy};
`;

const MobileBox = styled.div`
  display: flex;
  @media ${device.tablet} {
    display: none;
  }
`;

export default WhatWeDo;
