import { Link } from "react-router-dom";
import styled from "styled-components";

const PrimaryContainer = styled.div`
  height: calc(100vh - 80px);
`;

const PrimaryLink = styled(Link)`
  color: rgb(255, 255, 255);
  font-size: 22px;
  text-decoration: none;
`;

const CommandLineInput = styled.input`
position: fixed;
bottom: 20%;
width: 100%;
height: 50px;
border: 2px solid rgb(100,100,100);
background-color: rgb(40,40,40);
color: white;

&:focus{
outline: none;
}
`;

export { PrimaryContainer, PrimaryLink, CommandLineInput };
