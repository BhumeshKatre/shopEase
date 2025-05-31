import React from "react";
import { Link } from "react-router-dom";
import moniterImg from "../assets/Electronics/moniter.png";
import { IoIosArrowForward } from "react-icons/io";

const CardSection = ({head , products} ) => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between py-4 ">
        <h1 className="text-2xl font-semibold">{head}</h1>
        <button>
          <IoIosArrowForward />
        </button>
      </div>
      <div className=" grid grid-cols-2 gap-4 justify-center   ">
        {products &&
          products.slice(0, 4).map((product, index) => (
            <Link
              key={index}
              // to={}
              className="p-2 block border-gray-200 border-1"
            >
              <div>
                <img
                  className="h-full object-contain hover:scale-105  transition-transform"
                  width={140}
                  src={moniterImg}
                  alt={product.brand}
                />
              </div>
              <p className=" ">{product.brand} </p>
              <p className=" text-green-600 font-semibold ">
                Up to {product.price.discount_percent} %Off
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
const OfferCards = ({ ElectronicsProducts,  FashionCategoryList }) => {
  return (
    <div className="p-4   grid md:grid-cols-3 gap-4 ">
      <CardSection head="Electronic Top Deals" products={ElectronicsProducts} />
      <CardSection head="Fashion Top Deals" products={FashionCategoryList} />
      <CardSection head="Electronic Top Deals" products={ElectronicsProducts} />
    </div>
  );
};

export default OfferCards;
