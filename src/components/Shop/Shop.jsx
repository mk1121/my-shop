import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Shop.css"
import Cards from "../Cards/Cards"
import Catagory from "../Catagory/Catagory"

const Shop = (props) => {
  const {products} = props
    const [product,setProduct] = useState([]);
  // api fetch
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])

 
console.log(product)
console.log(products)
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
<Row>
  <Col>
    
      <Catagory/>          </Col>
        </Row>

     </Container>
      
    </>
  )
}

export default Shop
