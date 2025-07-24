import RecipeCard from "../Components/RecipeCard";
import { recipecontext } from "../Context/RecipeContext";
import { useContext } from "react";


const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>

  ));

  return (
    <div className="text-purple-400 flex gap-x-2">
      {data.length > 0 ? renderRecipe : "No recipe found"}
    </div>
  );
};
export default Recipes;