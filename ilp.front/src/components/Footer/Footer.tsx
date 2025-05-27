import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-items">
                    <div className="footer-items__logo">
                        <span className="footer__logo">ILPy</span>
                        <p className="footer__text">{t("footer.text")}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}