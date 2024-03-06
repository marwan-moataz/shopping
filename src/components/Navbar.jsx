import React from 'react'
import {Navbar as NavbarBs, Nav, Container, Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import './Navbar.css'


const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart();
return (
    <NavbarBs sticky='top' className='bg-white shadow-sm'>
        <Container>
            <Nav>
                <Nav.Link className='links' to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link className='links' to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link className='links' to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            <div className='logo'>
              <h2><i class="fa-solid fa-shirt"></i> Best Shop</h2>
            </div>
            <Button variant='outline-primary' className='rounded-circle' style={{width:"3rem", height:"3rem", position:"relative"}} onClick={openCart} >
            <i className="fa-solid fa-cart-shopping"></i>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
            </Button>
        </Container>
    </NavbarBs>
)
}

export default Navbar;