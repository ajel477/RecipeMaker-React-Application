import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-10'>
        <NavLink className={(e)=> e.isActive ? "text-green-300" : "" } to='/'>
            Home
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-green-300" : "" } to='/Recipes'>
            Recipes
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-green-300" : ""} to='/About'>
            About
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-green-300" : ""} to='/create-recipe'>
            Create Recipe
        </NavLink>
        
      
    </div>
  );
};
export default Navbar;