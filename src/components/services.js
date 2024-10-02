import React from 'react';
import ServiceCard from './service-card';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';

const Services = () => (
  <div className="services-section">
    <h2>Services</h2>
    <div className="service-cards">
      <ServiceCard
        icon={<LanguageIcon></LanguageIcon>}
        title="Développement Web avec code"
        desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."
      />
      <ServiceCard
        icon={<WebIcon></WebIcon>}
        title="Conception Web sans code"
        desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."
      />
      <ServiceCard
        icon={<ComputerIcon></ComputerIcon>}
        title="Développement de systèmes informatique"
        desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."
      />
      <ServiceCard
        icon={<SettingsSuggestIcon></SettingsSuggestIcon>}
        title="Maintenance des services"
        desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."
      />
    </div>
  </div>
);
export default Services;
