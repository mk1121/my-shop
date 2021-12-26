import {AddToCart,RemoveFromCart} from "../Action/cardAction";
const initialize ={
  cart:[],
  products:[]
  }
  
const cardReducer = (state = initialize, action) => {
  switch (action.type) {
    case AddToCart:
const newItem ={
        product:action,
        titles: action.title,
        productId: action.id,
        price: action.price,
        image: action.image,
        cartId:state.cart.length + 1
      }
 const newCart =[...state.cart, newItem]     
     return {...state,cart:newCart}      
    case RemoveFromCart:
const cartId = action.cartId
const remaingCart = state.cart.filter( item => item.cartId !== cartId)
  return {...state,cart: remaingCart}
 default:
 return state;
  }
  
  } 

export default cardReducer
