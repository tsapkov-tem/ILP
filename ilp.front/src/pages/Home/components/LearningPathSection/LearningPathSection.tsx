import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../il8n";
import "./LearningPathSection.css";
import { CurrentCourseItem } from "./CurrentCourseItem/CurrentCourseItem";
import type { CurrentCourse } from "../../../../types/CurrentCourse";
import type { Lesson } from "../../../../types/Lesson";
import { LessonItem } from "./LessonItem/LessonItem";
import VideoIcon from "../../../../components/Icons/VideoIcon";
import PencilIcon from "../../../../components/Icons/PencilIcon";
import QuestionIcon from "../../../../components/Icons/QuestionIcon";
import ChampIcon from "../../../../components/Icons/ChampIcon";

export const LearningPathSection : React.FC = () => {
    const { t } = useTranslation("learningPath"); 
    const [currentCourse, setCurrentCourse] = useState<CurrentCourse | null>(null);
    const [upcommingLessons, setUpcommingLessons] = useState<Lesson[]>([]);
    const [streak, setStreak] = useState<number>();
    
    useEffect(() => {
        setCurrentCourse({courseId: "1", 
            courseName: "JavaScript Advanced",
            couseUnit: "Web Developvent", 
            progress: 65});
    }, [])

    useEffect(() => {
        setUpcommingLessons([
            {id: "1", name: "Asynchronous JavaScript", description: "Promises, async/await, and callbacks", duration: 25, icon: VideoIcon},
            {id: "2", name: "Practice Project", description: "Build a weather app with Api calls", duration: 45, icon: PencilIcon},
            {id: "3", name: "Quiz: Advanced Concepts", description: "Test your undestanding", duration: 15, icon: QuestionIcon},
        ]);
    }, [])

    useEffect(() => {
        setStreak(7);
    }, [])

    return (
        <section className="learning-path">
            <div className="learning-path-container">
                <div className="learning-path-introduce">
                    <h2 className="learning-path-introduce__title">{t("introduceTitle")}</h2>
                    <p className="learning-path-introduce__description">{t("introduceDescription")}</p>
                </div>
                <div className="current-path-lessons">
                    <div className="current-path-info">
                        <CurrentCourseItem currentCourse={currentCourse}/>
                        <div className="current-path-info__container">
                            <h3 className="current-path-lessons__title">{t("upcoming")}</h3>
                            <div className="lessons">
                                {upcommingLessons.map((lesson) => (
                                    <LessonItem lesson={lesson} />   
                                ))}
                            </div>
                            <div className="learning-path-streak">
                                <div className="streak-container">
                                    <div className="streak-container__icon">
                                        <ChampIcon/>
                                    </div>
                                    <div className="streak-info">
                                        <p className="streak-info__text">{t("streak")}</p>
                                        <p className="streak-info__value">{`${streak} days`}</p>
                                    </div>
                                </div>
                                <button className="full-path-button">
                                    {t("viewButton")}
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};