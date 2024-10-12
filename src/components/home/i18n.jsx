import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './../../languages/plTranslation.json';
import en from './../../languages/engTranslation.json';

const resources = {
  en: { translation: en },
  pl: { translation: pl },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
