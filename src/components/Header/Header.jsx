import React from "react"
import {   Container,    Nav,    Navbar, Offcanvas } from "react-bootstrap"
import Cart from "../Cart/Cart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "./Header.css" 
import { useSelector } from "react-redux";
const Header = () => {
  const count = useSelector(state => state.count)
  return (

    <>
      <Navbar bg="light" expand={false}>
  <Container >

    <Navbar.Brand href="#">My <span id="shopSpan">Shop</span>
                  </Navbar.Brand>
 <Nav.Link className="ms-auto" href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
 <Nav.Link  href="#product">Product</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
     

                 <Navbar.Toggle aria-controls="offcanvasNavbar">

      
    <span className="me-5">
                     <FontAwesomeIcon icon={faShoppingBag} />
                     <span id="cartNumber">{count}</span>

            </span>
          </Navbar.Toggle>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
                    <Cart/>
                    
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </>
  )
}

export default Header
