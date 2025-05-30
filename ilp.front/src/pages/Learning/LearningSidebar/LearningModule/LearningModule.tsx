import React from "react";
import type { LearningPart } from "../../../../types/LearningPart";
import { LearningPartItem } from "./LearningPart/LearningPartItem";
import "./LearningModule.css";

interface LearningModuleProps {
    parts: LearningPart[];
}

export const LearningModule : React.FC<LearningModuleProps> = ({ parts }) => {

    if(parts.length == 0)
        throw new Error("The learning module can't be empty.");

    return (
        <div className="module">
            <h3 className="module__name">{parts[0].moduleName}</h3>
            <div className="module__parts">
                {parts.map((part) => (
                    <LearningPartItem part={part}/>
                ))}
            </div>
        </div>
    );
}