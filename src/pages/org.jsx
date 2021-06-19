import tw from "tailwind-styled-components";
import MainLayout from "../layouts/MainLayout";

export default function Register() {
  return (
    <MainLayout>
      {/* Channel List */}
      <PageWrapper>
        <div>
          <ChannelList>
            <Channel name="announcements" active />
            <Channel name="general" />
            <Channel name="help" />
            <Channel name="queue" />
          </ChannelList>
        </div>
        {/* Channel Container */}
        <div>
          {/* Channel Messages */}
          {/* Channel Message Input */}
        </div>
      </PageWrapper>
    </MainLayout>
  );
}

const PageWrapper = tw.div`flex`;

const Channels = tw.div``;
const ChannelList = tw.ul`p-2 flex flex-col gap-1`;

const Channel = ({ name, active = false }) => {
  return <li className={active ? "bg-gray-600" : ""}>#{name}</li>;
};
