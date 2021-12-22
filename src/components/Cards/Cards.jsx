import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap"

const Cards = (props) => {
  const item = props.product;
  let [count,setCount] = useState(0);

  return (

    <>
      <Col> 
<Card>
    <Card.Img className="card-image" variant="top" src={item.image} />
    <Card.Body>
      <Card.Title className="cart-title">{item.title}</Card.Title>
      <Card.Text>
       ${item.price} 
      </Card.Text>
      <Card.Text className="card-quantity ">
       Quantity <Button variant="secondary" onClick={() => {if(count === 0){setCount(0) } else{setCount(count - 1)} }}>-</Button>{' '} <span className="cardCount mx-2" style={{cursor:"default"}} >{count}</span> <Button variant="secondary" onClick={() => setCount(count + 1) }>+</Button>{' '}
                       </Card.Text >
     <Card.Text><Button variant="secondary" size="lg" className="card-button">
   Add to Cart 
  </Button> </Card.Text>
    </Card.Body>
  </Card>  

  </Col>   
      </>

  )
}

export default Cards
