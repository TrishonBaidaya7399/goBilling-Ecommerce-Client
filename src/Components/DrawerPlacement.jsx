import PropTypes from 'prop-types';
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from 'react';

export function DrawerPlacement({ placement, open, onClose }) {
    const [drawerSize, setDrawerSize] = useState(getDrawerSize);

    function getDrawerSize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        return 270;
      } else {
        return 500;
      }
    }
  
    useEffect(() => {
      function handleResize() {
        setDrawerSize(getDrawerSize());
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <Drawer
      placement={placement}
      open={open}
      size={drawerSize}
      onClose={onClose}
      className={`p-4 ${open ? 'w-[500px] ' : 'w-0'}`}
    >
      <div className="mb-6 ">
      
      <IconButton
                variant="text"
                color="blue-gray"
                className={`${open ? `-ml-[60px] text-base-200` : "hidden"}`}
                onClick={onClose}
              >
                <RxCross1 className="text-xl" />
              </IconButton>
        <Typography variant="h5" color="blue-gray" className='text-2xl text-center'>
         Categories
        </Typography>
      </div>
      <div className="flex gap-2 flex-wrap h-[80vh] md:h-fit overflow-y-auto">
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-white border-blue-400 border-2 rounded-md p-2 md:px-3 md:py-2 text-blue-500 font-semibold"
                : "bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold"
            }
          >
            All Categories
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Home & Lifestyle
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Men Fashions
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Electronics
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Toys
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Woman Fashions
          </NavLink>
          <NavLink
            to="/"
            className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold"
          >
            All Categories
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Home & Lifestyle
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Men Fashions
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Electronics
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Toys
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Woman Fashions
          </NavLink>
          <NavLink
            to="/"
            className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold"
          >
            All Categories
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Home & Lifestyle
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Men Fashions
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Electronics
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Toys
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-2 md:px-3 md:py-2 text-gray-500 font-semibold">
            Woman Fashions
          </NavLink>
      </div>
    </Drawer>
  );
}
DrawerPlacement.propTypes = {
    placement:PropTypes.string, 
    open: PropTypes.bool, 
    onClose: PropTypes.func
};
