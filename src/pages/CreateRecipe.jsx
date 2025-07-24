import { nanoid } from "nanoid";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const CreateRecipe = () => {
  const navigate = useNavigate()
 const {data, setData} = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
   recipe.id = nanoid();
   console.log(data);
    
   const copydata = [...data];
   copydata.push(recipe);
   setData(copydata);
   toast.success("New Recipe Created")
   reset();
   navigate("/recipes")

  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}
    className="flex flex-col gap-2 text-black">
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

      <select
        {...register("category")}>
        <option value="drinks">drinks</option>
        <option value="main course">main course</option>
        <option value="starter">starter</option>
      </select>
      

      <button className='mt-2 px-4 py-2 border border-white'>Save Recipe</button>
    </form>
  );
};
export default CreateRecipe;
