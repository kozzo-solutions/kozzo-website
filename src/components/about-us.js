import React from 'react';
import jonathanPicture from '../resources/images/jonathan.png';
import etiennePicture from '../resources/images/etienne.png';
import MemberCard from './member-card';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="about-us-section">
      <div className="about-us-left-content">
        <h2>{t('header.about')}</h2>
        <p>{t('about-us.kozzo-description')}</p>
        <div className="team-cards">
          <MemberCard
            name="Étienne Arsenault"
            role={t('about-us.co-founder-title')}
            picture={etiennePicture}
          />
          <MemberCard
            name="Jonathan Bessette"
            role={t('about-us.co-founder-title')}
            picture={jonathanPicture}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
