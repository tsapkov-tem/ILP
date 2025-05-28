import React, { useEffect, useState } from "react";
import type { Direct } from "../../../../../types/Direct";
import { DirectItem } from "./DirectItem/DirectItem";
import "./DirectsList.css";

export const DirectsList : React.FC = () => {
    const [directs, setDirects] = useState<Direct[]>([]);

    useEffect(() => {
        setDirects([
            { name: "Петя", active: false, status: "online"},
            { name: "Вася12", active: false, status: "online" },
            { name: "Валерий Алекберович", active: false, status: "online" },
            { name: "Жмышенко", active: false, status: "online" },
        ]);
    }, [])

    return (
        <div className="directs">
            <h3 className="directs__title">Direct messages</h3>
            <ul className="directs__list">
                {directs.map((direct) => (
                    <DirectItem direct={direct}/>
                ))}
            </ul>
        </div>
    );
}