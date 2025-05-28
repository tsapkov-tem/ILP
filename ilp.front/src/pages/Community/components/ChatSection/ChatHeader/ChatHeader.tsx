import React from "react";
import type { Chat } from "../../../../../types/Chat";
import HashtagIcon from "../../../../../components/Icons/HashtagIcon";
import UserIcon from "../../../../../components/Icons/UserIcon";
import SearchIcon from "../../../../../components/Icons/SearchIcon";
import QuestionIcon from "../../../../../components/Icons/QuestionIcon";
import VideoIcon from "../../../../../components/Icons/VideoIcon";
import PhoneIcon from "../../../../../components/Icons/PhoneIcon";
import "./ChatHeader.css";

interface ChatHeaderProps {
    chat: Chat;
}

export const ChatHeader : React.FC<ChatHeaderProps> = ({ chat }) => {

    const Icon = chat.type === "channel" ? HashtagIcon : UserIcon;

    return (
        <div className="chat-header">
            <Icon/>
            <h2 className="chat-header__name">{chat.name}</h2>
            <p className="chat-header__online">{`${chat.online} online`}</p>
            <div className="chat-header__functions">
                <button className="chat-header__functions__button">
                    <SearchIcon/>
                </button>
                <button className="chat-header__functions__button">
                    <PhoneIcon/>
                </button>
                <button className="chat-header__functions__button">
                    <VideoIcon/>
                </button>
                <button className="chat-header__functions__button">
                    <QuestionIcon/>
                </button>
            </div>
        </div>
    );
}