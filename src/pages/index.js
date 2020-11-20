import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import WhatWeDo from "../components/sections/WhatWeDo";
import Services from "../components/sections/Services";
import AboutUs from "../components/sections/AboutUs";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeBanner>
      <LogoWrapper>
        <Image />
      </LogoWrapper>
      <div>
        Walsh Consulting LLC is a boutique, multi-family office specializing in
        all aspects of <b>family financial management.</b>
      </div>
    </WelcomeBanner>
    <WhatWeDo />
    <Services />
    <AboutUs />
    <Testimonials />
    <Contact />
  </Layout>
);

const WelcomeBanner = styled.div``;

const LogoWrapper = styled.div`
  max-width: 350px;
`;

export default IndexPage;
