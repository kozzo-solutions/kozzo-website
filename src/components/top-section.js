import React from 'react';
import Button from '@mui/material/Button';
import blocs from '../images/blocs.png';

const TopSection = () => (
  <div className="top-section">
    <div className="top-section-left-content">
      <h1>Le développement web, réinventé pour vous (A revoir)</h1>
      <p>
        Nous proposons des solutions numériques personnalisées pour répondre à
        vos besoins spécifiques et faciliter votre intégration digitale.
      </p>
      <Button className="project-button">Parlons de votre projet</Button>
    </div>
    <img src={blocs} alt="blocs"></img>
  </div>
);

export default TopSection;
