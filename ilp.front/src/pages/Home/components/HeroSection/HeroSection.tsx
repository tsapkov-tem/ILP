import React from "react";
import { useTranslation } from 'react-i18next';
import '../../../../il8n';
import './HeroSection.css'

const HeroSection : React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className="hero">
                <div className="hero-container">
                    <h1 className="hero-container__title">
                        {t("heroTitle")}
                    </h1>
                    <p className="hero-container__text">
                        {t("heroText")}
                    </p>
                    <div className="hero-buttons">
                        <button className="hero-button hero-button_start">
                            {t("heroStart")}
                        </button>
                        <button className="hero-button hero-button_explore">
                            {t("heroExplore")}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;