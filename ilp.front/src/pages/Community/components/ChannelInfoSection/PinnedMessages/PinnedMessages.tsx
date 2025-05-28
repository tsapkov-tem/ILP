import React from "react";
import "./PinnedMessages.css";

export const PinnedMessages : React.FC = () => {
    return (
        <div className="pinned-messages">
            <h4 className="pinned-messages__header">Pinned Messages</h4>
            <ul className="pinned-messages__list">No pinned messages</ul>
        </div>
    );
}