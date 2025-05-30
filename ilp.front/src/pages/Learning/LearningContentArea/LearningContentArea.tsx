import type React from "react";
import { useState } from "react";
import { QuestionArea } from "./QuestionArea/QuestionArea";
import { PracticeArea } from "./PracticeArea/PracticeArea";
import { TheoryArea } from "./TheoryArea/TheoryArea";
import BrainIcon from "../../../components/Icons/BrainIcon";
import CodeIcon from "../../../components/Icons/CodeIcon";
import QuestionIcon from "../../../components/Icons/QuestionIcon";
import "./LearningContentArea.css";

export const LearningContentArea : React.FC = () => {
    const [theory, setTheory] = useState<string>("javascript-theory");
    const [practice, setPractice] = useState<string>("javascript-practice");
    const [question, setQuestion] = useState<string>("javascript-question");
    const [type, setType] = useState<string>("theory");

    return (
        <section className="learning-area">
            <div className="learning-area-header">
                <div className="learning-area-header__container">
                    <div className="learning-area-header__info">
                        <h2 className="learning-area-header__info__title">Functions in JavaScript</h2>
                        <p className="learning-area-header__info__description">Lesson 3 • Estimated time: 15 min</p>
                    </div>
                    <div className="learning-area-header__tabs">
                        <button onClick={() => setType("theory")} className={`learning-area-header__button ${type==="theory" ? "active" : ""}`}>
                            <BrainIcon/> Theory
                        </button>
                        <button onClick={() => setType("practice")} className={`learning-area-header__button ${type==="practice" ? "active" : ""}`}>
                            <CodeIcon/> Practice
                        </button>
                        <button onClick={() => setType("question")} className={`learning-area-header__button ${type==="question" ? "active" : ""}`}>
                            <QuestionIcon/> Question
                        </button>
                    </div>
                </div>
            </div>
            <div className={`learning-area__content ${type==="question" ? "active" : ""}`}>
                <QuestionArea file={question}/>
            </div>
            <div className={`learning-area__content ${type==="practice" ? "active" : ""}`}>
                <PracticeArea file={practice}/> 
            </div>
            <div className={`learning-area__content ${type==="theory" ? "active" : ""}`}>
                <TheoryArea file={theory}/> 
            </div>
        </section>
    );
}