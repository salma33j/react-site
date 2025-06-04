import React from 'react';
import './style1.css'; // Assurez-vous que ce fichier est présent
import { useNavigate } from 'react-router-dom';
function Accueil(){
const navigate=useNavigate();
const clickboton = () => {
  navigate('/page5'); 
};

    return(
    <div className="col1">
    
  <div className="extra-content">
        <div className="text-container">
          <h1>Bienvenue  Chez  DO1</h1>
           <p>
                   Un espace collaboratif pour innover, apprendre, et créer dans le domaine du génie logiciel.
           </p>
           <button onClick={clickboton} className="boton1">Rejoindre notre club</button>
        </div>
  </div>

    </div>
    );
  }
  
export default Accueil;