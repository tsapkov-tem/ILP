import React from "react";
import { useTranslation } from "react-i18next";
import "./CtaSection.css"

export const CtaSection : React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="cta">
            <div className="cta-container">
                <h2 className="cta__title">{t("ctaTitle")}</h2>
                <p className="cta__text">{t("ctaText")}</p>
                <div className="cta-buttons">
                    <button className="cta-buttons__start">
                        {t("heroStart")}
                    </button>
                    <button className="cta-buttons__explore">
                        {t("heroExplore")}
                    </button>
                </div>
            </div>
        </section>
    );
}