// import PropTypes from 'prop-types';

import CartItemRow from "./CartItemRow";

const CartItems = () => {
    const cartItems = [
        { "id": 1, "productName": "Widget A", "price": 12.99, "quantity": 1 },
        { "id": 2, "productName": "Gadget B", "price": 29.99, "quantity": 2 },
        { "id": 3, "productName": "Tool C", "price": 9.95, "quantity": 1 },
        { "id": 4, "productName": "Device D", "price": 49.99, "quantity": 1 },
        { "id": 5, "productName": "Accessory E", "price": 5.50, "quantity": 2 },
        { "id": 6, "productName": "Product F", "price": 19.99, "quantity": 3 },
        { "id": 7, "productName": "Item G", "price": 8.75, "quantity": 2 },
        
      ]
      
    return (
        <div className="px-2">
           {cartItems.map((cartItem)=> <CartItemRow key={cartItem.id} item = {cartItem}/>)} 
        </div>
    );
};

CartItems.propTypes = {
    
};

export default CartItems;