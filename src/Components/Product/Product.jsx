import React, { useEffect, useState } from "react";
import "./product.css";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import { cartAction, stateAction } from "../Redux/action";

const Product = () => {
  const [cartData,setCartdata] = useState([]);
  const dispatch = useDispatch();

  const storeData = useSelector((state) => {
    return state.productData
  })


  useEffect(() => {
    dispatch(cartAction(cartData))
    // dispatch(stateAction(cartData,setCartdata))
  },[cartData])

  // console.log(storeData);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>
      <div className="product">
        {storeData ? storeData.map((ele) => {
          // console.log(data)
          return (
            <div key={ele.id} className="productContainer">
              <b>{ele.category.toUpperCase()}</b>
              <img src={ele.image} alt="" />
              <br />
              <div>
                <p>Price: {ele.price}</p>
                
                <p>Raiting: {ele.rating.rate}</p>
              </div>
              <br />
              <button onClick={() => {
                setCartdata([...cartData,ele]);
              }}>Add To Cart</button>
              
            </div>
          )
        }) : <h1>Product Not Found</h1>}
      </div>
    </>
  );
};

export default Product;


// {storeData.length > 0 ? storeData.map((ele) => {
//   return (
//     <div className="productContainer">
//       {storeData.length > 0 ? storeData.map((ele) => {
//   <div className="productContainer">
//     <img src={ele.image} alt="" />
//   </div>

//   }) : {}}
//     </div>

//   )
// }) : {}}
