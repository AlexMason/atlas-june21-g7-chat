import tw from "tailwind-styled-components";

export default function Org() {
  let teams = [
    { name: "Marketing", thumbnail: "efa.png" },
    { name: "Sales", thumbnail: "google.png" },
    { name: "QA", thumbnail: "microsoft.png" },
    { name: "Backend", thumbnail: "nestle.png" },
    { name: "Frontend", thumbnail: "netflix.png" },
  ];

  let channels = ["general", "help", "off-topic"];

  return (
    <div className="h-full flex">
      {/* Team Navigation */}
      <TeamsContainer>test</TeamsContainer>
      {/* Channel Navigation */}
      <ChannelsContainer>test</ChannelsContainer>
      {/* Chat Portion */}
      <ChatContainer>test</ChatContainer>
    </div>
  );
}

const TeamsContainer = tw.div`bg-coolgray-800`;
const ChannelsContainer = tw.div`bg-coolgray-600`;
const ChatContainer = tw.div`bg-coolgray-400 flex-grow`;
