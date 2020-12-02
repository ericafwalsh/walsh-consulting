import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import whiteLogo from "../../images/logo-white.png";
import compass from "../../images/compass.jpg";

const Hero = () => (
  <Wrapper id="hero">
    <WelcomeBanner>
      <LogoWrapper>
        <img src={whiteLogo} alt="walsh consulting logo" />
      </LogoWrapper>
    </WelcomeBanner>
    <TextWrapper>
      <Text>
        A boutique, multi-family office specializing in all aspects of <br />
        family financial management.
      </Text>
    </TextWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 1.0875rem 1.45rem;
`;

const WelcomeBanner = styled.div`
  width: 100%;
  background-image: url(${compass});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  margin: 60px 0 0;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  max-width: 350px;
  padding: 20px;
`;

const TextWrapper = styled.div`
  background-color: ${theme.colors.primaryGreen};
  width: 60%;
  position: relative;
  margin: -40px auto 0;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
}
`;

const Text = styled.div`
  color: white;
  font-weight: 600;
  margin: 0 20px 20px;
  padding: 20px;
  text-align: center;
  font-family: Raleway;
`;

export default Hero;