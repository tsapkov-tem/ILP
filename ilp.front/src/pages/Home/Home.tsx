import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import { CourseCatalogSection } from "./components/CourseCatalogSection/CourseCatalogSection";
import { LearningPathSection } from "./components/LearningPathSection/LearningPathSection";
import { CtaSection } from "./components/CtaSection/CtaSection";
import { Footer } from "../../components/Footer/Footer";

const Home : React.FC = () => {
    return (
        <main className="home">
            <HeroSection/>
            <FeaturesSection/>
            <CourseCatalogSection/>
            <LearningPathSection/>
            <CtaSection/>
            <Footer/>
        </main>
    )
};

export default Home;