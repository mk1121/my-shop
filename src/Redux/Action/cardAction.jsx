import { AddToCart, RemoveFromCart, PlusFromCart, MinusFromCart } from '../constants/cartConstants'
export const addToCart = (payload) => {
  return {
    type: AddToCart, payload
  }
}
export const removeFromCart = (payload) => {
  return {
    type: RemoveFromCart, payload
  }
}
export const plusFromCart = (payload) => {
  return {
    type: PlusFromCart, payload
  }
}
export const minusFromCart = (payload) => {
  return {
    type: MinusFromCart, payload
  }
} 
