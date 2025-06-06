import React from "react";
import heroImage from "../assets/ChatGPT_hero.png"; // adapte le chemin

// import { Link } from "react-router-dom"; // facultatif si tu utilises react-router

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}

        <img
            src={heroImage}
            alt="Caillou furieux"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />

      {/* Overlay */}
      <div className="absolute bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Les Cailloux les plus vénères du marché
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto drop-shadow-md">
          Ils sont ronds, pointus, collectors, et surtout prêts à tout. Adoptez le vôtre dès maintenant.
        </p>
          <button className="bg-yellow-400 text-black text-lg font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300">
            Voir les produits
          </button>
      </div>
    </section>
  );
}
