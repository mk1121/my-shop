import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap"
import { connect } from "react-redux";
import "./Cards.css"
const Cards = (props) => {
  const cart = props.cart;
  const item = props.product;
 const cartQn =  cart.find(it => it.productId === item.id );
 if(cartQn){
   cartQn.quantity = item.quantity;
  }
  let [count,setCount] = useState(0)
  const addToCart = props.addToCart

item.quantity = count ;
console.log(item)
const myFunction = () => {  if(item.quantity > 0){
return (<>
<Card.Text className="card-quantity ">
               Quantity <Button variant="secondary" onClick={() =>{return setCount(count - 1)}}>-</Button>{' '} 
              <span className="cardCount mx-2" style={{cursor:"default"}} >{item.quantity }</span>
              <Button variant="secondary" onClick={() =>{return setCount(count + 1), addToCart(item.id,item.title,item.price,item.image,item.quantity)}}>+</Button>{' '}
                       </Card.Text >
</>)
} 
else{
return ( <>
<Card.Text>
              <Button variant="secondary" size="lg" className="card-button" onClick={() =>{return setCount(count + 1),addToCart(item.id,item.title,item.price,item.image,item.quantity)}}>
   Add to Cart 
  </Button>
            </Card.Text>
 
      </>)
  }
    }



  return (

    <>
      <Col> 
<Card>
    <Card.Img className="card-image mx-auto" variant="top" src={item.image} />
    <Card.Body>
      <Card.Title className="cart-title" style={{height:"48px"}}>{item.title}
            </Card.Title>
      <Card.Text>${item.price}</Card.Text>
            {
            myFunction()
            }
           

            
             
                         
    </Card.Body>
  </Card>  

  </Col>   
      </>

  )
}
const mapStateToProps = state =>{
    return {
        cart: state.cart
  }
}



export default connect(mapStateToProps)(Cards);
