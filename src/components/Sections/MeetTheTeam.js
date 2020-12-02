import React from "react";
import styled from "styled-components";

import TWHeadshot from "../../images/TW_headshot.jpg";
import LIHeadshot from "../../images/LI_headshot.jpg";
import MLHeadshot from "../../images/ML_headshot.jpg";

const AboutUs = () => (
  <Wrapper id="meet-the-team">
    <Heading>Meet the Team</Heading>
    <BioWrapper>
      <SubHeading>Timothy Walsh, Founder and CEO</SubHeading>
      <Container>
        <ImgContainer>
          <img src={TWHeadshot} alt="Timothy Walsh" />
        </ImgContainer>
        <TextContainer>
          <p>
            For nearly three decades, Walsh Consulting founder, Timothy Walsh,
            has served as Chief Financial Officer for Wenner Media while
            managing the Wenner family office. Mr. Walsh is a trustee of the
            family trusts and was a board member of the operating company. His
            wide-ranging experience provides a unique perspective on the
            challenges and opportunities facing wealthy families. Having
            recognized an essential need in the marketplace for customized
            family financial management, Mr. Walsh developed Walsh Consulting.
            An expert support team has been assembled to provide a full suite of
            services.
          </p>
          <Link
            href={"./Timothy_M_Walsh_CV.pdf"}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Full CV available for download
          </Link>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Lana Izakson, ROLE</SubHeading>
      <Container>
        <ImgContainer>
          <img src={LIHeadshot} alt="Lana Izakson" />
        </ImgContainer>
        <TextContainer>
          <p>
            Lana is a CPA with more than 20 years of experience in providing tax
            compliance and tax return preparation services to family offices,
            high net worth individuals, trusts, and closely held businesses.
            Lana also handles non-tax wealth management services including the
            shareholders'/owners’ personal finances, tax projections, cash flow
            management, financial statements, trust accounting and
            distributions, family foundations.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Melissa Laccitiello, ROLE</SubHeading>
      <Container>
        <ImgContainer>
          <img src={MLHeadshot} alt="Melissa Laccitiello" />
        </ImgContainer>
        <TextContainer>
          <p>
            Melissa Laccitiello is a seasoned Executive Assistant with over 24
            year’s experience in the field. She is a graduate of Montclair State
            University, holding a Bachelor of Science degree. She has extensive
            experience with all administrative tasks including billing and
            correspondence. Having held positions in the medical and business
            fields, Melissa is able to tailor her skills to various clients. In
            addition to her duties as an Executive Assistant, Melissa is married
            with three children and is active in many organizations in her
            community.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
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

const SubHeading = styled.h4`
  font-family: Raleway;
`;

const BioWrapper = styled.div`
  margin: 40px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  max-width: 260px;
  margin-right: 40px;
  overflow: hidden;
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export default AboutUs;
