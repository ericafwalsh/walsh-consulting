/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
        <Copyright style={{}}>
          © {new Date().getFullYear()}, Walsh Consulting, LLC. All rights
          reserved.
        </Copyright>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 1.0875rem 1.45rem;
  font-family: Lora, serif;
`;

const Copyright = styled.footer`
  margin: 20px 0 10px;
  bottom: 0;
  position: absolute;
  font-size: 14px;
`;

export default Layout;
