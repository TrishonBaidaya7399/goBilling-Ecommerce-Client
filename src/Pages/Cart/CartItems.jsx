import PropTypes from 'prop-types';


import { useEffect, useState } from "react";
import CartItemRow from "./CartItemRow";
import axios from 'axios';

const CartItems = ({setSubTotal, setProducts}) => {
  const [cartItems, setCartItems] = useState([])
  
  useEffect(() => {
    // Fetch cart items from the server
    axios.get("https://go-billing-ecommerce-server.vercel.app/cart")
      .then(response => {
        // Assuming the response.data is an array of cart items
        setCartItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, []);
      setProducts(cartItems.length);
       // Calculate the total price
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  
  // Update the total when the component mounts
  useEffect(() => {
    setSubTotal(calculateTotal());
  }, [cartItems]);
      
    return (
        <div className="px-2 pt-4 md:pt-0">
           {cartItems.map((cartItem)=> <CartItemRow key={cartItem._id} item = {cartItem}/>)} 
        </div>
    );
};

CartItems.propTypes = {
    setSubTotal: PropTypes.number,
    setProducts: PropTypes.number
};

export default CartItems;