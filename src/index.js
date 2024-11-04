import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import heroImage from './resources/images/hero-image-space.png';

import common_fr from './resources/translations/fr/common.json';
import common_en from './resources/translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="image_src" href={heroImage} />
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
