import "./Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Row,Col,Button } from "react-bootstrap"
import { connect } from "react-redux"
import {removeFromCart} from "../../Redux/Action/cardAction"
const Cart = (props) => {
  const {cart, removeFromCart} = props
  console.log(cart)
  return (
    <div>  
     {cart.map((pd) =>
      <>
          <div key={pd.productId}>
         <Row key ={pd.cartId}>
              <Col className="col-2">
              <img src={pd.image} alt={" "} style={{width:"50px"}} />
              </Col>
         <Col className="col-8">
                <p id="cart-title" style={{fontWeight: 700}}>{pd.titles}</p>
           <p>price: ${pd.price}</p>
             <p>Quantity: {pd.quantity}</p>
          
          </Col>
         <Col className="col-2">
           <Button
              onClick={()=> removeFromCart(pd.productId)}
              className="mx-auto " variant="secondary" size="lg">
                <FontAwesomeIcon icon={faTrashAlt} />

          </Button>
          </Col>
        </Row>
       <div style={{listStyle:"none"}}>
                   </div>
        </div> </>)} 
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
