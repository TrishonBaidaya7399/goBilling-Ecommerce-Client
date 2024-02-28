import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const handleAddToCart = async (e) => {
    e.preventDefault();
  
    // Fetch the current cart items
    try {
      const response = await axios.get("https://go-billing-ecommerce-server.vercel.app/cart");
      const cartItems = response.data;
  
      // Check if the product is already in the cart
      const existingProduct = cartItems.find(item => item.productId === product._id);
  
      if (existingProduct) {
        // Product already in the cart, show SweetAlert
        Swal.fire({
          title: "Product Already in Cart",
          text: "This product is already in your cart.",
          icon: "warning"
        });
      } else {
        // Product not in the cart, proceed to add
        Swal.fire({
          title: "Add to cart?",
          text: "You want to add this product to the cart",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, add it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            const cartItem = {
              productId: product._id,
              name: product.name,
              image: product.image,
              price: product.price,
              quantity: 1
            };
  
            // Add the product to the cart
            const response = await axios.post(`https://go-billing-ecommerce-server.vercel.app/cart`, cartItem);
            console.log(response.data);
  
            if (response.data.insertedId) {
              setLoading(false);
  
              // Reload the window after 2 seconds
              setTimeout(() => {
                window.location.reload();
              }, 50);
            }
          }
        });
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  
  return (
    <div onClick={handleAddToCart} className="flex flex-col border-2 border-gray-300 h-[220px] rounded-sm hover:shadow-lg transition duration-500 ease-out hover:ease-in-out hover:-translate-x-2 hover:-translate-y-2">
      {loading ? <span className="loading loading-spinner text-info h-12 w-12"></span> : ""}
      <div className="h-[70%] overflow-hidden">
        <img src={product.picture} alt="" className="h-full w-full"/>
      </div>
      <div className="bg-[transparent] px-2 font-semibold text-lg text-gray-700 text-center border-b-2 py-1 border-gray-300">
        <p>${product.price}</p>
      </div>
      <div className="bg-[transparent] px-2 font-semibold text-sm text-gray-500 text-center py-1">
        <p>{product.name}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  onCartItemAdded:PropTypes.func
};

export default ProductCard;
