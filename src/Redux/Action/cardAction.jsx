export const AddToCart = "AddToCart";
export const RemoveFromCart = "RemovefromCart";
export const addToCart = (id,title,price,image,quantity) =>{
  return {
    type: AddToCart,id,title,price,image,quantity
  } 
} 
export const removeFromCart = (cartId,id,quantity,price) => {
  return {
    type: RemoveFromCart,cartId,id,quantity,price
  }
} 
