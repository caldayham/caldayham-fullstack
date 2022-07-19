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

export { PrimaryContainer, PrimaryLink };
