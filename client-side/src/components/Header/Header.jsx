import React, { useEffect, useState } from "react";
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

import { useSelector } from "react-redux";

const Header = () => {
  const [logoFill, setLogoFill] = useState(220);
  const [onLogo, setOnLogo] = useState(false);

  const [ledgesFill, setLedgesFill] = useState(220);
  const [printFill, setPrintFill] = useState(220);
  const currentPage = useSelector((state) => state.currentPage.page);

  useEffect(() => {
    const pageInit = () => {
      if (currentPage === "home") {
        setLogoFill(255);
      } else if (!onLogo) {
        setLogoFill(220);
      } else if (onLogo) {
        setLogoFill(255);
      } else {
        setLogoFill(220);
      }
    };
    pageInit();
  });

  const updateLogoFill = (action) => {
    if (action === "enter") {
      setLogoFill(255);
      setOnLogo(true);
    } else if (action === "leave" && currentPage !== "home") {
      setLogoFill(220);
      setOnLogo(false);
    } else if (action === "leave" && currentPage === "home") {
      setLogoFill(255);
      setOnLogo(false);
    }
  };

  return (
    <Container>
      <Div1>
        <HeaderLink
          to="/home"
          style={{ backgroundColor: "none" }}
          onMouseEnter={() => updateLogoFill("enter")}
          onMouseLeave={() => updateLogoFill("leave")}
          thispage="home"
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
          <HeaderLink to="/actions" thispage="actions">
            Actions
          </HeaderLink>
        </HeaderLinkWrapper>
        <HeaderLinkWrapper>
          <HeaderLink to="/thoughts" thispage="thoughts">
            Thoughts
          </HeaderLink>
        </HeaderLinkWrapper>
        <HeaderLinkWrapper>
          <HeaderLink to="/experiences" thispage="experiences">
            Experiences
          </HeaderLink>
        </HeaderLinkWrapper>
      </Div2>
      <Div3>
        <HeaderBox thispage="contact">
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
            onMouseLeave={() => setLedgesFill(220)}
          >
            <LedgesSVG size="26px" fill={ledgesFill} />
          </SocialIcons>
          <SocialIcons
            href="https://www.printscientific.com/"
            target="_blank"
            onMouseEnter={() => setPrintFill(255)}
            onMouseLeave={() => setPrintFill(220)}
          >
            <PrintSciSVG size="26px" fill={printFill} />
          </SocialIcons>
        </HeaderBox>
      </Div3>
    </Container>
  );
};

export default Header;
