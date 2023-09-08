import { Button, Card, Col } from "react-bootstrap"
import "./Cards.css"
const Cards = ({ addToCart, item }) => {
  const { id, image, title, price } = item
  return (
    <>
      <Col>
        <Card>
          <Card.Img className="card-image mx-auto" variant="top" src={image} />
          <Card.Body>
            <Card.Title className="cart-title" style={{ height: "48px" }}>{title}
            </Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>
              <Button variant="secondary" size="lg" className="card-button"
                onClick={() => addToCart({ id, title, price, image })}
              >Add to Cart </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default Cards;
