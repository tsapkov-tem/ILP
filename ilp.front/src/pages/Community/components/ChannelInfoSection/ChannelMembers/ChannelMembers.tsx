import React, { useEffect, useState } from "react";
import type { Direct } from "../../../../../types/Direct";
import { DirectItem } from "../../ChannelsSection/DirectsList/DirectItem/DirectItem";
import "./ChannelMembers.css";

export const ChannelMembers : React.FC = () => {
    const [members, setMembers] = useState<Direct[]>([]);

    useEffect(() => {
        setMembers([
            { name: "Петя", active: false, status: "online"},
            { name: "Валерий Алекберович", active: false, status: "online" },
            { name: "Жмышенко", active: false, status: "online" },
        ]);
    }, [])

    return (
        <div className="channel-members">
            <div className="channel-members__header">
                <h4 className="channel-members__header__title">{`Members ${members.length}`}</h4>
                <button className="channel-members__header__button">Invite</button>
            </div>
            <ul className="channel-members__list">
                {members.map((member) => (
                    <DirectItem direct={member}/>
                ))}
            </ul>
        </div>
    );
}