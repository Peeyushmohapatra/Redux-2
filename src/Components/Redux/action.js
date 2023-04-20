export function productAction (data){
    return{
        type:"productAction",
        data:data
    }
}

export function cartAction(cart){
    return {
        type:"cartAction",
        cart:cart
    }
}

