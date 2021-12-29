export const AddToCart = "AddToCart";
export const RemoveFromCart = "RemovefromCart";
export const addToCart = (id,title,price,image) =>{
  return {
    type: AddToCart,id,title,price,image
  } 
} 
export const removeFromCart = (productId) => {
  return {
    type: RemoveFromCart,productId
  }
} 
