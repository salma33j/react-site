import React from 'react';
import '../pagesPReact/style2.css'; // Le fichier CSS personnalisé
function Apropos() {
  return (
    <div>
      <div id="intro">
        <h1 className="centrer">À propos de nous</h1>
        <p>
          Bienvenue sur la page officielle de <strong>DO1</strong> ! Nous sommes une communauté passionnée de<br />
          développement web et mobile, fondée en septembre 2023 à l'ESTN. Notre mission est de<br />
          rassembler les esprits créatifs, d'encourager l'innovation et de développer des compétences<br />
          dans le domaine du génie logiciel.
        </p>
      </div>

      <div id="equipe">
        <h2 className="centrer">Notre Équipe</h2>
        <table id="tab1">
          <thead>
            <tr>
              <th>Rôle</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team Leader</td>
              <td>Coordonne les activités, dirige les réunions et motive les membres.</td>
            </tr>
            <tr>
              <td>Vice Team Leader</td>
              <td>Assiste et remplace le leader, prend en charge des projets spécifiques.</td>
            </tr>
            <tr>
              <td>Secrétaire</td>
              <td>Rédige les comptes rendus, gère la communication interne.</td>
            </tr>
            <tr>
              <td>Communication & Médias</td>
              <td>Gère les réseaux sociaux, crée du contenu et organise la promotion.</td>
            </tr>
            <tr>
              <td>Trésorier</td>
              <td>Gère les finances et prépare les rapports budgétaires.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="objectifs">
        <h2 className="centrer1">Nos Objectifs</h2>
        <p>
          <span className="c1">Faire grandir la communauté :</span> Accueillir de nouveaux membres, organiser des événements <br/> inclusifs et favoriser une ambiance chaleureuse.<br />
          <span className="c1">Expérimenter et apprendre ensemble :</span>Lancer des programmes interactifs comme des  <br/>ateliers de développement de jeux et des journées hack..<br />
          <span className="c1">Favoriser l'innovation :</span>  Organiser des concours et mettre en place un "Mur de l'Innovation" <br/>pour collaborer sur des idées créatives..<br />
          <span className="c1">Établir des liens :</span>  Créer des soirées de réseautage et des événements pour connecter nos<br/> membres avec des professionnels de l'industrie..<br />
          <span className="c1">Célébrer la diversité :</span> Promouvoir l'inclusion grâce à des événements culturels et des <br/>initiatives qui mettent en lumière tous les talents.<br />
        </p>
      </div>

      <div id="actions">
        <h2 className="centrer">Nos Moyens d'Action</h2>
        <ul id="liste1">
          <li>Soirées, hackathons et ateliers créatifs.</li>
          <li>Promotion sur les réseaux sociaux.</li>
          <li>Mentorat pour guider les membres.</li>
          <li>Partenariats avec d'autres clubs.</li>
        </ul>
      </div>
    </div>
  );
}

export default Apropos;

