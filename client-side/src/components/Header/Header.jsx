import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Div1, Div2, Div3, SocialIcons } from "./styles";

import LedgesSVG from "../../local-assets/ledges-svg";
import CalDayHamLogo from "../../local-assets/caldayham-logo";
import { Link } from "react-router-dom";

const Header = () => (
  <Container>
    <Div1>
      <Link to="/home">
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
          <CalDayHamLogo scaleFactor="1.8" />
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link to="/about">Overview</Link>
      </li>
      <li>
        <Link to="/portfolio">Projects</Link>
      </li>
      <li>
        <Link to="/thoughts">Thoughts</Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/farmercal" target="_blank">
        <AiFillGithub size="30px" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/caldayham/"
        target="_blank"
      >
        <AiFillLinkedin size="30px" />
      </SocialIcons>
      <SocialIcons href="https://www.ledges.io/ed/caldayham" target="_blank">
        <LedgesSVG size="30px" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
