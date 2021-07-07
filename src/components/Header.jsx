import Head from "next/head";
import tw from "tailwind-styled-components";

export default function Header() {
  const Wrapper = tw.div`p-2 bg-cblue text-cwhite flex gap-2 truncate`;
  const HeaderTitle = tw.h1`text-2xl`;
  const HeaderMeta = tw.div``;
  const MetaBanner = tw.h2`text-sm truncate`;
  const MetaTopic = tw.h3`text-xs`;

  return (
    <Wrapper>
      <HeaderTitle>EFA Chat App</HeaderTitle>
      <HeaderMeta>
        <MetaBanner>
          Welcome to the EFA Chat App group for the developers of this app.
        </MetaBanner>
        <MetaTopic>This is the channel topic for #announcements.</MetaTopic>
      </HeaderMeta>
    </Wrapper>
  );
}
