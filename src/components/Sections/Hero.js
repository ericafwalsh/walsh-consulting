import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import whiteLogo from "../../images/logo-white.png";
import compass from "../../images/compass.jpg";

const Hero = () => (
  <Wrapper>
    <WelcomeBanner>
      <LogoWrapper>
        <img src={whiteLogo} alt="walsh consulting logo" />
      </LogoWrapper>
    </WelcomeBanner>
    <TextWrapper>
      <Text>
        Walsh Consulting LLC is a boutique, multi-family office specializing in
        all aspects of family financial management.
      </Text>
    </TextWrapper>
  </Wrapper>
);

const Wrapper = styled.div``;

const WelcomeBanner = styled.div`
  width: 100%;
  background-image: url(${compass});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //   filter: brightness(50%);
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
