// import PropTypes from 'prop-types';
import { BsCashCoin } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { FaMoneyCheck, FaRegMoneyBillAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuHelpingHand } from "react-icons/lu";
import Swal from "sweetalert2";

const Payment = () => {
  const [activeCash, setActiveCash] = useState(false);
  const [activeCard, setActiveCard] = useState(true);
  const [activeAccount, setActiveAccount] = useState(false);
  const [activeCheque, setActiveCheque] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const totalAmount = location.state?.totalAmount || "$ 0.00";
  console.log(totalAmount);
  const handlePay = (e)=> {
e.preventDefault();
Swal.fire({
    position: "center",
    icon: "success",
    title: "Payment Successful",
    showConfirmButton: false,
    timer: 2000
  });
  }
  return (
    <div className="p-4">
      <div className="my-4 border-2 border-gray-400 custom-bg-color bg-opacity-50 rounded-sm flex justify-between items-center p-6">
        <p className="text-xl text-gray-500">Order Amount</p>
        <p className="text-2xl font-bold">$ {totalAmount}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full border-2 border-gray-400 rounded-sm bg-white">
        <div className="w-full md:w-1/3 pt-4 text-gray-600 border-r-2 border-gray-400 flex flex-col">
          <button
            onClick={() => {setActiveCash(true); setActiveCard(false);setActiveAccount(false);setActiveCheque(false)}}
            className={`${
              activeCash
                ? "flex gap-2 px-4 text-lg py-4 items-center custom-bg-color custom-text-color"
                : "flex gap-2 px-4 text-lg py-4 items-center"
            }`}
          >
            <p className="text-2xl">
              <BsCashCoin />
            </p>
            <p>Cash</p>
          </button>
          <button
            onClick={() => {setActiveCash(false); setActiveCard(true);setActiveAccount(false);setActiveCheque(false)}}
            className={`${
              activeCard
                ? "flex gap-2 px-4 text-lg py-4 items-center custom-bg-color custom-text-color"
                : "flex gap-2 px-4 text-lg py-4 items-center"
            }`}
          >
            <p className="text-2xl">
              <GoCreditCard />
            </p>
            <p>Card</p>
          </button>
          <button
            onClick={() => {setActiveCash(false); setActiveCard(false);setActiveAccount(true);setActiveCheque(false)}}
            className={`${
              activeAccount
                ? "flex gap-2 px-4 text-lg py-4 items-center custom-bg-color custom-text-color"
                : "flex gap-2 px-4 text-lg py-4 items-center"
            }`}
          >
            <p className="text-2xl">
              <FiUser />
            </p>
            <p>On Account</p>
          </button>
          <button
            onClick={() => {setActiveCash(false); setActiveCard(false);setActiveAccount(false);setActiveCheque(true)}}
            className={`${
              activeCheque
                ? "flex gap-2 px-4 text-lg py-4 items-center custom-bg-color custom-text-color"
                : "flex gap-2 px-4 text-lg py-4 items-center"
            }`}
          >
            <p className="text-2xl">
              <FaMoneyCheck />
            </p>
            <p>Cheque</p>
          </button>
        </div>
        <div className="w-full md:w-2/3 py-4 text-gray-400 px-4 md:px-12 md:h-[100vh] ">
         <div className=" flex flex-col justify-between">
           <div className="md:h-[80vh]">
           {activeCard && (
            <div className="flex flex-col gap-2">
              <form>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="cardName"
                    variant="standard"
                    label="Card Holder's Name"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="cardNumber"
                    variant="standard"
                    label="Card Number"
                  />
                </div>

                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="cardExpireDate"
                    variant="standard"
                    label="Card Expiry Date"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="cardScreed"
                    variant="standard"
                    label="Card Security Code"
                  />
                </div>
              </form>
            </div>
          )}
          {activeCash && (
            <div className="flex flex-col gap-2">
              <form>
                {/* Customize these input fields for Cash payment */}
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="customerName"
                    variant="standard"
                    label="Customer Name"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="cashAmount"
                    variant="standard"
                    label="Cash Amount"
                  />
                </div>
              </form>
            </div>
          )}
          {activeAccount && (
            <div className="flex flex-col gap-2">
              <form>
                {/* Customize these input fields for On Account payment */}
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="accountName"
                    variant="standard"
                    label="Account Holder's Name"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="accountNumber"
                    variant="standard"
                    label="Account Number"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="customerId"
                    variant="standard"
                    label="Customer ID"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="billingAddress"
                    variant="standard"
                    label="Billing Address"
                  />
                </div>
              </form>
            </div>
          )}
          {activeCheque && (
            <div className="flex flex-col gap-2">
              <form>
                {/* Customize these input fields for Cheque payment */}
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="chequeNumber"
                    variant="standard"
                    label="Cheque Number"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="bankName"
                    variant="standard"
                    label="Bank Name"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="branchName"
                    variant="standard"
                    label="Branch Name"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="accountNumber"
                    variant="standard"
                    label="Account Number"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="chequeNumber"
                    variant="standard"
                    label="Cheque Number"
                  />
                </div>
                <div className="py-2">
                  <Input
                    className=""
                    type="text"
                    name="chequeDate"
                    variant="standard"
                    label="Cheque Date"
                  />
                </div>
              </form>
            </div>
          )}
           </div>
          <div className="actionButtons pt-4 md:pt-0 flex gap-4 w-full">
            <button onClick={()=>navigate("/")} className=" rounded-md flex items-center justify-center gap-1 text-lg w-fit p-3 font-semibold bg-red-500/30 text-red-400 ">
              <p className="text-3xl">
                <IoMdCloseCircleOutline />
              </p>
              <p className="hidden md:block">Cancel</p>
            </button>
            <button onClick={handlePay} className=" rounded-md flex items-center justify-center gap-1 text-lg w-full p-3 font-semibold bg-blue-600 text-white">
              <p className="text-3xl relative">
                <LuHelpingHand />
                <FaRegMoneyBillAlt className="text-sm absolute -top-1 right-1" />
              </p>
              <p className="hidden md:block">Complete Payment</p>
            </button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;
