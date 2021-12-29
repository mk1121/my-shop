import {AddToCart,RemoveFromCart} from "../Action/cardAction";

/* if api Load fait then use it 

import Data from "../../Data/Data"
const localData = Data()
*/

const initialize ={
  cart:[],
  products:[] 
}
  
const cardReducer = (state = initialize, action) => {
  switch (action.type) {
    case AddToCart:
      const sameProduct = state.cart.find(item => item.productId === action.id)

      if(sameProduct){
let count = sameProduct.quantity + 1;
sameProduct.quantity = count;
const others = state.cart.filter(item => item.productId !== action.id)
const newCart = [...others,sameProduct]
return {...state, cart:newCart}      
      }

      else{
const newItem ={
        product:action,
        titles: action.title,
        productId: action.id,
        price: action.price,
        image: action.image,
        cartId:state.cart.length + 1,
        quantity: 1
      }
 const newCart =[...state.cart, newItem]     
     return {...state,cart:newCart} 
      }
         
    case RemoveFromCart:
const cartId = action.productId
const remaingCart = state.cart.filter( item => item.productId !== cartId)
  return {...state,cart: remaingCart}

       default:
 return state;
  }
  
  } 

export default cardReducer
