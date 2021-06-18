import Head from "next/head";
import tw from "tailwind-styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <Layout>
      <Meta className="flex flex-col bg-cnavy">
        <Navbar />
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
const Body = tw.div`flex-grow`;
