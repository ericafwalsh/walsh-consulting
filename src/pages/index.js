import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import WhatWeDo from "../components/sections/WhatWeDo";
import AboutUs from "../components/sections/MeetTheTeam";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section>
      <WhatWeDo />
    </Section>
    <AboutUs />
    <Section>
      <Testimonials />
    </Section>
    <Contact />
  </Layout>
);

const Section = styled.div`
  background-color: rgb(242, 242, 243);
  margin: 40px auto;
`;

export default IndexPage;
