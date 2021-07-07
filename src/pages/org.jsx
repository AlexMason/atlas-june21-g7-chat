import tw from "tailwind-styled-components";
import MainLayout from "../layouts/MainLayout";
import Chat from "../components/Chat";
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
    { id: 1, displayName: "Daniel" },
    { id: 2, displayName: "Peter" },
  ];

  let fakeMessages = [
    {
      id: 0,
      body: "This is a test message.",
      timestamp: "",
      user: fakeUsers[0],
    },
    {
      id: 1,
      body: "This is a response to a test message.",
      user: fakeUsers[1],
    },
    {
      id: 2,
      body: "Hi I am another message from another user",
      user: fakeUsers[2],
    },
  ];

  fakeMessages = [
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
    ...fakeMessages,
  ];

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
