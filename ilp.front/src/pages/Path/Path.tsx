import React from "react";
import { SkillsMastery } from "./SkillsMastery/SkillsMastery";
import { AssigmentСompletion } from "./AssigmentCompletion/AssigmentCompletion";
import { ProgressOverTime } from "./ProgressOverTime/ProgressOverTime";
import { TopicPerformance } from "./TopicPerformance/TopicPerformance";
import { Recomendation } from "./Recomendation/Recomendation";

const Path : React.FC = () => {
    return (
        <main className="path">
            <SkillsMastery/>
            <AssigmentСompletion/>
            <ProgressOverTime/>
            <TopicPerformance/>
            <Recomendation/>
        </main>
    );
};

export default Path;