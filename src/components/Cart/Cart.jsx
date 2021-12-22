import { useSelector } from "react-redux"

const Cart = () => {

  const count = useSelector(state => state.count)
  return (

    <div>
     <p>hello Cart{count}</p> 
    </div>
  )
}

export default Cart
