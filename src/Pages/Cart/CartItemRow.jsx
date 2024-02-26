import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItemRow = ({ item }) => {
  return (
    <div className="flex items-center gap-1 text-gray-500 mb-[-2px]">
      <div className="editIcon">
        <FiEdit className="text-xl"/>
      </div>
      <div className="details grid grid-cols-4 rounded-sm w-full p-2 border-2 border-gray-500">
        <div className="ProductName">{item?.productName}</div>
        <div className="price">${item?.price}</div>
        <div className="quantity flex gap-1 items-center">
          <MdAddCircle />
          {item?.quantity}
          <MdRemoveCircle />
        </div>
        <div className="totalPrice flex gap-1">
          ${item?.quantity * item.price}
        </div>
      </div>
      <div className="editIcon">
      <RiDeleteBinLine className="text-red-500 text-xl"/>
      </div>
    </div>
  );
};

CartItemRow.propTypes = {
  item: PropTypes.object,
};

export default CartItemRow;
