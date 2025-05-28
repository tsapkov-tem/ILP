import React from "react";
import "./ProgressOverTime.css";
import LinearChart from "../../../components/common/LinearChart/LinearChart";

export const ProgressOverTime : React.FC = () => {
    return (
        <div className="progress-over-time">
            <div className="progress-over-time__header">
                <h2 className="progress-over-time__header__title">Progress Over Time</h2>
                <button className="progress-over-time__header__button">Details</button>
            </div>
            <LinearChart/>
        </div>
    );
}