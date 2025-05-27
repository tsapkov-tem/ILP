import React from "react";
import type { Lesson } from "../../../../../types/Lesson";
import "./LessonItem.css";


interface LessonItemProps {
    lesson: Lesson;
}

export const LessonItem : React.FC<LessonItemProps> = ({ lesson }) => {
    return (
        <div className="lesson">
            <div className="lesson__icon">
                <lesson.icon/>
            </div>
            <div className="lesson-info">
                <h4 className="lesson-info__name">{lesson.name}</h4>
                <p className="lessson-info__description">{lesson.description}</p>
            </div>
            <p className="lesson__duration">{`${lesson.duration} мин`}</p>
        </div>
    );
}