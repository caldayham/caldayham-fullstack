import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  HeaderLink,
  HeaderLinkWrapper,
  LogoLink,
  SocialIcons,
} from "./styles";

import LedgesSVG from "../../local-assets/ledges-svg";
import CalDayHamLogo from "../../local-assets/caldayham-logo";
import PrintSciSVG from "../../local-assets/printsci-svg";

const Header = () => (
  <Container>
    <Div1>
      <LogoLink to="/home" style={{ backgroundColor: "none" }}>
        <CalDayHamLogo scaleFactor="1.8" style={{ width: "100%" }} />
      </LogoLink>
    </Div1>
    <Div2>
      <HeaderLinkWrapper>
        <HeaderLink to="/about">Overview</HeaderLink>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/portfolio">Projects</HeaderLink>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/thoughts">Thoughts</HeaderLink>
      </HeaderLinkWrapper>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/caldayham" target="_blank">
        <AiFillGithub size="30px" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/caldayham/"
        target="_blank"
      >
        <AiFillLinkedin size="30px" />
      </SocialIcons>
      <SocialIcons href="https://www.ledges.io/" target="_blank">
        <LedgesSVG size="30px" />
      </SocialIcons>
      <SocialIcons href="https://www.printscientific.com/" target="_blank">
        <PrintSciSVG size="30px" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
