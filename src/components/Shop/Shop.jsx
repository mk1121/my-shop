import { Col, Container, Row } from "react-bootstrap"
import "./Shop.css"
import Cards from "../Cards/Cards"
import { addToCart } from "../../Redux/Action/cardAction"
import { connect } from "react-redux"
import useCustomHook from "./../../useCustomHook/useCustomHook"
const Shop = (props) => {
const {products,addToCart} = props;


  products.product = useCustomHook(); /* make a custom hook & set It here */

const  product = products.product;   /* distructuring  */
  
  function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }

  return array;
}

// Usage of shuffle
  let arr = shuffleArray(product);

// 10 array select
      
 let  flashSale = arr.slice(0,4);

  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1>
            FlashSale
            </h1>
          </Col>
        </Row>
       
          <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
              flashSale.map((item) => 
            {
              return( 
                <>
                <Cards
                  key={item.id}
                  ps={item}
                    addToCart ={addToCart}                />
                </>           
          )
              }

  )))}
        </Row>
     </Container>
    </>
  )
}
const mapStateToProps = state =>{
    return {
    products: state.products
  }
}
const mapDispatchToProps = {
  addToCart: addToCart
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop);

