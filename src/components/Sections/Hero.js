import React from "react";
import styled from "styled-components";
import { theme, device } from "../../theme";

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
      <Text className="fade-in">
        A boutique, multi-family office specializing in all aspects of <br />
        family financial management.
      </Text>
    </TextWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 1.0875rem 10px;

  @media ${device.tablet} {
    padding: 0 1.0875rem 1.45rem;
  }
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
  -webkit-box-shadow: 1px 1px 2px 3px #ccc;
  -moz-box-shadow: 1px 1px 2px 3px #ccc;
  box-shadow: 1px 1px 2px 3px #ccc;
  .fade-in {
      animation: fadeIn ease 2.5s;
      -webkit-animation: fadeIn ease 2.5s;
      -moz-animation: fadeIn ease 2.5s;
      -o-animation: fadeIn ease 2.5s;
      -ms-animation: fadeIn ease 2.5s;
    }
    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    @-moz-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    @-o-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
    @-ms-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
  }
  width: 90%;
  @media ${device.mobileL} {
    width: 60%;
  }
`;

const Text = styled.div`
  color: white;
  font-weight: 600;
  margin: 0 20px 20px;
  padding: 20px 0;
  text-align: center;
  font-family: Raleway;

  @media ${device.mobileL} {
    padding: 20px;
  }
`;

export default Hero;
