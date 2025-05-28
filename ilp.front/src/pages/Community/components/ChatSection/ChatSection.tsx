import React from "react";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { ChatArea } from "./ChatArea/ChatArea";
import { ChatInput } from "./ChatInput/ChatInput";
import "./ChatSection.css";

export const ChatSectioin : React.FC = () => {
    return (
        <section className="chat">
            <ChatHeader chat={{name: "general", online: 3, type: "channel"}} />
            <ChatArea/>
            <ChatInput/>
        </section>
    );
}