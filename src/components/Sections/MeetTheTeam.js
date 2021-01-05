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
import CV from "../../../static/Timothy_M_Walsh_CV.pdf";

const AboutUs = () => (
  <Wrapper id="meet-the-team">
    <Heading>Meet the Team</Heading>
    <BioWrapper>
      <SubHeading>Timothy Walsh, Founder and CEO</SubHeading>
      <Container>
        <ImgContainer pictureUrl={TWHeadshot} />
        <TextContainer>
          <p>
            For nearly three decades, Walsh Consulting founder Timothy Walsh
            served in numerous financial roles at Wenner Media, culminating in
            the role of Chief Financial Officer. During this period, Mr. Walsh
            also managed the Wenner family office, was a trustee of numerous
            family trusts, and was a board member of the operating company. His
            wide- ranging experience provides a unique perspective on the
            challenges and opportunities facing high-net-worth families and
            their closely held entities. Recognizing an essential need in the
            marketplace for customized family financial management, Mr. Walsh
            founded Walsh Consulting. He has assembled an expert support team to
            provide a full suite of services.
          </p>
          <Link href={CV} download target="_blank" rel="noopener noreferrer">
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
            compliance services to family offices, high net worth individuals,
            trusts, and closely held businesses. Lana also handles non-tax
            wealth management services including the shareholders’ personal
            finances, tax projections, cash flow management, financial statement
            preparation, trust accounting, and family foundations.
          </p>
          <p>
            Lana is a graduate of Baruch College in New York with an MBA in
            accounting.
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
            Chris is an accounting professional with over a decade of experience
            in financial operations for a variety of companies. Chris started
            her career at Arthur Andersen, and then worked for a large
            pharmaceutical company before concentrating her skills on small and
            mid-sized clients. She also built and managed her own financial
            advisory business.
          </p>
          <p>
            Chris is a graduate of the Robins School of Business, University of
            Richmond, with a Bachelor of Science degree in business
            administration.
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
            business affairs for a high net-worth individual and his closely
            held business. During that time, she worked very closely with his
            accountants, attorneys, and investment advisors.
          </p>
          <p>
            More recently, Holly has worked for GCA Advisors in New York,
            supporting three Managing Directors and one Senior Advisor.
          </p>
          <p>
            Holly is a graduate of Pennsylvania State University with a Bachelor
            of Arts degree.
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
            Merrill is a Bookkeeper with several years of experience at Walsh
            Consulting. She has direct contact with many of our most important
            clients and is responsible for the recording of all transactions,
            reconciling bank accounts, and preparing financial statements.
          </p>
          <p>
            Prior to joining Walsh Consulting, Merrill worked for an insurance
            company. She is extremely organized, efficient, and brings a strong
            work ethic to all her assignments.
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
            Melissa is a seasoned Executive Assistant/Bookkeeper with more than
            24 years of experience. She is highly adept at administrative tasks
            including billing and correspondence. Having held positions in the
            medical and business fields, Melissa has the fine ability to tailor
            her considerable skills to meet each client’s needs.
          </p>
          <p>
            She is a graduate of Montclair State University, holding a Bachelor
            of Science degree in health education.
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
            licensing and business affairs for a closely held publishing
            company. She currently manages payroll and other special projects at
            Walsh Consulting.
          </p>
          <p>
            Aimee is a graduate of Colorado College with a Bachelor of Arts
            degree in english.
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
