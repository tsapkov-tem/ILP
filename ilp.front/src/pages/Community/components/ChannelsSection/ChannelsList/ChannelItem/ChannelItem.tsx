import React from "react";
import type { Channel } from "../../../../../../types/Channel";
import HashtagIcon from "../../../../../../components/Icons/HashtagIcon";
import "./ChannelItem.css"

interface ChannelItemProps {
    channel: Channel;
}

export const ChannelItem : React.FC<ChannelItemProps> = ({ channel }) => {
    return (
        <li className={`channel-item ${channel.active ? "active" : ""}`}>
            <HashtagIcon/>
            <span className="channel-item__name">{channel.name}</span>
        </li>
    );
}