import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yellow-700 text-white text-center py-4 ">
      <p>
        ©2025 – par{" "}
        <a
          href="https://github.com/eugeneleveque/application-web-B3dev"
          className="underline hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eugène Lévêque
        </a>
        . Tous droits réservés.
      </p>
    </footer>
  );
}
