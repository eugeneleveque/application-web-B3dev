export default function Navbar() {
  return (
    <nav className="w-full bg-yellow-50 shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="src/assets/ChatGPT_favicon.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Menu de navigation */}
        <div className="flex gap-6 text-lg font-medium">
          <a href="/" className="hover:text-blue-600">Accueil</a>
          <a href="/products" className="hover:text-blue-600">Produits</a>
          <a href="/about" className="hover:text-blue-600">À propos</a>
        </div>



        {/* Panier */}
        <div className="flex items-center">
          <a href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800 hover:text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h11.1M7 13V6h13M5 21a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </a>
        </div>

        {/* Connexion */}
        <div className="flex items-center ml-4">
          <a href="/auth" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800 hover:text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A9 9 0 1118.364 4.56M15 12h.01M12 12h.01M9 12h.01M9.75 16h4.5"
              />
            </svg>
          </a>
        </div>

      </div>
    </nav>
  );
}
