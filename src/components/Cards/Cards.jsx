import { Button, Card, Col } from "react-bootstrap"

const Cards = (props) => {
  const item = props.product;
console.log(item)
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
       Quantity <Button variant="secondary">-</Button>{' '} <span className="cardCount">99</span> <Button variant="secondary" >+</Button>{' '}
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
