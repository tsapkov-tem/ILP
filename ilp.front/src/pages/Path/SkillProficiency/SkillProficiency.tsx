import React from "react";
import "./SkillProficiency.css";

export const SkillProficiency : React.FC = () => {
    return (
        <div className="skill-proficiency">
            <div className="skill-proficiency__header">
                <h2 className="skill-proficiency__header__title">Skill Proficiency</h2>
                <button className="skill-proficiency__header__button">View Breakdown</button>
            </div>
            <div className="skill-proficiency__chart-container">
                <canvas id="skillsChart"></canvas>
            </div>
        </div>
    );
}