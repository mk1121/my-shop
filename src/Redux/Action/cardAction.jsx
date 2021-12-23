export const AddToCart = "AddToCart";
export const RemoveFromCart = "RemovefromCart";
export const addToCart = (id,name) =>{
  return {
    type: AddToCart,id,name
  } 
} 
export const removeFromCart = cardId => {
  return {
    type: RemoveFromCart,cardId
  }
} 
