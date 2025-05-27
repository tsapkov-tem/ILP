import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import featuresEN from "./locales/en/features.json";
import featuresRU from "./locales/ru/features.json";
import coursesEN from "./locales/en/courses.json";
import coursesRU from "./locales/ru/courses.json";
import learningPathEN from "./locales/en/learningPath.json";
import learningPathRU from "./locales/ru/learningPath.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
        features: featuresEN,
        courses: coursesEN,
        learningPath: learningPathEN
      },
      ru: {
        translation: translationRU,
        features: featuresRU,
        courses: coursesRU,
        learningPath: learningPathRU
      }
    },
    fallbackLng: "en",
    ns: ["translation", "features", "courses", "learningPath"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;