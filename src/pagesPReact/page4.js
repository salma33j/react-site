import React from "react";
import '../pagesPReact/style4.css'

// Import des images locales
import despImg from "../pagesPReact/Desp.png";
import web3Img from "../pagesPReact/3.0.png";
import javaImg from "../pagesPReact/java.png";
import resImg from "../pagesPReact/res.png";
import mobileImg from "../pagesPReact/mobile.png";
import netImg from "../pagesPReact/NET.png";

const activities = [
  {
    image: despImg,
    title: "Gestion de projets",
    description: "Conférence sur les bonnes pratiques et outils pour gérer efficacement les projets informatiques."
  },
  {
    image: web3Img,
    title: "Web 3.0",
    description: "Atelier interactif explorant les technologies du futur, les applications décentralisées."
  },
  {
    image: javaImg,
    title: "Java / Java EE",
    description: "Formation approfondie sur le développement d’applications Java pour le web et les entreprises."
  },
  {
    image: resImg,
    title: "Réseaux informatiques",
    description: "Conférence technique sur la gestion des réseaux modernes."
  },
  {
    image: mobileImg,
    title: "Développement mobile",
    description: "Atelier pratique pour créer des applications mobiles intuitives et performantes."
  },
  {
    image: netImg,
    title: ".NET Framework",
    description: "Formation axée sur la création d'applications robustes avec la plateforme Microsoft .NET."
  }
];

export default function Activities() {
  return (
    <div className="div1">

    <h3>Nos Activités</h3>
    <div className="activitie">
      {activities.map((activity, index) => (
        <div key={index} className="activity-card">
          <img src={activity.image} alt={activity.title} />
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
