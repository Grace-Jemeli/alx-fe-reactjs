import { useState, useEffect } from "react";
import recipesData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipesData);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={'recipe.id'}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src={recipe.image} title={recipe.title} className="w-full h-40 object-cover">
            </img>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 textsm">{recipe.summary}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;