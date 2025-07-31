import RecipeCard from "../Components/RecipeCard";
import { recipecontext } from "../Context/RecipeContext";
import { useContext, useEffect } from "react";

const Recipes = () => {
  const { data, setData } = useContext(recipecontext);

  useEffect(() => {
    // Get recipes from localStorage when component mounts
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setData(JSON.parse(storedRecipes));
    }
  }, []);

  const renderRecipe = data?.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ));

  return (
    <div className="text-purple-400 flex gap-x-2 flex-wrap">
      {data && data.length > 0 ? renderRecipe : "No recipe found"}
    </div>
  );
};

export default Recipes;