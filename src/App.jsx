import Navbar from "./Components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className='py-10 px-[20%] w-screen h-screen text-white bg-gray-800'>
      
      <Navbar />
      <MainRoutes />
      
    </div>
  );
};
export default App;
