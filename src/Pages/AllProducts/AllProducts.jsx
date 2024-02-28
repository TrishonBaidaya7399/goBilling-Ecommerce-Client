import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { CircularPagination } from "../../Components/CircularPagination";
import { DrawerPlacement } from "../../Components/DrawerPlacement";

const ITEMS_PER_PAGE = 15;

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);
  //loading part will be implemented after the backend implementation, and will gte the loading state from there
  const isLoading = false;

  useEffect(() => {
    fetch("https://go-billing-ecommerce-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const productsForPage = allProducts.slice(startIndex, endIndex);
    setCurrentProducts(productsForPage);
  }, [currentPage, allProducts]);

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Clear previous products
    setCurrentProducts([]);
  };

  const openRightDrawerHandler = () => {
    setOpenRightDrawer(true);
  };
  return (
    <div className="flex flex-col gap-2 h-[110vh] pb-12">
      {/* Search Bar */}
      <div className="w-full px-4 py-2 flex gap-2 items-center bg-[#F9FAFB] shadow-md">
        <div className="icon">
          <FaSearch className="text-xl text-gray-600" />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Products..."
            className="bg-[transparent] pl-2 text-gray-500 text-lg w-full"
          />
        </div>
      </div>

      {/* Category */}
      <div className="flex items-center">
        <div className="w-full overflow-x-auto flex justify-between mx-3 my-2 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-white border-blue-400 border-2 rounded-md p-1 md:px-3 md:py-2 text-xs md:text-md lg:text-[16px] text-blue-500 font-semibold"
                : "bg-white border-gray-500 border-2 rounded-md p-1 md:px-3 md:py-2 text-xs md:text-md lg:text-[16px] text-gray-500 font-semibold"
            }
          >
            All Categories
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-1 md:px-3 md:py-2 text-xs md:text-md lg:text-[16px] text-gray-500 font-semibold">
            Electronics
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-1 md:px-3 md:py-2 text-xs md:text-md lg:text-[16px] text-gray-500 font-semibold">
            Home & Lifestyle
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-1 md:px-3 md:py-2 text-xs md:text-md lg:text-[16px] text-gray-500 font-semibold">
            Men Fashions
          </NavLink>
          <NavLink className="bg-white border-gray-500 border-2 rounded-md p-1 md:px-3 md:py-2 text-xs md:text-md lg:text-[16px] text-gray-500 font-semibold">
            Woman Fashions
          </NavLink>
        </div>
        <div className="text-gray-700 text-[24px] -ml-2 ">
          <BsThreeDotsVertical onClick={openRightDrawerHandler} />
        </div>
        {/* category drawer */}
      </div>

      {/* Show Products for the current page */}
      {!isLoading ? (
        <div className="pb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mx-3">
            {currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <CircularPagination
              totalPages={totalPages}
              activePage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner text-info h-[70px] w-[70px] mx-auto my-[100px]"></span>
      )}

      {/* Right-side Drawer */}
      <DrawerPlacement
        placement="right"
        open={openRightDrawer}
        onClose={() => setOpenRightDrawer(false)}
        
      />
    </div>
  );
};

export default AllProducts;
