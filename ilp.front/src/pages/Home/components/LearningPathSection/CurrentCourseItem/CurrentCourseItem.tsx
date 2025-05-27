import React from "react";
import type { CurrentCourse } from "../../../../../types/CurrentCourse";
import "./CurrentCourseItem.css";
import CodeIcon from "../../../../../components/Icons/CodeIcon";
import { useTranslation } from "react-i18next";
import { ProgressBarElement } from "../../../../../components/common/ProgressBar/ProgressBarElement";
import type { ProgressBar } from "../../../../../types/ProgressBar";

interface CurrentCourseProps {
    currentCourse: CurrentCourse | null;
}

export const CurrentCourseItem : React.FC<CurrentCourseProps> = ({ currentCourse }) => {
    const { t } = useTranslation("learningPath");

    if(currentCourse === null) {
        return (
            <div className="current-course">
                <h3 className="current-course__new">
                </h3>
            </div>
        )
    }

    const progressBar : ProgressBar = {name: t("progress"), color: "rgb(76 175 80)", value: currentCourse.progress};

    return (
        <div className="current-course">
            <div className="current-course__container">
                <h3 className="current-course__title">{t("currentCourse")}</h3>
                <div className="current-course-info">
                    <div className="current-course__icon">
                        <CodeIcon/>
                    </div>
                    <div>
                        <h4 className="current-course-info__name">{currentCourse!.courseName}</h4>
                        <p className="current-course-info__unit">{currentCourse!.couseUnit}</p>
                    </div>
                </div>
                <ProgressBarElement progressBar={progressBar}/>
                <button className="current-course__button">
                    {t("continue")}
                </button>
            </div>
        </div>
    );
}