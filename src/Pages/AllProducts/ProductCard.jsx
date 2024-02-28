import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const handleAddToCart = (e)=>{
e.preventDefault();
Swal.fire({
  title: "Add to cart?",
  text: "You want be add this product to the cart",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, add it!"
}).then((result) => {
  if (result.isConfirmed) {
    const cartItem = {
      productId: product._id,
      // email: user.email,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1
    };
    console.log(cartItem);
    axios.post(`http://localhost:5000/cart`, cartItem).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        setLoading(false);
        Swal.fire({
          title: "Added to the cart",
          text: "Your product has been successfully added to the cart",
          icon: "success"
        });
         // Reload the window after 2 seconds
         setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
   
  }
});
  }
  return (
    <div onClick={handleAddToCart} className="flex flex-col border-2 border-gray-300 h-[220px] rounded-sm hover:shadow-lg transition duration-500 ease-out hover:ease-in-out hover:-translate-x-2 hover:-translate-y-2">
      <div className="h-[70%] overflow-hidden">
        <img src={product.picture} alt="" className="h-full w-full"/>
      </div>
      <div className="bg-[transparent] px-2 font-semibold text-lg text-gray-700 text-center border-b-2 py-1 border-gray-300">
        <p>${product.price}</p>
      </div>
      <div className="bg-[transparent] px-2 font-semibold text-sm text-gray-500 text-center py-1">
        <p>{product.name}</p>
      </div>
      {loading ? <span className="loading loading-spinner text-info h-12 w-12"></span> : "ADD TO CART"}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  onCartItemAdded:PropTypes.func
};

export default ProductCard;
