import { Carousel, Col, Container, Image, Row} from "react-bootstrap"

const Carossel = () => {
  return (
    <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL +  "/assets/carosel-1.jpg " }
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL +  "/assets/carosel-2.jpg " }
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL +  "/assets/carosel-3.jpg " }
      alt="Third slide"
    />

    <Carousel.Caption>
          </Carousel.Caption>
  </Carousel.Item>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL +  "/assets/carosel-2.jpg " }
      alt="Forth slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
<Container>
  <Row>
    <Col></Col>
    <Col xs={10}>
<Image className="mt-2" src={process.env.PUBLIC_URL +  "/assets/images-1.png " } fluid />

          </Col>
    <Col></Col>
  </Row>
  </Container>
    </>
  )
}

export default Carossel
