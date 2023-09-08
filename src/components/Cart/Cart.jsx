import "./Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { removeFromCart, plusFromCart, minusFromCart } from "../../Redux/Action/cardAction"
const Cart = ({ cart, removeFromCart, plusFromCart, minusFromCart, }) => {
  return (
    <div>
      {cart
        .sort((a, b) => a.cartId - b.cartId)
        .map(({ productId, cartId, image, price, quantity, titles }) => {
          return (
            <div key={cartId}>
              <Row >
                <Col className="col-2">
                  <img src={image} alt={" "} style={{ width: "50px" }} />
                </Col>
                <Col className="col-4">
                  <p id="cart-title" style={{ fontWeight: 700 }}>{titles}</p>
                  <p>price: ${price}</p>
                  <p>Quantity: {quantity}</p>
                </Col>
                <Col className="col-4 quantityBtn">

                  <Button
                    onClick={() => plusFromCart(productId)}
                    className="mx-auto " variant="secondary" size="sm">
                    <FontAwesomeIcon icon={faPlusCircle} />

                  </Button>
                  <span>{quantity}</span>

                  <Button
                    onClick={() => minusFromCart(productId)}
                    className="mx-auto " variant="secondary" size="sm">

                    <FontAwesomeIcon icon={faMinusCircle} />

                  </Button>
                </Col>
                <Col className="col-2 removeCol">
                  <Button
                    onClick={() => removeFromCart(productId)}
                    className="mx-auto " variant="secondary" size="lg">
                    <FontAwesomeIcon icon={faTrashAlt} />

                  </Button>
                </Col>
              </Row>
              <div style={{ listStyle: "none" }}>
              </div>
            </div>
          )
        }
        )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
  plusFromCart: plusFromCart,
  minusFromCart: minusFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
