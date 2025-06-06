import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-yellow-50 py-12 px-6 text-center">
      <h2 className="text-2xl font-bold text-yellow-900 mb-2">
        Rejoins notre newsletter et reçois -20%
      </h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Reste à jour sur les nouveaux cailloux collectors, offres surprises et caillassages légendaires.
      </p>
      <form className="flex justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Ton adresse email"
          className="border-2 border-yellow-600 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
        />
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-500 transition"
        >
          S'abonner
        </button>
      </form>
    </section>
  );
}
