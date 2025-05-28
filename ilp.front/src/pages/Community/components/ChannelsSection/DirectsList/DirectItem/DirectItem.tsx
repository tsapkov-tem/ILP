import React from "react";
import UserIcon from "../../../../../../components/Icons/UserIcon";
import type { Direct } from "../../../../../../types/Direct";
import "./DirectItem.css";

interface DirectItemProps {
    direct: Direct;
}

export const DirectItem : React.FC<DirectItemProps> = ({ direct }) => {
    return (
        <li className={`direct ${direct.active ? "active" : ""}`}>
            <div className="direct-avatar">
                <UserIcon/>
                <div className={`direct-avatar__status ${direct.status === "online" ? "active" : ""}`}></div>
            </div>
            <span className="direct__name">{direct.name}</span>
        </li>
    );
}