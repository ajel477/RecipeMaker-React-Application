import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit} = useForm({ defaultValues: {
    imageUrl : recipe.imageUrl,
    title : recipe.title,
    chef : recipe.Chef,
    description : recipe.description,
    ingredients : recipe.ingredients,
    instructions: recipe.instructions,
  } });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    toast.success("Recipe Updated");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id !== params.id);
    setData(filterdata);
    toast.success("recipe Deleted!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.imageUrl} alt="umbi" />
      </div>

      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-1/2 p-2 flex flex-col gap-2 text-black"
      >
        <input
          {...register("imageUrl")}
          type="url"
          placeholder="Enter Image URL"
        ></input>
        <small>This is how eror is shown</small>
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Name"
        ></input>

        <input
          {...register("Chef")}
          type="text"
          placeholder="Chef Name"
        ></input>

        <textarea
          {...register("description")}
          type="text"
          placeholder="Start from here"
        ></textarea>

        <textarea
          {...register("ingredients")}
          type="text"
          placeholder="write ingredients"
        ></textarea>

        <textarea
          {...register("instructions")}
          type="text"
          placeholder="Enter Instructions seperated by commas"
        ></textarea>

        <select {...register("category")}>
          <option value="drinks">drinks</option>
          <option value="main course">main course</option>
          <option value="starter">starter</option>
        </select>

        <button className="mt-2 px-4 py-2 border bg-green-500 border-white">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-2 px-4 py-2 border bg-red-700 border-white"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading/..."
  );
};
export default SingleRecipe;
