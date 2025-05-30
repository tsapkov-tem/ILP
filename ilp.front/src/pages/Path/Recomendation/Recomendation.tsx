import React, { useEffect, useState } from "react";
import "./Recomendation.css";
import type { Lesson } from "../../../types/Lesson";
import { LessonItem } from "../../Home/components/LearningPathSection/LessonItem/LessonItem";
import QuestionIcon from "../../../components/Icons/QuestionIcon";
import PencilIcon from "../../../components/Icons/PencilIcon";
import VideoIcon from "../../../components/Icons/VideoIcon";
import { DetailsButton } from "../../../components/common/DetailsButton/DetailsButton";

export const Recomendation : React.FC = () => {
    const [recomendations, setRecomendations] = useState<Lesson[]>([]);

    useEffect(() => {
        setRecomendations([
            {id: "1", name: "Asynchronous JavaScript", description: "Promises, async/await, and callbacks", duration: 25, icon: VideoIcon},
            {id: "2", name: "Practice Project", description: "Build a weather app with Api calls", duration: 45, icon: PencilIcon},
            {id: "3", name: "Quiz: Advanced Concepts", description: "Test your undestanding", duration: 15, icon: QuestionIcon},
        ]);
    },[])

    return (
        <div className="recomendation">
            <div className="recomendation__header">
                <h2 className="recomendation__header__title">Recommended Next Steps</h2>
                <DetailsButton text="Показать больше"/>
            </div>
            <div className="recomendation__list">
                {
                    recomendations.map((recomendation) => (
                        <LessonItem lesson={recomendation}/>
                    ))
                }
            </div>
        </div>
    );
}