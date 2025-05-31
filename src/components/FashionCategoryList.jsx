import React from 'react';
import footImg from '../assets/foot.png'
import westerImg from '../assets/western.png'
import homeDecorImg from '../assets/Home_Deco.png'
import meansWear from '../assets/meansWear.png'
import beautyImg from '../assets/beauty.png'
import ethnicImg from '../assets/ethnic.png'
import accessoriesImg from '../assets/acces.png'
import { Link } from 'react-router-dom';

const fashionCategories = [
  {
    label: "Ethnic Wear",
    img: ethnicImg,
    link: "/category/ethnic-wear",
  },
  {
    label: "Western Dresses",
    img: westerImg,
    link: "/category/western-dresses",
  },
  {
    label: "Menswear",
    img: meansWear,
    link: "/category/menswear",
  },
  {
    label: "Footwear",
    img: footImg,
    link: "/category/footwear",
  },
  {
    label: "Home Decor",
    img: homeDecorImg,
    link: "/category/home-decor",
  },
  {
    label: "Beauty",
    img: beautyImg,
    link: "/category/beauty",
  },
  {
    label: "Accessories",
    img: accessoriesImg ,
    link: "/category/accessories",
  },
];

const FashionCategoryList = () => {
  return (
    <section className="p-4 ">

     <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-4 p-8 px-4 bg-white">
      {fashionCategories.map((item, idx) => (
        <Link
          key={idx}
          to={item.link}
          className="flex flex-col items-center text-center "
        >
          <div className="w-32 h-32 bg-pink-50 rounded-t-full flex items-center justify-center px-4 mb-2">
            <img src={item.img} alt={item.label} className="h-full object-contain hover:scale-105  transition-transform" />
          </div>
          <span className="text-sm text-gray-700">{item.label}</span>
        </Link>
      ))}
      </div>
    </section>
      );
  };
 
export default FashionCategoryList;
