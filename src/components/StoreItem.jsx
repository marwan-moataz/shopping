import React from 'react';
import {Card, Button} from "react-bootstrap";
import formatCurrency from './formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

const StoreItem = ({id, price, name, imgUrl}) => {
    const {getItemsQuantity, removeItemFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
    const quantity = getItemsQuantity(id);
  return (
    <Card>
        <Card.Img src={imgUrl} variant='top' style={{height:"200px", objectFit:'cover'}} />
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline'>
                <span className='fs-2'>{name}</span>
                <span className='text-muted me-2'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
                {quantity ===0? <Button className='w-100' onClick={() => increaseCartQuantity(id)}>Add to Cart</Button> : 
                <div className='d-flex align-items-center flex-column' style={{gap:"0.5rem"}}>
                    <div className='d-flex justify-content-center' style={{gap:"0.5rem"}}>
                        <Button onClick={()=> decreaseCartQuantity(id)}>-</Button> <span className='fs-3'>{quantity} in cart</span> <Button className='m' onClick={() => increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button className='bg-danger' onClick={() => removeItemFromCart(id)}>Remove</Button>
                </div>
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem