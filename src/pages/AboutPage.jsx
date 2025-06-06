import React from "react";
import aboutImg from "../assets/ChatGPT_hero.png";

export default function AboutPage() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">À propos</h2>
          <p className="text-gray-700 leading-relaxed">
            J’te Caillasse est la première boutique dédiée à la vente de cailloux de caractère.  
            Ici, les pierres ne sont pas juste belles — elles sont furieuses, légendaires et parfois même collector.  
            Notre mission : vous faire sourire et vous livrer les cailloux les plus fous du marché, dans un esprit 100% absurde et assumé.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="photo à propos"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}