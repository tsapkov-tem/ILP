import React, { useEffect, useState } from "react";
import type { Channel } from "../../../../../types/Channel";
import { ChannelItem } from "./ChannelItem/ChannelItem";
import "./ChannelsList.css";

export const ChannelsList : React.FC = () => {
    const [channels, setChannels] = useState<Channel[]>([]);

    useEffect(() => {
        setChannels([
            { name: "general", active: true },
            { name: "javascript", active: false },
            { name: "python", active: false },
            { name: "react", active: false },
            { name: "algoritm", active: false }
        ]);
    }, [])

    return (
        <div className="channels">
            <h3 className="channels__title">Channels</h3>
            <ul className="channels__list">
                {channels.map((channel) => (
                    <ChannelItem channel={channel}/>
                ))}
            </ul>
        </div>
    );
}