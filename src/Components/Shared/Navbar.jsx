import React from "react";
import PropTypes from "prop-types";

import { MdOutlineDashboard, MdOutlineShoppingCart } from "react-icons/md";
import { IoLocationOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/goBilling.png";
import SettingsModal from "../SettingsModal";

export default function Navbar({ openCart, setOpenCart }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className=" flex justify-between items-center">
      <div className="menu">
        <React.Fragment>
          <button className="bg-none text-3xl" onClick={openDrawer}>
            <IoMdMenu />
          </button>
          <Drawer open={open} size={290} onClose={closeDrawer}>
            <div className="flex items-center justify-between bg-gray-300">
              <div className="logo w-[70%] mx-auto py-3">
                <img src={logo} alt="goBilling" className="w-full" />
              </div>
              <IconButton
                variant="text"
                color="blue-gray"
                className={`${open ? `-mr-12 text-base-200` : "hidden"}`}
                onClick={closeDrawer}
              >
                <RxCross1 className="text-xl" />
              </IconButton>
            </div>
            <Typography color="gray" className="bg-gray-300 p-4 font-normal">
              <p className="text-gray-600 text-md">Location:</p>
              <p className="text-gray-700 lg:text-xl font-semibold">
                Los Angeles, California
              </p>
            </Typography>
            <div className="flex">
              {/* <---------sidebar content----------> */}
              <ul className="flex flex-col w-full">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-[#b8b8ff]/30 text-blue-800" : "text-gray-700"
                  }
                >
                  <li className="w-full flex flex-row items-center  lg:text-xl">
                    <MdOutlineDashboard className="text-5xl lg:text-6xl -mr-3" />
                    Dashboard
                  </li>
                </NavLink>
                <NavLink
                  to="/location"
                  className={({ isActive }) =>
                    isActive ? "bg-[#b8b8ff]/30 text-blue-800" : "text-gray-700"
                  }
                >
                  <li className="w-full flex flex-row items-center  lg:text-xl">
                    <IoLocationOutline className="text-5xl lg:text-6xl -mr-3" />
                    Location
                  </li>
                </NavLink>
                <NavLink
                  to="/postInvoices"
                  className={({ isActive }) =>
                    isActive ? "bg-[#b8b8ff]/30 text-blue-800" : "text-gray-700"
                  }
                >
                  <li className="w-full flex flex-row items-center  lg:text-xl">
                    <LiaFileInvoiceDollarSolid className="text-5xl lg:text-6xl -mr-3" />
                    POS Invoices
                  </li>
                </NavLink>

                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <li className="w-full flex flex-row items-center text-gray-700 lg:text-xl">
                    <IoSettingsOutline className="text-5xl lg:text-6xl -mr-3" />
                    Settings
                  </li>
                </button>

                <button className="border-2 border-gray-300 mx-4 lg:text-xl text-gray-500 font-semibold text-center py-2 rounded-sm absolute bottom-2 w-[90%]">
                  Logout
                </button>
              </ul>
            </div>
            <SettingsModal />
          </Drawer>
        </React.Fragment>
      </div>
      <div>
        <NavLink
          to=""
          className="flex items-center gap-1 note custom-bg-color text-center custom-text-color px-3 py-2 rounded-md text-md"
        >
          <FaRegEdit />
          <span className="hidden md:block">Note</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to=""
          className="flex items-center gap-1 note custom-bg-color text-center custom-text-color px-3 py-2 rounded-md text-md"
        >
          <FaShuttleVan />
          <span className="hidden md:block">Shopping</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to=""
          className="flex items-center gap-1 note custom-bg-color text-center custom-text-color px-3 py-2 rounded-md text-md"
        >
          <AiOutlineFieldTime />
          <span className="hidden md:block">Hold Orders</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to=""
          className="flex items-center gap-1 note custom-bg-color text-center custom-text-color px-3 py-2 rounded-md text-md"
        >
          <MdOutlineAddCircle className="" />
          <span className="hidden md:block">New Item</span>
        </NavLink>
      </div>
      <button
        onClick={() => setOpenCart(!openCart)}
        className=" lg:hidden flex items-center gap-1 note custom-bg-color text-center custom-text-color px-3 py-2 rounded-md text-md"
      >
        <MdOutlineShoppingCart />
        <span className="hidden md:block">Cart</span>
      </button>
    </div>
  );
}

Navbar.propTypes = {
  openCart: PropTypes.bool,
  setOpenCart: PropTypes.bool,
};
