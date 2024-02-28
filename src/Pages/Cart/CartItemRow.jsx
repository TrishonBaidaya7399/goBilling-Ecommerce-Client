import axios from "axios";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const CartItemRow = ({ item }) => {
  // console.log(item);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to remove?",
      text: "You will not able to retrieve it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("Delete itemId req: ", id);
          axios.delete(`http://localhost:5000/cart/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Can not Delete!",
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="flex items-center gap-1 text-gray-500 mb-[-2px]">
      <div className="editIcon">
        <FiEdit className="text-xl"/>
      </div>
      <div className="details grid grid-cols-4 rounded-sm w-full p-2 border-2 border-gray-500">
        <div className="ProductName">{item?.name}</div>
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
      <button className="editIcon" onClick={()=>handleDelete(item?._id)}>
      <RiDeleteBinLine className="text-red-500 text-xl"/>
      </button>
    </div>
  );
};

CartItemRow.propTypes = {
  item: PropTypes.object,
};

export default CartItemRow;
