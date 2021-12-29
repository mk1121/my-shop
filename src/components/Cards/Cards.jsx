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
  return (

    <>
      <Col> 
<Card>
    <Card.Img className="card-image mx-auto" variant="top" src={item.image} />
    <Card.Body>
      <Card.Title className="cart-title" style={{height:"48px"}}>{item.title}
            </Card.Title>
      <Card.Text>${item.price}</Card.Text>

            <Card.Text>
  
              <Button variant="secondary" size="lg" className="card-button" onClick={() =>
            {
              setCount(count + 1),
              addToCart(item.id,item.title,item.price,item.image,item.quantity)
            }
            }
            >Add to Cart </Button>
            </Card.Text>
           

            
             
                         
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
