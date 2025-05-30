import React from "react";
import "./Learning.css";
import { LearningSidebar } from "./LearningSidebar/LearningSidebar";
import { LearningContentArea } from "./LearningContentArea/LearningContentArea";

const Learning : React.FC = () => {
    return (
        <main className="learning">
            <div className="learning__container">
                <LearningSidebar name={"JavaScript"} />
                <LearningContentArea/>
            </div>
        </main>
    );
};

export default Learning;