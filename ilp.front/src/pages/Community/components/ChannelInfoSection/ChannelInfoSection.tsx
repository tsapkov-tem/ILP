import React from "react";
import { ChannelDescription } from "./ChannelDesctiption/ChannelDescription";
import { PinnedMessages } from "./PinnedMessages/PinnedMessages";
import { ChannelMembers } from "./ChannelMembers/ChannelMembers";
import "./ChannelInfoSection.css";

export const ChannelInfoSectioin : React.FC = () => {
    return (
        <section className="channel-info-section">
            <div className="info-header">
                <h3 className="info-header__text">Channel Info</h3>
            </div>
            <ChannelDescription description="General discussions about programming, algorithms, and coding challenges."/>
            <ChannelMembers/>
            <PinnedMessages/>
            <div></div>
        </section>
    );
}