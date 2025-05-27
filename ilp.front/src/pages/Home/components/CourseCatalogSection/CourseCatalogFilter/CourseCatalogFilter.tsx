import React from "react";
import { useTranslation } from 'react-i18next';
import '../../../../../il8n';
import './CourseCatalogFilter.css'

interface CourseCatalogFilterProps {
    difficulties: string[];
    selectedDifficulty: string;
    onSelectDifficulty: (difficulty: string) => void;
}

export const CourseCatalogFilter : React.FC<CourseCatalogFilterProps> = ({difficulties, selectedDifficulty, onSelectDifficulty}) => {
    const { t } = useTranslation("courses");

    return (
        <div className="difficulty-filter">
            <div className="filter-description">
                <h2 className="filter-description__title">{t("coursesTitle")}</h2>
                <p className="filter-description__text">{t("coursesText")}</p>
            </div>
            <div className="difficulty-filter-buttons">
                {difficulties.map((difficulty) => (
                    <button 
                        key={difficulty}
                        className={`difficulty-filter-buttons__button ${selectedDifficulty === difficulty ? "active" : ""}`}
                        onClick={() => onSelectDifficulty(difficulty)}
                    >
                        {difficulty}
                    </button>
                ))}
            </div>
        </div>
    )
}