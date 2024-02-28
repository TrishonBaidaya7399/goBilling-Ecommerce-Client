import PropTypes from 'prop-types';

import AddNewCustomer from "../../Components/AddNewCustomer/AddNewCustomer";
import CartItems from "./CartItems";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiHandGrabbing } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CartPage = ({openCart}) => {
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [tax, setTax] = useState(0)
  const [products, setProducts] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    const newTax = subTotal * 0.05;
    setTax(newTax);

    // Apply discount (10% of subTotal)
    const newDiscount = subTotal * 0.1;
    setDiscount(newDiscount);
  }, [products]);

  const handlePayment = ()=>{
    const totalAmount = (subTotal + tax + 5.50 - discount).toFixed(2);
    navigate("/payment", {state:{totalAmount}})
  }
  return (
    <div className="">
      <AddNewCustomer />
      <div className={`${openCart ? "lg:hidden" : "hidden lg:hidden"}`}>
      <CartItems setSubTotal={setSubTotal} setProducts={setProducts}/>
      <div className="lg:ml-auto lg:w-[40%] text-gray-500 text-md mt-6">
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Sub Total</p>
          <p className="text-lg font-bold text-gray-800">${subTotal.toFixed(2)}</p>
        </div>
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>TAX</p>
          <p className="text-lg font-bold text-gray-800">${tax.toFixed(2)}</p>
        </div>
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Shipping</p>
          <p className="text-lg font-bold text-gray-800">$5.50</p>
        </div>
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p className="custom-text-color font-semibold">Discount on Cart</p>
          <p className="text-lg font-bold text-gray-800">${discount.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between custom-bg-color custom-text-color px-4 py-2 rounded-md">
        <div className="md:w-[60%]">
          <p className="font-semibold text-md">Products Count ({products})</p>
        </div>
        <div className="flex md:w-[40%] justify-between gap-3 items-center text-xl font-bold">
          <div><p>Total</p></div>
          <p>${(subTotal + tax + 5.50 - discount).toFixed(2)}</p>
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
        <div onClick={handlePayment} className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl relative"><LuHelpingHand/><FaRegMoneyBillAlt className="text-sm absolute -top-1 right-1"/></p>
            <p className="hidden md:block">Pay</p>
        </div>
      </div>
      </div>
      <div className="hidden lg:block">
      <CartItems setSubTotal={setSubTotal} setProducts={setProducts}/>
      <div className="lg:ml-auto lg:w-[40%] text-gray-500 text-md mt-6">
      <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Sub Total</p>
          <p className="text-lg font-bold text-gray-800">${subTotal.toFixed(2)}</p>
        </div>
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>TAX</p>
          <p className="text-lg font-bold text-gray-800">${tax.toFixed(2)}</p>
        </div>
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p>Shipping</p>
          <p className="text-lg font-bold text-gray-800">$5.50</p>
        </div>
        <div className=" border-t-2 py-2 border-gray-500 w-full flex justify-between items-center">
          <p className="custom-text-color font-semibold">Discount on Cart</p>
          <p className="text-lg font-bold text-gray-800">${discount.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between custom-bg-color custom-text-color px-4 py-2 rounded-md ">
      <div className="md:w-[60%]">
          <p className="font-semibold text-md">Products Count ({products})</p>
        </div>
        <div className="flex md:w-[40%] justify-between gap-3 items-center text-xl font-bold">
          <div><p>Total</p></div>
          <p>${(subTotal + tax + 5.50 - discount).toFixed(2)}</p>
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
        <button onClick={handlePayment} className=" rounded-md flex items-center justify-center gap-1 text-xl w-full px-3 py-2 font-semibold custom-bg-color custom-text-color">
            <p className="text-3xl relative"><LuHelpingHand/><FaRegMoneyBillAlt className="text-sm absolute -top-1 right-1"/></p>
            <p className="hidden md:block">Pay</p>
        </button>
      </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  openCart: PropTypes.bool
};

export default CartPage;
