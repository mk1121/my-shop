import React from "react"
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import Cart from "../Cart/Cart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css"
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux"
const Header = ({ cart, total }) => {
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container >
          <Navbar.Brand href="#">My <span id="shopSpan">Shop</span>
          </Navbar.Brand>
          <Nav.Link className="ms-auto" href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <span className="me-5">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span id="cartNumber">{cart.length}</span>
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
              <Cart
              />
              <div className="total">

                <h2 className="">total: <span>
                  ${total.toFixed(2)}
                </span></h2>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total
  }
}

export default connect(mapStateToProps)(Header);

