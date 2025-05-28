import React from "react";
import Logo from "../assets/logo.png";
import {
  FaBoxOpen,
  FaCreditCard,
  FaGift,
  FaHeart,
  FaSearch,
  FaUser,
  FaBell,
  FaHeadset,
  FaBullhorn,
  FaDownload,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

const menuItems = [
  { label: "Profile", icon: <FaUser /> },
  { label: "Orders", icon: <FaBoxOpen /> },
  { label: "WishList", icon: <FaHeart /> },
  { label: "Reward", icon: <FaGift /> },
  { label: "Gift Card", icon: <FaCreditCard /> },
];

const otherMenus = [
  { label: "Notification", icon: <FaBell /> },
  { label: "24/7 Customer Care", icon: <FaHeadset /> },
  { label: "Advertise", icon: <FaBullhorn /> },
  { label: "Download App", icon: <FaDownload /> },
];
const Navbar = () => {
 
  return (
    <header className="bg-white shadow sticky top-0 ">
      <nav className="bg-white dark:bg-dark dark:teext-white p-1 px-8 flex justify-between  items-center ">
        <div className="flex gap-3 px-3 items-center ">
          <img src={Logo} alt="ShopEase" className="h-16" />
          <div className="border border-gray-300 bg-blue-100 rounded-md  flex gap-3 p-2 w-[400px] items-center ">
            <FaSearch />
            <input
              type="text"
              placeholder="Search a product, e.g., laptop or mobile"
              className="w-full outline-none bg-transparent text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 border-r p-2 items-center  relative group hover:bg-blue-500 transition-all duration-300 hover:rounded-lg">
            <CgProfile className="text-2xl cursor-pointer" /> Login{" "}
            <MdKeyboardArrowDown />

            {/* Login box appears on hover */}
            <div className="hidden group-hover:block absolute -left-32 top-10 bg-white  shadow shadow-blue-300  w-64">
              <div className="flex justify-between p-2 border-b border-gray-200 items-center">
                <h2>New Customer </h2>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300">
                  Sign Up
                </button>
              </div>
              <div>
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 p-2 hover:bg-gray-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button className="flex gap-2 border-r p-2 items-center ">
            <FaCartShopping className="text-2xl cursor-pointer" /> My Cart
          </button>

          <div className="relative group">
            <CiMenuKebab className="text-2xl cursor-pointer  " />

            <div className=" bg-white  absolute right-2 top-4 shadow shadow-blue-300  w-64 group-hover:block hidden">
              <ul>
                {otherMenus.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
