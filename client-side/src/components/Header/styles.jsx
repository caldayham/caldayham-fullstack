import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: rgb(0, 0, 0);
  display: flex;
  border-bottom: 1px solid rgb(40,40,40);


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
  border: 1px solid rgb(40,40,40);


  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(14, 14, 14);
  height: 40px;
  border-radius: 10px;
  font-size: 22px;
  color: white;
  text-decoration: none;

  transition: all 0.2s ease;
  &:hover {
    flex: 1.1;
  }
`;

export const HeaderLinkWrapper = styled.div`
flex: 1;

transition: all 0.2s ease;
&:hover{
  flex: 1.1;
}
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
  gap: 10px
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
  padding-right: 20px;
  padding-left: 40px;
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
  display: flex;
  color: white;
  width: 30px;
  align-items: center;
  justify-content: center;

  transition: all 0.1s ease;
  &:hover {
    width: 40px;
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`;
