import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import "./Shop.css"
import Cards from "../Cards/Cards"

const Shop = () => {
    let [product,setProduct] = useState([]);
  // api fetch
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])
   let [count,setCount] = useState(0);


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
console.log(arr);


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
              product && flashSale.map((item) => 
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
       Quantity <Button variant="secondary">-</Button>{' '} <span className="cardCount">{count}</span> <Button variant="secondary" onClick={() => setCount(count + 1)}>+</Button>{' '}
                       </Card.Text >
     <Card.Text><Button variant="secondary" size="lg" className="card-button">
   Add to Cart 
  </Button> </Card.Text>
    </Card.Body>
  </Card>  

  </Col>
                </>           
          )
        
  ))}

        </Row>


          <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
              product && flashSale.map((item) => 
 <>
                <Cards
                  key={item.id}
                  product={item}
                         
                  />
                </>           

          )
        
  ))}

        </Row>


     </Container>
      
    </>
  )
}

export default Shop
