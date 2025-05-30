import React, { useEffect, useState } from "react";
import { ProgressBarElement } from "../../../components/common/ProgressBar/ProgressBarElement";
import type { ProgressBar } from "../../../types/ProgressBar";
import "./SkillsMastery.css";
import { DetailsButton } from "../../../components/common/DetailsButton/DetailsButton";

export const SkillsMastery : React.FC = () => {
    const [progresses, setProgresses] = useState<ProgressBar[]>([]);

    useEffect(() => {
        setProgresses([
            {name: "JavaScript", color: "rgb(76 175 80)", value: 82},
            {name: "Python", color: "rgb(76 175 80)", value: 65},
            {name: "React", color: "rgb(76 175 80)", value: 78},
            {name: "Algorithms", color: "rgb(76 175 80)", value: 54},
        ]);
    },[]);

    return (
        <div className="skills-mastery">
            <div className="skills-mastery__header">
                <h2 className="skills-mastery__header__title">Skills Mastery</h2>
                <DetailsButton text="Показать все"/>
            </div>
            <div className="skills-mastery__list">
                {progresses.map((progress) => (
                    <ProgressBarElement progressBar={progress}/>
                ))}
            </div>
        </div>
    );
}