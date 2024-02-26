import { PiUserCircleFill } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdOutlineAddCircleOutline } from "react-icons/md";
import { Input } from "@material-tailwind/react";

const AddNewCustomer = () => {
  return (
    <div className="custom-bg-color custom-text-color px-4 py-2 text-xl flex justify-between items-center rounded-lg md:my-3">
      <div className="user flex items-center gap-1">
        <p className="icon">
          <PiUserCircleFill className="text-2xl" />
        </p>
        <p>Steve Jobs</p>
      </div>
      <div className="addNew">
        <p>
          <MdOutlineAddCircleOutline
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-2xl"
          />
        </p>
      </div>
      {/* Add Customer modal */}
      <dialog id="my_modal_3" className="modal text-gray-800">
        <div className="modal-box py-4 px-12">
          <div className="flex mb-3">
            <div className="w-1/4 absolute left-2 top-0">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="absolute left-2 top-2">
                  <MdKeyboardArrowLeft className="text-6xl" />
                </button>
              </form>
            </div>
            <div className="text-center w-full">
              <h3 className="font-bold text-2xl text-center">
                Add New Customer
              </h3>
            </div>
          </div>
          <form>
            <div className="py-2">
              <Input
                className=""
                type="text"
                name="name"
                variant="standard"
                label="Name"
                placeholder="Name"
              />
            </div>
            <div className="py-2">
              <Input
                className=""
                type="email"
                name="email"
                variant="standard"
                label="Email"
                placeholder="Email"
              />
            </div>
            <div className="py-2">
              <Input
                className=""
                type="text"
                name="phone"
                variant="standard"
                label="Phone"
                placeholder="Phone"
              />
            </div>
            <div className="py-2">
              <Input
                className=""
                type="text"
                name="currency"
                variant="standard"
                label="Currency"
                placeholder="Currency"
              />
            </div>
            <div className="py-2">
              <Input
                className=""
                type="text"
                name="tax_id"
                variant="standard"
                label="TAX ID"
                placeholder="TAX ID"
              />
            </div>
            <div className="py-2 mb-2">
              <p className="text-blue-700 font-semibold text-lg">
                + Add More Details
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="mb-4 py-2 text-center w-full rounded-sm bg-blue-700 text-white font-bold text-xl"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddNewCustomer;
