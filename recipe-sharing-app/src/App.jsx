import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </div>
          }
        />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
