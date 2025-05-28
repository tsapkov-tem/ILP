import React from "react";
import "./TopicPerformance.css";
import RadarChart from "../../../components/common/RadarChart/RadarChart";

export const TopicPerformance : React.FC = () => {
    return (
        <div className="topic-performance">
            <div className="topic-performance__header">
                <h2 className="topic-performance__header__title">Topic Performance</h2>
                <button className="topic-performance__header__button">Compare</button>
            </div>
            <RadarChart/>
        </div> 
    );
}