import React from "react";
import "./App.css";

export default function Home() {
  return (
    <main className="portada">
      <section className="hero">
        <h1 className="hero-title">BERTA PALAHÍ</h1>
        <p className="hero-subtitle">Fotografia analògica i digital · Girona</p>
        <div className="hero-image-wrapper">
          <img
            src="ber_photos/flors.webp"
            alt="Fotografia de flors realitzada per Berta Palahí"
            className="hero-image"
            loading="lazy"
          />
        </div>
        <div className="contact-info">
          <a
            href="mailto:palahi.berta@gmail.com"
            aria-label="Envia un email a Berta Palahí"
            className="contact-link"
          >
            <img
              src="ber_photos/email-icon.webp"
              alt="Icona d'email"
              className="contact-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/berta.palahi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita el perfil d'Instagram de Berta Palahí"
            className="contact-link"
          >
            <img
              src="ber_photos/instagram-icon.webp"
              alt="Icona d'Instagram"
              className="contact-icon"
            />
          </a>
        </div>
        <footer className="footer">
          <p>&copy; 2025 Berta Palahí. All rights reserved</p>
        </footer>
      </section>
    </main>
  );
}
