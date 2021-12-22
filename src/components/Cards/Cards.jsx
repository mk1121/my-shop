import { Button, Card, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../../state/index"
const Cards = (props) => {
  const item = props.product;
 const count = useSelector(state => state.count)
 const dispatch = useDispatch()
const {increment,decrement} = bindActionCreators(actionCreators,dispatch)
  return (

    <>
      <Col> 
<Card>
    <Card.Img className="card-image" variant="top" src={item.image} />
    <Card.Body>
      <Card.Title className="cart-title" style={{height:"48px"}}>{item.title}</Card.Title>
      <Card.Text>
       ${item.price} 
      </Card.Text>
      <Card.Text className="card-quantity ">
       Quantity <Button variant="secondary" onClick={() => {if(count === 0){return count;} else{decrement(1)}}}>-</Button>{' '} <span className="cardCount mx-2" style={{cursor:"default"}} >{count}</span> <Button variant="secondary"  onClick={() =>{increment(1)}}>+</Button>{' '}
                       </Card.Text >
     <Card.Text><Button variant="secondary" size="lg" className="card-button">
   Add to Cart 
  </Button>
            </Card.Text>

    </Card.Body>
  </Card>  

  </Col>   
      </>

  )
}

export default Cards
