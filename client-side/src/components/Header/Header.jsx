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
  MenuWrapper
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
        <HeaderLink to="/actions">Actions</HeaderLink>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/thoughts">Thoughts</HeaderLink>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
        <HeaderLink to="/experiences">Experiences</HeaderLink>
      </HeaderLinkWrapper>
    </Div2>
    <Div3>
      <div style={{display: "flex"}}>
      <HeaderLinkWrapper>
        <SocialIcons href="https://github.com/caldayham" target="_blank">
          <AiFillGithub size="30px" />
        </SocialIcons>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
      <SocialIcons
        href="https://www.linkedin.com/in/caldayham/"
        target="_blank"
        >
        <AiFillLinkedin size="30px" />
      </SocialIcons>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
      <SocialIcons href="https://www.ledges.io/" target="_blank">
        <LedgesSVG size="26px" />
      </SocialIcons>
      </HeaderLinkWrapper>
      <HeaderLinkWrapper>
      <SocialIcons href="https://www.printscientific.com/" target="_blank">
        <PrintSciSVG size="26px" />
      </SocialIcons>
      </HeaderLinkWrapper>
        </div>
    </Div3>
  </Container>
);

export default Header;
