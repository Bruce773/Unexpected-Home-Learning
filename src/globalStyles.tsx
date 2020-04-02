import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const tealGreen = "#19b1a9";
export const lightTealGreen = "#19b1a98c";
export const darkGrey = '#292929';

export const BaseFont = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.334;
  letter-spacing: 0em;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
`;
