import tw from "tailwind-styled-components";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

export default function Register() {
  const PageWrapper = tw.div`flex h-full`;
  const OrgMenuContainer = tw.div`bg-cblue px-2 pt-2`;
  const ChatContainer = tw.div`flex flex-col flex-grow`;
  const ChannelList = tw.ul`flex flex-col gap-1`;

  let channels = ["announcements", "general", "help", "queue"];
  let [activeChannel, setActiveChannel] = useState(0);

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

        {/* Channel Container */}
        <ChatContainer>
          {/* Channel Messages */}
          <ChatMessages />
          {/* Channel Message Input */}
          <ChatInput />
        </ChatContainer>
      </PageWrapper>
    </MainLayout>
  );
}

const Channel = ({ name, active = false, onClick }) => {
  const ChannelListItem = tw.li`${(p) =>
    p.$active
      ? "bg-cyellow hover:bg-cyellow-dark font-medium text-cnavy"
      : "hover:bg-cyellow-light text-cwhite hover:text-cnavy"} p-1 px-2 rounded cursor-pointer `;
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

const ChatMessages = ({}) => {
  return (
    <div className="flex-grow bg-blue-200 shadow-inset-black">
      Chat messages go here
    </div>
  );
};

const ChatInput = ({}) => {
  const InputWrapper = tw.div`bg-cblue flex p-2 gap-2`;
  const Input = tw.input`flex-grow`;
  const Button = tw.button`bg-coolgray-800 hover:bg-coolgray-900 text-cwhite p-2 rounded`;

  return (
    <InputWrapper>
      <Input type="text" />
      <Button>Send</Button>
    </InputWrapper>
  );
};
