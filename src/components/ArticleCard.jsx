import React from "react";

export default function ArticleCard({ article }) {
  if (!article) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-300">{article.description}</p>
      {article.link && (
        <a href={article.link} className="text-yellow-300 mt-2 inline-block">
          Leer más
        </a>
      )}
    </div>
  );
}
