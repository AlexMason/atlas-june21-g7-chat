import Head from "next/head";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { MdAccessibility, MdExtension, MdQuestionAnswer } from "react-icons/md";

const Template = styled.div`
  background: url("./cowspots.png"), #3458ff;
`;

export default function Home() {
  return (
    <div className="bg-[#86BA4F] h-full flex flex-col">
      <Head>
        <title>Junto</title>
      </Head>
      <Hero>
        <div className="flex justify-end gap-3">
          <button>Register</button>
          <button>Login</button>
        </div>
        <HeroTitle>junto</HeroTitle>
        <HeroTagline>Reconstruct, Together.</HeroTagline>
        {/* <HeroButton>Get Started</HeroButton>
        <HeroLearnMore>Learn More</HeroLearnMore> */}
      </Hero>
      <div className="container mx-auto z-10">
        <p className="text-center text-cblack w-7/12 mx-auto text-2xl pt-10 font-medium">
          We built a better chat experience, leveraging your businesses
          communication channels has never been easier.
        </p>
        <Info>
          <InfoCard>
            <MdQuestionAnswer />
            <InfoHeader>Easy to use</InfoHeader>
            <InfoText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              porro consequuntur, aspernatur natus enim molestias.
            </InfoText>
          </InfoCard>
          <InfoCard>
            <MdAccessibility />
            <InfoHeader>Accessible</InfoHeader>
            <InfoText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              porro consequuntur, aspernatur natus enim molestias.
            </InfoText>
          </InfoCard>
          <InfoCard>
            <MdExtension />
            <InfoHeader>Configurable</InfoHeader>
            <InfoText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              porro consequuntur, aspernatur natus enim molestias.
            </InfoText>
          </InfoCard>
        </Info>
      </div>
      <div className="bg-[#6c963f] pt-20 pb-20 text-cwhite -mt-5">
        <div className="container mx-auto">
          <h1 className="w-2/3 mx-auto text-3xl font-bold uppercase text-center">
            Empowering your communications
          </h1>
          <p className="w-2/3 mx-auto text-lg mt-5 text-center">
            Inclusivity in diversification has never been this simple. When you
            allow junto to help you wrangle your communication channels between
            teams, the benefits gained are measurable in productivity.
          </p>
          <div className="flex flex-col items-center pt-5">
            <button className="border-2 text-xl p-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#3d3f42] p-10 text-cwhite">
        <p>&copy; Junto 2021</p>
      </div>
    </div>
  );
}

const HeroCSS = styled.div`
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
  background: url("./cowspots.png"), #3458ff;
`;
const Hero = tw(HeroCSS)`
 p-5 pb-10 shadow-xl
text-center text-cwhite font-serif
`;

const HeroTitle = tw.div`text-5xl`;
const HeroTagline = tw.div`text-3xl mt-10 mb-5`;
const HeroButton = tw.button` bg-cblue hover:bg-cblue-dark border-2 border-cwhite p-3 rounded-lg`;
const HeroLearnMore = tw.div`underline text-xs pt-5`;

const Info = tw.div`flex justify-center pt-10 gap-10 w-3/4 mx-auto`;
const InfoCard = tw.div`text-cblack
  bg-cwhite
  font-medium
  text-5xl w-4/12 flex flex-col items-center p-3 shadow-2xl py-10
`;
const InfoText = tw.div`text-lg text-center`;
const InfoHeader = tw.div`text-xl underline mb-2`;
