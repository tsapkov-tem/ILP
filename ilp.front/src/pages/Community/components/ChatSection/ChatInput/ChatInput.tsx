import React from "react";
import VideoIcon from "../../../../../components/Icons/VideoIcon";
import "./ChatInput.css";


export const ChatInput : React.FC = () => {
    return (
        <div className="chat-input">
            <div className="chat-input__container">
                <div className="chat-input-area">
                    <input type="text" placeholder="Message #general" className="chat-input-area__input"/>
                </div>
                <button className="chat-input__button">
                    <VideoIcon/>
                </button>
            </div>
        </div>
    );
}