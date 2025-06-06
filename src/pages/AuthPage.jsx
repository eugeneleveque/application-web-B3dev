import React, { useState } from "react";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:3000/auth/login", {
          username: form.username,
          password: form.password,
        });
        alert("✅ Connecté !");
        localStorage.setItem("token", res.data.token);
      } else {
        await axios.post("http://localhost:3000/users", {
          email: form.email,
          username: form.username,
          password: form.password,
          firstname: form.firstname,
          lastname: form.lastname,
          address: {
            city: "Paris",
            street: "Rue de la Paix",
            geolocation: {
              lat: "48.8566",
              long: "2.3522",
            },
          },
          number: 123,
          zipcode: "75002",
          phone: "0600000000",
        });
        alert("✅ Compte créé !");
        setIsLogin(true);
      }
    } catch (err) {
      alert("❌ Une erreur est survenue");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-6 text-yellow-800 text-center">
        {isLogin ? "Connexion" : "Créer un compte"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              name="firstname"
              placeholder="Prénom"
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Nom"
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </>
        )}

        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-400"
        >
          {isLogin ? "Se connecter" : "Créer un compte"}
        </button>

        <p className="text-center text-sm mt-4">
          {isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 hover:underline"
          >
            {isLogin ? "Créer un compte" : "Se connecter"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
