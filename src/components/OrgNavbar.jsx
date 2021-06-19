import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useState } from "react";

export default function OrgNavbar() {
  let tmpOrgs = ["efa", "google", "microsoft", "nestle", "netflix"];
  let [activeOrg, setActiveOrg] = useState(0);

  return (
    <NavbarWrapper>
      <Orgs>
        {tmpOrgs.map((o, i) => {
          return (
            <div onClick={() => setActiveOrg(i)}>
              <Org id={o} active={i === activeOrg} />
            </div>
          );
        })}
      </Orgs>
    </NavbarWrapper>
  );
}

const NavbarWrapper = tw.div`
  h-full
  text-cwhite
`;

const Orgs = tw.div`flex flex-col mt-4 gap-6 mx-2`;

const Org = ({ id, active }) => {
  return (
    <OrgCard $active={active}>
      <Image
        className="rounded-lg shadow-orgcard-image"
        src={`/orgs/${id}.png`}
        width="100%"
        height="100%"
      />
      <ImgShadow $active={active} />
    </OrgCard>
  );
};

const OrgCard = tw.div`
  relative
  bg-cblack
  w-14
  h-14
  mx-2
  rounded-lg
  ${(p) => p.$active && "shadow-orgcard-active"}
`;

const ImgShadow = tw.div`
  absolute
  w-full
  h-full
  rounded-lg
  top-0
  left-0
  cursor-pointer
  ${(p) => !p.$active && "shadow-orgcard-image hover:shadow-orgcard-hover"}
`;
