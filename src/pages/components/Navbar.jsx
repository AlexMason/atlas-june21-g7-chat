import Head from "next/head";
import tw from "tailwind-styled-components";
import styled from "styled-components";

export default function Navbar() {
  return <NavbarWrapper>Navbar</NavbarWrapper>;
}

const NavbarWrapperPre = styled.div`
  min-width: 150px;
`;

const NavbarWrapper = tw(NavbarWrapperPre)`
  h-full
  text-cwhite
`;
