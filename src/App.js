import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import {useDispatch} from "react-redux"
import { useEffect, useState } from 'react';
import { productAction } from './Components/Redux/action';
import Cart from './Components/Addtocart/Cart';
import {Routes, Route} from "react-router-dom"


function App() {
  const dispatch = useDispatch();
  const [toggle,setToggle] = useState(false);
  useEffect(() => {
    if(toggle === false){
      apiCall();
    }
  },[])

  async function apiCall(){
    const api = await fetch("https://fakestoreapi.com/products");
    const apiResponse = await api.text();
    const jsonData = JSON.parse(apiResponse);
    dispatch(productAction(jsonData));
    setToggle(true)
  }
  return (
    <div className="App">
     <Navbar/>
     {/* <Home/> */}
     {/* <Product/>
     <Cart/> */}

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/addtocart' element={<Cart/>}/>
      <Route path='*' element={<>NO PAGE FOUND</>}/>
     </Routes>
    </div>
  );
}

export default App;
