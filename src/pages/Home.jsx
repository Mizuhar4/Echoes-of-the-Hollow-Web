import React from "react";
import SearchBar from "../components/SearchBar";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const articles = [
    { id: 1, title: "Lore del Mundo", description: "Explora la historia de Echoes of the Hollow.", link: "#" },
    { id: 2, title: "Personajes", description: "Conoce los personajes principales.", link: "#" },
    { id: 3, title: "Mapas", description: "Descubre los mapas y zonas ocultas.", link: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <SearchBar />

      <h1 className="text-4xl font-bold mb-6">Bienvenido a Echoes of the Hollow Web</h1>
      <p className="mb-6 text-gray-300">
        Explora el lore, personajes, mapas y enemigos de nuestro mundo inspirado en Hollow Knight.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
