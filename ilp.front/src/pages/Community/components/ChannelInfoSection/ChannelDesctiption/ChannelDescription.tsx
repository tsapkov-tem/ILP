import React from "react";
import "./ChannelDescription.css";

interface ChannelDescriptionProps {
    description: string;
}

export const ChannelDescription : React.FC<ChannelDescriptionProps> = ({ description }) => {
    return (
        <div className="channel-description">
            <h4 className="channel-description__header">About</h4>
            <p className="channel-description__text">{description}</p>
        </div>
    );
}