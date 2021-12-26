import {AddToCart,RemoveFromCart} from "../Action/cardAction";
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
        quantity: action.quantity
      }
 const newCart =[...state.cart, newItem]     
     return {...state,cart:newCart} 
      }
     
      
          
    case RemoveFromCart:
      const samesProduct = state.cart.find(item => item.productId === action.id)
if(samesProduct){

let counts = samesProduct.quantity - 1;
samesProduct.quantity = counts;
const otherss = state.cart.filter(item => item.productId !== action.id)
const remaingCart = [...otherss,samesProduct]
return {...state, cart:remaingCart}      
      }
      else{
 const cartId = action.id
const remaingCart = state.cart.filter( item => item.id !== cartId)
  return {...state,cart: remaingCart}

      }
       default:
 return state;
  }
  
  } 

export default cardReducer
