import React from "react";
import { ChannelsSectioin } from "./components/ChannelsSection/ChannelsSection";
import { ChatSectioin } from "./components/ChatSection/ChatSection";
import { ChannelInfoSectioin } from "./components/ChannelInfoSection/ChannelInfoSection";
import "./Community.css";

const Community : React.FC = () => {
    return (
        <main className="community">
            <ChannelsSectioin/>
            <ChatSectioin/>
            <ChannelInfoSectioin/>
        </main>
    );
};

export default Community;