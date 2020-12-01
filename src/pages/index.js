import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import WhatWeDo from "../components/sections/WhatWeDo";
import Services from "../components/sections/Services";
import AboutUs from "../components/sections/AboutUs";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <WhatWeDo />
    <Services />
    <AboutUs />
    <Testimonials />
    <Contact />
  </Layout>
);

export default IndexPage;
