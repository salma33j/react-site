import React from "react";
import './style6.css'; // Assure-toi que le fichier existe

const Members = () => {
  const members = [
    { name: "Younes El Kadmiri", role: "Président - MIP/S3" },
    { name: "Anass El Feninat", role: "Vice-Président - MIP/S3" },
    { name: "Ibrahim El Ajmi", role: "Secrétaire Général - MIP/S3" },
    { name: "Aymane Maziane", role: "Trésorier - MIP/S3" },
    { name: "Oussama Rajef", role: "Responsable Média - MIP/S3" },
  ];

  return (
    <div className="members-section">
      <h2>Les Membres du Bureau DO1</h2>
      <p>
        les membres qui composent le bureau du club DO1 FSBM pour l'année académique 2024/2025 :
      </p>

      
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
    
    </div>
  );
};

export default Members;
