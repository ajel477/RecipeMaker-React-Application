import Home from '../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import CreateRecipe from '../pages/CreateRecipe';
import SingleRecipe from '../pages/SingleRecipe';
import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/Recipes/RecipeCard/:id" element={<SingleRecipe />} />
        {/* Add more routes as needed */}
    </Routes>
  );
};
export default MainRoutes;