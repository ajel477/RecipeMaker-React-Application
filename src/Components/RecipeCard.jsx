import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, title, imageUrl, ingredients, instructions, description, Chef } =
    props.recipe;
  return (
    <Link
      to={`/Recipes/RecipeCard/${id}`}
      className="block w-[23vw] rounded overflow-hidden"
    >
      <img className="object-cover w-full h-[20vh]" src={imageUrl} alt="" />
      <h1>{title}</h1>
      <small>{Chef}</small>
      <p>
        {description?.slice(0, 100) ?? "No description available"}...
        <small className="text-blue-600"> more</small>
      </p>
    </Link>
  );
};
export default RecipeCard;
