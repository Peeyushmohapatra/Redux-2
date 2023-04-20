export function reducer(state=[],action){
    if(action.type === "productAction"){
        return {
            ...state,
            productData:action.data,
            myData:state
        }
    }
    else if(action.type === "cartAction"){
        // console.log(action)
        return {
            ...state,
            cartData:action.cart
        }
    }
    return state
}