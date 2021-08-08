import tw from "tailwind-styled-components";
// import Footer from "../components/Footer";
import Header from "../../modules/team/components/TeamHeader";
import OrgNavbar from "../components/OrgNavbar";
import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <Layout>
      <Head>
        <title>Chat App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Meta>
        <OrgNavbar />
        {/* <Footer /> */}
      </Meta>
      <Content>
        <Header />
        <Body>{children}</Body>
      </Content>
    </Layout>
  );
}

const Layout = tw.div`flex flex-row h-screen`;
const Meta = tw.div`flex flex-col bg-cnavy-dark border-r-1 border-coolgray-400 shadow-right z-10`;
const Content = tw.div`flex-grow flex flex-col h-screen`;
const Body = tw.div`flex-grow bg-cwhite`;
