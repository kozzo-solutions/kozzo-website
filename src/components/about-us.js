import React from "react";
import jonathanPicture from '../images/jonathan.png';
import etiennePicture from '../images/etienne.png';

const AboutUs = () => (
    <div className="about-us-section">
        <h2>À propos</h2>
        <p>
            Nous savons que chaque projet numérique nécessite une approche sur-mesure. Grâce à une collaboration étroite avec nos clients, nous créons des solutions adaptées qui améliorent votre visibilité et garantissent une intégration fluide, tout en apportant une valeur ajoutée à votre activité.

            Rejoignez Kozzo pour bénéficier de notre savoir-faire technique et transformer vos idées en réalité. Ensemble, propulsons votre entreprise vers le monde de demain.
        </p>
        <div className="team-pictures">
            <img src={jonathanPicture} alt="jonathan"/>
            <img src={etiennePicture} alt="etienne"/>
        </div>
    </div>
)

export default AboutUs;