import tw from "tailwind-styled-components";
import MainLayout from "../common/layouts/MainLayout";
import Chat from "../modules/team/components/TeamChat";
import { useState, useEffect } from "react";

export default function Org() {
  const PageWrapper = tw.div`flex h-full`;
  const OrgMenuContainer = tw.div`bg-coolgray-400 px-1 pt-2 md:px-2 lg:px-4 text-xs md:text-sm lg:text-base w-32 md:w-40 lg:w-52`;
  const ChatContainer = tw.div`flex flex-col flex-grow`;
  const ChannelList = tw.ul`flex flex-col gap-1`;

  let channels = ["announcements", "general", "help", "queue"];
  let [activeChannel, setActiveChannel] = useState(0);

  // useEffect(() => {
  //   //when component loads we need to grab all channels for org,
  //   //and set active channel
  // }, []);

  // useEffect(() => {
  //   //when active channel updates we need to fetch new messages and user info for those messages
  // }, [activeChannel]);

  let fakeUsers = [
    { id: 0, displayName: "Alex" },
    { id: 1, displayName: "Melissa" },
    { id: 2, displayName: "Josh" },
  ];

  let fakeMessages = [
    {
      id: 0,
      body: "Hey do you think you can get me over those forms today Melissa?",
      user: fakeUsers[0],
    },
    {
      id: 1,
      body: "Sure thing Alex, I am in a meeting until 1PM.  Will send them over your way after!",
      user: fakeUsers[1],
    },
    {
      id: 2,
      body: "Hi @Alex, Accounting need a copy of those once you get them processed.",
      user: fakeUsers[2],
    },
    {
      id: 3,
      body: "You got it josh!",
      user: fakeUsers[0],
    },
  ];

  fakeMessages = [...fakeMessages];

  return (
    <MainLayout>
      <PageWrapper>
        {/* Channel List */}
        <OrgMenuContainer>
          <ChannelList>
            {channels.map((channel, index) => {
              return (
                <Channel
                  key={"c" + index}
                  name={channel}
                  active={index === activeChannel}
                  onClick={() => setActiveChannel(index)}
                />
              );
            })}
          </ChannelList>
        </OrgMenuContainer>

        <Chat messages={fakeMessages} />
      </PageWrapper>
    </MainLayout>
  );
}

const Channel = ({ name, active = false, onClick }) => {
  const ChannelListItem = tw.li`${(p) =>
    p.$active
      ? "bg-cnavy-dark hover:bg-cyellow hover:text-black text-cwhite"
      : "text-cblack hover:text-cnavy border-2 border-cyellow border-opacity-0 hover:border-opacity-100"} truncate font-medium p-1 px-2 rounded cursor-pointer `;
  // const ChannelListItem = tw.li`${(p) =>
  //   p.$active
  //     ? "bg-cnavy hover:bg-cnavy-dark font-medium"
  //     : "hover:bg-cnavy-light"} p-1 px-2 rounded cursor-pointer text-cwhite`;

  return (
    <ChannelListItem onClick={() => onClick()} $active={active}>
      #{name}
    </ChannelListItem>
  );
};
