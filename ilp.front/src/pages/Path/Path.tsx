import React from "react";
import { SkillsMastery } from "./SkillsMastery/SkillsMastery";
import { AssigmentСompletion } from "./AssigmentCompletion/AssigmentCompletion";
import { ProgressOverTime } from "./ProgressOverTime/ProgressOverTime";
import { TopicPerformance } from "./TopicPerformance/TopicPerformance";
import { Recomendation } from "./Recomendation/Recomendation";
import "./Path.css";

const Path : React.FC = () => {
    return (
        <main className="path">
            <div className="path__container">
                <div className="path__details">
                    <SkillsMastery/>
                    <AssigmentСompletion/>
                    <ProgressOverTime/>
                    <TopicPerformance/>
                </div>
                <Recomendation/>
            </div>
        </main>
    );
};

export default Path;