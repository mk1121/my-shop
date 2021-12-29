import { Button, Card, Col } from "react-bootstrap"
import "./Cards.css"
const Cards = (props) => {
  const item = props.ps;
const addToCart = props.addToCart
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
  
              <Button variant="secondary" size="lg" className="card-button" 
                  onClick={() =>  addToCart(item.id,item.title,item.price,item.image)}
              >Add to Cart </Button>

            </Card.Text>
           

            
             
                         
    </Card.Body>
  </Card>  

  </Col>   
      </>

  )
}

export default Cards;
