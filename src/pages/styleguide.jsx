import tw from "tailwind-styled-components";
import styled from "styled-components";
import MainLayout from "./layouts/MainLayout";

export default function StyleGuide() {
  return (
    <MainLayout>
      <div className="container mx-auto flex pb-10 text-2xl">
        <ColorBox $class="bg-cnavy text-cwhite">#000447</ColorBox>
        <ColorBox $class="bg-cblue text-cwhite">#3458FF</ColorBox>
        <ColorBox $class="bg-cwhite text-cblack">#F5F5F5</ColorBox>
        <ColorBox $class="bg-cyellow text-cblack">#FFD135</ColorBox>
        <ColorBox $class="bg-cblack text-cwhite">#1C1C1C</ColorBox>
        <ColorBox $class="bg-cgreen text-cwhite">#059945</ColorBox>
      </div>
      <div className="container mx-auto">
        <h1>h1. This is a heading</h1>
        <h2>h2. This is a heading</h2>
        <h3>h3. This is a heading</h3>
        <h4>h4. This is a heading</h4>
        <h5>h5. This is a heading</h5>
        <h6>h6. This is a heading</h6>

        <p className="pt-10">
          This is a paragraph. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga quia quam facilis obcaecati nihil voluptatibus,
          dolore sed id odio cum praesentium rem quibusdam nam animi asperiores
          reiciendis iste ab dicta?
        </p>
      </div>
    </MainLayout>
  );
}

const Box = styled.div`
  height: 200px;
`;
const ColorBox = tw(Box)`
  flex-grow
  p-2
  ${(p) => p.$class}
`;
