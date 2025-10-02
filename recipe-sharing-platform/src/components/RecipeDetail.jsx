import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json"; // ✅ import JSON directly

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => String(r.id) === String(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe)
    return (
      <p className="text-center text-lg text-gray-500 mt-10">
        Loading recipe...
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {recipe.title}
      </h2>

      <div className="flex justify-center mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-2xl shadow-lg max-h-80 object-cover w-full sm:w-2/3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Ingredients
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="leading-relaxed">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Instructions
          </h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {recipe.instructions}
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-8">
        <Link
          to="/"
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
