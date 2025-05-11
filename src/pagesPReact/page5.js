import React, { useState } from "react";
import '../pagesPReact/style5.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    type: "information",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    alert("Merci pour votre message !");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      type: "information",
      message: ""
    });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>

        <input
          type="text"
          name="name"
          placeholder="Votre nom complet"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Votre numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="information">Demande d'information</option>
          <option value="partenariat">Proposition de partenariat</option>
          <option value="support">Assistance / Support</option>
          <option value="autre">Autre</option>
        </select>

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
