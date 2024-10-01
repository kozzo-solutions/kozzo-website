import React from "react";
import jonathanPicture from '../images/jonathan.png';
import etiennePicture from '../images/etienne.png';
import MemberCard from "./member-card";

const AboutUs = () => (
    <div className="about-us-section">
        <div className="about-us-left-content">
            <h2>À propos</h2>
            <p>
                Nous savons que chaque projet numérique nécessite une approche sur-mesure. Grâce à une collaboration étroite avec nos clients, nous créons des solutions adaptées qui améliorent votre visibilité et garantissent une intégration fluide, tout en apportant une valeur ajoutée à votre activité.

                Rejoignez Kozzo pour bénéficier de notre savoir-faire technique et transformer vos idées en réalité. Ensemble, propulsons votre entreprise vers le monde de demain.
            </p>
            <div className="team-cards">
                <MemberCard name='Étienne Arsenault' role='Co-Fondateur' picture={etiennePicture}/>
                <MemberCard name='Jonathan Bessette' role='Co-Fondateur' picture={jonathanPicture}/>
            </div>
        </div>
    </div>
)

export default AboutUs;