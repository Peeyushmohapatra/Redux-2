import React, { useState } from 'react'
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Redux/action'

const Cart = () => {
  
  const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state
    });


    function dispatchFn(id){
      const ans = data.cartData.filter((ele) => {
        return ele.id !== id
      });
      dispatch(cartAction(ans));
    }
    

   
  return (
    <div className='cart'>
      <h1>{data.cartData.length > 0 ? "Proceed To Buy" : "Add Items To Your Cart"}</h1>
      <div className='cartCard'>
        {data.cartData ? data.cartData.map((ele) => {
          return (
            
            <div className="cartProduct">
              <h4>{ele.category.toUpperCase()}</h4>
              <img src={ele.image} alt="" />
              <div>
                <p>Price: {ele.price}</p>
                <p>Raiting: {ele.rating.rate}</p>
              </div>
              <button onClick={() => {
                dispatchFn(ele.id)
              }}>Remove From Cart</button>
            </div>
          )
        }) : null}
        </div>
    </div>
  )
}

export default Cart