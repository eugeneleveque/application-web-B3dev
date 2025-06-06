import React from "react";
import { Truck, CreditCard, RotateCcw } from "lucide-react";

export default function Reassurance() {
  const items = [
    {
      icon: <Truck className="w-6 h-6 text-yellow-700" />,
      title: "Livraison",
      text: "Votre commande sera livrée sous 7 à 12 jours ouvrés après confirmation. Les délais peuvent varier selon la période.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-700" />,
      title: "Paiement sécurisé",
      text: "Achetez maintenant, payez plus tard. Vous ne payez que ce que vous gardez. Débit automatique après 30 jours, sans frais.",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-yellow-700" />,
      title: "Retours faciles",
      text: "Retour ou échange gratuit sous 30 jours dans nos points relais partenaires. Zéro stress, zéro frais.",
    },
  ];

  return (
    <section className="bg-yellow-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-300 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-yellow-800">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
