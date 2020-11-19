import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WhatWeDo from "../components/Sections/WhatWeDo"
import Services from "../components/Sections/Services"
import AboutUs from "../components/Sections/AboutUs"
import Testimonials from "../components/Sections/Testimonials"
import Contact from "../components/Sections/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Walsh Consulting LLC is a boutique, multi-family office specializing in
      all aspects of <b>family financial management.</b>
    </p>
    <LogoWrapper>
      <Image />
    </LogoWrapper>
    <WhatWeDo />
    <Services />
    <AboutUs />
    <Testimonials />
    <Contact />
  </Layout>
)

const LogoWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

export default IndexPage
