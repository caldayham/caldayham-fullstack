import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: rgb(0, 0, 0);
  display: flex;

  height: 80px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 22px;
  color: white;
  text-decoration: none;

  transition: all 0.2s ease;
  &:hover {
    width: 210px;
    height: 60px;
  }
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(14, 14, 14);
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 22px;
  color: white;
  text-decoration: none;

  transition: all 0.2s ease;
  &:hover {
    width: 210px;
  }
`;

export const HeaderLinkWrapper = styled.div`
  width: 200px;
`;

export const Div1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  margin-left: 20px;
`;
export const Div2 = styled.div`
  flex: 3;
  display: flex;
  align-items: center;

  justify-content: space-around;
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
  padding-right: 20px;
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
`;

// Social Icons

export const SocialIcons = styled.a`
  color: white;
  padding: 4px;

  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
