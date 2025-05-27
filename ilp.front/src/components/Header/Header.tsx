import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./Header.css";
import '../../il8n';
import SearchIcon from "../Icons/SearchIcon";

export const Header: React.FC = () => {
    const { t } = useTranslation();
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-nav">
                    <span className="header__logo">ILPy</span>
                    <nav className="nav-menu">
                        <NavLink to="/home" className="nav-menu__item">{t("home")}</NavLink>
                        <NavLink to="/learning" className="nav-menu__item">{t("learning")}</NavLink>
                        <NavLink to="/path" className="nav-menu__item">{t("path")}</NavLink>
                        <NavLink to="/community" className="nav-menu__item">{t("community")}</NavLink>
                    </nav>
                </div>
                <div className="header-functions">
                    <div className="header-functions__container">
                        <SearchIcon/>
                        <input type="text" placeholder="Search courses..." className="header-functions__input"/>
                    </div>
                    <button className="header-functions__button">
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    );
}