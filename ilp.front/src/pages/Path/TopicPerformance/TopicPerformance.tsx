import React from "react";
import "./TopicPerformance.css";
import RadarChart from "../../../components/common/RadarChart/RadarChart";
import { DetailsButton } from "../../../components/common/DetailsButton/DetailsButton";

export const TopicPerformance : React.FC = () => {
    return (
        <div className="topic-performance">
            <div className="topic-performance__header">
                <h2 className="topic-performance__header__title">Topic Performance</h2>
                <DetailsButton text="Сравнить"/>
            </div>
            <RadarChart/>
        </div> 
    );
}