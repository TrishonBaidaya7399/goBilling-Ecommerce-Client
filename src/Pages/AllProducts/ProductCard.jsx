import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col border-2 border-gray-300 h-[220px] rounded-sm hover:shadow-lg transition duration-500 ease-out hover:ease-in-out hover:-translate-x-2 hover:-translate-y-2">
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
};

export default ProductCard;
