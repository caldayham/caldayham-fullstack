import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  HeaderLink,
  HeaderLinkWrapper,
  SocialIcons,
  HeaderBox,
} from "./styles";

import LedgesSVG from "../../local-assets/ledges-svg";
import CalDayHamLogo from "../../local-assets/caldayham-logo2";
import PrintSciSVG from "../../local-assets/printsci-svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [logoFill, setLogoFill] = useState(200);
  const [ledgesFill, setLedgesFill] = useState(200);
  const [printFill, setPrintFill] = useState(200);

  return (
    <Container>
      <Div1>
        <HeaderLink
          to="/home"
          style={{ backgroundColor: "none" }}
          onMouseEnter={() => setLogoFill(255)}
          onMouseLeave={() => setLogoFill(200)}
        >
          <CalDayHamLogo
            scaleFactor="1.8"
            style={{ width: "100%" }}
            fill={logoFill}
          />
        </HeaderLink>
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
        <HeaderBox>
          <Link
            to="/contact"
            style={{
              zIndex: "1",
              width: "200px",
              height: "40px",
              position: "absolute",
            }}
          />

          <SocialIcons href="https://github.com/caldayham" target="_blank">
            <AiFillGithub size="30px" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/caldayham/"
            target="_blank"
          >
            <AiFillLinkedin size="30px" />
          </SocialIcons>
          <SocialIcons
            href="https://www.ledges.io/"
            target="_blank"
            onMouseEnter={() => setLedgesFill(255)}
            onMouseLeave={() => setLedgesFill(200)}
          >
            <LedgesSVG size="26px" fill={ledgesFill} />
          </SocialIcons>
          <SocialIcons
            href="https://www.printscientific.com/"
            target="_blank"
            onMouseEnter={() => setPrintFill(255)}
            onMouseLeave={() => setPrintFill(200)}
          >
            <PrintSciSVG size="26px" fill={printFill} />
          </SocialIcons>
        </HeaderBox>
      </Div3>
    </Container>
  );
};

export default Header;
