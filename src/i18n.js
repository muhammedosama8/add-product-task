import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import translationAr from "./locales/ar/translation.json";
import translationENG from "./locales/en/translation.json";

const resources = {
  en: {
    translation: translationENG,
  },
  ar: {
    translation: translationAr,
  },
};

const language = localStorage.getItem("lang");
if (!language) localStorage.setItem("lang", "ar");

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "ar",
    fallbackLng: "ar",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;