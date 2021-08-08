import tw from "tailwind-styled-components";

export default function Chat({ messages }) {
  const ChatContainer = tw.div`flex flex-col flex-grow bg-coolgray-400 min-h-0`;

  return (
    <ChatContainer>
      {/* Channel Messages */}
      <ChatMessages messages={messages} />
      {/* Channel Message Input */}
      <ChatInput />
    </ChatContainer>
  );
}

const ChatInput = () => {
  const InputWrapper = tw.div`bg-coolgray-400 flex py-2 pr-2 gap-2`;
  const Input = tw.input`flex-grow`;
  const Button = tw.button`bg-coolgray-800 hover:bg-coolgray-900 text-cwhite p-2 rounded`;

  return (
    <InputWrapper>
      <Input type="text" />
      <Button>Send</Button>
    </InputWrapper>
  );
};

const ChatMessages = ({ messages }) => {
  let activeUserId = 1;
  const Messages = tw.div`rounded bg-cwhite
      flex-grow block 
      shadow-inset-black mt-2 mr-2 p-2
      overflow-y-scroll min-h-0 h-0 
    `;
  const Message = tw.div`
    ${(p) => (p.$owned ? "ml-auto" : "")}
    flex flex-col max-w-max
    bg-coolgray-300 m-2 py-1 px-2 rounded w-9/12
  `;
  const MessageBody = tw.div`text-sm`;
  const MessageMeta = tw.div`self-end text-xs text-cblack text-opacity-60`;
  const MetaLink = tw.span`hover:text-cblack hover:text-opacity-100 cursor-pointer hover:underline`;

  return (
    <Messages>
      {messages.map((message) => {
        return (
          <Message
            key={"msg" + message.id}
            $owned={message.user.id === activeUserId}
          >
            <MessageBody>{message.body}</MessageBody>
            <MessageMeta>
              <MetaLink>{message.user.displayName}</MetaLink> &bull; one sec ago
            </MessageMeta>
          </Message>
        );
      })}
    </Messages>
  );
};
