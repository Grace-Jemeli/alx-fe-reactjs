import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json"; // ✅ import JSON directly

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // ✅ no need to fetch
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Recipe Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
