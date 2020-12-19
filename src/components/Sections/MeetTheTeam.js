import React from "react";
import styled from "styled-components";
import { theme, device } from "../../theme";

import TWHeadshot from "../../images/TW_headshot.jpg";
import LIHeadshot from "../../images/LI_headshot.jpg";
import MLHeadshot from "../../images/ML_headshot.jpg";
import CCHeadshot from "../../images/CC_headshot.jpg";
import HMHeadshot from "../../images/HM_headshot.jpg";
import MVHeadshot from "../../images/MV_headshot.jpg";
import AJHeadshot from "../../images/AJ_headshot.jpg";

const AboutUs = () => (
  <Wrapper id="meet-the-team">
    <Heading>Meet the Team</Heading>
    <BioWrapper>
      <SubHeading>Timothy Walsh, Founder and CEO</SubHeading>
      <Container>
        <ImgContainer pictureUrl={TWHeadshot} />
        <TextContainer>
          <p>
            For nearly three decades, Walsh Consulting founder Timothy Walsh has
            served as Chief Financial Officer for Wenner Media while managing
            the Wenner family office. Mr. Walsh is a trustee of the family
            trusts and was a board member of the operating company. His
            wide-ranging experience provides a unique perspective on the
            challenges and opportunities facing wealthy families. Having
            recognized an essential need in the marketplace for customized
            family financial management, Mr. Walsh developed Walsh Consulting.
            He has assembled an expert support team to provide a full suite of
            services.
          </p>
          <Link
            href={"./Timothy_M_Walsh_CV.pdf"}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Lana Izakson, Tax Director</SubHeading>
      <Container>
        <ImgContainer pictureUrl={LIHeadshot} />
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
      <SubHeading>Chris Caci, Accounting Manager</SubHeading>
      <Container>
        <ImgContainer pictureUrl={CCHeadshot} />
        <TextContainer>
          <p>
            Chris is an accounting professional with experience in financial
            operations for small to mid-sized companies. Over the course of her
            career, she had held positions at large international accounting
            firms as well as growing startups, in addition to beginning her own
            advisory business.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Holly MacKenzie, Head Bookkeeper</SubHeading>
      <Container>
        <ImgContainer pictureUrl={HMHeadshot} />
        <TextContainer>
          <p>
            Holly is a Personal Executive Assistant/Bookkeeper with extensive
            experience in QuickBooks. For ten years she managed the personal and
            business financials for a high profile Patent Attorney, in addition
            to handling the legal end of his business. During that time, she
            worked very closely with his accountant and his investment advisors.
            More recently, Holly has worked for GCA Advisors in New York,
            supporting three Managing Directors and one Senior Advisor. Holly is
            a graduate of Pennsylvania State University with a Bachelor of Arts
            degree.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Merrill Varchetti, Bookkeeper</SubHeading>
      <Container>
        <ImgContainer pictureUrl={MVHeadshot} />
        <TextContainer>
          <p>
            After 10 years as a stay-at-home mom, Merrill decided to re-enter
            the workforce with Walsh Consulting in the fall of 2019. In her
            spare time, she can be found on the tennis court or traveling back
            and forth to numerous children’s sporting events.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Melissa Laccitiello, Bookkeeper</SubHeading>
      <Container>
        <ImgContainer pictureUrl={MLHeadshot} />
        <TextContainer>
          <p>
            Melissa is a seasoned Executive Assistant with more than 24 years of
            experience in the field. She is highly adept at administrative tasks
            including billing and correspondence. Having held positions in the
            medical and business fields, Melissa is skilled at tailoring her
            skills to various clients. Melissa is married with three children,
            and active in many organizations in her community. She is a graduate
            of Montclair State University, holding a Bachelor of Science degree.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
    <BioWrapper>
      <SubHeading>Aimee Jeffries, Client Services</SubHeading>
      <Container>
        <ImgContainer pictureUrl={AJHeadshot} />
        <TextContainer>
          <p>
            Aimee brings over a decade of experience managing international
            licensing and business affairs to her role as Client Services at
            Walsh Consulting. When she is not making spreadsheets, she enjoys
            skiing, home renovation projects, and endlessly chasing her toddler.
          </p>
        </TextContainer>
      </Container>
    </BioWrapper>
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

const Heading = styled.h2`
  font-family: Raleway;
`;

const SubHeading = styled.h4`
  font-family: Raleway;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }
`;

const BioWrapper = styled.div`
  margin: 10px 0;

  @media ${device.tablet} {
    margin: 40px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  min-width: 248px;
  height: 212px;
  background-image: url(${(props) => props.pictureUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  border: 6px solid ${theme.colors.primaryGreen};
  margin: 0 auto 20px;
  border-radius: 2px;
  @media ${device.tablet} {
    margin: 0 40px 0 0;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: black;
  &:hover {
    color: ${theme.colors.primaryGreen};
  }
`;

export default AboutUs;
