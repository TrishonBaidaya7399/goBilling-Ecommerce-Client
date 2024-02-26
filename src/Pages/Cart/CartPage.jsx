import PropTypes from 'prop-types';

import AddNewCustomer from "../../Components/AddNewCustomer/AddNewCustomer";
import CartItems from "./CartItems";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiHandGrabbing } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const CartPage = ({openCart}) => {
  return (
    <div className="">
      <AddNewCustomer />
      <div className={`${openCart ? "lg:hidden" : "hidden lg:hidden"}`}>
      <CartItems />
      <div className="lg:ml-auto lg:w-[40%] text-gray-500 text-md mt-6">
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Sub Total</p>
          <p className="text-lg font-bold text-gray-800">$5025.50</p>
        </div>
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>TAX</p>
          <p className="text-lg font-bold text-gray-800">$25.50</p>
        </div>
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Shipping</p>
          <p className="text-lg font-bold text-gray-800">$5.50</p>
        </div>
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p className="custom-text-color font-semibold">Discount on Cart</p>
          <p className="text-lg font-bold text-gray-800">$10.00</p>
        </div>
      </div>
      <div className="flex items-center custom-bg-color custom-text-color px-4 py-2 rounded-md">
        <div className="lg:w-[60%]">
          <p className="font-semibold text-md">Products Count (13)</p>
        </div>
        <div className="flex lg:w-[40%] justify-between items-center text-xl font-bold">
          <div><p>Total</p></div>
          <div><p>$5005.50</p></div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold bg-red-500/30 text-red-400 ">
            <p className="text-3xl"><IoMdCloseCircleOutline /></p>
            <p className="hidden md:block">Cancel</p>
        </div>
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl"><PiHandGrabbing /></p>
            <p className="hidden md:block">Hold</p>
        </div>
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl"><FaHandHoldingUsd /></p>
            <p className="hidden md:block">Discount</p>
        </div>
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl relative"><LuHelpingHand/><FaRegMoneyBillAlt className="text-sm absolute -top-1 right-1"/></p>
            <p className="hidden md:block">Pay</p>
        </div>
      </div>
      </div>
      <div className="hidden lg:block">
      <CartItems />
      <div className="lg:ml-auto lg:w-[40%] text-gray-500 text-md mt-6">
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Sub Total</p>
          <p className="text-lg font-bold text-gray-800">$5025.50</p>
        </div>
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>TAX</p>
          <p className="text-lg font-bold text-gray-800">$25.50</p>
        </div>
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Shipping</p>
          <p className="text-lg font-bold text-gray-800">$5.50</p>
        </div>
        <div className="px-2 border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p className="custom-text-color font-semibold">Discount on Cart</p>
          <p className="text-lg font-bold text-gray-800">$10.00</p>
        </div>
      </div>
      <div className="flex items-center custom-bg-color custom-text-color px-4 py-2 rounded-md">
        <div className="lg:w-[60%]">
          <p className="font-semibold text-md">Products Count (13)</p>
        </div>
        <div className="flex lg:w-[40%] justify-between items-center text-xl font-bold">
          <div><p>Total</p></div>
          <div><p>$5005.50</p></div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold bg-red-500/30 text-red-400 ">
            <p className="text-3xl"><IoMdCloseCircleOutline /></p>
            <p className="hidden md:block">Cancel</p>
        </div>
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl"><PiHandGrabbing /></p>
            <p className="hidden md:block">Hold</p>
        </div>
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl"><FaHandHoldingUsd /></p>
            <p className="hidden md:block">Discount</p>
        </div>
        <div className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl relative"><LuHelpingHand/><FaRegMoneyBillAlt className="text-sm absolute -top-1 right-1"/></p>
            <p className="hidden md:block">Pay</p>
        </div>
      </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  openCart: PropTypes.bool
};

export default CartPage;
