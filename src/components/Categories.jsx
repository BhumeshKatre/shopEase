import React from 'react';
import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaCouch,
  FaBlender,
  FaBook,
  FaFootballBall,
  FaHeartbeat,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const mainCategories = [
  {
    icon: <FaTshirt />,
    label: "Fashion",
    link: "/category/fashion",
  },
  {
    icon: <FaMobileAlt />,
    label: "Mobiles",
    link: "/category/mobiles",
  },
  {
    icon: <FaLaptop />,
    label: "Electronics",
    link: "/category/electronics",
  },
  {
    icon: <FaCouch />,
    label: "Home & Furniture",
    link: "/category/home-furniture",
  },
  {
    icon: <FaBlender />,
    label: "Appliances",
    link: "/category/appliances",
  },
  {
    icon: <FaBook />,
    label: "Books",
    link: "/category/books",
  },
  {
    icon: <FaFootballBall />,
    label: "Sports",
    link: "/category/sports",
  },
  {
    icon: <FaHeartbeat />,
    label: "Beauty & Health",
    link: "/category/beauty-health",
  },
];

const Categories = () => {
  return (
    <div
    className='hidden md:block p-4 px-8  w-full   '>
      <div
        className='flex px-8 p-8 rounded-lg  bg-white '>

        <ul
      className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4  px-4 bg-white justify-center">

          {
            mainCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="flex items-center flex-col gap-1 ">
                
                <span
                className='text-3xl font-semibold'>
                  {category.icon}
                </span>
                <div>
                  {category.label}
                </div>

                
                </Link>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Categories;
