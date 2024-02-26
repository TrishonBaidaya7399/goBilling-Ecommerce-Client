import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import CartPage from "../Pages/Cart/CartPage";

const Main = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="cartItems pb-6 h-[120vh] overflow-auto w-[45%] p-2 ">
          <Navbar />
          <CartPage/>
        </div>
        <div className="main pb-6 h-[120vh] overflow-auto bg-[#b8b8ff]/30 w-[55%] absolute top-0 right-0 border-2 border-gray-300">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
