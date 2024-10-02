import React from 'react';
import ServiceCard from './service-card';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';

const Services = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="service-cards">
        <ServiceCard
          icon={<LanguageIcon></LanguageIcon>}
          title={t('services.web-design-code-title')}
          desc="Révolutionnez votre image numérique à l'aide de nos solutions web personnalisées. À l'aide de notre expertise en développement, Kozzo possède les compétences nécessaires permettant à votre organisation de se démarquer face à la concurrence."
        />
        <ServiceCard
          icon={<WebIcon></WebIcon>}
          title="Conception Web sans code"
          desc="Simplifiez la création de votre site avec notre service de conception sans code. Gagnez du temps et démarquez-vous avec des modèles prêts à l'emploi et sur-mesure."
        />
        <ServiceCard
          icon={<ComputerIcon></ComputerIcon>}
          title="Création de solutions logicielles"
          desc="Optimisez la performance de vos systèmes grâce à nos solutions logicielles adaptées à vos besoins. Chez Kozzo, nous concevons des solutions logicielles uniques qui répondent précisément aux besoins de votre organisation, que ce soit pour mesurer la performance, automatiser des processus ou faciliter vos opérations internes."
        />
        <ServiceCard
          icon={<SettingsSuggestIcon></SettingsSuggestIcon>}
          title="Maintenance des services"
          desc="Assurez la continuité de vos opérations grâce à notre service de maintenance complet. Développant des relations de confiance avec nos clients, nous veillons à ce que vos systèmes demeurent à jour tout en minimisant les interruptions et en maximisant la fiabilité."
        />
      </div>
    </div>
  )
};
export default Services;
