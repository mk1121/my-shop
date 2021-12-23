import { useEffect, useState } from "react"
import {AddToCart,RemoveFromCart} from "../Action/cardAction"

 
const initialize ={
  cart:[],
  products:  [
        {name: 'Lenovo Laptop', id: 1},
        {name: 'Afsus Laptop', id: 2},
        {name: 'Dell Laptop', id: 3},
        {name: 'HP Laptop', id: 4},
        {name: 'Toshiba Laptop', id: 5}
    ] }

const cardReducer = (state = initialize, action) => {
  switch (action.type) {
    case AddToCart:
const newItem ={
        name:action.name,
        id:action.id,
        cardId:state.cart.length + 1
      }
 const newCart =[...state.cart, newItem]     
     return {...state,cart:newCart}      
    case RemoveFromCart:
const cardId = action.cardId
const remaingCard = state.card.filter( item => item.cardId !== cardId)
  return {...state,remaingCard}
 default:
 return state;
  }
  
  } 

export default cardReducer
