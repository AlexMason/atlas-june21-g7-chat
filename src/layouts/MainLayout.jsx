import Head from "next/head";
import tw from "tailwind-styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrgNavbar from "../components/OrgNavbar";

export default function MainLayout({ children }) {
  return (
    <Layout>
      <Meta className="flex flex-col bg-cnavy">
        <OrgNavbar />
        <Footer />
      </Meta>
      <Content>
        <Header />
        <Body>{children}</Body>
      </Content>
    </Layout>
  );
}

const Layout = tw.div`flex flex-row h-full`;
const Meta = tw.div`flex flex-col bg-cnavy`;
const Content = tw.div`flex-grow flex flex-col`;
const Body = tw.div`flex-grow bg-cwhite`;
