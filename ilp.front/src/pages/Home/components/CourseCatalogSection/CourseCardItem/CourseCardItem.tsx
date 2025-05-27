import React from "react";
import type { CourseCard } from "../../../../../types/CourseCard";
import StarIcon from "../../../../../components/Icons/StarIcon";
import "./CourseCardItem.css"

interface CourseCardItemProps {
    courseCard: CourseCard;
}

export const CourseCardItem : React.FC<CourseCardItemProps> = ({ courseCard }) => {

    function getRandomColors(): string {
        const colors: string[] = ["blue", "purple", "red", "green"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      }

    return (
        <div className="course-card">
            <div className={`course-card__cover ${getRandomColors()}`}>
                <courseCard.icon/>
            </div>
            <div className="course-card-info">
                <div className="course-card-info__title-container">
                    <h3 className="course-card-info__title">{courseCard.title}</h3>
                    <span className="course-card-info__difficulty">{courseCard.difficulty}</span>
                </div>
                <p className="course-card-info__description">{courseCard.description}</p>
                <div className="course-card-info__detail-container">
                    <div className="course-card-info__score-container">
                        <StarIcon/>
                        <span className="course-card-info__score">{courseCard.score}</span>
                        <span className="course-card-info__users">{`(${courseCard.usersCount})`}</span>
                    </div>
                    <span className="course-card-info__duration">{`${courseCard.duration} часов`}</span>
                </div>
            </div>
        </div>
    );
}