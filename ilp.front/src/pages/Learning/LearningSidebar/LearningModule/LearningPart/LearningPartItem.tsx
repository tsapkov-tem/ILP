import React, { useState } from "react";
import type { LearningPart } from "../../../../../types/LearningPart";
import "./LearningPartItem.css";

interface LearningPartItemProps {
    part: LearningPart;
}

export const LearningPartItem : React.FC<LearningPartItemProps> = ({ part }) => {
    const [isChecked, setIsChecked] = useState(part.status);

    return (
        <button className="learning-part">
            <span className="learning-part__name">
                <input type="checkbox" className="learning-part__status" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            </span>
            {part.partName}
        </button>
    );
}