import React from "react";
import { useTranslation } from 'react-i18next';
import type { Feature } from "../../../../types/Feature";
import '../../../../il8n';
import "./FeatureSection.css"
import { FeatureItem } from "./FeatureItem/FeatureItem";
import RouteIcon  from "../../../../components/Icons/RouteIcon";
import BrainIcon from "../../../../components/Icons/BrainIcon";
import GamepadIcon from "../../../../components/Icons/GamepadIcon";
import ChalkboardIcon from "../../../../components/Icons/ChalkboardIcon";
import UsersIcon from "../../../../components/Icons/UsersIcon";
import MobileIcon from "../../../../components/Icons/MobileIcon";



const FeaturesSection : React.FC = () => {
    const { t } = useTranslation("features");

    const features: Feature[] = [
        {icon: RouteIcon, title: t("path.title"), text: t("path.text")},
        {icon: BrainIcon, title: t("recomendations.title"), text: t("recomendations.text")},
        {icon: GamepadIcon, title: t("gamified.title"), text: t("gamified.text")},
        {icon: ChalkboardIcon, title: t("lesson.title"), text: t("lesson.text")},
        {icon: UsersIcon, title: t("community.title"), text: t("community.text")},
        {icon: MobileIcon, title: t("crossplatform.title"), text: t("crossplatform.text")},
    ];

    return (
        <section className="features">
            <div className="features-container">
                <div className="features-introduce">
                    <h2 className="features-introduce__title">{t("introduceTitle")}</h2>
                    <p className="features-introduce__text">{t("introduceText")}</p>
                </div>
                <ul className="features-list">
                    {features.map((feature) => (
                            <FeatureItem feature={feature} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
}

export default FeaturesSection;