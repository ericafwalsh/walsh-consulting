import React, { useState } from "react";
import styled from "styled-components";
import { theme, device } from "../../theme";
import meetingPhoto from "../../images/meeting_photo_2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Bill Payment, Reporting & Budgeting",
    description: [
      "Process invoices",
      "Review and reconcile all cash inflows and outflows",
      "Generate quarterly reports to determine if spending is in line with projections",
    ],
  },
  {
    title: "Banking & Cash Management",
    description: [
      "Manage all banking relationships",
      "Establish credit facilities including lines of credit, mortgages, and margin loans",
    ],
  },
  {
    title: "Investment Management",
    description: [
      "Meet with investment team quarterly to assess performance",
      "Review investment recommendations",
      "Confirm investment allocation is in line with family objectives",
      "Assist with selection of new investment advisors when needed",
    ],
  },
  {
    title: "Payroll Processing",
    description: [
      "Process household payroll",
      "Ensure all employment practices comply with state and federal laws",
      "Manage workers comp, disability, and other employment requirements",
    ],
  },
  {
    title: "Income Tax Preparation",
    description: [
      "Prepare individual, partnership, S corporation, trust, and individual income tax returns",
      "Tax planning to minimize client’s federal and state income tax burden",
      "Manage tax audits and calculate quarterly estimated payments",
    ],
  },
  {
    title: "Coordination of Estate Planning, Wills, Trusts",
    description: [
      "Work with an estate attorney to design and implement an estate plan that minimizes federal and state transfer taxes",
      "Create trust structure for multi-generational wealth transfer and oversight",
      "Ensure principals understand and are comfortable with their estate plan",
    ],
  },
  {
    title: "Property, Aviation, Artwork Management, Construction",
    description: [
      "Maintain artwork database and have the collection appraised periodically",
      "Review all family contracts including asset purchases, maintenance agreements, leases, etc.",
      "Construction finance oversight",
    ],
  },
  {
    title: "Insurance Administration",
    description: [
      "Verify that all family assets are properly insured at a competitive price including homes, automobiles, artwork, and furnishings",
      "Ensure proper excess liability coverage is maintained and that procedures are in place to add future purchases",
    ],
  },
  {
    title: "Data Management & Protection",
    description: [
      "Maintain all documents in a secure, cloud-based environment",
      "Maintain logins for all investments, insurance, banking, etc., in a fully encrypted password management system",
    ],
  },
];

const WhatWeDo = () => {
  const [itemVisible, setItemVisible] = useState(null);

  const toggleAccordian = (idx) => {
    setItemVisible(itemVisible === idx ? null : idx);
  };

  return (
    <Wrapper id="what-we-do">
      <TopContainer>
        <TextContainer>
          <Heading>Family Financial Management</Heading>
          <p>
            Tailored to meet the diverse needs of each family client, Walsh
            Consulting maintains close contact with attorneys, investment
            advisors, accountants, tax professionals, insurance agents, estate
            managers, architects, aviation professionals, appraisal firms and
            more. Personalized service, customized plans and a dedicated team
            guarantee satisfaction and peace of mind.
          </p>
          <p>
            Successful financial relationships require trust, confidence,
            loyalty and confidentiality, exactly what you can expect from Walsh
            Consulting. Advanced technology and superior security measures
            protect each client’s information.
          </p>
          <InlineImage
            src={meetingPhoto}
            alt="stock photo of business meeting"
          />
          <GreenAccent>
            <p>
              <b>
                Walsh Consulting Founder and Chief Executive Officer Timothy
                Walsh
              </b>{" "}
              is an accomplished financial executive in the media industry with
              more than 25 years of experience working for privately held Wenner
              Media. Mr. Walsh has also managed the Wenner Family Office since
              2000. He served as the company’s Chief Financial Officer, Vice
              President, Treasurer and Board Member of Rolling Stone Magazine.
              Prior to that, he was Wenner Media’s Vice President of Tax and
              Finance (2004-14). He began his career with Wenner Media as Tax
              Director (1991).
            </p>
          </GreenAccent>
        </TextContainer>
        <Image src={meetingPhoto} alt="stock photo of business meeting" />
      </TopContainer>
      <Container>
        <Heading>Services</Heading>
        {services.map((item, idx) => {
          const { title, description } = item;
          return (
            <ServiceContainer>
              <ServiceItem key={idx} onClick={() => toggleAccordian(idx)}>
                {title}
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className={itemVisible === idx ? "item-open" : "item-closed"}
                />
              </ServiceItem>
              <ServiceItemDescription visible={itemVisible === idx}>
                <BulletedList visible={itemVisible === idx}>
                  {description.map((bullet) => (
                    <li>{bullet}</li>
                  ))}
                </BulletedList>
              </ServiceItemDescription>
            </ServiceContainer>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 10px 1.0875rem 1.45rem;

  @media ${device.mobileL} {
    padding: 30px 1.0875rem 1.45rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  margin: 40px 0;
  flex-direction: column;
`;

const Container = styled.div`
  margin: 40px 0;
`;

const Heading = styled.h2`
  font-family: Raleway;
`;

const ServiceContainer = styled.div`
  overflow: hidden;
`;

const ServiceItem = styled.div`
  font-family: Raleway;
  font-size: 17px;
  margin: 8px 0;
  padding: 10px 30px 10px 16px;
  background-color: ${theme.colors.primaryGreen};
  color: white;
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item-closed {
    transform: rotate(0deg);
    transition: transform 0.3s ease-out;
  }

  .item-open {
    transform: rotate(-180deg);
    transition: transform 0.3s;
  }
`;

const ServiceItemDescription = styled.div`
  max-height: ${(props) => (props.visible ? "600px" : `0`)};
  transition: max-height 0.4s ease-in-out;
`;

const Image = styled.img`
  width: auto;
  max-height: 250px;
  margin: 20px 0 0 60px;
  border-radius: 2px;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const InlineImage = styled.img`
  width: auto;
  max-height: 250px;
  border-radius: 2px;
  display: block;
  margin: 20px auto;
  @media ${device.tablet} {
    display: none;
  }
`;

const GreenAccent = styled.div`
  border-left: 6px solid ${theme.colors.primaryGreen};
  border-radius: 2px;
  padding-left: 20px;
`;

const BulletedList = styled.ul`
  display: ${(props) => (props.visible ? `block` : `none`)};
`;

export default WhatWeDo;
