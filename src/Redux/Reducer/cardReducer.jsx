import { AddToCart, RemoveFromCart, PlusFromCart, MinusFromCart } from "../constants/cartConstants";

/* if api Load fait then use it 

import Data from "../../Data/Data"
const localData = Data()
*/

const initialize = {
  cart: [],
  total: 0,
}

const cardReducer = (state = initialize, { type, payload }) => {
  switch (type) {
    case AddToCart:
      const sameProduct = state.cart.find(item => item.productId === payload.id)
      if (sameProduct) {
        let count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        let newPrice = sameProduct.price * sameProduct.quantity
        sameProduct.totalPrice = newPrice
        const others = state.cart.filter(item => item.productId !== payload.id)
        const newCart = [...others, sameProduct]
        const newTotal = newCart.reduce((previous, item) => previous + item.totalPrice, 0)
        return { ...state, cart: newCart, total: newTotal }
      }

      else {
        const newItem = {
          title: payload.title,
          productId: payload.id,
          price: payload.price,
          image: payload.image,
          cartId: state.cart.length + 1,
          quantity: 1,
          totalPrice: payload.price
        }
        const newCart = [...state.cart, newItem]
        const newTotal = newCart.reduce((previous, item) => previous + item.totalPrice, 0)
        return { ...state, cart: newCart, total: newTotal }
      }
    case PlusFromCart:
      const addQnty = state.cart.find(item => item.productId === payload)
      let count = addQnty.quantity + 1;
      addQnty.quantity = count;
      let newPrice = addQnty.price * addQnty.quantity
      addQnty.totalPrice = newPrice
      const others = state.cart.filter(item => item.productId !== payload)
      const newCart = [...others, addQnty]
      const totalPrice = newCart.reduce((previous, item) => previous + item.totalPrice, 0)
      return { ...state, cart: newCart, total: totalPrice }

    case MinusFromCart:
      const minusQnty = state.cart.find(item => item.productId === payload)
      if (minusQnty.quantity === 1) {
        const remaingCart = state.cart.filter(item => item.productId !== payload)
        const newTotal = remaingCart.reduce((previous, item) => previous + item.totalPrice, 0)
        return { ...state, cart: remaingCart, total: newTotal }
      }
      else if (minusQnty.quantity !== 0) {
        let minusCount = minusQnty.quantity - 1;
        minusQnty.quantity = minusCount;
        let newPrices = minusQnty.price * minusQnty.quantity
        minusQnty.totalPrice = newPrices
        const otherStates = state.cart.filter(item => item.productId !== payload)
        const newCarts = [...otherStates, minusQnty]
        const totalPrices = newCarts.reduce((previous, item) => previous + item.totalPrice, 0)
        return { ...state, cart: newCarts, total: totalPrices }
      }

    case RemoveFromCart:
      const remaingCart = state.cart.filter(item => item.productId !== payload)
      const newTotal = remaingCart.reduce((previous, item) => previous + item.totalPrice, 0)
      return { ...state, cart: remaingCart, total: newTotal }

    default:
      return state;
  }

}

export default cardReducer
