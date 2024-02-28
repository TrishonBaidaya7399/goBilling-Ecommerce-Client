import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import CartPage from "../Pages/Cart/CartPage";
import { useState } from "react";

const Main = () => {
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className="flex flex-col lg:flex-row w-full">

      <div className={`${openCart ? "lg:w-2/5 w-full cartItems pb-6 overflow-auto p-2" : "lg:w-2/5 w-full cartItems p-2"}`}>
        <Navbar openCart={openCart} setOpenCart={setOpenCart}/>
        <CartPage openCart={openCart}/>
      </div>

      <div className="lg:w-3/5 w-full main pb-6 overflow-auto bg-[#b8b8ff]/30 border-2 border-gray-300">
        <Outlet />
      </div>

    </div>
  );
};

export default Main;
