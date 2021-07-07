import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useState } from "react";

export default function OrgNavbar() {
  const NavbarWrapper = tw.div`h-full text-cwhite`;
  const Orgs = tw.div`flex flex-col p-3 md:p-4 lg:p-6 gap-6 justify-center items-center`;

  let tmpOrgs = ["efa", "google", "microsoft", "nestle", "netflix"];
  let [activeOrg, setActiveOrg] = useState(0);

  return (
    <NavbarWrapper>
      <Orgs>
        {tmpOrgs.map((o, i) => {
          return (
            <Org
              key={"org" + i}
              id={o}
              active={i === activeOrg}
              onClick={() => setActiveOrg(i)}
            />
          );
        })}
      </Orgs>
    </NavbarWrapper>
  );
}

const Org = ({ id, active, onClick }) => {
  const OrgCard = tw.div`
    ${(p) => p.$active && "shadow-orgcard-active"}
    relative
    bg-cblack
    w-10 h-10
    md:w-14 md:h-14
    lg:w-20 lg:h-20
    rounded-lg
  `;

  const ImgShadow = tw.div`
    ${(p) => !p.$active && "shadow-inset-black hover:shadow-orgcard-hover"}
    absolute
    w-full
    h-full
    rounded-lg
    top-0
    left-0
    cursor-pointer
    z-50
  `;

  function test() {}

  return (
    <OrgCard $active={active} onHover={test} onClick={() => onClick()}>
      <Image
        className="rounded-lg"
        src={`/orgs/${id}.png`}
        height="100%"
        width="100%"
      />
      <ImgShadow $active={active} />
    </OrgCard>
  );
};
