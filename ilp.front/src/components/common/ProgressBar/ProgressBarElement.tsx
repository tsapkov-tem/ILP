import React from "react";
import type { ProgressBar } from "../../../types/ProgressBar";
import "./ProgressBarElement.css";

interface ProgressBarElementProps {
    progressBar: ProgressBar;
}

export const ProgressBarElement: React.FC<ProgressBarElementProps> = ({ progressBar }) => {

    console.log(progressBar);

    const barStyle = {
        width: `${progressBar.value}%`,
        backgroundColor: progressBar.color
    };

    return (
        <div className="course-progress">
            <div className="course-progress-info">
                <span>{progressBar.name}</span>
                <span>{`${progressBar.value}%`}</span>
            </div>
            <div className="progress-bar">
                <div className="progress-bar__value" style={barStyle}>
                </div>
            </div>
        </div>
    );
}