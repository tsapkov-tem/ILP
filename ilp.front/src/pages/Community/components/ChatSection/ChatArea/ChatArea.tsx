import React, { useEffect, useState } from "react";
import type { Message } from "../../../../../types/Message";
import { MessageItem } from "./MessageItem/MessageItem";
import "./ChatArea.css";

export const ChatArea : React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setMessages([
            {sender: "John Doe", time: new Date(), text: "Hey everyone! I'm stuck on this React component. Can someone help me understand why my state isn't updating correctly?"},
            {sender: "Alice Smith", time: new Date(), text: "@John Doe Can you share your code? It's probably related to how you're calling setState."},
            {sender: "Alice Smith", time: new Date(), text: "@John Doe That's because state updates are asynchronous in React. If you need to use the new value right away, you should use the functional form of setState:"},
            {sender: "Alice Smith", time: new Date(), text: "@John Doe Can you share your code? It's probably related to how you're calling setState."},
            {sender: "Alice Smith", time: new Date(), text: "@You That worked perfectly! Thanks so much for the quick help. The functional form makes total sense now."},
        ]);
    }, [])

    return (
            <div className="chat-area">
                {messages.map((message) => (
                    <MessageItem message={message}/>
                ))}
            </div>
    );
}