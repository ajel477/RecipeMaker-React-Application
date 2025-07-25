import { useEffect } from 'react';
import axios from '../utils/axios';

const Home = () => {
  const getProducts = async () => {
    try {
      const response = await axios.get('/posts', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  useEffect(() => {
    getProducts();
  },);


  return (
    <div>
      <h1>home</h1>
      <button className='text-amber-400' onClick={getProducts}>Get Products</button>
    </div>
  );
};

export default Home;