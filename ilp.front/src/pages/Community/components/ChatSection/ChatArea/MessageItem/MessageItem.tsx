import React from "react";
import type { Message } from "../../../../../../types/Message";
import UserIcon from "../../../../../../components/Icons/UserIcon";
import "./MessageItem.css";

interface MessageItemProps {
    message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    return (
       <div className="message">
            <div className="message-container">
                <UserIcon/>
                <div>
                    <div className="message-info">
                        <span className="message-info__name">{message.sender}</span>
                        <span className="message-info__time">{message.time.toTimeString().split(' ')[0]}</span>
                    </div>
                    <div className={`message-data`}>
                        <p className="message-data__text">{message.text}</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}