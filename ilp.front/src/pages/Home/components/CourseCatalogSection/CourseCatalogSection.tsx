import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../../../../il8n';
import { CourseCatalogFilter } from "./CourseCatalogFilter/CourseCatalogFilter";
import type { CourseCard } from "../../../../types/CourseCard";
import { CourseCardItem } from "./CourseCardItem/CourseCardItem";
import CodeIcon from "../../../../components/Icons/CodeIcon";
import ChartLineIcon from "../../../../components/Icons/ChartLineIcon";
import RobotIcon from "../../../../components/Icons/RobotIcon";
import "./CourseCatalogSection.css";

export const CourseCatalogSection : React.FC = () => {
    const { t } = useTranslation("courses");
    const [difficulties, setDifficulties] = useState<string[]>([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>(t("categories.all"));
    const [courses, setCourses] = useState<CourseCard[]>([]);

    useEffect(() => {
        setDifficulties([t("categories.all"), t("categories.begginer"), t("categories.intermediate"), t("categories.advanced")]);
    }, [])

    useEffect(() => {
        setCourses([{
            icon: CodeIcon,
            title: "основы Веб-разработки",
            description: "Изучите HTML, CSS и Javascript, создавая свой первый сайт с нуля.",
            difficulty: t("categories.begginer"),
            score: 4.7,
            usersCount: 1250,
            duration: 8,
          },
          {
            icon: ChartLineIcon,
            title: "Основы науки о данных",
            description: "Освойте Python, Pandas и инструменты визуализации для анализа и интерпретации данных.",
            difficulty: t("categories.intermediate"),
            score: 4.9,
            usersCount: 3560,
            duration: 12,
          },
          {
            icon: RobotIcon,
            title: "Основы машинного обучения",
            description: "Знакомство с алгоритмами и моделями, которые используются в современных приложениях искусственного интеллекта.",
            difficulty: t("categories.advanced"),
            score: 4.5,
            usersCount: 890,
            duration: 15,
          }]);
    }, []);

    const handleSelectDifficulty = (difficulty: string) => {
        setSelectedDifficulty(difficulty);
    };

    return (
        <section className="courses">
            <div className="courses-container">
                <CourseCatalogFilter 
                    difficulties={difficulties}
                    selectedDifficulty={selectedDifficulty}
                    onSelectDifficulty={handleSelectDifficulty}
                />
                <div className="courses-cards">
                    {
                        courses.map((courses) => (
                            <CourseCardItem courseCard={courses}/>
                        ))
                    }
                </div>
                <div className="courses-buttons-container">
                    <button className="courses-buttons-container__button">
                        {t("viewCoursesButton")}
                    </button>
                </div>
            </div>
        </section>
    );
}