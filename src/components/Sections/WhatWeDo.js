import React, { useState } from "react";
import styled from "styled-components";
import { theme, device } from "../../theme";
import meetingPhoto from "../../images/meeting_photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Bill Payment, Reporting & Budgeting",
    description: [
      "Process all invoices",
      "Review cash inflows and outflows",
      "Account for all your spending",
      "Generate quarterly spending reports to determine if your spending is in line with projections and if changes are needed",
    ],
  },
  {
    title: "Banking & Cash Management",
    description: [
      "Open and close accounts",
      "Transfer funds between accounts",
      "Reconcile accounts at month-end",
      "Review cash inflows and outflows",
    ],
  },
  {
    title: "Payroll Processing",
    description: [
      "Process payroll for your staff",
      "Purchase unemployment, disability and paid family leave insurance",
      "Maintain all employment documents",
      "Work with an outsource provider to ensure you comply with all employment laws",
    ],
  },
  {
    title: "Income Tax Preparation",
    description: [
      "Prepare individual income tax returns",
      "Calculate quarterly estimated payments",
      "Manage tax audits",
      "Respond to all tax notices",
    ],
  },
  {
    title: "Coordination of Estate Planning, Wills, Trusts",
    description: [
      "Work with our estate attorneys to ensure that your will and estate plans are in order",
      "Ensure all tax exemptions are utilized",
      "Verify state tax is minimized",
      "Confirm trust provisions are complied with",
      "Ensure that you understand and are comfortable with your distribution of assets",
    ],
  },
  {
    title: "Investment Management",
    description: [
      "Review investment recommendations",
      "Complete investment documents",
      "Report to you quarterly",
      "Assist with selection of investment advisors, if needed",
    ],
  },
  {
    title: "Property, Aviation, Artwork Management",
    description: [
      "Maintain a database of your artwork",
      "Have the collection appraised periodically",
      "Review all contracts",
      "Maintain automobile schedules to ensure that all autos are properly insured, inspected and registered",
      "Assist with booking charter flights, purchasing automobiles, boats, etc.",
    ],
  },
  {
    title: "Insurance Administration",
    description: [
      "Verify that you are properly insured for your homes, artwork, furnishings, autos and excess liability",
      "Make sure all new items are added to the policies",
      "Coordinate insurance company inspections",
      "Bid out the policies periodically",
    ],
  },
  {
    title: "Data Management & Protection",
    description: [
      "Maintain your documents in a secure, cloud-based environment (i.e., wills, trusts, contracts, entity organizational documents, passports, personal ID’s) ",
      "Maintain logins for all investments, insurance, utilities, banking, credit cards, etc. in a fully encrypted password management system",
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
                  icon={itemVisible === idx ? faChevronUp : faChevronDown}
                />
              </ServiceItem>
              <ServiceItemDescription visible={itemVisible === idx}>
                <ul>
                  {description.map((bullet) => (
                    <li>{bullet}</li>
                  ))}
                </ul>
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
  font-size: 20px;
  margin: 12px 0;
  padding: 16px 30px 16px 16px;
  background-color: ${theme.colors.primaryGreen};
  color: white;
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default WhatWeDo;
